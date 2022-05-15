import React from 'react';

export const Categories = React.memo(({ activeCatigory, items, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li className={activeCatigory === null ? 'active' : ''} onClick={() => onClickCategory(null)} >
          Все
        </li>
        { items && items.map((item, index) => (
          <li
            className={activeCatigory === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}
            key={`${item}_${index}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});