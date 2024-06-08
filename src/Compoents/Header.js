import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { search, setValueCount } from './action/action';
import Back from "../asset/images/Back.png";
import searchBtn from "../asset/images/search.png";
import "../asset/css/global.css";
import "../asset/css/responsive.css";

function Header() {

    let state = useSelector(state => state.pageTitle)
    let dispatch = useDispatch()
    let [ searchItem, setSearchItem ] = useState(false)
    let [ queryText, setQueryText ] = useState('')

    let handleSearch = () => {
        setSearchItem(!searchItem)
    }

    let handleQuery = (e) => {
        let query = e.target.value;
        dispatch(setValueCount(query.length))
        setQueryText(query)
        dispatch(search(query))
    }

    
    return (
    
            <div className="headerContainer">
                <img className="Navbarback" src={Back} alt="Back Img"/>
                <div className={searchItem ? "scrollbar" : "headertitle"}>
                    <div className={searchItem}>{state}</div></div>

                { 
                    searchItem && 
                    <input className="headerInputDiv" onChange={handleQuery} type="text" value={queryText}></input> 
                } 

                <img className="searchImg" onClick={handleSearch} src={searchBtn} alt="Search Img"/> 
            </div>

    )
}

export default Header;