import { INTRO_VIDEO_ID } from "../../../utils/constants";
import { HomeContainer, IntroVideo } from "./styles";
import { useAppSelector } from "../../../redux/store/hooks";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate("admin");
  };

  return (
    <HomeContainer>
      {user?.isAdmin && (
        <Button buttonProps={{ onClick: handleAdminClick }}>Admin</Button>
      )}
      <IntroVideo src={`https://www.youtube.com/embed/${INTRO_VIDEO_ID}`} />
    </HomeContainer>
  );
};

export default Home;
