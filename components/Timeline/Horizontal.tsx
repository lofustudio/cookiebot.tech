import { Box, type BoxProps, Center, useColorMode } from "@chakra-ui/react";
import FadeIn from "../Transitions/FadeIn";

export default function Horizontal({
	width,
	color,
	thickness,
	transition,
	props,
}: {
	width: string | number;
	thickness: string | number;
	color?: string;
	transition?: boolean;
	props?: BoxProps;
}) {
	const transitionOn = true || transition;
	const { colorMode } = useColorMode();
	return (
		<>
			{transitionOn ? (
				<>
					<Center>
						<FadeIn>
							<Box
								border={
									typeof thickness === "number"
										? `${thickness}px`
										: thickness
								}
								width={
									typeof width === "number"
										? `${width}px`
										: width
								}
								color={
									color || colorMode === "light"
										? "gray.500"
										: "gray.800"
								}
								{...props}
							/>
						</FadeIn>
					</Center>
				</>
			) : (
				<>
					<Center>
						<Box
							border={
								typeof thickness === "number"
									? `${thickness}px`
									: thickness
							}
							height={
								typeof width === "number" ? `${width}px` : width
							}
							color={
								color || colorMode === "light"
									? "gray.500"
									: "gray.800"
							}
						/>
					</Center>
				</>
			)}
		</>
	);
}
