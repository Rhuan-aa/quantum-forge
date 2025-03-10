import React from "react";
import "./SwitchButton.css";

const SwitchButton = ({ label, onChange, checked = false }) => {
  return (
    <div className="switch-container">
      <label className="switch-label">
        {label}
        <div className="switch-wrapper">
          <input 
            type="checkbox" 
            checked={checked} 
            onChange={(e) => onChange && onChange(e.target.checked)} 
          />
          <span className="slider"></span>
        </div>
      </label>
    </div>
  );
};

export default SwitchButton;