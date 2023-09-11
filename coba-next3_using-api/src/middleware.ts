import { NextResponse } from "next/server";

import allowedOrigins = process.env.NODE_ENV === "production"
    ? ['https://www.yoursite.com', 'https://yoursite.com']
    : ['http://localhost:3000', 'https://www.google.com'];

export function middleware(request: Request) {

    const origin = request.headers.get('origin')
    console.log(origin);

    if (origin && !allowedOrigins.includes(origin)) {
        return new NextResponse(null, {
            status: 400,
            statusText: "Bad Request",
            headers: {
                'Content-Type': 'text/plain'
            }
        })
    }

    console.log('====================================');
    console.log('Middleware here');
    console.log(request.method);
    console.log(request.url);

    console.log('====================================');
    return NextResponse.next()
}

export const config = {
    matcher: '/api/:path*'
}