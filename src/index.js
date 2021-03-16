import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards.jsx';
import Sdata from './Sdata.jsx';
import './index.css';

function ncard(val ){
      return (      
            <Cards 
                  imgsrc={val.imgsrc}
                  title={val.title}
                  sname={val.sname} 
                  link={val.link}/>
      )};

ReactDOM.render(
   <>  <h1 className="heading_style">List of Top 5 Netflix Series in 2021</h1>
       {Sdata.map(ncard)}
   </> ,document.getElementById('root'));


