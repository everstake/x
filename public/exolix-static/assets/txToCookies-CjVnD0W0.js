import{cT as n,cU as o}from"./main-CDKDnvW7.js";const t=new Date;t.setFullYear(t.getFullYear()+1);function i(){return n("txs")||[]}function c(e){const s=i();o("txs",[...s,e.id],{path:"/",expires:t})}function p(e){const r=i().filter(x=>x!==e.id);o("txs",r,{path:"/",expires:t})}export{i as g,p as r,c as s};