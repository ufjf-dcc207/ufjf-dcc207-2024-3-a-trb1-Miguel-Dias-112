import './Dropdown.css'
interface DropdownProps {
  onchangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  nomeInput: string;
}
function DropDown({ onchangeHandler,options,nomeInput}: DropdownProps) {
    
    return (
        <section className='DropDown'>
          <label htmlFor="pontos">{nomeInput}</label>
            <select  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onchangeHandler(e)}>
              {
                options.map( (option) => {
                    return <option value={option}>{option}</option>
                })
              }
            </select>
        </section>     
    )
}

export default DropDown
