import { SlideFade } from "@chakra-ui/react";

export default function FinalSlideFade({ children }: any) {
	return (
		<>
			<SlideFade
				in
				transition={{
					enter: { duration: 0.4, delay: 0.7 },
				}}
			>
				{children}
			</SlideFade>
		</>
	);
}
