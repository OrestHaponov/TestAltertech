import {CHANGE_NAME,CHANGE_COUNT,CHANGE_PRICE,COUNT_ERROR,PRICE_ERROR,CLEAR_FORM,NAME_ERROR,REMOVE_NAME_BORDER,REMOVE_COUNT_BORDER,REMOVE_PRICE_BORDER} from "../Action/ActionTypes";

const initialState ={
    valueName: "",
    valueCount: "",
    valuePrice: "",
    nameError: false,
    countError: false,
    priceError: false,
}

export default function addProduct(state = initialState, action){
    switch(action.type){
        // GET CONTROL INPUTS
            case CHANGE_NAME:
                return{
                    ...state, valueName: action.valueName.target.value
                }
            case CHANGE_COUNT:
                return{
                    ...state, valueCount: action.valueCount.target.value
                }
            case CHANGE_PRICE:
                return{
                    ...state, valuePrice: action.valuePrice.target.value
                }
            // ADD PRODUCT LOGIG
            case CLEAR_FORM:
                return{
                    ...state, valueName: "", valueCount: "", valuePrice: ""
                }
                // CHECK INPUTS
                case NAME_ERROR:
                    return{
                        ...state, nameError: true
                    }
                case COUNT_ERROR:
                    return{
                        ...state, countError: true
                    }
                case PRICE_ERROR:
                    return{
                        ...state, priceError: true
                    }
                case REMOVE_NAME_BORDER:
                    return{
                        ...state, nameError: false
                    }
                case REMOVE_COUNT_BORDER:
                    return{
                        ...state, countError: false
                    }
                case REMOVE_PRICE_BORDER:
                    return{
                        ...state, priceError: false
                    }
        default:
            return state
    }
}