import {
	Box,
	Heading,
	SlideFade,
	Stack,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import Container from "components/UI/Container";
import { useEffect, useState } from "react";
import { CgShapeCircle } from "react-icons/cg";
import Icon from "components/Timeline/Icon";
import Vertical from "components/Timeline/Vertical";
import Modules from "components/Modules/Modules";
import Database from "components/Database/Database";

export function RandHeading() {
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
				<Stack
					alignItems={"center"}
					mt={"20vh"}
					spacing={8}
					px={["8vw", "8vw", "15vw", "15vw"]}
				>
					<Box>
						<Icon
							icon={
								<CgShapeCircle
									color={
										colorMode === "light"
											? "var(--chakra-colors-gray-500)"
											: "var(--chakra-colors-gray-800)"
									}
								/>
							}
						/>
						<Vertical thickness={1} height={40} />
					</Box>
					<SlideFade
						in
						transition={{
							enter: { duration: 0.4, delay: 0.5 },
						}}
					>
						<Heading fontSize={"7xl"} textAlign="center">
							A perfect all-in-one <br /> Discord bot for
							<RandHeading />
						</Heading>
					</SlideFade>
					<SlideFade
						in
						transition={{
							enter: { duration: 0.4, delay: 0.7 },
						}}
					>
						<Text fontWeight={"normal"}>
							Powered by Open Source, Enriched by the community,
							Licenced with MIT.
						</Text>
					</SlideFade>
					<Box>
						<Vertical thickness={1} height={300} />
						<Icon
							icon={
								<CgShapeCircle
									color={
										colorMode === "light"
											? "var(--chakra-colors-gray-500)"
											: "var(--chakra-colors-gray-800)"
									}
								/>
							}
						/>
					</Box>
				</Stack>
				<Modules />
				<Database />
			</Container>
		</>
	);
}
