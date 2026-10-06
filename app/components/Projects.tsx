const projects = [
  {
    name: "Two-Layer Hybrid CVE Network Analysis",
    text: "Python-based complex network analysis of CVE relationships and vulnerability patterns.",
    href: "https://github.com/asmasyedcn-hash/Two-LayerHybridCVENetworkAnalysis-ComplexNetworksAnalysis-",
  },
  {
    name: "ML-Based Detection of Credential Stuffing Attacks",
    text: "Machine learning project that detects account takeover attempts from behavioral patterns.",
    href: "https://github.com/Expelliarmuz/Machine-learning-based-detection-of-credential-stuffing-account-takeover-attacks-",
  },
];

export function Projects() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
           className="block rounded-lg border border-line p-6 hover:border-accent">
          <h3 className="font-display text-xl font-semibold">{p.name}</h3>
          <p className="mt-2 text-muted">{p.text}</p>
          <p className="mt-4 text-sm font-medium text-accent">View on GitHub</p>
        </a>
      ))}
    </div>
  );
}
