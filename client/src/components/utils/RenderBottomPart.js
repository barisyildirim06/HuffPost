import React from 'react'
import { Link } from 'react-router-dom'



function RenderProducts(props) {
    const X = props.X;
    const Y = props.Y;
    const Products = props.Products;
    return (Products.slice(X, Y).map((product) => {
        return <div >
            <Link to={`/product/${product._id}`}><img src={product.imageshorizontal} alt={product.imageshorizontal} /></Link>
            <div className="bottompartheader"><Link to={`/product/${product._id}`}>{product.title}</Link></div>
        </div>
    }))

}

export default RenderProducts
