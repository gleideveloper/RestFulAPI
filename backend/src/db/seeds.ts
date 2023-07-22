import {TipoUsuarios} from "../resources/tipo-usuario/tipoUsuario.constants";

export interface SeedsDB {
  inserts?: Array<{ model: string; query: string }>;
}

const seeds: Map<number, SeedsDB> = new Map<number, SeedsDB>();

seeds.set(1, {
  inserts: [
    {
      model: 'TipoUsuario',
      query: `INSERT INTO TipoUsuarios (id, rotulo, createdAt, updatedAt) values ('${TipoUsuarios.CLIENTE}', 'cliente', now(), now());`,
    },
    {
      model: 'TipoUsuario',
      query: `INSERT INTO TipoUsuarios (id, rotulo, createdAt, updatedAt) values ('${TipoUsuarios.ADMIN}', 'admin', now(), now());`,
    },
  ],
});

export { seeds };
