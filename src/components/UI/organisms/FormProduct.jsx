import Text from "../atoms/Text"

import { lexendBold, lexendSemiBold } from "@/styles/font"
import FormInput from "../molecules/FormInput"
import DropdownCategory from "../molecules/DropdownCategory"
import Button from "../atoms/Button"
export default function FormProduct({ children }) {
	return (
		<section className="w-auto p-10 flex flex-col gap-8 border border-1 border-black rounded-lg">
			<div className="flex w-full items-center justify-center ">
				<Text
					className={`text-2xl text-amber-900 ${lexendBold.className} uppercase`}
				>
					{children}
				</Text>
			</div>
			<form action="" className="flex flex-col gap-4">
				<FormInput
					type="text"
					name={`productName`}
					placeholder="Type here"
					className="input input-bordered w-80 bg-amber-950 text-amber-100 placeholder:text-amber-100 "
				>
					Product Name
				</FormInput>
				<div className="flex justify-between items-center">
					<Text
						className={`text-lg text-amber-900 ${lexendSemiBold.className}`}
					>
						Category
					</Text>
					<DropdownCategory />
				</div>
				<FormInput
					name={`price`}
					type="text"
					placeholder="Type here"
					className="input input-bordered w-80 bg-amber-950 text-amber-100 placeholder:text-amber-100 "
				>
					Price
				</FormInput>
				<FormInput
					type="file"
					name={`picture`}
					className={` file-input file-input-md ${lexendSemiBold.className} placeholder:text-amber-100 max-w-xs bg-amber-950
      file:bg-amber-500 file:text-amber-950
      hover:file:bg-amber-600 hover:file:text-amber-900`}
				>
					Picture
				</FormInput>
				<div className={`flex justify-around w-full`}>
					<Button
						className={`btn bg-rose-600 text-rose-100 hover:bg-rose-900 uppercase`}
						type={`reset`}
					>
						Clear
					</Button>
					<Button
						className={`btn bg-emerald-600 text-emerald-100 hover:bg-emerald-900 uppercase`}
						type={`submit`}
					>
						Save
					</Button>
				</div>
			</form>
		</section>
	)
}
