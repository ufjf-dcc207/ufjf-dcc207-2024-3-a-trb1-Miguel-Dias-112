import './DropDown.css'
interface DropdownProps {
  onchangeHandler: ()=>void;
  select: React.RefObject<HTMLSelectElement>;
  options: string[];
  nomeInput: string;
}
function DropDown({ onchangeHandler,select,options,nomeInput}: DropdownProps) {

    
    return (
        <section className='sectionSelect'>
          <label htmlFor="pontos">{nomeInput}</label>
            <select ref={select} onChange={onchangeHandler}>
              {options.map( (option) => {
                return <option value={option}>{option}</option>
              })}
            </select>
        </section>     
    )
}

export default DropDown
