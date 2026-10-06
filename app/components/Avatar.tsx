"use client";
import { useState } from "react";

export function Avatar() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="flex h-56 w-56 shrink-0 items-center justify-center overflow-hidden rounded-full bg-mist md:h-64 md:w-64">
      {failed ? (
        <span className="font-display text-6xl font-semibold text-accent">AS</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/profile.jpg" alt="Portrait of Asma Syed" className="h-full w-full object-cover" onError={() => setFailed(true)} />
      )}
    </div>
  );
}
