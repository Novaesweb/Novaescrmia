"use client";
import Link from "next/link";
import {NovaesMark} from "./NovaesMark";
import {usePathname} from "next/navigation";
import {useEffect,useState} from "react";
const nav=[["Início","/"],["Recursos","/recursos"],["Planos","/planos"],["Demonstração","/demonstracao"],["Sobre nós","/sobre"],["Contato","/contato"]] as const;
const footer=[["Recursos","/recursos"],["Planos","/planos"],["Demonstração","/demonstracao"],["Sobre nós","/sobre"],["Contato","/contato"],["Privacidade","/privacidade"],["Termos de uso","/termos"],["Cookies","/cookies"],["Acessibilidade","/acessibilidade"]] as const;
function Brand(){return <Link href="/" className="brand" aria-label="NovaesCRM AI — página inicial"><NovaesMark className="brand-mark"/><span>Novaes<b>CRM</b></span></Link>}
export function SiteShell({children}:{children:React.ReactNode}){
 const [open,setOpen]=useState(false);
 const pathname=usePathname();
 useEffect(()=>{setOpen(false)},[pathname]);
 useEffect(()=>{function onKey(e:KeyboardEvent){if(e.key==="Escape")setOpen(false)}window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[]);
 return <>
 <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
 <header className="header"><div className="wrap header-inner"><Brand/>
 <button className="menu-toggle" type="button" aria-expanded={open} aria-label={open?"Fechar menu principal":"Abrir menu principal"} aria-controls="main-navigation" onClick={()=>setOpen(v=>!v)}>{open?"✕ Fechar":"☰ Menu"}</button>
 <nav id="main-navigation" className={open?"nav nav-open":"nav"} aria-label="Navegação principal">
 {nav.map(([label,path])=><Link href={path} key={path} aria-current={pathname===path?"page":undefined} onClick={()=>setOpen(false)}>{label}</Link>)}
 </nav><Link className="header-cta" href="/demonstracao">Ver demonstração ▷</Link>
 </div></header>
 <div id="conteudo">{children}</div>
 <footer className="footer"><div className="wrap footer-grid"><div><Brand/><p>Atendimento inteligente com a assinatura NovaesWeb. Site institucional em evolução.</p></div>
 <div><h3>Explorar</h3>{footer.slice(0,4).map(([label,path])=><Link key={path} href={path}>{label}</Link>)}</div>
 <div><h3>Informações</h3>{footer.slice(4).map(([label,path])=><Link key={path} href={path}>{label}</Link>)}</div>
 <div><h3>Transparência</h3><p>Planos, preços e contratação em desenvolvimento.</p><p>A demonstração usa respostas ilustrativas, sem conexão com atendimento real.</p></div></div>
 <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} NovaesWeb. Todos os direitos reservados.</span><Link href="/">Voltar ao início ↑</Link></div>
 </footer></>;
}