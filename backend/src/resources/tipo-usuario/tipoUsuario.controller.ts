import {Request, Response} from "express";
import {listaTipoUsuario} from "./tipoUsuario.service";

const index = async (req: Request, res: Response) => {
    try {
        const tipoUsuarios = await listaTipoUsuario();
        res.status(200).json(tipoUsuarios);
    } catch (error) {
        res.status(500).send(error);
    }
};

export default { index }