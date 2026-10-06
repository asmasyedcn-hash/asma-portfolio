const links = [
  ["About", "#about"], ["Skills", "#skills"], ["Experience", "#experience"],
  ["Projects", "#projects"], ["Contact", "#contact"],
];

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-white/85 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-display font-semibold">Asma Syed</a>
        <ul className="flex gap-6 text-sm text-muted">
          {links.map(([label, href]) => (
            <li key={href} className={label === "Contact" ? "" : "hidden sm:block"}>
              <a href={href} className="hover:text-ink">{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
