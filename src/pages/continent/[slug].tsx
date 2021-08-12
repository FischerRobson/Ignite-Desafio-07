import { Box, Center, Flex, Heading, HStack, Icon, SimpleGrid, Stack, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { CityBanner } from "../../components/CityBanner";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentInfo } from "../../components/ContinentInfo";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

type ContinentType = {
  slug: string;
  name: string;
  description: string;
  url: string;
  countries: number;
  languages: number;
  citiesInOneHoundred: number;
  cities: {
    name: string;
    country: string;
    countryCode: string;
    url: string;
  }[]
}

interface ContinentProps {
  continent: ContinentType;
}

export default function Continent({ continent }: ContinentProps) {

  return (
    <>
      <Head>
        <title>world trip | {continent.name}</title>
      </Head>
      <Box>
        <Header goBack={true} />

        <ContinentBanner image={continent.url} name={continent.name} />

        <Box
          maxW='1240'
          h='100%'
          mx='auto'
          px={['4', '10']}
        >
          <Flex
            direction={['column', 'column', 'row']}
            justify={'space-between'}
            align='center'
            mt={['6', '20']}
            mb={['8', '20']}
          >
            <Text maxW='600' fontSize={['sm', '2xl']} lineHeight={['5', '9']} textAlign='justify' fontWeight='400'>
              {continent.description}
            </Text>

            <HStack spacing={14} mt={['4', '0']} align="flex-start">
              <ContinentInfo label="países" value={continent.countries} />
              <ContinentInfo label="línguas" value={continent.languages} />
              <ContinentInfo label="cidades +100" value={continent.citiesInOneHoundred} />
            </HStack>
          </Flex>

          <Box>
            <Heading
              as='h1'
              fontWeight='500'
              fontSize={['2xl', '4xl']}
              color='gray.600'
            >
              Cidades +100
            </Heading>

            <SimpleGrid columns={[1, 4]} spacing={[5, 10]} my={['5', '45px']}>
              {continent.cities.map(city => {
                return (
                  <CityBanner image={city.url} name={city.name} country={city.country} countryCode={city.countryCode} />
                )
              })}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const response = await api.get(`/continents?slug=${slug}`);

  const continentInfos: ContinentType = response.data[0];

  return {
    props: {
      continent: continentInfos
    }
  }
}