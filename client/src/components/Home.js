import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import RenderLatestNews from './utils/RenderLatestNews'
import RenderFeatured from './utils/RenderFeatured'
import RenderFirstPost from './utils/RenderFirstPost'
import RenderCoronaVırus from './utils/RenderCoronaVırus'
import RenderItsPersonal from './utils/RenderItsPersonal'
import RenderBottomPart from './utils/RenderBottomPart'
import RenderWhatsHappening from './utils/RenderWhatsHappening'
import RenderPersonalNews from './utils/RenderPersonalNews'
import Title from './Title'


function Home() {
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

    const FilteredCoronaVırus = Products.slice(11, 100).filter(product => {
        if (product.categories == 1) {
            return product
        }
    })

    const FilteredPolitics = Products.slice(11, 100).filter(product => {
        if (product.categories == 2) {
            return product
        }
    })



    return (
        <div>
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
                    <h4><Title title="CORONAVIRUS" /></h4>
                    <br/>
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
                    <br />
                    <div className="featured img-full">
                        <RenderFeatured
                            X={9}
                            Y={11}
                            Products={Products}
                            categories={categories}
                        />
                    </div>
                    <br/>
                <br/>

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
            <div >
                
                <RenderItsPersonal />
            </div>
            <div className="container">
                <div className="column col-8 col-s-12 left1 img-full">
                    <div >
                        <br/>
                        <br/>
                        <hr/>
                        <RenderPersonalNews
                            X={11}
                            Y={21}
                            Products={Products}
                            categories={categories}
                        />
                    </div>
                    <br/>
                    <br/>
                    <h4><Title title="POLITICS" /></h4>
                    <br/>
                    <div className="bottompart img-full">
                        <RenderBottomPart
                            Products={FilteredPolitics}
                            X={0}
                            Y={4}
                            categories={categories}
                        />
                    </div>
                    <hr/>
                    <br/>
                    <br/>
                    <h4><Title title="POLITICS" /></h4>
                    <br/>
                    <div className="bottompart img-full">
                        <RenderBottomPart
                            Products={FilteredPolitics}
                            X={0}
                            Y={4}
                            categories={categories}
                        />
                    </div>
                </div>
            </div>
            

        </div>

    )
}


export default Home;
