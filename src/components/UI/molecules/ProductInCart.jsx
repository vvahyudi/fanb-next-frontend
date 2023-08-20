import { lexendBold, lexendSemiBold } from "@/styles/font"
import Image from "next/image"
import ButtonProduct from "../atoms/Button"
import Input from "../atoms/Input"
import Images from "../atoms/Images"
import Text from "../atoms/Text"
export default function ProductInCart() {
	return (
		<div className="card flex-row items-center justify-between w-auto bg-amber-950 gap-2">
			<div className="card-body flex-col items-center">
				<Images
					src="/img/appetizer/bakwan.png"
					alt="bakwan"
					width={100}
					height={100}
				/>
			</div>
			<div className="card-body flex-col items-center text-center gap-2">
				<Text
					className={`card-title text-lg xl:text-xl text-amber-100 ${lexendBold.className}`}
				>
					Bakwan
				</Text>
				<Text
					className={` xl:text-xl text-base text-amber-100 ${lexendSemiBold.className}`}
				>
					Rp. 2000,00
				</Text>
				<Input
					type={`number`}
					id={`qty`}
					min={1}
					max={99}
					defaultValue={1}
					className={`border border-amber-600 bg-amber-600 text-amber-100 border-1 rounded-md text-center w-auto ${lexendSemiBold.className} `}
				></Input>
				<label
					htmlFor="qty"
					className={`text-base xl:text-lg ${lexendSemiBold.className} text-amber-100`}
				>
					Qty
				</label>
			</div>
		</div>
	)
}
