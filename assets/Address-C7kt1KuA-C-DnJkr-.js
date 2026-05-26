import{Bo as e,Cn as t,Ro as n,Uo as r,ti as i}from"./index-Czqtyf6W.js";import{t as a}from"./check-BSfSCz5m.js";import{t as o}from"./copy-Dwblkadv.js";import{t as s}from"./ModalHeader-BYl15uiI-rLgcFsL_.js";var c=n(),l=r(e(),1),u=({address:e,showCopyIcon:t,url:n,className:r})=>{let[u,m]=(0,l.useState)(!1);function h(t){t.stopPropagation(),navigator.clipboard.writeText(e).then((()=>m(!0))).catch(console.error)}return(0,l.useEffect)((()=>{if(u){let e=setTimeout((()=>m(!1)),3e3);return()=>clearTimeout(e)}}),[u]),(0,c.jsxs)(d,n?{children:[(0,c.jsx)(p,{title:e,className:r,href:`${n}/address/${e}`,target:`_blank`,children:i(e)}),t&&(0,c.jsx)(s,{onClick:h,size:`sm`,style:{gap:`0.375rem`},children:(0,c.jsxs)(c.Fragment,u?{children:[`Copied`,(0,c.jsx)(a,{size:16})]}:{children:[`Copy`,(0,c.jsx)(o,{size:16})]})})]}:{children:[(0,c.jsx)(f,{title:e,className:r,children:i(e)}),t&&(0,c.jsx)(s,{onClick:h,size:`sm`,style:{gap:`0.375rem`,fontSize:`14px`},children:(0,c.jsxs)(c.Fragment,u?{children:[`Copied`,(0,c.jsx)(a,{size:14})]}:{children:[`Copy`,(0,c.jsx)(o,{size:14})]})})]})},d=t.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,f=t.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,p=t.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;export{u as t};