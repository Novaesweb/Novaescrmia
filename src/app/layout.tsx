import type {Metadata} from "next";
import "./globals.css";
import "./visual-mobile-fix.css";
import {SiteShell} from "@/components/SiteShell";
export const metadata:Metadata={
 title:{default:"Novaes CRM IA | Atendimento inteligente",template:"%s | Novaes CRM IA"},
 description:"Conheça o Novaes CRM IA da NovaesWeb: atendimento organizado, automação de conversas e demonstração ilustrativa da experiência. Planos em desenvolvimento.",
 applicationName:"Novaes CRM IA",
 metadataBase:new URL("https://novaescrm.vercel.app"),icons:{icon:"/brand/novaes-simbolo-ia.webp"},
 openGraph:{title:"Novaes CRM IA — NovaesWeb",description:"Atendimento inteligente para o seu negócio. Conheça os recursos e a demonstração ilustrativa do Novaes CRM IA.",locale:"pt_BR",type:"website"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><SiteShell>{children}</SiteShell></body></html>}
