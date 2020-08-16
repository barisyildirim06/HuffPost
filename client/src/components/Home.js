import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import RenderLatestNews from './utils/RenderLatestNews'
import RenderFeatured from './utils/RenderFeatured'
import RenderFirstPost from './utils/RenderFirstPost'
import RenderCoronaVırus from './utils/RenderCoronaVırus'
import RenderWhatsHappening from './utils/RenderWhatsHappening'
import Title from './Title'


function Home() {
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

    const FilteredCoronaVırus = Products.slice(11,100).filter(product=>{
        if (product.categories == 1){
            return  product
        }
    })


  
    return (

        <div className="container">
            <div className="column col-8 col-s-12 left1 img-full">
                <div>
                    <RenderFirstPost 
                    Products={Products}
                    X={0}
                    Y={1}
                    />
                </div>
                <h4><Title title="LATEST NEWS" /></h4>
                <div className="latestnews img-full">
                    <RenderLatestNews 
                    Products={Products}
                    X={1}
                    Y={4}
                    categories={categories}
                    />
                </div>
                <div className="latestnews img-full">
                    <RenderLatestNews 
                    Products={Products}
                    X={4}
                    Y={7}
                    categories={categories}
                    />
                </div>
            </div>
            <div className="column right col-4 col-s-12 right1">
                <h6><Title title="CORONAVIRUS" /></h6>
                <RenderCoronaVırus 
                    Products={FilteredCoronaVırus}
                    X={0}
                    Y={5}
                    categories={categories}
                    />
            </div>
            <div className="column col-8 col-s-12 left1">
                <hr /><br /><br /><br />
                <h4><Title title="FEATURED" /></h4>
                <div className="featured img-full">
                <RenderFeatured
                X={7}
                Y={9}
                Products={Products}
                categories={categories}
                />
                </div>
                <div className="featured img-full">
                <RenderFeatured
                X={9}
                Y={11}
                Products={Products}
                categories={categories}
                />
                </div>
                
            </div>
            <div className="column right col-4 col-s-12 right1 ">
                <br />
                <br />
                <br />
                <h4><Title title="👇WHAT'S HAPPENING👇" /></h4>
                <RenderWhatsHappening
                X={12}
                Y={17}
                Products={Products}
                />
            </div>
        </div>
    )
}


export default Home;
