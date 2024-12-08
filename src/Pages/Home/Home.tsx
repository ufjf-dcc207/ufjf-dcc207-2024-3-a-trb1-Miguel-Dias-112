
import Header from '../../Componentes/HeaderInputs/header'
import './Home.css'
import prevIcon from '../../../public/prevIcon.png'
import rotasIcon from '../../../public/rotasIcon.png'
function Home() {

  return (
    <div className='Home'>

      <Header titulo='Home'>{null}</Header>
      <main>
        <div className='Container'>
          <h1>Bem-vindo!</h1>
            <ol>
              <li>
                
                <p>
                Este projeto foi desenvolvido  para simplificar e interpretar informações sobre o Circular da UFJF,
                promovendo mais praticidade e bem-estar para a comunidade acadêmica como um todo.
                </p>
              </li>
              <li className='Tutorial'>
                <img src={rotasIcon} alt='Previsão Icon'/>
                <p>
                  Na aba <strong>Rotas</strong>, você encontrará uma lista das rotas atuais, além de sua visualização em um mapa dinâmico e interativo.
                </p>
              </li>
              <li className='Tutorial'>
                <img src={prevIcon} alt='Previsão Icon'/>
                <p>
                  Na aba <strong>Previsões</strong>, você pode consultar os horários previstos dos ônibus, organizados
                  de acordo com o ponto de sua escolha.
                </p>
              </li>
              
              <li className='Tutorial'>
                <p>
                  Este é um projeto de código aberto,  sem fins lucrativos, desenvolvido por alunos sem vÍnculo oficial com a UFJF,
                  baseado exclusivamente em informações públicas fornecidas pela UFJF,
                      disponíveis no site oficial: 
                      <a href="https://www2.ufjf.br/transporte/veiculos/onibus-circular/" 
                      target="_blank">https://www2.ufjf.br/transporte/veiculos/onibus-circular/</a>.
                </p>
              </li>
            
            </ol>
          <p className='Creditos'>
            Idealizado por 
            <a href='https://github.com/Miguel-Dias-112/'>Miguel Dias</a>
            <a href='https://github.com/TheDevCaio'>Caio Machado</a>
          </p>
        </div>
      </main>

      
    </div>
      
   
  )
}

export default Home
