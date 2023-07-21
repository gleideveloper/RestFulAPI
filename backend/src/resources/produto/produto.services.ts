import {Produto} from '../../models/Produto';
import {ProdutoDto} from './produto.types';

const getAllProduto = async (): Promise<Array<Produto>> => {
  const produtos = await Produto.findAll();
  return produtos.map((p) => p.toJSON());
};

const createProduto = async (produto: ProdutoDto): Promise<Produto> => {
  return await Produto.create(produto);
};

const getProduto = async (id: string): Promise<Produto | null> => {
  return await Produto.findOne({ where: { id } });
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

export { getAllProduto, createProduto, getProduto, updateProduto };
