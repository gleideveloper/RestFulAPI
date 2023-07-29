import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CarrinhoState {
    produtos: string[];
}

const initialState: CarrinhoState = {
    produtos: [],
};

const carrinhoSlice = createSlice({
    name: "carrinhoSlice",
    initialState,
    reducers: {
        addProdutoNome: (state, action: PayloadAction<string>) => {
            state.produtos.push(action.payload);
        },
        removeProdutoNome: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            if (index >= 0 && index < state.produtos.length) {
                state.produtos.splice(index, 1);
            }
        },
    },
});

export const { addProdutoNome, removeProdutoNome } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
