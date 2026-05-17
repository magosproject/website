# Tool versions are pinned to give deterministic doc builds.
CRD_REF_DOCS_VERSION ?= v0.3.0

# The Magos controller repo. The reference generator reads CRD Go types
# from this checkout. Override if your layout differs.
MAGOS_DIR ?= ../magos

LOCALBIN ?= $(shell pwd)/bin
$(LOCALBIN):
	mkdir -p $(LOCALBIN)

CRD_REF_DOCS ?= $(LOCALBIN)/crd-ref-docs

API_REFERENCE_CONFIG := hack/crd-ref-docs-config.yaml
API_REFERENCE_OUT    := contents/docs/reference/api/index.mdx

.PHONY: help
help: ## Display this help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_0-9-]+:.*?##/ { printf "  \033[36m%-25s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

.PHONY: dev
dev: ## Run the Next.js dev server.
	npm run dev

.PHONY: build
build: ## Build the production site (also what CI runs).
	npm run build

.PHONY: lint
lint: ## Run the Next.js linter.
	npm run lint

.PHONY: generate-api-reference
generate-api-reference: crd-ref-docs ## Generate the API reference MDX page from the Go CRD types in $(MAGOS_DIR).
	@if [ ! -d "$(MAGOS_DIR)/types/magosproject" ]; then \
		echo "Magos repo not found at $(MAGOS_DIR); set MAGOS_DIR to point at your checkout."; \
		exit 1; \
	fi
	@mkdir -p $(dir $(API_REFERENCE_OUT))
	@$(CRD_REF_DOCS) \
		--source-path=$(MAGOS_DIR)/types/magosproject \
		--config=$(API_REFERENCE_CONFIG) \
		--renderer=markdown \
		--output-path=$(LOCALBIN)/api-reference.md
	@# Reduce the page to just the four CRD Kinds. crd-ref-docs emits a
	@# section for every reachable type (specs, enums, statuses, ...);
	@# the operator-facing reference only wants the Kinds, and the
	@# post-processor unlinks any markdown reference pointing at a
	@# dropped section so we do not ship broken anchors.
	@python3 hack/post-process-api-ref.py \
		< $(LOCALBIN)/api-reference.md > $(LOCALBIN)/api-reference.filtered
	@# Escape placeholder syntax like TF_VAR_<name> so MDX does not parse
	@# it as an unclosed JSX tag. Match <word> only (letters, digits,
	@# underscores, dashes); this preserves real JSX self-closing tags
	@# like <br /> that the markdown renderer emits inside table cells.
	@sed -E 's/<([a-zA-Z_][a-zA-Z0-9_-]*)>/\\<\1\\>/g' \
		$(LOCALBIN)/api-reference.filtered > $(LOCALBIN)/api-reference.mdx-body
	@{ \
		echo "---"; \
		echo "title: API Reference"; \
		echo "description: Auto-generated reference for every Magos custom resource. Do not edit by hand; regenerate with 'make generate-api-reference' in the website repo."; \
		echo "---"; \
		echo ""; \
		cat $(LOCALBIN)/api-reference.mdx-body; \
	} > $(API_REFERENCE_OUT)
	@echo "Wrote $(API_REFERENCE_OUT)"

.PHONY: crd-ref-docs
crd-ref-docs: $(CRD_REF_DOCS) ## Download crd-ref-docs locally if necessary.
$(CRD_REF_DOCS): $(LOCALBIN)
	@[ -f "$(CRD_REF_DOCS)-$(CRD_REF_DOCS_VERSION)" ] && [ "$$(readlink -- "$(CRD_REF_DOCS)" 2>/dev/null)" = "$(CRD_REF_DOCS)-$(CRD_REF_DOCS_VERSION)" ] || { \
		set -e; \
		echo "Downloading github.com/elastic/crd-ref-docs@$(CRD_REF_DOCS_VERSION)"; \
		rm -f $(CRD_REF_DOCS); \
		GOBIN=$(LOCALBIN) go install github.com/elastic/crd-ref-docs@$(CRD_REF_DOCS_VERSION); \
		mv $(CRD_REF_DOCS) $(CRD_REF_DOCS)-$(CRD_REF_DOCS_VERSION); \
	}
	@ln -sf $$(realpath $(CRD_REF_DOCS)-$(CRD_REF_DOCS_VERSION)) $(CRD_REF_DOCS)
