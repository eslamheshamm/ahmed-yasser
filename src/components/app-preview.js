import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const AppPreview = (props) => {
	const { appName, appLogo, appDescription, appLink, appScreen } = props;
	return (
		<section className=" py-8 md:px-10 px-8 shadow-md w-10/12 mx-auto  grid gap-4 gap-y-12 md:grid-cols-2 my-24">
			<article>
				<figure className="flex flex-col justify-center items-center md:flex-row md:justify-start">
					<img src={appLogo} alt="app logo" className=" " />
					<figcaption className="ml-4 my-2 md:my-0 font-SFRegular text-4xl md:text-[45px]">
						{appName}
					</figcaption>
				</figure>
				<p className="font-SFLight text-2xl my-10">{appDescription}</p>
				<button>
					<a href={appLink} target="_blank" rel="noopener noreferrer">
						<StaticImage
							src="../images/appstore-button.svg"
							alt="soundfy app"
							placeholder="blurred"
							layout="constrained"
						/>
					</a>
				</button>
			</article>{" "}
			<article className="flex justify-center md:justify-end row-start-1 md:row-start-auto">
				<figure className="w-10/12 md:w-full md:h-full">
					<img src={appScreen} alt="soundfy app" className="w-full h-full " />
				</figure>
			</article>
		</section>
	);
};
export default AppPreview;
