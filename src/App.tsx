
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
          <Route  path="/ufjf-dcc207-2024-3-a-trb1-Miguel-Dias-112/previsoes" element={<Previsão/>}/>
          <Route  path="/ufjf-dcc207-2024-3-a-trb1-Miguel-Dias-112/rotas" element={<Rotas/>}/>
          <Route  path="/ufjf-dcc207-2024-3-a-trb1-Miguel-Dias-112/termosdeuso" element={<TermosDeUso/>}/>
          <Route  path="/ufjf-dcc207-2024-3-a-trb1-Miguel-Dias-112/chat" element={<Chat/>}/>
          <Route  path="/ufjf-dcc207-2024-3-a-trb1-Miguel-Dias-112/" element={<Home/>}/>
        </Routes>
        <Footer></Footer>
    </div>
      
   
  )
}

export default App
