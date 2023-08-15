import { NextResponse } from "next/server";

export function middleware(request: Request) {

    const regex = new RegExp('/api/*')
    if(regex.test(request.url)){

    }

    console.log('====================================');
    console.log('Middleware here');
    console.log(request.method);
    console.log(request.url);
    const origin = request.headers.get('origin')
    console.log(origin);
    console.log('====================================');
    return NextResponse.next()
}

export const config = {
    matcher: '/api/:path*'
}