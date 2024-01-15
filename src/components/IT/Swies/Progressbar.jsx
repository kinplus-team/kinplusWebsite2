import React from 'react'

export default function Progressbar({ title, onClick, isActive }) {
  return (
    <div
      className={`progress-bar-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
}

