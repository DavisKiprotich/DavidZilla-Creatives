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
    async signIn({ user }) {
      return allowedEmails.includes(user.email);
    },
  },
});

export { handler as GET, handler as POST };
