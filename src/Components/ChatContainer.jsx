import React, { useState,useEffect } from 'react'
import'../style.css'
import ChatLists from './ChatLists';
import UserLogin from './UserLogin';
import InputText from './InputText';
import socketIOClient from 'socket.io-client'


const ChatContainer = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [user,setUser]=useState(localStorage.getItem('user'))
    const socketio  = socketIOClient('http://localhost:3001')
    const [chats,setChats] = useState([])

    useEffect(()=>{
        socketio.on('chat',(chats) =>{
            setChats(chats)

        })
    })
    const sendToSocket= (chat) =>{
        socketio.emit('chat',chat)
    }
  
    const addMessage =(chat) => {
        const newChat={...chat, user:localStorage.getItem('user'),avatar:localStorage.getItem('avatar')}
    
            setChats([...chats,newChat])
    
            sendToSocket([...chats,newChat])
    }
    const Logout =() =>{
        localStorage.removeItem("user")
        localStorage.removeItem('avatar')
        setUser('')
    }


  return (
    <div>
        {user?(
        <div>
            <div className="chats_header">
                <h4>
                    Username:{user}
                    </h4>
                    <p>
                        {currentDate.toDateString()}
                    </p>
                    <p className="chats_logout" onClick={Logout}>
                        <strong>Logout</strong>
                    </p>
            </div>
            <ChatLists chats={chats}/>
            <InputText addMessage={addMessage}/>
        </div>):
        <UserLogin setUser={setUser}/>
        }
    </div>
  )
}

export default ChatContainer
