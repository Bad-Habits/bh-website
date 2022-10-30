import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/hooks";
import Button from "../../elements/Button/Button";
import { AdminContainer, ManageButtons } from "./styles";

const products = ["events", "merch"];

const Admin = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!user?.isAdmin) navigate("../");
  }, [user, navigate]);

  const handleClick = (product: string) => {
    navigate(product);
  };

  return (
    <AdminContainer>
      <ManageButtons>
        {products.map((product) => {
          return (
            <Button
              key={product}
              buttonProps={{
                disabled: pathname.split("/").includes(product),
                onClick: () => handleClick(product),
              }}
            >
              {product}
            </Button>
          );
        })}
      </ManageButtons>

      <Outlet />
    </AdminContainer>
  );
};

export default Admin;
