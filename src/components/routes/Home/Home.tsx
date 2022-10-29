import { HomeContainer, IntroVideo } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/hooks";
import Button from "../../elements/Button/Button";
import { INTRO_VIDEO_ID } from "../../../utils/constants";

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
      {/* <IntroVideo
        src={`https://www.youtube.com/embed/${INTRO_VIDEO_ID}`}
        onLoad={() =>
          console.log(
            "hide the video or replace it with something until it has loaded?"
          )
        }
      /> */}
    </HomeContainer>
  );
};

export default Home;
