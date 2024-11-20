import './Rotas.css'
type Rotas= {
  nome: string
  id: number
  pontos: string[]
}
const rotas: Rotas[] = [
  { nome: "anel", id: 1, pontos: ["ponto1", "ponto2"] },
  { nome: "anel", id: 2, pontos: ["ponto1", "ponto2"] },
  { nome: "anel", id: 3, pontos: ["ponto1", "ponto2"] },
  { nome: "anel", id: 4, pontos: ["ponto1", "ponto2"] }
]
function Rotas() {
  const pontos:string[] = rotas[0].pontos
  return (
      
      <div className='Rotas'>
        <header>
          <h1>Rotas do Circular</h1>
          <section>
            <label htmlFor="cars">Escolha uma rota:</label>
              <select id="cars" name="cars">
                <option value="volvo">anel</option>
                <option value="saab">anel</option>
                <option value="fiat">anel</option>
                <option value="audi">anel</option>
              </select>
          </section>             
        </header>
        <main>
          {
          pontos.map( 
            (ponto:String, index) => {
            return (
              <div className='Ponto'>
                {ponto} {index + 1}
              </div>
            )
          })}
        </main>
         
      </div>
  )
}

export default Rotas
