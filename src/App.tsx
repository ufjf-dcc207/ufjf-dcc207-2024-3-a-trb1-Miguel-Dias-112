
import './App.css'
import Footer from './Componentes/Footer/footer'
import Previsão from './Componentes/Previsão/Previsão'
import {
  Route,
  Routes,
} from "react-router-dom";
import Rotas from './Componentes/Rotas/Rotas';

function App() {

  return (
    
    <div className='app'>
        <Routes>
          <Route  path="/CadeCircularUfjf/previsoes" element={<Previsão/>}/>
          <Route  path="/CadeCircularUfjf/rotas" element={<Rotas/>}/>
          <Route  path="/CadeCircularUfjf/" element={<Rotas/>}/>

        </Routes>
        <Footer></Footer>
    </div>
      
   
  )
}

export default App
