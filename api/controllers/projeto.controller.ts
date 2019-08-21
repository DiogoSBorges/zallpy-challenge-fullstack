import { Response, Router, NextFunction } from "express";
import IController from "../interfaces/controller.interface";
import AutorizacaoHandler from "../handlers/autorizacao.handler";
import PermicaocaoHandler from "../handlers/permissao.handler";
import IRequest from "../interfaces/request.interface";

import { ProjetoRepository } from "../repositories/projeto.repository";
import { LancarHorasService } from "../services/projeto/lancar-horas.service";

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
      PermicaocaoHandler("admin"),
      this.obterTodosAsync
    );

    this.router.post(
      `${this.path}/:id/lancar-horas`,
      AutorizacaoHandler,
      this.criarAsync
    );
  }

  criarAsync = async (
    request: IRequest,
    response: Response,
    next: NextFunction
  ) => {
    const projetoId = request.param("id");
    try {
      await LancarHorasService.lancarHoras(
        Number(projetoId),
        request.usuario.id,
        request.body.horas
      );
      response.status(200).send(projetoId);
    } catch (error) {
      next(error);
    }
  };

  obterPorUsuarioLogadoAsync = async (
    request: IRequest,
    response: Response,
    next: NextFunction
  ) => {
    try {
      var retorno = await ProjetoRepository.obterPorUsuarioAsync(
        request.usuario.id
      );
      response.status(200).send(retorno);
    } catch (error) {
      next(error);
    }
  };

  obterTodosAsync = async (
    request: IRequest,
    response: Response,
    next: NextFunction
  ) => {
    try {
      var retorno = await ProjetoRepository.obterTodosAsync();
      response.status(200).send(retorno);
    } catch (error) {
      next(error);
    }
  };
}
