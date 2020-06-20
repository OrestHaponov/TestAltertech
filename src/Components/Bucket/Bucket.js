import React from "react";
import {connect} from "react-redux";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableTotal from "./TableTotal";

class Bucket extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="bucket">
                <div className="wrapper">
                    {this.props.bucket.length === 0 ?
                        <h1>Bucket is empty</h1>
                    :
                    <table>
                        <TableHead />
                        <TableBody />
                        <TableTotal />
                    </table>
                    }
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

export default connect(mapStateToProps)(Bucket); 