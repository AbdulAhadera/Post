import React, { useState } from 'react'
import FbImageLibrary from 'react-fb-image-grid'
import LikeModal from './LikeModal'
import Like from './Assets/download.png'
import Comment from './Assets/comment.png'
import Share from './Assets/share.png'


import './App.css'

function Post({ elem }) {

    const [isModalOpen, setModalOpen] = useState(false);
    const handleMouseEnter = () => {
        setTimeout(() => {
            setModalOpen(true);
        }, 300); // 300 milliseconds delay
    };

    const handleMouseLeave = () => {
        setModalOpen(false);
    };

    return (

        <div div className='main' >

            <div className='main-post'>

                <div className='upper-sec'>
                    <img className='img' src={elem.thumbnail} height={'40px'} width={"40px"} />
                    <h5 className='title'>{elem.title}</h5>

                </div>


                <div className='description'>
                    <p className='text'>{elem.description}</p>
                    <hr className='line'></hr>
                </div>

                <div className='img-grid'>
                    <FbImageLibrary
                        images={elem.images}
                    />
                    <hr className='line'></hr>
                </div>

                <div className='lower-sec'>
                    {isModalOpen && <LikeModal />}
                    <div
                        className='box'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img className='icons' src={Like} alt='' />
                    </div>

                    <div className='box'><img className='icons' src={Comment} alt='' /></div>
                    <div className='box'><img className='icons' src={Share} alt='' /></div>

                    <hr></hr>
                    <div className='modal-container' onMouseLeave={() => setModalOpen(false)}>
                    </div>
                </div>
                    <hr className='line'></hr>

                <div className='comment-section'>
                    <img className='img' src={elem.thumbnail} height={'40px'} width={"40px"} alt='' />
                    <input
                        className='input'
                        placeholder='Write a public Comment...'
                    />
                </div>




            </div>


        </div >

    )
}

export default Post