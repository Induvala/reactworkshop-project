import cardList from "../../api/data.json";
let cardListData=cardList.page["content-items"].content.map(item => ({name: item.name, poster: item["poster-image"]}));
console.log("cardListData",cardListData)
let pageTitle=cardList.page.title;
let initialState = {
    itemList:[...cardListData],
    cardListData,
    pageTitle,
    queryCount : 0,
}
const ListReducer=(state=initialState,action)=>{
    switch(action.type) {

        case 'SEARCH' : return {
            ...state,
            itemList : action.payload.length === 0 ? 
            initialState.itemList :
                            [...state.itemList].filter(item => item.name.toLowerCase().includes(action.payload))     
        }

        case 'QUERY_COUNT' : return {
            ...state,
            queryCount : action.payload  
        }
       

        default : return state
    }
}
export default ListReducer;