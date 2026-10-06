import { Avatar } from "./Avatar";

export function Hero() {
  return (
    <div id="top" className="mx-auto max-w-5xl px-6 py-16 md:py-28">
      <div className="rise flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h1 className="font-display text-6xl font-bold tracking-tight md:text-8xl">Asma Syed</h1>
          <p className="mt-4 font-display text-xl font-medium text-accent md:text-2xl">
            Cybersecurity professional in security operations and incident response
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Toronto-based, with 4 years of enterprise experience in security monitoring,
            incident management, risk assessment and automation in 24×7 telecom operations.
            Currently completing a Master of Information Technology Security at Ontario Tech University.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:asmathunnisa.syed@ontariotechu.net" className="rounded-md bg-accent px-5 py-3 font-medium text-white hover:bg-ink">
              Email me
            </a>
            <a href="https://www.linkedin.com/in/asmasyed23/" target="_blank" rel="noopener noreferrer" className="rounded-md border border-line px-5 py-3 font-medium hover:border-accent hover:text-accent">
              View LinkedIn
            </a>
          </div>
        </div>
        <Avatar />
      </div>
    </div>
  );
}
