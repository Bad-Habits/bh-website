// import { CartContext } from "../../contexts/cart.context";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./styles";

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => null; /*setIsCartOpen(!isCartOpen);*/

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{0}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
