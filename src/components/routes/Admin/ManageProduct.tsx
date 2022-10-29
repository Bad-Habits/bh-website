import { FC, useState } from "react";
import Button from "../../elements/Button/Button";
import AddForm from "./AddForm";
import EditProduct from "./EditProduct";
import { ManageButtons, ManageContainer } from "./styles";

type ManageProductType = {
  curProduct: string;
};

const ManageProduct: FC<ManageProductType> = ({ curProduct }) => {
  const [curForm, setCurForm] = useState("add");
  const adminOptions = ["add", "edit"];

  const handleClick = (newForm: string) => {
    setCurForm(newForm);
  };

  return (
    <ManageContainer>
      <ManageButtons>
        {adminOptions.map((option) => (
          <Button
            key={option}
            buttonProps={{
              disabled: curForm === option,
              onClick: () => handleClick(option),
            }}
          >
            {option}
          </Button>
        ))}
      </ManageButtons>
      {curForm === "add" && <AddForm curProduct={curProduct} />}
      {curForm === "edit" && <EditProduct curProduct={curProduct} />}
    </ManageContainer>
  );
};

export default ManageProduct;
