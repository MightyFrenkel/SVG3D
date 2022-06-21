import React from "react";

export function Button(
  props: Omit<React.ComponentProps<"button">, "className">
) {
  return (
    <button className="px-8 py-4 rounded shadow border bg-white" {...props} />
  );
}
