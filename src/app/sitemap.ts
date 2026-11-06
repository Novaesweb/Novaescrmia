import type {MetadataRoute} from "next";
const host="https://novaescrm.vercel.app";
const paths=["","/recursos","/planos","/demonstracao","/sobre","/contato","/privacidade","/termos","/cookies","/acessibilidade"];
export default function sitemap():MetadataRoute.Sitemap{return paths.map(path=>({url:host+path,changeFrequency:"monthly" as const,priority:path===""?1:.5}))}