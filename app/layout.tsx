import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Tokyo After Hours | The Bachelor Trip',description:'October 6–11, 2026. Six days in Tokyo: food, jazz, sumo, baseball, and late nights.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>;}
