import {
	Stack,
	SimpleGrid,
	Heading,
	Switch,
	useColorMode,
	Box,
	Center,
	Text,
} from "@chakra-ui/react";
import Icon from "components/Timeline/Icon";
import Vertical from "components/Timeline/Vertical";
import FadeIn from "components/Transitions/FadeIn";
import FinalSlideFade from "components/Transitions/FinalSlideFade";
import { CgShapeCircle } from "react-icons/cg";

export default function Modules() {
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
							<Heading fontSize={"6xl"}>Modules</Heading>
							<Text fontSize={"lg"}>
								Cookie's commands are split into their own
								modules. Modules are fully customisable by
								allowing you to set per role and user
								permissions so they can intergrate with your
								existing server and permission system with ease.
								Modules can also be toggled on and off if you
								want to disable them.
							</Text>
						</Box>
					</FinalSlideFade>
				</Stack>
			</Center>
			<Stack alignItems={"center"} spacing={0}>
				<SimpleGrid columns={4} spacing={0}>
					<FadeIn>
						<Box
							w={"10vw"}
							h={"20vh"}
							mt={"20vh"}
							ml={"10vw"}
							borderLeft={"2px"}
							borderTop={"2px"}
							color={
								colorMode === "light" ? "gray.500" : "gray.800"
							}
							borderRadius={"1rem 0 0 0"}
						/>
					</FadeIn>
					<FadeIn>
						<Box
							w={"20vw"}
							h={"20vh"}
							mt={"2px"}
							borderRight={"1px"}
							borderBottom={"2px"}
							color={
								colorMode === "light" ? "gray.500" : "gray.800"
							}
							borderRadius={"0 0 1rem 0"}
						/>
					</FadeIn>
					<FadeIn>
						<Box
							w={"20vw"}
							h={"20vh"}
							mt={"2px"}
							color={
								colorMode === "light" ? "gray.500" : "gray.800"
							}
							borderLeft={"1px"}
							borderBottom={"2px"}
							borderRadius={"0 0 0 1rem"}
						/>
					</FadeIn>
					<FadeIn>
						<Box
							w={"10vw"}
							h={"20vh"}
							mt={"20vh"}
							mr={"10vw"}
							color={
								colorMode === "light" ? "gray.500" : "gray.800"
							}
							borderRight={"2px"}
							borderTop={"2px"}
							borderRadius={"0 1rem 0 0"}
						/>
					</FadeIn>
				</SimpleGrid>
				<SimpleGrid columns={4} spacing={0}>
					<Box
						w={"20vw"}
						h={"20vh"}
						border={"1px"}
						borderColor={"grey.800"}
						shadow={"xl"}
						dropShadow={"xl"}
						rounded={"lg"}
					>
						<Stack
							alignItems="center"
							justifyItems={"center"}
							textAlign={"center"}
							spacing={4}
							p={4}
						>
							<Heading fontSize={["xl", "2xl", "3xl", "4xl"]}>
								Moderation
							</Heading>
							<Text>
								Ban, mute, kick, warn. Y'know, the usual.
							</Text>
							<Switch />
						</Stack>
					</Box>
					<Box />
					<Box />
					<Box
						w={"20vw"}
						h={"20vh"}
						border={"1px"}
						borderColor={"grey.800"}
						shadow={"xl"}
						dropShadow={"xl"}
						rounded={"lg"}
					>
						<Stack
							alignItems="center"
							justifyItems={"center"}
							textAlign={"center"}
							spacing={4}
							p={4}
						>
							<Heading fontSize={["xl", "2xl", "3xl", "4xl"]}>
								Music
							</Heading>
							<Text>
								Play music, 24/7 radios, Podcasts and more.
							</Text>
							<Switch />
						</Stack>
					</Box>
				</SimpleGrid>
				<SimpleGrid columns={4} spacing={0}>
					<Vertical
						thickness={1}
						height={80}
						props={{ mr: "15vw" }}
					/>
					<Box />
					<Box />
					<Vertical
						thickness={1}
						height={80}
						props={{ ml: "15vw" }}
					/>
				</SimpleGrid>
				<SimpleGrid columns={4} spacing={0}>
					<Box
						w={"20vw"}
						h={"20vh"}
						border={"1px"}
						borderColor={"grey.800"}
						shadow={"xl"}
						dropShadow={"xl"}
						rounded={"lg"}
					>
						<Stack
							alignItems="center"
							justifyItems={"center"}
							textAlign={"center"}
							spacing={4}
							p={4}
						>
							<Heading fontSize={["xl", "2xl", "3xl", "4xl"]}>
								Utilities
							</Heading>
							<Text>
								Useful tools that don't fit in anywhere else.
							</Text>
							<Switch />
						</Stack>
					</Box>
					<Box />
					<div />
					<Box
						w={"20vw"}
						h={"20vh"}
						border={"1px"}
						borderColor={"grey.800"}
						shadow={"xl"}
						dropShadow={"xl"}
						rounded={"lg"}
					>
						<Stack
							alignItems="center"
							justifyItems={"center"}
							textAlign={"center"}
							spacing={4}
							p={4}
						>
							<Heading fontSize={["xl", "2xl", "3xl", "4xl"]}>
								Economy
							</Heading>
							<Text>
								Create an economy, a store and a lot more!
							</Text>
							<Switch />
						</Stack>
					</Box>
				</SimpleGrid>
				<SimpleGrid columns={4} spacing={0}>
					<Vertical
						thickness={1}
						height={80}
						props={{ mr: "15vw" }}
					/>
					<Box />
					<Box />
					<Vertical
						thickness={1}
						height={80}
						props={{ ml: "15vw" }}
					/>
				</SimpleGrid>
				<SimpleGrid columns={4} spacing={0}>
					<Box
						w={"20vw"}
						h={"20vh"}
						border={"1px"}
						borderColor={"grey.800"}
						shadow={"xl"}
						dropShadow={"xl"}
						rounded={"lg"}
					>
						<Stack
							alignItems="center"
							justifyItems={"center"}
							textAlign={"center"}
							spacing={4}
							p={4}
						>
							<Heading fontSize={["xl", "2xl", "3xl", "4xl"]}>
								Management
							</Heading>
							<Text>Easily manage and edit your server.</Text>
							<Switch />
						</Stack>
					</Box>
					<Box />
					<Box />
					<Box
						w={"20vw"}
						h={"20vh"}
						border={"1px"}
						borderColor={"grey.800"}
						shadow={"xl"}
						dropShadow={"xl"}
						rounded={"lg"}
					>
						<Stack
							alignItems="center"
							justifyItems={"center"}
							textAlign={"center"}
							spacing={4}
							p={4}
						>
							<Heading fontSize={["xl", "2xl", "3xl", "4xl"]}>
								Fun
							</Heading>
							<Text>
								Commands that aim to make your server lively.
							</Text>
							<Switch />
						</Stack>
					</Box>
				</SimpleGrid>
				<SimpleGrid columns={4} spacing={0}>
					<Box
						w={"10vw"}
						h={"20vh"}
						mt={"2px"}
						ml={"10vw"}
						borderLeft={"2px"}
						borderBottom={"2px"}
						color={colorMode === "light" ? "gray.500" : "gray.800"}
						borderRadius={"0 0 0 1rem"}
					/>
					<Box
						w={"20vw"}
						h={"30vh"}
						mt={"20vh"}
						borderRight={"1px"}
						borderTop={"2px"}
						color={colorMode === "light" ? "gray.500" : "gray.800"}
					/>
					<Box
						w={"20vw"}
						h={"30vh"}
						mt={"20vh"}
						color={colorMode === "light" ? "gray.500" : "gray.800"}
						borderLeft={"1px"}
						borderTop={"2px"}
					/>
					<Box
						w={"10vw"}
						h={"20vh"}
						mt={"2px"}
						mr={"10vw"}
						color={colorMode === "light" ? "gray.500" : "gray.800"}
						borderRight={"2px"}
						borderBottom={"2px"}
						borderRadius={"0 0 1rem 0"}
					/>
				</SimpleGrid>
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
			</Stack>
		</>
	);
}
