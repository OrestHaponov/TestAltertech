import {CLEAR,REFRESH_BUCKET,ADD_TOTAL_COUNT,SORT_PRICE,SORT_NAME,SORT_TOTAL} from "./ActionTypes";

// USING IN PRODUCT COUNT LOGIC,INCREASE,DECREASE,DELETE PRODUCT
export function clear(){
    return{
        type: CLEAR
    }
}

export function reFresh(bucket){
    return{
        type: REFRESH_BUCKET,
        bucket
    }
}

// PRODUCT COUNT LOGIC
export function changeCount(product,bucket){
    return(dispatch)=>{
        bucket.map((value)=>{
            if(value == product){
                let newValue = +event.target.value;
                value.count = newValue;
            }
        })
        dispatch(clear());
        dispatch(reFresh(bucket));
    }
}

// INCREASE

    export function increase(product,bucket){
        return(dispatch)=>{
            bucket.map((value)=>{
                if(value == product){
                    value.count ++;
                }
            })
            dispatch(clear());
            dispatch(reFresh(bucket));
        }
    }

// DECREASE

    export function decrease(product,bucket){
        return(dispatch)=>{
            bucket.map((value)=>{
                if(value == product){
                    if(value.count === 1){
                        let deleteProduct = confirm("Внатурі видалити?");
                        if(deleteProduct){
                            bucket = bucket.filter(removeProd => removeProd != value)
                        }
                    }else{
                        value.count --;
                    }
                }
            })
            dispatch(clear());
            dispatch(reFresh(bucket));
        }
    }

// TOTAL LOGIG

    export function changeTotal(bucket){
        return(dispatch)=>{
            let totalForProducts = []
            bucket.map((value)=>{
                totalForProducts.push(value.price * value.count)
            })
            let totalToPay = totalForProducts.reduce((x,y) => x + y);
            dispatch(addTotalCount(totalToPay));
        }
    }

    export function addTotalCount(totalToPay){
        return{
            type: ADD_TOTAL_COUNT,
            totalToPay
        }
    }


// DELETE PRODUCT

    export function deleteProduct(product,bucket){
        return(dispatch)=>{
            bucket = bucket.filter(removeProd => removeProd != product);
            dispatch(reFresh(bucket));
        }
    }

// SORT LOGIC

    export function sortByPrice(bucket,priceFromMinToMax){
        return(dispatch)=>{
            bucket.sort(function(min, max){
                if(priceFromMinToMax){
                    return min.price-max.price;
                }else{
                    return max.price-min.price
                }
            })
            dispatch(sortPrice());
            dispatch(clear());
            dispatch(reFresh(bucket));
        }
    }

    export function sortPrice(){
        return{
            type: SORT_PRICE
        }
    }

    export function sortByABC(bucket,nameFromAToZ){
        return(dispatch)=>{
            bucket.sort(function(a, b){
                var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                    if(nameFromAToZ){
                        if (nameA < nameB) 
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0
                    }else{
                        if (nameA > nameB) 
                        return -1
                        if (nameA < nameB)
                            return 1
                        return 0
                    }
                })
            dispatch(sortName());
            dispatch(clear());
            dispatch(reFresh(bucket));
        }
    }

    export function sortName(){
        return{
            type: SORT_NAME
        }
    }

    export function sortByTotalProduct(bucket,totalFromMinToMax){
        return(dispatch)=>{
            bucket.sort(function(min, max){
                if(totalFromMinToMax){
                    return (min.price*min.count-max.price*max.count)
                }else{
                    return ( max.price*max.count-min.price*min.count)
                }
            })
            dispatch(sortTotal());
            dispatch(clear());
            dispatch(reFresh(bucket));
        }
    }

    export function sortTotal(){
        return{
            type: SORT_TOTAL
        }
    }