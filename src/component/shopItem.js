import { memo } from 'react';
import '../assets/styles/shopMain.scss';
import { PropTypes } from 'prop-types';


function ShopItem({ data, items, countPlus, countMinus }) {
    return (
      <div className='list-cont' key={data.id}>
        <div className='shop-card'>
          <div className='image-cont'>
            <img src={data.image} alt={data.title} />
          </div>
          <div className='shop-data-cont'>
            <h2>{data.title}</h2>
            <p>Limit - {data.limit}</p>
            <strong>$ {items[data.id].price}</strong>
          </div>
          <div className='button-cont'>
            <button onClick={() => countMinus(data)}>-</button>
            <span>{items[data.id].count === data.limit ? <small>Max</small> : items[data.id].count}</span>
            <button onClick={() => countPlus(data)}>+</button>
          </div>
        </div>
      </div>
    );
};

export default memo(ShopItem)


ShopItem.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      limit: PropTypes.number.isRequired,
    }).isRequired,
    items: PropTypes.objectOf(
      PropTypes.shape({
        price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      })
    ).isRequired,
    countPlus: PropTypes.func.isRequired,
    countMinus: PropTypes.func.isRequired,
  };


