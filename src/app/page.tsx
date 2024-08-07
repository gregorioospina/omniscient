import Spline from "@splinetool/react-spline/next";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="z-50 bg-black fixed px-5 items-center top-0 left-0 right-0 h-14 flex gap-x-8 justify-between">
				<div className="flex gap-x-5 items-center">
					<Image src="assets/icons/o-logo.svg" alt="safecheck logo" height={50} width={50} />
					<p className="text-xl hidden lg:inline-flex font-bold">Safecheck</p>
				</div>
				<button className="bg-purple-700 text-white rounded-xl text-sm md:text-base p-2 px-5">Try it out</button>
			</div>
			<div className="relative h-[80svh]">
				<div className="absolute top-0 right-0 left-0 bottom-0 z-10 select-none"></div>
				<Spline style={{ zIndex: 0 }} scene="https://prod.spline.design/GvjcJVV3rai1-0l0/scene.splinecode" />
				<div className="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]">
					<p className="text-6xl text-white font-bold">Safecheck</p>
					<p className="text-sm mt-4 text-white text-center">Leading background checks for Latin countries</p>
				</div>
			</div>
			<p className="text-4xl font-bold text-white mb-10">Use cases</p>
			<div className="mb-20 p-4 text-center gap-y-6 lg:gap-x-6 lg:justify-center flex-col lg:grid lg:grid-cols-3 flex lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
				<div
					className="group flex-col flex justify-center border border-white/40 rounded-xl px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-950"
					rel="noopener noreferrer">
					<h2 className="mb-3 text-2xl text-white text-center font-semibold">Ensure Safe Tenancy with Trusted Background Checks</h2>
					<p className="m-0  text-white text-center text-sm opacity-50">
						Protect your property and peace of mind by screening potential tenants thoroughly. Our platform offers comprehensive background checks for Latino
						individuals in the US, giving you the confidence to lease with ease. Fast, reliable, and secure. Pay with your credit card today!
					</p>
				</div>
				<div
					className="group flex-col flex justify-center border border-white/40 rounded-xl px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-950 "
					rel="noopener noreferrer">
					<h2 className="mb-3 text-2xl text-white text-center font-semibold">Hire with Confidence</h2>
					<p className="m-0  text-white text-center text-sm opacity-50">
						Find the best talent for your business with our reliable background checks. Our service screens Latino job applicants in the US, ensuring you make
						informed hiring decisions. Strengthen your team with the right hires!
					</p>
				</div>
				<div
					className="group flex-col flex justify-center border border-white/40 rounded-xl px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-950 "
					rel="noopener noreferrer">
					<h2 className="mb-3 text-2xl text-white text-center font-semibold">Verify Volunteers and Service Providers Instantly</h2>
					<p className="m-0  text-white text-center text-sm opacity-50">
						Ensure the safety and reliability of your volunteers and service providers with our thorough background checks. Our platform specializes in
						screening Latino individuals in the US, providing you with instant, accurate results.
					</p>
				</div>
			</div>
			<div className="flex relative w-[100svw] flex-col h-[70svh] lg:h-[75svh] items-center justify-end pt-10">
				<Spline style={{ width: "100svw", height: "unset", minHeight: "400px" }} scene="https://prod.spline.design/emBO27iftiD8tfhO/scene.splinecode" />
				<div className="absolute top-0 bottom-[20%] left-0 right-0">
					<div className="flex flex-col items-center justify-center h-full">
						<p className="text-center text-4xl text-white mb-6 font-bold">Cutting Edge Technology</p>
						<p className="md:max-w-[50svw] font-extralight text-white max-w-[90svw] text-sm md:text-lg lg:text-xl tracking-wide md:min-w-[400px] text-justify bg-[linear-gradient(45deg,_#ffffff,_#ffffff)] text-transparent bg-clip-text">
							Our background checks are powered by Truora technology, the forefront player in background checks for Latin American countries. They have a long
							trajectory in the security industry, providing fraud and identity scams for the biggest companies in the region.
						</p>
					</div>
				</div>
			</div>
			<div className="flex relative w-[100svw] flex-col mb-10 min-h-[70svh] lg:h-[75svh] items-center justify-start pt-10">
				<div className="w-[80svw] md:w-[70svw] min-h-[400px] max-w-[800px] bg-purple-700 rounded-lg p-6 flex flex-col md:grid md:grid-cols-[auto_40%]">
					<div className="flex flex-col">
						<p className="text-white font-extralight text-xl">For only</p>
						<p className="text-white font-bold text-6xl">25$</p>
						<p className="text-white text-lg font-light md:text-xl mb-6">You get a background check that includes</p>
						<ul>
							<li className="text-sm text-white font-extralight md:text-base">- Checks in 4 countries</li>
							<li className="text-sm text-white font-extralight md:text-base">- Criminal background check</li>
							<li className="text-sm text-white font-extralight md:text-base">- Verification of personhood</li>
						</ul>
					</div>
					<div className="flex flex-col justify-end md:border-l border-t md:border-t-0 border-white pl-0 ml-0 md:ml-3 md:pl-6 pt-3 mt-3">
						<p className="text-white text-lg md:text-xl mb-3 font-bold">Required info</p>
						<p className="text-white font-light text-sm md:text-base">- Full name</p>
						<p className="text-white font-light text-sm md:text-base">- Country of origin</p>
						<p className="text-white font-light text-sm md:text-base">- National ID number</p>
					</div>
				</div>
			</div>
		</main>
	);
}
