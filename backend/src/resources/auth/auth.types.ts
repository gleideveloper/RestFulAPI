import {Usuario} from "../../models";

export type LoginDto = Pick<Usuario, 'email' | 'senha'>;
export type SignUpDto = Pick<Usuario, 'nome' | 'email' | 'senha'>;
