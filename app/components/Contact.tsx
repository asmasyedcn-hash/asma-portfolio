export function Contact() {
  return (
    <div className="max-w-xl">
      <p className="text-lg text-muted">
        Open to security operations, incident response and vulnerability management roles in Toronto and remote.
      </p>
      <dl className="mt-6 space-y-2">
        <div className="flex gap-3"><dt className="w-20 font-medium">Email</dt>
          <dd><a className="text-accent underline" href="mailto:asmathunnisa.syed@ontariotechu.net">asmathunnisa.syed@ontariotechu.net</a></dd></div>
        <div className="flex gap-3"><dt className="w-20 font-medium">LinkedIn</dt>
          <dd><a className="text-accent underline" href="https://www.linkedin.com/in/asmasyed23/" target="_blank" rel="noopener noreferrer">linkedin.com/in/asmasyed23</a></dd></div>
        <div className="flex gap-3"><dt className="w-20 font-medium">Location</dt><dd className="text-muted">Toronto, Canada</dd></div>
      </dl>
    </div>
  );
}
