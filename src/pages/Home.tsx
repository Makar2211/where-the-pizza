import React from 'react';
import { Header } from '../components/Header';
import { Varieties } from '../components/Varieties';
import { PizzaBlickProps, PizzaBlock } from '../components/PizzaBlock/Pizza';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { fetchPizza, selectPizzaData } from '../Redux/slices/pizzaSlice';

export const Home: React.FC = () => {
  const { items } = useSelector(selectPizzaData);
  console.log(items);
  const pizzas = items.map((item: PizzaBlickProps) => (
    <PizzaBlock
      key={item.id}
      id={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      price={item.price}
      sizes={item.sizes}
      types={item.types}
      subtitle={item.subtitle}
      category={item.category}
      rating={item.rating}
    />
  ));
  return (
    <div className='home-page'>
      <Header />
      <Varieties />
    </div>
  );
};
