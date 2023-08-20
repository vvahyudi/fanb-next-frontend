import Navbar from "@/components/UI/organisms/Navbar"
import SectionTransaction from "@/components/UI/organisms/SectionTransaction"
// import { lexendRegular } from "@/styles/font"
export default function Transaction() {
	return (
		<main className={`flex min-h-screen flex-col items-center p-24`}>
			<Navbar />
			<SectionTransaction />
		</main>
	)
}
