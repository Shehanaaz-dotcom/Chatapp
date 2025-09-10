import React from 'react'
import image1 from '../assets/user1.png'
import image2 from '../assets/user2.png'
import'../style.css'

const ChatLists = ({chats}) => {
    const user =localStorage.getItem('user')
    function SenderChat({message,username,avatar}){
        return(
            <div className="chat_sender">
                <img src={avatar} alt="user1"/>
               
                    <div className="chatS">
                    <p> 
                    <strong>{username}</strong>
                    </p>   
             
                      <p>
                    {message}
                     </p>    
                    </div>
              
            </div>
        )
        
    }
    function ReceiverChat({message,username,avatar}){
        return(
            <div className="chat_receiver">
                <img src={avatar} alt="user2 "/>
              
                    <div className="chatR">
                          <p>   
                    <strong>{username}</strong>
                    </p>   
                   
                    <p> 
              
                   {message}
                        </p>   
                              </div>
           
            </div>
        )
        
    }
  return (
    <div className="chats_list">
        {
            chats.map((chat,index)=>{

                if(chat.user===user)
                {
                      return  <SenderChat
                      key={index}
                      message={chat.message}
                      username={chat.user} 
                      avatar= {chat.avatar}/>
                }
                else
                {
                    return <ReceiverChat
                    key={index}
                      message={chat.message}
                      username={chat.user} 
                      avatar= {chat.avatar}
              
                    
                    />
                 }
             
            
            })
        }
     
  
    </div>
  )
}

export default ChatLists
