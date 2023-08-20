import FormProduct from "@/components/UI/organisms/FormProduct"
import Navbar from "@/components/UI/organisms/Navbar"

// import { lexendRegular } from "@/styles/font"
export default function EditProduct() {
	return (
		<main className={`flex min-h-screen flex-col items-center p-24 gap-4`}>
			<Navbar />
			<FormProduct>Edit Product</FormProduct>
		</main>
	)
}
