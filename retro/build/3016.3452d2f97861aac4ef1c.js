(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3016],{63016:(e,t,s)=>{"use strict";s.d(t,{QM:()=>h,hN:()=>d,e4:()=>g});var n=s(58137),a=s(66065),o=s(80185),r=s(70317),i=s(6493);const c=e=>JSON.parse(JSON.stringify(e));class l{constructor(){this.isDisposed=!1,this.ydoc=new o.QW,this.source=this.ydoc.getText("source"),this.undoManager=new o.H6([this.source],{trackedOrigins:new Set([this])}),this.awareness=new i.GL(this.ydoc),this._changed=new n.Signal(this)}transact(e,t=!0){this.ydoc.transact(e,t?this:null)}dispose(){this.isDisposed=!0,this.ydoc.destroy()}canUndo(){return this.undoManager.undoStack.length>0}canRedo(){return this.undoManager.redoStack.length>0}undo(){this.undoManager.undo()}redo(){this.undoManager.redo()}clearUndoHistory(){this.undoManager.clear()}get changed(){return this._changed}}class h extends l{constructor(){super(),this._modelObserver=e=>{const t={};t.sourceChange=e.changes.delta,this._changed.emit(t)},this.ysource=this.ydoc.getText("source"),this.ysource.observe(this._modelObserver)}static create(){return new h}getSource(){return this.ysource.toString()}setSource(e){this.transact((()=>{const t=this.ysource;t.delete(0,t.length),t.insert(0,e)}))}updateSource(e,t,s=""){this.transact((()=>{const n=this.ysource;n.insert(e,s),n.delete(e+s.length,t-e)}))}}class d extends l{constructor(){super(),this._onYCellsChanged=e=>{e.changes.added.forEach((e=>{const t=e.content.type;this._ycellMapping.has(t)||this._ycellMapping.set(t,u(t));const s=this._ycellMapping.get(t);s._notebook=this,s._undoManager=this.undoManager})),e.changes.deleted.forEach((e=>{const t=e.content.type,s=this._ycellMapping.get(t);s&&(s.dispose(),this._ycellMapping.delete(t))}));let t=0;const s=[];e.changes.delta.forEach((e=>{if(null!=e.insert){const n=e.insert.map((e=>this._ycellMapping.get(e)));s.push({insert:n}),this.cells.splice(t,0,...n),t+=e.insert.length}else null!=e.delete?(s.push(e),this.cells.splice(t,e.delete)):null!=e.retain&&(s.push(e),t+=e.retain)})),this._changed.emit({cellsChange:s})},this.ycells=this.ydoc.getArray("cells"),this.ymeta=this.ydoc.getMap("meta"),this.ymodel=this.ydoc.getMap("model"),this.undoManager=new o.H6([this.ycells],{trackedOrigins:new Set([this])}),this._ycellMapping=new Map,this.nbformat_minor=r.MINOR_VERSION,this.nbformat=r.MAJOR_VERSION,this.ycells.observe(this._onYCellsChanged),this.cells=this.ycells.toArray().map((e=>(this._ycellMapping.has(e)||this._ycellMapping.set(e,u(e)),this._ycellMapping.get(e))))}getCell(e){return this.cells[e]}insertCell(e,t){this.insertCells(e,[t])}insertCells(e,t){t.forEach((e=>{this._ycellMapping.set(e.ymodel,e)})),this.transact((()=>{this.ycells.insert(e,t.map((e=>e.ymodel)))}))}moveCell(e,t){this.transact((()=>{const s=this.getCell(e).clone();this.deleteCell(e),this.insertCell(t,s)}))}deleteCell(e){this.deleteCellRange(e,e+1)}deleteCellRange(e,t){this.transact((()=>{this.ycells.delete(e,t-e)}))}getMetadata(){const e=this.ymeta.get("metadata");return e?c(e):{orig_nbformat:1}}setMetadata(e){this.ymeta.set("metadata",c(e))}updateMetadata(e){this.ymeta.set("metadata",Object.assign({},this.getMetadata(),e))}static create(){return new d}dispose(){this.ycells.unobserve(this._onYCellsChanged)}}const u=e=>{switch(e.get("cell_type")){case"code":return new p(e);case"markdown":return new _(e);case"raw":return new m(e);default:throw new Error("Found unknown cell type")}},g=(e,t)=>{switch(e){case"markdown":return _.createStandalone(t);case"code":return p.createStandalone(t);default:return m.createStandalone(t)}};class y{constructor(e){this._notebook=null,this.isStandalone=!1,this._modelObserver=e=>{const t={},s=e.find((e=>e.target===this.ymodel.get("source")));s&&(t.sourceChange=s.changes.delta);const n=e.find((e=>e.target===this.ymodel.get("outputs")));n&&(t.outputsChange=n.changes.delta);const a=e.find((e=>e.target===this.ymodel));if(a&&a.keysChanged.has("metadata")){const e=a.changes.keys.get("metadata");t.metadataChange={oldValue:(null==e?void 0:e.oldValue)?e.oldValue:void 0,newValue:this.getMetadata()}}if(a&&a.keysChanged.has("execution_count")){const e=a.changes.keys.get("execution_count");t.executionCountChange={oldValue:e.oldValue,newValue:this.ymodel.get("execution_count")}}const o=this.ymodel.get("source");a&&a.keysChanged.has("source")&&(t.sourceChange=[{delete:this._prevSourceLength},{insert:o.toString()}]),this._prevSourceLength=o.length,this._changed.emit(t)},this.isDisposed=!1,this._undoManager=null,this._changed=new n.Signal(this),this.ymodel=e;const t=e.get("source");this._prevSourceLength=t?t.length:0,this.ymodel.observeDeep(this._modelObserver)}get ysource(){return this.ymodel.get("source")}get awareness(){var e;return(null===(e=this.notebook)||void 0===e?void 0:e.awareness)||null}transact(e,t=!0){this.notebook&&t?this.notebook.transact(e):this.ymodel.doc.transact(e,this)}get undoManager(){return this.notebook?this.notebook.undoManager:this._undoManager}undo(){var e;null===(e=this.undoManager)||void 0===e||e.undo()}redo(){var e;null===(e=this.undoManager)||void 0===e||e.redo()}canUndo(){return!!this.undoManager&&this.undoManager.undoStack.length>0}canRedo(){return!!this.undoManager&&this.undoManager.redoStack.length>0}clearUndoHistory(){var e;null===(e=this.undoManager)||void 0===e||e.clear()}get notebook(){return this._notebook}static create(e=a.UUID.uuid4()){const t=new o.D5,s=new o.xv;return t.set("source",s),t.set("metadata",{}),t.set("cell_type",this.prototype.cell_type),t.set("id",e),new this(t)}static createStandalone(e){const t=this.create(e);return t.isStandalone=!0,(new o.QW).getArray().insert(0,[t.ymodel]),t._undoManager=new o.H6([t.ymodel],{trackedOrigins:new Set([t])}),t}clone(){const e=new o.D5,t=new o.xv(this.getSource());return e.set("source",t),e.set("metadata",this.getMetadata()),e.set("cell_type",this.cell_type),e.set("id",this.getId()),new(0,this.constructor)(e)}get changed(){return this._changed}dispose(){this.ymodel.unobserveDeep(this._modelObserver)}getAttachments(){return this.ymodel.get("attachments")}setAttachments(e){this.transact((()=>{null==e?this.ymodel.set("attachments",e):this.ymodel.delete("attachments")}))}getId(){return this.ymodel.get("id")}getSource(){return this.ymodel.get("source").toString()}setSource(e){const t=this.ymodel.get("source");this.transact((()=>{t.delete(0,t.length),t.insert(0,e)}))}updateSource(e,t,s=""){this.transact((()=>{const n=this.ysource;n.insert(e,s),n.delete(e+s.length,t-e)}))}get cell_type(){throw new Error("A YBaseCell must not be constructed")}getMetadata(){return c(this.ymodel.get("metadata"))}setMetadata(e){this.transact((()=>{this.ymodel.set("metadata",c(e))}))}toJSON(){return{id:this.getId(),cell_type:this.cell_type,source:this.getSource(),metadata:this.getMetadata()}}}class p extends y{get cell_type(){return"code"}get execution_count(){return this.ymodel.get("execution_count")}set execution_count(e){this.transact((()=>{this.ymodel.set("execution_count",e)}))}getOutputs(){return c(this.ymodel.get("outputs").toArray())}setOutputs(e){const t=this.ymodel.get("outputs");this.transact((()=>{t.delete(0,t.length),t.insert(0,e)}))}updateOutputs(e,t,s=[]){const n=this.ymodel.get("outputs"),a=t<n.length?t-e:n.length-e;this.transact((()=>{n.delete(e,a),n.insert(e,s)}))}static create(e){const t=super.create(e);return t.ymodel.set("execution_count",0),t.ymodel.set("outputs",new o.mJ),t}static createStandalone(e){const t=super.createStandalone(e);return t.ymodel.set("execution_count",null),t.ymodel.set("outputs",new o.mJ),t}clone(){const e=super.clone(),t=new o.mJ;return t.insert(0,this.getOutputs()),e.ymodel.set("execution_count",this.execution_count),e.ymodel.set("outputs",t),e}toJSON(){return{id:this.getId(),cell_type:"code",source:this.getSource(),metadata:this.getMetadata(),outputs:this.getOutputs(),execution_count:this.execution_count}}}class m extends y{static create(e){return super.create(e)}static createStandalone(e){return super.createStandalone(e)}get cell_type(){return"raw"}toJSON(){return{id:this.getId(),cell_type:"raw",source:this.getSource(),metadata:this.getMetadata(),attachments:this.getAttachments()}}}class _ extends y{static create(e){return super.create(e)}static createStandalone(e){return super.createStandalone(e)}get cell_type(){return"markdown"}toJSON(){return{id:this.getId(),cell_type:"markdown",source:this.getSource(),metadata:this.getMetadata(),attachments:this.getAttachments()}}}}}]);
//# sourceMappingURL=3016.3452d2f97861aac4ef1c.js.map