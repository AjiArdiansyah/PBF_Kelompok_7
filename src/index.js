import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Test from './Test';
// import HelloComponent from './component/HelloComponent';
import Login from './Login';
import Register from './Register';


// function HelloComponent(){
//   return <p>HelloComponent</p>
// }

  // class StateFullComponent extends React.Component{
  //   render(){
  //     return <p>StateFullComponent</p>
  //   }
  // }
  

ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<Register />, document.getElementById('root'));

reportWebVitals();
