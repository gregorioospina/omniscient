import Spline from "@splinetool/react-spline/next";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="z-50 fixed px-5 items-center top-0 left-0 right-0 h-14 flex gap-x-8 justify-between">
				<div className="flex gap-x-5 items-center">
					<Image src="assets/icons/o-logo.svg" alt="omniscient logo" height={50} width={50} />
					<p className="text-xl font-bold">Omniscient</p>
				</div>
				<button className="bg-[linear-gradient(45deg,_#bb01ff,_#16061c)] rounded-xl p-2 px-5">Try it out</button>
			</div>
			<div className="relative h-[80svh]">
				<Spline style={{ zIndex: 0 }} scene="https://prod.spline.design/GvjcJVV3rai1-0l0/scene.splinecode" />
				<div className="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]">
					<p className="text-6xl font-bold">Omniscient</p>
					<p className="text-sm mt-4 text-center">Leading background checks for Latin countries</p>
				</div>
			</div>
			<p className="text-4xl font-bold mb-10">Use cases</p>
			<div className="mb-32 text-center gap-y-6 lg:gap-x-6 lg:justify-center flex-col lg:flex-row flex lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
				<div
					className="group border border-white/40 rounded-xl px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					rel="noopener noreferrer">
					<h2 className="mb-3 text-2xl font-semibold">Renter checks</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">
						Be sure that whomever you rent your property to doesnt have complicated background history in their countries of origin.
					</p>
				</div>
				<div
					className="group border border-white/40 rounded-xl px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					rel="noopener noreferrer">
					<h2 className="mb-3 text-2xl font-semibold">Employee surity</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">Ensure you can trust your employees with your precious business</p>
				</div>
				<div
					className="group border border-white/40 rounded-xl px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					rel="noopener noreferrer">
					<h2 className="mb-3 text-2xl font-semibold">Employee surity</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">Ensure you can trust your employees with your precious business</p>
				</div>
			</div>
			<div className="flex relative w-full flex-col h-[50svh] lg:h-[75svh] items-center justify-center pt-20">
				<Spline scene="https://prod.spline.design/emBO27iftiD8tfhO/scene.splinecode" />
				<div className="absolute flex flex-col top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]">
					<p className="text-center text-4xl mb-6 font-bold">Cutting Edge Technology</p>
					<p className="max-w-[50svw] text-xl tracking-wide font-semibold min-w-[400px] text-justify bg-[linear-gradient(45deg,_#8900b5,_#eebeff)] text-transparent bg-clip-text">
						Our background checks are powered by Truora technology, the forefront player in background checks for Latin American countries. They have a long
						trajectory in the security industry, providing fraud and identity scams for the biggest companies in the region.
					</p>
				</div>
			</div>
		</main>
	);
}
