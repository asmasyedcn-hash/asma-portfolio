const jobs = [
  {
    role: "Automated Operations Engineer, Security Operations and Incident Response",
    dates: "Ericsson India Global Services, Jan 2023 to Jan 2025",
    points: [
      "Coordinated incident monitoring and response in a 24×7 enterprise environment.",
      "Assessed incidents by severity, business impact and asset criticality.",
      "Tracked remediation actions and validated service restoration.",
      "Served as single point of contact for critical incidents across multiple teams.",
      "Led and mentored a team of 16 engineers.",
      "Performed root cause analysis and recommended preventive controls.",
      "Maintained incident records and operational risk reports.",
      "Contributed to 98% SLA compliance for priority incidents.",
      "Automated reporting with Python and Excel.",
    ],
  },
  {
    role: "Assistant Engineer, Monitoring and Threat Detection",
    dates: "Ericsson India Global Services, Mar 2021 to Jan 2023",
    points: [
      "Monitored network alarms and logs continuously.",
      "Correlated alerts to find suspicious activity and cut false escalations.",
      "Ran first-level investigation and severity assessment.",
      "Logged and tracked incidents in ITSM platforms.",
      "Coordinated with L2/L3 teams during investigations.",
      "Maintained audit logs and investigation notes.",
      "Achieved 98% SLA compliance for priority incidents.",
      "Improved reporting accuracy by 25%.",
    ],
  },
];

export function Experience() {
  return (
    <ol className="space-y-12 border-l border-line">
      {jobs.map((j) => (
        <li key={j.role} className="relative pl-8">
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
          <h3 className="font-display text-xl font-semibold md:text-2xl">{j.role}</h3>
          <p className="mb-4 mt-1 text-muted">{j.dates}</p>
          <ul className="list-disc space-y-1.5 pl-5 text-muted marker:text-line">
            {j.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  );
}
