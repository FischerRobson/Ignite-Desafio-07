import { Stack, Text } from "@chakra-ui/react";

interface ContinentInfoProps {
  value: number;
  label: string;
}

export function ContinentInfo({ label, value }: ContinentInfoProps) {
  return (
    <Stack align="center">
      <Text
        fontWeight="bold"
        fontSize={["40", "70"]}
        color="#FFBA08"
      >
        {value}
      </Text>
      <Text
        fontWeight="bold"
        fontSize={["14", "20"]}
        color="gray.600"
      >
        {label}
      </Text>
    </Stack>
  )
}