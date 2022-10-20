import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function Second (){
//     return <div>second</div>
// }

// function First (Props){
//     return <div>first {Props.name} <Second/> </div>
// }

// function Samplefun(Props){
//     console.log("props", Props)
//     return <div>function {Props.name} <First name={Props.name}/> </div>;
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Samplefun name = "react js" age={"23"}/>);

class First extends Component{
    render(){
        console.log("this", this);
        return <div>class Component {this.props.name}</div>
    }
}

class Samplefun extends Component{
    render(){
        console.log("this", this);
        return <div>class Component {this.props.name} <First name={this.props.name}/></div>
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Samplefun name = "react js" age={"23"}/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
