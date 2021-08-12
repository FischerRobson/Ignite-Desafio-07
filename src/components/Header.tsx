import { Flex, Icon, Image, Link as ChakraLink, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

interface HeaderProps {
  goBack?: boolean;
}

export function Header({ goBack = false }: HeaderProps) {

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
      {goBack && (
        <Link href='/'>
          <ChakraLink position='absolute' left={['16px', '40px']}>
            <Icon as={FiChevronLeft} fontSize={["1rem", "2rem"]} />
          </ChakraLink>
        </Link>
      )}
      <Image mx="auto" src="/logo.svg" alt="logo" boxSize={["140px", "180px"]} />
    </Flex>
  )
}