import { NextResponse } from "next/server";
import { getProjects } from "@/lib/projects/loader";

export async function GET() {
    try {
        const projects = await getProjects();
        return NextResponse.json({ projects }, { status: 200 });
    } catch {
        return NextResponse.json({ projects: [] }, { status: 200 });
    }
}
