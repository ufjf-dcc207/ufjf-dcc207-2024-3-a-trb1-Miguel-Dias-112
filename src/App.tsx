
import './App.css'
import Footer from './Componentes/Footer/footer'
import Previsão from './Componentes/Previsão/Previsão'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Rotas from './Componentes/Rotas/Rotas';
const router = createBrowserRouter([
  {
    path: "/cadeCircular",
    element: <Previsão />,
  },
  {
    path: "/cadeCircular/rotas",
    element: <Rotas />,
  }
]);
function App() {

  return (
    
    <div className='app'>
        <Routes>
          <Route  path="/cadeCircular" element={<Previsão/>}/>
          <Route  path="/cadeCircular/rotas" element={<Rotas/>}/>
        </Routes>
        <Footer></Footer>
    </div>
      
   
  )
}

export default App
