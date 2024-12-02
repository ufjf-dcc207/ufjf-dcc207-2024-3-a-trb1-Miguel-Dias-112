import './header.css'
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
          <section className='sectionSelect'>
            <label htmlFor="pontos">{nomeInput}</label>
              <select ref={select} onChange={onchangeHandler}>
                {options.map( (option) => {
                  return <option value={option}>{option}</option>
                })}
              </select>
          </section>     
        </header>
    )
}

export default Header
