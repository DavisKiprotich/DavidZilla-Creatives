import NextAuth from "next-auth";
import { authOptions } from "../../../../lib/auth";

const handler = async (req, res) => {
  try {
    return await NextAuth(authOptions)(req, res);
  } catch (error) {
    console.error("AUTH ERROR:", error); // ← log the error
    throw error;
  }
};

export { handler as GET, handler as POST };
