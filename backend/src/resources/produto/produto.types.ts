import { Produto } from '../../models/Produto';

type ProdutoDto = Pick<Produto, 'nome' | 'preco' | 'estoque'>;

export { ProdutoDto };
