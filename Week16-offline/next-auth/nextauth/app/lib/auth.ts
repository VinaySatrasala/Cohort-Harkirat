import  CredentialsProvider  from "next-auth/providers/credentials";
import GithubProvide from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
const authOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "email", type: "text", placeholder: "Enter email" },
          password: { label: "password", type: "password", placeholder: "Enter password" },
        },
        async authorize(credentials) {
          // Custom logic for validating user
          console.log(credentials)
          return {
              id : "1"
          }
        },
      }),
      GithubProvide({
        clientId:  process.env.GITHUB_ID || " ",
        clientSecret : process.env.GITHUB_SECRET || " "
      }),
      TwitterProvider({
        clientId: "QzdCb1hvVS1Hanpsd3YtbWRHejg6MTpjaQ",
        clientSecret: "5BPRGDDOkP7z46hd-i97sMdYwPPsrnLvK5ynRAnVPbDoNiN9hV",
        version: '2.0',
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
      callbacks: {
          async jwt({ token, user, account, profile, isNewUser }:any) {
              console.log("JWT Callback Props:");
              console.log("Token:", token);
              console.log("User:", user);
              console.log("Account:", account);
              console.log("Profile:", profile);
              console.log("IsNewUser:", isNewUser);
              return token;
          },
          async session({ session, token, user }:any) {
              // Send properties to the client, like an access_token and user id from a provider.
              session.accessToken = token.accessToken
              session.user.id = token.sub
              session.user.email = "fuck@gmail.com"
              return session
          }     
      },
      pages:{
        signIn : '/signin'
      }
  };

export default authOptions;