import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Newscontext } from "./NewsContext";
import style from "./Story.module.css";


export const Story = () => {
  const navigte = useNavigate()

  const [news, setnews] = useContext(Newscontext);

  const [state, setstate] = useState(true)

  const loadmorebtn = ()=>{
      setstate(false)
  }




  return (
    <div>
      <h2 className="my-2">Latest Stories</h2>

      <div className={style.maindi}>
        {news
          .filter((ytt) => state? ytt.story==true && ytt.source.id<=3 :ytt.story==true && ytt.source.id>=1)
          .map((neu,i) => (
            <div style={{cursor:"pointer"}} className={style.div} key={i} onClick={() => navigte(`news/${neu.category}/${neu.source.id}`)}>
              <h5>{neu.title.slice(0, 70)}</h5>
              <p>{neu.description.slice(0, 150)}</p>
              <br />
              <p>
                <strong>{neu.category} </strong>/{neu.publishedAt}
              </p>
            </div>
          ))}

        
      </div>
      <button className="btn btn-primary" onClick={loadmorebtn}>
          Load More
        </button>
    </div>
  );
};

export default Story;
