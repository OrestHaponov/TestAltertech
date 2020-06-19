import {REFRESH_BUCKET,CLEAR,ADD_TOTAL_COUNT,SORT_PRICE,SORT_NAME,SORT_TOTAL} from "../Action/ActionTypes";

const initialState ={
    bucket: [
        {
            name: "Zyktrc",
            price: 100,
            count: 1,
        },
        {
            name: "product two",
            price: 300,
            count: 1,
        },
        {
            name: "product one",
            price: 200,
            count: 1,
        },
        {
            name: "Abricos two",
            price: 400,
            count: 1,
        },
    ],
    sumTotal: 0,
    priceFromMinToMax: false,
    nameFromAToZ: false,
    totalFromMinToMax: false,
}

export default function bucket(state = initialState, action){
    switch(action.type){
            case REFRESH_BUCKET:
                return{
                    ...state, bucket: action.bucket
                }
            case CLEAR:
                return{
                    ...state, bucket: []
                }
        // TOTAL LOGIG
            case ADD_TOTAL_COUNT:
                return{
                    ...state, sumTotal: action.totalToPay
                }
        // SORT LOGIC
            case SORT_PRICE:
                return{
                    ...state, priceFromMinToMax: !state.priceFromMinToMax
                }
            case SORT_NAME:
                return{
                    ...state, nameFromAToZ: !state.nameFromAToZ
                }
            case SORT_TOTAL:
                return{
                    ...state, totalFromMinToMax: !state.totalFromMinToMax
                }
        default:
            return state
    }
}