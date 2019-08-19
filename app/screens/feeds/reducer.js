
const initialState = {
    todos: [],
}

export default function todosReducer(state = initialState, action) {

    switch(action.type) {
    
        case 'FETCH_TODOS_SUCCESS':
            return {
                ...state,
                todos: action.payload
            }
            
        default:
            return{ 
            ...state
        }
            
    }
}