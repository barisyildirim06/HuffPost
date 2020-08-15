import React from 'react'
import { Link } from 'react-router-dom'


function RenderNews(props) {
    const X = props.X;
    const Y = props.Y;
    const Products = props.Products;
    
    return (Products.slice(X, Y).map((product) => {
        const path=`../${product.imageshorizontal}`
        return <div >
            <div className="newsbox">
            <Link to={`/product/${product._id}`}><img className="news-img" src={path} alt={path} /></Link>
            <h3 className="news-text"><Link to={`/product/${product._id}`}>{product.title}</Link></h3>
            <p className="news-p ">{product.subtitle}</p>
            </div>
            <hr />
        </div>
    }))

}


export default RenderNews;