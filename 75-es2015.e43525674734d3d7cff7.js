(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{dBcC:function(e,l,n){"use strict";n.d(l,"a",(function(){return t}));class t{}},qWIH:function(e,l,n){"use strict";n.r(l);var t=n("8Y7J");const a=n("j1vE").a;class u{}var i=n("5VhP"),r=n("pMnS"),c=n("5dod"),o=n("9thp"),s=n("5qES"),d=n("/om3"),g=n("Pn2z"),v=n("SSGA"),m=n("QBGs"),p=n("SVse"),b=n("LsR8"),h=n("qWwx"),f=n("/oDi"),w=n("JM9+"),y=n("yotz"),D=n("Gw5/"),C=n("J5kl"),k=n("1xDM"),T=n("+R2k");class E extends C.a{getWeekView(e){const{period:l}=super.getWeekView(e),n={period:l,allDayEventRows:[],hourColumns:[],users:[...e.users]};return n.users.forEach((l,t)=>{const a=e.events.filter(e=>e.meta.user.id===l.id),u=super.getWeekView(Object.assign({},e,{events:a}));n.hourColumns.push(u.hourColumns[0]),u.allDayEventRows.forEach(({row:e},l)=>{n.allDayEventRows[l]=n.allDayEventRows[l]||{row:[]},n.allDayEventRows[l].row.push(Object.assign({},e[0],{offset:t,span:1}))})}),n}}class x extends k.a{constructor(e,l,n,a){super(e,l,n,a),this.cdr=e,this.utils=l,this.dateAdapter=a,this.users=[],this.userChanged=new t.s,this.daysInWeek=1}ngOnChanges(e){super.ngOnChanges(e),e.users&&(this.refreshBody(),this.emitBeforeViewRender())}getDayColumnWidth(e){return Math.floor(e.offsetWidth/this.users.length)}dragMove(e,l){if(this.snapDraggedEvents){const n=this.getDraggedUserColumn(e,l.x),t=this.getDragMovedEventTimes(e,Object.assign({},l,{x:0}),this.dayColumnWidth,!0),a=e.event,u=Object.assign({},a,t,{meta:Object.assign({},a.meta,{user:n})}),i=this.events.map(e=>e===a?u:e);this.restoreOriginalEvents(i,new Map([[u,a]]))}this.dragAlreadyMoved=!0}dragEnded(e,l,n,t=!1){super.dragEnded(e,Object.assign({},l,{x:0}),n,t);const a=this.getDraggedUserColumn(e,l.x);a&&a!==e.event.meta.user&&this.userChanged.emit({event:e.event,newUser:a})}getWeekView(e){return this.utils.getWeekView(Object.assign({events:e,users:this.users,viewDate:this.viewDate,weekStartsOn:this.weekStartsOn,excluded:this.excludeDays,precision:this.precision,absolutePositionedEvents:!0,hourSegments:this.hourSegments,dayStart:{hour:this.dayStartHour,minute:this.dayStartMinute},dayEnd:{hour:this.dayEndHour,minute:this.dayEndMinute},segmentHeight:this.hourSegmentHeight,weekendDays:this.weekendDays},Object(T.e)(this.dateAdapter,this.viewDate,this.weekStartsOn,this.excludeDays,this.daysInWeek)))}getDraggedUserColumn(e,l){const n=Math.round(l/this.dayColumnWidth),t=this.view.users.findIndex(l=>l===e.event.meta.user)+n;return this.view.users[t]}}var S=t.Jb({encapsulation:2,styles:[],data:{}});function z(e){return t.hc(0,[(e()(),t.Lb(0,0,null,null,4,"div",[["class","cal-header"],["role","columnheader"],["tabindex","0"]],null,null,null,null,null)),(e()(),t.fc(-1,null,["\n      "])),(e()(),t.Lb(2,0,null,null,1,"b",[],null,null,null,null,null)),(e()(),t.fc(3,null,["",""])),(e()(),t.fc(-1,null,["\n    "]))],null,(function(e,l){e(l,3,0,l.context.$implicit.name)}))}function A(e){return t.hc(0,[(e()(),t.Lb(0,0,null,null,1,"div",[["class","cal-day-column"],["dragOverClass","cal-drag-over"],["mwlDroppable",""]],null,[[null,"drop"],[null,"dragEnter"]],(function(e,l,n){var t=!0,a=e.component;"drop"===l&&(t=!1!==a.eventDropped(n,e.context.$implicit.date,!0)&&t);"dragEnter"===l&&(t=!1!==a.dateDragEnter(e.context.$implicit.date)&&t);return t}),null,null)),t.Kb(1,212992,null,0,m.b,[t.q,m.d,t.K,t.R,[2,m.e]],{dragOverClass:[0,"dragOverClass"]},{dragEnter:"dragEnter",drop:"drop"})],(function(e,l){e(l,1,0,"cal-drag-over")}),null)}function L(e){return t.hc(0,[(e()(),t.Lb(0,16777216,[["event",1]],null,11,"div",[["class","cal-event-container"],["dragActiveClass","cal-drag-active"],["mwlDraggable",""]],[[2,"cal-draggable",null],[2,"cal-starts-within-week",null],[2,"cal-ends-within-week",null],[4,"width","%"],[4,"marginLeft","%"]],[[null,"dragStart"],[null,"dragging"],[null,"dragEnd"]],(function(e,l,n){var a=!0,u=e.component;"dragStart"===l&&(a=!1!==u.dragStarted(t.Xb(e.parent,0),t.Xb(e,0))&&a);"dragging"===l&&(a=!1!==u.allDayEventDragMove()&&a);"dragEnd"===l&&(a=!1!==u.dragEnded(e.context.$implicit,n,u.dayColumnWidth)&&a);return a}),null,null)),t.cc(512,null,p.I,p.J,[t.C,t.D,t.q,t.R]),t.Kb(2,278528,null,0,p.m,[p.I],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Kb(3,737280,null,0,m.c,[t.q,t.R,m.d,t.K,t.fb,[2,m.e],p.d],{dropData:[0,"dropData"],dragAxis:[1,"dragAxis"],dragSnapGrid:[2,"dragSnapGrid"],validateDrag:[3,"validateDrag"],dragActiveClass:[4,"dragActiveClass"]},{dragStart:"dragStart",dragging:"dragging",dragEnd:"dragEnd"}),t.ac(4,{event:0,calendarId:1}),t.ac(5,{x:0,y:1}),t.ac(6,{x:0}),(e()(),t.fc(-1,null,["\n        "])),(e()(),t.Lb(8,0,null,null,2,"mwl-calendar-week-view-event",[],null,[[null,"eventClicked"]],(function(e,l,n){var t=!0,a=e.component;"eventClicked"===l&&(t=!1!==a.eventClicked.emit({event:e.context.$implicit.event,sourceEvent:n.sourceEvent})&&t);return t}),b.b,b.a)),t.Kb(9,49152,null,0,h.a,[],{locale:[0,"locale"],weekEvent:[1,"weekEvent"],tooltipPlacement:[2,"tooltipPlacement"],tooltipAppendToBody:[3,"tooltipAppendToBody"],tooltipDelay:[4,"tooltipDelay"],customTemplate:[5,"customTemplate"],eventTitleTemplate:[6,"eventTitleTemplate"],eventActionsTemplate:[7,"eventActionsTemplate"],tooltipTemplate:[8,"tooltipTemplate"],daysInWeek:[9,"daysInWeek"]},{eventClicked:"eventClicked"}),(e()(),t.fc(-1,null,["\n        "])),(e()(),t.fc(-1,null,["\n      "])),(e()(),t.Ab(0,null,null,0))],(function(e,l){var n=l.component;e(l,2,0,"cal-event-container",null==l.context.$implicit.event?null:l.context.$implicit.event.cssClass);var a=e(l,4,0,l.context.$implicit.event,n.calendarId),u=e(l,5,0,l.context.$implicit.event.draggable&&0===n.allDayEventResizes.size,!n.snapDraggedEvents&&l.context.$implicit.event.draggable&&0===n.allDayEventResizes.size),i=n.snapDraggedEvents?e(l,6,0,n.dayColumnWidth):t.ub;e(l,3,0,a,u,i,n.validateDrag,"cal-drag-active"),e(l,9,0,n.locale,l.context.$implicit,n.tooltipPlacement,n.tooltipAppendToBody,n.tooltipDelay,n.eventTemplate,n.eventTitleTemplate,n.eventActionsTemplate,n.tooltipTemplate,n.daysInWeek)}),(function(e,l){var n=l.component;e(l,0,0,l.context.$implicit.event.draggable&&0===n.allDayEventResizes.size,!l.context.$implicit.startsBeforeWeek,!l.context.$implicit.endsAfterWeek,100/n.users.length*l.context.$implicit.span,100/n.users.length*l.context.$implicit.offset)}))}function $(e){return t.hc(0,[(e()(),t.Lb(0,0,[["eventRowContainer",1]],null,4,"div",[["class","cal-events-row"]],null,null,null,null,null)),(e()(),t.fc(-1,null,["\n      "])),(e()(),t.Ab(16777216,null,null,1,null,L)),t.Kb(3,278528,null,0,p.n,[t.fb,t.ab,t.C],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(e()(),t.fc(-1,null,["\n    "]))],(function(e,l){var n=l.component;e(l,3,0,l.context.$implicit.row,n.trackByWeekAllDayEvent)}),null)}function O(e){return t.hc(0,[(e()(),t.Lb(0,0,[["allDayEventsContainer",1]],null,14,"div",[["class","cal-all-day-events"],["mwlDroppable",""]],null,[[null,"dragEnter"],[null,"dragLeave"]],(function(e,l,n){var t=!0,a=e.component;"dragEnter"===l&&(t=!1!==a.dragEnter("allDay")&&t);"dragLeave"===l&&(t=!1!==a.dragLeave("allDay")&&t);return t}),null,null)),t.Kb(1,212992,null,0,m.b,[t.q,m.d,t.K,t.R,[2,m.e]],null,{dragEnter:"dragEnter",dragLeave:"dragLeave"}),(e()(),t.fc(-1,null,["\n    "])),(e()(),t.Lb(3,0,null,null,7,"div",[["class","cal-day-columns"]],null,null,null,null,null)),(e()(),t.fc(-1,null,["\n      "])),(e()(),t.Lb(5,16777216,null,null,1,"div",[["class","cal-time-label-column"]],null,null,null,null,null)),t.Kb(6,540672,null,0,p.v,[t.fb],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(e()(),t.fc(-1,null,["\n      "])),(e()(),t.Ab(16777216,null,null,1,null,A)),t.Kb(9,278528,null,0,p.n,[t.fb,t.ab,t.C],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(e()(),t.fc(-1,null,["\n    "])),(e()(),t.fc(-1,null,["\n    "])),(e()(),t.Ab(16777216,null,null,1,null,$)),t.Kb(13,278528,null,0,p.n,[t.fb,t.ab,t.C],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(e()(),t.fc(-1,null,["\n  "]))],(function(e,l){var n=l.component;e(l,1,0),e(l,6,0,n.allDayEventsLabelTemplate),e(l,9,0,n.days,n.trackByWeekDayHeaderDate),e(l,13,0,n.view.allDayEventRows,n.trackById)}),null)}function B(e){return t.hc(0,[(e()(),t.Lb(0,0,null,null,2,"mwl-calendar-week-view-hour-segment",[],[[4,"height","px"]],null,null,f.b,f.a)),t.Kb(1,49152,null,0,w.a,[],{segment:[0,"segment"],segmentHeight:[1,"segmentHeight"],locale:[2,"locale"],isTimeLabel:[3,"isTimeLabel"],customTemplate:[4,"customTemplate"]},null),(e()(),t.fc(-1,null,["\n        "]))],(function(e,l){var n=l.component;e(l,1,0,l.context.$implicit,n.hourSegmentHeight,n.locale,!0,n.hourSegmentTemplate)}),(function(e,l){e(l,0,0,l.component.hourSegmentHeight)}))}function K(e){return t.hc(0,[(e()(),t.Lb(0,0,null,null,4,"div",[["class","cal-hour"]],[[2,"cal-hour-odd",null]],null,null,null,null)),(e()(),t.fc(-1,null,["\n        "])),(e()(),t.Ab(16777216,null,null,1,null,B)),t.Kb(3,278528,null,0,p.n,[t.fb,t.ab,t.C],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(e()(),t.fc(-1,null,["\n      "]))],(function(e,l){var n=l.component;e(l,3,0,l.context.$implicit.segments,n.trackByHourSegment)}),(function(e,l){e(l,0,0,l.context.odd)}))}function R(e){return t.hc(0,[(e()(),t.Lb(0,0,null,null,4,"div",[["class","cal-time-label-column"]],null,null,null,null,null)),(e()(),t.fc(-1,null,["\n      "])),(e()(),t.Ab(16777216,null,null,1,null,K)),t.Kb(3,278528,null,0,p.n,[t.fb,t.ab,t.C],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(e()(),t.fc(-1,null,["\n    "]))],(function(e,l){var n=l.component;e(l,3,0,n.view.hourColumns[0].hours,n.trackByHour)}),null)}function F(e){return t.hc(0,[(e()(),t.Lb(0,0,null,null,2,"div",[["class","cal-resize-handle cal-resize-handle-before-start"],["mwlResizeHandle",""]],null,[[null,"touchstart"],[null,"mousedown"],[null,"touchend"],[null,"touchcancel"],[null,"mouseup"]],(function(e,l,n){var a=!0;"touchstart"===l&&(a=!1!==t.Xb(e,1).onMousedown(n,n.touches[0].clientX,n.touches[0].clientY)&&a);"mousedown"===l&&(a=!1!==t.Xb(e,1).onMousedown(n,n.clientX,n.clientY)&&a);"touchend"===l&&(a=!1!==t.Xb(e,1).onMouseup(n.changedTouches[0].clientX,n.changedTouches[0].clientY)&&a);"touchcancel"===l&&(a=!1!==t.Xb(e,1).onMouseup(n.changedTouches[0].clientX,n.changedTouches[0].clientY)&&a);"mouseup"===l&&(a=!1!==t.Xb(e,1).onMouseup(n.clientX,n.clientY)&&a);return a}),null,null)),t.Kb(1,147456,null,0,y.c,[t.R,t.q,t.K,y.a],{resizeEdges:[0,"resizeEdges"]},null),t.ac(2,{left:0,top:1})],(function(e,l){var n=e(l,2,0,!0,!0);e(l,1,0,n)}),null)}function V(e){return t.hc(0,[(e()(),t.Lb(0,0,null,null,2,"div",[["class","cal-resize-handle cal-resize-handle-after-end"],["mwlResizeHandle",""]],null,[[null,"touchstart"],[null,"mousedown"],[null,"touchend"],[null,"touchcancel"],[null,"mouseup"]],(function(e,l,n){var a=!0;"touchstart"===l&&(a=!1!==t.Xb(e,1).onMousedown(n,n.touches[0].clientX,n.touches[0].clientY)&&a);"mousedown"===l&&(a=!1!==t.Xb(e,1).onMousedown(n,n.clientX,n.clientY)&&a);"touchend"===l&&(a=!1!==t.Xb(e,1).onMouseup(n.changedTouches[0].clientX,n.changedTouches[0].clientY)&&a);"touchcancel"===l&&(a=!1!==t.Xb(e,1).onMouseup(n.changedTouches[0].clientX,n.changedTouches[0].clientY)&&a);"mouseup"===l&&(a=!1!==t.Xb(e,1).onMouseup(n.clientX,n.clientY)&&a);return a}),null,null)),t.Kb(1,147456,null,0,y.c,[t.R,t.q,t.K,y.a],{resizeEdges:[0,"resizeEdges"]},null),t.ac(2,{right:0,bottom:1})],(function(e,l){var n=e(l,2,0,!0,!0);e(l,1,0,n)}),null)}function H(e){return t.hc(0,[(e()(),t.Lb(0,16777216,[["event",1]],null,19,"div",[["class","cal-event-container"],["dragActiveClass","cal-drag-active"],["mwlDraggable",""],["mwlResizable",""]],[[2,"cal-draggable",null],[2,"cal-starts-within-day",null],[2,"cal-ends-within-day",null],[8,"hidden",0],[4,"top","px"],[4,"height","px"],[4,"left","%"],[4,"width","%"]],[[null,"resizeStart"],[null,"resizing"],[null,"resizeEnd"],[null,"dragStart"],[null,"dragging"],[null,"dragEnd"]],(function(e,l,n){var a=!0,u=e.component;"resizeStart"===l&&(a=!1!==u.timeEventResizeStarted(t.Xb(e.parent.parent,17),e.context.$implicit,n)&&a);"resizing"===l&&(a=!1!==u.timeEventResizing(e.context.$implicit,n)&&a);"resizeEnd"===l&&(a=!1!==u.timeEventResizeEnded(e.context.$implicit)&&a);"dragStart"===l&&(a=!1!==u.dragStarted(t.Xb(e.parent.parent,17),t.Xb(e,0),e.context.$implicit)&&a);"dragging"===l&&(a=!1!==u.dragMove(e.context.$implicit,n)&&a);"dragEnd"===l&&(a=!1!==u.dragEnded(e.context.$implicit,n,u.dayColumnWidth,!0)&&a);return a}),null,null)),t.cc(512,null,p.I,p.J,[t.C,t.D,t.q,t.R]),t.Kb(2,278528,null,0,p.m,[p.I],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Kb(3,737280,null,0,m.c,[t.q,t.R,m.d,t.K,t.fb,[2,m.e],p.d],{dropData:[0,"dropData"],dragAxis:[1,"dragAxis"],dragSnapGrid:[2,"dragSnapGrid"],ghostDragEnabled:[3,"ghostDragEnabled"],validateDrag:[4,"validateDrag"],dragActiveClass:[5,"dragActiveClass"]},{dragStart:"dragStart",dragging:"dragging",dragEnd:"dragEnd"}),t.ac(4,{event:0,calendarId:1}),t.ac(5,{x:0,y:1}),t.ac(6,{x:0,y:1}),t.Kb(7,737280,null,0,y.a,[t.N,t.R,t.q,t.K],{validateResize:[0,"validateResize"],resizeSnapGrid:[1,"resizeSnapGrid"],allowNegativeResizes:[2,"allowNegativeResizes"]},{resizeStart:"resizeStart",resizing:"resizing",resizeEnd:"resizeEnd"}),t.ac(8,{left:0,right:1,top:2,bottom:3}),(e()(),t.fc(-1,null,["\n          "])),(e()(),t.Ab(16777216,null,null,1,null,F)),t.Kb(11,16384,null,0,p.o,[t.fb,t.ab],{ngIf:[0,"ngIf"]},null),(e()(),t.fc(-1,null,["\n          "])),(e()(),t.Lb(13,0,null,null,2,"mwl-calendar-week-view-event",[],null,[[null,"eventClicked"]],(function(e,l,n){var t=!0,a=e.component;"eventClicked"===l&&(t=!1!==a.eventClicked.emit({event:e.context.$implicit.event,sourceEvent:n.sourceEvent})&&t);return t}),b.b,b.a)),t.Kb(14,49152,null,0,h.a,[],{locale:[0,"locale"],weekEvent:[1,"weekEvent"],tooltipPlacement:[2,"tooltipPlacement"],tooltipAppendToBody:[3,"tooltipAppendToBody"],tooltipDisabled:[4,"tooltipDisabled"],tooltipDelay:[5,"tooltipDelay"],customTemplate:[6,"customTemplate"],eventTitleTemplate:[7,"eventTitleTemplate"],eventActionsTemplate:[8,"eventActionsTemplate"],tooltipTemplate:[9,"tooltipTemplate"],column:[10,"column"]},{eventClicked:"eventClicked"}),(e()(),t.fc(-1,null,["\n          "])),(e()(),t.fc(-1,null,["\n          "])),(e()(),t.Ab(16777216,null,null,1,null,V)),t.Kb(18,16384,null,0,p.o,[t.fb,t.ab],{ngIf:[0,"ngIf"]},null),(e()(),t.fc(-1,null,["\n        "])),(e()(),t.Ab(0,null,null,0))],(function(e,l){var n=l.component;e(l,2,0,"cal-event-container",l.context.$implicit.event.cssClass);var a=e(l,4,0,l.context.$implicit.event,n.calendarId),u=e(l,5,0,l.context.$implicit.event.draggable&&0===n.timeEventResizes.size,l.context.$implicit.event.draggable&&0===n.timeEventResizes.size),i=n.snapDraggedEvents?e(l,6,0,n.dayColumnWidth,n.eventSnapSize||n.hourSegmentHeight):t.ub;e(l,3,0,a,u,i,!n.snapDraggedEvents,n.validateDrag,"cal-drag-active");var r=n.validateResize,c=e(l,8,0,n.dayColumnWidth,n.dayColumnWidth,n.eventSnapSize||n.hourSegmentHeight,n.eventSnapSize||n.hourSegmentHeight);e(l,7,0,r,c,!0),e(l,11,0,(null==l.context.$implicit.event?null:null==l.context.$implicit.event.resizable?null:l.context.$implicit.event.resizable.beforeStart)&&!l.context.$implicit.startsBeforeDay),e(l,14,1,[n.locale,l.context.$implicit,n.tooltipPlacement,n.tooltipAppendToBody,n.dragActive||n.timeEventResizes.size>0,n.tooltipDelay,n.eventTemplate,n.eventTitleTemplate,n.eventActionsTemplate,n.tooltipTemplate,l.parent.context.$implicit]),e(l,18,0,(null==l.context.$implicit.event?null:null==l.context.$implicit.event.resizable?null:l.context.$implicit.event.resizable.afterEnd)&&!l.context.$implicit.endsAfterDay)}),(function(e,l){var n=l.component;e(l,0,0,l.context.$implicit.event.draggable&&0===n.timeEventResizes.size,!l.context.$implicit.startsBeforeDay,!l.context.$implicit.endsAfterDay,0===l.context.$implicit.height&&0===l.context.$implicit.width,l.context.$implicit.top,l.context.$implicit.height,l.context.$implicit.left,l.context.$implicit.width)}))}function M(e){return t.hc(0,[(e()(),t.Lb(0,0,null,null,4,"mwl-calendar-week-view-hour-segment",[["dragActiveClass","cal-drag-active"],["mwlDroppable",""]],[[4,"height","px"]],[[null,"mwlClick"],[null,"drop"]],(function(e,l,n){var t=!0,a=e.component;"mwlClick"===l&&(t=!1!==a.hourSegmentClicked.emit({date:e.context.$implicit.date,sourceEvent:n})&&t);"drop"===l&&(t=!1!==a.eventDropped(n,e.context.$implicit.date,!1)&&t);return t}),f.b,f.a)),t.Kb(1,212992,null,0,D.a,[t.R,t.q,p.d],{clickListenerDisabled:[0,"clickListenerDisabled"]},{click:"mwlClick"}),t.Kb(2,212992,null,0,m.b,[t.q,m.d,t.K,t.R,[2,m.e]],{dragOverClass:[0,"dragOverClass"],dragActiveClass:[1,"dragActiveClass"]},{drop:"drop"}),t.Kb(3,49152,null,0,w.a,[],{segment:[0,"segment"],segmentHeight:[1,"segmentHeight"],locale:[2,"locale"],customTemplate:[3,"customTemplate"]},null),(e()(),t.fc(-1,null,["\n          "]))],(function(e,l){var n=l.component;e(l,1,0,0===n.hourSegmentClicked.observers.length);e(l,2,0,n.dragActive&&n.snapDraggedEvents?null:"cal-drag-over","cal-drag-active"),e(l,3,0,l.context.$implicit,n.hourSegmentHeight,n.locale,n.hourSegmentTemplate)}),(function(e,l){e(l,0,0,l.component.hourSegmentHeight)}))}function I(e){return t.hc(0,[(e()(),t.Lb(0,0,null,null,4,"div",[["class","cal-hour"]],[[2,"cal-hour-odd",null]],null,null,null,null)),(e()(),t.fc(-1,null,["\n          "])),(e()(),t.Ab(16777216,null,null,1,null,M)),t.Kb(3,278528,null,0,p.n,[t.fb,t.ab,t.C],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(e()(),t.fc(-1,null,["\n        "]))],(function(e,l){var n=l.component;e(l,3,0,l.context.$implicit.segments,n.trackByHourSegment)}),(function(e,l){e(l,0,0,l.context.odd)}))}function X(e){return t.hc(0,[(e()(),t.Lb(0,0,null,null,7,"div",[["class","cal-day-column"]],null,null,null,null,null)),(e()(),t.fc(-1,null,["\n        "])),(e()(),t.Ab(16777216,null,null,1,null,H)),t.Kb(3,278528,null,0,p.n,[t.fb,t.ab,t.C],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(e()(),t.fc(-1,null,["\n\n        "])),(e()(),t.Ab(16777216,null,null,1,null,I)),t.Kb(6,278528,null,0,p.n,[t.fb,t.ab,t.C],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(e()(),t.fc(-1,null,["\n      "]))],(function(e,l){var n=l.component;e(l,3,0,l.context.$implicit.events,n.trackByWeekTimeEvent),e(l,6,0,l.context.$implicit.hours,n.trackByHour)}),null)}function W(e){return t.hc(0,[(e()(),t.Lb(0,0,null,null,23,"div",[["class","cal-week-view"],["role","grid"]],null,null,null,null,null)),(e()(),t.fc(-1,null,["\n  "])),(e()(),t.Lb(2,0,null,null,4,"div",[["class","cal-day-headers"],["role","row"]],null,null,null,null,null)),(e()(),t.fc(-1,null,["\n    "])),(e()(),t.Ab(16777216,null,null,1,null,z)),t.Kb(5,278528,null,0,p.n,[t.fb,t.ab,t.C],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(e()(),t.fc(-1,null,["\n  "])),(e()(),t.fc(-1,null,["\n  "])),(e()(),t.Ab(16777216,null,null,1,null,O)),t.Kb(9,16384,null,0,p.o,[t.fb,t.ab],{ngIf:[0,"ngIf"]},null),(e()(),t.fc(-1,null,["\n  "])),(e()(),t.Lb(11,0,null,null,11,"div",[["class","cal-time-events"],["mwlDroppable",""]],null,[[null,"dragEnter"],[null,"dragLeave"]],(function(e,l,n){var t=!0,a=e.component;"dragEnter"===l&&(t=!1!==a.dragEnter("time")&&t);"dragLeave"===l&&(t=!1!==a.dragLeave("time")&&t);return t}),null,null)),t.Kb(12,212992,null,0,m.b,[t.q,m.d,t.K,t.R,[2,m.e]],null,{dragEnter:"dragEnter",dragLeave:"dragLeave"}),(e()(),t.fc(-1,null,["\n    "])),(e()(),t.Ab(16777216,null,null,1,null,R)),t.Kb(15,16384,null,0,p.o,[t.fb,t.ab],{ngIf:[0,"ngIf"]},null),(e()(),t.fc(-1,null,["\n    "])),(e()(),t.Lb(17,0,[["dayColumns",1]],null,4,"div",[["class","cal-day-columns"]],[[2,"cal-resize-active",null]],null,null,null,null)),(e()(),t.fc(-1,null,["\n      "])),(e()(),t.Ab(16777216,null,null,1,null,X)),t.Kb(20,278528,null,0,p.n,[t.fb,t.ab,t.C],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(e()(),t.fc(-1,null,["\n    "])),(e()(),t.fc(-1,null,["\n  "])),(e()(),t.fc(-1,null,["\n"])),(e()(),t.fc(-1,null,["\n"]))],(function(e,l){var n=l.component;e(l,5,0,n.users,n.trackById),e(l,9,0,n.view.allDayEventRows.length>0),e(l,12,0),e(l,15,0,n.view.hourColumns.length>0),e(l,20,0,n.view.hourColumns,n.trackByHourColumn)}),(function(e,l){e(l,17,0,l.component.timeEventResizes.size>0)}))}t.Hb("mwl-day-view-scheduler",x,(function(e){return t.hc(0,[(e()(),t.Lb(0,0,null,null,2,"mwl-day-view-scheduler",[],null,null,null,W,S)),t.cc(512,null,E,E,[d.a]),t.Kb(2,770048,null,0,x,[t.j,E,t.E,d.a],null,null)],(function(e,l){e(l,2,0)}),null)}),{viewDate:"viewDate",events:"events",excludeDays:"excludeDays",refresh:"refresh",locale:"locale",tooltipPlacement:"tooltipPlacement",tooltipTemplate:"tooltipTemplate",tooltipAppendToBody:"tooltipAppendToBody",tooltipDelay:"tooltipDelay",weekStartsOn:"weekStartsOn",headerTemplate:"headerTemplate",eventTemplate:"eventTemplate",eventTitleTemplate:"eventTitleTemplate",eventActionsTemplate:"eventActionsTemplate",precision:"precision",weekendDays:"weekendDays",snapDraggedEvents:"snapDraggedEvents",hourSegments:"hourSegments",hourSegmentHeight:"hourSegmentHeight",dayStartHour:"dayStartHour",dayStartMinute:"dayStartMinute",dayEndHour:"dayEndHour",dayEndMinute:"dayEndMinute",hourSegmentTemplate:"hourSegmentTemplate",eventSnapSize:"eventSnapSize",allDayEventsLabelTemplate:"allDayEventsLabelTemplate",daysInWeek:"daysInWeek",currentTimeMarkerTemplate:"currentTimeMarkerTemplate",users:"users"},{dayHeaderClicked:"dayHeaderClicked",eventClicked:"eventClicked",eventTimesChanged:"eventTimesChanged",beforeViewRender:"beforeViewRender",hourSegmentClicked:"hourSegmentClicked",userChanged:"userChanged"},[]);var j=n("G6HM"),q=n("Da6A"),P=n("M34a");const Y=[{id:0,name:"John smith",color:j.a.yellow},{id:1,name:"Jane Doe",color:j.a.blue}];class J{constructor(){this.viewDate=new Date,this.users=Y,this.events=[{title:"An event",color:Y[0].color,start:Object(q.a)(Object(P.a)(new Date),5),meta:{user:Y[0]},resizable:{beforeStart:!0,afterEnd:!0},draggable:!0},{title:"Another event",color:Y[1].color,start:Object(q.a)(Object(P.a)(new Date),2),meta:{user:Y[1]},resizable:{beforeStart:!0,afterEnd:!0},draggable:!0},{title:"A 3rd event",color:Y[0].color,start:Object(q.a)(Object(P.a)(new Date),7),meta:{user:Y[0]},resizable:{beforeStart:!0,afterEnd:!0},draggable:!0},{title:"An all day event",color:Y[0].color,start:new Date,meta:{user:Y[0]},draggable:!0,allDay:!0},{title:"Another all day event",color:Y[1].color,start:new Date,meta:{user:Y[1]},draggable:!0,allDay:!0},{title:"A 3rd all day event",color:Y[0].color,start:new Date,meta:{user:Y[0]},draggable:!0,allDay:!0}]}eventTimesChanged({event:e,newStart:l,newEnd:n}){e.start=l,e.end=n,this.events=[...this.events]}userChanged({event:e,newUser:l}){e.color=l.color,e.meta.user=l,this.events=[...this.events]}}var G=t.Jb({encapsulation:2,styles:[],data:{}});function N(e){return t.hc(2,[t.Zb(0,c.a,[o.a,t.E]),(e()(),t.Lb(1,0,null,null,26,"div",[["class","row"]],null,null,null,null,null)),(e()(),t.fc(-1,null,["\n  "])),(e()(),t.Lb(3,0,null,null,16,"div",[["class","col-md-6"]],null,null,null,null,null)),(e()(),t.fc(-1,null,["\n    "])),(e()(),t.Lb(5,0,null,null,13,"div",[["class","btn-group"]],null,null,null,null,null)),(e()(),t.fc(-1,null,["\n      "])),(e()(),t.Lb(7,0,null,null,2,"div",[["class","btn btn-primary"],["mwlCalendarPreviousView",""]],null,[[null,"viewDateChange"],[null,"click"]],(function(e,l,n){var a=!0,u=e.component;"click"===l&&(a=!1!==t.Xb(e,8).onClick()&&a);"viewDateChange"===l&&(a=!1!==(u.viewDate=n)&&a);return a}),null,null)),t.Kb(8,16384,null,0,s.a,[d.a],{view:[0,"view"],viewDate:[1,"viewDate"]},{viewDateChange:"viewDateChange"}),(e()(),t.fc(-1,null,["\n        Previous\n      "])),(e()(),t.fc(-1,null,["\n      "])),(e()(),t.Lb(11,0,null,null,2,"div",[["class","btn btn-outline-secondary"],["mwlCalendarToday",""]],null,[[null,"viewDateChange"],[null,"click"]],(function(e,l,n){var a=!0,u=e.component;"click"===l&&(a=!1!==t.Xb(e,12).onClick()&&a);"viewDateChange"===l&&(a=!1!==(u.viewDate=n)&&a);return a}),null,null)),t.Kb(12,16384,null,0,g.a,[d.a],{viewDate:[0,"viewDate"]},{viewDateChange:"viewDateChange"}),(e()(),t.fc(-1,null,["\n        Today\n      "])),(e()(),t.fc(-1,null,["\n      "])),(e()(),t.Lb(15,0,null,null,2,"div",[["class","btn btn-primary"],["mwlCalendarNextView",""]],null,[[null,"viewDateChange"],[null,"click"]],(function(e,l,n){var a=!0,u=e.component;"click"===l&&(a=!1!==t.Xb(e,16).onClick()&&a);"viewDateChange"===l&&(a=!1!==(u.viewDate=n)&&a);return a}),null,null)),t.Kb(16,16384,null,0,v.a,[d.a],{view:[0,"view"],viewDate:[1,"viewDate"]},{viewDateChange:"viewDateChange"}),(e()(),t.fc(-1,null,["\n        Next\n      "])),(e()(),t.fc(-1,null,["\n    "])),(e()(),t.fc(-1,null,["\n  "])),(e()(),t.fc(-1,null,["\n  "])),(e()(),t.Lb(21,0,null,null,5,"div",[["class","col-md-6 text-right"]],null,null,null,null,null)),(e()(),t.fc(-1,null,["\n    "])),(e()(),t.Lb(23,0,null,null,2,"h3",[],null,null,null,null,null)),(e()(),t.fc(24,null,["",""])),t.bc(25,2),(e()(),t.fc(-1,null,["\n  "])),(e()(),t.fc(-1,null,["\n"])),(e()(),t.fc(-1,null,["\n"])),(e()(),t.Lb(29,0,null,null,0,"br",[],null,null,null,null,null)),(e()(),t.fc(-1,null,["\n\n"])),(e()(),t.Lb(31,0,null,null,3,"mwl-day-view-scheduler",[],null,[[null,"eventTimesChanged"],[null,"userChanged"]],(function(e,l,n){var t=!0,a=e.component;"eventTimesChanged"===l&&(t=!1!==a.eventTimesChanged(n)&&t);"userChanged"===l&&(t=!1!==a.userChanged(n)&&t);return t}),W,S)),t.cc(512,null,E,E,[d.a]),t.Kb(33,770048,null,0,x,[t.j,E,t.E,d.a],{viewDate:[0,"viewDate"],events:[1,"events"],users:[2,"users"]},{eventTimesChanged:"eventTimesChanged",userChanged:"userChanged"}),(e()(),t.fc(-1,null,["\n"])),(e()(),t.fc(-1,null,["\n"]))],(function(e,l){var n=l.component;e(l,8,0,"day",n.viewDate),e(l,12,0,n.viewDate);e(l,16,0,"day",n.viewDate),e(l,33,0,n.viewDate,n.events,n.users)}),(function(e,l){var n=l.component,a=t.gc(l,24,0,e(l,25,0,t.Xb(l,0),n.viewDate,"dayViewTitle"));e(l,24,0,a)}))}var U=t.Hb("mwl-demo-component",J,(function(e){return t.hc(0,[(e()(),t.Lb(0,0,null,null,1,"mwl-demo-component",[],null,null,null,N,G)),t.Kb(1,49152,null,0,J,[],null,null)],null,null)}),{},{},[]),Q=n("s7LF"),Z=n("LjNj"),_=n("kUQb"),ee=n("hYcs"),le=n("4uqC"),ne=n("cyy6"),te=n("SNsX"),ae=n("Nrjh"),ue=n("dBcC"),ie=n("iInd");n.d(l,"DemoModuleNgFactory",(function(){return re}));var re=t.Ib(u,[],(function(e){return t.Ub([t.Vb(512,t.m,t.sb,[[8,[i.a,r.a,U]],[3,t.m],t.I]),t.Vb(4608,p.q,p.p,[t.E,[2,p.N]]),t.Vb(4608,p.h,p.h,[p.q]),t.Vb(4608,Q.l,Q.l,[]),t.Vb(5120,d.a,a,[]),t.Vb(4608,Z.a,Z.a,[]),t.Vb(4608,o.a,o.a,[d.a]),t.Vb(4608,C.a,C.a,[d.a]),t.Vb(4608,_.a,_.a,[p.h]),t.Vb(1073742336,p.c,p.c,[]),t.Vb(1073742336,ee.a,ee.a,[]),t.Vb(1073742336,m.a,m.a,[]),t.Vb(1073742336,le.a,le.a,[]),t.Vb(1073742336,y.b,y.b,[]),t.Vb(1073742336,ne.a,ne.a,[]),t.Vb(1073742336,te.a,te.a,[]),t.Vb(1073742336,ae.a,ae.a,[]),t.Vb(1073742336,Q.k,Q.k,[]),t.Vb(1073742336,Q.d,Q.d,[]),t.Vb(1073742336,ue.a,ue.a,[]),t.Vb(1073742336,ie.o,ie.o,[[2,ie.t],[2,ie.m]]),t.Vb(1073742336,u,u,[]),t.Vb(1024,ie.k,(function(){return[[{path:"",component:J}]]}),[])])}))}}]);