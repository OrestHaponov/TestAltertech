import React from "react";
import "./app.scss";
import "../Components/styles.scss";
import Bucket from "../Components/Bucket/Bucket";
import AddProduct from "../Components/AddProductForm/AddProduct";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="app">
                <AddProduct />
                <Bucket />
            </div>
        );
    }
}

export default App;
