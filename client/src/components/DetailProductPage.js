import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from './Footer'

// const Categories = [
//     { key: 1, value: "U.S. NEWS" },
//     { key: 2, value: "CORONAVIRUS" },
//     { key: 3, value: "POLITICS" },
//     { key: 4, value: "ENTERTAINMENT" },
//     { key: 5, value: "WORLD NEWS" },
//     { key: 6, value: "LIFE" },
//     { key: 7, value: "SHOPIPING" }
// ]

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
            {!Suspense ? null :
                <div>
                    <div className="container">
                        <div className="column left col-8 col-s-12 left1 img-full">
                            <Link to="/"><img src={`../${Product.imageshorizontal}`} alt={Product.imageshorizontal} /></Link>
                            <br />
                            <h6><b>{Product.title}</b></h6>
                            <h6><b>{Product.description}</b></h6>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </div>

    )
}

export default DetailProductPage;