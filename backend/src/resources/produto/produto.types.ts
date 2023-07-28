import {Produto} from "../../models";

export type CreateProdutoDto = Pick<Produto, 'nome' | 'preco' | 'estoque'>;
export type UpdateProdutoDto = Pick<Produto, 'nome' | 'preco' | 'estoque'>;
