import { VStack } from "@chakra-ui/react";
import Education from "../../components/Education";
import Intro from "../../components/Intro";
import Menu from "../../components/Menu";

const Home = () => {
  return (
    <VStack>
      <VStack minH="100vh">
        <Menu />
        <Intro />
      </VStack>
      <Education />
    </VStack>
  );
};

export default Home;
