import{Ai as e,Bo as t,Cn as n,F as r,Gi as i,Mn as a,Pi as o,Ro as s,Sn as c,Uo as l,Vi as u,ei as d}from"./index-CvvJlGac.js";import{c as f}from"./ModalHeader-BYl15uiI-CY9B6-jH.js";import{t as p}from"./Screen-DtggdpY6-3srkczH2.js";import{a as m,d as h,n as g,o as _,s as v}from"./shared-zEQvTSXl-C2-X1N5L.js";import{t as y}from"./ShieldCheckIcon-Doh9zN4Z.js";import{a as b}from"./Layouts-BlFm53ED-st4ktBAA.js";var x=s(),S=l(t(),1);d();var C={component:()=>{let[t,n]=(0,S.useState)(!0),{authenticated:s,user:c}=o(),{walletProxy:l,closePrivyModal:d,createAnalyticsEvent:f,client:C}=u(),{navigate:D,data:O,onUserCloseViaDialogOrKeybindRef:k}=a(),[A,j]=(0,S.useState)(void 0),[M,N]=(0,S.useState)(``),[P,F]=(0,S.useState)(!1),{entropyId:I,entropyIdVerifier:L,onCompleteNavigateTo:R,onSuccess:z,onFailure:B}=O.recoverWallet,V=(e=`User exited before their wallet could be recovered`)=>{d({shouldCallAuthOnSuccess:!1}),B(typeof e==`string`?new i(e):e)};return k.current=V,(0,S.useEffect)((()=>{if(!s)return V(`User must be authenticated and have a Privy wallet before it can be recovered`)}),[s]),(0,x.jsxs)(p,{children:[(0,x.jsx)(p.Header,{icon:y,title:`Enter your password`,subtitle:`Please provision your account on this new device. To continue, enter your recovery password.`,showClose:!0,onClose:V}),(0,x.jsx)(p.Body,{children:(0,x.jsx)(w,{children:(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(_,{type:t?`password`:`text`,onChange:e=>(e=>{e&&j(e)})(e.target.value),disabled:P,style:{paddingRight:`2.3rem`}}),(0,x.jsx)(h,{style:{right:`0.75rem`},children:t?(0,x.jsx)(g,{onClick:()=>n(!1)}):(0,x.jsx)(v,{onClick:()=>n(!0)})})]}),!!M&&(0,x.jsx)(T,{children:M})]})})}),(0,x.jsxs)(p.Footer,{children:[(0,x.jsx)(p.HelpText,{children:(0,x.jsxs)(b,{children:[(0,x.jsx)(`h4`,{children:`Why is this necessary?`}),(0,x.jsx)(`p`,{children:`You previously set a password for this wallet. This helps ensure only you can access it`})]})}),(0,x.jsx)(p.Actions,{children:(0,x.jsx)(E,{loading:P||!l,disabled:!A,onClick:async()=>{F(!0);let t=await C.getAccessToken(),n=e(c,I);if(!t||!n||A===null)return V(`User must be authenticated and have a Privy wallet before it can be recovered`);try{f({eventName:`embedded_wallet_recovery_started`,payload:{walletAddress:n.address}}),await l?.recover({accessToken:t,entropyId:I,entropyIdVerifier:L,recoveryPassword:A}),N(``),R?D(R):d({shouldCallAuthOnSuccess:!1}),z?.(n),f({eventName:`embedded_wallet_recovery_completed`,payload:{walletAddress:n.address}})}catch(e){r(e)?N(`Invalid recovery password, please try again.`):N(`An error has occurred, please try again.`)}finally{F(!1)}},$hideAnimations:!I&&P,children:`Recover your account`})}),(0,x.jsx)(p.Watermark,{})]})]})}},w=n.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,T=n.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,E=n(f)`
  ${({$hideAnimations:e})=>e&&c`
      && {
        // Remove animations because the recoverWallet task on the iframe partially
        // blocks the renderer, so the animation stutters and doesn't look good
        transition: none;
      }
    `}
`;export{C as PasswordRecoveryScreen,C as default};