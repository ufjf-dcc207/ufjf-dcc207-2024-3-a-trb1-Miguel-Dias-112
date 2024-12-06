import './Horarios.css'
interface HorarioProps {
    horaChegada: string;
    horaPrevisão: string;
    nome: string;
    blinkColor: string;
}
function Horario( {horaChegada, horaPrevisão, nome, blinkColor}: HorarioProps){
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

        <div className='blink' style={{backgroundColor:blinkColor}}></div>
    </div>
    )
}
export default Horario