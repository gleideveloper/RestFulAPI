// ProdutosList.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Button } from "reactstrap";
import { RootState } from "../../redux/store";
import ProductCard from "../ProductItem";
import { Grid } from "@mui/material";
import "./index.css";
import {addProdutoNome} from "../../redux/slices/carrinho.slice"; // Replace with the actual path to your CSS file

export default function ProdutosList() {
    const dispatch = useDispatch();

    const { produtos } = useSelector((state: RootState) => state.apiProduto);
    const { isAdmin } = useSelector((state: RootState) => state.apiLogin);

    function inserirCarrinho(name: string) {
        dispatch(addProdutoNome(name));
    }

    console.log("[ProdutosList]-produtos.length -> ", produtos.length);

    const TableAdmin: React.FC = () => {
        return (
            <table className="table table-responsive table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Estoque</th>
                    {isAdmin ? null : <th scope="col">Inserir Carrinho</th>}
                </tr>
                </thead>
                <tbody>
                {produtos.map((produto, index) => {
                    if (!isAdmin) {
                        // When the user is not an admin, display the products in grid format
                        return <ProductCard key={index} product={produto}></ProductCard>;
                    }
                    return (
                        <tr key={produto.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{produto.nome}</td>
                            <td>R$ {produto.preco}</td>
                            <td>{produto.estoque}</td>
                            <td>
                                {isAdmin ? null : (
                                    <Button
                                        onClick={() => {
                                            inserirCarrinho(produto.nome);
                                        }}
                                    >
                                        Inserir no Carrinho
                                    </Button>
                                )}
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    };

    return (
        <div className="table-container">
            {isAdmin ? (
                <TableAdmin />
            ) : (
                <Grid container justifyContent="center" gap={4} className="product-grid-container">
                    {produtos.map((produto, index) => (
                        <Grid item xs={2.5} key={index} className="product-grid-item">
                            <ProductCard product={produto} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
}
