import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <span className=" dark:text-black">FUA24</span>,
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Blog",
      url: "/blog",
      active: "nested-url",
    },
  ],
};

export const mainNav = [
  {
    name: "Helo_",
    path: "/",
  },
  {
    name: "Project",
    path: "/project",
  },

  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "About",
    path: "/about",
  },
];
