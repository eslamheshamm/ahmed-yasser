import React from "react";
import { Link } from "gatsby";
const FilledDot = () => (
	<div className="w-4 mx-1 h-4 rounded-full bg-black"></div>
);
const EmptyDot = () => (
	<div className="w-4 mx-1 h-4 rounded-full border-2 border-black"></div>
);
const AboutMe = () => {
	return (
		<main>
			<section className="">
				<div className="m-12 flex">
					<Link to="/">
						<svg
							width="36"
							height="59"
							viewBox="0 0 36 59"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M27 57.5508C28.0588 58.5169 29.25 59 30.6728 59C33.6176 59 36 56.7134 36 53.8794C36 52.4623 35.3713 51.1419 34.2794 50.0791L12.4743 29.4678L34.2794 8.88865C35.4044 7.82587 36 6.50546 36 5.12063C36 2.28657 33.6176 2.34522e-06 30.6728 2.47395e-06C29.2169 2.53759e-06 28.0257 0.483081 27 1.44924L1.98529 25.2811C0.661763 26.5371 0.0330869 27.8897 -1.28949e-06 29.5C-1.22051e-06 31.0781 0.628675 32.3985 1.98529 33.7189L27 57.5508Z"
								fill="black"
							/>
						</svg>
					</Link>
				</div>
				<article className="md:py-8 md:pl-16 p-8 w-11/12  md:pr-28 mx-auto md:mx-12 md:w-9/12 lg:w-6-12 shadow-md  my-12">
					<h2 className="font-SFBold text-4xl mb-8">Development Skills</h2>
					<ul className="font-SFRegular text-3xl">
						<li className="flex justify-between items-center">
							<p>UIKit</p>
							<div className="flex ml-6">
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<EmptyDot />
							</div>
						</li>
						<li className="flex justify-between items-center">
							<p>SwiftUI</p>
							<div className="flex ml-6">
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<EmptyDot />
							</div>
						</li>
						<li className="flex justify-between items-center">
							<p>CoreData</p>
							<div className="flex ml-6">
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<EmptyDot />
								<EmptyDot />
							</div>
						</li>
						<li className="flex justify-between items-center">
							<p>Xcode</p>
							<div className="flex ml-6">
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<EmptyDot />
							</div>
						</li>
						<li className="flex justify-between items-center">
							<p>RxSwift</p>
							<div className="flex ml-6">
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<EmptyDot />
								<EmptyDot />
							</div>
						</li>
						<li className="flex justify-between items-center">
							<p>FireBase</p>
							<div className="flex ml-6">
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<EmptyDot />
							</div>
						</li>
						<li className="flex justify-between items-center">
							<p>Version Control</p>
							<div className="flex ml-6">
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<EmptyDot />
							</div>
						</li>
						<li className="flex justify-between items-center">
							<p>CL/CI</p>
							<div className="flex ml-6">
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<EmptyDot />
								<EmptyDot />
							</div>
						</li>
					</ul>
				</article>
				<article className="md:py-8 md:pl-16 p-8 w-11/12  md:pr-28 mx-auto md:mx-12 md:w-9/12 lg:w-6-12 shadow-md  my-12">
					<h2 className="font-SFBold text-4xl mb-8">Development Skills</h2>
					<ul className="font-SFRegular text-3xl">
						<li className="flex justify-between items-center">
							<p>Photoshop</p>
							<div className="flex ml-6">
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<EmptyDot />
							</div>
						</li>
						<li className="flex justify-between items-center">
							<p>Illustrator / Affinity Designer</p>
							<div className="flex ml-6">
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<FilledDot />
							</div>
						</li>
						<li className="flex justify-between items-center">
							<p>Figma / Sketch</p>
							<div className="flex ml-6">
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<EmptyDot />
								<EmptyDot />
							</div>
						</li>
						<li className="flex justify-between items-center">
							<p>Origami Studio</p>
							<div className="flex ml-6">
								<FilledDot />
								<FilledDot />
								<FilledDot />
								<EmptyDot />
								<EmptyDot />
							</div>
						</li>
					</ul>
				</article>
				<article className="md:py-8 md:pl-16 p-8 w-11/12  md:pr-28 mx-auto md:mx-12 md:w-9/12 lg:w-6-12 shadow-md  my-12">
					<h2 className="font-SFBold text-4xl mb-8">Soft Skills</h2>
					<ul className="font-SFRegular text-3xl">
						<li className="flex justify-between items-center">
							<p>Critical thinking / Problem-solving</p>
						</li>
						<li className="flex justify-between items-center">
							<p>Creativity</p>
						</li>
						<li className="flex justify-between items-center">
							<p>Teamwork / Communication</p>
						</li>
						<li className="flex justify-between items-center">
							<p>Organisation</p>
						</li>
					</ul>
				</article>
				<article className="md:py-8 md:pl-16 p-8 w-11/12  md:pr-28 mx-auto md:mx-12 md:w-9/12 lg:w-6-12 shadow-md  my-12">
					<h2 className="font-SFBold text-4xl mb-8">More About me</h2>
					<ul className="font-SFRegular text-3xl">
						<li className="flex justify-between items-center">
							<p>Booksworm</p>
						</li>
						<li className="flex justify-between items-center">
							<p>Runner</p>
						</li>
						<li className="flex justify-between items-center">
							<p>Carpentery Lover</p>
						</li>
						<li className="flex justify-between items-center">
							<p>Geek</p>
						</li>
					</ul>
				</article>
			</section>
		</main>
	);
};
export default AboutMe;
