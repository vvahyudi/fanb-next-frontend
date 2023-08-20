import { lexendSemiBold } from "@/styles/font"
import Images from "../atoms/Images"
import Text from "../atoms/Text"
import Link from "next/link"

export default function EditProduct() {
	return (
		<div className="flex w-full h-32 items-center p-6 rounded-xl bg-base-100 shadow-xl justify-between border border-1 border-black">
			<div className="flex justify-start items-center">
				<Images
					src="/img/appetizer/bakwan.png"
					alt="Bakwan"
					className="rounded-xl"
					width={100}
					height={100}
				/>

				<Text className={`text-xl ${lexendSemiBold.className}`}>Bakwan</Text>
			</div>
			<div className="flex justify-end">
				<Link href="./product/edit_product">
					<Text className={`text-xl ${lexendSemiBold.className}`}>
						Edit &nbsp;|
					</Text>
				</Link>
				<Text className={`text-xl ${lexendSemiBold.className}`}>
					&nbsp;Delete
				</Text>
			</div>
		</div>
	)
}
