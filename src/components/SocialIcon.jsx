const paths = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M15.2 8.1h-1.7c-1.1 0-1.8.7-1.8 1.8V21" />
      <path d="M9.3 13.2h5" />
    </>
  ),
  houzz: (
    <>
      <path d="M4 10.5 12 4l8 6.5V20H4z" />
      <path d="M9.6 20v-5.4h4.8V20" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.3 11.6a8.3 8.3 0 0 1-12.2 7.3L4 20l1.1-4a8.3 8.3 0 1 1 15.2-4.4z" />
      <path d="M9.4 9.1c-.4 1.9 2.5 5.4 4.7 5.6.7.1 1.3-.3 1.6-.9" />
    </>
  ),
};

export default function SocialIcon({ id, size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[id]}
    </svg>
  );
}
