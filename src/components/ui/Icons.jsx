function Icon({ children, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export const SunIcon = () => (
  <Icon><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" /></Icon>
);
export const MoonIcon = () => <Icon><path d="M20 14.5A8 8 0 0 1 9.500 4 8 8 0 1 0 20 14.500Z" /></Icon>;
export const MenuIcon = () => <Icon><path d="M4 7h16M4 12h16M4 17h16" /></Icon>;
export const CloseIcon = () => <Icon><path d="M6 6l12 12M18 6 6 18" /></Icon>;
export const ArrowIcon = () => <Icon><path d="M5 12h14M13 6l6 6-6 6" /></Icon>;
export const UpIcon = () => <Icon><path d="M12 19V5M6 11l6-6 6 6" /></Icon>;
export const DownloadIcon = () => <Icon><path d="M12 4v11M7 11l5 5 5-5M5 20h14" /></Icon>;
export const MailIcon = () => <Icon><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></Icon>;
export const CodeIcon = () => <Icon><path d="m8 7-5 5 5 5M16 7l5 5-5 5" /></Icon>;
export const PersonIcon = () => <Icon><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></Icon>;
