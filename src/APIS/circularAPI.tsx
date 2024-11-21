export type Rotas= {
    nome: string
    pontos: string[]
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
class CircularAPI {
    getRotasbyName(nome: string){
        return Rotas.filter( (rota) => {
            return rota.nome === nome
        })
    }
    getHorarioByDate(){
        const date = new Date()
        const hora = date.getHours()
        const minuto = date.getMinutes()
        const currentHorario = `${hora}:${minuto}`
        const horario = Horarios.filter( (horario) => {
            return horario.inicio <= currentHorario && horario.fim >= currentHorario
        })
        console.log("horarioapi",horario)
        return horario
    }
    static getHorariosAlmoco(){
        return Horarios
    }
}