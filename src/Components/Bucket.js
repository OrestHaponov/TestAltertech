import React from "react";
import {connect} from "react-redux";

class Bucket extends React.Component{
    constructor(props){
        super(props);
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
                     
                        <thead>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
    }
}

function mapDispatchToProps(dispatch){
    return{
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bucket); 