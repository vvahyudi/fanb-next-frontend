import { lexendBold, lexendSemiBold } from "@/styles/font"
import Images from "../atoms/Images"
import Button from "../atoms/Button"
import Text from "../atoms/Text"
export default function ProductCard() {
	return (
		<div className="card w-auto bg-amber-950 shadow-2xl">
			<Images
				src="/img/appetizer/bakwan.png"
				alt="Bakwan"
				className="rounded-xl"
				width={100}
				height={100}
			/>

			<div className="card-body items-center text-center">
				<Text
					className={`card-title text-2xl text-amber-100 ${lexendBold.className}`}
				>
					Bakwan
				</Text>
				<Text className={`text-xl text-amber-100 ${lexendSemiBold.className}`}>
					Rp. 2000,00
				</Text>
				<Button
					className={`btn bg-amber-600 text-amber-100 hover:bg-amber-700`}
				>
					Add to Cart
				</Button>
			</div>
		</div>
	)
}
