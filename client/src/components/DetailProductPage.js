import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'



function DetailProductPage(props) {
    const [Suspense, setSuspense] = useState(0)
    const [Product, setProduct] = useState([])

    useEffect(() => {
        const productId = props.match.params.productId
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
                setSuspense(1)
            })

        }, [])

    return (
        <div>
            {!Suspense ? <div className="container"></div> :
                <div>
                    <div className="container">
                    <h1><b>{Product.title}</b></h1>
                        <div className="column left col-8 col-s-12 left1 img-full">
                            <Link to="/"><img src={`../${Product.imageshorizontal}`} alt={Product.imageshorizontal} /></Link>
                            <br />
                            <h6><b>{Product.description}</b></h6>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default DetailProductPage;