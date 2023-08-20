import Text from "../atoms/Text"

import { lexendBold, lexendRegular, lexendSemiBold } from "@/styles/font"
import FormInput from "../molecules/FormInput"
import DropdownCategory from "../molecules/DropdownCategory"
import Button from "../atoms/Button"

export default function FormAuth() {
	return (
		<section className="w-auto p-10 flex flex-col gap-8 border border-1 border-black rounded-lg">
			<div className="flex w-full items-center justify-center ">
				<Text className={`text-2xl text-amber-900 ${lexendBold.className}`}>
					Login
				</Text>
			</div>
			<form action="" className="flex flex-col gap-4">
				<FormInput
					type="text"
					name={`username`}
					placeholder="Username"
					className="input input-bordered w-56 bg-amber-950 text-amber-100 placeholder:text-amber-100 "
				>
					Username
				</FormInput>

				<FormInput
					name={`password`}
					type="text"
					placeholder="Password"
					className="input input-bordered w-56 bg-amber-950 text-amber-100 placeholder:text-amber-100 "
				>
					Password
				</FormInput>
				<div className={`flex justify-center w-full`}>
					<Button>Login</Button>
				</div>
			</form>
		</section>
	)
}
