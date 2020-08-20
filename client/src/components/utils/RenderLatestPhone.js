import React from 'react'
import { Link } from 'react-router-dom'


function RenderNews(props) {
    const X = props.X;
    const Y = props.Y;
    const Products = props.Products;
    const categories = props.categories
    
    return (Products.slice(X, Y).map((product) => {
        const path=`../${product.imageshorizontal}`
        return <div >
            <div className="latestphonebox">
            <Link to={`/product/${product._id}`}><img className="latestphone-img" src={path} alt={path} /></Link>
            <div className="latestphonecategory"><Link to={`/news/${categories[product.categories].name.toLowerCase()}`}>{categories[product.categories].name}</Link></div>
            <h3 className="right-text"><Link to={`/product/${product._id}`}>{product.title}</Link></h3>
            </div>
            <hr />
        </div>
    }))

}


export default RenderNews;