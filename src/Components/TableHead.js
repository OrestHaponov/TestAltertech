import React from 'react';
import {sortByPrice,sortByABC,sortByTotalProduct} from "../Store/Action/Bucket";
import {useSelector,useDispatch} from "react-redux";

export default function TableHead(props){
    const dispatch = useDispatch();
    const sortByPriceH = (bucket,priceFromMinToMax) => dispatch(sortByPrice(bucket,priceFromMinToMax));
    const sortByABCH = (bucket,nameFromAToZ) => dispatch(sortByABC(bucket,nameFromAToZ));
    const sortByTotalProductH = (bucket,totalFromMinToMax) => dispatch(sortByTotalProduct(bucket,totalFromMinToMax));
    const bucketH = useSelector(state => state.Bucket.bucket);
    const priceFromMinToMaxH = useSelector(state => state.Bucket.priceFromMinToMax);
    const nameFromAToZH = useSelector(state => state.Bucket.nameFromAToZ);
    const totalFromMinToMaxH = useSelector(state => state.Bucket.totalFromMinToMax);
    return(
        <thead>
            <tr>
                <th onClick={()=>sortByABCH(bucketH,nameFromAToZH)}>Name</th>
                <th>Count</th>
                <th onClick={()=>sortByPriceH(bucketH,priceFromMinToMaxH)}>Price</th>
                <th onClick={()=>sortByTotalProductH(bucketH,totalFromMinToMaxH)}>Total</th>
            </tr>
        </thead>
    )
}