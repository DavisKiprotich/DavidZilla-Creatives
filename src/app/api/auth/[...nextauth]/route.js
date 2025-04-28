import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const allowedEmails = ["dzillacreative@gmail.com", "mylesdavyz@gmail.com"];

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Add a custom field "canUpload" to session
      if (session?.user?.email) {
        session.user.canUpload = allowedEmails.includes(session.user.email);
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
