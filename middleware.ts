// middleware.ts

// Next internaqtional
// import { createI18nMiddleware } from "next-international/middleware";
// import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// 1. Définir les routes publiques (sign-in, sign-up)
// const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  // 🔑 Ajouter les versions localisées des routes publiques
  "/en/sign-in(.*)",
  "/en/sign-up(.*)",
  "/fr/sign-in(.*)",
  "/fr/sign-up(.*)",
  // 🔑 Ajouter les pages d'accueil localisées
  "/en",
  "/fr",
]);

// 2. Initialiser i18n middleware
// const I18nMiddleware = createI18nMiddleware({
//   locales: ["en", "fr"],
//   defaultLocale: "en",
//   urlMappingStrategy: "redirect",
// });


export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})


// export default clerkMiddleware(async (auth, req) => {
//   // const i18nResponse = I18nMiddleware(req);

//   // if (i18nResponse) return   i18nResponse; // ✅ redirection vers /fr ou /en si besoin

//   if (!isPublicRoute(req)) {
//     await auth.protect();
//   }

//   return NextResponse.next();
// });

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
