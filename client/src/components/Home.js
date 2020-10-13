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
        { _id: 6, name: "SHOPIPING" },
        { _id: 7, name: "IMPACT" },
        { _id: 8, name: "COMMUNITIES" },
    ]

    const [isLoaded, setIsLoaded] = useState(0)
    const [Products, setProducts] = useState([])
    const [SearchTerms, setSearchTerms] = useState("")
    const isBigEnough = useMediaQuery({
        query: '(min-width: 780px)'
    })
    useEffect(() => {
        const variables = {
            searchTerm: SearchTerms
        }

        getProducts(variables)
    }, [])

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
            .then(response => {
                if (response.data.success) {
                    setIsLoaded(1)
                    setProducts(response.data.products)
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }

    const FilteredCoronaVırus = Products.slice(11, 100).filter(product => {
        if (product.categories === 1) {
            return product
        }
    })

    const FilteredEntertainment = Products.slice(0, 100).filter(product => {
        if (product.categories === 3) {
            return product
        }
    })

    const FilteredLife = Products.slice(0, 100).filter(product => {
        if (product.categories === 5) {
            return product
        }
    })

    const FilteredShopping = Products.slice(0, 100).filter(product => {
        if (product.categories === 6) {
            return product
        }
    })

    const FilteredImpact = Products.slice(0, 100).filter(product => {
        if (product.categories === 7) {
            return product
        }
    })

    const FilteredCommunities = Products.slice(0, 100).filter(product => {
        if (product.categories === 8) {
            return product
        }
    })

    const FilteredPolitics = Products.slice(11, 100).filter(product => {
        if (product.categories === 2) {
            return product
        }
    })

    // const FilteredPolitics = Products.slice(11, 100).filter(product => {
    //     if (product.categories === 2) {
    //         return product
    //     }
    //     return product
    // })

    const updateSearchTerms = (newSearchTerm) => {

        const variables = {
            searchTerm: newSearchTerm
        }


        setSearchTerms(newSearchTerm)
        console.log(SearchTerms)
        getProducts(variables)
    }



    return (

        <div >
            {isLoaded === 0 ? <div className="container"></div> :
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
                            {isBigEnough ?
                                <div>
                                    <div className="featured2 img-full">
                                        <RenderFeatured
                                            X={7}
                                            Y={9}
                                            Products={Products}
                                            categories={categories}
                                        />
                                    </div>
                                    <div className="padding30px" />
                                    <div className="featured2 img-full">
                                        <RenderFeatured
                                            X={9}
                                            Y={11}
                                            Products={Products}
                                            categories={categories}
                                        />
                                    </div>
                                </div> :
                                <div>
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
                                </div>}
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
                                        X={0}
                                        Y={1}
                                        Products={FilteredLife}
                                        categories={categories}
                                    />
                                </div>
                                <div className="padding30px" />
                                <div className="lifebox2 img-full">
                                    <RenderLife
                                        X={1}
                                        Y={2}
                                        Products={FilteredLife}
                                        categories={categories}
                                    />
                                </div>
                                <div className="padding30px2" />
                                <div className="lifebox2 img-full">
                                    <RenderLife
                                        X={2}
                                        Y={3}
                                        Products={FilteredLife}
                                        categories={categories}
                                    />
                                </div>
                                <div className="padding30px" />
                                <div className="lifebox2 img-full">
                                    <RenderLife
                                        X={3}
                                        Y={4}
                                        Products={FilteredLife}
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
                                X={45}
                                Y={50}
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
                                        X={34}
                                        Y={44}
                                        Products={Products}
                                        categories={categories}
                                    />
                                </div>
                                : null}
                            <h4 className="bottompartbox"><Title title="POLITICS" /></h4>
                            {isBigEnough ? <div>
                                <div className="bottompart img-full">
                                    <RenderBottomPart
                                        Products={FilteredPolitics}
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
                                        Products={FilteredPolitics}
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
                                        Products={FilteredEntertainment}
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
                                        Products={FilteredEntertainment}
                                        X={0}
                                        Y={4}
                                        categories={categories}
                                    />
                                </div>
                            }

                            <h4 className="bottompartbox"><Title title="LIFE" /></h4>
                            {isBigEnough ? <div>
                                <div className="bottompart img-full">
                                    <RenderBottomPart
                                        Products={FilteredLife}
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
                                        Products={FilteredLife}
                                        X={4}
                                        Y={8}
                                        categories={categories}
                                    />
                                </div>
                            }

                            <h4 className="bottompartbox"><Title title="shoping" /></h4>
                            {isBigEnough ? <div>
                                <div className="bottompart img-full">
                                    <RenderBottomPart
                                        Products={FilteredShopping}
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
                                        Products={FilteredShopping}
                                        X={0}
                                        Y={4}
                                        categories={categories}
                                    />
                                </div>
                            }

                            <h4 className="bottompartbox"><Title title="impact" /></h4>
                            {isBigEnough ? <div>
                                <div className="bottompart img-full">
                                    <RenderBottomPart
                                        Products={FilteredImpact}
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
                                        Products={FilteredImpact}
                                        X={0}
                                        Y={4}
                                        categories={categories}
                                    />
                                </div>
                            }

                            <h4 className="bottompartbox"><Title title="communities" /></h4>
                            {isBigEnough ? <div>
                                <div className="bottompart img-full">
                                    <RenderBottomPart
                                        Products={FilteredCommunities}
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
                                        Products={FilteredCommunities}
                                        X={0}
                                        Y={4}
                                        categories={categories}
                                    />
                                </div>
                            }

                        </div>
                    </div>
                </div>}



        </div>

    )
}


export default Home;
