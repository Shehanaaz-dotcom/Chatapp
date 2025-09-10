import React, { useState } from 'react'
import'../style.css'


const InputText = ({addMessage}) => {
  const [message,setMessage] =useState('')
  const sendMessage =(e) =>
  {
     e.preventDefault();
    addMessage({message});
    setMessage('');
   
  
  }
  return (
    <div className="inputtext_container">
      <textarea name="message" id="message"   rows ='6' placeholder="Message..."
      
      onChange={(e)=>setMessage(e.target.value)}></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default InputText
