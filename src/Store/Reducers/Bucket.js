import {REFRESH_BUCKET,CLEAR} from "../Action/ActionTypes";

const initialState ={
    bucket: [
        {
            name: "product one",
            price: 100,
            count: 1,
        },
        {
            name: "product two",
            price: 200,
            count: 1,
        },
    ],
}

export default function bucket(state = initialState, action){
    switch(action.type){

        default:
            return state
    }
}