
import React, { useState, useEffect } from 'react';

function MenuList() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/menu')
      .then(response => response.json())
      .then(data => {
        setMenuItems(data);
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
      });
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
