(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[218],{60218:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ITableOfContentsRegistry:()=>h,TOCItem:()=>J,TableOfContents:()=>Q,TableOfContentsRegistry:()=>u,createLatexGenerator:()=>o,createMarkdownGenerator:()=>y,createNotebookGenerator:()=>G,createPythonGenerator:()=>V,createRenderedMarkdownGenerator:()=>k,runNestedCodeCells:()=>X});const s={part:1,chapter:1,section:1,subsection:2,subsubsection:3,paragraph:4,subparagraph:5};function l(e){let t=e.content.model.mimeType;return"text/x-latex"===t||"text/x-stex"===t}function r(e){let t=e.content.model.value.text.split("\n");t=function(e){for(let t=0;t<e.length;t++)e[t]=[e[t],t];return e}(t);let n=[];for(let e=0;e<t.length;e++){const r=/^\s*\\(section|subsection|subsubsection){(.+)}/,o=t[e][0].match(r);o&&n.push({text:o[2],level:s[o[1]],onClick:l(t[e][1])})}return n;function l(t){return()=>{e.content.editor.setCursorPosition({line:t,column:0})}}}function o(e){return{tracker:e,usesLatex:!0,isEnabled:l,generate:r}}var i=n(57630);function a(e){return"text/x-ipythongfm"===e||"text/x-markdown"===e||"text/x-gfm"===e||"text/markdown"===e}var c=n(9727),d=n(75138);const h=new c.Token("@jupyterlab/toc:ITableOfContentsRegistry");class u{constructor(){this._collapseChanged=new d.Signal(this),this._generators=[]}find(e){for(let t=0;t<this._generators.length;t++){const n=this._generators[t];if(n.tracker.has(e)){if(n.isEnabled&&!n.isEnabled(e))continue;return n}}}add(e){e.collapseChanged&&e.collapseChanged.connect(((e,t)=>{this._collapseChanged.emit(t)})),this._generators.push(e)}get collapseChanged(){return this._collapseChanged}}!function(e){e.IOptionsManager=class{}}(u||(u={}));class g extends u.IOptionsManager{constructor(e,t){super(),this._numbering=t.numbering,this._numberingH1=t.numberingH1,this._widget=e,this.translator=t.translator||i.nullTranslator,this.sanitizer=t.sanitizer}set numbering(e){this._numbering=e,this._widget.update()}get numbering(){return this._numbering}set numberingH1(e){this._numberingH1!=e&&(this._numberingH1=e,this._widget.update())}get numberingH1(){return this._numberingH1}initializeOptions(e,t){this._numbering=e,this._numberingH1=t,this._widget.update()}}var m=n(2411);const p={allowedTags:["p","blockquote","b","i","strong","em","strike","code","br","div","span","pre","del"],allowedAttributes:{code:["class"],span:["class"],div:["class"],p:["class"],pre:["class"]}};function f(e,t){let n,s="toc-level-size-"+t.level,l=t.numbering&&e.numbering?t.numbering:"";if(t.html){let r=e.sanitizer.sanitize(t.html,p);n=m.createElement("span",{dangerouslySetInnerHTML:{__html:l+r},className:"toc-markdown-cell "+s})}else n=m.createElement("span",{className:s}," ",l+t.text);return n}var _=n(65995);function b(e){return class extends m.Component{constructor(t){super(t),this.state={numbering:!1},e.initializeOptions(!1,e.numberingH1),this._trans=e.translator.load("jupyterlab")}render(){const t=()=>{e.numbering=!e.numbering,this.setState({numbering:e.numbering})},n=m.createElement("div",{onClick:e=>t(),role:"text","aria-label":this._trans.__("Toggle Auto-Numbering"),title:this._trans.__("Toggle Auto-Numbering"),className:this.state.numbering?"toc-toolbar-icon-selected":"toc-toolbar-icon"},m.createElement(_.numberingIcon.react,null));return m.createElement("div",null,m.createElement("div",{className:"toc-toolbar"},n))}}}function C(e,t){if(null===e)return;let n="";if(e=function(e,t){for(let n=t+1;n<=6;n++)void 0!==e[n]&&(e[n]=void 0);return void 0===e[t]?e[t]=1:e[t]+=1,e}(e,t),t>=1){for(let s=1;s<=t;s++)n+=(void 0===e[s]?"0":e[s])+".";n+=" "}return n}function w(e){const t=e.split("\n");let n=t[0].match(/^([#]{1,6}) (.*)/);return n?{text:n[2].replace(/\[(.+)\]\(.+\)/g,"$1"),level:n[1].length,type:"markdown"}:t.length>1&&(n=t[1].match(/^ {0,3}([=]{2,}|[-]{2,})\s*$/),n)?{text:t[0].replace(/\[(.+)\]\(.+\)/g,"$1"),level:"="===n[1][0]?1:2,type:"markdown-alt"}:(n=t[0].match(/<h([1-6]).*>(.*)<\/h\1>/i),n?{text:n[2],level:parseInt(n[1],10),type:"html"}:null)}function v(e){return()=>{e.scrollIntoView()}}function T(e){return a(e.content.model.mimeType)}function x(e,t){let n=!0;return void 0!==t&&(n=t.numberingH1),function(e,t,n,s){const l=e.split("\n");let r,o=[];for(let e=0;e<l.length;e++){let i=l[e];if(0===i.indexOf("```")&&(r=!r),r)continue;i+=l[e+1]?"\n"+l[e+1]:"";const a=w(i);if(a){let l=a.level;s||(l-=1),o.push({text:a.text,numbering:C(n,l),level:a.level,onClick:t(e)})}}return o}(e.content.model.value.text,(function(t){return()=>{e.content.editor.setCursorPosition({line:t,column:0})}}),{},n)}function y(e,t,n,s,l){let r=!0;l&&(r=l.composite.numberingH1);const o=new g(t,{numbering:!0,numberingH1:r,sanitizer:n,translator:s||i.nullTranslator});return l&&l.changed.connect((()=>{o.numberingH1=l.composite.numberingH1})),{tracker:e,usesLatex:!0,options:o,toolbarGenerator:function(){return b(o)},itemRenderer:function(e){return f(o,e)},isEnabled:T,generate:x}}function k(e,t,n,s,l){let r=!0;l&&(r=l.composite.numberingH1);const o=new g(t,{numbering:!0,numberingH1:r,sanitizer:n,translator:s||i.nullTranslator});return l&&l.changed.connect((()=>{o.numberingH1=l.composite.numberingH1})),{tracker:e,usesLatex:!0,options:o,toolbarGenerator:function(){return b(o)},itemRenderer:function(e){return f(o,e)},generate:function(e){return function(e,t,n,s=!0,l=!0){let r=e.querySelectorAll("h1, h2, h3, h4, h5, h6"),o=[];for(let e=0;e<r.length;e++){const i=r[e];let a=parseInt(i.tagName[1],10),c=i.textContent?i.textContent:"",d=!s;i.getElementsByClassName("numbering-entry").length>0&&i.removeChild(i.getElementsByClassName("numbering-entry")[0]);let h=t.sanitize(i.innerHTML,p);h=h.replace("¶",""),l||(a-=1);let u=C(n,a),g="";d||(g='<span class="numbering-entry">'+u+"</span>"),i.innerHTML=g+h,o.push({level:a,text:c.replace("¶",""),numbering:u,html:h,onClick:v(i)})}return o}(e.content.node,n,{},o.numbering,o.numberingH1)}}}var E=n(96462);function N(e,t){if(0===t.length)return!1;if(e&&e.cellRef){let n=e.cellRef.model.metadata.get("tags");if(n)for(let e=0;e<n.length;e++){let s=n[e];for(let e=0;e<t.length;e++)if(t[e]===s)return!1}}return!0}function S(e,t,n,s,l){if(t&&!N(t,l)&&t.text){if(n&&"header"===n.type)for(let t=e.length-1;t>=0;t--)e[t]===n&&(e[t].hasChild=!0);s<0&&e.push(t),n=t}return[e,n]}function H(e,t,n,s,l,r,o,i){return e&&"markdown"===e.type&&o?[t,n]=S(t,e,n,s,l):e&&"header"===e.type&&([t,n,s]=function(e,t,n,s,l,r,o){const i=e.length;if(N(t,l)){if(n&&t.level<=n.level){let l=!1,r=i-1;for(;r>=0;r--)if(e[r].level<t.level){n=e[r],l=!0;break}l?s=e[r+1].cellRef.model.metadata.get(o)?e[r+1].level:-1:(n=null,s=-1)}}else{if(n&&"header"===n.type&&n.level<t.level)for(let t=i-1;t>=0;t--)e[t]===n&&(e[t].hasChild=!0);(s>=t.level||s<0)&&(e.push(t),s=r?t.level:-1),n=t}return[e,n,s]}(t,e,n,s,l,r,i)),[t,n,s]}function M(e,t,n,s,l,r=-1){let o=[];if(-1===r&&console.warn("Deprecation warning! index argument will become mandatory in the next version"),e){const i=e.split("\n"),a=Math.min(i.length,3);let c="",d=0;for(;d<a-1;d++)c+=i[d]+"\n";c+=i[d],o.push({text:c,level:s+1,onClick:t(0),type:"code",prompt:n,cellRef:l,hasChild:!1,index:r})}return o[0]}function R(e){if(e.length>0){let t=e.length-1;for(;t>=0;){if("header"===e[t].type)return e[t].level;t-=1}}return 0}function O(e,t,n,s,l,r=-1){const o=t(0);let i=[];-1===r&&console.warn("Deprecation warning! index argument will become mandatory in the next version");for(const t of e.split("\n")){const a=w(t);a?i.push({text:a.text,level:a.level,numbering:C(n,a.level),onClick:o,type:"header",cellRef:l,hasChild:!1,index:r}):i.push({text:e,level:s+1,onClick:o,type:"markdown",cellRef:l,hasChild:!1,index:r})}return i}function W(e,t,n,s,l,r=!1,o=!0,i,a=-1){let c=e.querySelectorAll("h1, h2, h3, h4, h5, h6, p");-1===a&&console.warn("Deprecation warning! index argument will become mandatory in the next version");let d=[];for(const e of c){if(e.classList.contains("jp-toc-ignore"))continue;if("p"===e.nodeName.toLowerCase()){if(e.innerHTML){let s=n.sanitize(e.innerHTML,p);d.push({level:l+1,html:s.replace("¶",""),text:e.textContent?e.textContent:"",onClick:t(e),type:"markdown",cellRef:i,hasChild:!1,index:a})}continue}e.getElementsByClassName("numbering-entry").length>0&&e.removeChild(e.getElementsByClassName("numbering-entry")[0]);let c=n.sanitize(e.innerHTML,p);c=c.replace("¶","");let h=parseInt(e.tagName[1],10);o||(h-=1);let u=C(s,h);if(r){const t=document.createElement("span");t.classList.add("numbering-entry"),t.textContent=null!=u?u:"",e.insertBefore(t,e.firstChild)}d.push({level:h,text:e.textContent?e.textContent:"",numbering:u,html:c,onClick:t(e),type:"header",cellRef:i,hasChild:!1,index:a})}return d}class A extends u.IOptionsManager{constructor(e,t,n){super(),this._preRenderedToolbar=null,this._filtered=[],this._showCode=!1,this._showMarkdown=!1,this._showTags=!1,this._tagTool=null,this._numbering=n.numbering,this._numberingH1=n.numberingH1,this._includeOutput=n.includeOutput,this._syncCollapseState=n.syncCollapseState,this._widget=e,this._notebook=t,this.sanitizer=n.sanitizer,this.storeTags=[],this.translator=n.translator||i.nullTranslator,this._collapseChanged=new d.Signal(this)}set tagTool(e){this._tagTool=e}get tagTool(){return this._tagTool}set notebookMetadata(e){null!=this._notebook.currentWidget&&this._notebook.currentWidget.model.metadata.set(e[0],e[1])}set numbering(e){this._numbering=e,this._widget.update(),this.notebookMetadata=["toc-autonumbering",this._numbering]}get numbering(){return this._numbering}set numberingH1(e){this._numberingH1!=e&&(this._numberingH1=e,this._widget.update())}get numberingH1(){return this._numberingH1}set includeOutput(e){this._includeOutput!=e&&(this._includeOutput=e,this._widget.update())}get includeOutput(){return this._includeOutput}set syncCollapseState(e){this._syncCollapseState!=e&&(this._syncCollapseState=e,this._widget.update())}get syncCollapseState(){return this._syncCollapseState}set showCode(e){this._showCode=e,this.notebookMetadata=["toc-showcode",this._showCode],this._widget.update()}get showCode(){return this._showCode}set showMarkdown(e){this._showMarkdown=e,this.notebookMetadata=["toc-showmarkdowntxt",this._showMarkdown],this._widget.update()}get showMarkdown(){return this._showMarkdown}get collapseChanged(){return this._collapseChanged}set showTags(e){this._showTags=e,this.notebookMetadata=["toc-showtags",this._showTags],this._widget.update()}get showTags(){return this._showTags}get filtered(){return this.tagTool?this._filtered=this.tagTool.filtered:this.storeTags.length>0?this._filtered=this.storeTags:this._filtered=[],this._filtered}set preRenderedToolbar(e){this._preRenderedToolbar=e}get preRenderedToolbar(){return this._preRenderedToolbar}updateWidget(){this._widget.update()}updateAndCollapse(e){this._collapseChanged.emit(e),this._widget.update()}initializeOptions(e,t,n,s,l,r,o){this._numbering=e,this._numberingH1=t,this._includeOutput=n,this._syncCollapseState=s,this._showCode=l,this._showMarkdown=r,this._showTags=o,this._widget.update()}}var I=n(86944);class z extends m.Component{constructor(e){super(e),this.state={heading:e.heading}}UNSAFE_componentWillReceiveProps(e){this.setState({heading:e.heading})}render(){let e=this.state.heading.cellRef.editor.host.innerHTML;return e=this.props.sanitizer.sanitize(e,p),m.createElement("div",{className:"cm-toc",dangerouslySetInnerHTML:{__html:e}})}}function L(e,t,n){if(t.index>-1||(null==n?void 0:n.length)){let s=e.currentWidget.content.activeCellIndex;if(t.index<s){let e=n.indexOf(t)+1;if(e>=n.length)return!0;if((null==n?void 0:n[e].index)>s)return!0}}return!1}class P extends m.Component{constructor(e){super(e)}render(){const e=this.props.tag;return m.createElement("div",null,m.createElement("label",{className:"toc-tag-label",key:(new Date).toLocaleTimeString()},e))}}class j extends m.Component{constructor(e){super(e),this.selectedTagWithName=e=>{this.props.selectedTags.indexOf(e)>=0?this.props.selectionStateHandler(e,!1):this.props.selectionStateHandler(e,!0)},this.renderTagComponents=e=>{const t=this.props.selectedTags,n=this.selectedTagWithName;return e.map(((e,s)=>{const l=t.indexOf(e)>=0?"toc-selected-tag toc-tag":"toc-unselected-tag toc-tag";return m.createElement("div",{key:e,className:l,onClick:t=>{n(e)},tabIndex:0},m.createElement(P,{selectionStateHandler:this.props.selectionStateHandler,selectedTags:this.props.selectedTags,tag:e}))}))},this.state={selected:this.props.selectedTags}}render(){let e=this.props.tags,t=null;return e&&(t=this.renderTagComponents(e)),m.createElement("div",{className:"toc-tag-holder"},t)}}class D extends m.Component{constructor(e){super(e),this.changeSelectionState=(e,t)=>{let n=this.state.selected;if(t)n.push(e),this.setState({selected:n}),this.filterTags(n);else{let t=[];for(let s=0;s<n.length;s++)n[s]!==e&&t.push(n[s]);this.setState({selected:t}),this.filterTags(t)}},this.deselectAll=()=>{this.setState({selected:[]}),this.props.options.updateWidget()},this.selectAllCellsWithCurrentTags=()=>{const e=this.state.selected,t=this.props.tracker.currentWidget,n=null==t?void 0:t.content.widgets;null==t||t.content.deselectAll();let s=!1;null==n||n.forEach(((n,l)=>{e.every((e=>this.containsTag(e,n)))&&(s||(t&&(t.content.activeCellIndex=l),s=!0),null==t||t.content.select(n))}))},this.filterTags=e=>{this.setState({selected:e}),this.props.options.updateWidget()},this.updateFilters=()=>{let e=[],t=0,n=!1;for(let s=0;s<this.state.selected.length;s++)this.props.tags.indexOf(this.state.selected[s])>-1?(e[t]=this.state.selected[s],t+=1):!0===this.props.options.showTags&&(n=!0);n&&(this.filterTags(e),this.setState({selected:e}))},this.state={selected:this.props.inputFilter};const t=this.props.translator||i.nullTranslator;this._trans=t.load("jupyterlab")}get filtered(){return this.state.selected}containsTag(e,t){if(null===t)return!1;let n=t.model.metadata.get("tags");if(n){for(let t=0;t<n.length;t++)if(n[t]===e)return!0;return!1}}UNSAFE_componentWillUpdate(){this.updateFilters()}render(){let e,t,n=m.createElement("div",{className:"toc-no-tags-div"},this._trans.__("No Tags Available"));return e=0===this.state.selected.length?m.createElement("span",{className:"toc-filter-button-na"},this._trans.__("Clear Filters")):1===this.state.selected.length?m.createElement("span",{className:"toc-filter-button",onClick:()=>this.deselectAll()}," ","Clear 1 Filter"," "):m.createElement("span",{className:"toc-filter-button",onClick:()=>this.deselectAll()}," ","Clear ",this.state.selected.length," Filters"," "),t=0===this.state.selected.length?m.createElement("span",{className:"toc-filter-button-na",role:"text","aria-label":this._trans.__("Select All Cells With Current Tags"),title:this._trans.__("Select All Cells With Current Tags")},this._trans.__("Select All Cells With Current Tags")):m.createElement("span",{className:"toc-filter-button",role:"button","aria-label":this._trans.__("Select All Cells With Current Tags"),title:this._trans.__("Select All Cells With Current Tags"),onClick:this.selectAllCellsWithCurrentTags,onKeyDown:this.selectAllCellsWithCurrentTags},this._trans.__("Select All Cells With Current Tags")),this.props.tags&&this.props.tags.length>0&&(n=m.createElement("div",{className:"toc-tags-container"},m.createElement(j,{tags:this.props.tags,selectionStateHandler:this.changeSelectionState,selectedTags:this.state.selected}),e,t)),n}}function G(e,t,n,s,l){let r=!0,o=!0,c=!1;l&&(r=l.composite.numberingH1,o=l.composite.includeOutput,c=l.composite.syncCollapseState);const d=new A(t,e,{numbering:!1,numberingH1:r,includeOutput:o,syncCollapseState:c,sanitizer:n,translator:s||i.nullTranslator});return l&&l.changed.connect((()=>{d.numberingH1=l.composite.numberingH1,d.includeOutput=l.composite.includeOutput,d.syncCollapseState=l.composite.syncCollapseState})),e.activeCellChanged.connect(((e,n)=>{t.update()})),{tracker:e,usesLatex:!0,options:d,toolbarGenerator:function(){return function(e,t){return class extends m.Component{constructor(n){super(n),this._trans=e.translator.load("jupyterlab"),this.tagTool=null,this.state={showCode:!0,showMarkdown:!1,showTags:!1,numbering:!1},t.currentWidget&&t.currentWidget.context.ready.then((()=>{if(t.currentWidget){t.currentWidget.content.activeCellChanged.connect((()=>{e.updateWidget()}));const n=t.currentWidget.model.metadata.get("toc-autonumbering"),s=t.currentWidget.model.metadata.get("toc-showcode"),l=t.currentWidget.model.metadata.get("toc-showmarkdowntxt"),r=t.currentWidget.model.metadata.get("toc-showtags");e.initializeOptions(n||e.numbering,e.numberingH1,e.includeOutput,e.syncCollapseState,s||e.showCode,l||e.showMarkdown,r||e.showTags),this.setState({showCode:e.showCode,showMarkdown:e.showMarkdown,showTags:e.showTags,numbering:e.numbering}),this.tags=[]}}))}toggleCode(){e.showCode=!e.showCode,this.setState({showCode:e.showCode})}toggleMarkdown(){e.showMarkdown=!e.showMarkdown,this.setState({showMarkdown:e.showMarkdown})}toggleNumbering(){e.numbering=!e.numbering,this.setState({numbering:e.numbering})}toggleTagDropdown(){e.showTags&&this.tagTool&&(e.storeTags=this.tagTool.state.selected),e.showTags=!e.showTags,this.setState({showTags:e.showTags})}loadTags(){const e=t.currentWidget;if(e){const t=e.model.cells,n=new Set;this.tags=[];for(let e=0;e<t.length;e++){const s=t.get(e).metadata.get("tags");Array.isArray(s)&&s.forEach((e=>e&&n.add(e)))}this.tags=Array.from(n)}}render(){const n=m.createElement("div",{onClick:e=>this.toggleCode(),role:"text","aria-label":this._trans.__("Toggle Code Cells"),title:this._trans.__("Toggle Code Cells"),className:this.state.showCode?"toc-toolbar-code-icon toc-toolbar-icon-selected":"toc-toolbar-code-icon toc-toolbar-icon"},m.createElement(_.codeIcon.react,null)),s=m.createElement("div",{onClick:e=>this.toggleMarkdown(),role:"text","aria-label":this._trans.__("Toggle Markdown Text Cells"),title:this._trans.__("Toggle Markdown Text Cells"),className:this.state.showMarkdown?"toc-toolbar-icon-selected":"toc-toolbar-icon"},m.createElement(_.markdownIcon.react,null)),l=m.createElement("div",{onClick:e=>this.toggleNumbering(),role:"text","aria-label":this._trans.__("Toggle Auto-Numbering"),title:this._trans.__("Toggle Auto-Numbering"),className:this.state.numbering?"toc-toolbar-icon-selected":"toc-toolbar-icon"},m.createElement(_.numberingIcon.react,null));let r=m.createElement("div",null),o=m.createElement("div",{role:"text","aria-label":this._trans.__("Show Tags Menu"),title:this._trans.__("Show Tags Menu"),className:this.state.showTags?"toc-toolbar-icon-selected":"toc-toolbar-icon"},m.createElement(_.tagIcon.react,null));if(this.state.showTags){this.loadTags();const n=m.createElement(D,{tags:this.tags,tracker:t,options:e,inputFilter:e.storeTags,translator:e.translator,ref:e=>this.tagTool=e});e.tagTool=this.tagTool,r=m.createElement("div",{className:"toc-tag-dropdown"}," ",n," ")}return m.createElement("div",null,m.createElement("div",{className:"toc-toolbar"},n,s,l,m.createElement("div",{className:"toc-tag-dropdown-button",onClick:e=>this.toggleTagDropdown()},o)),r)}}}(d,e)},itemRenderer:function(t,n=[]){return function(e,t,n,s=[]){let l;if("markdown"===n.type||"header"===n.type){let o="toc-level-size-default",i=n.numbering&&e.numbering?n.numbering:"",a=e.syncCollapseState?E.MARKDOWN_HEADING_COLLAPSED:"toc-hr-collapsed";if("header"===n.type&&(o="toc-level-size-"+n.level),n.html&&("header"===n.type||e.showMarkdown)){if(l=m.createElement("span",{dangerouslySetInnerHTML:{__html:i+e.sanitizer.sanitize(n.html,p)},className:n.type+"-cell toc-cell-item"}),"header"===n.type){let e,i=m.createElement("div",{className:"jp-Collapser p-Widget lm-Widget",onClick:e=>{e.stopPropagation(),r(t,a,n)}},m.createElement("div",{className:"toc-Collapser-child"}));n.cellRef.model.metadata.has(a)&&(e=n.cellRef.model.metadata.get(a));let c=e?m.createElement("div",{className:"toc-Ellipses",onClick:e=>{e.stopPropagation(),r(t,a,n)}},m.createElement(_.ellipsesIcon.react,null)):m.createElement("div",null);l=m.createElement("div",{className:"toc-entry-holder "+o+(t.activeCell===n.cellRef||L(t,n,s)?" toc-active-cell":"")},i,l,c)}return l}if("header"===n.type||e.showMarkdown){if(l=m.createElement("span",{className:n.type+"-cell toc-cell-item"},i+n.text),"header"===n.type){let e,i=m.createElement("div",{className:"jp-Collapser p-Widget lm-Widget",onClick:e=>{e.stopPropagation(),r(t,a,n)}},m.createElement("div",{className:"toc-Collapser-child"}));n.cellRef.model.metadata.has(a)&&(e=n.cellRef.model.metadata.get(a));let c=e?m.createElement("div",{className:"toc-Ellipses",onClick:e=>{e.stopPropagation(),r(t,a,n)}},m.createElement(_.ellipsesIcon.react,null)):m.createElement("div",null);l=m.createElement("div",{className:"toc-entry-holder "+o+(t.activeCell===n.cellRef||L(t,n,s)?" toc-active-cell":"")},i,l,c)}return l}return null}return"code"===n.type&&e.showCode?m.createElement("div",{className:"toc-code-cell-div"},m.createElement("div",{className:"toc-code-cell-prompt"},n.prompt),m.createElement("span",{className:"toc-code-span"},m.createElement(z,{sanitizer:e.sanitizer,heading:n}))):null;function r(t,n,s){let l=!1,r=e.syncCollapseState;s.cellRef.model.metadata.get(n)&&(l=s.cellRef.model.metadata.get(n)),s?(r?t.currentWidget&&I.NotebookActions.setHeadingCollapse(s.cellRef,!l,t.currentWidget.content):l?s.cellRef.model.metadata.delete(n):s.cellRef.model.metadata.set(n,!0),e.updateAndCollapse({heading:s,collapsedState:l,tocType:"notebook"})):e.updateWidget()}}(d,e,t,n)},generate:function(e){let s=[],l=-1,r={},o=null;for(let i=0;i<e.content.widgets.length;i++){let c=e.content.widgets[i],h=c.model,u=d.syncCollapseState?E.MARKDOWN_HEADING_COLLAPSED:"toc-hr-collapsed",g=h.metadata.get(u);if(g=g||!1,"code"!==h.type){if("markdown"===h.type){let t,a=c,m=R(s);if(a.rendered&&!a.inputHidden){const h=t=>()=>{a.rendered?(e.content.mode="command",c.node.scrollIntoView(),e.content.activeCellIndex=i):(e.content.activeCellIndex=i,t.scrollIntoView())},p=W(c.node,h,n,r,m,d.numbering,d.numberingH1,c,i);for(t of p)[s,o,l]=H(t,s,o,l,d.filtered,g,d.showMarkdown,u)}else{const n=t=>()=>{e.content.activeCellIndex=i,c.node.scrollIntoView()},a=O(h.value.text,n,r,m,c,i);for(t of a)[s,o,l]=H(t,s,o,l,d.filtered,g,d.showMarkdown,u)}}}else{if(!t||t&&d.showCode){const t=t=>()=>{e.content.activeCellIndex=i,c.node.scrollIntoView()};let n=c.model.executionCount,r=null!==n?"["+n+"]: ":"[ ]: ",a=M(h.value.text,t,r,R(s),c,i);[s,o]=S(s,a,o,l,d.filtered)}if(d.includeOutput)for(let t=0;t<h.outputs.length;t++){const m=h.outputs.get(t);let p=Object.keys(m.data);if(p=p.filter((e=>{return a(e)||"application/vdom.v1+json"===(t=e)||"text/html"===t;var t})),!p.length)continue;const f=t=>()=>{e.content.activeCellIndex=i,e.content.mode="command",t.scrollIntoView()};let _=W(c.outputArea.widgets[t].node,f,n,r,R(s),d.numbering,d.numberingH1,c,i);for(const e of _)[s,o,l]=H(e,s,o,l,d.filtered,g,d.showMarkdown,u)}}}return s},collapseChanged:d.collapseChanged}}function F(e){let t="toc-level-size-"+e.level;return m.createElement("div",{className:t+" toc-entry-holder"},m.createElement("div",{className:"jp-Collapser p-Widget lm-Widget"},m.createElement("div",{className:"toc-Collapser-child"})),m.createElement("span",{className:"header-cell toc-cell-item"}," ",e.text," "))}function U(e){let t=e.content.model.value.text.split("\n"),n=[],s=!1;for(let e=0;e<t.length;e++){let r=t[e].trim();0===r.indexOf("def ")?(s=!1,n.push({text:r.slice(0,-1),level:2,onClick:l(e)})):0===r.indexOf("class ")?(s=!1,n.push({text:r.slice(0,-1),level:1,onClick:l(e)})):0!=r.indexOf("import ")||s||(s=!0,n.push({text:r,level:2,onClick:l(e)}))}return n;function l(t){return()=>{e.content.editor.setCursorPosition({line:t,column:0})}}}function B(e){let t=e.content.model.mimeType;return"application/x-python-code"===t||"text/x-python"===t}function V(e){return{tracker:e,isEnabled:B,itemRenderer:F,generate:U}}var $=n(78548),q=n(61389),K=n(43006);class J extends m.Component{render(){const{heading:e,toc:t}=this.props;let n=this.props.itemRenderer(e,t);return n?m.createElement("li",{className:"jp-tocItem",onClick:t=>{var n;t.preventDefault(),t.stopPropagation(),null===(n=this.props.entryClicked)||void 0===n||n.emit(this),e.onClick()},onContextMenu:t=>{var n;null===(n=this.props.entryClicked)||void 0===n||n.emit(this),e.onClick()}},n):null}}class Y extends m.Component{render(){const e=this.props.toolbar;let t=0,n=this.props.toc.map((e=>m.createElement(J,{heading:e,toc:this.props.toc,entryClicked:this.props.entryClicked,itemRenderer:this.props.itemRenderer,key:`${e.text}-${e.level}-${t++}`})));return m.createElement("div",{className:"jp-TableOfContents"},m.createElement("div",{className:"jp-stack-panel-header"},this.props.title),e&&m.createElement(e,null),m.createElement("ul",{className:"jp-TableOfContents-content"},n))}}class Q extends q.Widget{constructor(e){super(),this.translator=e.translator||i.nullTranslator,this._docmanager=e.docmanager,this._rendermime=e.rendermime,this._trans=this.translator.load("jupyterlab"),this._headings=[],this._entryClicked=new d.Signal(this),this._entryClicked.connect(((e,t)=>{this.activeEntry=t.props.heading})),this._current&&(this._headings=this._current.generator.generate(this._current.widget,this._current.generator.options))}get current(){return this._current}set current(e){if(e&&this._current&&this._current.widget===e.widget&&this._current.generator===e.generator)return;if(this._current=e,this.generator&&(this.generator.toolbarGenerator?this._toolbar=this.generator.toolbarGenerator():this._toolbar=null),this._monitor&&(this._monitor.dispose(),this._monitor=null),!this._current)return void this.update();const t=this._docmanager.contextForWidget(this._current.widget);if(!t||!t.model)throw Error("Could not find a context for the Table of Contents");this._monitor=new $.ActivityMonitor({signal:t.model.contentChanged,timeout:1e3}),this._monitor.activityStopped.connect(this.update,this),this.update()}get generator(){return this._current?this._current.generator:null}onUpdateRequest(e){let t=this._trans.__("Table of Contents");if(this._current){this._headings=this._current.generator.generate(this._current.widget,this._current.generator.options);const e=this._docmanager.contextForWidget(this._current.widget);e&&(t=$.PathExt.basename(e.localPath))}let n=e=>m.createElement("span",null,e.text);this._current&&this._current.generator.itemRenderer&&(n=this._current.generator.itemRenderer);let s=m.createElement("div",{className:"jp-TableOfContents"},m.createElement("div",{className:"jp-stack-panel-header"},t));this._current&&this._current.generator&&(s=m.createElement(Y,{title:t,toc:this._headings,entryClicked:this._entryClicked,generator:this.generator,itemRenderer:n,toolbar:this._toolbar})),K.render(s,this.node,(()=>{this._current&&!0===this._current.generator.usesLatex&&this._rendermime.latexTypesetter&&this._rendermime.latexTypesetter.typeset(this.node)}))}get activeEntry(){return this._activeEntry}set activeEntry(e){this._activeEntry=e}get headings(){return this._headings}onAfterShow(e){this.update()}}const X=(e,t)=>{var n;let s,l;if(!(e=>void 0!==e.type&&void 0!==e.cellRef)(t))return;let r=[];if(l=e.indexOf(t),s=t,"code"===s.type)r.push(s);else{const n=t.level;for(l+=1;l<e.length&&(s=e[l],!(s.level<=n));l++)"code"===s.type&&r.push(s)}for(l=0;l<r.length;l++)if(r[l].cellRef){const e=r[l].cellRef,t=null===(n=e.parent)||void 0===n?void 0:n.parent;t&&E.CodeCell.execute(e,t.sessionContext)}}}}]);
//# sourceMappingURL=218.c91b93ef8a99588dacc3.js.map