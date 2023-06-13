import React from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock, Footer } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';


const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', "Необычные"];
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];
function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj
    })
  }

  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            onClickCategory={onSelectCategory}
            items={categoryNames}
          />
          <SortPopup
            activeSortType={sortBy.type}
            items={sortItems}
            onClickSortType={onSelectSortType}
          />
        </div>
        <h2 className="content__title">{
        categoryNames[category] == null ?  "Все" : categoryNames[category]
        } пиццы</h2>
        <div className="content__items">
          {isLoaded
            ? items.map((obj) =>
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                {...obj}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              />)
            : Array(10)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
