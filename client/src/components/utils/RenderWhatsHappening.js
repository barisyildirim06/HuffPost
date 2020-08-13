import React from 'react'
import { Link } from 'react-router-dom'


function RenderWhatsHappening(props) {
    const X = props.X;
    const Y = props.Y;
    const Products = props.Products;
    return (Products.slice(X, Y).map((product) => {
        return <div >
            <Link to={`/product/${product._id}`}><img className="left-image" src={product.imagesvertical} alt={product.imagesvertical} /></Link>
            <h6 className="right-text"><Link to={`/product/${product._id}`}>{product.title}</Link></h6>
            <hr />
            <br />
        </div>
    }))

}


export default RenderWhatsHappening;