import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Inicializa Redis (Necesitarás las variables de entorno de Upstash)
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

// Crea un límite de 20 peticiones cada 10 segundos por IP
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(20, '10 s'),
});

export async function middleware(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1';
  
  // Excluimos las imágenes y archivos estáticos del límite para no gastar cuota
  if (request.nextUrl.pathname.startsWith('/_next') || request.nextUrl.pathname.match(/\.(jpeg|jpg|png|gif|svg)$/)) {
    return NextResponse.next();
  }

  const { success, pending, limit, reset, remaining } = await ratelimit.limit(ip);

  if (!success) {
    return new NextResponse('Demasiadas peticiones. Por favor, espera un momento.', {
      status: 429,
      headers: {
        'X-RateLimit-Limit': limit.toString(),
        'X-RateLimit-Remaining': remaining.toString(),
        'X-RateLimit-Reset': reset.toString(),
      },
    });
  }

  return NextResponse.next();
}

// Define en qué rutas se aplica el middleware
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};