import './Previsão.css'
type Rotas= {
    nome: string
    id: number
    pontos: string[]
  }
type Horario = {
    nome: string,
    rotas: Rotas[],
    intervaloPontos: number,
}
type HorarioProps = {
    horaChegada: string,
    horaPrevisão: string,
    nome: string,
}
function Horario( {horaChegada, horaPrevisão, nome}: HorarioProps){
    return(
        <div className='container'>
        <h2>{nome}</h2>
        <div className='data'>
            <section>
                <h3>Hora chegada:</h3>
                <p>{horaChegada}</p>
            </section>
            <section>
                <h3>Previsão:</h3>
                <p>{horaPrevisão}</p>
            </section>

        </div>
        
    </div>
    )
}
const Horarios: Horario[] = [
    { nome: "almoco", rotas: [
        { nome: "teste", id: 1, pontos: ["ponto1", "ponto2"] },
        { nome: "teste", id: 2, pontos: ["ponto1", "ponto2", "ponto3"] },
        { nome: "teste", id: 3, pontos: ["ponto1"] },
        { nome: "teste", id: 4, pontos: ["ponto1", "ponto2"] }
    ], intervaloPontos: 15 },
]
function Previsão() {
  return (
      
      <div className='Previsão'>
        <header>
          <h1>Previsão do Circular</h1>
        </header>
        <main>
        <section>
            <label htmlFor="cars">Ponto Atual:</label>
              <select id="cars" name="cars">
                <option value="volvo">anel</option>
                <option value="saab">anel</option>
                <option value="fiat">anel</option>
                <option value="audi">anel</option>
              </select>
              <button>encontre pra mim</button>
          </section>     
          <div className='Previsões'>
            {
            Horarios[0].rotas.map( 
                (rota:Rotas) => {
                    return (
                      <Horario horaChegada="12:00" horaPrevisão="12:15" nome={rota.nome}></Horario>
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
