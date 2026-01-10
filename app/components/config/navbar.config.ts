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
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Blog", href: "/blog" },
  ],
};
