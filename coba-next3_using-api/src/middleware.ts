import { NextResponse } from "next/server";

export function middleware(request: Request) {
    console.log('====================================');
    console.log('Middleware here');
    console.log(request.method);
    console.log(request.url);
    const origin = request.headers.get('origin')
    console.log(origin);
    console.log('====================================');
    return NextResponse.next()
}