AUI.add("aui-drawing-vml",function(s){var W=s.Lang,z=W.isArray,V=W.isNumber,J=W.isObject,l=W.isString,v=W.isUndefined,p=s.config,D=p.doc,C=s.ColorUtil,g=s.Drawing,k=g.Element,F,a=g.Util,M=function(e){return V(e)?e+"px":e;},K=1000+h+1000,t=g.prototype,u=k.prototype,r=g.MAP_ATTRS_AVAILABLE,I={path:1,rect:1},f={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},n={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"},w=g.MAP_TYPES_CIRCLE_ELLIPSE,P=Math,O=P.pow,x=P.round,S=g.STR_MS_PROG_ID_PREFIX,H=g.REGEX_ISURL,N=g.REGEX_RADIAL_GRADIENT,U=g.REGEX_SEPARATOR,m=g.REGEX_SEPARATOR_GRADIENT,o=/([clmz]),?([^clmz]*)/gi,b=/-?[^,\s-]+/g,c=/ progid:\S+Blur\([^\)]+\)/g,q=g.STR_EMPTY,G=g.STR_FILL,h=g.STR_SPACE,d=1.2,j="M{0},{1}l{2},0,0,{3},{4},0z",y="M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z",Q="position: absolute; left: -9999em; top: -9999em; padding: 0; margin: 0; line-height: 1; display: inline;",E="display: inline-block; position: relative; clip: rect(0 {1} {0} 0); overflow: hidden; height: {0}; width: {1};",T="position: absolute; left: 0; top: 0; height: {0}; width: {1};",L=String.prototype.toLowerCase,B=String.prototype.toUpperCase,i=10;D.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{if(!D.namespaces.rvml){D.namespaces.add("rvml","urn:schemas-microsoft-com:vml");}a.CREATE_ELEMENT=function(e){return D.createElement("<rvml:"+e+' class="rvml">');};}catch(R){a.CREATE_ELEMENT=function(e){return D.createElement("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');};}a.path2vml=function(af){var ad=/[ahqstv]/ig;var Z=a.pathToAbsolute;var ac;if(String(af).match(ad)){Z=a.path2curve;}ad=/[clmz]/g;if(Z==a.pathToAbsolute&&!String(af).match(ad)){ac=String(af).replace(o,function(aj,al,ah){var ak=[];var ag=L.call(al)=="m";var ai=f[al];ah.replace(b,function(am){if(ag&&ak.length==2){ai+=ak+f[al=="m"?"l":"L"];ak=[];}ak.push(x(am*i));});return ai+ak;});return ac;}var ae=Z(af);var X;var e;ac=[];for(var ab=0,Y=ae.length;ab<Y;ab++){X=ae[ab];e=L.call(ae[ab][0]);if(e=="z"){e="x";}for(var aa=1,A=X.length;aa<A;aa++){e+=x(X[aa]*i)+(aa!=A-1?",":q);}ac.push(e);}return ac.join(h);};a.rectPath=function(e,Z,A,X,Y){if(Y){return W.sub(y,[e+Y,Z,A-Y*2,Y,-Y,X-Y*2,Y*2-A,Y*2-X]);}else{return W.sub(j,[e,Z,A,X,-A]);}};F=g.Impl={addGradientFill:function(Z,ad){Z.attrs=Z.attrs||{};var ae=Z.attrs;var af;var ab="linear";var ac=".5 .5";var X;Z.attrs.gradient=ad;ad=String(ad).replace(N,function(ah,ai,ag){ab="radial";if(ai&&ag){ai=parseFloat(ai);ag=parseFloat(ag);if(O(ai-0.5,2)+O(ag-0.5,2)>0.25){ag=P.sqrt(0.25-O(ai-0.5,2))*((ag>0.5)*2-1)+0.5;}ac=ai+h+ag;}return q;});ad=ad.split(m);if(ab=="linear"){X=ad.shift();X=-parseFloat(X);if(isNaN(X)){return null;}}var aa=a.parseDots(ad);if(!aa){return null;}Z=Z.shape||Z.node;af=Z.getElementsByTagName(G)[0]||a.CREATE_ELEMENT(G);if(!af.parentNode){Z.appendChild(af);}if(aa.length){af.on=true;af.method="none";af.color=aa[0].color;af.color2=aa[aa.length-1].color;var e=[];for(var Y=0,A=aa.length;Y<A;Y++){if(aa[Y].offset){e.push(aa[Y].offset+h+aa[Y].color);}}if(af.colors){af.colors.value=e.length?e.join():"0% "+af.color;}if(ab=="radial"){af.type="gradientradial";af.focus="100%";af.focussize=ac;af.focusposition=ac;}else{af.type="gradient";af.angle=(270-X)%360;}}return 1;},clear:function(){var e=this;e.canvas.innerHTML=q;e.span=D.createElement("span");e.span.style.cssText=Q;e.canvas.appendChild(e.span);e.bottom=e.top=null;},createCanvas:function(){var ac=this;var Y=ac.get("contentBox");var aa=ac.get("x");var Z=ac.get("y");var e=M(ac.get("width"));var ad=M(ac.get("height"));var A=D.createElement("div");ac.set("width",1000);ac.set("height",1000);ac.coordsize=i*1000+h+i*1000;ac.coordorigin="0 0";var ab=D.createElement("span");ab.style.cssText=Q;A.appendChild(ab);ac.span=ab;ac.canvas=A;var X=A.style;A.style.cssText=W.sub(E,[ad,e]);Y.prepend(A);},createCircle:function(A,ac,Z){var e=this;var ab=a.CREATE_ELEMENT("group");var Y=a.CREATE_ELEMENT("oval");var X=Y.style;ab.style.cssText=W.sub(T,[M(e.get("height")),M(e.get("width"))]);ab.coordsize=K;ab.coordorigin=e.coordorigin;ab.appendChild(Y);var aa=new k(Y,ab,e);aa.type="circle";F.setFillAndStroke(aa,{stroke:"#000",fill:"none"});aa.attrs.cx=A;aa.attrs.cy=ac;aa.attrs.r=Z;aa.setBox({x:A-Z,y:ac-Z,width:Z*2,height:Z*2});e.canvas.appendChild(ab);return aa;},createEllipse:function(A,ac,ab,Z){var e=this;var aa=a.CREATE_ELEMENT("group");var Y=a.CREATE_ELEMENT("oval");aa.style.cssText=W.sub(T,[M(e.get("height")),M(e.get("width"))]);aa.coordsize=K;aa.coordorigin=e.coordorigin;aa.appendChild(Y);var X=new k(Y,aa,e);X.type="ellipse";F.setFillAndStroke(X,{stroke:"#000"});X.attrs.cx=A;X.attrs.cy=ac;X.attrs.rx=ab;X.attrs.ry=Z;X.setBox({x:A-ab,y:ac-Z,width:ab*2,height:Z*2});e.canvas.appendChild(aa);return X;},createImage:function(e,ab,aa,ac,Z){var ae=this;var ad=a.CREATE_ELEMENT("group");var X=a.CREATE_ELEMENT("image");var Y=X.style;ad.style.cssText=W.sub(T,[M(ae.get("height")),M(ae.get("width"))]);ad.coordsize=K;ad.coordorigin=ae.coordorigin;X.src=e;ad.appendChild(X);var A=new k(X,ad,ae);A.type="image";A.attrs.src=e;A.attrs.x=ab;A.attrs.y=aa;A.attrs.w=ac;A.attrs.h=Z;A.setBox({x:ab,y:aa,width:ac,height:Z});ae.canvas.appendChild(ad);return A;},createPath:function(X){var A=this;var ab=a.CREATE_ELEMENT("group");ab.style.cssText=W.sub(T,[M(A.get("height")),M(A.get("width"))]);ab.coordsize=A.coordsize;ab.coordorigin=A.coordorigin;var Y=a.CREATE_ELEMENT("shape");var Z=Y.style;Z.width=A.get("width")+"px";Z.height=A.get("height")+"px";Y.coordsize=K;Y.coordorigin=A.coordorigin;ab.appendChild(Y);var aa=new k(Y,ab,A);var e={fill:"none",stroke:"#000"};if(X){e.path=X;}aa.isAbsolute=true;aa.type="path";aa.path=[];aa.Path=q;F.setFillAndStroke(aa,e);A.canvas.appendChild(ab);return aa;},createRectangle:function(Z,X,aa,A,e){var ac=this;var ad=a.rectPath(Z,X,aa,A,e);var Y=ac.path(ad);
var ab=Y.attrs;Y.X=ab.x=Z;Y.Y=ab.y=X;Y.W=ab.width=aa;Y.H=ab.height=A;ab.r=e;ab.path=ad;Y.type="rect";return Y;},createText:function(ac,ab,ag){var ae=this;var ad=a.CREATE_ELEMENT("group");var Y=a.CREATE_ELEMENT("shape");var Z=Y.style;var ah=a.CREATE_ELEMENT("path");var e=ah.style;var aa=a.CREATE_ELEMENT("textpath");var X=M(ae.get("width"));var af=M(ae.get("height"));ad.style.cssText=W.sub(T,[af,X]);ad.coordsize=K;ad.coordorigin=ae.coordorigin;ah.v=W.sub("m{0},{1}l{2},{1}",[x(ac*10),x(ab*10),x(ac*10)+1]);ah.textpathok=true;Z.width=X;Z.height=af;aa.string=String(ag);aa.on=true;Y.appendChild(aa);Y.appendChild(ah);ad.appendChild(Y);var A=new k(aa,ad,ae);A.shape=Y;A.textpath=ah;A.type="text";A.attrs.text=ag;A.attrs.x=ac;A.attrs.y=ab;A.attrs.w=1;A.attrs.h=1;F.setFillAndStroke(A,{font:r.font,stroke:"none",fill:"#000"});A.setBox();ae.canvas.appendChild(ad);return A;},remove:function(){var e=this;e.canvas.parentNode.removeChild(e.canvas);for(var A in e){if(t.hasOwnProperty(A)){e[A]=a.removed(A);}}return true;},setFillAndStroke:function(ae,an){ae.attrs=ae.attrs||{};var ak=ae.node;var ao=ae.attrs;var aa=ak.style;var ab;var am=(an.x!=ao.x||an.y!=ao.y||an.width!=ao.width||an.height!=ao.height||an.r!=ao.r)&&ae.type=="rect";var at=ae;for(var af in an){if(an.hasOwnProperty(af)){ao[af]=an[af];}}if(am){ao.path=a.rectPath(ao.x,ao.y,ao.width,ao.height,ao.r);ae.X=ao.x;ae.Y=ao.y;ae.W=ao.width;ae.H=ao.height;}if(an.href){ak.href=an.href;}if(an.title){ak.title=an.title;}if(an.target){ak.target=an.target;}if(an.cursor){aa.cursor=an.cursor;}if("blur" in an){ae.blur(an.blur);}if(an.path&&ae.type=="path"||am){ak.path=a.path2vml(ao.path);}if(an.rotation!=null){ae.rotate(an.rotation,true);}if(an.translation){ab=String(an.translation).split(U);a.translate.call(ae,ab[0],ab[1]);if(ae._.rt.cx!=null){ae._.rt.cx+=+ab[0];ae._.rt.cy+=+ab[1];ae.setBox(ae.attrs,ab[0],ab[1]);}}if(an.scale){ab=String(an.scale).split(U);ae.scale(+ab[0]||1,+ab[1]||+ab[0]||1,+ab[2]||null,+ab[3]||null);}if("clip-rect" in an){var e=String(an["clip-rect"]).split(U);if(e.length==4){e[2]=+e[2]+(+e[0]);e[3]=+e[3]+(+e[1]);var ag=ak.clipRect||D.createElement("div");var ar=ag.style;var ad=ak.parentNode;ar.clip=W.sub("rect({1}px {2}px {3}px {0}px)",e);if(!ak.clipRect){ar.position="absolute";ar.top=0;ar.left=0;ar.width=ae.paper.get("width")+"px";ar.height=ae.paper.get("height")+"px";ad.parentNode.insertBefore(ag,ad);ag.appendChild(ad);ak.clipRect=ag;}}if(!an["clip-rect"]&&ak.clipRect){ak.clipRect.style.clip=q;}}if(ae.type=="image"&&an.src){ak.src=an.src;}if(ae.type=="image"&&an.opacity){ak.filterOpacity=S+".Alpha(opacity="+(an.opacity*100)+")";aa.filter=(ak.filterMatrix||q)+(ak.filterOpacity||q);}if(an.font){aa.font=an.font;}if(an["font-family"]){aa.fontFamily='"'+an["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,q)+'"';}if(an["font-size"]){aa.fontSize=an["font-size"];}if(an["font-weight"]){aa.fontWeight=an["font-weight"];}if(an["font-style"]){aa.fontStyle=an["font-style"];}if(an.opacity!=null||an["stroke-width"]!=null||an.fill!=null||an.stroke!=null||an["stroke-width"]!=null||an["stroke-opacity"]!=null||an["fill-opacity"]!=null||an["stroke-dasharray"]!=null||an["stroke-miterlimit"]!=null||an["stroke-linejoin"]!=null||an["stroke-linecap"]!=null){ak=ae.shape||ak;var al=(ak.getElementsByTagName(G)&&ak.getElementsByTagName(G)[0]);var ap=false;var X;if(!al){ap=al=a.CREATE_ELEMENT(G);}if("fill-opacity" in an||"opacity" in an){X=((+ao["fill-opacity"]+1||2)-1)*((+ao.opacity+1||2)-1)*((+C.getRGB(an.fill).o+1||2)-1);if(X<0){X=0;}else{if(X>1){X=1;}}al.opacity=X;}if(an.fill){al.on=true;}if(al.on==null||an.fill=="none"){al.on=false;}if(al.on&&an.fill){var Z=an.fill.match(H);if(Z){al.src=Z[1];al.type="tile";}else{var Y=C.getRGB(an.fill);al.color=Y.hex;al.src=q;al.type="solid";if(Y.error&&(at.type in w||String(an.fill).charAt(0)!="r")&&F.addGradientFill(at,an.fill)){ao.fill="none";ao.gradient=an.fill;}}}if(ap){ak.appendChild(al);}var ac=(ak.getElementsByTagName("stroke")&&ak.getElementsByTagName("stroke")[0]);var aq=false;if(!ac){aq=ac=a.CREATE_ELEMENT("stroke");}if((an.stroke&&an.stroke!="none")||an["stroke-width"]||an["stroke-opacity"]!=null||an["stroke-dasharray"]||an["stroke-miterlimit"]||an["stroke-linejoin"]||an["stroke-linecap"]){ac.on=true;}if(an.stroke=="none"||ac.on==null||an.stroke==0||an["stroke-width"]==0){ac.on=false;}var aj=C.getRGB(an.stroke);if(ac.on&&an.stroke){ac.color=aj.hex;}X=((+ao["stroke-opacity"]+1||2)-1)*((+ao.opacity+1||2)-1)*((+aj.o+1||2)-1);var ai=(parseFloat(an["stroke-width"])||1)*0.75;if(X<0){X=0;}else{if(X>1){X=1;}}if(an["stroke-width"]==null){ai=ao["stroke-width"];}if(an["stroke-width"]){ac.weight=ai;}if(ai&&ai<1&&(X*=ai)){ac.weight=1;}ac.opacity=X;if(an["stroke-linejoin"]){ac.joinstyle=an["stroke-linejoin"]||"miter";}ac.miterlimit=an["stroke-miterlimit"]||8;var A=an["stroke-linecap"];if(A){ac.endcap="round";if(A=="butt"){ac.endcap="flat";}else{if(A=="square"){ac.endcap=A;}}}var ah=an["stroke-dasharray"];if(ah){ac.dashstyle=q;if(n.hasOwnProperty(ah)){ac.dashstyle=n[an["stroke-dasharray"]];}}if(aq){ak.appendChild(ac);}}if(at.type=="text"){aa=at.paper.span.style;if(ao.font){aa.font=ao.font;}if(ao["font-family"]){aa.fontFamily=ao["font-family"];}if(ao["font-size"]){aa.fontSize=ao["font-size"];}if(ao["font-weight"]){aa.fontWeight=ao["font-weight"];}if(ao["font-style"]){aa.fontStyle=ao["font-style"];}if(at.node.string){at.paper.span.innerHTML=String(at.node.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>");}at.W=ao.w=at.paper.span.offsetWidth;at.H=ao.h=at.paper.span.offsetHeight;at.X=ao.x;at.Y=ao.y+x(at.H/2);switch(ao["text-anchor"]){case"start":at.node.style["v-text-align"]="left";at.bbx=x(at.W/2);break;case"end":at.node.style["v-text-align"]="right";at.bbx=-x(at.W/2);break;default:at.node.style["v-text-align"]="center";break;}}}};u.createElement=function(X,Y,A){var e=this;e[0]=X;e.id=s.guid();e.node=X;e.X=0;e.Y=0;e.attrs={};e.Group=Y;e.paper=A;e._={tx:0,ty:0,rt:{deg:0},sx:1,sy:1};if(!A.bottom){A.bottom=e;}e.prev=A.top;
if(A.top){A.top.next=e;}A.top=e;e.next=null;};u.rotate=function(A,e,X){if(this.removed){return this;}if(A==null){if(this._.rt.cx){return[this._.rt.deg,this._.rt.cx,this._.rt.cy].join(h);}return this._.rt.deg;}A=String(A).split(U);if(A.length-1){e=parseFloat(A[1]);X=parseFloat(A[2]);}A=parseFloat(A[0]);if(e!=null){this._.rt.deg=A;}else{this._.rt.deg+=A;}if(X==null){e=null;}this._.rt.cx=e;this._.rt.cy=X;this.setBox(this.attrs,e,X);this.Group.style.rotation=this._.rt.deg;return this;};u.setBox=function(Y,Z,X){if(this.removed){return this;}var e=this.Group.style;var aa=(this.shape&&this.shape.style)||this.node.style;Y=Y||{};for(var ab in Y){if(Y.hasOwnProperty(ab)){this.attrs[ab]=Y[ab];}}Z=Z||this._.rt.cx;X=X||this._.rt.cy;var af=this.attrs;var ai;var ah;var ak;var ad;switch(this.type){case"circle":ai=af.cx-af.r;ah=af.cy-af.r;ak=ad=af.r*2;break;case"ellipse":ai=af.cx-af.rx;ah=af.cy-af.ry;ak=af.rx*2;ad=af.ry*2;break;case"image":ai=+af.x;ah=+af.y;ak=af.width||0;ad=af.height||0;break;case"text":this.textpath.v=["m",x(af.x),", ",x(af.y-2),"l",x(af.x)+1,", ",x(af.y-2)].join(q);ai=af.x-x(this.W/2);ah=af.y-this.H/2;ak=this.W;ad=this.H;break;case"rect":case"path":if(!this.attrs.path){ai=0;ah=0;ak=this.paper.get("width");ad=this.paper.get("height");}else{var ac=a.pathDimensions(this.attrs.path);ai=ac.x;ah=ac.y;ak=ac.width;ad=ac.height;}break;default:ai=0;ah=0;ak=this.paper.get("width");ad=this.paper.get("height");break;}Z=(Z==null)?ai+ak/2:Z;X=(X==null)?ah+ad/2:X;var ae=this.paper.get("width");var aj=this.paper.get("height");var A=Z-ae/2;var ag=X-aj/2;var al;if(e.left!=(al=A+"px")){e.left=al;}if(e.top!=(al=ag+"px")){e.top=al;}this.X=I.hasOwnProperty(this.type)?-A:ai;this.Y=I.hasOwnProperty(this.type)?-ag:ah;this.W=ak;this.H=ad;if(I.hasOwnProperty(this.type)){if(aa.left!=(al=-A*i+"px")){aa.left=al;}if(aa.top!=(al=-ag*i+"px")){aa.top=al;}}else{if(this.type=="text"){if(aa.left!=(al=-A+"px")){aa.left=al;}if(aa.top!=(al=-ag+"px")){aa.top=al;}}else{if(e.width!=(al=ae+"px")){e.width=al;}if(e.height!=(al=aj+"px")){e.height=al;}if(aa.left!=(al=ai-A+"px")){aa.left=al;}if(aa.top!=(al=ah-ag+"px")){aa.top=al;}if(aa.width!=(al=ak+"px")){aa.width=al;}if(aa.height!=(al=ad+"px")){aa.height=al;}}}};u.hide=function(){if(!this.removed){this.Group.style.display="none";}return this;};u.show=function(){if(!this.removed){this.Group.style.display="block";}return this;};u.getRegion=function(){if(this.removed){return this;}if(I.hasOwnProperty(this.type)){return a.pathDimensions(this.attrs.path);}return{x:this.X+(this.bbx||0),y:this.Y,width:this.W,height:this.H};};u.remove=function(){if(this.removed){return;}a.tear(this,this.paper);this.node.parentNode.removeChild(this.node);this.Group.parentNode.removeChild(this.Group);if(this.shape){this.shape.parentNode.removeChild(this.shape);}for(var e in this){delete this[e];}this.removed=true;};u.attr=function(X,ab){var e=this;if(e.removed){return e;}var Z;if(X==null){var Y={};for(Z in e.attrs){if(e.attrs.hasOwnProperty(Z)){Y[Z]=e.attrs[Z];}}if(e._.rt.deg){Y.rotation=e.rotate();}if(e._.sx!=1||e._.sy!=1){Y.scale=e.scale();}if(Y.gradient&&Y.fill=="none"){Y.fill=Y.gradient;delete Y.gradient;}return Y;}if(ab==null&&l(X)){if(X=="translation"){return a.translate.call(e);}if(X=="rotation"){return e.rotate();}if(X=="scale"){return e.scale();}if(X==G&&e.attrs.fill=="none"&&e.attrs.gradient){return e.attrs.gradient;}return e.attrs[X];}if(e.attrs&&ab==null&&z(X)){var aa;var A={};for(Z=0,aa=X.length;Z<aa;Z++){A[X[Z]]=e.attr(X[Z]);}return A;}var ac=a.applyAttributes(e,X,ab);if(ac){if(ac.text&&e.type=="text"){e.node.string=ac.text;}F.setFillAndStroke(e,ac);if(ac.gradient&&((w).hasOwnProperty(e.type)||String(ac.gradient).charAt(0)!="r")){F.addGradientFill(e,ac.gradient);}if(!I.hasOwnProperty(e.type)||e._.rt.deg){e.setBox(e.attrs);}}return e;};u.toFront=function(){if(!this.removed){this.Group.parentNode.appendChild(this.Group);}if(this.paper.top!=this){a.toFront(this,this.paper);}return this;};u.toBack=function(){if(this.removed){return this;}if(this.Group.parentNode.firstChild!=this.Group){this.Group.parentNode.insertBefore(this.Group,this.Group.parentNode.firstChild);a.toBack(this,this.paper);}return this;};u.insertAfter=function(e){if(this.removed){return this;}if(e instanceof g.Set){e=e.item(e.size());}if(e.Group.nextSibling){e.Group.parentNode.insertBefore(this.Group,e.Group.nextSibling);}else{e.Group.parp�H    p�H                    ���            `6�    ذH            ��H    �      ��H            e){if(this.removed){return this;}if(e instanceof g.Set){e=e.item(0);}e.Group.parentNode.insertBefore(this.Group,e.Group);a.insertBefore(this,e,this.paper);return this;};u.blur=function(e){var A=this.node.runtimeStyle;var X=A.filter;X=X.replace(c,q);if(+e!==0){this.attrs.blur=e;A.filter=X+h+S+".Blur(pixelradius="+(+e||1.5)+")";A.margin=W.sub("-{0}px 0 0 -{0}px",[x(+e||1.5)]);}else{A.filter=X;A.margin=0;delete this.attrs.blur;}};t._SYNC_UI_ATTRS=t._SYNC_UI_ATTRS.join(",").replace(/,(height|width)/g,"").split(",");t._uiSetWidth=function(Y){var X=this;g.superclass._uiSetWidth.apply(X,arguments);var A=X.canvas.style;var e=X.get("height");if(V(Y)){Y+="px";}if(V(e)){e+="px";}A.width=Y;A.clip="rect(0 "+Y+" "+e+" 0)";};t._uiSetHeight=function(Y){var A=this;g.superclass._uiSetHeight.apply(A,arguments);var e=A.canvas.style;var X=A.get("width");if(V(Y)){Y+="px";}if(V(X)){X+="px";}e.height=Y;e.clip="rect(0 "+X+" "+Y+" 0)";};},"@VERSION@",{requires:["aui-drawing-base"],condition:{name:"aui-drawing-vml",trigger:"aui-drawing-base",test:function(a){return a.UA.vml;}}});