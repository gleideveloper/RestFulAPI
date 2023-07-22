import { Usuario } from '../../models/Usuario';

export type UsuarioDto = Pick<Usuario, 'nome' | 'email' | 'senha'>;