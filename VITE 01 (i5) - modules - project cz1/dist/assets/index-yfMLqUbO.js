(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();console.log("---data1.js");const d=123,A={a:10,b:20};console.log("---data2.js");const u={a:"aaa",b:"bbb"};console.log("---data3.js");const a={add(o){n+=o},remove(o){n-=o}};let n=0;console.log("---data4.js");class h{constructor(e,s){this.a=e,this.b=s}getA(){return this.a}setA(){this.a=888}}console.log("---data5.js");class E{constructor(e,s,r,t){console.log(this),this.w=e,this.h=s,this.text=r,this.color=t,this.createDiv()}createDiv(){this.div=document.createElement("div"),this.div.innerHTML=this.text,this.div.style.width=`${this.w}px`,this.div.style.height=`${this.h}px`,this.div.style.backgroundColor=this.color,this.div.style.color="white",this.div.style.position="absolute",this.div.onclick=()=>{alert(`color=${this.color}`)}}getRoot(){return this.div}setXY(e,s){this.div.style.right=`${e}px`,this.div.style.top=`${s}px`}}const g="data:image/png;base64,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";console.log("export value i obj z pliku data1.js",{value:d,obj:A});console.log("export default obj2 z pliku data2.js",u);a.add(10);a.remove(40);console.log("number = ",n);const w=new h(1,2),v=new h(3,4);console.log("obiekt d1 klasy Data4 z argumentami 1,2",w);console.log("obiekt d2 klasy Data4 z argumentami 3,4",v);const c=["red","green","blue"];for(let o=0;o<c.length;o++){const e=new E(100,100,"hello",c[o]);e.setXY(o*50,o*50),console.log(e),document.body.append(e.getRoot())}document.getElementById("img1").src=g;
