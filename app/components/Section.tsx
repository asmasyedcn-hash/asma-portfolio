export function Section({
  id, title, tone, children,
}: { id: string; title: string; tone?: "mist"; children: React.ReactNode }) {
  return (
    <section id={id} className={`scroll-mt-14 py-16 md:py-24 ${tone === "mist" ? "bg-mist" : ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-10 font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}
