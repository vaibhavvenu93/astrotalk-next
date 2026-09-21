import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'NEXT / ASTROTALK — Content Labs', description: "Independent venture experiment exploring AstroTalk's next ₹1,000 Cr businesses." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}