import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import RenderNews from './utils/RenderNews'
import Title from './Title'

function News() {

    const categories = [
        { _id: 1, name: "U.S. NEWS" },
        { _id: 2, name: "CORONAVIRUS" },
        { _id: 3, name: "POLITICS" },
        { _id: 4, name: "ENTERTAINMENT" },
        { _id: 5, name: "WORLD NEWS" },
        { _id: 6, name: "LIFE" },
        { _id: 7, name: "SHOPIPING" }
    ]
    const X=0;
    const Y=6;
    const [Products, setProducts] = useState([])

    
    useEffect(() => {
        Axios.post('/api/product/getProducts')
        .then(response => {
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                alert('Failed to fectch product datas')
            }
        })
    }, [])

  
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
            </div>
        </div>
    )
}


export default News;
