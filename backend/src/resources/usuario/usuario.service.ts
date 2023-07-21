import bcrypt from 'bcryptjs';

import { Usuario } from '../../models/Usuario';
import { UsuarioDto} from './usuario.types';

export const ListarUsuarios = async (): Promise<Usuario[]> => {
    const usuarios = await Usuario.findAll();
    return usuarios.map((p) => p.toJSON());
};

export const criarUsuario = async (usuario: UsuarioDto): Promise<UsuarioDto> => {

    const rounds = parseInt(process.env.SALT_ROUNDS! as string);
    const salt = await bcrypt.genSalt(rounds);
    const hash = await bcrypt.hash(usuario.senha, salt);
    const newUsuario = await Usuario.create({ ...usuario, senha: hash });

    const newUsuarioSemSenha = newUsuario.toJSON();
    delete newUsuarioSemSenha["senha"];

    return newUsuarioSemSenha;
}

export const lerUsuario = async (id: string): Promise<Usuario | null> => {
    return await Usuario.findOne({ where: { id } });
};

export const atualizarUsuario = async (
    id: string,
    usuario: UsuarioDto,
): Promise<number | null> => {
    const usr = await lerUsuario(id);
    if (usr === null) return null;
    const [affectedCount] = await Usuario.update(usuario, { where: { id } });
    return affectedCount;
};

export const buscarUsuarioPorEmail = async (email: string): Promise<Usuario | null> => {
    return await Usuario.findOne(
        {
            attributes:['id', 'tipoUsuarioId', 'nome', 'email', 'createdAt', 'updatedAt'],
            where: { email }
        }
    );
}

export const removerUsuario = async (id: string): Promise<number> => {
    return await Usuario.destroy({ where: { id } });
};