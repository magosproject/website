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
        title: "Your first Workspace",
        href: "/first-workspace",
      },
    ],
  },
  {
    title: "Magos",
    href: "/magos",
    items: [
      {
        title: "Projects",
        href: "/projects",
      },
      {
        title: "Workspaces",
        href: "/workspaces",
      },
      {
        title: "Rollouts",
        href: "/rollouts",
      },
      {
        title: "Variable Sets",
        href: "/variablesets",
      },
      {
        title: "Contributing",
        href: "/contributing",
      },
    ],
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
