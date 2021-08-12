import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Flag from "react-world-flags";

interface CityBannerProps {
  name: string;
  image: string;
  country: string;
  countryCode: string;
}

export function CityBanner({ image, name, country, countryCode }: CityBannerProps) {
  return (
    <Box borderRadius={8} border="1px solid #FFBA08">
      <Box
        borderTopRadius={8}
        bgImage={`url(${image})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height={["150", "230"]}
      />
      <Flex justify="space-between" >
        <Flex direction="column" p={["3", "4"]} >
          <Text fontWeight="bold" fontSize="20" color="gray.800" >{name}</Text>
          <Text color="gray.600">{country}</Text>
        </Flex>
        <Flex justify="flex-end" p={["3", "4"]} >
          <Flag
            code={countryCode}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover"
            }}
            svg
          />
        </Flex>
      </Flex>
    </Box>
  )
}