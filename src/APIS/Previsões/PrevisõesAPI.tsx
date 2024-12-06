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
    
    calculaRestante = (rota: Rotas, ponto: Ponto, horariosDate: Horario) => {

        
        const index = rota.pontos.indexOf(ponto as Ponto);
        const intervalo = horariosDate.intervaloPontos;
        const totalPontos = rota.pontos.length;
        const dataInicioRota = new Date();
        const [horaInicio, minutoInicio, segundoInicio] = horariosDate.inicio.split(':').map(Number);
        dataInicioRota.setHours(horaInicio);
        dataInicioRota.setMinutes(minutoInicio);
        dataInicioRota.setSeconds(segundoInicio);
        const dataAtual = new Date();
        const minutosDecorridos = Math.floor((dataAtual.getTime() - dataInicioRota.getTime()) / 60000);
    
        const tempoAtual = minutosDecorridos % (totalPontos * intervalo) + intervalo * index;
        const tempoRestante = (totalPontos * intervalo) - tempoAtual;        
        dataAtual.setMinutes(dataAtual.getMinutes() + tempoRestante);
        const horasFormatadas = dataAtual.getHours().toString().padStart(2, '0');
        const minutosFormatados = dataAtual.getMinutes().toString().padStart(2, '0');
        return {
            tempo: `${horasFormatadas}:${minutosFormatados}`,
            restante: `${tempoRestante}m`,
        };
    };
    
    calcularHorariosRestantes = (rota: Rotas[], ponto: Ponto, horariosDate: Horario) => {
        return rota.map(r => ({
            rota: r,
            ...this.calculaRestante(r, ponto, horariosDate)
        })).sort((a, b) => parseInt(a.restante) - parseInt(b.restante));
    };

    get horariosDate(): Horario {
        const date = new Date();
        if(date.getDay() === 0 || date.getDay() === 6){
            return HorariosFora
        }
        const horarioAtual = Horarios.find((horario: Horario) => {
            const inicio = new Date(`${date.toDateString()} ${horario.inicio}`);
            const fim = new Date(`${date.toDateString()} ${horario.fim}`);
            return date >= inicio && date <= fim;
        });
        return horarioAtual ?? HorariosFora;
    }
    
 
}
export default new PrevisõesApi()