import{r as t,f as d,a as o,o as u,c as v,b as e,w as a,F as P,d as S,e as s,u as b,n as R,t as k,g as q,h as K,p as M,i as Q,j as U}from"./index-Dwj0BNKM.js";const X="/assets/kick-scooter (1)-CINOLJ-h.png",Y="/assets/electric-scooter_3824605-B3tAcThS.png",Z=(n,m)=>{const r=n.__vccOpts||n;for(const[i,f]of m)r[i]=f;return r},oo=n=>(M("data-v-4717a17c"),n=n(),Q(),n),eo={class:"map-container"},to={class:"icon-container",style:{position:"relative","z-index":"101"}},so=["onClick"],no={class:"popup-content"},co=oo(()=>s("div",{class:"popup-left"},[s("img",{src:X,alt:"Another Image",class:"top-image"})],-1)),lo={class:"popup-right"},ao={class:"small-text"},ro={class:"small-text"},io={class:"small-text"},_o={__name:"HelloWorld",setup(n){const m=K(),r=t(m.refs.view),i=t(d([10.270264,36.84523])),f=t("EPSG:3857"),N=t(16),B=t(.1),_=t(!1),h=t(null),y=t({x:0,y:0}),z=t(d([10.271288,36.844397])),C=[[10.271288,36.844397],[10.27137,36.845166],[10.271144,36.841823],[10.270137,36.842861],[10.276042,36.843904],[10.276585,36.842606],[10.27546,36.845329],[10.263907,36.845008],[10.266719,36.844627],[10.266719,36.844627]],x=c=>d(c),j=()=>{_.value=!1},w=t({color:"Red",price:"10 dt",image:"../assets/kick-scooter (1).png",alt:"Electric Scooter"}),I=c=>{if(_.value=!_.value,h.value=c,_.value){const p=r.value.getPixelFromCoordinate(x(c));y.value={x:p[0],y:p[1]}}},L=()=>{I(z.value)};return(c,p)=>{const V=o("ol-view"),W=o("ol-source-osm"),A=o("ol-tile-layer"),E=o("ol-geom-point"),F=o("ol-style-icon"),T=o("ol-style"),$=o("ol-feature"),G=o("ol-source-vector"),H=o("ol-vector-layer"),O=o("ol-overlay"),D=o("ol-map");return u(),v("div",eo,[e(D,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"800px"},onClick:j},{default:a(()=>[e(V,{ref_key:"view",ref:r,center:i.value,rotation:B.value,zoom:N.value,projection:f.value},null,8,["center","rotation","zoom","projection"]),e(A,null,{default:a(()=>[e(W)]),_:1}),e(H,null,{default:a(()=>[e(G,null,{default:a(()=>[(u(),v(P,null,S(C,(l,g)=>e($,{key:g},{default:a(()=>[s("div",to,[e(E,{coordinates:x(l)},null,8,["coordinates"]),e(T,{class:"clickable-icon",onClick:J=>I(l)},{default:a(()=>[e(F,{src:b(Y),scale:.09},null,8,["src"])]),_:2},1032,["onClick"])])]),_:2},1024)),64))]),_:1})]),_:1}),(u(),v(P,null,S(C,(l,g)=>e(O,{key:g,position:b(d)(l)},{default:a(()=>[s("div",{class:"circle",onClick:J=>L(l)},null,8,so)]),_:2},1032,["position"])),64))]),_:1}),_.value?(u(),v("div",{key:0,class:"popup",style:R({left:y.value.x+"px",top:y.value.y+"px"})},[s("div",no,[co,s("div",lo,[s("p",ao,"Color: "+k(w.value.color),1),s("p",ro,"Price per hour: "+k(w.value.price),1),s("p",io,"Position: "+k(h.value),1),s("button",{onClick:p[0]||(p[0]=(...l)=>c.bookNow&&c.bookNow(...l)),class:"custom-button"},"Book Now")])])],4)):q("",!0)])}}},po=Z(_o,[["__scopeId","data-v-4717a17c"]]),mo={__name:"index",setup(n){return(m,r)=>{const i=po;return u(),U(i)}}};export{mo as default};