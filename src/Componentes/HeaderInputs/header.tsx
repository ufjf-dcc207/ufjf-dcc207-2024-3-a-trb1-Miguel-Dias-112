import './header.css'
interface HeaderProps {
  titulo: string;
 children: React.ReactNode;
}
function Header({ titulo,children}: HeaderProps) {

    
    return (
        <header>
          <h1>{titulo}</h1>      
           {children}
        </header>
    )
}

export default Header
