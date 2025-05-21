import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: [
    // Exclure les routes qui doivent être dynamiques
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
}

export function middleware(request: NextRequest) {
  // Clone la requête originale
  const response = NextResponse.next()
  
  // Ajouter des en-têtes de cache pour les ressources statiques
  if (request.nextUrl.pathname.startsWith('/')) {
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800')
  }
  
  // Cache plus long pour les ressources qui changent rarement
  if (
    request.nextUrl.pathname.includes('.jpg') || 
    request.nextUrl.pathname.includes('.png') || 
    request.nextUrl.pathname.includes('.svg') || 
    request.nextUrl.pathname.includes('.woff') || 
    request.nextUrl.pathname.includes('.woff2')
  ) {
    response.headers.set('Cache-Control', 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=31536000')
  }
  
  return response
} 