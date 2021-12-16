export default function DataReducer(state=null,action) {

    switch(action.type)
    {
        case "ALL":
            
            return { ...state, products: action.products };
        
        default :
            return state;
    }
}