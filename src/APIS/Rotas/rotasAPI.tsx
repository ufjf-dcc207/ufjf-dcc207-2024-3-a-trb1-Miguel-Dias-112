import { anelViario, HuAnexo, OdontoAnexo, anexoIch,rotasNome } from './RotasMapaData';

export class RotasAPI {
    get RotasNome(): string[] {
        return rotasNome;
    }
    concatenaAnexo(rotaPrincipal: number[][], rotaAnexo:number[][]): number[][] {
        let posI: number;
        let posF: number;
        posI = rotaPrincipal.map(e => e[0]).indexOf(rotaAnexo[0][0]);
        posF = rotaPrincipal.map(e => e[0]).indexOf(rotaAnexo[rotaAnexo.length-1][0]);
        const rotaCompleta = rotaPrincipal.slice(0,posI);
        const Resto = rotaPrincipal.slice(posF+1);
        rotaCompleta.push(...rotaAnexo)
        rotaCompleta.push(...Resto)
        return rotaCompleta
    }
    getRotaByName(nome:string): number[][] {
        const HUDireto = this.concatenaAnexo(anelViario,HuAnexo)
        const OdontoDireto = this.concatenaAnexo(anelViario,OdontoAnexo);
        const OdontoIch = this.concatenaAnexo(OdontoDireto,anexoIch);
        let Circular = this.concatenaAnexo(HUDireto,OdontoAnexo); 
        Circular = this.concatenaAnexo(Circular,anexoIch);
        switch (nome) {
            case 'Circular':
                return Circular;
            case 'HU-RU Direto':
                return HUDireto
            case 'Anel Viario':
                return anelViario;
            case 'Odonto Direto':
                return OdontoDireto;
            case 'Odonto-Ich-RU':
                return OdontoIch;
            default:
                return anelViario;
        }
    }
}
export default new RotasAPI()