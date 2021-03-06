import LancamentoModel from "../db/models/lancamento.model";
import { LancamentoErroAoCadastrarException } from "../exceptions/lancamento.exception";

export class LancamentoRepository {
  
  static criarAsync: any = async (projetoId: number, usuarioId:number, horas: number, data: Date) => {
    try {
      return await LancamentoModel.create({
          projetoId:projetoId,
          usuarioId:usuarioId,
          horas:horas,
          data:data
      });
    } catch (e) {
      throw new LancamentoErroAoCadastrarException();
    }
  };
 
}
