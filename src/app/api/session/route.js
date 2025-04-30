import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return Response.json({ email: null });

  return Response.json({ email: session.user.email });
}
