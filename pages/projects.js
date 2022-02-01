import React from "react";
import Head from "next/head";
import { Flex, Heading } from "@chakra-ui/react";
import Container from "../components/Container";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Kawan Duarte</title>
      </Head>
      <Container>
        <Flex
          flexDir="column"
          align="center"
          justify="center"
          textAlign="center"
          maxW="700px"
          px={4}
        >
          <Heading as="h1" size="2xl">
            Coming Soon...
          </Heading>
        </Flex>
      </Container>
    </>
  );
}
