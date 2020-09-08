import React, { useState } from 'react'
import { FaAlignJustify } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md"


function SearchFeature(props) {

    const [SearchTerms, setSearchTerms] = useState("")
    const [SearchClicked, setSearchClicked] = useState(false)
    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)

    }

    const SearchCheck = () => {
        setSearchClicked(!SearchClicked)
    }

    return (
        <div className="nav-links nav-left">
            <button
                type="button"
                className="nav-button"
            >
                <FaAlignJustify className="nav-icon" />
            </button>
            {
                !SearchClicked ? <button
                    style={{ marginLeft: "20px", height:"30px" }}
                    type="button"
                    className="nav-button"
                    onClick={SearchCheck}
                >
                    <FiSearch className="nav-icon" />
                </button> : <div className="searchbox">
                        <form >
                            <i className="nav-button input-icon-search"><FiSearch /></i>
                            <i onClick={SearchCheck} className="nav-button input-icon-cancel"><MdClose /></i>
                            <input
                                value={SearchTerms}
                                onChange={onChangeSearch}
                                style={{ marginLeft: "20px" }}
                                placeholder="Find Huffpost Articles"
                                className="searchinput"
                                type="text"
                            />
                        </form>
                    </div>
            }
        </div>

    )


}

export default SearchFeature
