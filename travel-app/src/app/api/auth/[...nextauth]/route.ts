import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'text' },
      },
      async authorize(_) {
        try {
          const response = await axios.post(
            'http://localhost:5000/api/auth/login'
          );

          console.log('>>>');
          console.log(response);

          return null;
        } catch (error) {
          console.log('catch');
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt(data) {
      console.log('callbacks');
      console.log(data);
      return data;
    },
  },
});

export { handler as GET, handler as POST };
