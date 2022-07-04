import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  selected?: boolean;
}

export function Button({ selected = false, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded shadow border bg-white cursor-pointer ${
        props.className ?? ""
      } ${selected ? " bg-gray-200 shadow-lg" : ""}`}
    />
  );
}
