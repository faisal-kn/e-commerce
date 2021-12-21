import dataArray from '../../data/Data'
export default function DataReducer(state=dataArray,action) {

    switch(action.type)
    {
        case "ALL":
            state=dataArray;
            return state;
        case "MOBILE":
            state=dataArray.filter(element => element.category==="mobile");
            return state;
        case "TV":
            state=dataArray.filter(element => element.category==="tv");
            return state;
        case "LAPTOP":
            state=dataArray.filter(element => element.category==="laptop");
            return state;
        case "MENFOOTWEAR":
            state=dataArray.filter(element => element.category==="men's footwear");
            return state;
        case "WOMENFOOTWEAR":
            state=dataArray.filter(element => element.category==="women's footwear");
            return state;
        case "MENCLOTHING":
            state=dataArray.filter(element => element.category==="men's clothing");
            return state;
        case "WOMENCLOTHING":
            state=dataArray.filter(element => element.category==="women's clothing");
            return state;
        default :
            return state;
    }
}