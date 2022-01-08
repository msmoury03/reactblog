import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import stydle from "./Bigbanner.module.css";
import { Newscontext } from "./NewsContext";


const Bigbanner = () => {
  const [news, setnews] = useContext(Newscontext);


  const navigte = useNavigate()
  

  

  return (
    <div className="d-flex my-5">
        
      {news.filter((filt) => filt.source.id <= 1).map((myp, i) => (
         <div style={{cursor:"pointer"}} className={stydle.maindiv} key={i} onClick={()=> navigte(`/news/${myp.category}/${myp.source.id}`)}>
         <img src={myp.urlToImage}/>
         <h5 className={stydle.text}>{myp.title}</h5>
         <p className={stydle.textti}><strong>{myp.category}</strong> / {myp.publishedAt}</p>
       </div> 
      ))}



      <div>

      {news.filter((filt) => filt.banner==true?  filt.source.id==2 || filt.source.id==3 : null ).map((myp, i) => (
         <div className="d-block" key={i}>
         <div style={{cursor:"pointer"}} className={stydle.smdiv} key={i} onClick={()=> navigte(`/news/${myp.category}/${myp.source.id}`)}>
           <img src={myp.urlToImage} />
           <span className={stydle.smtext}>{myp.title}</span>
           <p className={stydle.smtextti}><strong>{myp.category}</strong> / {myp.publishedAt}</p>
         </div>
         
       </div>
      ))}
      </div>
      

      
      
    </div>
  );
};

export default Bigbanner;
