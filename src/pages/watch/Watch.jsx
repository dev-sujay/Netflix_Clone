import { ArrowBack } from '@mui/icons-material'
import React from 'react'
import "./watch.scss"
import sampleVideo from '../../assets/watch_sample.mp4'


const Watch = () => {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBack />
                home
            </div>
            <video
                src={sampleVideo}
                className='video'
                autoPlay
                controls>
            </video>
        </div>
    )
}

export default Watch
