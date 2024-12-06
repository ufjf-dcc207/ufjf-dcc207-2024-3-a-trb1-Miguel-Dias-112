import './Rotas.css'
import type {Rotas} from '../../APIS/Previsões/PrevisõesData.tsx'
import RotasApi from '../../APIS/Rotas/rotasAPI.tsx'
import { useState } from 'react'
import { MapView } from '../../Componentes/MapView/MapView.tsx'
import Header from '../../Componentes/HeaderInputs/header.tsx'
import DropDown from '../../Componentes/Dropdown/Dropdown.tsx'
function Rotas() {

  const [rota, setRota] = useState<number[][]>(RotasApi.getRotaByName(''))
  const rotasNome = RotasApi.RotasNome

  function onSelectHandler( x: React.ChangeEvent<HTMLSelectElement>){
    const input = x.target!
    const nome = input.options[input.selectedIndex].value;
    setRota(RotasApi.getRotaByName(nome))
  }
  return (
      <div className='Rotas'>
          <Header titulo='Rotas' >
              <DropDown onchangeHandler={onSelectHandler} options={rotasNome} nomeInput='Selecione uma Rota'></DropDown>
          </Header>
        <main>
          <div className='Pontos'>
                <MapView rota={rota}></MapView>
          </div>
        </main>
         
      </div>
  )
}

export default Rotas



