import { INTRO_VIDEO_ID } from "../../../utils/constants";
import { HomeContainer, IntroVideo } from "./styles";
import Admin from "../Admin/Admin";
import { useAppSelector } from "../../../redux/store/hooks";

const Home = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <HomeContainer>
      {user?.isAdmin && <Admin />}
      <IntroVideo src={`https://www.youtube.com/embed/${INTRO_VIDEO_ID}`} />
    </HomeContainer>
  );
};

export default Home;
