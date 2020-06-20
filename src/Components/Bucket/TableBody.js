import React from 'react';
import {deleteProduct,increase,decrease,changeProductCount,onBlurCheckCount} from "../../Store/Action/Bucket";
import DeleteProd from "../../images/delete.png";
import {useSelector,useDispatch} from "react-redux";

export default function TableBody(){
    const dispatch = useDispatch();
    const deleteProductH = (product,bucket) => dispatch(deleteProduct(product,bucket));
    const increaseH = (product,bucket) => dispatch(increase(product,bucket));
    const decreaseH = (product,bucket) => dispatch(decrease(product,bucket));
    const changeProductCountH = (product,bucket) => dispatch(changeProductCount(product,bucket));
    const onBlurCheckCountH = (product,bucket) => dispatch(onBlurCheckCount(product,bucket));
    const bucketH = useSelector(state => state.Bucket.bucket);
    return(
        <React.Fragment>
            {bucketH.map((value,index)=>{
                return(
                    <thead key={index}>
                        <tr>
                            <td>
                                <img src={DeleteProd} onClick={()=>deleteProductH(value,bucketH)} alt=""/>
                                {value.name}
                            </td>
                            <td>
                                <div className="count">
                                    <button onClick={()=>decreaseH(value,bucketH)}>-</button>
                                    <input type="number" onBlur={()=>onBlurCheckCountH(value,bucketH)} value={value.count} onChange={()=>changeProductCountH(value,bucketH)}/>
                                    <button onClick={()=>increaseH(value,bucketH)}>+</button>
                                </div>
                            </td>
                            <td>{value.price}</td>
                            <td>{value.price * value.count}</td>
                        </tr>
                    </thead>
                )
            })}
        </React.Fragment>
    )
}