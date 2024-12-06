
import './DisclaimerHorario.css'
interface DisclaimerHorarioProps {
    nomeAtual: string;
    intervalo: number;
    
}
function DisclaimerHorario({nomeAtual, intervalo}: DisclaimerHorarioProps) {

  if (nomeAtual != 'fora do horário') {
    return (
      <div className='DisclaimerHorario'>
        <p>
          Os horarios são apenas uma previsão, podendo haver atrasos ou adiantamentos.
          Você está no <span>{nomeAtual}</span>, os onibus agora passam em média a cada  <span>{intervalo} minutos</span> .
        </p>
      </div>
    );
  }

  
}

export default DisclaimerHorario
