import {CHANGE_NAME,CHANGE_COUNT,CHANGE_PRICE,COUNT_ERROR,PRICE_ERROR,REFRESH_BUCKET,CLEAR_FORM,NAME_ERROR,REMOVE_NAME_BORDER,REMOVE_COUNT_BORDER,REMOVE_PRICE_BORDER} from "./ActionTypes";

// GET CONTROL INPUTS
    export function changeName(valueName){
        return{
            type: CHANGE_NAME,
            valueName
        }
    }

    export function changeCount(valueCount){
        return{
            type: CHANGE_COUNT,
            valueCount
        }
    }

    export function changePrice(valuePrice){
        return{
            type: CHANGE_PRICE,
            valuePrice
        }
    }

    // ADD PRODUCT LOGIG
    export function addProduct(name,count,price,bucket){
        return(dispatch)=>{
            event.preventDefault();
            let test = true;
            if(name == "" || name == " "){
                dispatch(nameError());
                test = false;
            }
            if (count <= 0){
                dispatch(countError());
                test = false;
            }
            if (price <= 0){
                dispatch(priceError());
                test = false
            }
            if(test){
                let product = {};
                product["name"] = name;
                product["count"] = count;
                product["price"] = price;
                bucket.push(product);
                dispatch(reFresh(bucket));
                dispatch(clearForm());
            }
        }
    }

    export function clearForm(){
        return{
            type: CLEAR_FORM
        }
    }

    // CHECK INPUTS
        export function nameError(){
            return{
                type: NAME_ERROR
            }
        }

        export function countError(){
            return{
                type: COUNT_ERROR
            }
        }

        export function priceError(){
            return{
                type: PRICE_ERROR
            }
        }

        export function reFresh(bucket){
            return{
                type: REFRESH_BUCKET,
                bucket
            }
        }

        export function removeNameErrorBorder(){
            return{
                type: REMOVE_NAME_BORDER
            }
        }

        export function removeCountErrorBorder(){
            return{
                type: REMOVE_COUNT_BORDER
            }
        }

        export function removePriceErrorBorder(){
            return{
                type: REMOVE_PRICE_BORDER
            }
        }