import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import RenderNews from './utils/RenderNews'
import Title from './Title'

function News() {

    const categories = [
        { _id: 0, name: "U.S. NEWS" },
        { _id: 1, name: "CORONAVIRUS" },
        { _id: 2, name: "POLITICS" },
        { _id: 3, name: "ENTERTAINMENT" },
        { _id: 4, name: "WORLD NEWS" },
        { _id: 5, name: "LIFE" },
        { _id: 6, name: "SHOPIPING" }
    ]
    const X = 0;
    const Y = 6;
    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [PostSize, setPostSize] = useState()
    const Limit = 10


    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProducts(variables)

    }, [])

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    } else {
                        setProducts(response.data.products)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true,
        }
        getProducts(variables)
        setSkip(skip)
    }

    return (

        <div className="container">
            <div className="column col-8 col-s-12 left1">
                <h4><Title title="LATEST NEWS" /></h4>
                <div >
                    <RenderNews
                        Products={Products}
                        X={1}
                        Y={100}
                        categories={categories}
                    />
                </div>
                <br />
                <br />
                {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="load-more-button load-more-button-border" onClick={onLoadMore}><b>Load More Articles</b></button>
                </div>
                 }
                <br />
                <br />
            </div>
        </div>
    )
}


export default News;
