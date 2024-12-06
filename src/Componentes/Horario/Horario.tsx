import './Horarios.css'
interface HorarioProps {
    horaChegada: string;
    horaPrevisão: string;
    nome: string;
}
function Horario( {horaChegada, horaPrevisão, nome}: HorarioProps){
    const restanteInt = parseInt(horaPrevisão.replace('m', ''));
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
        {
             restanteInt < 15 ? 
                <div className='blink' style={{backgroundColor:'green'}}></div>
            : restanteInt < 30 ?
                <div className='blink' style={{backgroundColor:'orange'}}></div>
            : 
                <div className='blink' style={{backgroundColor:'red'}}></div>
        }
    </div>
    )
}
export default Horario