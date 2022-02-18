import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ShopingList(props) {

  
  const { listOfProducts } = props


const handleRemoveProduct = (event,id) => {
    event.preventDefault();
    props.remove(listOfProducts.filter((product) => product.id !== id));
}


  return (

    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        <ui>
          {listOfProducts.map((product) => <li onContextMenu={(event) => handleRemoveProduct(event, product.id)} key={product.id}>{`${product.nazwa}`}</li>)}
        </ui>
      </header>
    </div>
  );
}

export default ShopingList;
