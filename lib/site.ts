// Every destination below is taken from the live alphapranahealing.com site.

export const SITE = {
  name: "Alpha Prana Healing",
  url: "https://alphapranahealing.com",
  phoneDisplay: "+62 878-6012-0011",
  phoneHref: "tel:+6287860120011",
  email: "alphayogabali@gmail.com",
  /** "Reserve Your Spot", "Contact Us for More Information", "Book Appointment" */
  whatsappBooking: "https://wa.link/sppoj1",
  /** "BOOK NOW" buttons on the service pages */
  whatsappBookNow: "https://wa.me/6287860120011",
  /** Floating click-to-chat button (number + pre-filled message from the original plugin) */
  whatsappChat: "https://wa.me/6287860120011?text=" + encodeURIComponent("Hello Sis, I have a question!"),
  onlineClassVideoId: "vgumr3YKims",
  /** Silent 30s loop cut from the opening of the "Open Online Class" video above, self-hosted in /public. */
  heroVideoSrc: "/video/hero.mp4",
} as const;

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Sound & Energy Healing", href: "/sound-healing" },
      { label: "Balinese Blessing", href: "/blessing" },
      { label: "Yoga & Movement", href: "/yoga-movement-sessions" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Services", href: "/services" },
  { label: "Yoga & Movement", href: "/yoga-movement-sessions" },
  { label: "Sound & Energy Healing", href: "/sound-healing" },
  { label: "Balinese Blessing", href: "/blessing" },
];
