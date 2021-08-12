import { Box, Center, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

interface CarouselItemProps {
  image: string;
  name: string;
  label: string;
  slug: string;
}

export function CarouselItem({ image, label, name, slug }: CarouselItemProps) {
  return (
    <Link href={`/continent/${slug}`}>
      <a>
        <Box
          bgImage={`url(${image})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          height={["150", "500"]}
        >
          <Box
            maxW="1240"
            h="100%"
            mx="auto"
            px={10}
            position="relative"
          >
            <Center w="100%" h="100%">
              <Stack>
                <Text
                  align="center"
                  as="h1"
                  fontWeight="600"
                  fontSize="3rem"
                  color="gray.50"
                >
                  {name}
                </Text>
                <Text
                  align="center"
                  fontSize="1.75rem"
                  color="gray.50"
                >
                  {label}
                </Text>
              </Stack>
            </Center>
          </Box>
        </Box>
      </a>
    </Link>
  )
}