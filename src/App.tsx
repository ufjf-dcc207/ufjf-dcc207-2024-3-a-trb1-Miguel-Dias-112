
import './App.css'

import Footer from './Componentes/Footer/footer'
import Previsão from './Pages/Previsão/Previsão'
import {
  Route,
  Routes,
} from "react-router-dom";
import Rotas from './Pages/Rotas/Rotas';
import TermosDeUso from './Pages/TermosDeUso/Termos';
import Home from './Pages/Home/Home';
import Chat from './Pages/Chat/Chat';
function App() {

  return (
    
    <div className='app'>
        <Routes>
          <Route  path="/CadeCircularUfjf/previsoes" element={<Previsão/>}/>
          <Route  path="/CadeCircularUfjf/rotas" element={<Rotas/>}/>
          <Route  path="/CadeCircularUfjf/termosdeuso" element={<TermosDeUso/>}/>
          <Route  path="/CadeCircularUfjf/chat" element={<Chat/>}/>
          <Route  path="/CadeCircularUfjf/" element={<Home/>}/>
        </Routes>
        <Footer></Footer>
    </div>
      
   
  )
}

export default App
