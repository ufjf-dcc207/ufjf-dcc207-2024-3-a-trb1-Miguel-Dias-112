import './Previsão.css'
import PrevisõesApi from '../../APIS/Previsões/PrevisõesAPI'
import { useState} from 'react'
import { Ponto } from '../../APIS/Previsões/PrevisõesData'
import Horario from '../../Componentes/Horario/Horario.tsx'
import Header from '../../Componentes/HeaderInputs/header'
import semHoraIcon from '../../../public/semHoraIcon.svg'
import DisclaimerHorario from '../../Componentes/DisclaimerHorario/DisclaimerHorarios'
import DropDown from '../../Componentes/Dropdown/Dropdown'

function Previsão() {
  const [ponto, setPonto] = useState<Ponto>('Letras')
  function onchangeHandler(e: React.ChangeEvent<HTMLSelectElement>){
    const target = e.target;
    if (target) {
      const ponto = target.options[target.selectedIndex].value;
      setPonto(ponto as Ponto);
    }
  }
  const pontos = PrevisõesApi.Pontos
  const horarios = PrevisõesApi.horariosDate
  const sortedHorarios = PrevisõesApi.calcularHorariosRestantes(horarios.rotas, ponto, horarios);

  return (
      
      <div className='Previsão'>
        <Header titulo='Previsão'>
          <DropDown  onchangeHandler={onchangeHandler} options={pontos}  nomeInput='Ponto Atual'></DropDown>
        </Header>
        <main>    
          <div className='Previsões'>
            <DisclaimerHorario nomeAtual={horarios.nome} intervalo={horarios.intervaloTotal}/>
            {
              sortedHorarios.map(({ rota, tempo, restante }) => {
                return (
                  rota.nome == 'Fora do horário' ? 
                  <img className='semHoraImg' src={semHoraIcon} alt='fora do horário'></img>:
                  <Horario horaChegada={tempo} horaPrevisão={restante} nome={rota.nome} 
                  />
                );
              })
            }
          </div>
         
        </main>
         
      </div>
  )
}

export default Previsão
