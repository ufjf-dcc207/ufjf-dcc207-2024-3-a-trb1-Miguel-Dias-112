
import ChatInput from '../../Componentes/ChatImput.tsx/chatImp'
import ChatList from '../../Componentes/ChatList/chatLi'
import Header from '../../Componentes/HeaderInputs/header'
import './Chat.css'


function Chat() {

  return (
    <div className='Chat'>

      <Header titulo='Chat'>{null}</Header>
      <main>
     <ChatInput user={''}></ChatInput>
     <ChatList></ChatList>
      </main>

      
    </div>
      
   
  )
}

export default Chat
