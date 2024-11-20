
import './App.css'
import Footer from './Componentes/Footer/footer'
import Previsão from './Componentes/Previsão/Previsão'
import {
  createBrowserRouter,
  RouterProvider,
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
        <RouterProvider router={router} />
        <Footer></Footer>
    </div>
      
   
  )
}

export default App
