import React from 'react'
import './Contact.css'




const Contact = (props) => {
    return(
            <div className='Contact'>
                <img src={props.avatar} alt='RandomPicture' className='avatar' />
                <div>
                <p className='name'>{props.name}</p>
                <div className='status'>
                    
                <div className={props.online ? 'status-online' : 'status-offline'}></div>
                <p className='status-text'>{props.online ? "Available" : "Offline"}</p>
                </div>
                </div>
            </div>
    )
}

//

export default Contact
