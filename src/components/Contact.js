import React from 'react'
import './Contact.css'



const Contact = () => {
    return(
            <div className='Contact'>
                <img src='https://randomuser.me/api/portraits/women/73.jpg' alt='RandomPicture' className='avatar' />
                <div>
                <p className='name'>Quentin Kaiser</p>
                <div className='status'>
                    
                <div className='status-online'></div>
                <p className='status-text'>Available</p>
                </div>
                </div>
            </div>
    )
}

export default Contact