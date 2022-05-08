import React from 'react';
import { Categories, SortPopup } from '../components/index';
import { PizzaBlock } from './index';

export const Home = ({ pizzas }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(item) => console.log(item)}
          items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((pizza) => (
          <PizzaBlock key={pizza.id} {...pizza}/>
        ))}
        {pizzas.map((pizza) => (
          <PizzaBlock key={pizza.id} {...pizza}/>
        ))}
      </div>
    </div>
  );
};
