import React from 'react';
export interface PizzaBlickProps {
  id: string;
  title: string;
  imageUrl: string;
  subtitle: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export const PizzaBlock: React.FC<PizzaBlickProps> = ({
  id,
  title,
  imageUrl,
  subtitle,
  types,
  price,
  category,
  rating,
}) => {
  return (
    <div className='container'>
      <div className='pizzas-main'>
        <div className='cart'>{title}</div>
      </div>
    </div>
  );
};
