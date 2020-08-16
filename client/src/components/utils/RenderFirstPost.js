import React from 'react'
import { Link } from 'react-router-dom'

function RenderProducts(props) {
    const X = props.X;
    const Y = props.Y;
    const Products = props.Products;
    return (Products.slice(X,Y).map((product) => {
        return <div >
             <h1 className="firstnew-links"><Link to={`/product/${product._id}`}>{product.title.toUpperCase()}</Link></h1>
           <Link to={`/product/${product._id}`}><img className="img-container" src={product.imageshorizontal} alt={product.imageshorizontal }/></Link> 
                <br />
                <br />
                <br />
        </div>
    }))
    
}

export default RenderProducts
