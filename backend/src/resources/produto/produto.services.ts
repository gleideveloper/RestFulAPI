import {Produto} from '../../models/Produto';
import {ProdutoDto} from './produto.types';

const listarProdutos = async (): Promise<Produto[]> => {
  const produtos = await Produto.findAll();
  return produtos.map((p) => p.toJSON());
};

const criarProduto = async (produto: ProdutoDto): Promise<Produto> => {
  return await Produto.create(produto);
};

const lerProduto = async (id: string): Promise<Produto | null> => {
    const produto = await Produto.findOne({ where: { id } });
  return produto ? produto.toJSON() : null;
};

const atualizarProduto = async (
  id: string,
  produto: ProdutoDto,
): Promise<ProdutoDto | null> => {
  const produtoFromDB = await lerProduto(id);

  if (!produtoFromDB) {
    return null;
  }

  const [affectCount] = await Produto.update(produto, { where: { id } });
  return affectCount > 0 ? produto : null;
};

const removerProduto = async (id: string): Promise<boolean> =>{
    const produtosApagados = await Produto.destroy({where: {id}});
    return !!produtosApagados;
}


export { listarProdutos, criarProduto, lerProduto, atualizarProduto, removerProduto };
