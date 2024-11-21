import './Rotas.css'
import type {Rotas} from '../../APIS/circularAPI.tsx'
import CircularAPI from '../../APIS/circularAPI.tsx'
import { useState,useRef } from 'react'
function Rotas() {

  const rotasNome = CircularAPI.getRotasNome()
  const rotaDefault = CircularAPI.getRotasbyName(rotasNome[0])
  const [rota, setRota] = useState<Rotas | undefined>(rotaDefault)
  const selectIPT = useRef<HTMLSelectElement>(null)
  
  function onSelectHandler(){
    const e = selectIPT.current!
    const nome = e.options[e.selectedIndex].value;
    setRota(CircularAPI.getRotasbyName(nome))
    console.log(rota)

  }
  return (
      
      <div className='Rotas'>
        <header>
          <h1>Rotas do Circular</h1>
                 
        </header>
        <main>
        <section>
            <label htmlFor="cars">Escolha uma rota:</label>
              <select ref={selectIPT} onSelect={onSelectHandler} name="cars">
                {rotasNome.map( (nome) => {
                  return <option value={nome}>{nome}</option>
                })}
              </select>
          </section>     
          <div className='Pontos'>
          {
          rota?.pontos.map( 
            (ponto:String) => {
            return (
              <div className='Ponto'>
                <h3>{ponto}</h3>
                <img src='https://www2.ufjf.br/eletrica_potencia/wp-content/uploads/sites/523/2014/08/ICE.jpg'>
                </img>
              </div>
            )
          })}
          </div>
         
        </main>
         
      </div>
  )
}

export default Rotas



