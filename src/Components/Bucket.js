import React from "react";
import {connect} from "react-redux";
import {changeCount,increase,decrease,changeTotal,deleteProduc} from "../Store/Action/Bucket";
import DeleteProd from "../images/delete.png"

class Bucket extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.countTotal();
    }

    componentDidUpdate(prevProps){
        if(prevProps.bucket !== this.props.bucket || prevProps.bucket == this.props.bucket){
            this.countTotal();
        }
    }

    countTotal=()=>{
        this.props.changeTotal(this.props.bucket);
    }

    render(){
        return(
            <div className="bucket">
                <div className="wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Count</th>
                                <th>Price</th>
                                <th>Total </th>
                            </tr>
                        </thead>
                            {this.props.bucket.map((value,index)=>{
                                return(
                                    <thead key={index}>
                                        <tr>
                                            <td>
                                                <img src={DeleteProd} onClick={()=>this.props.deleteProduct(value,this.props.bucket)} alt=""/>
                                                {value.name}
                                            </td>
                                            <td>
                                                <div className="count">
                                                    <button onClick={()=>this.props.decrease(value,this.props.bucket)}>-</button>
                                                    <input type="number" value={value.count} onChange={()=>this.props.changeCount(value,this.props.bucket)}/>
                                                    <button onClick={()=>this.props.increase(value,this.props.bucket)}>+</button>
                                                </div>
                                            </td>
                                            <td>{value.price}</td>
                                            <td>{value.price * value.count}</td>
                                        </tr>
                                    </thead>
                                )
                                })}
                        <thead>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{this.props.sumTotal}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        bucket: state.Bucket.bucket,
        sumTotal: state.Bucket.sumTotal,
        priceFromMinToMax: state.Bucket.priceFromMinToMax,
    }
}

function mapDispatchToProps(dispatch){
    return{
        changeCount: (product,bucket)=>dispatch(changeCount(product,bucket)),
        increase: (product,bucket)=>dispatch(increase(product,bucket)),
        decrease: (product,bucket)=>dispatch(decrease(product,bucket)),
        changeTotal: (bucket)=>dispatch(changeTotal(bucket)),
        deleteProduct: (product,bucket)=>dispatch(deleteProduct(product,bucket)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bucket); 