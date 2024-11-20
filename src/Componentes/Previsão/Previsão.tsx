import './Previsão.css'
type Rotas= {
    nome: string
    id: number
    pontos: string[]
  }
type Horario = {
    hora: string,
    rotas: Rotas[],
    intervaloPontos: number,

}
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
            
          </div>
         
        </main>
         
      </div>
  )
}

export default Previsão
