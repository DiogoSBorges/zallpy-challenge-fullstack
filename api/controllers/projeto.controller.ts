import { Response, Router } from "express";
import IController from "../interfaces/controller.interface";
import AutorizacaoHandler from "../handlers/autorizacao.handler";
import PermicaocaoHandler from '../handlers/permissao.handler';
import IRequest from "../interfaces/request.interface";

import { ProjetoRepository } from "../repositories/projeto.repository";


export class ProjetoController implements IController {
  public path = "/projeto";
  public router = Router();

  constructor() {
    this.iniciarRotas();
  }

  public iniciarRotas() {
    this.router.get(
      `${this.path}/obter-por-usuario-logado`,
      AutorizacaoHandler,
      this.obterPorUsuarioLogadoAsync
    );

    this.router.get(
      `${this.path}/obter-todos`,
      AutorizacaoHandler,
      PermicaocaoHandler('admin'),
      this.obterTodosAsync
    );
  }

  obterPorUsuarioLogadoAsync = async (request: IRequest, response: Response) => {
    var retorno = await ProjetoRepository.obterPorUsuarioAsync(request.usuario.id);
    response.status(200).send(retorno);
  };

  obterTodosAsync = async (request: IRequest, response: Response) => {
    var retorno = await ProjetoRepository.obterTodosAsync();
    response.status(200).send(retorno);
  };
}
