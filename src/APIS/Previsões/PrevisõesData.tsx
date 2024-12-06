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
  intervaloTotal: number;
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
      nome: "horario do almoço", 
      inicio: "11:00:00",
      fim: "14:15:00",
      rotas: [
          OdontoDireto,
          OdontoIchRU,
          AnelViario,
          HURUDireto,
          Circular], 
      intervaloPontos: Math.round( 15/13),
      intervaloTotal: 15 
  },  
  {
      nome: "horario da jantar",
      inicio: "17:00:00",
      fim: "20:15:00",
      rotas: [
          OdontoDireto,
          OdontoIchRU,
          AnelViario,
          HURUDireto,
          Circular
      ],
      intervaloPontos: Math.round( 15/13),
      intervaloTotal: 15
    },
  {
      nome: "horario da manhã",
      inicio: "06:00:00",
      fim: "11:00:00",
      rotas: [
          Circular,
      ],
      intervaloPontos: Math.round( 30/13),
      intervaloTotal: 30
  },
  {
      nome: "horario da tarde",
      inicio: "14:00:00",
      fim: "16:00:00",
      rotas: [
          Circular,
      ],
      intervaloPontos: Math.round( 30/13),
      intervaloTotal: 30
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
  
  intervaloPontos: 0,
  intervaloTotal: 0
}