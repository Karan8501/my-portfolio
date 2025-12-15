export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarConfig {
  title: string;
  items: NavItem[];
}

export const navbarConfig: NavbarConfig = {
  title: "My App",
  items: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Blogs", href: "/blogs" },
  ],
};
