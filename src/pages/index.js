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
							layout="constrained"
						/>
					</figure>
				</div>
				<div className="flex justify-center">
					<ul className="bg-[#212025] my-4 p-6 sm:p-8 text-2xl md:px-10 md:py-[72px] flex justify-center  flex-col rounded-[44px] font-SFRegular  mx-auto tracking-wider">
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
					<figure className="  mx-auto mt-12 mb-3">
						<StaticImage
							src="../images/mac.svg"
							alt="mac"
							placeholder="blurred"
							layout="fixed"
						/>
					</figure>
					<Link to="/about-me" className="flex items-center justify-center">
						<p className="font-SFRegular text-2xl font-bold md:font-normal md:text-[45px] mr-2  ">
							More about me
						</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-4 md:w-7 md:mt-1 -rotate-90"
							fill="none"
							viewBox="0 0 38 24"
						>
							<path
								fill="#000"
								d="M0.933406 6.25C0.311135 5.57353 0 4.8125 0 3.90349C0 2.02206 1.47271 0.499998 3.29803 0.499998C4.2107 0.499998 5.06114 0.901653 5.74563 1.59926L19.0207 15.5303L32.2751 1.59926C32.9596 0.880512 33.81 0.499998 34.702 0.499998C36.5273 0.499998 38 2.02206 38 3.90349C38 4.83364 37.6889 5.59467 37.0666 6.25L21.7172 22.2316C20.9083 23.0772 20.0371 23.4789 19 23.5C17.9836 23.5 17.1332 23.0983 16.2828 22.2316L0.933406 6.25Z"
							/>
						</svg>
					</Link>
					<h2 className="flex justify-center flex-col items-center my-5 md:my-10">
						<p className="font-SFRegular text-2xl md:text-[45px] ">
							Awesome apps I made
						</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-4 md:w-7 mt-2 md:mt-5 "
							fill="none"
							viewBox="0 0 38 24"
						>
							<path
								fill="#000"
								d="M0.933406 6.25C0.311135 5.57353 0 4.8125 0 3.90349C0 2.02206 1.47271 0.499998 3.29803 0.499998C4.2107 0.499998 5.06114 0.901653 5.74563 1.59926L19.0207 15.5303L32.2751 1.59926C32.9596 0.880512 33.81 0.499998 34.702 0.499998C36.5273 0.499998 38 2.02206 38 3.90349C38 4.83364 37.6889 5.59467 37.0666 6.25L21.7172 22.2316C20.9083 23.0772 20.0371 23.4789 19 23.5C17.9836 23.5 17.1332 23.0983 16.2828 22.2316L0.933406 6.25Z"
							/>
						</svg>
					</h2>
				</div>
			</section>
			{Apps.map((app, index) => {
				return <AppPreview {...app} key={index} />;
			})}
			<footer className="absolute bottom-0  w-full">
				<div className="flex flex-col text-center  justify-center mb-4 ">
					<p className="font-SFRegular text-4xl md:text-[45px] ">
						Get in touch
					</p>
					<div className="flex justify-center my-6">
						<a
							href="http://google.com"
							target="_blank"
							rel="noopener noreferrer"
							className="mr-16"
						>
							<figure>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="52"
									height="43"
									fill="none"
									viewBox="0 0 52 43"
								>
									<path
										fill="#000"
										d="M51.1992 5.43709C49.3164 6.2714 47.2938 6.83512 45.1674 7.08992C47.3614 5.77711 49.0028 3.71091 49.7854 1.27685C47.7241 2.50122 45.4681 3.36305 43.1155 3.82486C41.5334 2.13565 39.4379 1.01602 37.1543 0.639785C34.8707 0.263554 32.5268 0.651775 30.4865 1.74418C28.4461 2.83658 26.8235 4.57204 25.8705 6.68112C24.9176 8.7902 24.6876 11.1549 25.2163 13.4081C21.0395 13.1984 16.9536 12.1128 13.2235 10.2217C9.49353 8.33069 6.20281 5.67647 3.56496 2.43134C2.66301 3.98721 2.14439 5.79111 2.14439 7.71226C2.14338 9.44174 2.56928 11.1447 3.3843 12.6701C4.19931 14.1955 5.37824 15.4962 6.81649 16.4567C5.14851 16.4036 3.51732 15.9529 2.0587 15.1421V15.2774C2.05853 17.703 2.89759 20.0541 4.4335 21.9315C5.96941 23.809 8.10757 25.0972 10.4852 25.5776C8.93784 25.9964 7.31558 26.0581 5.74091 25.758C6.41173 27.8452 7.71843 29.6703 9.47807 30.9779C11.2377 32.2855 13.3622 33.0101 15.5541 33.0503C11.8332 35.9713 7.2379 37.5557 2.50742 37.5488C1.66947 37.549 0.832221 37.5001 0 37.4022C4.8017 40.4895 10.3912 42.128 16.0998 42.1217C35.4241 42.1217 45.9882 26.1166 45.9882 12.2355C45.9882 11.7846 45.9769 11.3291 45.9566 10.8781C48.0115 9.39209 49.7852 7.55193 51.1947 5.44386L51.1992 5.43709Z"
									/>
								</svg>
							</figure>
						</a>
						<a
							href="http://google.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<figure>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="54"
									height="43"
									fill="none"
									viewBox="0 0 54 43"
								>
									<path
										fill="#000"
										d="M8.13496 42.3346H45.9175C50.5994 42.3346 53.3617 39.5957 53.3617 34.4691V8.57841C53.3617 3.45178 50.5994 0.712891 45.4259 0.712891H7.61996C2.9381 0.712891 0.199219 3.45178 0.199219 8.57841V34.4691C0.199219 39.6191 2.96151 42.3346 8.13496 42.3346ZM24.2405 22.109L7.61996 5.67566C7.80723 5.65225 8.01792 5.65225 8.2286 5.65225H45.3089C45.543 5.65225 45.7771 5.65225 45.9878 5.69907L29.3672 22.109C28.4074 23.0453 27.6349 23.4433 26.7922 23.4433C25.9728 23.4433 25.2003 23.0219 24.2405 22.109ZM5.04494 9.28069L17.3348 21.3833L5.04494 33.5561V9.28069ZM36.2729 21.3599L48.4926 9.35091V33.5093L36.2729 21.3599ZM8.2286 37.4186C7.94769 37.4186 7.69019 37.3952 7.43268 37.3484L20.4482 24.4499L21.5719 25.5501C23.3042 27.259 24.9896 27.9847 26.7922 27.9847C28.6181 27.9847 30.3035 27.259 32.0124 25.5501L33.1361 24.4499L46.1516 37.3484C45.8941 37.3952 45.6132 37.4186 45.3089 37.4186H8.2286Z"
									/>
								</svg>
							</figure>
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
