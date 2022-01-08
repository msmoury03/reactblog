import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Newscontext } from './NewsContext'
import Newsitem from './Newsitem'
import './Shortnews.css'




function Shortnew(props) {

    const [news,setnews] = useContext(Newscontext);

    const navigte = useNavigate();
    
 
   




    return (
        <div className='container' >
                <h2 style={{marginTop:'50px'}}>Top Today News</h2>
                

                <div className='row mymainro' >
                    { news.filter((value)=> value.source.id>=6 && value.source.id<=8  ).map((element) => {
                        
                        return <div className='col-md-4 '  key={element.source.id} >
                            <Newsitem title={element.title.slice(0,50)} description={element.description.slice(0,100)} imgurl={element.urlToImage} newsurl={element.url} author={element.author}
                             publishedAt={element.publishedAt} source={element.source.id} category={element.category} />
                        </div>
                    })
                    }

                    


                   


                </div>

            </div>
    )
}

export default Shortnew
