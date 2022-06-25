import { Center } from "@chakra-ui/react";
import FadeIn from "components/Transitions/FadeIn";

export default function Icon({
	icon,
	transition,
}: {
	icon: any;
	transition?: boolean;
}) {
	const transitionOn = true || transition;
	return (
		<>
			{transitionOn ? (
				<>
					<Center>
						<FadeIn>
							<Center>{icon}</Center>
						</FadeIn>
					</Center>
				</>
			) : (
				<>
					<Center>{icon}</Center>
				</>
			)}
		</>
	);
}
