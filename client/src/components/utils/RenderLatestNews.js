import React from 'react'
import { Link } from 'react-router-dom'



function RenderProducts(props) {
    const X = props.X;
    const Y = props.Y;
    const Products = props.Products;
    const categories = props.categories
    return (Products.slice(X,Y).map((product) => {
        return <div >
           <Link to={`/product/${product._id}`}><img src={product.imageshorizontal} alt={product.imageshorizontal }/></Link> 
                        <b className="latestnews-text"><Link to={`/news/${categories[product.categories].name.toLowerCase()}`}>{categories[product.categories].name}</Link></b>
                        <br />
                        <h6 className="latestnews-text"><b><Link to={`/product/${product._id}`}>{product.title}</Link> </b></h6>
        </div>
    }))
    
}

export default RenderProducts
