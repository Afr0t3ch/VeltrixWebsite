import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database (e.g., Supabase)
    // 2. Send email notification
    // 3. Add to CRM system
    
    // For now, we'll just log and return success
    console.log("New lead received:", { name, email, phone, service, message });

    // Simulate saving to database
    const lead = {
      id: Date.now(),
      name,
      email,
      phone: phone || "",
      service,
      message,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      { success: true, lead },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
