import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import RenderLatestNews from './utils/RenderLatestNews'
import RenderFeatured from './utils/RenderFeatured'
import RenderFirstPost from './utils/RenderFirstPost'
import RenderCoronaVırus from './utils/RenderCoronaVırus'
import RenderItsPersonal from './utils/RenderItsPersonal'
import RenderBottomPart from './utils/RenderBottomPart'
import RenderVideoPage from './utils/RenderVideoPage'
import RenderWhatsHappening from './utils/RenderWhatsHappening'
import RenderPersonalNews from './utils/RenderPersonalNews'
import RenderLife from './utils/RenderLife'
import RenderLatestPhone from './utils/RenderLatestPhone'
import Title from './Title'
import { useMediaQuery } from 'react-responsive'


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

    const [Products, setProducts] = useState([])
    const isBigEnough = useMediaQuery({
        query: '(min-width: 780px)'
    })
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
        if (product.categories === 1){
            return product
        }
        return product
    })

    // const FilteredPolitics = Products.slice(11, 100).filter(product => {
    //     if (product.categories === 2) {
    //         return product
    //     }
    //     return product
    // })



    return (
        <div>
            <div className="container">
                <div className="column col-8 col-s-12 left1">
                    <div>
                        <RenderFirstPost
                            Products={Products}
                            X={0}
                            Y={1}
                        />
                    </div>
                    {isBigEnough ? <div >
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
                            <div className="padding30px" />
                        </div>

                        <hr />
                    </div>
                        : <div >
                            <RenderLatestPhone
                                Products={Products}
                                X={1}
                                Y={7}
                                categories={categories}
                            />
                        </div>
                    }


                </div>
                <div className="column right col-4 col-s-12 right1">
                    <h4><Title title="CORONAVIRUS" /></h4>
                    <br />
                    <RenderCoronaVırus
                        Products={FilteredCoronaVırus}
                        X={0}
                        Y={5}
                        categories={categories}
                    />
                </div>
                <div className="column col-8 col-s-12 left1">
                    <br /><br />
                    <h4><Title title="FEATURED" /></h4>
                    <div className="featured img-full">
                        <RenderFeatured
                            X={7}
                            Y={9}
                            Products={Products}
                            categories={categories}
                        />
                    </div>
                    {isBigEnough ? <div className="padding30px" /> : null}
                    <div className="featured img-full">
                        <RenderFeatured
                            X={9}
                            Y={11}
                            Products={Products}
                            categories={categories}
                        />
                    </div>
                    <br />
                    <hr />
                </div>
            </div>
            <div >
                <RenderVideoPage />
            </div>
            <div className="container">
                <div className="column col-8 col-s-12 left1">
                    <h4 className="montserrat"><b>LIFE</b></h4>
                    <div className="lifebox">
                        <div className="lifebox2 img-full">
                            <RenderLife
                                X={11}
                                Y={12}
                                Products={Products}
                                categories={categories}
                            />
                        </div>
                        <div className="padding30px" />
                        <div className="lifebox2 img-full">
                            <RenderLife
                                X={12}
                                Y={13}
                                Products={Products}
                                categories={categories}
                            />
                        </div>
                        <div className="padding30px2" />
                        <div className="lifebox2 img-full">
                            <RenderLife
                                X={13}
                                Y={14}
                                Products={Products}
                                categories={categories}
                            />
                        </div>
                        <div className="padding30px" />
                        <div className="lifebox2 img-full">
                            <RenderLife
                                X={14}
                                Y={15}
                                Products={Products}
                                categories={categories}
                            />
                        </div>
                    </div>
                    <br />

                </div>

                <div className="column right col-4 col-s-12 right1 ">
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
                <div className="column col-8 col-s-12 left1 ">

                    {isBigEnough ?
                        <div className="img-full">
                            <br />
                            <br />
                            <hr />
                            <RenderPersonalNews
                                X={11}
                                Y={21}
                                Products={Products}
                                categories={categories}
                            />
                        </div>
                        : null}
                    <h4 className="bottompartbox"><Title title="POLITICS" /></h4>
                    {isBigEnough ? <div>
                        <div className="bottompart img-full">
                            <RenderBottomPart
                                Products={Products}
                                X={0}
                                Y={4}
                                categories={categories}
                            />

                        </div>
                        <hr />
                    </div>
                        :
                        <div >
                            <RenderLatestPhone
                                Products={Products}
                                X={0}
                                Y={4}
                                categories={categories}
                            />
                        </div>
                    }

                    <h4 className="bottompartbox"><Title title="ENTERTAINMENT" /></h4>
                    {isBigEnough ? <div>
                        <div className="bottompart img-full">
                            <RenderBottomPart
                                Products={Products}
                                X={4}
                                Y={8}
                                categories={categories}
                            />

                        </div>
                        <hr />
                    </div>
                        :
                        <div >
                            <RenderLatestPhone
                                Products={Products}
                                X={4}
                                Y={8}
                                categories={categories}
                            />
                        </div>
                    }

                    <h4 className="bottompartbox"><Title title="LIFE" /></h4>
                    {isBigEnough ? <div>
                        <div className="bottompart img-full">
                            <RenderBottomPart
                                Products={Products}
                                X={8}
                                Y={12}
                                categories={categories}
                            />

                        </div>
                        <hr />
                    </div>
                        :
                        <div >
                            <RenderLatestPhone
                                Products={Products}
                                X={8}
                                Y={12}
                                categories={categories}
                            />
                        </div>
                    }

                    <h4 className="bottompartbox"><Title title="shoping" /></h4>
                    {isBigEnough ? <div>
                        <div className="bottompart img-full">
                            <RenderBottomPart
                                Products={Products}
                                X={12}
                                Y={16}
                                categories={categories}
                            />

                        </div>
                        <hr />
                    </div>
                        :
                        <div >
                            <RenderLatestPhone
                                Products={Products}
                                X={12}
                                Y={16}
                                categories={categories}
                            />
                        </div>
                    }

                </div>
            </div>


        </div>

    )
}


export default Home;
