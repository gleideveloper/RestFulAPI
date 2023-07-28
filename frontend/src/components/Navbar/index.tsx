import {useDispatch, useSelector} from "react-redux";
import {Navbar, NavbarBrand} from "reactstrap";
import {RootState} from "../../redux/store";
import {useNavigate} from "react-router-dom";
import {logout} from "../../redux/slices/api.slice.login";
import {NavItem, NavLink} from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa";
import "./index.css"; // Importar o arquivo de estilos

export default function NavBarCustom() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const produto = useSelector((state: RootState) => state.carrinho);
  const {isAdmin} = useSelector((state: RootState) => state.apiLogin);

  function Logout() {
    dispatch(logout());
    navigate("/");
  }
  return (
    <div>
        <Navbar className={`custom-navbar ${isAdmin ? "admin-navbar" : "user-navbar"}`}>
            <NavbarBrand>Loja Online</NavbarBrand>

            <NavItem onClick={() => navigate("/home")}>
                <NavLink>Produtos</NavLink>
            </NavItem>

            {/* SE USUARIO ISADMIN MOSTRA OPÇÃO DO CARRINHO */}
            {!isAdmin && produto.produtos.length > 0 && (
                <NavItem onClick={() => navigate("/cart")}>
                    <NavLink>
                        Carrinho
                        <span className="cart-counter">{produto.produtos.length}</span>
                        <FaShoppingCart/>
                    </NavLink>
                </NavItem>
            )}
            <NavItem onClick={() => Logout()}>
                <NavLink>Logout</NavLink>
            </NavItem>
      </Navbar>
    </div>
  );
}
