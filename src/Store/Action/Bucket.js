import {REFRESH_BUCKET,ADD_TOTAL_COUNT,SORT_NAME,SORT_PRICE,SORT_TOTAL,SORT_COUNT} from "./ActionTypes";

// USING IN PRODUCT COUNT LOGIC,INCREASE,DECREASE,DELETE PRODUCT
export function reFresh(bucket){
    return{
        type: REFRESH_BUCKET,
        bucket
    }
}

// PRODUCT COUNT LOGIC
export function changeProductCount(product,bucket){
    return(dispatch)=>{
        bucket.map((value)=>{
            if(value == product){
                let newValue = +event.target.value;
                value.count = newValue;
            }
        })
        dispatch(reFresh(bucket));
    }
}

export function onBlurCheckCount(product,bucket){
    return(dispatch)=>{
        bucket.map((value)=>{
            if(value == product){
                if(value.count <= 0){
                   alert("Only positive numbers");
                   value.count = 1;
                }
            }
        })
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

            dispatch(reFresh(bucket));
        }
    }

// DECREASE

    export function decrease(product,bucket){
        return(dispatch)=>{
            bucket.map((value)=>{
                if(value == product){
                    if(value.count === 0){
                        alert("Just +")
                    }
                    if(value.count === 1){
                        let deleteProduct = confirm("Do you want delete this product?")
                        if(deleteProduct){
                            bucket = bucket.filter(removeProd => removeProd != value)
                        }
                    }else{
                        value.count --;
                    }
                }
            })
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
    //BY ABC
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
            dispatch(reFresh(bucket));
        }
    }

    export function sortName(){
        return{
            type: SORT_NAME
        }
    }

    //BY PRICE
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
            dispatch(reFresh(bucket));
        }
    }

    export function sortPrice(){
        return{
            type: SORT_PRICE
        }
    }

    //BY COUNT

    export function sortByCount(bucket,countFromMinToMax){
        return(dispatch)=>{
            bucket.sort(function(min, max){
                if(countFromMinToMax){
                    return min.count-max.count;
                }else{
                    return max.count-min.count
                }
            })
            dispatch(sortCount());
            dispatch(reFresh(bucket));
        }
    }

    export function sortCount(){
        return{
            type: SORT_COUNT
        }
    }

    //BY TOTAL
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
            dispatch(reFresh(bucket));
        }
    }

    export function sortTotal(){
        return{
            type: SORT_TOTAL
        }
    }


