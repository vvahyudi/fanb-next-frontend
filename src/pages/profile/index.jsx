// pages/profile.js
import React from "react"
import { lexendSemiBold } from "@/styles/font"
import Text from "@/components/UI/atoms/Text"

const Profile = () => {
	const profileContainerClassName = `flex flex-col items-center justify-center h-screen bg-amber-100`

	return (
		<div className={profileContainerClassName}>
			<Text
				className={`text-4xl ${lexendSemiBold.className} text-amber-950 mb-4`}
			>
				Profile Details
			</Text>
			<div className="bg-white rounded-lg p-4 shadow-md">
				<Text className={`text-xl ${lexendSemiBold.className} text-gray-800`}>
					Name: John Doe
				</Text>
				<Text className={`text-xl ${lexendSemiBold.className} text-gray-800`}>
					Email: john@example.com
				</Text>
				{/* Add more profile details here */}
			</div>
		</div>
	)
}

export default Profile
