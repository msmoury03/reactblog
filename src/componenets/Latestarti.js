import React, { useContext, useState } from "react";
import { Newscontext } from "./NewsContext";
import style from "./Latestarti.module.css";
import { useNavigate, useParams } from "react-router-dom";



const Latestarti = () => {

  const navigte = useNavigate()
  const [news, setnews] = useContext(Newscontext);

  const [loadmore, setloadmore] = useState(true);

  const loadmorebtn = () => {
    setloadmore(false);
  };

  const { ctname } = useParams();

  


  return (

    
    <div>
      <h2>{ ctname==undefined? "Latest News" : ctname }</h2>
      {news
        .filter((fil) => (ctname==undefined?loadmore ? fil.source.id > 6 : fil.source.id >= 2:fil.category==ctname))
        .map((vall, index) => (
          <div className={style.maindiv} key={index} onClick={()=> navigte(`/news/${vall.category}/${vall.source.id}`)}>
            <div className={style.maindiv1} style={{cursor:"pointer"}}>
              <img src={vall.urlToImage} />
              <div className={style.maindiv2}>
                <h6>{vall.title.slice(0, 65)}...</h6>
                <p>
                  <small>{vall.description.slice(0, 100)}</small>
                </p>
                <p>
                  <small>
                    <strong>{vall.category}</strong> / {vall.publishedAt}
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}

      <button className="btn btn-primary" onClick={loadmorebtn}>Load More</button>
    </div>
  );
};

export default Latestarti;
