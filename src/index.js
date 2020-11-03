import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleCounter from './App';
import reportWebVitals from './reportWebVitals';

let counter = 0;

setInterval(function(){
  const fourth = Math.floor(counter/1000);
  const third = Math.floor(counter/100);
  const second = Math.floor(counter/10);
  const first = Math.floor(counter/1);
  console.log(fourth,third,second,first)
  counter ++;
    ReactDOM.render(
      <React.StrictMode>
        <SimpleCounter first={first} second={second} third={third} fourth={fourth}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
},1000);



reportWebVitals();
