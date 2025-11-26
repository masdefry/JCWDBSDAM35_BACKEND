import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

type LoginResponse = {
  data: {
    safeUser: {
      id: string;
      role: string;
      fullName: string;
    };
    token: string;
  };
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(_) {
        // Naming params tidak harus _ (underscore). Bisa diubah sendiri
        try {
          const response = await axios.post<LoginResponse>(
            'http://localhost:5001/api/auth/login',
            {
              email: _?.email,
              password: _?.password,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'X-Internal-Auth': process.env.NEXTAUTH_INTERNAL_SECRET!,
              },
            }
          );
          return {
            id: response?.data?.data?.safeUser?.id,
            role: response?.data?.data?.safeUser?.role,
            token: response?.data?.data?.token,
            fullName: response?.data?.data?.safeUser?.fullName,
          };
        } catch (error: any) {
          console.log(error);
          const message =
            error?.response?.data?.message || 'Login failed. Please try again.';

          throw new Error(message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        /*
          param: user berisikan data-data yg di return oleh method authorize yg ada diatas. 
          Kita menambahkan user.id, user.role dan user.token kedalam parameter `token`.
        */
        token.fullName = user?.fullName;
        token.id = user?.id;
        token.role = user?.role;
        token.accessToken = user?.token;
      }

      /*
        NextAuth akan men-generate sebuah token baru hasil dari payload `token`. 
        Dimana payload token nya sudah ditambahkan id, role, dan token dari API (langkah yg dilakukan di line 49-51)
      */
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as { id: string }).id = token.id as string;
        (session.user as { role: string }).role = token.role as string;
        (session.user as { fullName: string }).fullName =
          token.fullName as string;
        (session.user as { accessToken: string }).accessToken =
          token.accessToken as string;
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };

// 0 || 1000; // truthy falsy -> Nilai non-boolean yg di konversi menjadi nilai boolean
