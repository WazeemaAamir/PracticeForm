"use client"

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();

    try {
        if (body.email === 'user@example.com') {
            return NextResponse.json({
                redirectUrl: '/dashboard'
            });
        } else {
            return NextResponse.json({
                redirectUrl: '/home'
            });
        }
    } catch (err: any) {
        return NextResponse.json({
            message: err.message
        });
    }
}
export function handler(req: NextRequest) {
    return NextResponse.json({ message: "Hello from Practice API!" });
}