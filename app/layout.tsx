import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ToasterProvider from "@/providers/ToasterProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModelProvider from "@/providers/ModelProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music",
};

export const revalidate = 0

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId()
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModelProvider/>
          <Sidebar songs={userSongs}>
            {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
