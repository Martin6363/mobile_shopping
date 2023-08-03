import React, { useState } from 'react'
import '../assets/styles/shopMain.scss'
import  ShopItem from '../component/shopItem';

export function ShopMain({ storeList }) {
  const [items, setItems] = useState(
    storeList.reduce((acc, val) => {
      acc[val.id] = {
        count: 1,
        price: val.price,
      };
      return acc;
    }, {})
  );

  function handleCountPlus (item) {
    if (items[item.id].count < item.limit) {
      setItems(prevItems => ({
        ...prevItems,
        [item.id]: {
          ...prevItems[item.id],
          count: prevItems[item.id].count + 1,
          price: prevItems[item.id].price + prevItems[item.id].price / prevItems[item.id].count,
        },
      }));
    }
  }

  function handleCountMinus (item) {
    if (items[item.id].count > 1) {
      setItems(prevItems => ({
        ...prevItems,
        [item.id]: {
          ...prevItems[item.id],
          count: prevItems[item.id].count - 1,
          price: prevItems[item.id].price - prevItems[item.id].price / prevItems[item.id].count,
        },
      }));
    }
  }
  return (
    <div className='Shop-Main'>
      <div className='main-wrapper'>
        {
          storeList.map((data, i) => (
            <ShopItem 
              key={data.id}
              data={data}
              items={items}
              countPlus={handleCountPlus}
              countMinus={handleCountMinus}
            />
          ))
        }
      </div>
    </div>
  )
}