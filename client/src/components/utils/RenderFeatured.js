import React from 'react'
import { Link } from 'react-router-dom'


function RenderFeatured(props) {
    const X = props.X;
    const Y = props.Y;
    const Products = props.Products;
    const Categories = props.Categories
    return (Products.slice(X, Y).map((product) => {
        return <div className="featuredbox">
            <Link to={`/product/${product._id}`}><img src={product.imageshorizontal} alt={product.imageshorizontal} /></Link>
            <h3 className="featuredtext"><Link to={`/product/${product._id}`}>{product.title}</Link></h3>
            <p className="featuredtext">{product.subtitle}</p>
        </div>
    }))

}


export default RenderFeatured;