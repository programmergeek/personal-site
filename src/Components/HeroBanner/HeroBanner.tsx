import React, {useState} from 'react'

export const HeroBanner:React.FC = () => {

    const [text, setText] = useState<String>("Will Code for Job")

    return <div className='hero-banner'>
        <p className='banner-header'>{text}</p>
        <button className="btn btn-primary font-primary">Resume</button>
    </div>
}