
import { connect } from 'react-redux'

import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import RenderNews from './utils/RenderNews'
import Title from './Title'


function SearchPage(props) {

    const categories = [
        { _id: 0, name: "U.S. NEWS" },
        { _id: 1, name: "CORONAVIRUS" },
        { _id: 2, name: "POLITICS" },
        { _id: 3, name: "ENTERTAINMENT" },
        { _id: 4, name: "WORLD NEWS" },
        { _id: 5, name: "LIFE" },
        { _id: 6, name: "SHOPIPING" }
    ]
    const [Suspense, setSuspense] = useState(0)
    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [PostSize, setPostSize] = useState()
    const Limit = 100
    const searchTerms= props.match.params.searchTerms;

    useEffect(() => {
        const variables = {
            skip: Skip,
            limit: Limit,
            searchTerms: searchTerms
        }

        getProducts(variables)

        

    }, [])

    const getProducts = (variables) => {
        Axios.post(`/api/product/getProducts?searchTerms=${searchTerms}&type=single`, variables)
            .then(response => {
                if (response.data.success) {
                    
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    } else {
                        setProducts(response.data.products)
                    }
                    setSuspense(1)
                    setPostSize(response.data.postSize)
                    console.log(PostSize)
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
            searchTerm: searchTerms
        }
        getProducts(variables)
        setSkip(skip)
    }

    const titleWithPost = `Posts Related With "${searchTerms}"`
    const titleWithoutPost = `There is no Post Related With "${searchTerms}"`

    return (
        <div>
            {!Suspense ? <div className="container"></div> :
                <div>
                    <div className="container">
                        <div className="column col-8 col-s-12 left1">
                        {PostSize > 0 ? <section>
                            <h4><Title title={titleWithPost} /></h4>
                            <div >
                                <RenderNews
                                    Products={Products}
                                    X={0}
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
                        </section> : 
                        <section className="container">
                            <h4><Title title={titleWithoutPost} /></h4>
                        </section>}
                            
                        </div>
                    </div>
                </div>
            }

        </div>


    )
}


const mapStateToProps = (state) => {
    return {
        searchTerms: state.searchTerms
    }
}


export default connect(mapStateToProps)(SearchPage)

