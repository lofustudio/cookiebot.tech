import { Fade } from "@chakra-ui/react";

export default function FadeIn({ children }: any) {
	return (
		<>
			<Fade in transition={{ enter: { duration: 0.4, delay: 1 } }}>
				{children}
			</Fade>
		</>
	);
}
