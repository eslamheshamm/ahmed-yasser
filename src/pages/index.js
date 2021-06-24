import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import AppPreview from "../components/app-preview";
import soundfyLogo from "../images/soundfy.png";
import soundfyScreen from "../images/soundfy-screen.png";
import myTreeLogo from "../images/mytree.png";
import myTreeScreen from "../images/mytree-screen.png";
import astroLogo from "../images/astro.png";
import astroScreen from "../images/astro-screen.png";
const Apps = [
	{
		appName: "Soundfy",
		appLogo: `${soundfyLogo}`,
		appDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor diam morbi est justo, vel dictum. Proin penatibus vitae ornare vehicula. Dignissim sed risus sagittis augue cum aliquet lacus. Egestas sit sed at vestibulum maecenas.",
		appLink: "https://www.google.com/",
		appScreen: `${soundfyScreen}`,
	},
	{
		appName: "MyTree",
		appLogo: `${myTreeLogo}`,
		appDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor diam morbi est justo, vel dictum. Proin penatibus vitae ornare vehicula. Dignissim sed risus sagittis augue cum aliquet lacus. Egestas sit sed at vestibulum maecenas.",
		appLink: "https://www.google.com/",
		appScreen: `${myTreeScreen}`,
	},
	{
		appName: "Astro",
		appLogo: `${astroLogo}`,
		appDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor diam morbi est justo, vel dictum. Proin penatibus vitae ornare vehicula. Dignissim sed risus sagittis augue cum aliquet lacus. Egestas sit sed at vestibulum maecenas.",
		appLink: "https://www.google.com/",
		appScreen: `${astroScreen}`,
	},
];

const IndexPage = () => {
	return (
		<main className="relative pb-72">
			<section className=" min-h-screen">
				<div className="flex justify-center my-8">
					<figure>
						<StaticImage
							src="../images/hello.svg"
							alt="hello"
							placeholder="blurred"
							layout="fixed"
						/>
					</figure>
				</div>
				<div className="flex justify-center">
					<ul className="bg-[#212025] my-4 p-8 text-2xl md:px-10 md:py-[72px] flex justify-center  flex-col rounded-[44px] font-SFRegular  mx-auto tracking-wider">
						<li className=" md:text-[45px] tracking-wider text-white md:leading-[54px]">
							<span className="text-[#6E6D72] mr-3">1</span>
							<span className="text-[#70BCC4]">myName</span>{" "}
							<span className="text-[#D55E8C]">is</span> Ahmed,
						</li>
						<li className=" md:text-[45px] tracking-wider text-white flex md:leading-[54px] ">
							<span className="text-[#6E6D72] mr-3">2</span>
							<p>
								I’m an iOS developer <br />
								and illustrator from Egypt.
							</p>
						</li>
					</ul>
				</div>
				<div className="flex justify-center flex-col">
					<figure className="  mx-auto mt-12 animate-bounce">
						<StaticImage
							src="../images/mac.svg"
							alt="mac"
							placeholder="blurred"
							layout="fixed"
						/>
					</figure>
					<h2 className="flex justify-center ">
						<Link to="/about-me" className="flex items-center">
							<p className="font-SFRegular text-2xl md:text-[45px] mr-8  ">
								More about me
							</p>
							<StaticImage
								src="../images/right-arrow.svg"
								alt="more about me"
								placeholder="blurred"
								layout="constrained "
							/>
						</Link>
					</h2>
					<h2 className="flex justify-center flex-col items-center mt-6">
						<p className="font-SFRegular text-[45px] mb-2 ">
							Awesome apps I made
						</p>
						<StaticImage
							src="../images/down-arrow.svg"
							alt="more about me"
							placeholder="blurred"
							layout="fixed"
						/>
					</h2>
				</div>
			</section>
			{Apps.map((app, index) => {
				return <AppPreview {...app} key={index} />;
			})}
			<footer className="absolute bottom-0  w-full">
				<div className="flex flex-col text-center  justify-center mb-4 ">
					<p className="font-SFRegular text-[45px] ">Get in touch</p>
					<div className="flex justify-center my-6">
						<a
							href="http://google.com"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-16"
						>
							<StaticImage
								src="../images/twitter-logo.svg"
								alt="twitter"
								placeholder="blurred"
								layout="fixed"
							/>
						</a>
						<a
							href="http://google.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<StaticImage
								src="../images/mail-logo.svg"
								alt="twitter"
								placeholder="blurred"
								layout="fixed"
							/>
						</a>
					</div>
					<p className="font-SFRegular text-3xl flex items-center justify-center">
						Made with
						<span aria-label="img" className="text-[#EC5545]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="mx-2"
							>
								<path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
							</svg>{" "}
						</span>
						by <span className="font-SFBold ml-2">me</span>
					</p>
				</div>
			</footer>
		</main>
	);
};

export default IndexPage;
