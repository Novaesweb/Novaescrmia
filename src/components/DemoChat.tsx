"use client";
import {useRef,useState} from "react";
type Msg={by:"cliente"|"assistente";text:string};
const greeting="Oi! 👋 Esta é uma demonstração ilustrativa do NovaesCRM AI. Escolha uma situação abaixo.";
const scenarios=[
{label:"Cumprimento",question:"Oiee, tudo bem?",answer:"Oiee! Tudo ótimo 😊 Como posso te ajudar hoje?"},
{label:"Horários",question:"Qual é o horário de vocês?",answer:"Consigo te ajudar! Para informar o horário correto, precisaria consultar os dados oficiais da loja."},
{label:"Produtos",question:"Quais produtos vocês têm?",answer:"Posso te mostrar os produtos cadastrados no estabelecimento. Esta demonstração não está conectada a um catálogo real."},
{label:"Atendente humano",question:"Quero falar com uma pessoa.",answer:"Claro! 💜 Numa versão integrada, sua solicitação seria encaminhada à equipe. Nesta demonstração não há transferência real."}
];
export function DemoChat({compact=false}:{compact?:boolean}){
const [msgs,setMsgs]=useState<Msg[]>([{by:"assistente",text:greeting}]);
const [selected,setSelected]=useState<number|null>(null);
const scroll=useRef<HTMLDivElement>(null);
function send(i:number){
const scenario=scenarios[i];
setSelected(i);
setMsgs(a=>[...a,{by:"cliente",text:scenario.question},{by:"assistente",text:scenario.answer}]);
requestAnimationFrame(()=>scroll.current?.scrollTo({top:scroll.current.scrollHeight,behavior:"smooth"}));
}
function reset(){setMsgs([{by:"assistente",text:greeting}]);setSelected(null)}
return <div className={"demo-widget"+(compact?" demo-compact":"")}><div className="demo-heading"><span className="demo-avatar">✦</span><div><b>NovaesCRM AI</b><small>Exemplo interativo, sem WhatsApp ou IA conectados</small></div></div>
<div ref={scroll} className="demo-messages" role="log" aria-live="polite" aria-relevant="additions">{msgs.map((m,i)=><p key={i} className={m.by==="cliente"?"demo-msg mine":"demo-msg"}>{m.text}</p>)}</div>
<div className="demo-choices"><span>Escolha uma situação:</span>{scenarios.map((s,i)=><button type="button" key={s.label} onClick={()=>send(i)} aria-pressed={i===selected}>{s.label}</button>)}</div>
<div className="demo-tools"><button type="button" className="demo-reset" onClick={reset}>↻ Reiniciar conversa</button><span>Simulação local • Sem envio de dados</span></div>
<p className="demo-disclaimer">Respostas pré-programadas e ilustrativas. A integração real com IA e WhatsApp não está disponível nesta página.</p></div>;
}