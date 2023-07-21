import { Request, Response } from 'express';
import { createProduto, getAllProduto, getProduto, updateProduto } from './produto.services';
import { ProdutoDto } from './produto.types';

const index = async (req: Request, res: Response) => {
    try {
        const produtos = await getAllProduto();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).send(error);
    }
};
const create = async (req: Request, res: Response) => {
    const produto: ProdutoDto = req.body;
    try {
        const newProduto = await createProduto(produto);
        res.status(201).json(newProduto);
    } catch (error) {
        res.status(500).send(error);
    }
};
const read = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const produto = await getProduto(id);
        if (produto === null) {
            res.status(400).json({ msg: 'Produto não existe' });
        } else {
            res.status(200).json(produto);
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const produto: ProdutoDto = req.body;
        const updatedProduto = await updateProduto(id, produto);
        if (updatedProduto === null) {
            return res.status(400).json({ msg: 'Produto nao existe' }); // bad request
        }
        return res.status(200).json({ msg: 'Produto Atualizado' });
    } catch (error) {
        res.status(500).send(error);
    }
};
const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
