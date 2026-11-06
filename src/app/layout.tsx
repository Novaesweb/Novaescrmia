import type {Metadata} from "next";
import "./globals.css";
import {SiteShell} from "@/components/SiteShell";
export const metadata:Metadata={
 title:{default:"NovaesCRM AI | Atendimento inteligente",template:"%s | NovaesCRM AI"},
 description:"Conheça o NovaesCRM AI da NovaesWeb: atendimento organizado, automação de conversas e demonstração ilustrativa da experiência. Planos em desenvolvimento.",
 applicationName:"NovaesCRM AI",
 icons:{icon:"/novaescrm-icon.webp"},
 openGraph:{title:"NovaesCRM AI — NovaesWeb",description:"Atendimento inteligente para o seu negócio. Conheça os recursos e a demonstração ilustrativa do NovaesCRM AI.",locale:"pt_BR",type:"website"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><SiteShell>{children}</SiteShell></body></html>}
