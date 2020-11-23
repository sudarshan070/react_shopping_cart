import React from "react";

export default function Sidebar({ sizes, handleClick }) {
  return (
    <div>
      {sizes.map((size, i) => {
        return (
          <button
            key={i}
            className={`${size.checked ? "active" : ""} `}
            onClick={() => handleClick(size.label)}
          >
            {size.label}
          </button>
        );
      })}
    </div>
  );
}
