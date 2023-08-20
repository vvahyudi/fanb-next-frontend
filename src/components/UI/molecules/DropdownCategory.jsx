import React, { useState } from "react"
import { lexendSemiBold } from "@/styles/font"
import Text from "../atoms/Text"

const DropdownCategory = () => {
	const selectClassName = `block flex rounded-lg w-80 px-4 py-3 bg-amber-950 ${lexendSemiBold.className} text-amber-100`

	const categories = ["Select Category", "Appetizer", "Main Course", "Dessert"]
	const [selectedCategory, setSelectedCategory] = useState("Select Category")

	const handleCategorySelect = (event) => {
		setSelectedCategory(event.target.value)
	}

	return (
		<div className="w-80 ">
			<select
				className={selectClassName}
				value={selectedCategory}
				onChange={handleCategorySelect}
			>
				{categories.map((category, index) => (
					<option key={index} value={category}>
						{category}
					</option>
				))}
			</select>
		</div>
	)
}

export default DropdownCategory
