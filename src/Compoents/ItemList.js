import React from "react";
import { useSelector } from "react-redux";
import "../asset/css/global.css";
import "../asset/css/responsive.css";

const ItemList = (ItemComponent) => {

    const Component = () => {
        const state = useSelector(state => state)
        const stateVal = state.itemList;
        console.log("stateVal", stateVal)
        const ListElement = stateVal?.map((item, index) =>

            <div key={index} className="listMainBox">
                <img src={require(`../asset/images/${item.poster.includes('posterthatismissing') ? 'placeholder_for_missing_posters.png' : item.poster}`)}
                    alt="movie-poster" loading="lazy"  />
                <p title={item.name}>{item.name.length > 12 ? `${item.name.slice(0, 12)}...` : item.name}</p>
            </div>)

        return (

            <ItemComponent element={ListElement} />

        )
    }
    return Component
}

export default ItemList