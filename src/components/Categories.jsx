import React, { useState } from 'react';

export const Categories = ({ items, onClick }) => {
  const [active, setActive] = useState(null);

  const onSelectItem = (index) => {
    setActive(index);
  };

  console.log();
  return (
    <div className="categories">
      <ul>
        <li onClick={() => onSelectItem(null)} className={active === null ? 'active' : ''}>
          Все
        </li>
        {items.map((item, index) => (
          <li
            className={active === index ? 'active' : ''}
            onClick={() => onSelectItem(index)}
            key={`${item}_${index}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
