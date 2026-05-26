import{_ as e,a as t,c as n,d as r,f as i,h as a,i as o,m as s,o as c,p as l,r as u,s as d,t as f,u as p}from"./floating-ui.react-CCjnyim6.js";import{Bo as m,Cn as h,Mn as g,Pi as _,Ro as ee,Uo as v,Vi as y,an as b,ei as te,ki as x,ti as ne}from"./index-Czqtyf6W.js";import{t as S}from"./createLucideIcon-BMOKLscU.js";import{t as C}from"./check-BSfSCz5m.js";import{n as re,t as w}from"./poll-DCqCcokj-BRzMPv_F.js";import{t as ie}from"./hourglass-B8dFj9ZL.js";import{t as T}from"./triangle-alert-oVIx0V3k.js";import{c as ae}from"./ModalHeader-BYl15uiI-rLgcFsL_.js";import{t as E}from"./ScreenLayout-yWVsP0Du-2pJ034CF.js";import{t as oe}from"./CopyableText-D2t3Xzed-Bkow5tho.js";import{n as se,t as ce}from"./QrCode-C3Xo6IrX-BUKIO317.js";import{r as le}from"./styles-DVyDvTdj-CnCmjKCE.js";var D={path:`/api/v1/onramp/deposit_addresses/quote`,method:`POST`},ue={path:`/api/v1/onramp/deposit_addresses/orders/:order_id`,method:`GET`},de={path:`/api/v1/onramp/deposit_addresses/:deposit_address_id/next_order`,method:`GET`},O={path:`/api/v1/onramp/deposit_addresses/deposit_config`,method:`GET`},fe=S(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),pe=S(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),k=S(`qr-code`,[[`rect`,{width:`5`,height:`5`,x:`3`,y:`3`,rx:`1`,key:`1tu5fj`}],[`rect`,{width:`5`,height:`5`,x:`16`,y:`3`,rx:`1`,key:`1v8r4q`}],[`rect`,{width:`5`,height:`5`,x:`3`,y:`16`,rx:`1`,key:`1x03jg`}],[`path`,{d:`M21 16h-3a2 2 0 0 0-2 2v3`,key:`177gqh`}],[`path`,{d:`M21 21v.01`,key:`ents32`}],[`path`,{d:`M12 7v3a2 2 0 0 1-2 2H7`,key:`8crl2c`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M12 3h.01`,key:`n36tog`}],[`path`,{d:`M12 16v.01`,key:`133mhm`}],[`path`,{d:`M16 12h1`,key:`1slzba`}],[`path`,{d:`M21 12v.01`,key:`1lwtk9`}],[`path`,{d:`M12 21v-1`,key:`1880an`}]]),A=S(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),me=S(`undo-2`,[[`path`,{d:`M9 14 4 9l5-5`,key:`102s5s`}],[`path`,{d:`M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11`,key:`f3b9sd`}]]),j=v(m(),1),M=ee(),N=x((()=>null)),P=e=>{N.getState()!==null&&N.setState(e)};te(),se();var he=class extends j.Component{static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){this.props.onError(e)}componentDidUpdate(e){e.resetKey!==this.props.resetKey&&this.state.hasError&&this.setState({hasError:!1})}render(){return this.state.hasError?null:this.props.children}constructor(...e){super(...e),this.state={hasError:!1}}};function F(e,t){let n=function(e){if(e.startsWith(`solana:`))return`solana`;if(e.startsWith(`bip122:`))return`bitcoin-segwit`;if(e.startsWith(`eip155:`))return`ethereum`;throw Error(`Unsupported CAIP-2 namespace: ${e.split(`:`)[0]}`)}(e);return t.find((e=>e.type===`wallet`&&e.chainType===n&&e.address))?.address}function ge(e,t,n){let r=Number(e);return!Number.isFinite(r)||r===0?`1 ${t} ≈ ${e} ${n}`:r>=.01?`1 ${t} ≈ ${I(r)} ${n}`:`${I(1/r)} ${t} ≈ 1 ${n}`}function I(e){return e>=1e3?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:0}).format(Math.round(e)):e>=100?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:1}).format(e):e>=1?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:2}).format(e):new Intl.NumberFormat(`en-US`,{maximumFractionDigits:4}).format(e)}function L(e,t){let n=Number(e);if(!Number.isFinite(n)||n===0)return e;let r=t==null?n:n/10**t;return r>=1e3?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:2}).format(r):r>=1?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:4}).format(r):r>=1e-4?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:6}).format(r):new Intl.NumberFormat(`en-US`,{maximumSignificantDigits:4}).format(r)}function R({address:e,caip2:t,config:n}){let r=Object.values(n.chains).find((e=>e.caip2===t));if(!r)return{symbol:e,decimals:void 0};for(let t of n.currencies){let n=t.chains.find((t=>t.chainId===r.chainId&&t.address.toLowerCase()===e.toLowerCase()));if(n)return{symbol:t.symbol.toUpperCase(),decimals:n.decimals}}return{symbol:e,decimals:void 0}}function z(e,t){for(let n of Object.values(t))if(n.caip2===e)return n.displayName;return e}function _e(e,t,n){let r=Number(e);if(!Number.isFinite(r)||r===0)return e;let i=t<=6?2:t<=9?4:6,a=10**i,o=Math.ceil(r/10**t*a)/a,s=new Intl.NumberFormat(`en-US`,{minimumFractionDigits:i,maximumFractionDigits:i}).format(o);return n?`${s} ${n}`:s}function B(){let e=N(),{closePrivyModal:t,privy:n}=y(),r=e?.params??null,i=e?.config??{status:`loading`},a=(0,j.useCallback)((e=>{P({modalState:e})}),[]),o=(0,j.useCallback)((async()=>{if(r){P({config:{status:`loading`}});try{let e=await n.fetchPrivyRoute(O,{});P({config:{status:`ready`,data:{currencies:e.currencies,chains:e.chains}}})}catch(e){throw P({config:{status:`error`,error:e instanceof Error?e:Error(`Failed to load deposit config`)}}),e}}}),[r,n]),s=(0,j.useCallback)((()=>{if(!e)return;let{modalState:n}=e;n.step===`complete`?e.onComplete():n.step===`failed`?e.onError(Error(`DEPOSIT_FAILED`)):n.step===`error`?e.onError(Error(n.error)):n.step===`refunded`?e.onError(Error(`DEPOSIT_REFUNDED`)):e.onError(Error(`USER_EXITED`)),t({shouldCallAuthOnSuccess:!1})}),[e,t]);return{modalState:e?.modalState??{step:`intro`},setModalState:a,config:i,retryConfig:o,params:r,close:s}}var V=360;function H(e,t){switch(e.status){case`completed`:return t({step:`complete`,order:e});case`refunded`:return t({step:`refunded`,order:e});case`failed`:return t({step:`failed`,order:e});case`executing`:return t({step:`processing`,order:e});default:return e.status,t({step:`processing`,order:e})}}var ve=({sourceAmount:e,sourceSymbol:t,sourceChainName:n,sourceDecimals:r,destinationAmount:i,destSymbol:a,destChainName:o,destDecimals:s,onClose:c})=>(0,M.jsx)(E,{icon:C,iconVariant:`success`,title:`Transfer complete`,subtitle:i?`Received ${L(e,r)} ${t} on ${n} and converted it to ${L(i,s)} ${a} on ${o}. Funds are available to use.`:`Your ${t} has been received and is now available in your wallet.`,showClose:!0,onClose:c,primaryCta:{label:`Done`,onClick:c},watermark:!1});function ye(){let{modalState:e,close:t,config:n}=B();if(e.step!==`complete`||n.status!==`ready`)throw Error(`UNEXPECTED_STATE`);let{order:r}=e,{sourceSymbol:i,sourceChainName:a,sourceDecimals:o,destSymbol:s,destChainName:c,destDecimals:l}=(0,j.useMemo)((()=>{let e=R({address:r.source_currency,caip2:r.source_chain,config:n.data}),t=R({address:r.destination_currency,caip2:r.destination_chain,config:n.data});return{sourceSymbol:e.symbol,sourceChainName:z(r.source_chain,n.data.chains),sourceDecimals:e.decimals,destSymbol:t.symbol,destChainName:z(r.destination_chain,n.data.chains),destDecimals:t.decimals}}),[r,n]);return(0,M.jsx)(ve,{sourceAmount:r.source_amount,sourceSymbol:i,sourceChainName:a,sourceDecimals:o,destinationAmount:r.destination_amount,destSymbol:s,destChainName:c,destDecimals:l,onClose:t})}var be=h.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: var(--privy-color-foreground-3);
  margin: 0.25rem 0 0;
`,U=h.img`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  object-fit: cover;
  flex-shrink: 0;
`,W=h.img`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  object-fit: cover;
  flex-shrink: 0;
`,G=h.span`
  font-weight: 500;
`,xe=h.span`
  font-size: 0.875rem;
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`,K=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  min-height: 2.25rem;
  border-radius: 6.25rem;
  border: none;
  background-color: var(--privy-color-background-2);

  input {
    flex: 1;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background: transparent;
    color: var(--privy-color-foreground);

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &::placeholder {
      color: var(--privy-color-foreground-3);
    }
  }
`,Se=h.button`
  && {
    position: relative;
    width: 100%;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    padding: 0.625rem 0.75rem;
    min-height: 3.5rem;
    border: 1px solid
      ${e=>e.$selected?`var(--privy-color-icon-interactive)`:`var(--privy-color-foreground-4)`};
    border-radius: var(--privy-border-radius-md);
    background-color: ${e=>e.$selected?`var(--privy-color-info-bg)`:`transparent`};
    color: var(--privy-color-foreground);
    font-size: 0.875rem;
    line-height: 1.5rem;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    transition:
      background-color 200ms ease,
      border-color 200ms ease;

    &:hover {
      background-color: var(--privy-color-background-2);
    }

    &:disabled {
      opacity: ${e=>e.$selected?1:.5};
      cursor: not-allowed;
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,q=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 3rem 0;
`,Ce=h.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0;
`,J=h.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Y=h.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${e=>e.$status===`done`?`var(--privy-color-success-light, #DCFCE7)`:`var(--privy-color-background-2)`};
`,we=h.div`
  width: 2px;
  height: 1rem;
  background-color: var(--privy-color-background-2);
  margin-left: 0.6875rem;
`,X=h.span`
  font-size: 0.875rem;
  color: var(--privy-color-foreground);
`,Te=h.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--privy-border-radius-md);
  background-color: var(--privy-color-background-2);
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`,Z=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8125rem;
  line-height: 1.25rem;
`,Q=h.span`
  color: var(--privy-color-foreground);
  font-weight: 400;
`,$=h.span`
  color: var(--privy-color-foreground);
  font-weight: 500;
  text-align: right;
  max-width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ee=h(b)`
  && {
    margin-left: auto;
    height: 1.5rem;
    width: 1.5rem;
    border-width: 2px;
    flex-shrink: 0;
  }
`;function De(){let{modalState:e,setModalState:t,config:n,retryConfig:r,close:i}=B();if(e.step!==`error`)throw Error(`UNEXPECTED_STATE`);let{error:a}=e,{title:o,subtitle:s,detail:c,iconVariant:l}=(e=>{switch(e){case`NO_REFUND_WALLET`:return{title:`Wallet not found`,subtitle:`Link a compatible wallet to use as your refund address.`,detail:`No compatible wallet was found to use as a refund address for this chain.`,iconVariant:`warning`};case`AMOUNT_TOO_LOW`:return{title:`Amount too low`,subtitle:`The deposit amount is below the minimum for this route.`,detail:`Try a larger amount or a different token.`,iconVariant:`warning`};case`INSUFFICIENT_LIQUIDITY`:return{title:`Insufficient liquidity`,subtitle:`There isn't enough liquidity for this route right now.`,detail:`Try a smaller amount or a different network.`,iconVariant:`warning`};case`UNSUPPORTED_CHAIN`:case`UNSUPPORTED_CURRENCY`:case`UNSUPPORTED_ROUTE`:case`ROUTE_UNAVAILABLE`:return{title:`Route not available`,subtitle:`This deposit route isn't available right now. Try a different token or network.`,iconVariant:`warning`};case`SANCTIONED_WALLET_ADDRESS`:return{title:`Address restricted`,subtitle:`This address cannot be used for deposits due to compliance restrictions.`,iconVariant:`warning`};case`TIMEOUT_WAITING_FOR_NEXT_ORDER`:case`TIMEOUT_ORDER_COMPLETION`:return{title:`Taking longer than expected`,subtitle:`Your funds are safe. The deposit is still being processed — check back later.`,iconVariant:`subtle`};default:return{title:`Something went wrong`,subtitle:`We couldn't complete your request. Please try again.`,iconVariant:`subtle`}}})(a),[u,d]=(0,j.useState)(!1);return(0,M.jsx)(E,{icon:T,iconVariant:l,title:o,subtitle:s,showClose:!0,onClose:i,primaryCta:{label:`Try again`,onClick:async()=>{if(n.status!==`ready`){d(!0);try{await r(),t({step:`token`})}catch{d(!1)}}else t({step:`token`})},loading:u},watermark:!0,children:c?(0,M.jsxs)(Te,{children:[(0,M.jsx)(T,{size:16,color:`var(--privy-color-foreground-3)`,style:{flexShrink:0,marginTop:2}}),(0,M.jsx)(`span`,{children:c})]}):null})}function Oe(){let{modalState:e,close:t}=B();if(e.step!==`failed`)throw Error(`UNEXPECTED_STATE`);let{order:n}=e;return(0,M.jsx)(E,{icon:T,iconVariant:`error`,title:`Transfer failed`,subtitle:`Something went wrong processing your transfer.`,showClose:!0,onClose:t,primaryCta:{label:`Done`,onClick:t},secondaryCta:{label:`Learn about manual recovery`,onClick:()=>window.open(`https://docs.privy.io`,`_blank`,`noopener,noreferrer`)},watermark:!0,children:(0,M.jsxs)(ke,{href:n.tracking_url,target:`_blank`,rel:`noopener noreferrer`,children:[`Reference: `,n.provider_request_id]})})}var ke=h.a`
  text-align: center;
  font-size: 0.75rem;
  opacity: 0.7;
  text-decoration: underline;
  cursor: pointer;
  color: var(--privy-color-foreground-3);
`;function Ae(){let{close:e,setModalState:t,config:n}=B(),[r,i]=(0,j.useState)(!1);return(0,j.useEffect)((()=>{r&&(n.status===`ready`&&t({step:`token`}),n.status===`error`&&t({step:`error`,error:`ROUTE_UNAVAILABLE`}))}),[r,n.status,t]),(0,M.jsx)(E,{icon:k,iconVariant:`subtle`,title:`Add funds`,subtitle:`Top up your account by sending crypto from any wallet. Conversion and routing handled by Relay.`,showClose:!0,onClose:e,primaryCta:{label:`Continue`,onClick:()=>i(!0),loading:r&&n.status===`loading`,loadingText:null},watermark:!0})}function je(){let{modalState:e,setModalState:t,close:n}=B(),[r,i]=(0,j.useState)(``),[a,o]=(0,j.useState)(-1);if(e.step!==`network`)throw Error(`UNEXPECTED_STATE`);let{availableChains:s}=e,c=(0,j.useMemo)((()=>r?s.filter((e=>e.displayName.toLowerCase().includes(r.toLowerCase()))):s),[s,r]),{confirm:l,isCreating:u}=function(e){let t=N(),{privy:n}=y(),{user:r}=_(),{params:i,setModalState:a}=B(),[o,s]=(0,j.useState)(!1);return{confirm:(0,j.useCallback)((async e=>{if(!e||!i)return;let o=e.caip2,c=i.refundAddress??F(o,r?.linkedAccounts??[]);if(!c)return void a({step:`error`,error:`NO_REFUND_WALLET`});let l=t?.modalState;if(l&&l.step===`network`){s(!0);try{let t=await n.fetchPrivyRoute(D,{body:{source_chain:o,source_currency:e.currencyAddress,destination_chain:i.destinationChain,destination_currency:i.destinationCurrency,destination_address:i.destinationAddress,refund_address:c,...i.slippageBps==null?{}:{slippage_bps:i.slippageBps}}});a({step:`address`,selectedCurrency:l.selectedCurrency,selectedChain:e,quote:t})}catch(e){a({step:`error`,error:(e instanceof Error?e:Error(String(e))).message})}finally{s(!1)}}}),[e,i,r,t,n,a]),isCreating:o}}(c);return(0,M.jsxs)(E,{title:`Select network`,showBack:!0,onBack:()=>t({step:`token`}),showClose:!0,onClose:n,watermark:!0,children:[(0,M.jsxs)(K,{children:[(0,M.jsx)(A,{size:16,color:`var(--privy-color-foreground-3)`}),(0,M.jsx)(`input`,{value:r,onChange:e=>i(e.target.value),placeholder:`Search networks...`})]}),(0,M.jsx)(le,{style:{marginTop:`1rem`,height:`22rem`},$colorScheme:`light`,children:c.map(((e,t)=>(0,M.jsxs)(Se,{$selected:a===t,disabled:u,onClick:()=>{o(t),l(e)},children:[(0,M.jsx)(W,{src:e.iconUrl,alt:e.displayName}),(0,M.jsx)(G,{children:e.displayName}),u&&t===a&&(0,M.jsx)(Ee,{})]},e.chainId)))})]})}var Me=({trackingUrl:e,onClose:t})=>(0,M.jsx)(E,{icon:ie,iconVariant:`subtle`,title:`Transfer in progress`,subtitle:`Your deposit was received and the transfer is now processing.`,showClose:!0,onClose:t,secondaryCta:{label:`View on block explorer ↗`,onClick:()=>window.open(e,`_blank`,`noopener,noreferrer`)},watermark:!1,children:(0,M.jsxs)(Ce,{children:[(0,M.jsxs)(J,{children:[(0,M.jsx)(Y,{$status:`done`,children:(0,M.jsx)(C,{size:14,color:`var(--privy-color-icon-success)`,strokeWidth:2})}),(0,M.jsx)(X,{children:`Deposit received`})]}),(0,M.jsx)(we,{}),(0,M.jsxs)(J,{children:[(0,M.jsx)(Y,{$status:`active`,children:(0,M.jsx)(Ne,{})}),(0,M.jsx)(X,{children:`Bridging`})]}),(0,M.jsx)(we,{}),(0,M.jsxs)(J,{children:[(0,M.jsx)(Y,{$status:`pending`}),(0,M.jsx)(X,{children:`Funds arrived`})]})]})}),Ne=h.span`
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid var(--privy-color-foreground-3);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;function Pe(){let{modalState:e,close:t}=B();if(e.step!==`processing`)throw Error(`UNEXPECTED_STATE`);let{order:n}=e;return function({orderId:e,enabled:t}){let{privy:n}=y(),{setModalState:r}=B();(0,j.useEffect)((()=>{let t=new AbortController;return w({operation:async()=>await n.fetchPrivyRoute(ue,{params:{order_id:e}}),until:e=>e.status!==`executing`,delay:5e3,interval:5e3,attempts:V,signal:t.signal}).then((e=>{t.signal.aborted||(e.status===`success`?H(e.result,r):e.status===`max_attempts`&&r({step:`error`,error:`TIMEOUT_ORDER_COMPLETION`}))})),()=>{t.abort()}}),[t,e,n,r])}({orderId:n.id,enabled:!0}),(0,M.jsx)(Me,{trackingUrl:n.tracking_url,onClose:t})}function Fe(){let{modalState:e,close:t}=B();if(e.step!==`refunded`)throw Error(`UNEXPECTED_STATE`);let{order:n}=e;return(0,M.jsx)(E,{icon:me,iconVariant:`subtle`,title:`Transfer refunded`,subtitle:`Your transfer was received, but the swap couldn't be completed. A refund has been started automatically.`,showClose:!0,onClose:t,primaryCta:{label:`Done`,onClick:t},secondaryCta:{label:`View transaction details`,onClick:()=>window.open(n.tracking_url,`_blank`,`noopener,noreferrer`)},watermark:!0})}function Ie(){let{close:e,setModalState:t,config:n}=B(),{confirm:r,currencies:i,searchTerm:a,setSearchTerm:o,isSearching:s,isCreating:c}=function(){let{config:e,params:t,setModalState:n}=B(),{privy:r}=y(),{user:i}=_(),[a,o]=(0,j.useState)(``),[s,c]=(0,j.useState)(null),[l,u]=(0,j.useState)(!1),d=(0,j.useRef)(null),f=e.status===`ready`?e.data.currencies:[];(0,j.useEffect)((()=>a&&t?(d.current&&clearTimeout(d.current),d.current=setTimeout((async()=>{u(!0);try{let e=await r.fetchPrivyRoute(O,{query:{term:a}});c(e.currencies),function(e){let t=N.getState();if(!t||t.config.status!==`ready`)return;let n=new Set(t.config.data.currencies.map((e=>e.symbol))),r=e.filter((e=>!n.has(e.symbol)));r.length!==0&&P({config:{status:`ready`,data:{...t.config.data,currencies:[...t.config.data.currencies,...r]}}})}(e.currencies)}catch{c(null)}finally{u(!1)}}),300),()=>{d.current&&clearTimeout(d.current)}):(c(null),void u(!1))),[a,t,r]);let p=a?s??f.filter((e=>e.symbol.toLowerCase().includes(a.toLowerCase())||e.name.toLowerCase().includes(a.toLowerCase()))):f,[m,h]=(0,j.useState)(!1);return{confirm:(0,j.useCallback)((async a=>{if(e.status!==`ready`||!a)return;let o=a.chains.map((t=>{let n=e.data.chains[t.chainId];return n?{chainId:t.chainId,caip2:n.caip2,displayName:n.displayName,iconUrl:n.iconUrl,vmType:n.vmType,currencyAddress:t.address,currencyDecimals:t.decimals}:null})).filter((e=>e!==null));if(o.length!==1)n({step:`network`,selectedCurrency:a,availableChains:o});else{let e=o[0],s=t?.refundAddress??F(e.caip2,i?.linkedAccounts??[]);if(!s)return void n({step:`error`,error:`NO_REFUND_WALLET`});h(!0);try{n({step:`address`,selectedCurrency:a,selectedChain:e,quote:await r.fetchPrivyRoute(D,{body:{source_chain:e.caip2,source_currency:e.currencyAddress,destination_chain:t.destinationChain,destination_currency:t.destinationCurrency,destination_address:t.destinationAddress,refund_address:s,...t.slippageBps==null?{}:{slippage_bps:t.slippageBps}}})})}catch(e){n({step:`error`,error:(e instanceof Error?e:Error(String(e))).message})}finally{h(!1)}}}),[e,t,i,r,n]),currencies:p,searchTerm:a,setSearchTerm:o,isSearching:l,isCreating:m}}(),[l,u]=(0,j.useState)(-1);return(0,M.jsx)(E,{title:`Select token`,showBack:!0,onBack:()=>t({step:`intro`}),showClose:!0,onClose:e,watermark:!0,children:n.status===`error`?(0,M.jsx)(q,{children:(0,M.jsx)(be,{children:`Failed to load tokens`})}):n.status===`loading`?(0,M.jsx)(q,{children:(0,M.jsx)(b,{})}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(K,{children:[(0,M.jsx)(A,{size:16,color:`var(--privy-color-foreground-3)`}),(0,M.jsx)(`input`,{value:a,onChange:e=>o(e.target.value),placeholder:`Search tokens...`})]}),s?(0,M.jsx)(q,{children:(0,M.jsx)(b,{})}):(0,M.jsx)(le,{style:{marginTop:`1rem`,height:`22rem`},$colorScheme:`light`,children:i.map(((e,t)=>(0,M.jsxs)(Se,{$selected:l===t,disabled:c,onClick:()=>{u(t),r(e)},children:[(0,M.jsx)(U,{src:e.logoURI,alt:e.symbol}),(0,M.jsx)(G,{children:e.name}),c&&t===l?(0,M.jsx)(Ee,{}):(0,M.jsx)(xe,{children:e.symbol})]},e.symbol)))})]})})}function Le({address:e,onClick:t}){let[n,r]=(0,j.useState)(!1);return(0,M.jsx)(M.Fragment,{children:n?(0,M.jsx)(Re,{onClick:()=>r(!1),style:{marginTop:`1.5rem`},children:(0,M.jsx)(ce,{url:e,size:312,hideLogo:!0})}):(0,M.jsxs)(ze,{title:`Click to copy address`,onClick:t,style:{marginTop:`1.5rem`},children:[(0,M.jsxs)(Be,{children:[(0,M.jsx)(Ve,{children:`Deposit address`}),(0,M.jsx)(He,{children:e})]}),(0,M.jsx)(Ue,{children:(0,M.jsx)(We,{type:`button`,onClick:e=>{e.stopPropagation(),r(!0)},children:(0,M.jsx)(k,{size:16,color:`var(--privy-color-icon-muted)`})})})]})})}var Re=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`,ze=h.div`
  display: flex;
  border-radius: var(--privy-border-radius-md);
  background: var(--privy-color-background-clicked, #f1f2f9);
  padding: 1rem;
  cursor: pointer;
  gap: 0.5rem;
`,Be=h.div`
  flex: 1;
  min-width: 0;
  text-align: left;
`,Ve=h.div`
  font-size: 0.75rem;
  color: var(--privy-color-icon-muted);
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,He=h.div`
  word-break: break-all;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`,Ue=h.div`
  width: 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
`,We=h.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border-radius: var(--privy-border-radius-xs);

    &:hover {
      background: var(--privy-color-background);
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`;function Ge({quote:e,selectedCurrency:t,selectedChain:n,destinationSymbol:r}){let[i,a]=(0,j.useState)(!1),o=t.symbol.toUpperCase(),s=n.displayName,c=(0,j.useRef)(null);return(0,M.jsxs)(Ke,{children:[(0,M.jsxs)(qe,{onClick:(0,j.useCallback)((()=>{let e=document.getElementById(`privy-modal-content`);e&&(c.current&&clearTimeout(c.current),e.style.transition=`none`,c.current=setTimeout((()=>{e.style.transition=``,c.current=null}),160)),a((e=>!e))}),[]),children:[(0,M.jsxs)(Je,{children:[t.logoURI&&(0,M.jsx)(U,{src:t.logoURI,alt:o,style:{width:`2rem`,height:`2rem`}}),n.iconUrl&&(0,M.jsx)(Ye,{src:n.iconUrl,alt:s})]}),(0,M.jsxs)(Xe,{children:[(0,M.jsx)(Ze,{children:`You send`}),(0,M.jsxs)(Qe,{children:[o,` on `,s]})]}),(0,M.jsx)($e,{children:(0,M.jsx)(i?fe:re,{size:16})})]}),(0,M.jsx)(rt,{$expanded:i,children:(0,M.jsx)(it,{children:(0,M.jsxs)(et,{children:[e.indicative_rate&&(0,M.jsxs)(Z,{children:[(0,M.jsx)(Q,{children:`Conversion rate`}),(0,M.jsxs)($,{style:{display:`flex`,alignItems:`center`,gap:`0.25rem`},children:[ge(e.indicative_rate,o,r.toUpperCase()),(0,M.jsx)(at,{content:`Estimated rate based on current market conditions. Final execution price may vary depending on transfer size and routing.`})]})]}),(0,M.jsxs)(Z,{children:[(0,M.jsx)(Q,{children:`Max slippage`}),(0,M.jsxs)($,{children:[(e.slippage_bps/100).toFixed(1),`%`]})]}),e.minimum_amount&&n&&(0,M.jsxs)(Z,{children:[(0,M.jsx)(Q,{children:`Min amount`}),(0,M.jsx)($,{children:_e(e.minimum_amount,n.currencyDecimals,t.symbol)})]}),(0,M.jsxs)(Z,{children:[(0,M.jsx)(Q,{children:`Refund address`}),(0,M.jsx)($,{children:(0,M.jsx)(oe,{value:e.refund_address,iconOnly:!0,iconSize:11,children:ne(e.refund_address,4,4)})})]})]})})}),(0,M.jsxs)(tt,{children:[(0,M.jsx)(T,{size:16,color:`var(--privy-color-icon-muted)`,style:{flexShrink:0}}),(0,M.jsxs)(nt,{children:[`Only send `,(0,M.jsx)(`strong`,{children:o}),` on `,(0,M.jsx)(`strong`,{children:s}),`. Other assets may be lost.`]})]})]})}var Ke=h.div`
  border-radius: var(--privy-border-radius-md);
  border: 1px solid var(--privy-color-foreground-4);
  overflow: hidden;
`,qe=h.button`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--privy-color-foreground);
    outline: none;
    box-shadow: none;

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,Je=h.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`,Ye=h(W)`
  && {
    position: absolute;
    top: -0.125rem;
    right: -0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    box-sizing: content-box;
    border: 1.5px solid #fff;
  }
`,Xe=h.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Ze=h.span`
  font-size: 0.75rem;
  color: var(--privy-color-foreground-3);
  line-height: 1rem;
`,Qe=h.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,$e=h.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-clicked, #f1f2f9);
  color: var(--privy-color-foreground-3);
`,et=h.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0.75rem;

  & > * {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--privy-color-foreground-4);
  }

  & > *:last-child {
    border-bottom: none;
  }
`,tt=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0.75rem 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: var(--privy-border-radius-sm);
  background: #f8f9fc;
`,nt=h.span`
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-icon-muted);
  text-align: left;
`,rt=h.div`
  display: grid;
  grid-template-rows: ${({$expanded:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 150ms ease-out;
`,it=h.div`
  overflow: hidden;
`;function at({content:m}){let[h,g]=(0,j.useState)(!1),{refs:_,floatingStyles:ee,context:v}=c({open:h,onOpenChange:g,placement:`top`,whileElementsMounted:e,middleware:[s(6),l(),a({padding:8})]}),{getReferenceProps:y,getFloatingProps:b}=p([n(v,{move:!1,handleClose:u()}),d(v),o(v),t(v),r(v,{role:`tooltip`})]),{isMounted:te,styles:x}=i(v,{duration:150});return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`button`,{ref:_.setReference,type:`button`,"aria-label":`More information about conversion rate`,style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,padding:0,border:`none`,background:`none`,color:`var(--privy-color-icon-muted)`,cursor:`pointer`},...y(),children:(0,M.jsx)(pe,{size:14})}),te&&(0,M.jsx)(f,{root:document.getElementById(`privy-modal-content`)??void 0,children:(0,M.jsx)(ot,{ref:_.setFloating,style:{...ee,...x},...b(),children:m})})]})}var ot=h.div`
  max-width: 13rem;
  padding: 0.5rem 0.625rem;
  border-radius: var(--privy-border-radius-sm, 0.375rem);
  background: var(--privy-color-foreground);
  color: var(--privy-color-background);
  font-size: 0.6875rem;
  line-height: 1rem;
  font-weight: 400;
  text-align: left;
  z-index: 10;
`,st=({quote:e,selectedCurrency:t,selectedChain:n,destinationSymbol:r,onBack:i,onClose:a})=>{let[o,s]=(0,j.useState)(!1),c=t?.symbol?.toUpperCase()??`funds`,l=n?.displayName??``,u=async()=>{o||(await navigator.clipboard.writeText(e.deposit_address),s(!0),setTimeout((()=>s(!1)),2e3))};return(0,M.jsxs)(E,{title:`Send ${c}${l?` on ${l}`:``}`,subtitle:`Send funds to the address below. Conversion and routing handled by Relay.`,showBack:!0,onBack:i,showClose:!0,onClose:a,watermark:!1,children:[(0,M.jsx)(Ge,{quote:e,selectedCurrency:t,selectedChain:n,destinationSymbol:r}),(0,M.jsx)(Le,{address:e.deposit_address,onClick:u}),(0,M.jsx)(ae,{style:{marginTop:`1rem`,marginBottom:`0.5rem`,...o?{backgroundColor:`var(--privy-color-icon-success)`,borderColor:`var(--privy-color-icon-success)`}:{}},onClick:u,children:o?(0,M.jsxs)(M.Fragment,{children:[`Copied `,(0,M.jsx)(C,{size:16,style:{marginLeft:`0.25rem`}})]}):`Copy address`}),(0,M.jsx)(ct,{children:`Routing and bridging are handled by Relay. Privy does not control execution timing, liquidity, or transaction outcomes.`})]})},ct=h.p`
  && {
    margin: 0.5rem 0 0;
    font-size: 0.6875rem;
    line-height: 1.125rem;
    color: var(--privy-color-icon-muted);
    text-align: center;
  }
`;function lt(){let{modalState:e,setModalState:t,close:n,config:r,params:i}=B();if(e.step!==`address`||r.status!==`ready`)throw Error(`UNEXPECTED_STATE`);let{quote:a,selectedCurrency:o,selectedChain:s}=e;(function({depositAddressId:e,enabled:t,quoteCreatedAt:n}){let{privy:r}=y(),{setModalState:i}=B();(0,j.useEffect)((()=>{if(!e)return;let t=new AbortController;return w({operation:async()=>(await r.fetchPrivyRoute(de,{params:{deposit_address_id:e},query:{after:n}})).order??void 0,until:e=>e!==void 0,delay:5e3,interval:5e3,attempts:V,signal:t.signal}).then((e=>{t.signal.aborted||(e.status===`success`&&e.result?H(e.result,i):e.status===`max_attempts`&&i({step:`error`,error:`TIMEOUT_WAITING_FOR_NEXT_ORDER`}))})),()=>{t.abort()}}),[t,e,r,n,i])})({depositAddressId:a.id,enabled:!0,quoteCreatedAt:a.created_at});let c=(0,j.useMemo)((()=>o.chains.map((e=>{let t=r.data.chains[e.chainId];return t?{...t,currencyAddress:e.address,currencyDecimals:e.decimals}:null})).filter((e=>e!==null))),[o,r]);return(0,M.jsx)(st,{quote:a,selectedCurrency:o,selectedChain:s,destinationSymbol:(0,j.useMemo)((()=>{let e=i?.destinationCurrency??``,t=i?.destinationChain??``;return e&&t?R({address:e,caip2:t,config:r.data}).symbol:``}),[i?.destinationCurrency,i?.destinationChain,r]),onBack:()=>t({step:`network`,selectedCurrency:o,availableChains:c}),onClose:n})}function ut(){let{modalState:e,setModalState:t}=B();return(0,M.jsx)(he,{onError:e=>t({step:`error`,error:e.message||`UNEXPECTED_STATE`}),resetKey:e.step,children:(0,M.jsx)(dt,{})})}function dt(){let{modalState:e}=B();switch(e.step){case`intro`:return(0,M.jsx)(Ae,{});case`token`:return(0,M.jsx)(Ie,{});case`network`:return(0,M.jsx)(je,{});case`address`:return(0,M.jsx)(lt,{});case`processing`:return(0,M.jsx)(Pe,{});case`complete`:return(0,M.jsx)(ye,{});case`refunded`:return(0,M.jsx)(Fe,{});case`failed`:return(0,M.jsx)(Oe,{});case`error`:return(0,M.jsx)(De,{});default:return null}}var ft={component:()=>{let{onUserCloseViaDialogOrKeybindRef:e}=g(),t=N(),{close:n,config:r}=B();return(0,j.useEffect)((()=>{e.current=n}),[e,n]),(0,j.useEffect)((()=>{if(r.status===`ready`){for(let e of r.data.currencies)new Image().src=e.logoURI;for(let e of Object.values(r.data.chains))new Image().src=e.iconUrl}}),[r]),t?(0,M.jsx)(ut,{}):null}};export{ft as default};