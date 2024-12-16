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
            <select  onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onchangeHandler(event)}>
              {
                options.map( (option, index) => {
                    return <option key={`valor${index}`} value={option}>{option}</option>
                })
              }
            </select>
        </section>     
    )
}

export default DropDown
