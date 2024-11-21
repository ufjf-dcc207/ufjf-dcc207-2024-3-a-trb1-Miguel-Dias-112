import './Previsão.css'
import circularAPI, { Rotas } from '../../APIS/circularAPI'
interface HorarioProps {
    horaChegada: string;
    horaPrevisão: string;
    nome: string;
}
interface Horario {
    nome: string;
    rotas: Rotas[];
    intervaloPontos: number;
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
  return (
      
      <div className='Previsão'>
        <header>
          <h1>Previsão do Circular</h1>
        </header>
        <main>
        <section className='sectionSelect'>
            <label htmlFor="cars">Ponto Atual:</label>
              <select id="cars" name="cars">
                <option value="volvo">anel</option>
                <option value="saab">anel</option>
                <option value="fiat">anel</option>
                <option value="audi">anel</option>
              </select>
          </section>     
          <div className='Previsões'>
            {
            horarios.rotas.map( 
                (rota:Rotas) => {
                    const horas = circularAPI.calculateTime('Letras ', rota)
                    const horaChegada = horas.tempo
                    const restante = horas.restante
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
