
import './App.css'
import Footer from './Componentes/Footer/footer'
import Previsão from './Pages/Previsão/Previsão'
import {
  Route,
  Routes,
} from "react-router-dom";
import Rotas from './Pages/Rotas/Rotas';
import TermosDeUso from './Componentes/TermosDeUso/Termos';

function App() {

  return (
    
    <div className='app'>
        <Routes>
          <Route  path="/CadeCircularUfjf/previsoes" element={<Previsão/>}/>
          <Route  path="/CadeCircularUfjf/rotas" element={<Rotas/>}/>
          <Route  path="/CadeCircularUfjf/termosdeuso" element={<TermosDeUso/>}/>
          <Route  path="/CadeCircularUfjf/" element={<Rotas/>}/>
        </Routes>
        <Footer></Footer>
    </div>
      
   
  )
}

export default App
