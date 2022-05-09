import React from 'react';
import { Categories, SortPopup } from '../components/index';
import { PizzaBlock } from './index';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';
// ******************** статичные массивы вынес в глобальные константы *********************
const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sorPop = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

export const Home = () => {
  
  const dispatch = useDispatch();
  const items = useSelector(({ pizzasReducer }) => pizzasReducer.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        {/* ******* здесь я меняю на редакс items уже принимает массив объектов ***************** */}
        <SortPopup
          items={sorPop}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};
