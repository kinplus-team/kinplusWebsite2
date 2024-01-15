
import React, { useState } from "react";
import "./style.css";
import Progressbar from "./Progressbar";

export default function ITSwies() {
  
  const SideProgressBar = () => {
    const [activeItem, setActiveItem] = useState(null);

  

    const handleItemClick = (item) => {
      setActiveItem(item);
      // Perform other actions based on the selected item
    };

    const progressBarItems = [
      { id: 1, title: "Item 1" },
      { id: 2, title: "Item 2" },
      { id: 3, title: "Item 3" },
      // Add more items as needed
    ];

    return (
      <div className="side-progress-bar">
        {progressBarItems.map((item) => (
          <Progressbar
            key={item.id}
            title={item.title}
            onClick={() => handleItemClick(item)}
            isActive={activeItem === item}
          />
        ))}
      </div>
      
    );
  
  }
}
