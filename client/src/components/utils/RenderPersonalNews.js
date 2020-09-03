import React from 'react'
import { Link } from 'react-router-dom'


function RenderFeatured(props) {
    const X = props.X;
    const Y = props.Y;
    const Products = props.Products;
    const categories = props.categories
    return (Products.slice(X, Y).map((product) => {
        return <div >
            <div className="personalbox">
                    <div className="row2">
                        <div>
                            <Link to={`/product/${product._id}`}><img src={product.imageshorizontal} alt={product.imageshorizontal} /></Link>
                        </div>
                        <div>
                            <div className="personalcategory"><Link to={`/news/${categories[product.categories].name.toLowerCase()}`}>{categories[product.categories].name}</Link></div>
                            <p className="personalheader"><Link to={`/product/${product._id}`}>{product.title}</Link></p>
                            <div className="personalmain">{product.subtitle}</div>
                        </div>
                        
                    </div>
                    
            </div>
            <br/>
                            <hr />
        </div>

    }))

}


export default RenderFeatured;