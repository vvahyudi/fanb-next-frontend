import React, { useState } from "react"
import { lexendSemiBold } from "@/styles/font"
import Text from "../atoms/Text"

const DropdownMenu = () => {
	const selectClassName = `block flex rounded-lg max-w-xs px-4 py-4  bg-amber-950 ${lexendSemiBold.className} text-amber-100`

	const menus = ["My Profile", "Logout"]
	const [selectedMenu, setselectedMenu] = useState("Dropdown")

	const handleMenuSelect = (event) => {
		setselectedMenu(event.target.value)
	}

	return (
		<div className="">
			<select
				className={selectClassName}
				value={selectedMenu}
				onChange={handleMenuSelect}
			>
				{menus.map((menu, index) => (
					<option key={index} value={menu}>
						{menu}
					</option>
				))}
			</select>
		</div>
	)
}

export default DropdownMenu
