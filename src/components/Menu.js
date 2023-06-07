import React from "react";

const Menu = ({ activeItem, setActiveItem }) => {
  const items = ["Home", "Customers", "About"];

  return (
    <div>
      <div>Logo</div>
      <nav>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveItem(item)}
              style={{ color: activeItem === item ? "purple" : "black" }}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
