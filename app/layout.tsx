import type React from "react"
import type { Metadata } from "next"
import { Nunito, Fredoka } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import "./globals.css"

const _nunito = Nunito({ subsets: ["latin"] })
const _fredoka = Fredoka({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Purr-Hydrate | Premium Pet Water Fountains for Cats & Dogs",
	description:
		"Keep your pets happy and hydrated with Purr-Hydrate automatic water fountains. Ultra-quiet, filtered water encourages healthy drinking habits.",
	referrer: "unsafe-url",
	icons: {
		icon: [
			{
				url: "/icon-light-32x32.png",
				media: "(prefers-color-scheme: light)",
			},
			{
				url: "/icon-dark-32x32.png",
				media: "(prefers-color-scheme: dark)",
			},
			{
				url: "/icon.svg",
				type: "image/svg+xml",
			},
		],
		apple: "/apple-icon.png",
	},
}

export const viewport = {
	themeColor: "#E374B8",
	width: "device-width",
	initialScale: 1,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`font-sans antialiased ${_nunito.className} ${_fredoka.className}`}>
				<SiteHeader />
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	)
}
