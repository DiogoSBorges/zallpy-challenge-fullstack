import { sequelize } from "./../sequelize";
import { ProjetoErroAoObterNaBaseDeDadosException } from "../exceptions/projeto.exception";

export class ProjetoRepository {
  static obterPorUsuarioAsync: any = async (usuarioId: number) => {
    try {
      const query: string = `SELECT 
                              p.id,
                              p.nome,
                              p."createdAt",
                              p."updatedAt",
                              (CASE WHEN SUM(l.horas) ISNULL THEN 0 ELSE SUM(l.horas) END) as horas
                            FROM "Projeto" as p
                            INNER JOIN "UsuarioProjetoPermissao" as upp ON  upp."projetoId" = p.id
                            LEFT JOIN "Lancamento" as l ON l."usuarioId" = upp."usuarioId" and l."projetoId" = upp."projetoId"
                            WHERE upp."usuarioId" = ${usuarioId} 
                            GROUP BY p.id
                            ORDER BY p.nome`;

      var retorno = await sequelize.query(query);
      return retorno[0];
    } catch (e) {
      throw new ProjetoErroAoObterNaBaseDeDadosException();
    }
  };

  static obterTodosAsync: any = async () => {
    try {
      const query: string = `SELECT 
                                p.id,
                                p.nome,
                                p."createdAt",
                                p."updatedAt",
                                (CASE WHEN SUM(l.horas) ISNULL THEN 0 ELSE SUM(l.horas) END) as horas
                              FROM "Projeto" as p
                              LEFT JOIN "Lancamento" as l ON l."projetoId" = p.id
                              GROUP BY p.id
                              ORDER BY p.nome`;

      var retorno = await sequelize.query(query);
      return retorno[0];
    } catch (e) {
      throw new ProjetoErroAoObterNaBaseDeDadosException();
    }
  };
}
