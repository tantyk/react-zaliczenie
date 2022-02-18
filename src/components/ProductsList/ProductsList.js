import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class ProductsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
}
handleSelectedProduct = (prod) => {

  this.props.sendSelectedProductToParentComponent(prod);
}

  
    render() {
      const { productsToDisplay } = this.props;
        return (
            <div className={commonColumnsStyles.App}>
              <header className={commonColumnsStyles.AppHeader}>
              <p>Products list</p>
                <ui>
                  {productsToDisplay.map((product) => <li onClick={() => this.handleSelectedProduct(product)} key={product.id}>{`${product.nazwa}`}</li>)}
                </ui>
              </header>
            </div>
          );
    }
}

export default ProductsList;
