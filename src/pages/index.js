// import Image from "next/image"
import { lexendRegular } from "@/styles/font"
import Navbar from "@/components/UI/organisms/Navbar"
// import ProductCard from "@/components/UI/molecules/ProductCard"
import SectionTransaction from "@/components/UI/organisms/SectionTransaction"
import FormAuth from "@/components/UI/organisms/FormAuth"
// import { Logo } from "@/components/UI/atoms/Logo"

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center p-24 ${lexendRegular.className}`}
		>
			<Navbar />
			<FormAuth />
		</main>
	)
}
