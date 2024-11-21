export type Rotas= {
    nome: string
    pontos: string[],
  }
type Horario = {
    nome: string,
    rotas: Rotas[],
    
    intervaloPontos: number,
    inicio: string,
    fim: string,
}

const OdontoIchDireto ={
    nome: "Odonto-ICH direto",
    pontos: [ "RU",  "ICB ", "Educação Física ", "Curva da Represa ", "Farmácia ", "Enfermagem ", "Direito ", "Letras "," Ciências Biológicas ", "IAD ", "RU"] 
}
const OdontoIchRU ={ 
    nome: "Odonto-ICH-RU",  
    pontos:   ["RU", "CRITT", "CBR", "ICB", "FAEFID", "Curva da Represa", "Odonto", "Farmácia", "Economia", "Enfermagem", "ICH", "Direito", "Letras", "ICB", "ICE", "IAD", "Engenharia"], 
}
const AnelViario ={
    nome: "Anel Viário",
    pontos: [ "FAEFID ", "Curva da Represa ", "Direito ", "Letras ", "ICB ", "ICE ", "IAD ", "Engenharia ", "RU ", "CRITT ", "CBR ", "ICB"] 
}
const HURUDireto ={
    nome: "HU-RU direto",
    pontos: [ "Restaurante Universitário (RU) ", "ICB ", "Educação Física ", "Hospital Universitário (HU) ", "Corpo de Bombeiros ", "Direito ", "Letras ", "Ciências Biológicas ", "IAD ", "RU"] 
}
const Circular ={
    nome: "Circular",
    pontos: [ "Letras ", "ICB ", "ICE ", "IAD ", "Engenharia ", "RU ", "CRITT ", "CBR ", "ICB ", "FAEFID ", "HU ", "Corpo de Bombeiros ", "Odonto ", "Economia ", "Enfermagem ", "Educação ", "ICH ", "Direito"] 
}

const Rotas: Rotas[] = [
    OdontoIchDireto,
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
            OdontoIchDireto,
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
            OdontoIchDireto,
            OdontoIchRU,
            AnelViario,
            HURUDireto,
            Circular
        ],
        
        intervaloPontos: 5
      }
]
const HorariosFora: Horario= {
    nome: "fora do horário",
    inicio: "21:00:00",
    fim: "24:00:00",
    rotas: [
        {nome: "Fora do horário",
        pontos: ["Fora do horário"],}
        
    ],
    
    intervaloPontos: 5
  }
class CircularAPI {
    getRotas(): Rotas[]{
        return Rotas
    }
    get RotaDefault(): Rotas{
        return Rotas[0]
    }
    getRotasNome(): string[]{
        return Rotas.map( (rota) => {
            return rota.nome
        })
    }
    getRotasbyName(nome: string): Rotas{
        return Rotas.filter( (rota) => {
            return rota.nome === nome
        })[0]
    }
    calculateTime(ponto: string, rota: Rotas): {tempo:string, restante:string}{
        const index = rota.pontos.indexOf(ponto)
        const horario = this.horariosDate
        const intervalo = horario.intervaloPontos
        const time = new Date()
        time.setMinutes(time.getMinutes() + intervalo * index)
        const hours = time.getHours().toString().padStart(2, '0')
        const minutes = time.getMinutes().toString().padStart(2, '0')

        const diaAtual = new Date()
        const diffInMs   = time.getTime() - diaAtual.getTime()
        const diffInHours = Math.floor(diffInMs / 1000 / 60 / 60)
        
        return {
            tempo: `${hours}:${minutes}`,
            restante: `${diffInHours}h ${time.getMinutes()}m`
        }
    }
    get horariosDate(): Horario{
        const date = new Date()
        const _horario = Horarios.filter( (horario: Horario) => {
            const inicio = new Date(date.toDateString() + " " + horario.inicio)
            const fim = new Date(date.toDateString() + " " + horario.fim)
            return date >= inicio && date <= fim
        })
        if(_horario.length == 0){
            return HorariosFora
        }else{
            return _horario[0]
        }
    }
   get Pontos(): string[]{
        return this.getRotasbyName('Circular').pontos
    }
}
export default new CircularAPI()