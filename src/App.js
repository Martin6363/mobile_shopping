import { useEffect, useState } from 'react';
import './App.css';
import { RotatingTriangles } from  'react-loader-spinner';
import { List } from './component/dataList';
import { ShopMain } from './pages/shopMain'
import { ShopHeader } from './pages/shopHeader'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [shopList, setShopList] = useState(List)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  })

if (isLoading) {
  return (
    <div className='loading-cont'>
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
      <p>Loading...</p>
    </div>
  )
}
  return (
    <div className="App">
      <div className='Wrapper'>
        <ShopHeader/>
        <ShopMain storeList={shopList}/>
      </div>
    </div>
  );
}

export default App;
