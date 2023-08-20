import Navbar from "@/components/UI/organisms/Navbar"
import SectionProduct from "@/components/UI/organisms/SectionProduct"
// import { lexendRegular } from "@/styles/font"
export default function Transaction() {
	return (
		<main className={`flex min-h-screen flex-col items-center p-24 gap-4`}>
			<Navbar />
			<SectionProduct />
		</main>
	)
}
