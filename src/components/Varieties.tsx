import React from 'react';
import {
  fire,
  pizza,
  sushi,
  drink,
  snacks,
  combo,
  dessert,
  sauce,
  threepizzas,
  onepizza,
} from '../assets/reexportImg';
const varieties = [
  { imageUrl: fire, name: 'Акции' },
  { imageUrl: pizza, name: 'Пицца' },
  { imageUrl: sushi, name: 'Суши' },
  { imageUrl: drink, name: 'Напитки' },
  { imageUrl: snacks, name: 'Закуски' },
  { imageUrl: combo, name: 'Комбо' },
  { imageUrl: dessert, name: 'Десерты' },
  { imageUrl: sauce, name: 'Соусы' },
];

export const Varieties = () => {
  return (
    <div className='Varieties'>
      <div className='container'>
        <div className='Varieties-header'>
          {varieties.map((varietie, index) => (
            <div className='item' key={index}>
              <img src={varietie.imageUrl} alt='' />
              <span>{varietie.name}</span>
            </div>
          ))}
        </div>
        <div className='Varieties-main'>
          <div className='Varieties-main-item'>
            <img src={threepizzas} alt='3pizzas' />
            <div className='Varieties-main-item-name'>
              <span>
                3 средние пиццы <br />
                от 999 рублей
              </span>
            </div>
          </div>
          <div className='Varieties-main-item-tenproc'>
            <img src={onepizza} alt='1pizzas' />
            <div className='Varieties-main-item-name'>
              <span>
                Кэшбек 10% на <br /> самовывоз (доставка)
              </span>
            </div>
          </div>
          <div className='Varieties-main-item'>
            <img src={threepizzas} alt='3pizzas' />
            <div className='Varieties-main-item-name'>
              <span>
                3 средние пиццы <br />
                от 999 рублей
              </span>
            </div>
          </div>
          <div className='Varieties-main-item-tenproc'>
            <img src={onepizza} alt='1pizzas' />
            <div className='Varieties-main-item-name'>
              <span>
                Кэшбек 10% на <br /> самовывоз (доставка)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
