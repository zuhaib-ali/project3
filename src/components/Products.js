import React from 'react';
import ProductDetails from './ProductDetails';
import {useParams} from 'react-router-dom';


function Products() {
    return(
        <div>
            <h4 style={{textAlign:"center", fontSize:"50px", color:"lightblue"}}>Products</h4>
            <ProductDetails product={useParams()}></ProductDetails>
        </div>
    );
}

export default Products;