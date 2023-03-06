import React from 'react';
import { Header } from '../components/Header';
import { Varieties } from '../components/Varieties';
import { PizzaBlock } from '../components/PizzaBlock/Pizza';
import { useSelector } from 'react-redux';
import { selectItems } from '../Redux/slices/pizzaSlice';

export const Home: React.FC = () => {
  const items = useSelector(selectItems);
  console.log(items);
  return (
    <div className='home-page'>
      <Header />
      <Varieties />
      <PizzaBlock />
    </div>
  );
};
