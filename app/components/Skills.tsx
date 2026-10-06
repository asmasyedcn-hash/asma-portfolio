const groups: [string, string[]][] = [
  ["Monitoring and response", ["Security Monitoring", "Incident Response", "Root Cause Analysis", "ITSM Platforms"]],
  ["Risk and vulnerability", ["Risk Assessment", "Vulnerability Management"]],
  ["Network and analysis", ["Network Security", "Log Analysis", "SIEM Concepts", "Wireshark", "IDS/IPS"]],
  ["Automation and tooling", ["Python Automation", "SQL", "Linux"]],
];

export function Skills() {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {groups.map(([group, items]) => (
        <div key={group} className="grid gap-3 py-5 md:grid-cols-[14rem_1fr]">
          <dt className="font-display font-semibold">{group}</dt>
          <dd className="flex flex-wrap gap-2">
            {items.map((s) => (
              <span key={s} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{s}</span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
