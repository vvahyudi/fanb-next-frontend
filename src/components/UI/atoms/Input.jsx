import { lexendRegular } from "@/styles/font"

export default function Input({ children, ...props }) {
	return (
		<div
			className={`flex items-center gap-2 text-lg ${lexendRegular.className}`}
		>
			<input {...props} />
			{children}
		</div>
	)
}
