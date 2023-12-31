import {TipoUsuario} from "../../models";

export const getTiposUsuarios = async (): Promise<TipoUsuario[]> => {
  const tipos = await TipoUsuario.findAll();
  return tipos.map((t) => t.toJSON());
};
