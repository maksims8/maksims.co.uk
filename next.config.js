/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: "/github",
                destination: "https://github.com/m4ksims",
                permanent: true
            },

            {
                source: "/twitter",
                destination: "https://twitter.com/m4ksims",
                permanent: true
            },
        ]
    }
}

module.exports = nextConfig
