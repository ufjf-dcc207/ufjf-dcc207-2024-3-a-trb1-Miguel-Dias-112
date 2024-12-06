import './Termos.css';
import { useNavigate } from "react-router-dom";

function TermosDeUso() {

    const navigate = useNavigate();
    function handleClick(url: string) {
        navigate(url);
      }

    return (
        <div className="termos-container">
            <h1>Termos de Uso</h1>
            <p>
                Bem-vindo à Circular UFJF. Ao utilizar nossos serviços, você concorda com os seguintes termos e condições:
            </p>
            <ul>
                <li>
                    Uso Apropriado: O aplicativo deve ser utilizado apenas para fins lícitos. Você deve cumprir todas as leis, regulamentos e normas locais aplicáveis ao usar nosso serviço.
                </li>
                <li>
                    Alterações nos Serviços: Reservamo-nos o direito de modificar, suspender ou descontinuar, temporária ou permanentemente, qualquer funcionalidade do aplicativo sem aviso prévio.
                </li>
                <li>
                    Isenção de Responsabilidade: As informações disponibilizadas têm caráter informativo e não garantimos sua total precisão ou atualidade. Não somos responsáveis por danos diretos ou indiretos resultantes do uso do aplicativo ou das informações fornecidas.
                </li>
                <li>
                    Segurança de Dados: Estamos comprometidos em proteger sua privacidade e seus dados. No entanto, o uso da internet pode implicar riscos, e você é responsável por garantir a segurança do seu dispositivo.
                </li>
                <li>
                    Contato para Suporte: Para quaisquer dúvidas, problemas técnicos ou esclarecimentos sobre o uso do aplicativo, entre em contato com nossa equipe de suporte por meio dos canais fornecidos.
                </li>
            </ul>
            <p>
                O uso contínuo do Cade Circular UFJF implica na aceitação integral desses termos. É sua responsabilidade revisá-los regularmente, pois eles podem ser atualizados periodicamente.
            </p>
            <button  onClick={()=>{handleClick('/CadeCircularUfjf/rotas')}} className="aceitar-button">Aceitar</button>

        </div>
    );
}

export default TermosDeUso;