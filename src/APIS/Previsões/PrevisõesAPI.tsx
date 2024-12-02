import { Rotas, Ponto, Horario,Horarios ,HorariosFora} from "./PrevisõesData";

class PrevisõesApi {
   
    
    get Pontos(): string[]{
        const todosPontos = [
            "Letras" , "ICB" ,"ICE","IAD","Engenharia",'CRITT',"RU",
            "CBR", "ICB", "FAEFID", "Direito","HU","Curva Repressa",
            "Corpo de Bombeiros", "Odonto","Economia", "Educação","ICH"
        ]
        return todosPontos
    }
    
    calcularHorarioRestante = (rota: Rotas, ponto: Ponto, horariosDate: Horario) => {

        
        const index = rota.pontos.indexOf(ponto as Ponto);
        const intervalo = horariosDate.intervaloPontos;
        const totalPontos = rota.pontos.length;
    
        // Configurar o horário de início da rota
        const dataInicioRota = new Date();
        const [horaInicio, minutoInicio, segundoInicio] = horariosDate.inicio.split(':').map(Number);
        dataInicioRota.setHours(horaInicio);
        dataInicioRota.setMinutes(minutoInicio);
        dataInicioRota.setSeconds(segundoInicio);
    
        // Calcular o tempo decorrido em minutos desde o início da rota
        const dataAtual = new Date();
        const minutosDecorridos = Math.floor((dataAtual.getTime() - dataInicioRota.getTime()) / 60000);
    
        // Calcular o tempo atual no ciclo da rota
        const tempoAtual = minutosDecorridos % (totalPontos * intervalo) + intervalo * index;
        // Calcular o tempo restante para completar o ciclo
        const tempoRestante = (totalPontos * intervalo) - tempoAtual;
        // Converter o tempo restante para horas e minutos formatados
        
        dataAtual.setMinutes(dataAtual.getMinutes() + tempoRestante);
        const horasFormatadas = dataAtual.getHours().toString().padStart(2, '0');
        const minutosFormatados = dataAtual.getMinutes().toString().padStart(2, '0');
        return {
            tempo: `${horasFormatadas}:${minutosFormatados}`,
            restante: `${tempoRestante}m`,
        };
    };
    
    get horariosDate(): Horario {
        const date = new Date();
        // Verificar se é final de semana 
        if(date.getDay() === 0 || date.getDay() === 6){
            return HorariosFora
        }

        const horarioAtual = Horarios.find((horario: Horario) => {
            const inicio = new Date(`${date.toDateString()} ${horario.inicio}`);
            const fim = new Date(`${date.toDateString()} ${horario.fim}`);
            return date >= inicio && date <= fim;
        });
        // Retorna o horário encontrado ou um horário padrão
        return horarioAtual ?? HorariosFora;
    }
    
 
}
export default new PrevisõesApi()