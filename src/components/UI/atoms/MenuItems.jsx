import Link from "next/link"
import { lexendSemiBold } from "@/styles/font"
export default function MenuItems({ children, ...props }) {
	return <li {...props}>{children}</li>
}
