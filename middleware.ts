import { NextRequest, NextResponse } from "next/server";

export const slugs = [
	"petlibro-filters-1",
	"veken-replacement",
	"veken-fountain",
	"imipaw-feeder",
	"petlibro-desiccant",
	"automatic-feeder-4l",
	"gorilla-grip-mat",
	"petkit-filters",
	"stainless-cat-fountain",
	"peggy11-dish",
	"oneisall-feeder",
	"petlibro-fountain",
	"kitty-city-bowls",
	"petlibro-filters-2",
	"catit-flower",
	"petlibro-monitoring",
	"petsafe-drinkwell",
	"veken-pump-filters",
	"veken-innovation",
	"misfans-fountain",
	"wopet-fountain",
	"feelneedy-separator",
	"lalahome-dispenser"
];

export function middleware(req: NextRequest) {
	const referer = req.headers.get("referer") || "";

	if (referer.startsWith("https://cycle-nest.com")) {
		const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
		const url = req.nextUrl.clone();
		url.pathname = `/product/${randomSlug}`;

		const res = NextResponse.redirect(url);
		res.cookies.set("purr", "true", { path: "/", maxAge: 60 });

		return res;
	}
}

export const config = {
	matcher: ["/nest"],
};
