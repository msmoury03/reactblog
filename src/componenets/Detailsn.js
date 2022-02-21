import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Detailsn.css";




const Detailsn = () => {
  const { id } = useParams();

  const navigte = useNavigate()

  const [news, setnews] = useState([])

  useEffect(async () => {
    const response = await axios.get(`https://reactbackendd.herokuapp.com/v1/blogs/${id}`);
    const data = response.data;
    await setnews(data)
  }, []);




  return (
    <div>
      {news
        .filter((vall) => vall.source.id == id)
        .map((byy) => (
          <div>
            <div className="maindiv">
              {/* <div className='smdiv'>
    <h1>jdhgf</h1>
</div> */}

              <div className="smdiv1">
                <h4>{byy.title}</h4>
                <div className="profile">
                  <img src="https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png" />
                  <div className="postnews">
                    <span>{byy.author}</span>
                    <p>
                      <span>{byy.publishedAt}</span>
                    </p>
                  </div>
                  <div className="socialme">
                    <p>
                      <i class="fab fa-facebook"></i>
                      <i class="fab fa-instagram"></i>
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-facebook-messenger"></i>
                    </p>
                  </div>
                </div>
                <br />

                <div className="post">
                  <img className="potimg" src={byy.urlToImage} />
                  <h6>{byy.description}</h6>
                  <img className="potimg"  src={byy.postimg===""? byy.urlToImage : byy.postimg } />
                  <h6>{byy.fulldescription}</h6>
                </div>

                <div className="">
                  <p>
                    <i class="fa-solid fa-hands-clapping"  > </i> {byy.likes}{" "}
                    Claps{" "}
                  </p>
                  <div className="profile">
                    <img src="https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png" />
                    <div className="postnews">
                      <strong>written by</strong>
                      <br />
                      <span>{byy.author}</span>
                      <p>
                        <span>{byy.publishedAt}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <h3>More Posts by {byy.author}</h3>

            <div className="holadiv">
              {news
                .filter(
                  (qee) => qee.source.id !== id && qee.author == byy.author
                )
                .map((mar) => (
                  <div className="reletedcard" style={{cursor:"pointer"}} onClick={() => navigte(`/news/${mar.category}/${mar.source.id}`)}>
                    <div className="maincard">
                      <img className="img1" src={mar.urlToImage} />
                      <h6 className="martil">{mar.title}</h6>
                      <br />

                      <div className="profile prof1">
                        <img
                          className="imgg"
                          src="https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png"
                        />
                        <div className="postnews">
                          <span className="artau">{byy.author}</span>
                          <p>
                            <span className="artii">{byy.publishedAt}</span>
                          </p>
                        </div>
                      </div>
                      <br />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Detailsn;
