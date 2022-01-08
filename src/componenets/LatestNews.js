import React, { useContext } from 'react'
import { Newscontext } from './NewsContext'

const LatestNews = (props) => {

    const [news,setnews] = useContext(Newscontext);

    return (
        <div>
            <h1>d{news.title}</h1>
            {
                news.map((val)=><h1>{val.title}</h1>)
                
            }
        </div>
    )
}

export default LatestNews
