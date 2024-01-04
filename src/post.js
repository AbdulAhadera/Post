import React from 'react'
import FBCollage from "react-fb-collage";
import './App.css'

function Post() {


   
    const images = [
        "https://cdn-img1.imgworlds.com/assets/86b6bc23-1127-4c7f-b264-9594084176fe.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    ];




    return (

        <div div className='main' >

            <div className='main-post'>

                <div className='upper-sec'>
                    <img className='img' src={'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/415014582_365854976167123_7047827629196274610_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=3635dc&_nc_ohc=PeuRSv_STq4AX_9r3mW&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfAHfXp6gTqyj9uWnbRtKx_3tRlqyOz1Od-WJnqDRJq8aw&oe=659A955A'} />
                    <h5 className='title'></h5>
                </div>

                <div className='description'>
                    <p className='text'>lorem ipsum dolor sit</p>
                </div>

                <div className='img-grid'>
                    <FBCollage
                        style={{ background: "black" }}
                        images={images}
                        height={"150"}
                        width={"100%"}
                        borderRadius={10}
                        spacing={1}
                    />
                </div>

                <div className='lower-sec'>

                    <div className='box'><p className='icons'><i className="uil uil-thumbs-up"></i></p> </div>
                    <div className='box'><p className='icons'><i className="uil uil-comment-alt"></i></p></div>
                    <div className='box'><p className='icons'><i className="uil uil-share"></i></p></div>

                </div>


            </div>


        </div>

    )
}

export default Post