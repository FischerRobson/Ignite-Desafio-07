import { Image, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  });

  if (isWideVersion) {
    return (
      <Image src="/wideBanner.svg" alt="banner" />
    )
  }

  return (
    <Image w="100%" src="/mobileBanner.svg" alt="banner" />
  )


}