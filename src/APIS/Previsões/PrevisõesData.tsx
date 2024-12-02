export type Rotas = {
  nome: string;
  pontos: Ponto[];
};
export type Horario = {
  nome: string;
  rotas: Rotas[];
  intervaloPontos: number;
  inicio: string;
  fim: string;
};
export type Ponto =
  | "Letras"
  | "ICB"
  | "ICE"
  | "IAD"
  | "Engenharia"
  | "CRITT"
  | "RU"
  | "CBR"
  | "ICB"
  | "FAEFID"
  | "Direito"
  | "HU"
  | "Curva Repressa"
  | "Corpo de Bombeiros"
  | "Odonto"
  | "Economia"
  | "Educação"
  | "ICH";
export const AnelViario: Rotas = {
  nome: "Anel Viário",
  pontos: [
    "Letras",
    "ICB",
    "ICE",
    "IAD",
    "Engenharia",
    "RU",
    "CRITT",
    "CBR",
    "ICB",
    "FAEFID",
    "Curva Repressa",
    "Corpo de Bombeiros",
    "Direito",
  ],
};
export const Circular: Rotas = {
  nome: "Circular",
  pontos: [
    "Letras",
    "ICB",
    "ICE",
    "IAD",
    "Engenharia",
    "RU",
    "CRITT",
    "CBR",
    "ICB",
    "FAEFID",
    "HU",
    "Corpo de Bombeiros",
    "Odonto",
    "Economia",
    "Educação",
    "ICH",
    "Direito",
  ],
};
export const OdontoDireto: Rotas = {
  nome: "Odonto-Direto",
  pontos: [
    "Letras",
    "ICB",
    "ICE",
    "IAD",
    "Engenharia",
    "RU",
    "CRITT",
    "CBR",
    "ICB",
    "FAEFID",
    "Curva Repressa",
    "Corpo de Bombeiros",
    "Odonto",
    "Economia",
    "Educação",
    "Direito",
  ],
};
export const OdontoIchRU: Rotas = {
  nome: "Odonto-ICH-RU",
  pontos: [
    "Letras",
    "ICB",
    "ICE",
    "IAD",
    "Engenharia",
    "RU",
    "CRITT",
    "CBR",
    "ICB",
    "FAEFID",
    "Curva Repressa",
    "Corpo de Bombeiros",
    "Odonto",
    "Economia",
    "Educação",
    "ICH",
    "Direito",
  ],
};

export const HURUDireto: Rotas = {
  nome: "HU-RU direto",
  pontos: [
    "Letras",
    "ICB",
    "ICE",
    "IAD",
    "Engenharia",
    "RU",
    "CRITT",
    "CBR",
    "ICB",
    "FAEFID",
    "HU",
    "Corpo de Bombeiros",
    "Direito",
  ],
};


export const Horarios: Horario[] = [
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
  {
      nome: "InterHorarioManha",
      inicio: "06:00:00",
      fim: "11:00:00",
      rotas: [
          Circular,
      ],
      intervaloPontos: 5
  },
  {
      nome: "InterHorarioTarde",
      inicio: "16:00:00",
      fim: "19:00:00",
      rotas: [
          Circular,
      ],
      intervaloPontos: 5
  }
   
]

export const HorariosFora: Horario= {
  nome: "fora do horário",
  inicio: "21:00:00",
  fim: "24:00:00",
  rotas: [
      {nome: "Fora do horário",
      pontos: [],}
      
  ],
  
  intervaloPontos: 5
}