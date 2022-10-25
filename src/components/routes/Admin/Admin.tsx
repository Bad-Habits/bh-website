import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/hooks";
import Button from "../../elements/Button/Button";
import ManageProduct from "./ManageProduct";
import { AdminContainer } from "./styles";

const Admin = () => {
  const [curProduct, setCurProduct] = useState("");
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.isAdmin) navigate("../");
  }, [user, navigate]);

  const handleManageTickets = () => {
    setCurProduct("tickets");
  };

  const handleManageMerch = () => {
    setCurProduct("merch");
  };

  return (
    <AdminContainer>
      {curProduct === "" ? (
        <>
          <Button buttonProps={{ onClick: handleManageTickets }}>
            Tickets
          </Button>
          <Button buttonProps={{ onClick: handleManageMerch }}>Merch</Button>
        </>
      ) : (
        <ManageProduct curProduct={curProduct} />
      )}
    </AdminContainer>
  );
};

export default Admin;
