import { useState } from 'react'
import UserLogin from './Components/UserLogin'
import ChatContainer from './Components/ChatContainer'
import InputText from './Components/InputText'
import'./style.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ChatLists from './Components/ChatLists'



function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <div className="App">
  <BrowserRouter basename={"/Chatapp/"}>
  <Routes>

<Route  path="/"  exact element={ <ChatContainer/>}/>
<Route path="/ChatLists" element={ <ChatLists/>}/>
<Route path="/InputText" element={ <InputText/>}/>
<Route path="/UserLogin" element={ <UserLogin/>}/>
</Routes>
</BrowserRouter>
 </div>
 </>
   
  )
}

export default App
