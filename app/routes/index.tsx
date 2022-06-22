import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import Container from "components/Container";
import { useEffect, useState } from "react";

export function Places() {
  const [update, setUpdate] = useState(false);
  const [type, setType] = useState(0);

  useEffect(() => {
    let newType = type;
    while (newType === type) {
      newType = Math.floor(Math.random() * 3);
    }
    setType(newType);
    setTimeout(() => {
      setUpdate(!update);
    }, 3000);
  }, [update])

  return (
    <>
      {type === 0 && (
        <Heading fontSize={"6xl"} bgGradient='linear(to-r, blue.500, purple.500, pink.500)' bgClip='text'>
          communities.
        </Heading>
      )}
      {type === 1 && (
        <Heading fontSize={"6xl"} bgGradient='linear(to-r, blue.500, purple.500, pink.500)' bgClip='text'>
          groups.
        </Heading>
      )}
      {type === 2 && (
        <Heading fontSize={"6xl"} bgGradient='linear(to-r, blue.500, purple.500, pink.500)' bgClip='text'>
          large servers.
        </Heading>
      )}
    </>
  )
}


export default function Index() {
  return (
    <>
      <Container>
        <Stack alignItems={"center"} mt={"20vh"}>
          <Heading fontSize={"6xl"} textAlign="center">
            A perfect Discord bot for
            <Places />
          </Heading>
        </Stack>

      </Container>
    </>
  );
}
