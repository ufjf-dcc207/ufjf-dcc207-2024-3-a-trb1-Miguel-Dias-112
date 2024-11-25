export type Rotas= {
    nome: string
    pontos: Ponto[],
  }
export type Horario = {
    nome: string,
    rotas: Rotas[],
    intervaloPontos: number,
    inicio: string,
    fim: string,
}
export type Ponto =    "Letras" | "ICB" |"ICE"|"IAD"|"Engenharia"|'CRITT'|"RU"|
                "CBR"| "ICB"| "FAEFID"| "Direito"|"HU"|"Curva Repressa"|
                "Corpo de Bombeiros"| "Odonto"|"Economia"| "Educação"|"ICH"
const AnelViario:Rotas ={
    nome: "Anel Viário",
    pontos:["Letras", "ICB", "ICE", "IAD", "Engenharia","RU",
            "CRITT", "CBR", "ICB", "FAEFID","Curva Repressa",
            "Corpo de Bombeiros","Direito"]
}
const Circular:Rotas ={
    nome: "Circular",
    pontos: [   "Letras", "ICB", "ICE", 
                "IAD", "Engenharia", "RU",
                "CRITT", "CBR", "ICB", "FAEFID",
                "HU", "Corpo de Bombeiros", "Odonto",
                "Economia", "Educação","ICH", "Direito"]
              
}
const OdontoDireto:Rotas ={
    nome: "Odonto-Direto",
    pontos: ["Letras", "ICB", "ICE", "IAD", "Engenharia","RU",
            "CRITT", "CBR", "ICB", "FAEFID","Curva Repressa",
            "Corpo de Bombeiros","Odonto","Economia","Educação",
            "Direito"]
}
const OdontoIchRU:Rotas={ 
    nome: "Odonto-ICH-RU",  
    pontos:["Letras", "ICB", "ICE", "IAD", "Engenharia","RU",
            "CRITT", "CBR", "ICB", "FAEFID","Curva Repressa",
            "Corpo de Bombeiros","Odonto","Economia","Educação",
            "ICH","Direito"]
}

const HURUDireto:Rotas={
    nome: "HU-RU direto",
    pontos:["Letras", "ICB", "ICE", "IAD", "Engenharia","RU",
        "CRITT", "CBR", "ICB", "FAEFID","HU",
        "Corpo de Bombeiros","Direito"]
}


const Rotas: Rotas[] = [
    OdontoDireto,
    AnelViario,
    HURUDireto,
    Circular
]
const Horarios: Horario[] = [
    { 
        nome: "almoco", 
        inicio: "11:00:00",
        fim: "14:15:00",
        rotas: [
            OdontoDireto,
            OdontoIchRU,
            AnelViario,
            HURUDireto,
            Circular], 
        intervaloPontos: 5 
    },  
    {
        nome: "jantar",
        inicio: "17:00:00",
        fim: "20:15:00",
        rotas: [
            OdontoDireto,
            OdontoIchRU,
            AnelViario,
            HURUDireto,
            Circular
        ],
        intervaloPontos: 5
      },
     
]
const HorariosFora: Horario= {
    nome: "fora do horário",
    inicio: "21:00:00",
    fim: "24:00:00",
    rotas: [
        {nome: "Fora do horário",
        pontos: [],}
        
    ],
    
    intervaloPontos: 5
  }
class CircularAPI {
   
    
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
        // Filtrar os horários que estão no intervalo atual
        const horarioAtual = Horarios.find((horario: Horario) => {
            const inicio = new Date(`${date.toDateString()} ${horario.inicio}`);
            const fim = new Date(`${date.toDateString()} ${horario.fim}`);
            return date >= inicio && date <= fim;
        });
        // Retorna o horário encontrado ou um horário padrão
        return horarioAtual ?? HorariosFora;
    }
    
 
}
export default new CircularAPI()