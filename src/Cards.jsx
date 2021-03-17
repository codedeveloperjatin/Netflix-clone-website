import React from 'react';
import Images from './Images';
import Heading from './Heading';
import Link from './Link';
import Span from './Span';


const Cards = (props) => {
    return(
       <>
    <div className="cards">
      <div className="card">
         <Images imgsrc={props.imgsrc}/>
         <div className="card__info">
            <Span title={props.title}/>
            <Heading sname={props.sname} />
            <Link link={props.link}/>
         </div> 
      </div>
    </div> 
    </>
    )
 }

 export default Cards;