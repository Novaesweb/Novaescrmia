"use client";
import {NeuralGlobe} from "./NeuralGlobe";
/** Identidade vetorial: esfera completa, fundo realmente transparente. */
export function NovaesMark({className=""}:{className?:string}){
 return <span className={"nw-mark "+className} aria-hidden="true"><NeuralGlobe/><span className="nw-mark-letters"><span>N</span><span>W</span></span></span>;
}