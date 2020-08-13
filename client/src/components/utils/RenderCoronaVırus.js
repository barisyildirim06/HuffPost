import React from 'react'
import { Link } from 'react-router-dom'


function RenderFeatured(props) {
    const X = props.X;
    const Y = props.Y;
    const Products = props.Products;
    return (Products.slice(X, Y).map((product) => {
        return <div >
            <h5 className="coronavirus-links"><Link to={`/product/${product._id}`}> {product.title}</Link></h5>
            <hr />
            <br />
        </div>
    }))

}


export default RenderFeatured;