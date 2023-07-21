import { Router } from 'express';
import pingRouter from '../resources/ping/ping.router';
import produtoRouter from '../resources/produto/produto.router';
import tipoUsuarioRouter from '../resources/tipo-usuario/tipoUsuario.router';
import usuarioRouter from '../resources/usuario/usuario.router'
import authRouter from '../resources/auth/auth.router'
const router = Router();

router.use('/ping', pingRouter);
router.use('/produto', produtoRouter);
router.use('/tipo-usuario', tipoUsuarioRouter);
router.use('/usuario', usuarioRouter);
router.use("/", authRouter)
export default router;
