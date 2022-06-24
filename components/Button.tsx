import React from "react";

export function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={
        "px-8 py-4 rounded shadow border bg-white " + (props.className ?? "")
      }
    />
  );
}
