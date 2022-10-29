import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/hooks";
import Button from "../../elements/Button/Button";
import ManageProduct from "./ManageProduct";
import { AdminContainer, ManageButtons } from "./styles";

const products = ["events", "merch"];

const Admin = () => {
  const [curProduct, setCurProduct] = useState("events");
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.isAdmin) navigate("../");
  }, [user, navigate]);

  const handleClick = (product: string) => {
    setCurProduct(product);
  };

  return (
    <AdminContainer>
      <ManageButtons>
        {products.map((product) => {
          return (
            <Button
              key={product}
              buttonProps={{
                disabled: product === curProduct,
                onClick: () => handleClick(product),
              }}
            >
              {product}
            </Button>
          );
        })}
      </ManageButtons>

      <ManageProduct curProduct={curProduct} />
    </AdminContainer>
  );
};

export default Admin;
