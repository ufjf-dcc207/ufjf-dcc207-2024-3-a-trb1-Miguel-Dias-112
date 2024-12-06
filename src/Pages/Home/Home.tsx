
import Header from '../../Componentes/HeaderInputs/header'
import './Home.css'


function Home() {

  return (
    <div className='Home'>

      <Header titulo='Home'>{null}</Header>
      <main>
        <h1>Bem-vindo!</h1>
        <p>Este projeto foi desenvolvido para simplificar e interpretar informações sobre o Circular da UFJF, promovendo mais praticidade e bem-estar para a comunidade acadêmica como um todo.</p>
        <p>Na aba <strong>Previsões</strong>, você pode consultar os horários previstos dos ônibus, organizados de acordo com o ponto de sua escolha.</p>
        <p>Na aba <strong>Rotas</strong>, você encontrará uma lista das rotas atuais, além de sua visualização em um mapa dinâmico e interativo.</p>
        <p>Este é um projeto de código aberto, sem fins lucrativos, baseado exclusivamente em informações públicas fornecidas pela UFJF, disponíveis no site oficial: <a href="https://www2.ufjf.br/transporte/veiculos/onibus-circular/" target="_blank">https://www2.ufjf.br/transporte/veiculos/onibus-circular/</a>.</p>
        <p>
          Idealizado por 
          <a href='https://github.com/Miguel-Dias-112/'>Miguel Dias</a> 
          <a href='https://github.com/TheDevCaio'>Caio Machado</a>
        </p>
      </main>

      
    </div>
      
   
  )
}

export default Home
