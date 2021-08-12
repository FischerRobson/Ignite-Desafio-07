import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

export function Header() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="100"
      mx="auto"
      align="center"
      bg="whiteAlpha.100"
    >
      <Image mx="auto" src="/logo.svg" alt="logo" boxSize={["140px", "180px"]} />
    </Flex>
  )
}