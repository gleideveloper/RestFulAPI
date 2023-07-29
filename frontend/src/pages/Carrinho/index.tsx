import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import { ListGroup, ListGroupItem } from "reactstrap";
import NavBarCustom from "../../components/Navbar";
import CartItem from "../../components/CartItem";
import { useEffect } from "react";
import {fetchProdutos, Produto} from "../../redux/slices/api.slice.produtos";

const Carrinho: React.FC = () => {
    const dispatchProdutos = useDispatch<AppDispatch>();
    const { isAdmin } = useSelector((state: RootState) => state.apiLogin);
    const produtosCarrinho = useSelector((state: RootState) => state.carrinho);
    const { produtos } = useSelector((state: RootState) => state.apiProduto);

    useEffect(() => {
        dispatchProdutos(fetchProdutos());
    }, []);

    return (
        <div className="containerCart">
            <div style={{ width: "100%" }}>
                <NavBarCustom />
            </div>
            <h2>CARRINHO</h2>

            {isAdmin ? (
                <div style={{ overflow: "scroll", height: "500px" }}>
                    <ListGroup flush>
                        {produtosCarrinho.produtos.map((produto, index) => {
                            return <ListGroupItem key={index}>{produto}</ListGroupItem>;
                        })}
                    </ListGroup>
                </div>
            ) : (
                <table className="table table-responsive table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Produto Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Remove</th>
                        {/* {isAdmin ? null : <th scope="col">Inserir Carrinho</th>} */}
                    </tr>
                    </thead>
                    <tbody>
                    {produtosCarrinho.produtos.map((produtoNome, index) => {
                        const productDetails: Produto | undefined = produtos?.find(
                            (produtoDetails) => produtoDetails.nome === produtoNome
                        );
                        return (
                            <CartItem
                                key={index}
                                index={index}
                                produtoNome={produtoNome}
                                produtoDetails={productDetails}
                            />
                        );
                    })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Carrinho;
