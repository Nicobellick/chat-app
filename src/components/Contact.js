// import { ReactComponent } from '*.svg'
import { render } from '@testing-library/react'
import React from 'react'
import './Contact.css'
import ContactList from './ContactList'



class Contact extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        online: props.online
    }}
    render(){
    return(
        <div className='Contact'>
                <img src={this.props.avatar} alt='RandomPicture' className='avatar' />
                <div>
                <p className='name'>{this.props.name}</p>
                <div className='status' onClick={event =>{
                    const newStatus = !this.state.online;
                    this.setState({online: newStatus})
                }}>
                    
                <div className={this.state.online ? 'status-online' : 'status-offline'} ></div>
                <p className='status-text'>{this.state.online ? "Available" : "Offline"}</p>
                </div>
                </div>
            </div>
    )
    
    }}
// const Contact = (props) => {
//     return(
//             <div className='Contact'>
//                 <img src={props.avatar} alt='RandomPicture' className='avatar' />
//                 <div>
//                 <p className='name'>{props.name}</p>
//                 <div className='status'>
                    
//                 <div className={props.online ? 'status-online' : 'status-offline'}></div>
//                 <p className='status-text'>{props.online ? "Available" : "Offline"}</p>
//                 </div>
//                 </div>
//             </div>
//     )
// }

//

export default Contact
