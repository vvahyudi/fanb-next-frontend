import Image from "next/image"

export default function Images({ src, alt, width, height, className }) {
	return (
		<figure className="px-10 py-10">
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={className}
			/>
		</figure>
	)
}
