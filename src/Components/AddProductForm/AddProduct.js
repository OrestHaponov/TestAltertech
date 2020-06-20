import React from 'react';
import {changeName,changeCount,changePrice,addProduct,removeNameErrorBorder,removeCountErrorBorder,removePriceErrorBorder} from "../../Store/Action/AddProduct";
import {useSelector,useDispatch} from "react-redux";

export default function AddProduct(){
    const dispatch = useDispatch();
    const changeNameH = (valueName) => dispatch(changeName(valueName));
    const changeCountH = (valueCount) => dispatch(changeCount(valueCount));
    const changePriceH = (valuePrice) => dispatch(changePrice(valuePrice));
    const addProductH = (name,count,price,bucket) => dispatch(addProduct(name,count,price,bucket));
    const removeNameErrorBorderH = () => dispatch(removeNameErrorBorder());
    const removeCountErrorBorderH = () => dispatch(removeCountErrorBorder());
    const removePriceErrorBorderH = () => dispatch(removePriceErrorBorder());
    const valueNameH = useSelector(state => state.AddProduct.valueName);
    const valueCountH = useSelector(state => state.AddProduct.valueCount);
    const valuePriceH = useSelector(state => state.AddProduct.valuePrice);
    const bucketH = useSelector(state => state.Bucket.bucket);
    const countErrorH = useSelector(state => state.AddProduct.countError);
    const priceErrorH = useSelector(state => state.AddProduct.priceError);
    const nameErrorH = useSelector(state => state.AddProduct.nameError);
    return(
        <div className="add">
            <div className="wrapper">
                <form  className="add__form" onSubmit={()=>addProductH(valueNameH,valueCountH,valuePriceH,bucketH)}>
                    <input type="text" className={nameErrorH === true ? "error" : null} value={valueNameH}  onChange={changeNameH} onInput={removeNameErrorBorderH} placeholder="Name"/>
                    <input type="number" className={countErrorH === true ? "error" : null} value={valueCountH}  onChange={changeCountH} onInput={removeCountErrorBorderH} placeholder="Count"/>
                    <input type="number"  className={priceErrorH === true ? "error" : null} value={valuePriceH}  onChange={changePriceH} onInput={removePriceErrorBorderH} placeholder="Price"/>
                    <input type="submit" value="Add" className="add__form-button"/>
                </form>
            </div>
        </div>
    )
}