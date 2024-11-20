import { useNavigate } from "react-router-dom";
import './footer.css'
function Footer() {
    const navigate = useNavigate();

    function handleClick(url: string) {
      navigate(url);
    }
    return (
        <footer >
        <button onClick={()=>{handleClick('/cadeCircular/rotas')}}>Rotas</button>
        <button onClick={()=>{handleClick('/cadeCircular/')}}>Previsão</button>
        </footer>
    )
}

export default Footer
