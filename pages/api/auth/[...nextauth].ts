import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async redirect({ url }) {
      // Allows relative callback URLs
      if (url.includes("/login")) return "/";
      if (!url.includes("/")) return "/login";
      return url;
    },
  },
});
