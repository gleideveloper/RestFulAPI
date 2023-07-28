import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import { addProdutoNome } from '../../redux/slices/carrinho.slice';
import { Produto } from '../../redux/slices/api.slice.produtos';
import { configApi } from '../../constans';
import "./index.css";

interface ProductCardProps {
    children?: React.ReactNode;
    product?: Produto;
}

const ProductCard: React.FC<ProductCardProps> = ({ children, product, ...props }) => {
    const dispatch = useDispatch();

    function inserirCarrinho(name: string) {
        dispatch(addProdutoNome(name));
    }

    return (
        <Card {...props} sx={{ maxWidth: 345 }}>
            <CardMedia
                className="card-media"
                image={configApi.photoUrl}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="product-name">
                    {product?.nome}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="product-price">
                    <b>Preco:</b> R$ {product?.preco}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="product-stock">
                    <b>Estoque:</b> {product?.estoque}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => {
                        inserirCarrinho(product!.nome);
                    }}
                    className="add-to-cart-button"
                >
                    Inserir no Carrinho
                </Button>
                {/* <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
    )
}

export default ProductCard;
