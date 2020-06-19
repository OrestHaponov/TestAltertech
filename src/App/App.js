import React from "react";
import "./app.scss";
import "../Components/styles.scss";
import Bucket from "../Components/Bucket";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="app">
                <Bucket />
            </div>
        );
    }
}

export default App;
