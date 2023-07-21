import { Request, Response } from 'express';
import {
    ListarUsuarios,
    criarUsuario,
    lerUsuario,
    atualizarUsuario,
    removerUsuario,
} from './usuario.service';
import { UsuarioDto } from './usuario.types';

const index = async (req: Request, res: Response) => {
    try {
        const usuarios = await ListarUsuarios();
        res.status(200).json(usuarios);
    } catch (e) {
        res.status(500).json(e);
    }
};
const create = async (req: Request, res: Response) => {
    const usuario: UsuarioDto = req.body;
    try {
        const newUsuario = await criarUsuario(usuario);
        res.status(201).json(newUsuario);
    } catch (e) {
        res.status(500).json(e);
    }
};
const read = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const usuario = await lerUsuario(id);
        if (usuario === null)
            return res.status(400).json({ msg: 'Usuario não existe' });
        else res.status(200).json(usuario);
    } catch (e) {
        res.status(500).json(e);
    }
};
const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = req.body;
    try {
        await atualizarUsuario(id, usuario);
        if (usuario === null)
            return res.status(400).json({ msg: 'Usuario não existe' });
        else res.status(200).json({ msg: 'Usuario atualizado' });
    } catch (e) {
        res.status(500).json(e);
    }
};
const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await removerUsuario(id);
        if (result === 0)
            return res.status(400).json({ msg: 'Usuario não existe' });
        else res.status(200).json({ msg: 'Usuario removido' });
    } catch (e) {
        res.status(500).json(e);
    }
};
export default { index, create, read, update, remove };