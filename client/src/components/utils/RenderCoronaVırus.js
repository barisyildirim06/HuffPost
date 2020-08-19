import React from 'react'
import { Link } from 'react-router-dom'


function RenderFeatured(props) {
    const X = props.X;
    const Y = props.Y;
    const Products = props.Products;
    return (Products.slice(X, Y).map((product) => {
        return <div >
            <div className="coronavirus-links"><Link to={`/product/${product._id}`}> {product.title}</Link></div>
            <br/>
            <hr />
            <br />
        </div>
    }))

}


export default RenderFeatured;