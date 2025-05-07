"use client";

import React from "react";

// A simple client component wrapper for any client components that need to be used in server components
export default function ClientContactWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
