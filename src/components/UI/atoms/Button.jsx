export default function Button({ children, className, ...props }) {
	return (
		// <div className="card-actions">
		<button className={`${className} ${className}`} {...props}>
			{children}
		</button>
		// </div>
	)
}
