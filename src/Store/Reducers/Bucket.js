import {REFRESH_BUCKET,ADD_TOTAL_COUNT,SORT_PRICE,SORT_NAME,SORT_TOTAL,SORT_COUNT} from "../Action/ActionTypes";

const initialState ={
    bucket: [],
    sumTotal: 0,
    priceFromMinToMax: false,
    countFromMinToMax: false,
    nameFromAToZ: false,
    totalFromMinToMax: false,
}

export default function bucket(state = initialState, action){
    switch(action.type){
            case REFRESH_BUCKET:
                return{
                    ...state, bucket: [...action.bucket]
                }
        // TOTAL LOGIG
            case ADD_TOTAL_COUNT:
                return{
                    ...state, sumTotal: action.totalToPay
                }
        // SORT LOGIC
            case SORT_NAME:
                return{
                    ...state, nameFromAToZ: !state.nameFromAToZ
                }
            case SORT_COUNT:
                return{
                    ...state, countFromMinToMax: !state.countFromMinToMax
                }
            case SORT_PRICE:
                return{
                    ...state, priceFromMinToMax: !state.priceFromMinToMax
                }
            case SORT_TOTAL:
                return{
                    ...state, totalFromMinToMax: !state.totalFromMinToMax
                }
        default:
            return state
    }
}