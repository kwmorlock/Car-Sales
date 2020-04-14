export const ADD_FEATURE = 'ADD_ITEM'
export const REMOVE_FEATURE = 'REMOVE_ITEM'

export const addFeature = feature => {
    return {type: ADD_FEATURE, payload: feature}
}

export const removeFeature = feature => {
    return{type: REMOVE_FEATURE, payload: feature}
}


