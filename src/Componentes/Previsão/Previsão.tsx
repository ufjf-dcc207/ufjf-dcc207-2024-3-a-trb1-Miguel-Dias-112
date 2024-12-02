import './Previsão.css'
import circularAPI, { Rotas } from '../../APIS/circularAPI'
import {useRef, useState} from 'react'
import { Ponto } from '../../APIS/circularAPI'
import Horario from './Horario'
import Header from '../Header/header'
import semHoraIcon from '../../../public/semHoraIcon.svg'

function Previsão() {
  const horarios = circularAPI.horariosDate
  const [ponto, setPonto] = useState<Ponto>('Letras')

  const select = useRef<HTMLSelectElement>(null)
  function onchangeHandler(){
    const element = select.current!
    const ponto = element.options[element.selectedIndex].value
    setPonto(ponto as Ponto)
  }
  const pontos = circularAPI.Pontos

  return (
      
      <div className='Previsão'>
        <Header titulo='Previsão' onchangeHandler={onchangeHandler} options={pontos} select={select}></Header>
        <main>    
          <div className='Previsões'>
            {
            horarios.rotas.map( 
                (rota:Rotas) => {
                    const horas = circularAPI.calcularHorarioRestante(rota, ponto, horarios)
                    const horaChegada = horas.tempo
                    const restante = horas.restante
                    const restanteInt = parseInt(restante.replace('m', ''))
                    console.log(rota)
                    return (
                      rota.nome === 'Fora do horário' ? 
                      (<img className='semHoraImg' src={semHoraIcon} alt='fora do horário'></img>) : (
                      restanteInt >= 0 && 
                      (<Horario 
                          horaChegada={horaChegada} 
                          horaPrevisão={restante} 
                          nome={rota.nome} 
                          blinkColor={restanteInt < 15 ? 'green' : restanteInt < 30 ? 'orange' : 'red'}
                        />)
                    ))
                }
            )
            }
          </div>
         
        </main>
         
      </div>
  )
}

export default Previsão
