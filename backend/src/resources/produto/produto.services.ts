import {Produto} from '../../models/Produto';
import {ProdutoDto} from './produto.types';

const listProdutos = async (): Promise<Produto[]> => {
  const produtos = await Produto.findAll();
  return produtos.map((p) => p.toJSON());
};

const createProduto = async (produto: ProdutoDto): Promise<Produto> => {
  return await Produto.create(produto);
};

const getProduto = async (id: string): Promise<Produto | null> => {
    const produto = await Produto.findOne({ where: { id } });
  return produto ? produto.toJSON() : null;
};

const updateProduto = async (
  id: string,
  produto: ProdutoDto,
): Promise<ProdutoDto | null> => {
  const produtoFromDB = await getProduto(id);

  if (!produtoFromDB) {
    return null;
  }

  const [affectCount] = await Produto.update(produto, { where: { id } });
  return affectCount > 0 ? produto : null;
};

const removeProduto = async (id: string): Promise<boolean> =>{
    const produtosApagados = await Produto.destroy({where: {id}});
    return !!produtosApagados;
}


export { listProdutos, createProduto, getProduto, updateProduto, removeProduto };
