"use client";
import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function ClientButton(props: ButtonProps) {
  const [count, setCount] = React.useState(0)
  return <button onClick={() => setCount(count+1)}>{props.children} {count}</button>;
}

ClientButton.displayName = "ClientButton";
