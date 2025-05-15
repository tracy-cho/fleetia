import React from "react";

function RoundMinus({
  size = 14,
  color = "white"
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ zoom: size / 14 }}
    >
      <path
        d="M6.99965 0C10.8632 0 14 3.13678 14 6.99965C14 10.8632 10.8632 14 6.99965 14C3.13678 14 0 10.8632 0 6.99965C0 3.13678 3.13678 0 6.99965 0ZM9.97749 6.47662H4.02601C3.73613 6.47662 3.50088 6.71188 3.50088 7.00175C3.50088 7.29162 3.73613 7.52688 4.02601 7.52688H9.97749C10.2674 7.52688 10.5026 7.29162 10.5026 7.00175C10.5026 6.71188 10.2674 6.47662 9.97749 6.47662Z"
        fill={color}
      />
    </svg>
  );
}

export { RoundMinus };
