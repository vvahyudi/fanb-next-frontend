import { Lexend } from "next/font/google"

const lexendRegular = Lexend({ subsets: ["latin"], weight: ["400"] })
const lexendMedium = Lexend({ subsets: ["latin"], weight: ["500"] })
const lexendSemiBold = Lexend({ subsets: ["latin"], weight: ["600"] })
const lexendBold = Lexend({ subsets: ["latin"], weight: ["700"] })

export { lexendRegular, lexendMedium, lexendSemiBold, lexendBold }
