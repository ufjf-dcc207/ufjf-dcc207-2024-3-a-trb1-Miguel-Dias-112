import './Previsão.css'
import circularAPI, { Rotas } from '../../APIS/circularAPI'
import {useRef, useState} from 'react'

interface HorarioProps {
    horaChegada: string;
    horaPrevisão: string;
    nome: string;
}
function Horario( {horaChegada, horaPrevisão, nome}: HorarioProps){
    return(
        <div className='container'>
        <h2>{nome}</h2>
        <div className='data'>
            <section>
                <h3>chegada:</h3>
                <p>{horaChegada}</p>
            </section>
            <section>
                <h3>Previsão:</h3>
                <p>{horaPrevisão}</p>
            </section>
        </div>
        <div className='blink'></div>
    </div>
    )
}


function Previsão() {
  const horarios = circularAPI.horariosDate
  const [ponto, setPonto] = useState<string>('Letras ')

  const select = useRef<HTMLSelectElement>(null)
  function onchangeHandler(){
    const e = select.current!
    const ponto = e.options[e.selectedIndex].value
    setPonto(ponto)
  }
  const pontos = circularAPI.Pontos
  return (
      
      <div className='Previsão'>
        <header>
          <h1>Previsão do Circular</h1>
        </header>
        <main>
        <section className='sectionSelect'>
            <label htmlFor="pontos">Ponto Atual:</label>
              <select ref={select} onChange={onchangeHandler}>
                {pontos.map( (ponto) => {
                  return <option value={ponto}>{ponto}</option>
                })}
              </select>
          </section>     
          <div className='Previsões'>
            {
            horarios.rotas.map( 
                (rota:Rotas) => {
                    const horas = circularAPI.calculateTime(ponto, rota)
                    const horaChegada = horas.tempo
                    const restante = horas.restante
                    const restanteInt = parseInt(restante.replace('m', ''))
                    
                    if(restanteInt<=0){
                        return(
                          <></>
                        )
                    }
                    return (
                      <Horario horaChegada={horaChegada} horaPrevisão={restante} nome={rota.nome}></Horario>
                );
                }
            )
              
            }
          </div>
         
        </main>
         
      </div>
  )
}

export default Previsão
