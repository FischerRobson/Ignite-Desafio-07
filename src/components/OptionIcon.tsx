import { Flex, Image, Text } from "@chakra-ui/react";

interface OptionIconProps {
  image: string;
  text: string;
}

export function OptionIcon({ image, text }: OptionIconProps) {
  return (
    <Flex flexDirection="column" align="center">
      <Image src={image} alt={image} boxSize={["45px", "65px", "85px"]} />
      <Text fontWeight="bold" color="gray.700" mt="2" fontSize="20">{text}</Text>
    </Flex>
  )
}