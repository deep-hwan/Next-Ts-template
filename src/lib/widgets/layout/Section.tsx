import React, { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  direction?: "horizontal" | "vertical";
  gap?: number;
  maxWidth?: number;
  children: ReactNode;
}
export function Section({
  direction = "vertical",
  gap,
  maxWidth,
  children,
  ...props
}: Props) {
  return (
    <section
      css={{
        position: "relative",
        maxWidth: `${maxWidth}px`,
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        flex: "1",
        flexDirection: direction === "vertical" ? "column" : "row",
        alignItems: "center",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
        transition: "0.3s ease-in-out",
        overflowX: "hidden",
      }}
      {...props}
    >
      {children}
    </section>
  );
}