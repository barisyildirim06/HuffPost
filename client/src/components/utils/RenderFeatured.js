import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

function RenderFeatured(props) {
    const X = props.X;
    const Y = props.Y;
    const Products = props.Products;
    const isBigEnough = useMediaQuery({
        query: '(min-width: 780px)'
      })
    return (Products.slice(X, Y).map((product) => {
        return <div>
            <Link to={`/product/${product._id}`}><img src={product.imageshorizontal} alt={product.imageshorizontal} /></Link>
            <h3 style={{paddingTop:"20px"}} className="personalheader"><Link to={`/product/${product._id}`}>{product.title}</Link></h3>
            <p className="personalmain">{product.subtitle}</p>
            {isBigEnough ? null : <div className="padding30px"/>}
        </div>
    }))

}


export default RenderFeatured;