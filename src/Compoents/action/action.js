export function search(query) {
    return {
        type : 'SEARCH',
        payload : query.toLowerCase()
    }
}

export function setValueCount(query) {
    return {
        type : 'QUERY_COUNT',
        payload : query
    }
}