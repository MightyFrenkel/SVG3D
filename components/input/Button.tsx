import React from "react";

export function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={
        "px-4 py-2 rounded shadow border bg-white " + (props.className ?? "")
      }
    />
  );
}
