import React from 'react'
import Advertisement from './Advertisement'
import Latestarti from './Latestarti'
import Toppost from './Toppost'
import './Catebiz.css'

const Categorybi = () => {
    return (
        <div className='my-4'>
            
           <div className='merii'>
               <div>
               <Latestarti/>
            
               </div>

               <div>
               <Toppost/>
               <Advertisement/>
               </div>
           </div>
        </div>
    )
}

export default Categorybi
