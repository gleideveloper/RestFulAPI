import {TipoUsuario} from "../../models/TipoUsuario";

const listaTipoUsuario = async (): Promise<TipoUsuario[]> =>{
    const tipoUsuarios = await TipoUsuario.findAll();
    return tipoUsuarios.map((t)=> t.toJSON());
}

export { listaTipoUsuario }