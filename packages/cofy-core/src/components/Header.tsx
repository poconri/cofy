import * as React from "react";

export interface HeaderProps {
  children: React.ReactNode;
}

export function Header(props: HeaderProps) {
  return <div>{props.children}</div>;
}

Header.displayName = "Header";
