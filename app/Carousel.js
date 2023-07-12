import Image from "next/image";
import NextIcon from "../public/Nextjs-logo.svg";
import ReactLogo from "../public/React-icon.svg";
import TailwindLogo from "../public/Tailwind_CSS_Logo.svg";

const Carousel = () => {
	return (
		<div>
			<div className="motion-safe:animate-fadeInLeft">
				<div className="flex flex-row justify-evenly items-center py-16 bg-teal-600 motion-safe:animate-carouselLeft w-[300vw]">
					<div className="w-screen flex flex-row justify-center items-center">
						<Image
							src={NextIcon}
							width={350}
							height={350}
							alt="Next JS"
							title="Next JS"
						/>
					</div>
					<div className="w-screen flex flex-row justify-center items-center">
						<Image
							src={ReactLogo}
							width={350}
							height={350}
							alt="React JS"
							title="React JS"
						/>
					</div>
					<div className="w-screen flex flex-row justify-center items-center">
						<Image
							src={TailwindLogo}
							width={350}
							height={350}
							alt="Tailwind CSS"
							title="Tailwind CSS"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
