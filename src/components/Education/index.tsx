import {
  HStack,
  Text,
  VStack,
  Box,
  Stack,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Divider,
} from "@chakra-ui/react";

const Education = () => {
  return (
    <>
      <HStack h="100vh" w="100%" color="cultured" position="relative">
        <Stack w="50%" alignItems="center">
          <VStack
            alignItems="start"
            justifyContent="space-around"
            p="10"
            fontSize="200px"
            fontWeight="bold"
            lineHeight="200px"
          >
            <Text h="fit-content">EDU</Text>
            <Text>CA</Text>
            <Text>TION</Text>
          </VStack>
        </Stack>
        <Divider
          orientation="vertical"
          h="50%"
          borderColor="gold"
          position="absolute"
          right="40.5%"
        />
        <TableContainer h="100%" display="flex">
          <Table variant="unstyled" h="100%">
            <Tbody
              h="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap="20"
            >
              <Tr>
                <Td>
                  <Text>2013 - 2017</Text>
                </Td>
                <Td>
                  <Box h="40px" w="40px" borderRadius="50%" bg="gold" />
                </Td>
                <Td w="100%">
                  <VStack alignItems="center">
                    <Text fontSize="24px">
                      Graduação em Licenciatura em Física (Pausado)
                    </Text>
                    <Text fontSize="18px" color="gold">
                      IFCE
                    </Text>
                    <Text fontSize="14px">
                      Curso superior para formação de professores do ensino
                      fundamental e médio
                    </Text>
                  </VStack>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text>2021 - 2022</Text>
                </Td>
                <Td>
                  <Box h="40px" w="40px" borderRadius="50%" bg="gold" />
                </Td>
                <Td w="100%">
                  <VStack>
                    <Text fontSize="24px">Full Stack Web Development</Text>
                    <Text fontSize="18px" color="gold">
                      Kenzie Academy
                    </Text>
                    <Text fontSize="14px">
                      Curso Intensivo de 2000 horas de desenvolvimento wep full
                      stack
                    </Text>
                  </VStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </HStack>
    </>
  );
};

export default Education;
