
import './DisclaimerHorario.css'
interface DisclaimerHorarioProps {
    nomeAtual: string;
    
}
function DisclaimerHorario({nomeAtual}: DisclaimerHorarioProps) {

  return (
    
    <div className='DisclaimerHorario'>
        <p>
          teste {nomeAtual}
        </p>
    </div>
      
   
  )
}

export default DisclaimerHorario
