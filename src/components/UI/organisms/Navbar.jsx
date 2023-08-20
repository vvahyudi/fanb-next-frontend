import Logo from "../atoms/Logo"
import { Icon } from "@iconify/react"
import DropdownMenu from "../molecules/DropdownMenu"
import MenuItems from "../atoms/MenuItems"
import Link from "next/link"
import { lexendSemiBold } from "@/styles/font"
export default function Navbar() {
	return (
		<div className="navbar bg-amber-950 rounded-lg border border-1 border-amber-950">
			<div className="navbar-start">
				<Logo href="/" />
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<Link href="/transaction">
						<MenuItems
							className={`text-xl ${lexendSemiBold.className} text-amber-100 `}
						>
							|&nbsp;New Transaction&nbsp;|
						</MenuItems>
					</Link>
					<MenuItems
						className={`text-xl ${lexendSemiBold.className} text-amber-100 `}
					>
						&nbsp;History&nbsp;|
					</MenuItems>
					<Link href="/product">
						<MenuItems
							className={`text-xl ${lexendSemiBold.className} text-amber-100 `}
						>
							&nbsp;Products&nbsp;|
						</MenuItems>
					</Link>
					<MenuItems
						className={`text-xl ${lexendSemiBold.className} text-amber-100 `}
					>
						&nbsp;Users&nbsp;|
					</MenuItems>
				</ul>
			</div>
			<div className="navbar-end">
				<DropdownMenu />
			</div>
		</div>
	)
}
