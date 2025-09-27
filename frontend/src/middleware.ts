import { type NextRequest, NextResponse, type MiddlewareConfig } from "next/server";

const publicRoutes = [
    { path: "/", whenAuthenticated: "next" },
    { path: "/signin", whenAuthenticated: "redirect" },
    { path: "/signup", whenAuthenticated: "redirect" },
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/signin'
const REDIRECT_WHEN_AUTHENTICATED_ROUTE = '/dashboard/home'

export function middleware (request: NextRequest) {
    const actualPath = request.nextUrl.pathname

    const publicRoute = publicRoutes.find(route => route.path === actualPath)

    const authToken = request.cookies.get('token')

    if(!authToken && publicRoute) {
        return NextResponse.next()

    }

    if(!authToken && !publicRoute) {
        const redirectUrl = request.nextUrl.clone()

        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE

        return NextResponse.redirect(redirectUrl)
    }

    if(authToken && publicRoute?.whenAuthenticated === 'redirect') {
        const redirectUrl = request.nextUrl.clone()

        redirectUrl.pathname = REDIRECT_WHEN_AUTHENTICATED_ROUTE

        return NextResponse.redirect(redirectUrl)
    }

    if (authToken && !publicRoute) {

        // To Do: Verificar se o token ainda é válido ou se está expirado
        return NextResponse.next()
    }


    return NextResponse.next()
}

export const config: MiddlewareConfig = {
    matcher: [
        /*
        * Match all request paths except for the ones starting with:
        * - api (API routes)
        * - _next/static (static files)
        * - _next/image (image optimization files)
        * - favicon.ico, sitemap.xml, robots.txt (metadata files)
        */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}