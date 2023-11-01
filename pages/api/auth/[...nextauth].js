import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github'
export const authOptions={
    providers:[
        GithubProvider({
            clientId:'e4d695d25e0a851ed1c1',
            clientSecret:'8c4ba6865f81c41ebc698bd8a9e92fbff14386ed'
        })
    ]
}

export default NextAuth(authOptions)