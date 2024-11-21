import { useNavigate } from "react-router-dom";
import './footer.css'

function Footer() {
    const navigate = useNavigate();

    function handleClick(url: string) {
      navigate(url);
    }
    return (
        <footer >
            <button onClick={()=>{handleClick('/CadeCircularUfjf/rotas')}}>Rotas</button>
            <button onClick={()=>{handleClick('/CadeCircularUfjf/previsoes')}}>Previsão</button>

        </footer>
    )
}

export default Footer
