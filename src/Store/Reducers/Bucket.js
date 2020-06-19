import {REFRESH_BUCKET,CLEAR,ADD_TOTAL_COUNT} from "../Action/ActionTypes";

const initialState ={
    bucket: [
        {
            name: "zips one",
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
        default:
            return state
    }
}