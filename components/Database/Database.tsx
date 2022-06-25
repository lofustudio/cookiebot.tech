import {
	Box,
	Center,
	Heading,
	Stack,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import Vertical from "components/Timeline/Vertical";
import FinalSlideFade from "components/Transitions/FinalSlideFade";
import { FaDatabase } from "react-icons/fa";

export default function Database() {
	const { colorMode } = useColorMode();
	return (
		<>
			<Center>
				<Stack
					alignItems={"center"}
					textAlign={"center"}
					spacing={2}
					p={8}
				>
					<FinalSlideFade>
						<Box width={"30vw"}>
							<Heading fontSize={"6xl"}>CookieDB</Heading>
							<Text fontSize={"lg"}>
								With the power of a PostgreSQL database, all of
								Cookie's data is stored and locked away in a
								secure and safe environment allowing you focus
								more on your community. All requests are routed
								through Prisma, the Intuitive Database Client
								for TypeScript and Node.js to allow for less
								database hassle.
							</Text>
						</Box>
					</FinalSlideFade>
				</Stack>
			</Center>
			<Center>
				<Stack>
					<Vertical height={300} thickness={1} />{" "}
					<Box
						bg={colorMode === "dark" ? "#010101" : "#fafafa"}
						w={"128px"}
						h={"128px"}
						dropShadow={"xl"}
						shadow={"xl"}
						border={"1px"}
						borderColor={"gray.800"}
						p={8}
					>
						<FaDatabase size={"64px"} />
					</Box>
				</Stack>
			</Center>
		</>
	);
}
