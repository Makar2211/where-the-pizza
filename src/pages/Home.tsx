import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { Varieties } from '../components/Varieties';
import { selectPizzaData } from '../Redux/slices/pizzaSlice';

export const Home: React.FC = () => {
  const { items } = useSelector(selectPizzaData);

  /* const [data, setData] = React.useState([]);
  const getData = async () => {
    const { data } = await axios.get(`https://64033600302b5d671c4979aa.mockapi.io/products`);
    setData(data);
  };
  React.useEffect(() => {
    getData();
  }, []); */

  console.log(items);
  return (
    <div className='home-page'>
      <Header />
      <Varieties />
      {!items ? <div>Loading...</div> : <div>Успешно загруженно</div>}
    </div>
  );
};
