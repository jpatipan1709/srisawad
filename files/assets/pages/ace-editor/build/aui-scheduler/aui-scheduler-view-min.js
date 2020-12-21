AUI.add("aui-scheduler-view",function(c1){var dh=c1.Lang,bn=dh.isBoolean,E=dh.isFunction,aW=dh.isNumber,dy=dh.isObject,cN=dh.isString,cy=function(A){return parseFloat(A)||0;},cB=function(dD,A){return Math.round(dD/A)*A;},aE=c1.DataType.DateMath,cW=c1.WidgetStdMod,a4=aE.WEEK_LENGTH,cE="scheduler-view",aV="scheduler-view-day",dp="scheduler-view-month",ct="scheduler-view-table",c7="scheduler-view-week",bD="activeColumn",cx="activeView",U="allDay",aD="body",bc="boundingBox",dB="cancel",be="close",at="col",aL="colDaysNode",c5="colHeaderDaysNode",O="colblank",D="coldata",aY="colday",b="colgrid",ae="colspan",q="coltime",b0="columnData",bl="columnDayHeader",a0="columnShims",a9="columnTableGrid",bL="columnTime",a8="container",a5="content",bC="creationEndDate",ah="creationStartDate",bK="currentDate",cf="data",de="day",aa="days",ay="dd",aN="delegate",H="delegateConfig",cw="disabled",bi="displayDaysInterval",cR="displayRows",af="div",bX="division",ds="dotted",ak="down",c9="dragNode",B="dragging",L="draggingEvent",cM="duration",aQ="endDate",bv="event",dr="eventClass",cv="eventPlaceholder",dA="eventRecorder",v="eventWidth",cS="events",cq="eventsOverlay",aj="eventsOverlayNode",cV="filterFn",aX="first",c8="firstDayOfWeek",cj="fixedHeight",bH="grid",cc="gridContainer",bw="grip",dz="hd",cY="header",by="headerDateFormatter",dw="headerTableNode",br="headerView",bV="headerViewConfig",a2="headerViewLabelNode",cJ="height",bz="horizontal",bb="host",aT="hourHeight",x="icon",x="icon",aw="isoTime",al="label",bj="lasso",bd="left",aM="locale",o="marginRight",an="marker",bx="markercell",bp="markercellsNode",P="markers",cm="markersNode",cp="month",bF="monthContainerNode",da="monthRowContainer",f="monthRows",b8="more",I="mousedown",S="mousemove",bh="mouseup",a6="next",dC="node",av="nomonth",aF="noscroll",cX="offsetHeight",cZ="offsetWidth",bE="overlay",c2="pad",aZ="paddingNode",dk="parentEvent",Y="parentNode",b6="proxy",bM="proxyNode",au="px",ao="region",bf="rendered",cT="repeated",cH="resizer",cO="resizerNode",cA="resizing",bq="right",b4="row",b3="rowsContainerNode",cD="save",u="scheduler",aS="scheduler-event",ag="scrollable",Z="shim",Q="showMore",c6="startDate",ad="startXY",cP="strings",bg="table",G="tableGridNode",cd="tableNode",cr="tableRowContainer",dn="tableRows",cb="tbody",i="td",bZ="time",ar="timesNode",k="title",a="tl",ax="today",b2="top",dx="tr",ca="view",aK="visible",dj="week",ch="width",y="data-colnumber",m="a",bW=",",cz="-",cG=".",cu="",h="&mdash;",ci="%",ac=" ",J=c1.getClassName,bY=J(cE,aF),am=J(cE,ag);var bo=c1.Component.create({NAME:cE,AUGMENTS:[c1.WidgetStdMod],ATTRS:{bodyContent:{value:cu},eventClass:{valueFn:function(){return c1.SchedulerEvent;}},filterFn:{validator:E,value:function(A){return true;}},height:{value:600},isoTime:{value:false,validator:bn},name:{value:cu,validator:cN},navigationDateFormatter:{value:function(dD){var A=this;var dE=A.get(u);return c1.DataType.Date.format(dD,{format:"%A, %d %B, %Y",locale:dE.get(aM)});},validator:E},nextDate:{getter:"getNextDate",readOnly:true},prevDate:{getter:"getPrevDate",readOnly:true},scheduler:{lazyAdd:false,setter:"_setScheduler"},scrollable:{value:true,validator:bn},triggerNode:{setter:c1.one},visible:{value:false}},BIND_UI_ATTRS:[ag],prototype:{initializer:function(){var A=this;A.after("render",A._afterRender);},syncUI:function(){var A=this;A.syncStdContent();},adjustCurrentDate:function(){var A=this;var dE=A.get(u);var dD=dE.get(bK);dE.set(bK,dD);},flushViewCache:function(){},getNextDate:function(){},getPrevDate:function(){},getToday:function(){return aE.clearTime(new Date());},limitDate:function(dD,dE){var A=this;if(aE.after(dD,dE)){dD=aE.clone(dE);}return dD;},plotEvents:function(){},syncStdContent:function(){},syncEventUI:function(A){},_uiSetCurrentDate:function(A){},_afterRender:function(dD){var A=this;A.adjustCurrentDate();A._uiSetScrollable(A.get(ag));},_setScheduler:function(dE){var A=this;var dD=A.get(u);if(dD){A.removeTarget(dD);}if(dE){A.addTarget(dE);dE.after("eventsChange",c1.bind(A.flushViewCache,A));}return dE;},_uiSetScrollable:function(dE){var A=this;var dD=A.bodyNode;if(dD){dD.toggleClass(am,dE);dD.toggleClass(bY,!dE);}},_uiSetVisible:function(dD){var A=this;bo.superclass._uiSetVisible.apply(this,arguments);if(dD&&A.get(bf)){A.adjustCurrentDate();}}}});c1.SchedulerView=bo;var cs=dh.sub;var n=c1.cached(function(){var dF=c1.config.doc,dD=dF.createElement("div"),A=dF.getElementsByTagName("body")[0],dE=0.1;if(A){dD.style.cssText="position:absolute;visibility:hidden;overflow:scroll;width:20px;";dD.appendChild(dF.createElement("p")).style.height="1px";A.insertBefore(dD,A.firstChild);dE=dD.offsetWidth-dD.clientWidth;A.removeChild(dD);}return dE;},null,0.1);var T=function(A,dD){return function(dF){var dE=dF.all(A);return(dE.size()>=dD)?dE:null;};},j=J(x),M=J(x,bw,ds,bz),a1=J(aS),bR=J(aS,cw),cK=J(aS,b6),X=J(u,ax),aB=J(u,ax,dz),F=J(cE,D),e=J(cE,b),db=J(cE,bH),dc=J(cE,bH,a8),a3=J(cE,de,cH,x),cI=J(cE,de,cH),bU=J(cE,an,bX),dd=J(cE,bx),R=J(cE,P),ce=J(cE,de,bg),dg=J(cE,de,cY,bg),w=J(cE,de,cY,de),bT=J(cE,de,cY,de,c2,bq),cL=J(cE,de,cY,de,aX),bu=J(cE,de,cY,at),bG=J(cE,de,cY,ca,al),dt=J(cE,de,bg,at),aR=J(cE,de,bg,at,Z),W=J(cE,de,bg,O),N=J(cE,de,bg,aY),dl=J(cE,de,bg,q),b1=J(cE,de,bg,bZ),s='<div class="'+cI+'">'+'<div class="'+[j,M,a3].join(ac)+'"></div>'+"</div>",ap='<div class="'+dd+'">'+'<div class="'+bU+'"></div>'+"</div>",r='<span class="'+bG+'">{label}</span>',aI='<table cellspacing="0" cellpadding="0" class="'+ce+'">'+"<tbody>"+'<tr class="'+e+'" height="1">'+'<td height="0" class="'+[dt,W].join(ac)+'"></td>'+'<td class="'+dc+'" colspan="1">'+'<div class="'+db+'">'+'<div class="'+R+'"></div>'+"</div>"+"</td>"+"</tr>"+'<tr class="'+F+'">'+'<td class="'+[dt,dl].join(ac)+'"></td>'+"</tr>"+"</tbody>"+"</table>",bN='<td class="'+[dt,N].join(ac)+'" data-colnumber="{colNumber}">'+'<div class="'+aR+'"></div>'+"</td>",l='<div class="'+b1+'">{hour}</div>',aJ='<table cellspacing="0" cellpadding="0" class="'+dg+'">'+"<tbody>"+'<tr class="'+bu+'"></tr>'+"</tbody>"+"</table>",bQ='<th class="'+w+'" data-colnumber="{colNumber}"><a href="#">&nbsp;</a></th>',aH='<td class="'+[w,cL].join(ac)+'"></td>',C='<th class="'+[w,bT].join(ac)+'">&nbsp;</th>';
var dv=c1.Component.create({NAME:aV,ATTRS:{bodyContent:{value:cu},days:{value:1,validator:aW},delegateConfig:{value:{},setter:function(dD){var A=this;return c1.merge({dragConfig:{useShim:false},bubbleTargets:A,container:A.get(bc),nodes:cG+a1,invalid:"input, select, button, a, textarea, "+cG+bR},dD||{});},validator:dy},eventWidth:{value:95,validator:aW},filterFn:{value:function(A){return(A.getHoursDuration()<=24&&!A.get(U));}},headerDateFormatter:{value:function(dD){var A=this;var dE=A.get(u);return c1.DataType.Date.format(dD,{format:"%a %m/%d",locale:dE.get(aM)});},validator:cN},headerView:{value:true,validator:bn},headerViewConfig:{setter:function(dD){var A=this;return c1.merge({displayDaysInterval:1,displayRows:6,filterFn:function(dE){return((dE.getHoursDuration()>24)||dE.get(U));},height:"auto",visible:true},dD||{});},value:{}},hourHeight:{value:52,validator:aW},name:{value:de},navigationDateFormatter:{value:function(dD){var A=this;var dE=A.get(u);return c1.DataType.Date.format(dD,{format:"%A, %b %d, %Y",locale:dE.get(aM)});},validator:E},strings:{value:{allDay:"All day"}},headerTableNode:{valueFn:function(){return c1.Node.create(aJ);}},headerViewLabelNode:{valueFn:function(){var dD=this;var A=dD.get(cP);return c1.Node.create(cs(r,{label:A[U]}));}},resizerNode:{valueFn:function(){return c1.Node.create(s);}},tableNode:{valueFn:function(){return c1.Node.create(aI);}},colDaysNode:{valueFn:"_valueColDaysNode"},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},markercellsNode:{valueFn:"_valueMarkercellsNode"},timesNode:{valueFn:"_valueTimesNode"}},HTML_PARSER:{colDaysNode:T(cG+N,1),colHeaderDaysNode:T(cG+w,2),headerTableNode:cG+dg,headerViewLabelNode:cG+bG,markercellsNode:T(cG+dd,24),resizerNode:cG+cI,tableNode:cG+ce,timesNode:T(cG+b1,24)},EXTENDS:c1.SchedulerView,prototype:{initializer:function(){var A=this;A[aL]=A.get(aL);A[c5]=A.get(c5);A[dw]=A.get(dw);A[bp]=A.get(bp);A[cO]=A.get(cO);A[cd]=A.get(cd);A[ar]=A.get(ar);A[bD]=null;A[b0]=A[cd].one(cG+F);A[bl]=A.headerTableNode.one(cG+bu);A[a0]=A[aL].all(cG+aR);A[bL]=A[cd].one(cG+dl);A[cc]=A[cd].one(cG+dc);A[cm]=A[cd].one(cG+R);if(A.get(br)){A[br]=new c1.SchedulerTableView(A.get(bV));}},renderUI:function(){var A=this;A[bL].setContent(A[ar]);A[cm].setContent(A[bp]);A[aL].appendTo(A[b0]);A[c5].appendTo(A[bl]);if(A[br]){A[br].set(u,A.get(u));A[br].render();}},bindUI:function(){var A=this;A[dw].delegate("click",c1.bind(A._onClickDaysHeader,A),cG+w);A[b0].delegate("mousedown",c1.bind(A._onMouseDownTableCol,A),cG+dt);A[b0].delegate("mouseenter",c1.bind(A._onMouseEnterEvent,A),cG+a1);A[b0].delegate("mouseleave",c1.bind(A._onMouseLeaveEvent,A),cG+a1);A[b0].delegate("mousemove",c1.bind(A._onMouseMoveTableCol,A),cG+N);A[b0].delegate("mouseup",c1.bind(A._onMouseUpTableCol,A),cG+dt);A.on("drag:end",A._onEventDragEnd);A.on("drag:start",A._onEventDragStart);A.on("drag:tickAlignY",A._dragTickAlignY);A.on("schedulerChange",A._onSchedulerChange);A.after("drag:align",A._afterDragAlign);},syncUI:function(){var A=this;dv.superclass.syncUI.apply(this,arguments);A[cc].attr(ae,A.get(aa));A._setupDragDrop();},syncStdContent:function(){var dD=this;dD.setStdModContent(cW.BODY,dD[cd].getDOM());var A=c1.NodeList.create(dD[dw]);if(dD[br]){A.push(dD[br].get(bc));A.push(dD.get(a2));}dD.setStdModContent(cW.HEADER,A);},calculateEventHeight:function(dE){var dD=this;var A=dD.get(aT);return Math.max(dE*(A/60),A/2);},calculateTop:function(dD){var A=this;return((dD.getHours()*60)+dD.getMinutes()+(dD.getSeconds()/60))*(A.get(aT)/60);},getNextDate:function(){var A=this;var dD=A.get(u).get(bK);return aE.add(dD,aE.DAY,1);},getPrevDate:function(){var A=this;var dD=A.get(u).get(bK);return aE.subtract(dD,aE.DAY,1);},getColumnByDate:function(dD){var A=this;return A[aL].item(A.getDateDaysOffset(dD));},getColumnShimByDate:function(dD){var A=this;return A[a0].item(A.getDateDaysOffset(dD));},getDateByColumn:function(dE){var A=this;var dD=aE.safeClearTime(A.get(u).get(bK));return aE.add(dD,aE.DAY,dE);},getDateDaysOffset:function(dE){var A=this;var dD=aE.safeClearTime(A.get(u).get(bK));return aE.getDayOffset(aE.safeClearTime(dE),dD);},getYCoordTime:function(dG){var dD=this;var A=dD.get(aT);var dH=cy((dG/A).toFixed(2));var dF=Math.floor((dH*100)%100*0.6);var dE=Math.floor(dH);return[dE,dF,0];},plotEvent:function(dE){var A=this;var dF=dE.get(dC);if(dF.size()<2){dE.addPaddingNode();}var dH=dE.get(dC).item(0);var dD=dE.get(dC).item(1);var dG=A.getColumnShimByDate(dE.get(aQ));var dI=A.getColumnShimByDate(dE.get(c6));if(dI){dI.append(dH);if(dE.get(aK)){dH.show();}}else{dH.hide();}if(dG){if(dG.compareTo(dI)||dE.isDayBoundaryEvent()){dD.hide();}else{dG.append(dD);if(dE.get(aK)){dD.show();}}}else{dD.hide();}dE.syncNodeUI();A.syncEventTopUI(dE);A.syncEventHeightUI(dE);},plotEvents:function(){var A=this;var dD=A.get(u);var dE=A.get(cV);A[a0].each(function(dI,dH){var dF=dD.getEventsByDay(A.getDateByColumn(dH),true);var dG=[];dI.empty();c1.Array.each(dF,function(dJ){if(dE.apply(A,[dJ])){A.plotEvent(dJ);dG.push(dJ);}});A.syncEventsIntersectionUI(dG);});if(A.get(br)){A.syncHeaderViewUI();}},syncColumnsUI:function(){var A=this;A[aL].each(function(dF,dE){var dD=A.getDateByColumn(dE);dF.toggleClass(X,aE.isToday(dD));});},syncDaysHeaderUI:function(){var dD=this;var dE=dD.get(u).get(bK);var dF=dD.get(by);var A=dD.get(aM);dD[c5].all(m).each(function(dI,dH){var dG=aE.add(dE,aE.DAY,dH);dI.toggleClass(aB,aE.isToday(dG));dI.html(dF.call(dD,dG));});},syncEventsIntersectionUI:function(dD){var A=this;var dE=A.get(v);A.get(u).flushEvents();c1.Array.each(dD,function(dG){var dI=A.findEventIntersections(dG,dD);var dH=dI.length;var dF=(dE/dH);c1.Array.each(dI,function(dK,dL){var dJ=dK.get(dC).item(0);var dN=dF*dL;var dM=dF*1.7;if(dL===(dH-1)){dM=dE-dN;}dJ.setStyle(ch,dM+ci);dJ.setStyle(bd,dN+ci);var dO=dJ.get(Y);if(dO){dO.insert(dJ,dL);}dK._filtered=true;});});},syncEventHeightUI:function(dF){var dD=this;var dJ=dF.get(aQ);var A=dF.get(c6);var dG=aE.clone(A);dG.setHours(24,0,0);var dH=aE.getMinutesOffset(dD.limitDate(dJ,dG),A);
dF.get(dC).item(0).set(cX,dD.calculateEventHeight(dH));var dE=dF.get(dC).item(1);if(dE.inDoc()){var dI=aE.getMinutesOffset(dJ,aE.toMidnight(dF.getClearEndDate()));dE.set(cX,dD.calculateEventHeight(dI));}},syncEventTopUI:function(dD){var A=this;dD.get(dC).item(0).setStyle(b2,A.calculateTop(dD.get(c6))+au);dD.get(dC).item(1).setStyle(b2,0);},syncHeaderViewUI:function(){var dD=this;if(dD.get(br)){var dF=dD[br];dF.plotEvents();var dG=dF.get(bc);dG.setStyle(o,n());var dE=dG.one(cG+bt);var A=Math.max(dE.get(cX),40);dF.set(cJ,A);dD._fillHeight();}},calculateYDelta:function(dE,dD){var A=this;return(dD[1]-dE[1])/(A.get(aT)/2)*30;},findEventIntersections:function(dD,dE){var A=this;var dF=[];c1.Array.each(dE,function(dG){if(!dD._filtered&&dD.intersectHours(dG)){dF.push(dG);}});return dF;},getXYDelta:function(dD){var A=this;var dE=dD.currentTarget.getXY(),dF=[dD.pageX,dD.pageY];return c1.Array.map(dE,function(dH,dG){return(dF[dG]-dH);});},getTickY:function(){var A=this;return cB(Math.ceil(A.get(aT)/2),10);},roundToNearestHour:function(dD,dE){var A=this;dD.setHours(dE[0],cB(dE[1],A.getTickY()),dE[2]);},_afterDragAlign:function(dE){var dD=this;var A=dE.target;if(!dD[ad]){dD[ad]=A.actXY;}A.actXY[0]=null;},_dragTickAlignX:function(dE){var dD=this;var dH=dD[L];if(dH&&!dD[cA]){var dF=dD[cv];var dG=cy(dE.attr(y))-dD.startColNumber;dD.draggingEventStartDate=aE.add(dH.get(c6),aE.DAY,dG);var A=aE.clone(dD.draggingEventStartDate);aE.copyHours(A,dF.get(c6));dF.move(A);dD.plotEvent(dF);}},_dragTickAlignY:function(A){var dI=this;var dD=dI.get(u);var dK=dD.get(dA);var dF=dI[L];if(dF){var dJ=A.target.get(bb);var dG=dI[cv];var dH=dI.calculateYDelta(dI[ad],dJ.actXY);if(dI[cA]){var dE=aE.add(dI.draggingEventEndDate,aE.MINUTES,dH);if(aE.getMinutesOffset(dE,dI.draggingEventStartDate)<=dK.get(cM)){return;}dG.set(aQ,dE);}else{dG.move(aE.add(dI.draggingEventStartDate,aE.MINUTES,dH));}dI.plotEvent(dG);}},_setupDragDrop:function(){var dD=this;if(!dD[cv]){var dE=dD.get(u);dD[cv]=new (dD.get(dr))({scheduler:dE});dD[cv].removeTarget(dE);dD[cv].get(dC).addClass(cK).hide();}if(!dD.delegate){dD.delegate=new c1.DD.Delegate(dD.get(H));}var A=dD.delegate.dd;A.unplug(c1.Plugin.DDConstrained);A.unplug(c1.Plugin.DDNodeScroll);var dF=dD.bodyNode.get(ao);dF.bottom=Infinity;dF.top=-Infinity;A.plug(c1.Plugin.DDConstrained,{bubbleTargets:dD,constrain:dF,stickY:true,tickY:dD.get(aT)/2});A.plug(c1.Plugin.DDNodeScroll,{node:dD.bodyNode,scrollDelay:150});},_uiSetCurrentDate:function(dD){var A=this;A.syncColumnsUI();A.syncDaysHeaderUI();},_onClickDaysHeader:function(dF){var A=this;var dE=A.get(u);if(dF.target.test(m)){var dG=dE.getViewByName(de);if(dG){var dD=cy(dF.currentTarget.attr(y));dE.set(bK,A.getDateByColumn(dD));dE.set(cx,dG);}}dF.preventDefault();},_onEventDragEnd:function(dD){var A=this;var dF=A[L];if(dF){var dE=A[cv];dE.set(aK,false);dF.set(aK,true);dF.copyDates(dE);A.get(u).syncEventsUI();}A[ad]=null;A[L]=null;},_onEventDragStart:function(dE){var A=this;var dG=A[L]=A.delegate.dd.get(dC).getData(aS);if(dG){var dF=A[cv];dF.copyPropagateAttrValues(dG);A.plotEvent(dF);dG.set(aK,false);A.draggingEventStartDate=aE.clone(dG.get(c6));A.draggingEventEndDate=aE.clone(dG.get(aQ));var dD=A.getColumnByDate(dG.get(c6));A.startColNumber=dD?cy(dD.attr(y)):0;}},_onMouseDownTableCol:function(dD){var dI=this;var dH=dD.target;var dF=dI.get(u);var dJ=dF.get(dA);if(dJ&&!dF.get(cw)){dJ.hideOverlay();if(dH.test(cG+aR)){dI[ad]=[dD.pageX,dD.pageY];var dK=cy(dD.currentTarget.attr(y));var dE=dI.getDateByColumn(dK);var A=dI.getXYDelta(dD);dI.roundToNearestHour(dE,dI.getYCoordTime(A[1]));var dG=aE.add(dE,aE.MINUTES,dJ.get(cM));dJ.move(dE);dJ.set(U,false);dJ.set(aQ,dG);dI[ah]=dE;dI[bC]=dG;dD.halt();}else{if(dH.test([cG+cI,cG+a3].join(bW))){dI[cA]=true;}}}dI.get(bc).unselectable();},_onMouseEnterEvent:function(dE){var A=this;var dF=dE.currentTarget;var dD=dF.getData(aS);if(dD&&!dD.get(cw)){A[cO].appendTo(dF);}},_onMouseLeaveEvent:function(dD){var A=this;if(!A[cA]){A._removeResizer();}},_onMouseMoveTableCol:function(dG){var A=this;var dF=dG.currentTarget;var dD=A.get(u).get(dA);if(A[bD]!==dF){A[bD]=dF;A._dragTickAlignX(A[bD]);}var dE=A[bC];var dH=A[ah];if(dH){var dI=cB(A.calculateYDelta(A[ad],[dG.pageX,dG.pageY]),A.getTickY());if(A._delta!==dI){if(dI>0){dD.set(aQ,aE.add(dE,aE.MINUTES,dI));}else{dD.set(c6,aE.add(dH,aE.MINUTES,dI));}A.plotEvent(dD);A._delta=dI;}}},_onMouseUpTableCol:function(dF){var A=this;var dE=A.get(u);var dD=dE.get(dA);if(dD&&!dE.get(cw)){if(A[ah]){A.plotEvent(dD);dD.showOverlay([dF.pageX,dF.pageY]);}}A[ah]=null;A[bC]=null;A[cA]=false;A[ad]=null;A._removeResizer();A.get(bc).selectable();},_onSchedulerChange:function(dD){var A=this;if(A[br]){A[br].set(u,dD.newVal);}},_removeResizer:function(){var A=this;A[cO].remove();},_valueColDaysNode:function(){var A=this;var dF=A.get(aa);var dD=[],dE=0;while(dF--){dD.push(c1.Lang.sub(bN,{colNumber:dE++}));}return c1.NodeList.create(dD.join(cu));},_valueColHeaderDaysNode:function(){var A=this;var dF=A.get(aa);var dD=[],dE=0;dD.push(aH);while(dF--){dD.push(c1.Lang.sub(bQ,{colNumber:dE++}));}dD.push(C);return c1.NodeList.create(dD.join(cu));},_valueMarkercellsNode:function(){var A=this;var dD=[],dE;for(dE=0;dE<=23;dE++){dD.push(ap);}return c1.NodeList.create(dD.join(cu));},_valueTimesNode:function(){var A=this;var dF=A.get(aw);var dE=[],dD;for(dD=0;dD<=23;dD++){dE.push(cs(l,{hour:dF?aE.toIsoTimeString(dD):aE.toUsTimeString(dD,false,true)}));}return c1.NodeList.create(dE.join(cu));}}});c1.SchedulerDayView=dv;var aA=c1.Component.create({NAME:c7,ATTRS:{bodyContent:{value:cu},days:{value:7},headerViewConfig:{value:{displayDaysInterval:a4}},name:{value:dj},navigationDateFormatter:{valueFn:function(){return this._valueNavigationDateFormatter;},validator:E}},EXTENDS:c1.SchedulerDayView,prototype:{adjustCurrentDate:function(){var A=this;var dF=A.get(u);var dD=dF.get(bK);var dE=dF.get(c8);dF.set(bK,aE.getFirstDayOfWeek(dD,dE));},getNextDate:function(){var A=this;var dE=A.get(u);var dD=dE.get(bK);var dF=A._firstDayOfWeek(dD);
return aE.add(dF,aE.WEEK,1);},getPrevDate:function(){var A=this;var dE=A.get(u);var dD=dE.get(bK);var dF=A._firstDayOfWeek(dD);return aE.subtract(dF,aE.WEEK,1);},getToday:function(){var A=this;var dD=aA.superclass.getToday.apply(this,arguments);return A._firstDayOfWeek(dD);},_firstDayOfWeek:function(dE){var A=this;var dF=A.get(u);var dD=dF.get(c8);return aE.getFirstDayOfWeek(dE,dD);},_valueNavigationDateFormatter:function(dF){var dE=this;var dG=dE.get(u);var dD=dG.get(aM);var A=dE._firstDayOfWeek(dF);var dH=c1.DataType.Date.format(A,{format:"%b %d",locale:dD});var dJ=aE.add(A,aE.DAY,dE.get(aa)-1);var dI=c1.DataType.Date.format(dJ,{format:(aE.isMonthOverlapWeek(dF)?"%b %d":"%d")+", %Y",locale:dD});return[dH,h,dI].join(ac);}}});c1.SchedulerWeekView=aA;var j=J(x),p=J(x,"arrowstop-1-l"),dm=J(x,"arrowstop-1-r"),t=J(cE,bg,b),a7=J(cE,bg,b,aX),aG=J(cE,bg,b,ax),bO=J(cE,bg,a8),du=J(cE,bg,cS,bE,dC),az=J(cE,bg,cS,bE,dC,aD),cl=J(cE,bg,cS,bE,dC,be),aC=J(cE,bg,cY,at),di=J(cE,bg,cY,de),d=J(cE,bg,cY,bg),co=J(cE,bg,b8),c0=J(cE,bg,b4),cg=J(cE,bg,b4,a8),bt=J(cE,bg,cf),cU=J(cE,bg,cf,at),b9=J(cE,bg,cf,at,k),cQ=J(cE,bg,cf,at,k,ak),ck=J(cE,bg,cf,at,k,aX),dq=J(cE,bg,cf,at,k,a6),bS=J(cE,bg,cf,at,k,ax),aO=J(cE,bg,cf,bv),c=J(cE,bg,cf,bv,bd),c3=J(cE,bg,cf,bv,cT),aq=J(cE,bg,cf,bv,bq),ai=J(cE,bg,cf,aX),aU=J(cE,bg,bH),cn=J(cE,bg,bH,aX),ba='<div class="'+bO+'">'+'<div class="'+cg+'"></div>'+"</div>",b7='<div class="'+du+'">'+'<div class="'+az+'"></div>'+'<a href="javascript:;" class="'+cl+'">{label}</a>'+"</div>",cF='<td class="'+t+'">&nbsp;</td>',g='<th class="'+di+'"><div>&nbsp;</div></th>',ab='<table cellspacing="0" cellpadding="0" class="'+d+'">'+"<tbody>"+'<tr class="'+aC+'"></tr>'+"</tbody>"+"</table>",bB='<a href="javascript:;" class="'+co+'">{label} {count}</a>',bJ='<div class="'+c0+'" style="top: {top}%; height: {height}%;"></div>',bP='<table cellspacing="0" cellpadding="0" class="'+bt+'">'+"<tbody></tbody>"+"</table>",bk='<table cellspacing="0" cellpadding="0" class="'+aU+'">'+"<tbody>"+"<tr></tr>"+"</tbody>"+"</table>",V='<span class="'+[j,p].join(ac)+'"></span>',bA='<span class="'+[j,dm].join(ac)+'"></span>',bI='<td class="'+cU+'"><div></div></td>',df="<tr></tr>";var bm=c1.Component.create({NAME:ct,ATTRS:{bodyContent:{value:cu},displayDaysInterval:{value:42},displayRows:{value:4},fixedHeight:{value:true},name:{value:bg},headerDateFormatter:{value:function(dD){var A=this;var dE=A.get(u);return c1.DataType.Date.format(dD,{format:"%a",locale:dE.get(aM)});},validator:cN},navigationDateFormatter:{value:function(dD){var A=this;var dE=A.get(u);return c1.DataType.Date.format(dD,{format:"%b %Y",locale:dE.get(aM)});},validator:E},scrollable:{value:false},strings:{value:{close:"Close",showMore:"Show more"}},headerTableNode:{valueFn:function(){return c1.Node.create(ab);}},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},rowsContainerNode:{valueFn:function(){return c1.Node.create(ba);}},tableGridNode:{valueFn:"_valueTableGridNode"}},HTML_PARSER:{colHeaderDaysNode:T(cG+di,7),headerTableNode:cG+d,rowsContainerNode:cG+bO,tableGridNode:T(cG+aU,7)},EXTENDS:c1.SchedulerView,prototype:{evtDateStack:null,evtRenderedStack:null,rowDataTableStack:null,initializer:function(){var A=this;A.evtDateStack={};A.evtRenderedStack={};A.rowDataTableStack={};A[c5]=A.get(c5);A[dw]=A.get(dw);A[b3]=A.get(b3);A[G]=A.get(G);A[bl]=A.headerTableNode.one(cG+aC);A[a9]=c1.NodeList.create();A[cr]=A[b3].one(cG+cg);A[dn]=c1.NodeList.create();},bindUI:function(){var A=this;A[b3].delegate("click",c1.bind(A._onClickMore,A),cG+co);},renderUI:function(){var A=this;var dD=A._getDisplayRowsCount();for(var dE=0;dE<dD;dE++){A[dn].push(A.buildGridRowNode(dE));}A._renderEventsOverlay();A[c5].appendTo(A[bl]);A[dn].appendTo(A[cr]);},buildEventsRow:function(dE,dJ,dI){var dD=this;var dF=dD.get(cR);var A=dD._getDisplayRowDaysCount();var dH=0;var dG=c1.Node.create(df);dD.loopDates(dE,dJ,function(dS,dO){if(dH>dO){return;}var dT=dD.getIntersectEvents(dS);var dQ=dD._getRenderableEvent(dT,dE,dJ,dS);var dM=c1.Node.create(bI);var dL=dM.one(af);if((dF<dT.length)&&(dI===(dF-1))){var dR=dD.get(cP);var dN=c1.Node.create(dh.sub(bB,{count:(dT.length-(dF-1)),label:dR[Q]}));dN.setData(cS,dT);dL.append(dN);}else{if(dQ){var dK=dD._getEvtSplitInfo(dQ,dS,dE,dJ);dM.attr(ae,dK.colspan);dH+=(dK.colspan-1);dD._syncEventNodeContainerUI(dQ,dL,dK);dD._syncEventNodeUI(dQ,dL,dS);var dP=String(dS.getTime());dD.evtRenderedStack[dP].push(dQ);}}dH++;dG.append(dM);});return dG;},buildEventsTable:function(A,dG){var dM=this;var dK=dM.get(cR);var dJ=aE.clearTime(dM._findCurrentIntervalStart());var dI=String(dJ.getTime()).concat(A.getTime()).concat(dG.getTime());var dL=dM.rowDataTableStack[dI];if(!dL){dL=c1.Node.create(bP);var dF=dL.one(cb);var dE=dM.buildEventsTitleRow(dL,A,dG);dF.append(dE);for(var dH=0;dH<dK;dH++){var dD=dM.buildEventsRow(A,dG,dH);dF.append(dD);}dM.rowDataTableStack[dI]=dL;}return dL;},buildEventsTitleRow:function(dE,dD,dG){var A=this;var dF=c1.Node.create(df);A.loopDates(dD,dG,function(dI,dH){var dJ=c1.Node.create(bI);dJ.addClass(b9).toggleClass(ck,(dH===0)).toggleClass(bS,aE.isToday(dI)).toggleClass(dq,aE.isToday(aE.subtract(dI,aE.DAY,1))).toggleClass(cQ,aE.isToday(aE.subtract(dI,aE.WEEK,1)));dF.append(dJ.setContent(dI.getDate()));});return dF;},buildGridRowNode:function(dH){var dE=this;var dF=dE._getDisplayRowsCount();var dD=100/dF;var A=dE._getTableGridNode(dH);var dG=c1.Node.create(dh.sub(bJ,{height:dD,top:dD*dH}));dG.append(A.toggleClass(cn,(dH===0)));return dG;},flushViewCache:function(){var A=this;A.evtDateStack={};A.evtRenderedStack={};A.rowDataTableStack={};},getIntersectEvents:function(dD){var A=this;var dG=A.get(u);var dF=String(dD.getTime());if(!A.evtDateStack[dF]){var dE=dG.getIntersectEvents(dD);A.evtDateStack[dF]=dE.filter(A.get(cV));}return A.evtDateStack[dF];},getNextDate:function(){var A=this;var dF=A.get(u);var dD=dF.get(bK);var dE=A.get(bi);return aE.add(dD,aE.DAY,dE);},getPrevDate:function(){var A=this;var dF=A.get(u);var dD=dF.get(bK);var dE=A.get(bi);return aE.subtract(dD,aE.DAY,dE);
},hideEventsOverlay:function(){var A=this;A[cq].set(aK,false);},loopDates:function(A,dF,dI,dJ,dH){var dK=this;var dD=aE.clone(A);var dE=dF.getTime();var dG;for(dG=0;dD.getTime()<=dE;dG++){dI.apply(dK,[dD,dG]);dD=aE.add(dD,(dJ||aE.DAY),(dH||1));}},plotEvents:function(){var dD=this;var dG=dD._findCurrentIntervalStart();var A=aE.safeClearTime(dG);dD.flushViewCache();dD.hideEventsOverlay();dD.bodyNode.all(cG+bt).remove();var dE=dD.get(bi);var dF=Math.min(dE,a4);dD[dn].each(function(dK,dI){var dH=aE.add(A,aE.DAY,dF*dI);var dL=aE.add(dH,aE.DAY,dF-1);var dJ=dD.buildEventsTable(dH,dL);if(dI===0){dJ.addClass(ai);}dK.append(dJ);});},syncDaysHeaderUI:function(){var dD=this;var dH=dD.get(u);var dE=dH.get(bK);var dG=dD.get(by);var A=dD.get(aM);var dF=dD._findFirstDayOfWeek(dE);dD.colHeaderDaysNode.all(af).each(function(dK,dJ){var dI=aE.add(dF,aE.DAY,dJ);dK.html(dG.call(dD,dI));});},syncGridUI:function(){var dM=this;var dG=dM.getToday();var dD=dM.get(u);dM[a9].removeClass(aG);var dF=dM._findCurrentIntervalStart();var dI=dM._findCurrentIntervalEnd();if(aE.between(dG,dF,dI)){var A=dD.get(c8);var dK=dM._findFirstDayOfWeek(dG);var dH=aE.getWeekNumber(dG,A)-aE.getWeekNumber(dF,A);var dL=(dG.getDate()-dK.getDate());var dE=dM._getCellIndex([dL,dH]);var dJ=dM[a9].item(dE);if(dJ){dJ.addClass(aG);}}},syncStdContent:function(){var A=this;A.setStdModContent(cW.BODY,A[b3].getDOM());A.setStdModContent(cW.HEADER,A[dw].getDOM());},_findCurrentIntervalEnd:function(){var A=this;var dF=A.get(u);var dD=dF.get(bK);var dE=A.get(bi);return aE.add(dD,aE.DAY,dE);},_findCurrentIntervalStart:function(){var A=this;var dD=A.get(u);return dD.get(bK);},_findFirstDayOfWeek:function(dE){var A=this;var dF=A.get(u);var dD=dF.get(c8);return aE.getFirstDayOfWeek(dE,dD);},_getDisplayRowsCount:function(){var A=this;var dD=A.get(bi);return Math.ceil(dD/a4);},_getDisplayRowDaysCount:function(){var A=this;var dD=A.get(bi);return Math.min(dD,a4);},_getEvtLabel:function(dE){var dD=this;var dF=dE.get(aQ);var A=dE.get(c6);return[A.getHours(),cz,dF.getHours(),ac,dE.get(a5)].join(cu);},_getEvtSplitInfo:function(dH,dK,A,dF){var dI=this;var dD=dH.getClearStartDate();var dG=dH.getClearEndDate();var dJ=aE.getDayOffset(dF,dK);var dE={colspan:Math.min(aE.getDayOffset(dG,dK),dJ)+1,left:aE.before(dD,A),right:aE.after(dG,dF)};return dE;},_getRenderableEvent:function(dL,A,dF,dM){var dK=this;var dI=String(dM.getTime());if(!dK.evtRenderedStack[dI]){dK.evtRenderedStack[dI]=[];}for(var dE=0;dE<dL.length;dE++){var dJ=dL[dE];var dD=dJ.get(c6);var dH=aE.after(dM,dD)&&!aE.isDayOverlap(dM,A);var dG=!aE.isDayOverlap(dD,dM);var dN=c1.Array.indexOf(dK.evtRenderedStack[dI],dJ)>-1;if(!dN&&(dG||dH)){return dJ;}}return null;},_getTableGridNode:function(dI){var dD=this;var dF=dD.get(bi);var A=dD[G].item(dI);var dH=A.one(dx);for(var dE=0;dE<Math.min(dF,a4);dE++){var dG=c1.Node.create(cF);dH.append(dG);dD[a9].push(dG);}return A;},_onClickMore:function(dE){var A=this;var dF=dE.target;var dD=dF.getData(cS);var dG=c1.NodeList.create();c1.Array.each(dD,function(dI){var dH=dI.get(dC).item(0).clone();dH.setData(aS,dI);dH.setStyles({height:"auto",left:0,position:"relative",top:0,width:"auto"});dG.push(dH);});A[cq].bodyNode.one(cG+az).setContent(dG);A[cq].setAttrs({visible:true,xy:dF.getXY()});},_renderEventsOverlay:function(){var dD=this;var A=dD.get(cP);dD[cq]=new c1.Overlay({align:{points:[a,a]},bodyContent:dh.sub(b7,{label:A[be]}),render:dD[b3],visible:false,width:250,zIndex:450});dD[cq].bodyNode.delegate("click",c1.bind(dD.hideEventsOverlay,dD),cG+cl);},_syncEventNodeContainerUI:function(dD,dF,dE){var A=this;dF.addClass(aO);if(dE.left){dF.addClass(c).prepend(V);}if(dE.right){dF.addClass(aq).append(bA);}if(dD.get(dk)){dF.addClass(c3);}},_syncEventNodeUI:function(dL,dD,dN){var dM=this;var dG=dM.get(u);var A=dG.get(c8);var dF=dL.get(dC);var dE=dL.get(c6);var dK=aE.clearTime(dM._findCurrentIntervalStart());var dH=aE.getFirstDayOfWeek(new Date(Math.max(dE,dK)),A);var dJ=Math.floor(aE.getDayOffset(dN,dH)/a4);if(dF.size()<=dJ){dL.addPaddingNode();}var dI=dF.item(dJ);dI.setStyles({height:"auto",left:0,top:0,width:"auto"});dI.appendTo(dD);dL.syncNodeUI();},_uiSetCurrentDate:function(dD){var A=this;A.syncDaysHeaderUI();A.syncGridUI();},_valueColHeaderDaysNode:function(){var A=this;var dD=A.get(bi);var dE=Math.min(dD,a4);return A._valueNodeList(dE,g);},_valueTableGridNode:function(){var A=this;var dD=A.get(bi);var dE=Math.min(dD,a4);return A._valueNodeList(dE,bk);},_valueNodeList:function(dF,dE){var A=this;var dD=[];while(dF--){dD.push(dE);}return c1.NodeList.create(dD.join(cu));}}});c1.SchedulerTableView=bm;var bs=J(dp,bg,cf,at,av);var aP=c1.Component.create({NAME:dp,ATTRS:{displayDaysInterval:{readOnly:true,value:42},name:{value:cp},navigationDateFormatter:{value:function(dD){var A=this;var dE=A.get(u);return c1.DataType.Date.format(dD,{format:"%B %Y",locale:dE.get(aM)});},validator:E}},EXTENDS:c1.SchedulerTableView,prototype:{getNextDate:function(){var A=this;var dE=A.get(u);var dD=dE.get(bK);return aE.add(dD,aE.MONTH,1);},getPrevDate:function(){var A=this;var dE=A.get(u);var dD=dE.get(bK);return aE.subtract(dD,aE.MONTH,1);},plotEvents:function(){var A=this;c1.SchedulerMonthView.superclass.plotEvents.apply(A,arguments);var dE=A.get(u);var dD=dE.get(bK);var dH=aE.findMonthEnd(dD);var dG=aE.findMonthStart(dD);var dF=A._findCurrentIntervalStart();var dI=A[cr].all(cG+b9);dI.each(function(dL,dJ){var dK=aE.add(dF,aE.DAY,dJ);if(aE.before(dK,dG)||aE.after(dK,dH)){dL.addClass(bs);}});},_findCurrentIntervalStart:function(){var A=this;var dF=A.get(u);var dD=dF.get(bK);var dE=aE.findMonthStart(dD);return A._findFirstDayOfWeek(dE);},_findFirstDayOfWeek:function(dE){var A=this;var dF=A.get(u);var dD=dF.get(c8);return aE.getFirstDayOfWeek(dE,dD);}}});c1.SchedulerMonthView=aP;var z=J(cE,bg,B),K=J(cE,bg,bj),cC=J(cE,bg,b6,dC),b5='<div class="'+K+'"></div>',c4='<div class="'+cC+'"></div>';c1.SchedulerTableViewDD=function(){};c1.SchedulerTableViewDD.ATTRS={delegateConfig:{value:{},setter:function(dD){var A=this;
return c1.merge({dragConfig:{offsetNode:false,useShim:false},bubbleTargets:A,container:A.get(bc),nodes:cG+a1,invalid:"input, select, button, a, textarea, "+cG+bR},dD||{});},validator:dy}};c1.mix(c1.SchedulerTableViewDD.prototype,{initializer:function(){var A=this;A[bM]=c1.Node.create(c4);A.after(A.viewDDBindUI,A,"bindUI");A.after(A.viewDDRenderUI,A,"renderUI");A.after(A.viewDDSyncUI,A,"syncUI");},viewDDBindUI:function(){var A=this;var dD=A.get(u).get(dA);if(dD){dD.on({cancel:c1.bind(A.removeLasso,A),save:c1.bind(A.removeLasso,A)});}A[b3].on({mousedown:c1.bind(A._onMouseDownGrid,A),mousemove:c1.bind(A._onMouseMoveGrid,A),mouseup:c1.bind(A._onMouseUpGrid,A)});A.after("drag:align",A._afterDragAlign);A.on("drag:end",A._onEventDragEnd);A.on("drag:start",A._onEventDragStart);},viewDDRenderUI:function(){var A=this;},viewDDSyncUI:function(){var A=this;A._setupDragDrop();},removeLasso:function(){var A=this;if(A[bj]){A[bj].remove();}},removeProxy:function(){var A=this;if(A[bM]){A[bM].remove();}},renderLasso:function(dJ,dD){var dP=this;var dG=dJ;var dI=dD;if(dJ[1]>dD[1]){dG=dD;dI=dJ;}var dQ=dG[0],dL=dG[1],dE=dI[0],A=dI[1];dP.removeLasso();dP.lasso=c1.NodeList.create();for(var dF=dL;dF<=A;dF++){var dH=dP.gridCellHeight,dO=dP.gridCellWidth,dM=0,dK=(dH*dF);if(dF===dL){if(dL===A){dM+=Math.min(dQ,dE)*dO;dO*=Math.abs(dE-dQ)+1;}else{dM+=dQ*dO;dO*=a4-dQ;}}else{if(dF===A){dO*=dE+1;}else{dO*=a4;}}var dN=c1.Node.create(b5);dP.lasso.push(dN);dP[b3].append(dN);dN.sizeTo(dO,dH);dN.setXY(dP._offsetXY([dM,dK],1));}},_afterDragAlign:function(A){var dJ=this;var dK=A.target;var dG=dJ.bodyNode.get(ao);var dH={bottom:A.pageY,left:A.pageX,right:A.pageX,top:A.pageY};if(!c1.DOM.inRegion(null,dG,true,dH)){return;}var dI=dJ[L];var dD=[A.pageX,A.pageY];var dF=dJ._findPosition(dJ._offsetXY(dD,-1));if(dI&&dJ._hasLassoChanged(dF)){dJ.lassoLastPosition=dF;var dE=aE.add(dJ._getPositionDate(dF),aE.MINUTES,dI.getMinutesDuration());dJ.renderLasso(dF,dJ._getDatePosition(dE));}},_findPosition:function(dF){var A=this;var dE=Math.floor(dF[0]/A.gridCellWidth);var dD=Math.floor(dF[1]/A.gridCellHeight);return[dE,dD];},_getCellIndex:function(dD){var A=this;return dD[1]*a4+dD[0];},_getDatePosition:function(dE){var dD=this;var dF=dD._findCurrentIntervalStart();var dG=aE.getDayOffset(dE,dF);var A=[];A[1]=Math.floor(dG/a4);A[0]=dG%a4;return A;},_getPositionDate:function(dE){var dD=this;var dG=dD._findCurrentIntervalStart();var A=aE.safeClearTime(dD._findFirstDayOfWeek(dG));var dF=aE.add(A,aE.DAY,dD._getCellIndex(dE));dF.setHours(0,0,0,0);return dF;},_�P�    �P�                    �7&            ��[    Q�            �P�    �      �P�            [0]!==dE[0])||(dD[1]!==dE[1]));},_offsetXY:function(dF,dE){var A=this;var dD=A[b3].getXY();return[dF[0]+dD[0]*dE,dF[1]+dD[1]*dE];},_onEventDragEnd:function(dD){var A=this;var dE=A[L];if(dE){dE.move(A._getPositionDate(A.lassoLastPosition));dE.set(aK,true);A[b3].removeClass(z).unselectable();dD.target.set(c9,A.originalDragNode);A.removeLasso();A.removeProxy();A.get(u).syncEventsUI();}A[L]=null;},_onEventDragStart:function(dG){var A=this;var dH=A[L]=A[aN][ay].get(dC).getData(aS);if(dH){A._syncCellDimensions();var dE=[dG.pageX,dG.pageY];var dF=A._findPosition(A._offsetXY(dE,-1));var dD=aE.add(A._getPositionDate(dF),aE.MINUTES,dH.getMinutesDuration());A.renderLasso(dF,A._getDatePosition(dD));dH.set(aK,false);A._syncProxyNodeUI(dH);A.lassoStartPosition=A.lassoLastPosition=dF;A[b3].addClass(z).unselectable();A.originalDragNode=dG.target.get(c9);dG.target.set(c9,A[bM]);}},_onMouseDownGrid:function(dG){var A=this;var dF=A.get(u);var dE=dF.get(dA);var dH=dG.target;if(dE&&dH.test([cG+t,cG+cU].join(bW))){A._recording=true;A._syncCellDimensions();var dD=A._offsetXY([dG.pageX,dG.pageY],-1);A.lassoStartPosition=A.lassoLastPosition=A._findPosition(dD);A.renderLasso(A.lassoStartPosition,A.lassoLastPosition);A[b3].unselectable();}},_onMouseMoveGrid:function(dF){var dD=this;var dG=dF.currentTarget;var dE=[dF.pageX,dF.pageY];var A=dD._findPosition(dD._offsetXY(dE,-1));if(dD._recording&&dD._hasLassoChanged(A)){dD.lassoLastPosition=A;dD.renderLasso(dD.lassoStartPosition,A);}},_onMouseUpGrid:function(dI){var dD=this;var dH=dD.get(u);var dF=dH.get(dA);if(dF&&dD._recording&&!dH.get(cw)){var dG=dD._getPositionDate(dD.lassoStartPosition);var dE=dD._getPositionDate(dD.lassoLastPosition);var A=new Date(Math.min(dG,dE));A.setHours(0,0,0);var dJ=new Date(Math.max(dG,dE));dJ.setHours(23,59,59);dF.set(U,true);dF.set(aQ,dJ);dF.set(c6,A);dF.showOverlay([dI.pageX,dI.pageY]);dD._recording=false;}},_setupDragDrop:function(){var dD=this;if(!dD[aN]){dD[aN]=new c1.DD.Delegate(dD.get(H));}var A=dD[aN][ay];A.unplug(c1.Plugin.DDConstrained);A.unplug(c1.Plugin.DDNodeScroll);A.unplug(c1.Plugin.DDProxy);A.plug(c1.Plugin.DDConstrained,{bubbleTargets:dD,constrain:dD.bodyNode});A.plug(c1.Plugin.DDNodeScroll,{node:dD.bodyNode,scrollDelay:150});A.plug(c1.Plugin.DDProxy,{moveOnEnd:false,positionProxy:false});},_syncCellDimensions:function(){var A=this;var dE=A.get(bi);var dD=Math.ceil(dE/a4);var dF=Math.min(dE,a4);A.gridCellHeight=A[b3].get(cX)/dD;A.gridCellWidth=A[b3].get(cZ)/dF;},_syncProxyNodeUI:function(dD){var A=this;var dE=dD.get(dC).item(0);A[bM].setStyles({backgroundColor:dE.getStyle("backgroundColor"),display:"block",width:"200px"});A[bM].appendTo(A[b3]);A[bM].setContent(dD.get(a5));}});c1.Base.mix(c1.SchedulerTableView,[c1.SchedulerTableViewDD]);},"@VERSION@",{skinnable:true,requires:["aui-scheduler-event","aui-calendar","aui-button-item","dd-drag","dd-delegate","dd-drop","dd-constrain"]});