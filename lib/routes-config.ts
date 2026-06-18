// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  {
    title: "Introduction",
    href: "/introduction",
  },
  {
    title: "Getting Started",
    href: "/getting-started",
    items: [
      {
        title: "Why Magos?",
        href: "/why-magos",
      },
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Quickstart",
        href: "/quickstart",
      },
    ],
  },
  {
    title: "Concepts",
    href: "/concepts",
    items: [
      {
        title: "Architecture",
        href: "/architecture",
      },
      {
        title: "Projects",
        href: "/projects",
      },
      {
        title: "Workspaces",
        href: "/workspaces",
      },
      {
        title: "Variable Sets",
        href: "/variable-sets",
      },
      {
        title: "Rollouts",
        href: "/rollouts",
      },
    ],
  },
  {
    title: "Guides",
    href: "/guides",
    items: [
      {
        title: "Connecting Git Repositories",
        href: "/git",
      },
      {
        title: "Policy Validation",
        href: "/policies",
      },
      {
        title: "OIDC Login",
        href: "/oidc-login",
        items: [
          {
            title: "Google Identity Platform",
            href: "/google-identity-platform",
          },
        ],
      },
      {
        title: "Rollout Strategies",
        href: "/rollout-strategies",
      },
    ],
  },
  {
    title: "Operations",
    href: "/operations",
    items: [
      {
        title: "Authentication",
        href: "/authentication",
      },
      {
        title: "Security and RBAC",
        href: "/security",
      },
      {
        title: "Observability",
        href: "/observability",
      },
    ],
  },
  {
    title: "Reference",
    href: "/reference",
    items: [
      {
        title: "API Reference",
        href: "/api",
      },
      {
        title: "Annotations",
        href: "/annotations",
      },
    ],
  },
  {
    title: "Contributing",
    href: "/contributing",
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
