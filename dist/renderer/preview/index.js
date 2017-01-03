module.exports=webpackJsonp([6],{0:function(e,t,a){a(559),e.exports=a(2031)},255:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function n(){return{}}function u(e){return{menubarLayoutActions:(0,M.bindActionCreators)(o,e),dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var M=a(6),r=a(5),s=a(326),o=l(s),c=a(54),d=l(c),j=a(32),L=a(1),N=i(L),f=a(2),C=i(f),y=a(593),I=i(y),m=a(26),T=i(m),w=a(158),D=i(w),g=a(22),p=i(g),k=a(311),z=i(k),E=a(63),x=i(E),O=a(187),v=i(O),A=t.Component=N.default.createClass({displayName:"Component",render:function(){var e=this.props,t=e.menu,a=e.menubarLayoutActions,i=e.children,l=e.dispatch,n=[{label:"Open main window",onClick:function(){return l(d.show("main"))}},{label:"Preferences",onClick:function(){return l((0,j.push)({pathname:"/settings/application",state:{meta:{scope:["main"]}}}))}},{label:"Account Settings",onClick:function(){return l((0,j.push)({pathname:"/settings/account",state:{meta:{scope:["main"]}}}))}},{label:"Quit Stemn",divider:!0,onClick:function(){return l(d.quit())}}],u=t?{marginLeft:"5px"}:{};return N.default.createElement("div",{className:(0,C.default)(I.default.toolbar,"layout-row layout-align-start-center")},t?N.default.createElement(p.default,{color:"white",title:"Projects Menu",onClick:function(){return a.toggleSidebar(!0)}},N.default.createElement(z.default,{size:"22"})):"",N.default.createElement("div",{className:"flex layout-row layout-align-start-center",style:u},i),N.default.createElement(p.default,{color:"white",onClick:function(){return l(d.show("main"))},title:"Open main window"},N.default.createElement(v.default,{size:"20px"})),N.default.createElement(T.default,{preferPlace:"below"},N.default.createElement(p.default,{title:"Options",color:"white"},N.default.createElement(x.default,{size:"20px"})),N.default.createElement(D.default,{menu:n})))}});t.default=(0,r.connect)(n,u)(A)},326:function(e,t){"use strict";function a(e){return{type:"MENUBAR_LAYOUT/TOGGLE_SIDEBAR",payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.toggleSidebar=a},536:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNTBweCIgaGVpZ2h0PSIxNTBweCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE1MCAxNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjMjkyRTMzIiBkPSJNMTE1LjEzMyw4My4yNDJoLTkuMTZ2LTRsNy43NiwwLjAwNmMwLjE2OS0wLjAxMiwwLjMyMS0wLjAxLDAuNDM5LTAuMDA4bDAuMjU4LDAuMDAyCgkJCQljMy4zNzksMCw2LjEyNy0yLjc1LDYuMTI3LTYuMTNjMC0zLjMyOS0yLjYwNy02LjAxNS01LjkzNi02LjExMmwtMi4xNzktMC4wNjRsMC4yNTEtMi4xNjRjMC4wODEtMC43MDUsMC4xMTktMS4zMDEsMC4xMTktMS44NzMKCQkJCWMwLTguNjg2LTcuMDY1LTE1Ljc1Mi0xNS43NS0xNS43NTJjLTEuNDA2LDAtMi44NCwwLjIwMi00LjI2LDAuNmwtMi4yMDksMC42MTlsLTAuMzEyLTIuMjczCgkJCQljLTEuNjItMTEuODI4LTExLjg1Ny0yMC43NDgtMjMuODEzLTIwLjc0OGMtMTMuMjYxLDAtMjQuMDQ5LDEwLjc4NS0yNC4wNDksMjQuMDQzbDAuMDA0LDEuOTU4bC0xLjc3MywwLjIwMgoJCQkJYy03LjAxNCwwLjgtMTIuMzAzLDYuNzMxLTEyLjMwMywxMy43OThjMCw3LjY2Myw2LjIzMiwxMy44OTcsMTMuODkzLDEzLjg5N3Y0Yy05Ljg2NiwwLTE3Ljg5My04LjAyOS0xNy44OTMtMTcuODk3CgkJCQljMC04LjUwOSw1Ljk1NS0xNS43MzksMTQuMTEzLTE3LjQ4N2MwLjc5Ni0xNC43NTYsMTMuMDU1LTI2LjUxNCwyOC4wMDgtMjYuNTE0YzEzLjIxNywwLDI0LjYzNCw5LjM0OCwyNy4zOTksMjIuMDcyCgkJCQljMS4wNjYtMC4xNzgsMi4xMzUtMC4yNywzLjE5NC0wLjI3YzEwLjg5MSwwLDE5Ljc1LDguODYxLDE5Ljc1LDE5Ljc1MmMwLDAuMTIzLTAuMDAxLDAuMjQ4LTAuMDA0LDAuMzc0CgkJCQljNC40NzksMS4wNTgsNy43NDgsNS4wNDUsNy43NDgsOS44NGMwLDUuMzQ1LTQuMTYxLDkuNzM3LTkuNDE0LDEwLjEwNEwxMTUuMTMzLDgzLjI0MnoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYyLjY0MSw1Ny4zNjhoLTcuMzk1Yy00LjMyMiwwLTcuODMsMy40NjItNy45MTgsNy43NjRsLTAuMDA4LDF2NDkuOTMzbDAuMDIzLTIKCQkJCWMtMC4wMS0wLjE1LTAuMDIzLDEuNzA0LTAuMDIzLDEuNTU0YzAtNC4zNzgsMy41NDktNy45MjksNy45MjYtNy45MjloNDUuOTA4VjU3LjM2OGgtMjcuMThINjIuNjQxeiIvPgoJCQk8cGF0aCBmaWxsPSIjMjkyRTMzIiBkPSJNNDcuMzEzLDExNy42MjdoLTAuMDAzbC0xLjk5LTAuMDFsMC4wMDgtNTIuNTAxYzAuMTEtNS4zODcsNC41NTktOS43NDgsOS45MTgtOS43NDhoNy4zOTV2NGgtNy4zOTUKCQkJCWMtMy4xOTgsMC01Ljg1MywyLjYwNC01LjkxOCw1LjgwNmwtMC4wMDgsMC45NzR2NDEuNTExYzEuNjU1LTEuMjM2LDMuNzA2LTEuOTY5LDUuOTI2LTEuOTY5aDQzLjkwOFY1OS4zNjhoLTI1LjE4di00aDI5LjE4CgkJCQl2NTQuMzIxSDU1LjI0NmMtMy4xNTUsMC01Ljc0MywyLjQ4Mi01LjkxNyw1LjU5NmwtMC4wMDksMC44MDNoLTAuMDc0QzQ4Ljg5LDExNy42MDEsNDcuNDA5LDExNy42MjcsNDcuMzEzLDExNy42Mjd6Ii8+CgkJPC9nPgoJCTxyZWN0IHg9IjU5LjQ3MyIgeT0iNjIuNzg0IiBmaWxsPSIjQjdCRUMwIiB3aWR0aD0iMzYuMjY2IiBoZWlnaHQ9IjM5LjQ4OSIvPgoJCTxnPgoJCQk8Zz4KCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMDEuMTU0LDEwNy42ODlIODcuODM2aC0zMi41OWMtNC4zNzcsMC03LjkyNiwzLjU1MS03LjkyNiw3LjkyOWMwLDQuMzc2LDMuNTQ5LDcuOTI1LDcuOTI2LDcuOTI1CgkJCQkJaDMyLjU5aDEzLjMxOFYxMDcuNjg5eiIvPgoJCQkJPHBhdGggZmlsbD0iIzI5MkUzMyIgZD0iTTEwMy4xNTQsMTI1LjU0M0g1NS4yNDZjLTUuNDczLDAtOS45MjYtNC40NTItOS45MjYtOS45MjVjMC01LjQ3NSw0LjQ1My05LjkyOSw5LjkyNi05LjkyOWg0Ny45MDgKCQkJCQlWMTI1LjU0M3ogTTU1LjI0NiwxMDkuNjg5Yy0zLjI2OCwwLTUuOTI2LDIuNjYtNS45MjYsNS45MjljMCwzLjI2NywyLjY1OCw1LjkyNSw1LjkyNiw1LjkyNWg0My45MDh2LTExLjg1NEg1NS4yNDZ6Ii8+CgkJCTwvZz4KCQk8L2c+CgkJPHBvbHlnb24gZmlsbD0iIzMzQzFEOCIgcG9pbnRzPSI3MC42ODgsMTI5LjkwNiA2NC45MzgsMTI2LjI2IDU5LjE4OCwxMjkuOTA2IDU5LjE4OCwxMTYuMzAxIDY0LjkzOCwxMTYuMzAxIDcwLjY4OCwxMTYuMzAxIAkJIi8+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01NC42NTYsMTE2LjA3aDQ2LjQ5OEg1NC42NTZ6Ii8+CgkJCTxyZWN0IHg9IjU0LjY1NiIgeT0iMTE0LjA3IiBmaWxsPSIjMjkyRTMzIiB3aWR0aD0iNDYuNDk4IiBoZWlnaHQ9IjQiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01NC42NTYsMTA3LjJWNTguMTMyVjEwNy4yeiIvPgoJCQk8cmVjdCB4PSI1Mi42NTYiIHk9IjU4LjEzMiIgZmlsbD0iIzI5MkUzMyIgd2lkdGg9IjQiIGhlaWdodD0iNDkuMDY4Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxnPgoJCQkJPHBvbHlnb24gZmlsbD0iIzI5MkUzMyIgcG9pbnRzPSI3NS41MjIsNDguNDM4IDY4LjM1Miw0MS4yNzMgNjEuMTg0LDQ4LjQzOCA1OC4zNTUsNDUuNjA3IDY4LjM1MiwzNS42MTkgNzguMzQ5LDQ1LjYwNyAJCQkJIi8+CgkJCTwvZz4KCQk8L2c+CgkJPGc+CgkJCTxyZWN0IHg9IjY2LjU3NiIgeT0iNDEuMTQ2IiBmaWxsPSIjMjkyRTMzIiB3aWR0aD0iNCIgaGVpZ2h0PSIyNi40NjIiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPGc+CgkJCQk8cG9seWdvbiBmaWxsPSIjMjkyRTMzIiBwb2ludHM9Ijc5LjY5NSw5NC44NTcgNjkuNjk4LDg0Ljg2OSA3Mi41MjQsODIuMDM5IDc5LjY5NSw4OS4yMDMgODYuODYzLDgyLjAzOSA4OS42OTEsODQuODY5IAkJCQkiLz4KCQkJPC9nPgoJCTwvZz4KCQk8Zz4KCQkJPHJlY3QgeD0iNzcuNDcxIiB5PSI2Mi44NjgiIGZpbGw9IiMyOTJFMzMiIHdpZHRoPSI0IiBoZWlnaHQ9IjI2LjQ2MiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},593:function(e,t){e.exports={primary:"rgb(68, 154, 211)",border1:"rgba(0, 0, 0, 0.1)",toolbar:"Toolbar-toolbar-🕚🚶🏽🤒🛀🏽👁🇹🇳"}},941:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),n=i(l),u=a(2356),M=i(u);t.default=n.default.createClass({displayName:"SectionTitle",render:function(){var e=this.props,t=e.children,a=e.style;return n.default.createElement("div",{className:M.default.section+" layout-row",style:a},n.default.createElement("div",{className:M.default.text},t))}}),e.exports=t.default},977:function(e,t){e.exports={primary:"rgb(68, 154, 211)",border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)","height-header":"50px","width-header-buttons":"100px",sidebar:"PagePreview-sidebar-🐆🙍🏻🇮🇴🇱🇦🆒👉🏽",timeline:"PagePreview-timeline-🙋🏻👸🏿👩🏿🌉🍩🍷",header:"PagePreview-header-🌿💃🙆🏿💚🎋✋🏽",divider:"PagePreview-divider-🏇🏿🇲🇬🛐🇬🇼👸👞"}},1886:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNTBweCIgaGVpZ2h0PSIxNTBweCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE1MCAxNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNODguNzk1LDU5LjkzN2MtMC4wMDQtNS45NTEtMi4zMTYtMTEuNTQxLTYuNTE4LTE1LjczNmMtNC4yMDUtNC4yMDktOS44MDgtNi41MjEtMTUuNzcyLTYuNTA4CgkJCQljLTUuOTM4LDAuMDE2LTExLjUxNywyLjMzLTE1LjY5Nyw2LjUxNWMtOC42NzIsOC42NzctOC42NzQsMjIuNzk5LDAuMDA4LDMxLjQ3YzQuMjEsNC4yMTEsOS44MTksNi41MiwxNS43ODQsNi41MQoJCQkJYzUuOTM3LTAuMDE0LDExLjUwNS0yLjMyOCwxNS42ODktNi41MTJDODYuNDg2LDcxLjQ3Niw4OC43OTksNjUuODg2LDg4Ljc5NSw1OS45Mzd6Ii8+CgkJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik02Ni41NjMsODQuMTg4Yy02LjQ5MiwwLTEyLjU4Ni0yLjUyLTE3LjE2Mi03LjA5NmMtNC41NzQtNC41Ny03LjA5Ni0xMC42NjEtNy4wOTYtMTcuMTQ3CgkJCQljLTAuMDAyLTYuNDg0LDIuNTE2LTEyLjU3Niw3LjA4OC0xNy4xNWM0LjU1OC00LjU2MywxMC42MzMtNy4wODQsMTcuMTA3LTcuMTAyYzYuNTM1LDAsMTIuNjIxLDIuNTIsMTcuMTkzLDcuMDk1CgkJCQljNC41NzQsNC41NjksNy4wOTgsMTAuNjU5LDcuMTAyLDE3LjE0N2MwLjAwNCw2LjQ4Mi0yLjUxNCwxMi41NzQtNy4wOTIsMTcuMTU1Yy00LjU2Myw0LjU2My0xMC42MzUsNy4wODQtMTcuMDk5LDcuMDk4SDY2LjU2M3oKCQkJCSBNNjYuNTU2LDM5LjY5M2MtNS40NTQsMC4wMTQtMTAuNTI4LDIuMTE5LTE0LjMzMyw1LjkyOGMtMy44MTcsMy44Mi01LjkyLDguOTA2LTUuOTE5LDE0LjMyNAoJCQkJYzAuMDAxLDUuNDE3LDIuMTA0LDEwLjUwMiw1LjkyNSwxNC4zMTZjMy44MiwzLjgyMyw4LjkxLDUuOTI2LDE0LjMzNCw1LjkyNnYybDAuMDMzLTJjNS4zOTgtMC4wMTIsMTAuNDY4LTIuMTE3LDE0LjI3OS01LjkyNgoJCQkJYzMuODItMy44MjMsNS45MjQtOC45MSw1LjkyLTE0LjMyM2MtMC4wMDQtNS40Mi0yLjEwOS0xMC41MDYtNS45My0xNC4zMjFDNzcuMDQ3LDQxLjc5NSw3MS45NjYsMzkuNjkzLDY2LjU1NiwzOS42OTN6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjMzBDMEQ4IiBkPSJNNzguNzAxLDcyLjAzNWMtMy4yNTIsMy4yNjQtNy41NjUsNS4wNTctMTIuMTUzLDUuMDU5Yy05LjQ1OSwwLjAwOC0xNy4xNTQtNy42ODQtMTcuMTUyLTE3LjE0NQoJCQkJYzAtNC41NjQsMS43NzctOC44Niw1LjAwNi0xMi4xMDRjMy4yNDgtMy4yNiw3LjU2MS01LjA1MywxMi4xNDEtNS4wNTNjNC41NzgtMC4wMDIsOC44ODEsMS43NzcsMTIuMTI3LDUuMDI3CgkJCQljMy4yNDQsMy4yMzgsNS4wMzEsNy41NDksNS4wMzUsMTIuMTJDODMuNzA3LDY0LjUsODEuOTMyLDY4Ljc5NCw3OC43MDEsNzIuMDM1eiIvPgoJCQk8Zz4KCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01NS4zOCw1OS45NDdoLTRjMC0zLjk0OSwxLjUzOC03LjY2Nyw0LjMyOS0xMC40NjljMi44MDYtMi44MTgsNi41MzUtNC4zNywxMC41MDEtNC4zN3Y0CgkJCQkJYy0yLjg5NCwwLTUuNjE2LDEuMTM0LTcuNjY3LDMuMTkyQzU2LjUwMyw1NC4zNDgsNTUuMzgsNTcuMDY0LDU1LjM4LDU5Ljk0N3oiLz4KCQkJPC9nPgoJCTwvZz4KCQk8cmVjdCB4PSI2MC4wMzciIHk9Ijk0Ljg0IiBmaWxsPSIjQjdCRUMwIiB3aWR0aD0iMTMuMDI3IiBoZWlnaHQ9IjIxLjE4Ii8+CgkJPGc+CgkJCTxyZWN0IHg9IjYyLjAwNiIgeT0iOTAuMzQxIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iOS4wODgiIGhlaWdodD0iNC40NTMiLz4KCQkJPHBvbHlnb24gZmlsbD0iIzI4MkQzMyIgcG9pbnRzPSI2NC4wMDUsOTQuNzkzIDYwLjAwNSw5NC43OTMgNjAuMDA4LDg4LjM0IDczLjA5NSw4OC4zNDIgNzMuMDk1LDk0Ljc5MyA2OS4wOTUsOTQuNzkzCgkJCQk2OS4wOTUsOTIuMzQyIDY0LjAwNiw5Mi4zNCAJCQkiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik03MS4wOTUsMTE2LjAyYzAsMC43MjUsMCwxLjQ1My0wLjAwMiwyLjE4MmMtMi41MDYsMi41MS02LjU3NiwyLjUxLTkuMDg4LTAuMDAyYzAtMC43MjcsMC0xLjQ1MywwLTIuMTgKCQkJCUg3MS4wOTV6Ii8+CgkJCTxwYXRoIGZpbGw9IiMyODJEMzMiIGQ9Ik02Ni41NTMsMTIyLjA4MmMtMC4wMDIsMC0wLjAwMiwwLTAuMDAyLDBjLTIuMjUxLDAtNC4zNjctMC44NzctNS45Ni0yLjQ2OWwtMC41ODYtMC41ODR2LTMuMDFoNHYxLjI2CgkJCQljMC43NDEsMC41MjEsMS42MjIsMC44MDMsMi41NDYsMC44MDNjMC4wMDEsMCwwLjAwMSwwLDAuMDAxLDBjMC45MjQsMCwxLjgwNC0wLjI3OSwyLjU0Mi0wLjgwMWwwLjAwMS0xLjI2Mmg0bC0wLjAwNSwzLjAxMgoJCQkJbC0wLjU4MiwwLjU4NEM3MC45MTgsMTIxLjIwNyw2OC44MDMsMTIyLjA4Miw2Ni41NTMsMTIyLjA4MnoiLz4KCQk8L2c+CgkJPGc+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPHJlY3QgeD0iNjcuOTg4IiB5PSI4Mi4zNSIgZmlsbD0iIzI4MkQzMyIgd2lkdGg9IjQiIGhlaWdodD0iNi44NTIiLz4KCQkJCTwvZz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxnPgoJCQkJCTxyZWN0IHg9IjYxLjExMyIgeT0iODIuMzUiIGZpbGw9IiMyODJEMzMiIHdpZHRoPSI0IiBoZWlnaHQ9IjYuODUyIi8+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjMjgyRDMzIiBkPSJNMTE1LjgxMSw5Mi4yMTNjLTAuMTIzLDAtMC4yNDYtMC4wMDItMC4zNjctMC4wMDhsLTAuMzQ2LDAuMDA4SDc2Ljczdi00aDM2Ljk2NWwwLjA0NS0wLjEyM2wxLjU0MSwwLjA5NAoJCQljMC4xNzYsMC4wMTYsMC4zNSwwLjAyOSwwLjUyOSwwLjAyOWMzLjQ3MSwwLDYuMjk1LTIuODI0LDYuMjk1LTYuMjk3YzAtMy40MjItMi42OC02LjE4Mi02LjEwMi02LjI4MWwtMi4xNzgtMC4wNjRsMC4yNS0yLjE2NwoJCQljMC4wODItMC43MDMsMC4xMjMtMS4zMjgsMC4xMjMtMS45MTRjMC04Ljg5LTcuMjMtMTYuMTIxLTE2LjExNy0xNi4xMjFjLTAuNjM3LDAtMS4yOTUsMC4wNDUtMi4wMSwwLjEzN2wtMS44MjIsMC4yMzYKCQkJbC0wLjM4OS0xLjc5NmMtMS4xMzUtNS4yNC0zLjc1LTEwLjAyMi03LjU2My0xMy44MjljLTUuMjg1LTUuMjg5LTEyLjMxNS04LjE5OS0xOS44MDQtOC4xOTljLTAuMDIxLDAtMC4wNDIsMC0wLjA2MywwCgkJCWMtNy40ODIsMC4wMi0xNC41MDUsMi45MzQtMTkuNzcyLDguMjA2Yy00Ljk5NCw0Ljk5Ni03Ljg5NCwxMS42NTEtOC4xNjQsMTguNzM5bC0wLjA1MiwxLjMzNmwtMS4yNTMsMC40NjMKCQkJYy01LjU2LDIuMDU3LTkuMjk1LDcuNDEyLTkuMjk1LDEzLjMyNGMwLDcuODQ2LDYuMzgxLDE0LjIyNywxNC4yMjUsMTQuMjI3aDE0LjI1MXY0SDQyLjEyYy0xMC4wNDksMC0xOC4yMjUtOC4xNzYtMTguMjI1LTE4LjIyNwoJCQljMC03LjEzMyw0LjI0LTEzLjYzMywxMC42NzgtMTYuNTY4YzAuNTk1LTcuNjExLDMuODU0LTE0LjcxNSw5LjI1Ni0yMC4xMjFjNi4wMjEtNi4wMjUsMTQuMDQ1LTkuMzU2LDIyLjU5NC05LjM3OQoJCQljMC4wMjMsMCwwLjA0OSwwLDAuMDcyLDBjOC41NTksMCwxNi41OTMsMy4zMjYsMjIuNjMyLDkuMzdjMy45MzgsMy45MzEsNi43NTgsOC43NzUsOC4yMjMsMTQuMDk2CgkJCWMwLjI0Ni0wLjAxMSwwLjQ4OC0wLjAxNSwwLjczMi0wLjAxNWMxMS4wOTIsMCwyMC4xMTcsOS4wMjUsMjAuMTE3LDIwLjEyMWMwLDAuMTM3LTAuMDAyLDAuMjczLTAuMDA2LDAuNDE0CgkJCWM0LjU3MiwxLjA2Myw3LjkxMiw1LjEyNSw3LjkxMiwxMC4wMTJDMTI2LjEwNSw4Ny41OTQsMTIxLjQ4Niw5Mi4yMTMsMTE1LjgxMSw5Mi4yMTN6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="},2031:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function i(l,n){try{var u=t[l](n),M=u.value}catch(e){return void a(e)}return u.done?void e(M):Promise.resolve(M).then(function(e){i("next",e)},function(e){i("throw",e)})}return i("next")})}}var n=function(){var e=l(regeneratorRuntime.mark(function e(){var t,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("sessionState");case 2:t=e.sent,a=(0,j.default)(t),i=(0,c.syncHistoryWithStore)(o.hashHistory,a),(0,T.default)(a),(0,r.render)(M.default.createElement(s.Provider,{store:a},M.default.createElement(o.Router,{history:i,routes:(0,N.default)(a)})),document.getElementById("root"));case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();a(554);var u=a(1),M=i(u),r=a(38),s=a(5),o=a(30),c=a(32),d=a(558),j=i(d),L=a(2038),N=i(L),f=a(469),C=i(f),y=a(408),I=i(y),m=a(555),T=i(m),w=(0,C.default)(I.default);n()},2032:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.auth;return{auth:t}}function n(e){return{dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var u=a(5),M=a(32),r=a(1),s=i(r),o=t.Component=s.default.createClass({displayName:"Component",componentWillReceiveProps:function(e,t){e.auth.authToken&&e.auth.user._id||e.dispatch((0,M.push)("/login"))},render:function(){var e=this.props.children;return e}});t.default=(0,u.connect)(l,n)(o)},2033:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.children;return u.default.createElement("div",{className:"layout-column flex"},u.default.createElement(o.default,null),t,u.default.createElement(r.default,{types:["FILE_DOWNLOAD"]}))}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),u=i(n),M=a(915),r=i(M),s=a(316),o=i(s);l.propTypes={children:n.PropTypes.element.isRequired},t.default=l,e.exports=t.default},2034:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.auth;return{auth:t}}function n(e){return{dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var u=a(5),M=a(32),r=a(1),s=i(r),o=t.Component=s.default.createClass({displayName:"Component",componentWillReceiveProps:function(e,t){e.auth.authToken&&e.auth.user._id&&e.dispatch((0,M.push)("/"))},render:function(){var e=this.props.children;return e}});t.default=(0,u.connect)(l,n)(o)},2035:function(e,t,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function n(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var u=(a(6),a(5)),M=a(1),r=l(M),s=a(54),o=i(s),c=a(2),d=(l(c),a(255)),j=(l(d),a(536)),L=l(j),N=a(25),f=l(N),C=t.Component=r.default.createClass({displayName:"Component",render:function(){var e=this.props,t=(e.AuthActions,e.auth,e.dispatch);return r.default.createElement("div",{className:"flex layout-column layout-align-center-center text-center"},r.default.createElement("div",{style:{maxWidth:"300px"}},r.default.createElement("img",{src:L.default,style:{width:"100px",height:"100px"}}),r.default.createElement("div",{className:"text-title-4",style:{marginBottom:"10px"}},"Connect to Stemn"),r.default.createElement("div",{className:"text-title-5",style:{marginBottom:"20px"}},"You must be logged in to Stemn Desktop before you can preview files."),r.default.createElement(f.default,{onClick:function(){return t(o.show("main"))},className:"primary"},"Get started")))}});t.default=(0,u.connect)(n)(C)},2036:function(e,t,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var a=e.files,i=t.location,l=i.query,n=l.localPath,u=l.revisionId,M=l.fileId,r=l.projectId;M=M||(a.pathToId[n]?a.pathToId[n].data:"");var s=n?M:M+"-"+u;return{localPath:n,fileId:M,revisionId:u,projectId:r,fileMeta:a.fileMeta[s]}}function u(e){return{filesActions:(0,M.bindActionCreators)(j,e),syncTimelineActions:(0,M.bindActionCreators)(N,e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var M=a(6),r=a(5),s=a(1),o=l(s),c=a(7),d=a(160),j=i(d),L=a(256),N=i(L),f=a(16),C=(l(f),a(2037)),y=l(C),I=a(1886),m=l(I),T=a(977),w=(l(T),t.Component=o.default.createClass({displayName:"Component",onMount:function(e,t){var a=(0,c.has)(e,"fileMeta.data")&&!e.fileMeta.loading,i=t?t.localPath+t.projectId+t.fileId+t.revisionId:"",l=e?e.localPath+e.projectId+e.fileId+e.revisionId:"";i!=l&&(e.localPath?e.filesActions.getMetaFromPath({path:e.localPath}):a||e.filesActions.getMeta({projectId:e.projectId,fileId:e.fileId,revisionId:e.revisionId}))},componentWillReceiveProps:function(e){this.onMount(e,this.props)},componentWillMount:function(){this.onMount(this.props)},render:function(){var e=this.props.fileMeta,t=e&&!e.loading&&!e.data;return o.default.createElement("div",{className:"layout-column flex"},t?o.default.createElement("div",{className:"flex layout-column layout-align-center-center text-center"},o.default.createElement("div",{style:{maxWidth:"300px"}},o.default.createElement("img",{src:m.default,style:{width:"100px",height:"100px"}}),o.default.createElement("div",{className:"text-title-4",style:{marginBottom:"10px"}},"Could not locate this file"),o.default.createElement("div",{className:"text-title-5",style:{marginBottom:"20px"}},"This file could not be found in your connected cloud providers."))):o.default.createElement(y.default,{fileMeta:e}))}}));t.default=(0,r.connect)(n,u)(w)},2037:function(e,t,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var a=e.syncTimeline,i=e.files,l=t.fileMeta,n=l&&l.data&&l.data.fileId;return{syncTimeline:n?a[l.data.fileId]:[],relatedTasks:n?i.relatedTasks[l.data.fileId]:[]}}function u(e){return{syncTimelineActions:(0,M.bindActionCreators)(I,e),filesActions:(0,M.bindActionCreators)(C,e),dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var M=a(6),r=a(5),s=a(1),o=l(s),c=a(2),d=(l(c),a(7)),j=a(20),L=l(j),N=a(161),f=a(160),C=i(f),y=a(256),I=i(y),m=a(37),T=i(m),w=a(54),D=i(w),g=a(32),p=a(550),k=a(907),z=l(k),E=a(324),x=l(E),O=a(253),v=l(O),A=a(911),S=l(A),Q=a(908),h=l(Q),b=a(16),P=(l(b),a(2082)),J=l(P),Y=a(939),U=l(Y),Z=a(941),G=l(Z),R=a(2057),_=l(R),W=a(2080),B=l(W),H=a(977),K=l(H),F=t.Component=o.default.createClass({displayName:"Component",onMount:function(e,t){var a=(0,d.has)(e,"fileMeta.data"),i=(0,d.has)(t,"fileMeta.data")?t.fileMeta.data.fileId+"-"+t.fileMeta.data.revisionId:"",l=(0,d.has)(e,"fileMeta.data")?e.fileMeta.data.fileId+"-"+e.fileMeta.data.revisionId:"",n=i!=l;a&&n&&((0,d.has)(e,"fileMeta.data.project._id")?(e.syncTimelineActions.fetchTimeline({projectId:e.fileMeta.data.project._id,fileId:e.fileMeta.data.fileId}),e.filesActions.getRelatedTasks({fileId:e.fileMeta.data.fileId,projectId:e.fileMeta.data.project._id})):e.syncTimelineActions.fetchTimeline({fileId:e.fileMeta.data.fileId,provider:e.fileMeta.data.provider}),this.setState({selected1:e.fileMeta,selected2:void 0,lastSelected:1,mode:"single"}))},componentWillReceiveProps:function(e){this.onMount(e,this.props)},componentWillMount:function(){this.onMount(this.props)},getInitialState:function(){return{selected1:void 0,selected2:void 0,lastSelected:1,mode:"single"}},onSelect:function(e){var t="single"==this.state.mode||2==this.state.lastSelected?{selected1:e,lastSelected:1}:{selected2:e,lastSelected:2};this.setState(t)},changeMode:function(e,t){var a=this.state,i=a.selected1,l=a.selected2;if(!l){var n=t.findIndex(function(e){return e.data.fileId==i.data.fileId&&e.data.revisionId==i.data.revisionId});t[n-1]?l=t[n-1]:t[n+1]&&(l=t[n+1])}this.setState({mode:e,selected2:l})},isSelected:function(e){var t=!!(0,d.has)(this.state,"selected1.data.revisionId")&&e.data.revisionId==this.state.selected1.data.revisionId,a=!!(0,d.has)(this.state,"selected2.data.revisionId")&&e.data.revisionId==this.state.selected2.data.revisionId;return"single"==this.state.mode?t:t||a},clickCrumb:function(e){var t=e.file,a=this.props,i=a.dispatch,l=a.fileMeta;"file"==t.type?i((0,g.push)({pathname:"/",query:{fileId:t.fileId,revisionId:t.revisionId,projectId:t.project._id}})):l.data.project._id?(i((0,g.push)({pathname:"/project/"+l.data.project._id+"/files/"+t.fileId,state:{meta:{scope:["main"]}}})),i(D.show("main"))):console.log("Not linked to project - open folder")},clickTag:function(e){this.props.dispatch(T.showModal({modalType:"TASK",limit:1,modalProps:{taskId:e._id}})),this.props.dispatch(D.show("main"))},render:function(){var e=this,t=this.props,a=t.fileMeta,i=t.syncTimeline,l=t.relatedTasks,n=this.state,u=n.mode,M=n.selected1,r=n.selected2,s=a&&a.data,c=(s&&a.data.project&&a.data.project._id,(0,p.orderItemsByTime)(u,M,r)),j=c[0]?c[0].data:void 0,f=c[1]?c[1].data:void 0,C=i&&i.data?i.data.filter(function(e){return"revision"==e.event}):[];return o.default.createElement("div",{className:"layout-column flex"},o.default.createElement("div",{className:K.default.header+" layout-row layout-align-start-center"},o.default.createElement("div",{className:"flex"},s?o.default.createElement(S.default,{meta:a.data,clickFn:this.clickCrumb,popup:!0}):""),o.default.createElement(h.default,{file1:j,file2:f,revisions:C,mode:u,changeMode:this.changeMode}),o.default.createElement("div",{className:K.default.divider})),o.default.createElement("div",{className:"layout-row flex"},o.default.createElement("div",{className:"layout-column flex"},s?o.default.createElement(z.default,{project:a.data.project,file1:j,file2:f,mode:u,header:["sideBySide","aboveAndBelow"].includes(u)}):o.default.createElement("div",{className:"flex"}),o.default.createElement(x.default,{className:K.default.timeline,items:C,onSelect:this.onSelect,isSelected:this.isSelected,preferPlace:"above"})),o.default.createElement(v.default,{side:"left",width:"450",widthRange:[0,450],className:"layout-column"},o.default.createElement("aside",{className:K.default.sidebar+" layout-column flex",style:{minWidth:"400px",overflowY:"auto"}},o.default.createElement(G.default,{style:{marginBottom:"15px"}},"Meta"),s?o.default.createElement(U.default,null,o.default.createElement("tr",null,o.default.createElement("td",null,"Name"),o.default.createElement("td",null,a.data.name)),o.default.createElement("tr",null,o.default.createElement("td",null,"Size"),o.default.createElement("td",null,(0,N.formatBytes)(a.data.size))),o.default.createElement("tr",null,o.default.createElement("td",null,"Last modified"),o.default.createElement("td",null,(0,L.default)(a.data.modified).fromNow())),C.length>0?o.default.createElement("tr",null,o.default.createElement("td",null,"Revisions"),o.default.createElement("td",null,C.length)):null):null,s?o.default.createElement(_.default,{fileMeta:a,clickFn:this.clickCrumb}):null,l&&l.data&&l.data.length>0?o.default.createElement("div",null,o.default.createElement(G.default,{style:{margin:"30px 0 15px"}},"Related Tasks"),(0,d.orderBy)(l.data,["complete"]).map(function(t){return o.default.createElement(B.default,{key:t._id,text:t.name,onClick:function(){return e.clickTag(t)}})})):null,o.default.createElement(G.default,{style:{margin:"30px 0"}},"Timeline"),o.default.createElement("div",{className:"flex layout-column"},o.default.createElement(J.default,{items:i&&i.data?i.data:[]}))))))}});t.default=(0,r.connect)(n,u)(F)},2038:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),n=i(l),u=a(30),M=a(2033),r=i(M),s=a(2036),o=i(s),c=a(2035),d=i(c),j=a(2032),L=i(j),N=a(2034),f=i(N);t.default=function(e){return n.default.createElement(u.Route,{component:r.default},n.default.createElement(u.Route,{component:L.default},n.default.createElement(u.Route,{component:o.default,path:"/"})),n.default.createElement(u.Route,{component:f.default},n.default.createElement(u.Route,{component:d.default,path:"/login"})))},e.exports=t.default},2057:function(e,t,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.AssemblyParts=t.Row=void 0;var n=a(1),u=l(n),M=a(2345),r=l(M),s=a(5),o=a(7),c=a(20),d=l(c),j=a(933),L=a(160),N=i(L),f=a(941),C=l(f),y={fileMeta:n.PropTypes.object.isRequired,clickFn:n.PropTypes.func.isRequired},I=t.Row=u.default.createClass({displayName:"Row",render:function(){var e=this.props,t=e.file,a=e.clickFn,i=(0,d.default)(t.modified).fromNow();return u.default.createElement("a",{className:r.default.part+" layout-row",onClick:function(){return a({file:t})}},u.default.createElement("div",{className:"flex"},t.name),u.default.createElement("div",{className:r.default.time},i))}}),m=t.AssemblyParts=u.default.createClass({displayName:"AssemblyParts",propTypes:y,onMount:function(e,t){(!t||e.fileMeta!=t.fileMeta&&e.fileMeta.data)&&(0,j.isAssembly)(e.fileMeta.data.extension)&&e.dispatch(N.getAssemblyParts({fileId:e.fileMeta.data.fileId,projectId:e.fileMeta.data.project._id,revisionId:e.fileMeta.data.revisionId}))},componentDidMount:function(){this.onMount(this.props)},componentWillReceiveProps:function(e){this.onMount(e,this.props)},render:function(){var e=this.props,t=e.parts,a=e.assemblies,i=e.clickFn;if(t&&t.data){var l=(0,o.orderBy)(t.data,"name");return u.default.createElement("div",null,u.default.createElement(C.default,{style:{margin:"30px 0 15px"}},"Assembly Parts"),l.map(function(e){return u.default.createElement(I,{file:e,clickFn:i})}))}return a&&a.length>0?u.default.createElement("div",null,u.default.createElement(C.default,{style:{margin:"30px 0 15px"}},"Parent Assemblies"),a.map(function(e){return u.default.createElement(I,{file:e,clickFn:i})})):null}}),T=function(e,t){var a=e.files,i=t.fileMeta,l=i.data.fileId+"-"+i.data.revisionId,n=a.fileAssemblies[l],u=n?n.map(function(e){return a.fileMeta[e]&&a.fileMeta[e].data?a.fileMeta[e].data:void 0}):[];return{parts:a.fileAssemblyParts[l],assemblies:u}};t.default=(0,s.connect)(T)(m)},2080:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},n=a(1),u=i(n),M=a(159),r=a(7),s=a(2355),o=i(s);t.default=u.default.createClass({displayName:"Tag",render:function(){var e=this.props.text;return u.default.createElement("a",l({className:o.default.tag},(0,r.omit)(this.props,["text"])),(0,M.middle)(e,30))}}),e.exports=t.default},2081:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),n=i(l),u=a(20),M=i(u),r=a(2),s=(i(r),a(975)),o=i(s),c=a(64),d=i(c),j=a(546),L=i(j),N=a(924),f=i(N),C=a(556),y=i(C),I={revision:function(e){return n.default.createElement("span",null,"modified this file.")},commit:function(e){return n.default.createElement("span",null,"added this file to commit: ",n.default.createElement(y.default,{path:"/project/"+e.data.project._id+"/feed",show:!0,query:{item:e._id},scope:"main",className:"link-primary"},e.data.summary))}},m=function(e){return I[e.event]?I[e.event](e):n.default.createElement("span",null,"Unknown Event Type")};t.default=n.default.createClass({displayName:"TimelineItem",render:function(){var e=this.props.item;return"comment"==e.event?n.default.createElement(L.default,{commentId:e.comment}):n.default.createElement(f.default,{style:{marginLeft:"5px"}},n.default.createElement("div",{className:"layout-row layout-align-start-center flex"},n.default.createElement("div",{className:o.default.avatar},n.default.createElement(d.default,{picture:e.user.picture,size:"25px",shape:"square"})),n.default.createElement("div",null,n.default.createElement("b",null,e.user.name," "),n.default.createElement("span",{className:"text-grey-3",style:{lineHeight:"1.5em"}},m(e)," - ",(0,M.default)(e.timestamp).fromNow()))))}}),e.exports=t.default},2082:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),n=i(l),u=a(2),M=(i(u),a(2081)),r=i(M);t.default=n.default.createClass({displayName:"TimelineVertical",render:function(){var e=this.props.items;return n.default.createElement("div",null,e.map(function(e){return n.default.createElement(r.default,{key:e._id,item:e})}))}}),e.exports=t.default},2345:function(e,t){e.exports={part:"AssemblyParts-part-👻🐞🇦🇬📫🇻🇳💅🏿",time:"AssemblyParts-time-🇬🇱🙋🏼🔗🚠🆓🕳"}},2355:function(e,t){e.exports={border2:"rgba(0, 0, 0, 0.3)",border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",tag:"Tag-tag-🇻🇬🕶🇨🇳🙌🏼🍼🈁"}},2356:function(e,t){e.exports={secondary:"rgba(0, 0, 0, 0.7)",border1:"rgba(0, 0, 0, 0.1)",bg1:"rgba(0, 0, 0, 0.03)",section:"SectionTitle-section-👋🐔👩‍👩‍👦‍👦😲🌦🎨",text:"SectionTitle-text-🆖🍢🎑🖲👨‍👨‍👦‍👦📌"}}});