import {useDispatch} from "react-redux";
import {Avatar, Button} from "@mui/material";
import {configApi} from "../../constans";
import {Produto} from "../../redux/slices/api.slice.produtos";
import QuantityCounter from "../../components/QuantityCounter";
import {removeProdutoNome} from "../../redux/slices/carrinho.slice";

interface CartItemProps {
    index: number;
    produtoNome: string;
    produtoDetails: Produto | undefined;
}

const CartItem: React.FC<CartItemProps> = ({index, produtoNome, produtoDetails}) => {
    const dispatch = useDispatch();

    const removerCarrinho = (index: number) => {
        dispatch(removeProdutoNome(index));
    };

    return (
        <tr key={produtoDetails?.id}>
            <th scope="row">{index + 1}</th>
            <td>
                <Avatar alt="miniatura do produto" src={configApi.imagemUrl}/>
            </td>
            <td>{produtoDetails?.nome}</td>
            <td>R$ {produtoDetails?.preco.toFixed(2)}</td>
            <td>
                <QuantityCounter quantidadeInicial={1} quantidadeMaxima={produtoDetails?.estoque || 0}/>
            </td>
            <td>
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: "rgba(255,0,0,0.6)",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "rgba(255,255,0,0.4)",
                            color: "black",
                        },
                    }}
                    onClick={() => {
                        removerCarrinho(index);
                    }}
                >
                    Remover do Carrinho
                </Button>
            </td>
        </tr>
    );
};

export default CartItem;
