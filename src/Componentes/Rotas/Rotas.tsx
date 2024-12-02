import './Rotas.css'
import type {Rotas} from '../../APIS/circularAPI.tsx'
import RotasApi from '../../APIS/Rotas/rotasAPI.tsx'
import { useState,useRef } from 'react'
import { MapView } from './MapView.tsx'
import Header from '../Header/header.tsx'
function Rotas() {

  const [rota, setRota] = useState<number[][]>(RotasApi.getRotaByName(''))
  
  const selectIPT = useRef<HTMLSelectElement>(null)
  const rotasNome = RotasApi.RotasNome

  function onSelectHandler(){
    const e = selectIPT.current!
    const nome = e.options[e.selectedIndex].value;
    setRota(RotasApi.getRotaByName(nome))
  }
  return (
      <div className='Rotas'>
          <Header titulo='rotas' onchangeHandler={onSelectHandler} select={selectIPT} options={rotasNome}></Header>
        <main>
          <div className='Pontos'>
                <MapView rota={rota}></MapView>
          </div>
        </main>
         
      </div>
  )
}

export default Rotas



