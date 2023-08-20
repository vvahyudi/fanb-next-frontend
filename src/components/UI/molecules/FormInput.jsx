import Text from "../atoms/Text"
import Input from "../atoms/Input"
import { lexendSemiBold } from "@/styles/font"
export default function FormInput({ children, ...props }) {
	return (
		<div className={`flex justify-between items-center gap-8`}>
			<Text className={`text-lg text-amber-900 ${lexendSemiBold.className}`}>
				{children}
			</Text>
			<Input {...props} />
		</div>
	)
}
