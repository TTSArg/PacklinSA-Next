"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackContactClick, type ContactMethod } from "./contact-tracking";

type ContactActionProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  contactMethod: ContactMethod;
  placement: string;
};

export default function ContactAction({
  children,
  contactMethod,
  placement,
  href,
  ...anchorProps
}: ContactActionProps) {
  return (
    <a
      {...anchorProps}
      href={href}
      onClick={() => trackContactClick(contactMethod, placement, href ?? "")}
    >
      {children}
    </a>
  );
}