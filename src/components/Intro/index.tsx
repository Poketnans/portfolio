import { HStack, Image, Text } from "@chakra-ui/react";
import avatar from "../../assets/images/avatar.png";

const Intro = () => {
  return (
    <HStack flexGrow="1" gap="20">
      <Image src={avatar} />
      <Text color="cultured" w="671px" textAlign="center" fontSize="16">
        Etnan é meu nome. Um nome vindo do hebraico que significa dádiva!
        <br />
        Sempre gostei de jogos e tecnologia. Encontrei na programação um meio de
        conhecer melhor esse incrível mundo!
      </Text>
    </HStack>
  );
};

export default Intro;
