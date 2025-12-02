"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowLeft, ShoppingCart, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { products } from "@/lib/products-data"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"

export default function ProductPage() {
	const params = useParams();
	const slug = params.slug;
	const product = products[params.slug as keyof typeof products]

	if (!product) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
					<Link href="/products">
						<Button>View All Products</Button>
					</Link>
				</div>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
			<div className="container mx-auto px-4 py-12">
				<Link
					href="/products"
					className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors mb-8"
				>
					<ArrowLeft className="h-4 w-4" />
					Back to Products
				</Link>

				<div className="grid lg:grid-cols-2 gap-12 mb-16">
					{/* Product Image */}
					<div className="space-y-6">
						<div className="relative aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl overflow-hidden p-8 shadow-2xl">
							<img
								src={product.image || "/placeholder.svg"}
								alt={product.name}
								className="w-full h-full object-contain"
							/>
							{product.popular && (
								<Badge className="absolute top-6 right-6 text-base font-bold shadow-lg bg-gradient-to-r from-primary to-secondary text-white border-0">
									⭐ Most Popular
								</Badge>
							)}
						</div>

						{/* Trust Badges */}
						<div className="grid grid-cols-3 gap-4">
							<Card className="p-4 text-center border-2">
								<div className="text-2xl mb-2">🚚</div>
								<div className="text-xs font-bold">Free Shipping</div>
							</Card>
							<Card className="p-4 text-center border-2">
								<div className="text-2xl mb-2">🔄</div>
								<div className="text-xs font-bold">30-Day Returns</div>
							</Card>
							<Card className="p-4 text-center border-2">
								<div className="text-2xl mb-2">✅</div>
								<div className="text-xs font-bold">Warranty</div>
							</Card>
						</div>
					</div>

					{/* Product Details */}
					<div className="space-y-8">
						<div>
							<Badge className="mb-4 text-base font-bold">{product.badge}</Badge>
							<h1 className="text-5xl font-display font-bold mb-4 text-balance">{product.name}</h1>
							<div className="flex items-center gap-2 mb-6">
								<div className="flex">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="h-5 w-5 fill-primary text-primary" />
									))}
								</div>
								<span className="text-sm font-semibold text-foreground/70">(2,847 reviews)</span>
							</div>



							<p className="text-lg text-foreground/80 leading-relaxed">{product.description}</p>
						</div>

						{/* Key Features */}
						<div className="space-y-4">
							<h3 className="text-2xl font-display font-bold">Key Features</h3>
							<ul className="grid grid-cols-1 gap-3">
								{product.features.map((feature, i) => (
									<li key={i} className="flex items-center gap-3 text-base font-semibold">
										<Check className="h-6 w-6 text-primary flex-shrink-0" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Action Buttons */}
						<div className="flex gap-4">
							<a href={product.amazonUrl} data-auto className="flex-1">
								<Button className="w-full text-lg py-6 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
									<ShoppingCart className="mr-2 h-5 w-5" />
									Buy on Amazon
								</Button>
							</a>
						</div>
					</div>
				</div>

				{/* What's Included */}
				<Card className="p-8 border-2">
					<h2 className="text-3xl font-display font-bold mb-6">What's Included</h2>
					<ul className="grid md:grid-cols-2 gap-4">
						{[
							"1x Product as Described",
							"Manufacturer's Packaging",
							"Original Accessories Included",
							"User Manual & Instructions",
							"Quality Guarantee",
							"Customer Support",
						].map((item, i) => (
							<li key={i} className="flex items-center gap-3 text-base font-semibold">
								<Check className="h-5 w-5 text-primary flex-shrink-0" />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</Card>
			</div>
		</div>
	)
}
