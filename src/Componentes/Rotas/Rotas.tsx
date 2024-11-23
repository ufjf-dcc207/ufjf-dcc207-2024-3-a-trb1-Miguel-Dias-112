import './Rotas.css'
import type {Rotas} from '../../APIS/circularAPI.tsx'
import CircularAPI from '../../APIS/circularAPI.tsx'
import RotasApi from '../../APIS/rotasAPI.tsx'
import { useState,useRef } from 'react'
import { MapView } from './MapView.tsx'
function Rotas() {

  const [rota, setRota] = useState<number[][]>(RotasApi.getRotaByName('Odonto Direto'))
  
  const [rotaNome, setRotaNome] = useState<string>('Circular')
  const selectIPT = useRef<HTMLSelectElement>(null)
  const rotasNome = RotasApi.RotasNome

  function onSelectHandler(){
    const e = selectIPT.current!
    const nome = e.options[e.selectedIndex].value;
    setRota(RotasApi.getRotaByName(nome))
    setRotaNome(nome)
  }
  return (
      
      <div className='Rotas'>
        <header>
          <h1>Rotas do Circular</h1>        
        </header>
        <main>
        <section>
            <label htmlFor="cars">Escolha uma rota:</label>
              <select ref={selectIPT} onChange={onSelectHandler} name="cars">
                {rotasNome.map( (nome) => {
                  return <option value={nome}>{nome}</option>
                })}
              </select>
          </section>     
          <div className='Pontos'>
                <MapView rota={rota} rotaNome={rotaNome}></MapView>
          </div>
        </main>
         
      </div>
  )
}

export default Rotas



