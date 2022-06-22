import { Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Container({ children }: any) {
    return (
        <>
            <Navbar />
            <Flex
                as="main"
                flexDirection={"column"}
                justifyContent={"center"}
                px={["16vw", "16vw", "30vw", "30vw"]}
                py={["8vh", "8vh", "16vh", "16vh"]}
            >
                {children}
            </Flex>
        </>
    )
}