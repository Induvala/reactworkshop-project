import React from "react";
import ItemList from "./ItemList";
import { Box } from "@material-ui/core";
import "../asset/css/global.css";
import "../asset/css/responsive.css";
function ItemPageOne(props) {

    return (
        <Box className="pageDiv">
            {props.element}
        </Box>
    )
}

export default React.memo(ItemList(ItemPageOne))