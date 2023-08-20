import { lexendBold } from "@/styles/font"
import { useState } from "react"
import Button from "../atoms/Button"
import EditProduct from "../molecules/EditProduct"
import Text from "../atoms/Text"

import Link from "next/link"
export default function SectionProduct() {
	return (
		<section className="w-full p-8 flex flex-col gap-8 border border-1 border-black rounded-lg">
			<div className="flex w-full justify-between ">
				<Text className={`text-2xl ${lexendBold.className}`}>Product</Text>
				<Link href="./product/add_product">
					<Button className="btn btn-wide bg-amber-600 text-amber-100 hover:bg-amber-700 uppercase">
						New Product
					</Button>
				</Link>
			</div>
			<EditProduct />
			<EditProduct />
			<EditProduct />
			<EditProduct />
			<EditProduct />
		</section>
	)
}
