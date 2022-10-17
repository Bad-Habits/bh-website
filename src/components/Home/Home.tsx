import { INTRO_VIDEO_ID } from "../../utils/constants";
import { HomeContainer, IntroVideo } from "./Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      {
        <IntroVideo
          title="intro-video"
          src={`https://www.youtube.com/embed/${INTRO_VIDEO_ID}`}
        />
      }
    </HomeContainer>
  );
};

export default Home;
