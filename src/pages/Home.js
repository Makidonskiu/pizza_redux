import React, { useEffect } from 'react';
import { Categories, PizzaLoadingBlock, SortPopup } from '../components/index';
import { PizzaBlock } from './index';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

// ******************** статичные массивы вынес в глобальные константы *********************
const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sorPop = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzasReducer }) => pizzasReducer.items);
  const cartItems = useSelector(({ cartReducer }) => cartReducer.items);
  const isLoaded = useSelector(({ pizzasReducer }) => pizzasReducer.isLoaded);
  const { category, sortBy } = useSelector(({ filterReducer }) => filterReducer);
  //  *****************  Асинхронный запрос ****************************************
  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCatigory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        {/* ******* здесь я меняю на редакс items уже принимает массив объектов ***************** */}
        <SortPopup onClickSortBy={onSelectSortBy} activeSortType={sortBy.type} items={sorPop} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {/* *************************************isLoading = {true} - был в PizzaBlock******************* */}
        {isLoaded
          ? items.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length}
                onClickAddPizza={handleAddPizzaToCart}
                {...pizza}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
};
