import React , { useState } from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from './App.module.scss';
import produkty from "./common/consts/produkty";

function App() {

const [resultsToDisplay, setResultsToDisplay] = useState(produkty)
const [shoppingList, setShoppingList] = useState([])

const addProductToShoppingList = (product) => {
    setShoppingList((state) => [
      ...state,
      { ...product, id: Math.random(), isClicked: false },
    ]);
  };
  
  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <ProductsFilters />
      <div className={styles.columnsWrapper}>
        <ProductsList productsToDisplay={resultsToDisplay} sendSelectedProductToParentComponent={(newProduct) => addProductToShoppingList(newProduct)}/>
        <ShopingList listOfProducts={shoppingList} remove={setShoppingList}/>
      </div>
    </ div>
  );
}

export default App;
