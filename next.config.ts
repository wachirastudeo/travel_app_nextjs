import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
    },
  },    

  experimental:{
    
    serverActions:{
      bodySizeLimit: '5mb'
    },
    webVitalsAttribution: ['CLS', 'LCP'],

  },
  reactStrictMode:true,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'ykyruobglrtrygolkrsb.supabase.co'
      }
    ]
  }
};

export default nextConfig;