import type {Metadata} from "next";
import "./globals.css";
import {SiteShell} from "@/components/SiteShell";
export const metadata:Metadata={title:"NovaesCRM AI | Atendimento inteligente",description:"Conheça o NovaesCRM AI, solução de atendimento em desenvolvimento com a assinatura NovaesWeb."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><SiteShell>{children}</SiteShell></body></html>}
