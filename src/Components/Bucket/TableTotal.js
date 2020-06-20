import React from 'react';
import {changeTotal} from "../../Store/Action/Bucket";
import {useSelector,useDispatch} from "react-redux";
import {useEffect,useRef} from "react";

export default function TableTotal(){
    const dispatch = useDispatch();
    const changeTotalH = (bucket) => dispatch(changeTotal(bucket));
    const bucketH = useSelector(state => state.Bucket.bucket);
    const sumTotalH = useSelector(state => state.Bucket.sumTotal);
    const prevCountRef = useRef();
    useEffect(() => {
        if(bucketH.length !== 0){
            if(prevCountRef.bucketH !== bucketH){
                changeTotalH(bucketH);
            }
        }
      });
    return(
        <thead>
            <tr>
                <td colSpan="3"></td>
                <td>{sumTotalH}</td>
            </tr>
        </thead>
    )
}