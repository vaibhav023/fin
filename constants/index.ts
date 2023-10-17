interface NavbarLink {
  route: string;
  label: string;
}

interface SidebarLink {
  route: string;
  label: string;
  image: string;
  selectedimage: string;
}

export const NavbarLinks: NavbarLink[] = [
  { route: "/", label: "Home" },
  { route: "/about", label: "About" },
  { route: "/services", label: "Services" },
  { route: "/process", label: "Process" },
];

export const SidebarLinks: SidebarLink[] = [
  {
    route: "/base_details",
    label: "Base Details",
    image: "/icons/window.svg",
    selectedimage: "/icons/Icon.svg",
  },
  {
    route: "/transactions",
    label: "Transactions",
    image: "/icons/transaction.svg",
    selectedimage: "/icons/transaction-color.svg",
  },
  {
    route: "/settlements",
    label: "Settlements",
    image: "/icons/settlements.svg",
    selectedimage: "/icons/settlements2.svg",
  },
  {
    route: "/upi_details",
    label: "UPI Details",
    image: "/icons/time-clock.svg",
    selectedimage: "/icons/Time_is_Money.svg",
  },
  {
    route: "/report",
    label: "Reports",
    image: "/icons/stats.svg",
    selectedimage: "/icons/reports2.svg.svg",
  },
  {
    route: "/details",
    label: "Merchant Details",
    image: "/icons/window.svg",
    selectedimage: "/icons/icon.svg",
  },
];
