import { Flex, Stack, Text, Link as ExternalLink } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Container({ children }: any) {
    return (
        <>
            <Navbar />
            <Flex
                as="main"
                flexDirection={"column"}
                justifyContent={"center"}
                px={["8vw", "8vw", "15vw", "15vw"]}
                py={["4vh", "4vh", "8vh", "8vh"]}
            >
                {children}
            </Flex>
            <Stack alignItems="center" mb={"3vh"} spacing={0}>
                <Text textAlign="center" fontSize="sm">
                    Designed by{" "}
                    <ExternalLink
                        href="https://tygr.dev"
                        isExternal
                        fontWeight="semibold"
                    >
                        tygerxqt.
                    </ExternalLink>
                </Text>
                <Text textAlign="center" fontSize="sm">
                    Built with{" "}
                    <ExternalLink
                        href="https://remix.run/"
                        fontWeight="semibold"
                        isExternal
                    >
                        Remix
                    </ExternalLink>{" "}
                    &{" "}
                    <ExternalLink
                        href="https://chakra-ui.com/"
                        fontWeight="semibold"
                        isExternal
                    >
                        Chakra UI
                    </ExternalLink>
                    . Hosted on{" "}
                    <ExternalLink
                        href="https://vercel.com/"
                        fontWeight="semibold"
                        isExternal
                    >
                        Vercel
                    </ExternalLink>
                    .
                </Text>
            </Stack>
        </>
    )
}