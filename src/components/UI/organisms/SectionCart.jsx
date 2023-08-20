import { lexendBold } from "@/styles/font"
import Button from "../atoms/Button"
import ProductInCart from "../molecules/ProductInCart"

export default function SectionCart() {
	return (
		<fieldset>
			<legend
				className={`text-2xl text-amber-950 ${lexendBold.className} pb-2`}
			>
				Your Shopping Cart
			</legend>
			<div className="w-auto max-h-fit py-8 flex flex-col bg-whitesmoke border-2 border-amber-950 rounded-lg gap-8 justify-center items-center">
				<div className="w-full max-h-fit py-2 px-4 items-center flex flex-col gap-4 overflow-y-auto">
					<ProductInCart />
					<ProductInCart />
					<ProductInCart />
					<ProductInCart />
				</div>
				<Button
					className={`btn-wide text-xl bg-amber-600 text-amber-100 hover:bg-amber-700 uppercase ${lexendBold.className}`}
				>
					Checkout
				</Button>
			</div>
		</fieldset>
	)
}
