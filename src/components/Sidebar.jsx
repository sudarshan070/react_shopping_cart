import React from "react";

export default function Sidebar({ sizes }) {
  return (
    <div>
      {sizes.map((size, i) => {
        return <button key={i}>{size}</button>;
      })}
    </div>
  );
}
