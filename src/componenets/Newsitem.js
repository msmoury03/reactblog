import React from 'react'
import { useNavigate } from 'react-router-dom';


function Newsitem(props) {

    const navigte = useNavigate()

    let { title, description, imgurl, newsurl, author, publishedAt, source , category } = props;
    return (


    
        <div className='my-3 mx-2' style={{borderRadius:'5px'}}>
                <div className="card" style={{cursor:"pointer"}} onClick={()=> navigte(`news/${category}/${source}`)} >
                    <div style={{
                        display: 'flex',
                        
                        position: 'absolute',
                        right: '5px',
                        top:'1px',
                        fontSize:'3rem'
                        
                        
                    }}>
                       

                    </div>

                    <img src={imgurl ? imgurl : "https://static.toiimg.com/thumb/msid-88289502,width-1070,height-580,imgsize-28000,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body" >
                        <h5 className="card-title">{title}... </h5>
                       <p> <small className="card-text">{description}...</small></p>
                        <p className="card-text"><small className="text-muted"><strong>{category} </strong>/{publishedAt}  </small></p>
                      
                    </div>
                </div>
            </div >
    )
}

export default Newsitem
