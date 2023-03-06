import React from 'react';
import { Header } from '../components/Header';
import { Varieties } from '../components/Varieties';
import { PizzaBlock } from '../components/PizzaBlock/Pizza';
import { selectPizzaData } from '../Redux/slices/pizzaSlice';
import { useAppSelector } from '../Redux/store';

export const Home: React.FC = () => {
  const { items } = useAppSelector(selectPizzaData);
  console.log(items);
  return (
    <div className='home-page'>
      <Header />
      <Varieties />
      <PizzaBlock />
    </div>
  );
};
