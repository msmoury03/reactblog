import React, { useContext } from "react";
import { Newscontext } from "./NewsContext";
import style from "./Toppost.module.css";
import { useNavigate, useParams } from "react-router-dom";

const Toppost = () => {
  const [news, setnews] = useContext(Newscontext);

  const { ctname } = useParams();

  const navigte = useNavigate();

  return (
    <div className="">
      <h2>Top Posts</h2>
      {news
        .filter((fil) =>
          ctname == undefined
            ? fil.likes >= 100
            : fil.category == ctname && fil.likes >= 100
        )
        .map((vall, index) => (
          <div
            className={index == 0 ? style.maindivm : style.maindiv}
            key={index}
            onClick={() => navigte(`/news/${vall.category}/${vall.source.id}`)}>
            <div
              className={index == 0 ? style.maindiv3 : style.maindiv1}
              style={{ cursor: "pointer" }}>
              <img src={vall.urlToImage} />
              <div className={style.maindiv2}>
                <h6>{vall.title.slice(0, 35)}...</h6>

                <p>
                  <small>
                    {vall.category} / {vall.publishedAt}
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Toppost;
