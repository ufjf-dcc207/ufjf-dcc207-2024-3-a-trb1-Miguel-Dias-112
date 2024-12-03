import './Previsão.css'
import  { Rotas } from '../../APIS/Previsões/PrevisõesData'
import PrevisõesApi from '../../APIS/Previsões/PrevisõesAPI'
import {useRef, useState} from 'react'
import { Ponto } from '../../APIS/Previsões/PrevisõesData'
import Horario from '../../Componentes/Horario/Horario'
import Header from '../../Componentes/HeaderInputs/header'
import semHoraIcon from '../../../public/semHoraIcon.svg'

function Previsão() {
  const horarios = PrevisõesApi.horariosDate
  const [ponto, setPonto] = useState<Ponto>('Letras')

  const select = useRef<HTMLSelectElement>(null)
  function onchangeHandler(){
    const element = select.current!
    const ponto = element.options[element.selectedIndex].value
    setPonto(ponto as Ponto)
  }
  const pontos = PrevisõesApi.Pontos

  return (
      
      <div className='Previsão'>
        <Header titulo='Previsão' onchangeHandler={onchangeHandler} options={pontos} select={select} nomeInput='Ponto Atual'></Header>
        <main>    
          <div className='Previsões'>
            {
            horarios.rotas.map( 
                (rota:Rotas) => {
                    const horas = PrevisõesApi.calcularHorarioRestante(rota, ponto, horarios)
                    const horaChegada = horas.tempo
                    const restante = horas.restante
                    const restanteInt = parseInt(restante.replace('m', ''))
                    console.log(rota)
                    if (rota.nome == 'Fora do horário'){
                      return <img  className='semHoraImg' src={semHoraIcon} alt='fora do horário'></img>
                    }
                    return restanteInt < 0 ? null : (
                      <Horario 
                      horaChegada={horaChegada} 
                      horaPrevisão={restante} 
                      nome={rota.nome} 
                      blinkColor={restanteInt < 15 ? 'green' : restanteInt < 30 ? 'orange' : 'red'}
                      />
                    )
                }
            )
            }
          </div>
         
        </main>
         
      </div>
  )
}

export default Previsão
