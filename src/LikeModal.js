import React from 'react'
import "./App.css"
import Angry from './Assets/angry.png'
import care from './Assets/care.png'
import wow from './Assets/wow.png'
import haha from './Assets/haha.png'
import sad from './Assets/sad.png'
import heart from './Assets/heart.png'
import Like from './Assets/like.png'


function LikeModal() {



    return (
        <div className='react-main'>
            <img className='reaction' src={Like} alt='' />
            <img className='reaction' src={heart} alt='' />
            <img className='reactions' src={haha} alt='' />
            <img className='reactions' src={care} alt='' />
            <img className='reactions' src={sad} alt='' />
            <img className='reactions' src={wow} alt='' />
            <img className='reactions' src={Angry} alt='' />
        </div>
    )
}

export default LikeModal