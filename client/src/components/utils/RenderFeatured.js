import React from 'react'
import { Link } from 'react-router-dom'


function RenderFeatured(props) {
    const X = props.X;
    const Y = props.Y;
    const Products = props.Products;
    const Categories = props.Categories
    return (Products.slice(X, Y).map((product) => {
        return <div >
            <Link to={`/product/${product._id}`}><img src={product.imageshorizontal} alt={product.imageshorizontal} /></Link>
            <h3 className="featuredtext">{product.title}</h3>
            <p className="featuredtext">{product.subtitle}</p>
        </div>
    }))

}


export default RenderFeatured;