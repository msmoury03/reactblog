import React , { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import stydle from "./Bigbanner.module.css";
import { Newscontext } from "./NewsContext";


const Foobanner = () => {

  const [news, setnews] = useContext(Newscontext);
  const navigte = useNavigate()

    return (
        <div className='my-3 bbb'>
            {news.filter((filt) => filt.foobanne == true).map((myp, i) => (
         <div style={{cursor:"pointer"}} className={stydle.apnadiv} key={i} onClick={()=> navigte(`/news/${myp.category}/${myp.source.id}`)}>
         <img src={myp.urlToImage}/>
         <h5 className={stydle.text}>{myp.title}</h5>
         <p className={stydle.textti}><strong>{myp.category}</strong> / {myp.publishedAt}</p>
       </div>
      ))}
        </div>
    )
}

export default Foobanner
