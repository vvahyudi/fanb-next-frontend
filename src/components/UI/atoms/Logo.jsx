import Link from "next/link"
import { lexendBold } from "@/styles/font"
export default function Logo({ ...props }) {
	return (
		<Link
			{...props}
			className={`btn btn-ghost normal-case text-xl ${lexendBold.className} text-amber-100`}
		>
			F&amp;B Cashier
		</Link>
	)
}
