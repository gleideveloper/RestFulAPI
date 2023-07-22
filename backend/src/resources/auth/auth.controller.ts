import { Request, Response } from 'express';
import { buscarUsuarioPorEmail, criarUsuario } from '../usuario/usuario.service';
import { checkCredentials } from './auth.service';
import {TipoUsuarios} from "../tipo-usuario/tipoUsuario.constants";

const signup = async (req: Request, res: Response) => {
    const { tipoUsuarioId, nome, email, senha } = req.body;
    try {
        const usuario = await buscarUsuarioPorEmail(email);
        if (usuario) return res.status(400).json({ msg: 'Já existe um usuario com esse email!' });

        const newUsuario = await criarUsuario({...req.body, tipoUsuarioId: TipoUsuarios.CLIENTE});
        res.status(201).json(newUsuario);
    } catch (e) {
        res.status(500).json(e);
    }
};

const login = async (req: Request, res: Response) => {
    const { email, senha } = req.body;
    try {
        const usuario = await checkCredentials({ email, senha });
        if (!usuario) return res.status(401).json({ msg: 'Credenciais invalidas' });
        req.session.uid = usuario.id;
        req.session.tipoUsuarioId = usuario.tipoUsuarioId;
        res.status(200).json({ msg: 'Login efetuado com sucesso' });
    } catch (error) {
        res.status(500).json(error);
    }
};
const logout = (req: Request, res: Response) => {
    if (req.session.uid) {
        req.session.destroy((err) => {
            if (err) return res.status(500).json(err);
        });
    } else {
        res.status(400).json({ msg: 'Usuário NÃO está logado!' });
    }
};

export default { signup, login, logout };
