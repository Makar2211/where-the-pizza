import React from 'react';
import { location, account, pizzaHeader, ShoppingBag } from '../assets/reexportImg';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export const Header = () => {
  return (
    <header className='Header'>
      <div className='container'>
        <div className='header-top'>
          <div className='left'>
            <div className='location'>
              <img src={location} alt='location' />
              <ul>
                <li>Киев</li>
              </ul>
              <MdKeyboardArrowDown className='Arrow' />
            </div>
            <div className='info'>
              Среднее время доставки*: <span>00:24:19</span>
            </div>
          </div>
          <div className='right'>
            <div className='time-to-work'>Время работы: с 11:00 до 23:00</div>
            <div className='log-in'>
              <button>
                <div>
                  <img src={account} alt='пользователь' />
                </div>
                <div> Войти в аккаунт</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='container'>
        <div className='footer-heder'>
          <div className='left'>
            <img src={pizzaHeader} alt='logoPizza' />
            <h1>Куда пицца</h1>
          </div>
          <div className='rigth'>
            <button>
              <div>
                <img src={ShoppingBag} alt='ShoppingBag' />
              </div>
              <div className='text-span'>
                <span>0</span> ₴
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
