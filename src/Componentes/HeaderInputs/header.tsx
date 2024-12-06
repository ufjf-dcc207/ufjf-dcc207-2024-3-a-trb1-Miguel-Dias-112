import './header.css'
import Dropdown from '../Dropdown/Dropdown'
interface HeaderProps {
  titulo: string;
  onchangeHandler: ()=>void;
  select: React.RefObject<HTMLSelectElement>;
  options: string[];
  nomeInput: string;
}
function Header({ titulo,onchangeHandler,select,options,nomeInput}: HeaderProps) {

    
    return (
        <header>
          <h1>{titulo}</h1>      
           
        </header>
    )
}

export default Header
