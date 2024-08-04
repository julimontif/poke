/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/**', // Puedes ajustar el pathname según tus necesidades
                },
            ],
        },
};

export default nextConfig;
