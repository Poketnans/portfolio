import { HStack, Center, Link } from "@chakra-ui/react";

const Menu = () => {
  return (
    <HStack mt="100" color="gold" as="nav" gridGap="4" fontSize="20">
      <Center>
        <Link href="/">Home</Link>
      </Center>
      <Center>
        <Link href="/about-me">About Me</Link>
      </Center>
      <Center>
        <Link href="/projects">Projects</Link>
      </Center>
      <Center>
        <Link href="/contact">Contact</Link>
      </Center>
    </HStack>
  );
};

export default Menu;
