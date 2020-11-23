import React from "react";

export default function Sidebar({ sizes, handleClick }) {
  return (
    <div className="d-flex flex-wrap">
      {sizes.map((size, i) => {
        return (
          <button
            key={i}
            className={`sizes-btn ${size.checked ? "active" : ""} `}
            onClick={() => handleClick(size.label)}
          >
            {size.label}
          </button>
        );
      })}
    </div>
  );
}
