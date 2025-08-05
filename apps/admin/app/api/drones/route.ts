// apps/admin/app/api/drones/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const drones = await prisma.drone.findMany({
      orderBy: { createdAt: "desc" },
    });
    console.log("Fetched drones:", drones);
    return NextResponse.json(drones);
  } catch (error) {
    console.error("Failed to fetch drones:", error);
    return NextResponse.json(
      { error: "Failed to fetch drones." },
      { status: 500 }
    );
  }
}

