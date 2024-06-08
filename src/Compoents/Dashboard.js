import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import "../asset/css/global.css";
import "../asset/css/responsive.css";
import { Box,Button } from "@material-ui/core";
import ItemList from "./ItemList";

let ItemPageOne = React.lazy(() => import('./ItemPageOne')); 
function Dashboard(props) {
    let state = useSelector(state => state)

    return (
        <Box className="dashboardDiv">
            {
                state.queryCount > 0 ? 
                    state.itemList.length > 0 ?
                        <Box className="pageDiv">
                            {props.element}
                         </Box>  : <p className="notfound">No Item titles match your search.</p> :
                         <>

                                <Suspense fallback={<>Loading...</>}>
                                <ItemPageOne/>

                                {/* <Button className="loadMore">Load More</Button>  */}
                                  
                                </Suspense>    </>
            }
        </Box>
        
    )
    
}

export default React.memo(ItemList(Dashboard))