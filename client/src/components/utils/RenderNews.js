import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'


function RenderNews(props) {

    useEffect(() => {
        displayWindowSize()
    })


    const isTablet = useMediaQuery({
        query: '(min-width: 780px)'
    })

    window.onresize = function () { displayWindowSize() }

    function displayWindowSize() {
        function resizeText20() {
            var x = document.getElementsByClassName("news-text");
            for (var i = 0; i < x.length; i++) {
                x[i].style.fontSize = "20px";
            }
        };
        function resizeText12() {
            var x = document.getElementsByClassName("news-text");
            for (var i = 0; i < x.length; i++) {
                x[i].style.fontSize = "14px";
            }
        };
        //         height: 107px;
        //   width: 186px;
        function bigBox() {
            var x = document.getElementsByClassName("newsbox");
            for (var i = 0; i < x.length; i++) {
                x[i].style.paddingBottom = "120px";
            }
        }
        function smallBox(){
            var x = document.getElementsByClassName("newsbox");
            for (var i = 0; i < x.length; i++) {
                x[i].style.paddingBottom = "100px";
            }
        }
        function bigImage() {
            var x = document.getElementsByClassName("news-img");
            for (var i = 0; i < x.length; i++) {
                x[i].style.height = "107px";
                x[i].style.width = "186px"
            }
        }
        function smallImage() {
            var x = document.getElementsByClassName("news-img");
            for (var i = 0; i < x.length; i++) {
                x[i].style.height = "85px";
                x[i].style.width = "85px"
            }
        }
        if (isTablet) {
            resizeText20()
            bigImage()
            bigBox()
        } else {
            resizeText12()
            smallImage()
            smallBox()
        }
    }

    const X = props.X;
    const Y = props.Y;
    const Products = props.Products;

    return (Products.slice(X, Y).map((product) => {
        const path = isTablet ? `../${product.imageshorizontal}` : `../${product.imagesvertical}`
        return <div >
            <div className="newsbox">
                <Link to={`/product/${product._id}`}><img className="news-img" src={path} alt={path} /></Link>
                <h3 className="news-text"><Link to={`/product/${product._id}`}>{product.title}</Link></h3>
                {isTablet ? <p className="news-p ">{product.subtitle}</p> : null}

            </div>
            <hr />
        </div>
    }))

}


export default RenderNews;