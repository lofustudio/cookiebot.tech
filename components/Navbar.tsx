import { Button, Center, Flex, Heading, Image, Stack, useColorMode } from "@chakra-ui/react";
import { FaCookieBite } from "react-icons/fa"
import { BsMoonFill, BsFillSunFill } from "react-icons/bs"
import { Link } from "@remix-run/react";
export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Flex
                zIndex={99}
                position="fixed"
                w="100%"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                px={"20vw"}
                py={"2vh"}
                backdropFilter="blur(5px)"
            >
                <FaCookieBite />
                <Stack isInline spacing={"3vw"}>
                    <Link to={'/'}>
                        <Button fontWeight={"semibold"} variant="ghost" p={4}>
                            Home
                        </Button>
                    </Link>
                    <Link to={'/team'}>
                        <Button fontWeight={"semibold"} variant="ghost" p={4}>
                            Team
                        </Button>
                    </Link>
                    <Button fontWeight={"semibold"} variant="ghost" p={4}>
                        Blog
                    </Button>
                    <Button
                        variant="ghost"
                        p="4"
                        ml="3vw"
                        fontSize={"16px"}
                        onClick={toggleColorMode}
                    >
                        {colorMode === "dark" ? <BsMoonFill /> : <BsFillSunFill />}
                    </Button>
                </Stack>
            </Flex>
        </>
    )
}