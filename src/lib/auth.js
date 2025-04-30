// src/lib/auth.js
import GoogleProvider from "next-auth/providers/google";

const allowedEmails = ["dzillacreative@gmail.com", "mylesdavyz@gmail.com"];

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      if (session?.user?.email) {
        session.user.canUpload = allowedEmails.includes(session.user.email);
      }
      return session;
    },
  },
};
