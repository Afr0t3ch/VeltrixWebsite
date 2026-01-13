import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, service, message } = data;

    // Validation
    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Integrate with your CRM (Supabase, HubSpot, etc.)
    // For now, we'll just log it
    console.log("New lead received:", {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: Send email notification
    // await sendEmailNotification(data);

    // TODO: Save to database
    // await supabase.from('leads').insert([data]);

    return NextResponse.json({
      success: true,
      message: "Your message has been received. We'll be in touch soon!"
    });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
