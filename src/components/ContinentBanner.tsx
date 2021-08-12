import { Box, Center, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

interface ContinentBannerProps {
  image: string;
  name: string;
}

export function ContinentBanner({ image, name }: ContinentBannerProps) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      bgImage={`url(${image})`}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      height={['150', '500']}
    >
      <Box
        maxW='1240'
        h='100%'
        mx='auto'
        px={10}
        position='relative'
      >
        {isWideVersion ? (
          <Heading
            as='h1'
            fontWeight='600'
            fontSize='5xl'
            color='gray.50'
            position='absolute'
            bottom='60px'
            textTransform='capitalize'
          >
            {name}
          </Heading>
        ) : (
          <Center w='100%' h='100%'>
            <Text
              as='h1'
              fontWeight='600'
              fontSize='1.75rem'
              color='gray.50'
            >
              {name}
            </Text>
          </Center>
        )}
      </Box>
    </Box>
  )
}