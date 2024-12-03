
import './App.css'
import Footer from './Componentes/Footer/Footer'
import Previsão from './Componentes/Previsão/Previsão'
import {
  Route,
  Routes,
} from "react-router-dom";
import Rotas from './Componentes/Rotas/Rotas';
import TermosDeUso from './Componentes/TermosDeUso/Termos';

function App() {

  return (
    
    <div className='app'>
        <Routes>
          <Route  path="/CadeCircularUfjf/previsoes" element={<Previsão/>}/>
          <Route  path="/CadeCircularUfjf/rotas" element={<Rotas/>}/>
          <Route  path="/CadeCircularUfjf/termosdeuso" element={<Rotas/>}/>
          <Route  path="/CadeCircularUfjf/" element={<TermosDeUso/>}/>
        </Routes>
        <Footer></Footer>
    </div>
      
   
  )
}

export default App
