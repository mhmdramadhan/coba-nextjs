import { NextResponse } from "next/server";

type Props = {
    params: {
        id: string
    }
}

export async function GET(request: Request, { params: { id } }: Props) {

}
