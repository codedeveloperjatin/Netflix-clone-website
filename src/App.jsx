import React from 'react';
import Cards from './Cards.jsx';
import Sdata from './Sdata.jsx';
import './index.css';


const App = () => {
    return (
        <>
    <h1 className="heading_style">List of Top 5 Netflix Series in 2021</h1>
        {Sdata.map((val) =>{
            return (      
                 <Cards 
                    key= {val.id}      
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname} 
                    link={val.link}/>
        )}
    )}
    </>
    )
};

export default App;




