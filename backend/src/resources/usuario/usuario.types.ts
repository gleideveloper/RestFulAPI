import {Usuario} from "../../models";

export type CreateUsuarioDto = Pick<
  Usuario,
  'tipoUsuarioId' | 'nome' | 'email' | 'senha'
>;
export type UsuarioDto = Omit<Usuario, 'senha'>;
export type UpdateUsuarioDto = Pick<
  Usuario,
  'tipoUsuarioId' | 'nome' | 'email' | 'senha'
>;
