import {
	Box,
	Center,
	Fade,
	Flex,
	Heading,
	List,
	ListItem,
	SimpleGrid,
	Slide,
	SlideFade,
	Stack,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import Container from "components/Container";
import { useEffect, useState } from "react";
import { CgShapeCircle } from "react-icons/cg";

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [update]);

	return (
		<>
			{type === 0 && (
				<Heading
					fontSize={"7xl"}
					bgGradient="linear(to-r, blue.500, purple.500, pink.500)"
					bgClip="text"
				>
					communities.
				</Heading>
			)}
			{type === 1 && (
				<Heading
					fontSize={"7xl"}
					bgGradient="linear(to-r, blue.500, purple.500, pink.500)"
					bgClip="text"
				>
					groups.
				</Heading>
			)}
			{type === 2 && (
				<Heading
					fontSize={"7xl"}
					bgGradient="linear(to-r, blue.500, purple.500, pink.500)"
					bgClip="text"
				>
					large servers.
				</Heading>
			)}
		</>
	);
}

export default function Index() {
	const { colorMode } = useColorMode();

	return (
		<>
			<Container>
				<Stack spacing={0}>
					<Stack
						alignItems={"center"}
						mt={"20vh"}
						spacing={8}
						px={["8vw", "8vw", "15vw", "15vw"]}
					>
						<Box>
							<Center>
								<CgShapeCircle />
							</Center>
							<Center>
								<Box
									border={"1px"}
									height={"40px"}
									rounded={"xl"}
								/>
							</Center>
						</Box>
						<SlideFade
							in
							transition={{
								enter: { duration: 0.4, delay: 0.5 },
							}}
						>
							<Heading fontSize={"7xl"} textAlign="center">
								A perfect all-in-one Discord bot for
								<Places />
							</Heading>
						</SlideFade>
						<SlideFade
							in
							transition={{
								enter: { duration: 0.4, delay: 0.7 },
							}}
						>
							<Text fontWeight={"normal"}>
								Powered by Open Source, Enriched by the
								community, Licenced with MIT.
							</Text>
						</SlideFade>
						<Flex alignItems={"center"} flexDirection={"column"}>
							<Center>
								<Box border={"1px"} height={"300px"} />
							</Center>
							<Center>
								<CgShapeCircle />
							</Center>
						</Flex>
					</Stack>
					<Center>
						<Stack
							alignItems={"center"}
							textAlign={"center"}
							spacing={2}
							p={8}
						>
							<Heading fontSize={"6xl"}>Modules</Heading>
							<Text fontSize={"lg"}>
								Cookie's commands are split into their own
								modules. <br />
								Modules are fully customisable so they can
								intergrate <br /> with your existing server and
								permission system with ease.
							</Text>
						</Stack>
					</Center>
					<Flex alignItems={"center"} flexDirection={"column"}>
						<Center>
							<Box border={"1px"} height={"80px"} />
						</Center>
					</Flex>
				</Stack>
			</Container>
		</>
	);
}
