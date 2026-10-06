const certs = [
  "Google Cybersecurity Professional Certificate",
  "TryHackMe SOC Level 1 Path",
  "Python Certification (Udemy)",
  "BMAS Automation (Ericsson)",
  "Data Science Overview (Ericsson)",
  "BCSS Machine Learning Fundamentals (Ericsson)",
];

export function Certifications() {
  return (
    <div>
      <h3 className="mb-4 font-display text-xl font-semibold">Certifications</h3>
      <ul className="space-y-2 text-muted">
        {certs.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </div>
  );
}
