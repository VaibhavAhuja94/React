const initialState = {
    pending: false,
    allBlog: [],
    error: null
}

export default function getBlogByIdReducer(state = initialState, action) {
    switch(action.type) {
        case 'GETBLOGIDPENDING': 
            return {
                ...state,
                pending: true
            }
        case 'GETBLOGIDSUCCESS':
            return {
                ...state,
                pending: false,
                allBlog: action.payload
            }
        case 'GETBLOGIDERROR':
            return {
                ...state,
                pending: false,
                error: action.payload
            }
            
        default: 
            return state;
    }
}
