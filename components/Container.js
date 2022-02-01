import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import DarkModeSwitch from "./DarkModeSwitch";

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
    hoverlight: "gray.500",
    hoverdark: "gray.400"
  };

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s line-height 0.5s;
  `;

  const color = {
    light: "black",
    dark: "white",
  };
  return (
    <>
      <StickNav
        flexDir="row"
        justify="space-between"
        align="center"
        maxW="800px"
        minW="356px"
        w="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[3, 3, 4]}
              _hover={{ backgroundColor: navHoverBg[`hover${colorMode}`] }}
            >
              Home
            </Button>
          </NextLink>

          <NextLink href="/projects" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[3, 3, 4]}
              _hover={{ backgroundColor: navHoverBg[`hover${colorMode}`] }}
            >
              Projects
            </Button>
          </NextLink>

          <NextLink href="/blog" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[3, 3, 4]}
              _hover={{ backgroundColor: navHoverBg[`hover${colorMode}`] }}
            >
              Blog
            </Button>
          </NextLink>
        </Box>
        <DarkModeSwitch />
      </StickNav>
      <Flex
        as="main"
        justify="center"
        flexDir="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;
