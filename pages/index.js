import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  IconButton,
  Image,
} from "@chakra-ui/react";
import Container from "../components/Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container>
      <Head>
        <title>Home - Kawan Duarte</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        align="center"
        justify="center"
        m="0 auto 4rem auto"
        maxW="800px"
        px={10}
        py={5}
        flexDir={["column-reverse", "row"]}
        border='1px solid gray'
        borderRadius='10px'
      >
        <Flex
          flexDir="column"
          justify="space-around"
          align={["center", "flex-start"]}
          maxW="700px"
        >
          <Heading fontSize="4xl" mt="30px" mb={2}>
            Kawan Duarte
          </Heading>

          <Text textAlign={["center", "left"]} mt="10px" color={colorSecondary[colorMode]}>
            Full Stack Developer, Information Security Enthusiast and Writer.
          </Text>
          
          <Flex mt="20px">
            <Stack direction="row">
              <IconButton
                as="a"
                cursor="pointer"
                href="https://github.com/root-m3b"
                target="_blank"
                aria-label="Github"
                icon={<FaGithub />}
                fontSize="2xl"
                _hover={{ transform: "translateY(-3px)" }}
              />
              <IconButton
                as="a"
                cursor="pointer"
                href="https://www.linkedin.com/in/kawan-duarte/"
                target="_blank"
                aria-label="Linkedin"
                icon={<FaLinkedin />}
                fontSize="2xl"
                _hover={{ transform: "translateY(-3px)" }}
              />
            </Stack>
          </Flex>
        </Flex>

        <Flex>
          <Image
            src="https://avatars.githubusercontent.com/u/57375910?s=400&u=34b4c1b069f55013316cacb2390e010e97998718&v=4"
            alt="Kawan Duarte"
            boxSize="225px"
            borderRadius="100%"
            border="1px solid gray"
            mx="2rem"
          />
        </Flex>
      </Stack>

      <Text textAlign={["center"]} p={10} mt='auto' color={colorSecondary[colorMode]}>
        © 2022 Kawan Duarte
      </Text>
    </Container>
  );
}
