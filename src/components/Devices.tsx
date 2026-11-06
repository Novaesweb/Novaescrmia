import Image from "next/image";
import {NeuralGlobe} from "./NeuralGlobe";

/** Mockup visual ilustrativo: não acessa clientes, WhatsApp ou IA real. */
export function Devices(){return <div className="premium-showcase" role="img" aria-label="Monitor e smartphone com exemplos ilustrativos de atendimento NovaesWeb e a esfera neon NW ao fundo">
  <div className="premium-globe" aria-hidden="true"><NeuralGlobe/><div className="premium-globe-mark">N<span>W</span></div></div>
  <div className="premium-floor" aria-hidden="true"/>
  <div className="premium-monitor">
    <div className="premium-monitor-frame">
      <div className="premium-webcam"/>
      <div className="premium-screen">
        <aside className="premium-sidebar">
          <div className="premium-product"><Image src="/novaescrm-icon.webp" alt="" width={26} height={26}/><strong>Novaes<span>CRM</span></strong></div>
          <small>ÁREA DE ATENDIMENTO</small>
          <div className="premium-tab selected">▣ <span>Conversas</span></div>
          <div className="premium-tab">♙ <span>Clientes</span></div>
          <div className="premium-tab">◇ <span>Automações</span></div>
          <div className="premium-tab">▤ <span>Relatórios</span></div>
          <div className="premium-sidebar-foot">● <span>Exemplo de painel</span></div>
        </aside>
        <div className="premium-inbox">
          <div className="premium-inbox-title">Mensagens <span>⌕</span></div>
          <div className="premium-search">⌕ &nbsp; Buscar conversas</div>
          <div className="premium-contact active"><i>M</i><div><b>Mariana</b><small>Quero um site pra minha loja</small></div><em>10:42</em></div>
          <div className="premium-contact"><i>R</i><div><b>Rafael</b><small>Como funciona o serviço?</small></div><em>09:18</em></div>
          <div className="premium-contact"><i>A</i><div><b>Amanda</b><small>Obrigada pela atenção 💜</small></div><em>Ontem</em></div>
          <div className="premium-list-note">Conversas fictícias para apresentação</div>
        </div>
        <div className="premium-dialog">
          <div className="premium-dialog-head"><i>M</i><div><b>Mariana</b><small>Atendimento demonstrativo</small></div><span>⋯</span></div>
          <div className="premium-thread"><small>HOJE • 10:42</small><p>Oie! Vocês criam site pra loja? 😊</p><p className="premium-reply">Oie, Mariana! 💜 A NovaesWeb desenvolve soluções digitais para negócios.</p><p className="premium-reply">Me conta, o que você vende?</p><p>Roupas! 👗</p></div>
          <div className="premium-compose">Digite uma mensagem... <b>➤</b></div>
        </div>
      </div>
    </div>
    <div className="premium-monitor-neck"/><div className="premium-monitor-foot"/>
  </div>
  <div className="premium-phone">
    <div className="premium-phone-side"/>
    <div className="premium-phone-screen">
      <div className="premium-island"/>
      <div className="premium-status">9:41 <span>● ▮ ▰</span></div>
      <div className="premium-phone-head"><Image src="/novaescrm-icon.webp" width={25} height={25} alt=""/><div><b>NovaesWeb</b><small>Assistente virtual • demonstração</small></div><span>⋮</span></div>
      <div className="premium-phone-chat"><div className="premium-date">Hoje</div><p>Oi! Quero criar um site pra minha loja.<small>09:41</small></p><p className="from-brand">Oiee! 💜 Sou a assistente virtual da NovaesWeb.<small>09:41 ✓✓</small></p><p className="from-brand">Que legal! Qual é o seu tipo de negócio? ✨<small>09:41 ✓✓</small></p><p>Uma loja de roupas! 👗<small>09:42</small></p></div>
      <div className="premium-phone-compose">☺ <span>Mensagem...</span><b>➤</b></div>
      <div className="premium-home-indicator"/>
    </div>
  </div>
  <div className="premium-floating premium-float-top">✦ <span>Atendimento humanizado</span></div>
  <span className="premium-caption">Interfaces e mensagens ilustrativas</span>
</div>}