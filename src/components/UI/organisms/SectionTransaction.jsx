import { lexendBold, lexendMedium, lexendRegular } from "@/styles/font"
import ProductCard from "../molecules/ProductCard"
import ProductInCart from "../molecules/ProductInCart"
import SectionCart from "./SectionCart"
import Text from "../atoms/Text"
export default function SectionTransaction() {
	return (
		<section className="w-full py-10 flex gap-8">
			<div className="w-4/5 flex flex-col gap-2">
				<Text className={`text-2xl ${lexendBold.className}`}>
					New Transaction
				</Text>
				<div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-auto">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
			<SectionCart />
		</section>
	)
}
