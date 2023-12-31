import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import FormularioProduto from "./components/FormProduto";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { fetchProdutos } from "./redux/slices/api.slice.produtos";
import ProdutosList from "./components/ProductList";
import "./index.css";
import NavBarCustom from "./components/Navbar";

function App() {
  const { isAdmin } = useSelector((state: RootState) => state.apiLogin);

  const { loading } = useSelector((state: RootState) => state.apiProduto);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProdutos());
  }, [dispatch]);

  return (
    <div className="container" style={{ justifyContent: "start" }}>
      <div style={{ width: "100%" }}>
        <NavBarCustom />
      </div>

      {loading ? (
        "Loading..."
      ) : (
        <div>
          {isAdmin ? (
            <div style={{ height: "100%" }}>
              <FormularioProduto />
            </div>
          ) : null}

          <div style={{ overflow: "scroll", height: "630px" }}>
            <ProdutosList />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
