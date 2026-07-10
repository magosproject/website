import Link from "next/link";
import {
  BookOpen,
  CheckIcon,
  GitMerge,
  Github,
  KeyRound,
  Layers,
  PlaySquare,
  Settings2,
  ShieldCheckIcon,
} from "lucide-react";
import HeroAnimation from "@/components/HeroAnimation";

export default function Home() {
  return (
    <div className="flex sm:min-h-[87.5vh] min-h-[82vh] flex-col sm:items-center justify-center text-center sm:py-8 py-14">
      {/* Hero Section */}
      <section className="py-12 md:py-24 px-4 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 text-balance max-w-4xl mx-auto">
            A Kubernetes operator for Terraform
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
            Magos runs Terraform inside Kubernetes. The controller spawns a
            short-lived pod for every plan and every apply, then tears it
            down. No shared runner, no long-lived shell, no company behind
            it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/magosproject"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Built by folks who worked on Terraform, Atlantis, Kubernetes.
          </p>

          {/* Featured Visual Frame / Animation */}
          <HeroAnimation />
        </div>
      </section>

      {/* Extends Kubernetes API Section */}
      <section className="py-16 px-4 w-full bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance max-w-3xl mx-auto">
              Extends the Kubernetes API. Manage Terraform declaratively.
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto text-pretty">
              Four custom resources. Manage them like any other Kubernetes
              manifest; the controllers reconcile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 text-left">
            <Link
              href="/docs/concepts/workspaces"
              className="group p-8 border rounded-xl bg-background hover:border-primary/50 transition-colors shadow-sm block"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <PlaySquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                Workspace
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Points at a Git source and a Terraform version. The
                controller spawns one short-lived pod per plan and per apply,
                fully isolated from every other Workspace.
              </p>
            </Link>

            <Link
              href="/docs/concepts/projects"
              className="group p-8 border rounded-xl bg-background hover:border-primary/50 transition-colors shadow-sm block"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                Project
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Groups related Workspaces, sets shared variables, declares
                default policy gates. Members inherit unless they explicitly
                override.
              </p>
            </Link>

            <Link
              href="/docs/concepts/rollouts"
              className="group p-8 border rounded-xl bg-background hover:border-primary/50 transition-colors shadow-sm block"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <GitMerge className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                Rollout
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Executes Workspaces in sequential, parallel, or layered
                order. Promotion across environments is a CR field, not a
                multi-stage pipeline.
              </p>
            </Link>

            <Link
              href="/docs/concepts/variable-sets"
              className="group p-8 border rounded-xl bg-background hover:border-primary/50 transition-colors shadow-sm block"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Settings2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                VariableSet
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Wires Kubernetes Secrets and ConfigMaps into Terraform
                inputs through{" "}
                <code className="font-mono text-sm">SecretKeySelector</code>.
                Values never touch the controller.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Runs Section */}
      <section className="py-24 px-4 w-full">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 text-left">
            <div className="flex-1">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Three properties we will not trade away.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">
                Every decision in Magos has to preserve them. Compromise one
                and the feature does not ship. Opinionated software, written
                by engineers with backgrounds at HashiCorp, Microsoft,
                GitHub, AWS, and Google who have run Terraform at scale.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-pretty">
                    <strong className="text-foreground">
                      Per-Workspace pod isolation.
                    </strong>{" "}
                    Every plan and every apply runs in its own short-lived
                    pod with its own PVC. Two Workspaces never see each
                    other&apos;s plan, credentials, or providers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-pretty">
                    <strong className="text-foreground">
                      Policy gates on plan output.
                    </strong>{" "}
                    Magos uses Kyverno{" "}
                    <code className="font-mono text-sm">ValidatingPolicy</code>
                    . The plan pod evaluates every matching policy against
                    the plan JSON. A violation blocks apply before any cloud
                    API has been touched.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-pretty">
                    <strong className="text-foreground">
                      Bring your own backend.
                    </strong>{" "}
                    State lives wherever your module&apos;s{" "}
                    <code className="font-mono text-sm">backend</code> block
                    puts it. S3, GCS, Postgres, or whatever your team already
                    runs. Magos does not store, lock, or proxy state.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 px-4 w-full bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance max-w-3xl mx-auto">
              Build the next version of how Terraform runs.
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto text-pretty">
              Apache-2.0, built in the open. Read the code, weigh in on RFCs,
              ship a PR. The contributors are the project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Link
              href="/docs/getting-started"
              className="group p-8 border rounded-xl bg-background hover:border-primary/50 transition-colors shadow-sm block"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                Read the docs
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Install the operator. Apply your first Workspace. Watch a
                real plan run inside a pod.
              </p>
            </Link>

            <a
              href="https://github.com/magosproject/magos"
              target="_blank"
              rel="noreferrer"
              className="group p-8 border rounded-xl bg-background hover:border-primary/50 transition-colors shadow-sm block"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                Star on GitHub
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Read the code, file an issue, follow the release notes.
              </p>
            </a>

            <a
              href="https://github.com/magosproject/magos/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
              className="group p-8 border rounded-xl bg-background hover:border-primary/50 transition-colors shadow-sm block"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <KeyRound className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                Contribute
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Repo layout, codegen pipeline, and a single make target to
                bring up the operator on Kind.
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
