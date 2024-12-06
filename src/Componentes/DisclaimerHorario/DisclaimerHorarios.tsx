
import './DisclaimerHorario.css'
interface DisclaimerHorarioProps {
    nomeAtual: string;
    intervalo: number;
}
function DisclaimerHorario({nomeAtual, intervalo}: DisclaimerHorarioProps) {

  return (
    
    <div className='DisclaimerHorario'>
        <p>
          Os horarios são apenas uma previsão, podendo haver atrasos ou adiantamentos.
        </p>
        <p>
         Você está no {nomeAtual}, os onibus agora passam a cada  {intervalo} minutos.
        </p>
          
    </div>
      
   
  )
}

export default DisclaimerHorario
