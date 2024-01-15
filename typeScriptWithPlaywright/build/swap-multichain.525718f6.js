(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("cIkYg",(function(a,l){var i;i=a.exports,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),t(a.exports,"default",(function(){return f}));var r=n("3ljHn"),o=n("kram9"),s=n("29o0l"),u=n("iQL9s"),c=n("75q0e"),d=n("hiI91"),p=n("gX5Te"),m=n("95TMh"),g=n("5sf7W");const b=()=>{const{isSwapperV3Enabled:t,isLoadingInitialAssets:n}=(()=>{var e,t,n;const[a]=(0,u.useSearchParams)(),l=null!==(e=a.get("sellFungible"))&&void 0!==e?e:void 0,i=null!==(t=a.get("sellAmount"))&&void 0!==t?t:void 0,c=null!==(n=a.get("buyFungible"))&&void 0!==n?n:void 0,{data:[d,m,g,b]}=(0,r.useFeatureFlags)(["enable-bridge-pairs","enable-swapper-v3","enable-next-jupiter-client","enable-native-bridge-pairs"]),f=m,w=(0,o.useSwapperStore)((e=>e.resetSwapper));p.hooks.useSubscribeSwapQuoteToQueries({enableBridgePairs:d,skipInitialBuyFungible:f,enableNextJupiterClient:g}),p.hooks.useSubscribeGasEstimation();const{isLoading:h}=p.hooks.useInitialAssets({paramsSellFungible:l,paramsSellAmount:i,paramsBuyFungible:c,enableBridgePairs:d,enableNextJupiterClient:g,enableNativeBridgePairs:b});return(0,s.useLayoutEffect)((()=>w),[w]),{isSwapperV3Enabled:m,isLoadingInitialAssets:h}})();return n?e(s).createElement(e(s).Fragment,null,e(s).createElement(d.SkeletonLoader,{height:"120px",borderRadius:"8px 8px 0 0"}),e(s).createElement(c.ItemSeparator,{gap:1}),e(s).createElement(d.SkeletonLoader,{height:"120px",borderRadius:"0 0 8px 8px"})):t?e(s).createElement(g.default,null):e(s).createElement(m.default,null)};var f=()=>e(s).createElement(b,null)})),n.register("95TMh",(function(a,l){t(a.exports,"default",(function(){return c}));var i=n("29o0l"),r=n("6JwWw"),o=n("hEw98"),s=n("3HsHY"),u=n("eV4dh");var c=()=>e(i).createElement(s.LegacySwapWrapper,null,e(i).createElement(r.LegacySwapSellAsset,null),e(i).createElement(r.LegacySwapBuyAsset,null),e(i).createElement(o.LegacySwapCard,null),e(i).createElement(u.SwapReviewButton,null))})),n.register("6JwWw",(function(a,l){t(a.exports,"LegacySwapSellAsset",(function(){return b})),t(a.exports,"LegacySwapBuyAsset",(function(){return h}));var i=n("43063"),r=n("kram9"),o=n("29o0l"),s=n("gkfw3"),u=n("6UMd8"),c=n("j81qC"),d=n("27SDj"),p=n("brWcm"),m=n("gX5Te"),g=n("ejwiH");const b=()=>{const t=(()=>{const{t:e}=(0,i.useTranslation)(),t=m.hooks.useSwapSellAssetProps({enableBridgePairs:!1,enableNextJupiterClient:!1,enableNativeBridgePairs:!1,isBalanceHidden:!1}),{showSwapSellAssetSelectModalMultichain:n}=(0,p.useLegacyModals)();return Object.assign(Object.assign({},t),{onSellAssetClicked:n,t:e})})();return e(o).createElement(f,Object.assign({},t))},f=e(o).memo((({assetButtonTitle:t,decimals:n,formattedMaxSellAmount:a,sellFungible:l,notEnoughAssets:i,uiSellAmount:r,onSellAssetClicked:s,setMaxSellAmount:u,updateSellAmount:c,t:d})=>e(o).createElement(x,null,e(o).createElement(E,null,e(o).createElement(v,{id:"you-pay"},d("swapFlowYouPay")),e(o).createElement(k,{onClick:u,role:"button"},d("swapperMax")," ",a)),e(o).createElement(g.SwapperInput,{"aria-labelledby":"you-pay",name:"sell-amount",dropdownTestID:"swap-sell-asset-dropdown",assetButtonTitle:t,decimals:n,disabled:!1,hasWarning:i,fungible:l,isLoadingAmount:!1,isLoadingAssets:!1,onClick:s,onUserInput:c,value:r})))),w=e(o).memo((({assetButtonTitle:t,buyAmount:n,decimals:a,buyFungible:l,isFetchingQuote:i,onBuyAssetClicked:r,onSwitchTokens:s,t:u})=>e(o).createElement(e(o).Fragment,null,e(o).createElement(y,null,e(o).createElement(A,null),e(o).createElement(S,{onClick:s},e(o).createElement(c.IconArrowDoubleVertical,{fill:"#FFFFFF",width:20}))),e(o).createElement(x,null,e(o).createElement(E,null,e(o).createElement(v,{id:"you-receive"},u("swapFlowYouReceive"))),e(o).createElement(g.SwapperInput,{"aria-labelledby":"you-receive",name:"buy-amount",dropdownTestID:"swap-buy-asset-dropdown",assetButtonTitle:t,decimals:a,disabled:!0,hasWarning:!1,fungible:l,isLoadingAmount:i,isLoadingAssets:!1,onClick:r,onUserInput:()=>{},value:n}))))),h=()=>{const t=(()=>{var e;const{t:t}=(0,i.useTranslation)(),{showSwapBuyAssetSelectModalMultichain:n}=(0,p.useLegacyModals)(),a=(0,o.useCallback)((()=>{n()}),[n]),l=m.hooks.useSwapBuyAssetProps();return m.hooks.useLegacyInitialAssets({skipBuyFungible:!1}),Object.assign(Object.assign({},l),{buyFungible:null!==(e=l.buyFungible)&&void 0!==e?e:r.INITIAL_BUY_FUNGIBLE,onBuyAssetClicked:a,t:t})})();return e(o).createElement(w,Object.assign({},t))},x=s.default.div`
  margin-bottom: 5px;
`,E=s.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 14px;
`,v=(0,s.default)(d.Text).attrs({size:16,color:"#777",weight:500,lineHeight:19,textAlign:"left"})``,k=(0,s.default)(d.Text).attrs((e=>({size:14,color:"#777",lineHeight:17,hoverColor:e.onClick?"#AB9FF2":void 0,weight:500,textAlign:"left",cursor:e.onClick?"pointer":void 0})))``,y=s.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,S=(0,s.default)(u.Circle).attrs({color:"#333333",diameter:40})`
  z-index: 0;
  cursor: pointer;
  &:hover:enabled {
    background: #444444;
  }
`,A=s.default.div`
  position: absolute;
  height: 1px;
  width: calc(100% + 2 * 16px); // TODO: create a constant for screen (tab) padding
  top: 20px;
  left: -16px; // TODO: use tab /screen padding
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`})),n.register("ejwiH",(function(a,l){t(a.exports,"SwapperInput",(function(){return g}));var i=n("29o0l"),r=n("gkfw3"),o=n("qppYH"),s=n("j81qC"),u=n("kGh2H"),c=n("bhnmm"),d=n("27SDj");const p=r.default.div`
  display: flex;
  align-items: center;
  input {
    font-size: 34px;
    line-height: 41px;
    font-weight: 400;
    padding: 0;
    background: none;
  }
`,m=r.default.div`
  width: 100%;
`,g=({assetButtonTitle:t,decimals:n,disabled:a,hasWarning:l,fungible:r,isLoadingAmount:o,isLoadingAssets:s,value:d,"aria-labelledby":g,onClick:b,onUserInput:f,dropdownTestID:w})=>e(i).createElement(p,{hasWarning:l},o?e(i).createElement(m,null,e(i).createElement(c.Spinner,{diameter:28,color:"#AB9FF2"})):e(i).createElement(u.NumericalInput,{"aria-labelledby":g,name:"amount",border:"0",placeholder:"0",warning:l,value:d,decimalLimit:n,disabled:a,onUserInput:f}),s?e(i).createElement(c.Spinner,{diameter:28,color:"#AB9FF2"}):e(i).createElement(h,{testID:w,assetButtonTitle:t,fungible:r,onClick:b})),b=r.default.div`
  border-radius: 40px;
  background-color: #181818;
  height: 42px;
  display: flex;
  align-items: center;
  padding: 6px;
  ${e=>e.isClickable?r.css`
          :hover {
            background-color: #404040;
            svg {
              fill: white;
            }
          }
          cursor: pointer;
        `:""}
`,f=(0,r.default)(d.Text).attrs({weight:600,size:16,color:"white"})`
  margin: 0 9px 0 4px;
`,w=r.default.div`
  display: flex;
  margin-right: 11px;
`,h=({assetButtonTitle:t,fungible:n,onClick:a,testID:l})=>{const{chain:r,logoUri:u,symbol:c,tokenAddress:d}=n.data;return e(i).createElement(b,{"data-testid":l,isClickable:void 0!==a,onClick:a},e(i).createElement(o.EcosystemImage,{image:{type:"fungible",src:u,fallback:c||d},size:30,tokenType:n.type,chainMeta:r}),e(i).createElement(f,null,t),void 0!==a&&e(i).createElement(w,null,e(i).createElement(s.IconChevronDown,{width:9,fill:"#fff"})))}})),n.register("3HsHY",(function(a,l){t(a.exports,"LegacySwapWrapper",(function(){return p}));var i=n("iOvk1"),r=n("43063"),o=n("29o0l"),s=n("gkfw3"),u=n("gX5Te"),c=n("edvyb");const d=s.default.div`
  overflow-y: inherit;
  padding-bottom: 15px;
`,p=e(o).memo((({children:t})=>{const n=u.hooks.useSelectedNetworks().every((e=>i.Chains.isMainnetNetworkID(e))),{t:a}=(0,r.useTranslation)(),l=(0,o.useMemo)((()=>({availableOnlyOnMainnet:a("swapAvailableOnMainnet")})),[a]);return n?e(o).createElement(d,null,t):e(o).createElement(c.SwapNotAvailableWrapper,{message:l.availableOnlyOnMainnet,swapDisabled:!0},t)}))})),n.register("edvyb",(function(a,l){t(a.exports,"SwapNotAvailableWrapper",(function(){return b}));var i=n("kram9"),r=n("29o0l"),o=n("hxhxc"),s=n("gkfw3"),u=n("27SDj");const c=s.default.div`
  overflow-y: "scroll";
  padding-top: 16px;
`,d=s.default.fieldset.attrs({disabled:!0})`
  pointer-events: none;
  user-select: none;
`,p=s.default.div`
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: ${(0,o.hexToRGB)("#222222",.75)};
`,m=s.default.div`
  background-color: ${(0,o.hexToRGB)("#E5A221",.7)};
  padding: 12px 15px;
  position: absolute;
  /* TODO: change 15px to 16px and create a screen padding constant like on mobile */
  top: -15px;
  left: -15px;
  right: 15px;
  width: calc(100% + 2 * 15px);
`,g=(0,s.default)(u.Text).attrs({size:14,lineHeight:19,weight:500,color:"#fff",textAlign:"left"})``,b=({message:t,swapDisabled:n=!0,children:a})=>((0,i.useResetSwapperOnMount)(),n?e(r).createElement(e(r).Fragment,null,e(r).createElement(p,{"data-testid":"disable-overlay"},e(r).createElement(m,null,e(r).createElement(g,null,t))),e(r).createElement(d,{"data-testid":"disable-wrapper"},a)):e(r).createElement(c,null,e(r).createElement(m,null,e(r).createElement(g,null,t)),e(r).createElement(e(r).Fragment,null,a)))})),n.register("eV4dh",(function(a,l){t(a.exports,"SwapReviewButton",(function(){return f}));var i=n("3ljHn"),r=n("43063"),o=n("kram9"),s=n("29o0l"),u=n("hFkH3"),c=n("brWcm"),d=n("gX5Te"),p=n("feAoQ");const m=()=>{const{t:t}=(0,r.useTranslation)();return e(s).createElement(u.Button,{type:"submit",theme:"default",disabled:!0},t("swapFlowActionButtonText"))},g=()=>{const{disabled:t,theme:n,title:a,onClick:l}=b();return e(s).createElement(u.Button,{type:"submit",theme:n,disabled:t,onClick:l},a)},b=()=>{const{t:e}=(0,r.useTranslation)(),{hasEnoughAssets:t,hasNoRoutes:n,canSwap:a,hasNoFundsForFees:l,sourceNativeToken:u}=d.hooks.useSwapReviewButtonProps(),m=(0,o.useSwapperStore)((e=>e.setQuoteFetchIntervalToggle)),{data:[g]}=(0,i.useFeatureFlags)(["enable-swapper-v3"]),{showSwapReviewModalMultichain:b}=(0,c.useLegacyModals)(),{handleShowModalVisibility:f}=(0,p.useModals)(),w=(0,s.useCallback)((()=>{l?f("insufficientBalance",{networkId:u.networkId,token:{balance:u.balance,required:u.required}}):(m(!1),g?f("swapReview"):b())}),[l,f,u.networkId,u.balance,u.required,m,g,b]);return a?{disabled:!1,theme:"primary",title:e("swapFlowActionButtonText"),onClick:w}:t?n?{disabled:!0,theme:"default",title:e("swapNoQuotesFound"),onClick:w}:{disabled:!0,theme:"default",title:e("swapFlowActionButtonText"),onClick:w}:{disabled:!0,theme:"warning",title:e("sendFormErrorInsufficientBalance"),onClick:w}},f=()=>{const{multichainQuoteResponse:t}=(0,o.useMultichainQuote)();return t?e(s).createElement(g,null):e(s).createElement(m,null)}})),n.register("5sf7W",(function(a,l){t(a.exports,"default",(function(){return p}));var i=n("kram9"),r=n("29o0l"),o=n("aWXnn"),s=n("4eDFx"),u=n("fD39c"),c=n("eV4dh"),d=n("6qYpc");var p=()=>{const{multichainQuoteResponse:t,hasNoRoutes:n}=(0,i.useMultichainQuote)();return e(r).createElement(d.SwapWrapper,null,e(r).createElement(o.Column,{justify:"space-between",flex:1},e(r).createElement(o.Column,{align:"normal"},e(r).createElement(s.SwapSellAssetCard,null),e(r).createElement(s.SwapBuyAssetCard,null),t||n?e(r).createElement(u.SwapInfoCard,null):null),e(r).createElement(o.Column,null,t?e(r).createElement(c.SwapReviewButton,null):null)))}})),n.register("4eDFx",(function(a,l){t(a.exports,"SwapSellAssetCard",(function(){return w})),t(a.exports,"SwapBuyAssetCard",(function(){return E}));var i=n("3ljHn"),r=n("43063"),o=n("29o0l"),s=n("gkfw3"),u=n("6UMd8"),c=n("qppYH"),d=n("j81qC"),p=n("27SDj"),m=n("brWcm"),g=n("gX5Te"),b=n("4ti1J");const f=e(o).memo((({onClick:t})=>e(o).createElement(C,null,e(o).createElement(T,{onClick:t},e(o).createElement(d.IconArrowDownSquare,{fill:"#000000"}))))),w=()=>{const t=(()=>{const{t:e}=(0,r.useTranslation)(),{data:[t,n,a]}=(0,i.useFeatureFlags)(["enable-bridge-pairs","enable-next-jupiter-client","enable-native-bridge-pairs"]),l=g.hooks.useSwapSellAssetProps({enableBridgePairs:t,enableNextJupiterClient:n,enableNativeBridgePairs:a,isBalanceHidden:!1}),{showSwapSellAssetSelectModalMultichain:o}=(0,m.useLegacyModals)();return Object.assign(Object.assign({},l),{onSellAssetClicked:o,t:e})})();return e(o).createElement(h,Object.assign({},t))},h=e(o).memo((({assetButtonTitle:t,decimals:n,formattedMaxSellAmount:a,sellFungible:l,notEnoughAssets:i,hasMinimumSellAmount:r,uiSellAmount:s,onSellAssetClicked:u,setMaxSellAmount:p,updateSellAmount:m})=>{const{chain:g,logoUri:f,symbol:w,tokenAddress:h}=l.data;return e(o).createElement(k,{roundedTop:!0},e(o).createElement(F,{onClick:u},e(o).createElement(c.EcosystemImage,{image:{type:"fungible",src:f,fallback:w||h},size:44,tokenType:l.type,chainMeta:g}),e(o).createElement(I,null,e(o).createElement(S,null,l.data.name),e(o).createElement(A,null,l.data.symbol)),e(o).createElement(d.IconChevronDownThin,{fill:"#999999"})),e(o).createElement(M,null,e(o).createElement(b.SwapperInput,{dropdownTestID:"swap-sell-asset-dropdown",assetButtonTitle:t,decimals:n,disabled:!1,hasWarning:i||!r,fungible:l,isLoadingAmount:!1,isLoadingAssets:!1,onClick:u,onUserInput:m,value:s,maxSellAmount:a,setMaxSellAmount:p,fontSize:28})))})),x=e(o).memo((({t:t,assetButtonTitle:n,buyAmount:a,decimals:l,buyFungible:i,isFetchingQuote:r,onBuyAssetClicked:s,onSwitchTokens:u,currencyValue:p})=>{if(!i)return e(o).createElement(v,{t:t,onClick:s});const{chain:m,logoUri:g,symbol:w,tokenAddress:h}=i.data;return e(o).createElement(e(o).Fragment,null,e(o).createElement(f,{onClick:u}),e(o).createElement(k,{roundedBottom:!0},e(o).createElement(F,{onClick:s},e(o).createElement(c.EcosystemImage,{image:{type:"fungible",src:g,fallback:w||h},size:44,tokenType:i.type,chainMeta:m}),e(o).createElement(I,null,e(o).createElement(S,null,i.data.name),e(o).createElement(A,null,i.data.symbol)),e(o).createElement(d.IconChevronDownThin,{fill:"#999999"})),e(o).createElement(M,null,e(o).createElement(b.SwapperInput,{dropdownTestID:"swap-buy-asset-dropdown",assetButtonTitle:n,decimals:l,disabled:!0,hasWarning:!1,fungible:i,isLoadingAmount:r,isLoadingAssets:!1,onClick:s,onUserInput:()=>{},value:a,currencyValue:p,fontSize:28}))))})),E=()=>{const t=(()=>{const{t:e}=(0,r.useTranslation)(),{showSwapBuyAssetSelectModalMultichain:t}=(0,m.useLegacyModals)(),n=(0,o.useCallback)((()=>{t()}),[t]),a=g.hooks.useSwapBuyAssetProps();return Object.assign(Object.assign({},a),{onBuyAssetClicked:n,t:e})})();return e(o).createElement(x,Object.assign({},t))},v=({t:t,onClick:n})=>e(o).createElement(e(o).Fragment,null,e(o).createElement(f,null),e(o).createElement(y,{onClick:n},e(o).createElement(F,null,e(o).createElement(B,null,e(o).createElement(d.IconPlusThin,{width:20})),e(o).createElement(I,null,e(o).createElement(A,{size:16,weight:600},t("swapSelectToken")))))),k=s.default.div`
  background: #2a2a2a;
  border-top-right-radius: ${e=>e.roundedTop?8:0}px;
  border-top-left-radius: ${e=>e.roundedTop?8:0}px;
  border-bottom-right-radius: ${e=>e.roundedBottom?8:0}px;
  border-bottom-left-radius: ${e=>e.roundedBottom?8:0}px;
  padding: 8px;
`,y=(0,s.default)(k).attrs({roundedBottom:!0})`
  cursor: pointer;
`,S=(0,s.default)(p.Text).attrs({size:16,color:"#FFF",weight:600,lineHeight:19,textAlign:"left"})``,A=(0,s.default)(p.Text).attrs((e=>({size:e.size||14,color:"#777",weight:e.weight||400,lineHeight:17,textAlign:"left"})))``,C=s.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 1px;
`,T=(0,s.default)(u.Circle).attrs({color:"#AB9FF2",diameter:32})`
  z-index: 0;
  cursor: pointer;
  &:hover {
    background: #e2dffe;
  }
  margin-top: -16px;
  margin-bottom: -16px;
`,B=(0,s.default)(u.Circle).attrs({color:"#181818",diameter:44})``,F=s.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #333333;
  }
  padding: 8px;
  border-radius: 8px;
`,I=s.default.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
`,M=s.default.div`
  padding: 0 0 8px 8px;
`})),n.register("4ti1J",(function(a,l){t(a.exports,"SwapperInput",(function(){return m}));var i=n("43063"),r=n("29o0l"),o=n("gkfw3"),s=n("kGh2H"),u=n("hiI91"),c=n("27SDj");const d=o.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  input {
    font-size: ${e=>{var t;return null!==(t=e.fontSize)&&void 0!==t?t:34}}px;
    line-height: 1;
    font-weight: 600;
    padding: 0;
    background: none;
  }
`,p=o.default.div`
  width: 100%;
  margin-top: 11px;
  margin-bottom: 10px;
`,m=({decimals:t,disabled:n,hasWarning:a,isLoadingAmount:l,value:o,name:m="amount","aria-labelledby":b,"aria-label":f,onUserInput:w,maxSellAmount:h,setMaxSellAmount:x,currencyValue:E,fontSize:v})=>{const{t:k}=(0,i.useTranslation)();return e(r).createElement(d,{hasWarning:a,fontSize:v},l?e(r).createElement(p,null,e(r).createElement(u.SkeletonLoader,{width:"100px",height:"20px",backgroundColor:"#434343",borderRadius:"10px"})):e(r).createElement(s.NumericalInput,{"aria-labelledby":b,"aria-label":f,name:m,border:"0",placeholder:"0",warning:a,value:o,decimalLimit:t,disabled:n,onUserInput:w}),h&&void 0!==x&&e(r).createElement(g,{onClick:x},k("maxInputMax")),l?e(r).createElement(u.SkeletonLoader,{width:"50px",height:"12px",backgroundColor:"#434343",borderRadius:"10px"}):E?e(r).createElement(c.Text,{size:16,color:"#777"},E):void 0)},g=o.default.div`
  color: #ab9ff2;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 8px;
  padding: 8px;
  &:hover {
    background-color: #333333;
  }
`})),n.register("6qYpc",(function(a,l){t(a.exports,"SwapWrapper",(function(){return p}));var i=n("iOvk1"),r=n("43063"),o=n("29o0l"),s=n("gkfw3"),u=n("gX5Te"),c=n("edvyb");const d=s.default.div`
  display: flex;
  flex: 1;
  padding-bottom: 16px;
  margin-bottom: -16px; // fix extension padding issue when scrollable or not
`,p=e(o).memo((({children:t})=>{const n=u.hooks.useSelectedNetworks().every((e=>i.Chains.isMainnetNetworkID(e))),{t:a}=(0,r.useTranslation)(),l=(0,o.useMemo)((()=>({availableOnlyOnMainnet:a("swapAvailableOnMainnet")})),[a]);return n?e(o).createElement(d,null,t):e(o).createElement(c.SwapNotAvailableWrapper,{message:l.availableOnlyOnMainnet,swapDisabled:!0},t)}))}))}();
//# sourceMappingURL=swap-multichain.525718f6.js.map
define=__define;})(window.define);