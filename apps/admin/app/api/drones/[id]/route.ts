// apps/admin/app/api/drones/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = await params?.id;

  try {
    const data = await req.json();

    const updatedDrone = await prisma.drone.update({
      where: { id },
      data: {
        name: data.name,
        type: data.type,
        status: data.status,
      },
    });

    return NextResponse.json(updatedDrone);
  } catch (error) {
    console.error("Update error:", error);
    return new NextResponse("Failed to update drone", { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = await params?.id;
    const deleted = await prisma.drone.delete({
      where: { id },
    });

    return NextResponse.json(deleted, { status: 200 });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return NextResponse.json(
      { error: "Failed to delete drone" },
      { status: 500 }
    );
  }
}
