try{var gtm4wp_datalayer_name="dataLayer";var dataLayer=dataLayer||[]
var gtm4wp_scrollerscript_debugmode=false;var gtm4wp_scrollerscript_callbacktime=100;var gtm4wp_scrollerscript_readerlocation=150;var gtm4wp_scrollerscript_contentelementid="content";var gtm4wp_scrollerscript_scannertime=60;}catch(e){}
try{window._wpemojiSettings={"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/72x72\/","ext":".png","source":{"concatemoji":"https:\/\/belanjabekasi.id\/wp-includes\/js\/wp-emoji-release.min.js"}};!function(a,b,c){function d(a){var c,d=b.createElement("canvas"),e=d.getContext&&d.getContext("2d"),f=String.fromCharCode;return e&&e.fillText?(e.textBaseline="top",e.font="600 32px Arial","flag"===a?(e.fillText(f(55356,56806,55356,56826),0,0),d.toDataURL().length>3e3):"diversity"===a?(e.fillText(f(55356,57221),0,0),c=e.getImageData(16,16,1,1).data.toString(),e.fillText(f(55356,57221,55356,57343),0,0),c!==e.getImageData(16,16,1,1).data.toString()):("simple"===a?e.fillText(f(55357,56835),0,0):e.fillText(f(55356,57135),0,0),0!==e.getImageData(16,16,1,1).data[0])):!1}function e(a){var c=b.createElement("script");c.src=a,c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var f,g;c.supports={simple:d("simple"),flag:d("flag"),unicode8:d("unicode8"),diversity:d("diversity")},c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.simple&&c.supports.flag&&c.supports.unicode8&&c.supports.diversity||(g=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1)):(a.attachEvent("onload",g),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),f=c.source||{},f.concatemoji?e(f.concatemoji):f.wpemoji&&f.twemoji&&(e(f.twemoji),e(f.wpemoji)))}(window,document,window._wpemojiSettings);}catch(e){}
try{function w3tc_popupadmin_bar(url){return window.open(url,'','width=800,height=600,status=no,toolbar=no,menubar=no,scrollbars=yes');};}catch(e){}
try{var attach={"limit_multiple_upload":"0"};}catch(e){}
try{var a3_lazyload_params={"apply_images":"1","apply_videos":""};}catch(e){}
try{(function(e,t,n,r){function w(e,t){return e[t]===r?l[t]:e[t]}function E(){var e=t.pageYOffset;return e===r?a.scrollTop:e}function S(e,t){var n=l["on"+e];if(n){if(p(n)){n.call(t[0])}else{if(n.addClass){t.addClass(n.addClass)}if(n.removeClass){t.removeClass(n.removeClass)}}}t.trigger("lazy"+e,[t]);C()}function x(t){S(t.type,e(this).off(o,x))}function T(n){if(!g.length){return}n=n||l.forceLoad;y=Infinity;var r=E(),s=t.innerHeight||a.clientHeight,u=t.innerWidth||a.clientWidth,f,c;for(f=0,c=g.length;f<c;f++){var h=g[f],d=h[0],v=h[i],b=false,w=n,T;if(!m(a,d)){b=true}else if(n||!v.visibleOnly||d.offsetWidth||d.offsetHeight){if(!w){var N=d.getBoundingClientRect(),C=v.edgeX,k=v.edgeY;T=N.top+r-k-s;w=T<=r&&N.bottom>-k&&N.left<=u+C&&N.right>-C}if(w){S("show",h);var L=v.srcAttr,A=p(L)?L(h):d.getAttribute(L);if(A){h.on(o,x);d.src=A}b=true}else{if(T<y){y=T}}}if(b){g.splice(f--,1);c--}}if(!c){S("complete",e(a))}}function N(){if(b>1){b=1;T();setTimeout(N,l.throttle)}else{b=0}}function C(e){if(!g.length){return}if(e&&e.type==="scroll"&&e.currentTarget===t){if(y>=E()){return}}if(!b){setTimeout(N,0)}b=2}function k(){h.lazyLoadXT()}function L(){T(true)}var i="lazyLoadXT",s="lazied",o="load error",u="lazy-hidden",a=n.documentElement||n.body,f=t.onscroll===r||!!t.operamini||!a.getBoundingClientRect,l={autoInit:true,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:f,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"",oninit:{removeClass:"lazy"},onshow:{addClass:u},onload:{removeClass:u,addClass:"lazy-loaded"},onerror:{removeClass:u},checkDuplicates:true},c={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:true},h=e(t),p=e.isFunction,d=e.extend,v=e.data||function(t,n){return e(t).data(n)},m=e.contains||function(e,t){while(t=t.parentNode){if(t===e){return true}}return false},g=[],y=0,b=0;e[i]=d(l,c,e[i]);e.fn[i]=function(n){n=n||{};var r=w(n,"blankImage"),o=w(n,"checkDuplicates"),u=w(n,"scrollContainer"),a={},f;e(u).on("scroll",C);for(f in c){a[f]=w(n,f)}return this.each(function(u,f){if(f===t){e(l.selector).lazyLoadXT(n)}else{if(o&&v(f,s)){return}var c=e(f).data(s,1);if(r&&f.tagName==="IMG"&&!f.src){f.src=r}c[i]=d({},a);S("init",c);g.push(c)}})};e(n).ready(function(){S("start",h);h.on(l.loadEvent,k).on(l.updateEvent,C).on(l.forceEvent,L);e(n).on(l.updateEvent,C);if(l.autoInit){k()}})})(window.jQuery||window.Zepto||window.$,window,document);(function(e){var t=e.lazyLoadXT;t.selector+=",video,iframe[data-src],embed[data-src]";t.videoPoster="data-poster";e(document).on("lazyshow","video",function(n,r){var i=r.lazyLoadXT.srcAttr,s=e.isFunction(i);r.attr("poster",r.attr(t.videoPoster)).children("source,track").each(function(t,n){var r=e(n);r.attr("src",s?i(r):r.attr(i))});this.load();e(this).removeClass("lazy-hidden")});e(document).on("lazyshow","embed",function(t,n){e(this).removeClass("lazy-hidden")})})(window.jQuery||window.Zepto||window.$)
;}catch(e){}
try{
!function(t,r,e,n){function s(r,e){return Math[e].apply(null,t.map(r,function(t){return t[o]}))}function a(t){return t[o]>=g[o]||t[o]===d}function c(t){return t[o]===d}function i(n){var i=n.attr(u.srcsetAttr);if(!i)return!1;var l=t.map(i.split(","),function(t){return{url:x.exec(t)[1],w:parseFloat((f.exec(t)||p)[1]),h:parseFloat((w.exec(t)||p)[1]),x:parseFloat((h.exec(t)||m)[1])}});if(!l.length)return!1;var A,v,E=e.documentElement;g={w:r.innerWidth||E.clientWidth,h:r.innerHeight||E.clientHeight,x:r.devicePixelRatio||1};for(A in g)o=A,d=s(l,"max"),l=t.grep(l,a);for(A in g)o=A,d=s(l,"min"),l=t.grep(l,c);return v=l[0].url,u.srcsetExtended&&(v=(n.attr(u.srcsetBaseAttr)||"")+v+(n.attr(u.srcsetExtAttr)||"")),v}var o,d,u=t.lazyLoadXT,l=function(){return"srcset"in new Image}(),x=/^\s*(\S*)/,f=/\S\s+(\d+)w/,w=/\S\s+(\d+)h/,h=/\S\s+([\d\.]+)x/,p=[0,1/0],m=[0,1],A={srcsetAttr:"data-srcset",srcsetExtended:!1,srcsetBaseAttr:"data-srcset-base",srcsetExtAttr:"data-srcset-ext"},g={w:0,h:0,x:0};for(o in A)u[o]===n&&(u[o]=A[o]);u.selector+=",img["+u.srcsetAttr+"]",t(e).on("lazyshow","img",function(t,r){var e=r.attr(u.srcsetAttr);e&&(!u.srcsetExtended&&l?(r.attr("srcset",e),r.attr("data-srcset","")):r.lazyLoadXT.srcAttr=i)})}(window.jQuery||window.Zepto||window.$,window,document);}catch(e){}try{var a3_lazyload_extend_params={"edgeY":"0"};}catch(e){}
try{jQuery.lazyLoadXT.updateEvent='load orientationchange resize scroll touchmove focus click customlazyloadxtevent';jQuery.lazyLoadXT.edgeY=a3_lazyload_extend_params.edgeY;jQuery(document).ready(function($){jQuery(document).on('mouseenter','.site-header-cart',function(){jQuery(document).trigger('customlazyloadxtevent');});jQuery(document).on('mouseenter','.widget_shopping_cart',function(){jQuery(document).trigger('customlazyloadxtevent');});});jQuery(window).on('ajaxComplete',function(){setTimeout(function(){jQuery(window).lazyLoadXT();},1000);});}catch(e){}
try{dataLayer.push({"pageTitle":"afrakids Arsip - Laman 3 dari 4 - belanjabekasi.id","pagePostType":"product","pagePostType2":"tax-product","pageCategory":[],"browserName":"Chrome","browserVersion":"48.0.2564.103","browserEngineName":"Blink","browserEngineVersion":"537.36","osName":"Windows","osVersion":"6.3","deviceType":"desktop","deviceManufacturer":"","deviceModel":""});}catch(e){}
try{(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5DTZWN');}catch(e){}
try{var wc_add_to_cart_params={"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/product-brands\/afrakids\/page\/3\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View Cart","cart_url":"https:\/\/belanjabekasi.id\/keranjang\/","is_cart":"","cart_redirect_after_add":"no"};}catch(e){}
try{jQuery(function(a){return"undefined"==typeof wc_add_to_cart_params?!1:void a(document).on("click",".add_to_cart_button",function(){var b=a(this);if(b.is(".ajax_add_to_cart")){if(!b.attr("data-product_id"))return!0;b.removeClass("added"),b.addClass("loading");var c={};return a.each(b.data(),function(a,b){c[a]=b}),a(document.body).trigger("adding_to_cart",[b,c]),a.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),c,function(c){if(c){var d=window.location.toString();if(d=d.replace("add-to-cart","added-to-cart"),c.error&&c.product_url)return void(window.location=c.product_url);if("yes"===wc_add_to_cart_params.cart_redirect_after_add)return void(window.location=wc_add_to_cart_params.cart_url);b.removeClass("loading");var e=c.fragments,f=c.cart_hash;e&&a.each(e,function(b){a(b).addClass("updating")}),a(".shop_table.cart, .updating, .cart_totals").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}}),b.addClass("added"),wc_add_to_cart_params.is_cart||0!==b.parent().find(".added_to_cart").size()||b.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),e&&a.each(e,function(b,c){a(b).replaceWith(c)}),a(".widget_shopping_cart, .updating").stop(!0).css("opacity","1").unblock(),a(".shop_table.cart").load(d+" .shop_table.cart:eq(0) > *",function(){a(".shop_table.cart").stop(!0).css("opacity","1").unblock(),a(document.body).trigger("cart_page_refreshed")}),a(".cart_totals").load(d+" .cart_totals:eq(0) > *",function(){a(".cart_totals").stop(!0).css("opacity","1").unblock()}),a(document.body).trigger("added_to_cart",[e,f,b])}}),!1}return!0})});}catch(e){}
try{/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function(){"use strict";function a(a){function b(b,d){var f,p,q=b==window,r=d&&void 0!==d.message?d.message:void 0;if(d=a.extend({},a.blockUI.defaults,d||{}),!d.ignoreIfBlocked||!a(b).data("blockUI.isBlocked")){if(d.overlayCSS=a.extend({},a.blockUI.defaults.overlayCSS,d.overlayCSS||{}),f=a.extend({},a.blockUI.defaults.css,d.css||{}),d.onOverlayClick&&(d.overlayCSS.cursor="pointer"),p=a.extend({},a.blockUI.defaults.themedCSS,d.themedCSS||{}),r=void 0===r?d.message:r,q&&n&&c(window,{fadeOut:0}),r&&"string"!=typeof r&&(r.parentNode||r.jquery)){var s=r.jquery?r[0]:r,t={};a(b).data("blockUI.history",t),t.el=s,t.parent=s.parentNode,t.display=s.style.display,t.position=s.style.position,t.parent&&t.parent.removeChild(s)}a(b).data("blockUI.onUnblock",d.onUnblock);var u,v,w,x,y=d.baseZ;u=a(k||d.forceIframe?'<iframe class="blockUI" style="z-index:'+y++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+d.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),v=a(d.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+y++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+y++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),d.theme&&q?(x='<div class="blockUI '+d.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(y+10)+';display:none;position:fixed">',d.title&&(x+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(d.title||"&nbsp;")+"</div>"),x+='<div class="ui-widget-content ui-dialog-content"></div>',x+="</div>"):d.theme?(x='<div class="blockUI '+d.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(y+10)+';display:none;position:absolute">',d.title&&(x+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(d.title||"&nbsp;")+"</div>"),x+='<div class="ui-widget-content ui-dialog-content"></div>',x+="</div>"):x=q?'<div class="blockUI '+d.blockMsgClass+' blockPage" style="z-index:'+(y+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+d.blockMsgClass+' blockElement" style="z-index:'+(y+10)+';display:none;position:absolute"></div>',w=a(x),r&&(d.theme?(w.css(p),w.addClass("ui-widget-content")):w.css(f)),d.theme||v.css(d.overlayCSS),v.css("position",q?"fixed":"absolute"),(k||d.forceIframe)&&u.css("opacity",0);var z=[u,v,w],A=a(q?"body":b);a.each(z,function(){this.appendTo(A)}),d.theme&&d.draggable&&a.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var B=m&&(!a.support.boxModel||a("object,embed",q?null:b).length>0);if(l||B){if(q&&d.allowBodyStretch&&a.support.boxModel&&a("html,body").css("height","100%"),(l||!a.support.boxModel)&&!q)var C=i(b,"borderTopWidth"),D=i(b,"borderLeftWidth"),E=C?"(0 - "+C+")":0,F=D?"(0 - "+D+")":0;a.each(z,function(a,b){var c=b[0].style;if(c.position="absolute",2>a)q?c.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+d.quirksmodeOffsetHack+') + "px"'):c.setExpression("height",'this.parentNode.offsetHeight + "px"'),q?c.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):c.setExpression("width",'this.parentNode.offsetWidth + "px"'),F&&c.setExpression("left",F),E&&c.setExpression("top",E);else if(d.centerY)q&&c.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),c.marginTop=0;else if(!d.centerY&&q){var e=d.css&&d.css.top?parseInt(d.css.top,10):0,f="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+e+') + "px"';c.setExpression("top",f)}})}if(r&&(d.theme?w.find(".ui-widget-content").append(r):w.append(r),(r.jquery||r.nodeType)&&a(r).show()),(k||d.forceIframe)&&d.showOverlay&&u.show(),d.fadeIn){var G=d.onBlock?d.onBlock:j,H=d.showOverlay&&!r?G:j,I=r?G:j;d.showOverlay&&v._fadeIn(d.fadeIn,H),r&&w._fadeIn(d.fadeIn,I)}else d.showOverlay&&v.show(),r&&w.show(),d.onBlock&&d.onBlock.bind(w)();if(e(1,b,d),q?(n=w[0],o=a(d.focusableElements,n),d.focusInput&&setTimeout(g,20)):h(w[0],d.centerX,d.centerY),d.timeout){var J=setTimeout(function(){q?a.unblockUI(d):a(b).unblock(d)},d.timeout);a(b).data("blockUI.timeout",J)}}}function c(b,c){var f,g=b==window,h=a(b),i=h.data("blockUI.history"),j=h.data("blockUI.timeout");j&&(clearTimeout(j),h.removeData("blockUI.timeout")),c=a.extend({},a.blockUI.defaults,c||{}),e(0,b,c),null===c.onUnblock&&(c.onUnblock=h.data("blockUI.onUnblock"),h.removeData("blockUI.onUnblock"));var k;k=g?a(document.body).children().filter(".blockUI").add("body > .blockUI"):h.find(">.blockUI"),c.cursorReset&&(k.length>1&&(k[1].style.cursor=c.cursorReset),k.length>2&&(k[2].style.cursor=c.cursorReset)),g&&(n=o=null),c.fadeOut?(f=k.length,k.stop().fadeOut(c.fadeOut,function(){0===--f&&d(k,i,c,b)})):d(k,i,c,b)}function d(b,c,d,e){var f=a(e);if(!f.data("blockUI.isBlocked")){b.each(function(a,b){this.parentNode&&this.parentNode.removeChild(this)}),c&&c.el&&(c.el.style.display=c.display,c.el.style.position=c.position,c.el.style.cursor="default",c.parent&&c.parent.appendChild(c.el),f.removeData("blockUI.history")),f.data("blockUI.static")&&f.css("position","static"),"function"==typeof d.onUnblock&&d.onUnblock(e,d);var g=a(document.body),h=g.width(),i=g[0].style.width;g.width(h-1).width(h),g[0].style.width=i}}function e(b,c,d){var e=c==window,g=a(c);if((b||(!e||n)&&(e||g.data("blockUI.isBlocked")))&&(g.data("blockUI.isBlocked",b),e&&d.bindEvents&&(!b||d.showOverlay))){var h="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";b?a(document).bind(h,d,f):a(document).unbind(h,f)}}function f(b){if("keydown"===b.type&&b.keyCode&&9==b.keyCode&&n&&b.data.constrainTabKey){var c=o,d=!b.shiftKey&&b.target===c[c.length-1],e=b.shiftKey&&b.target===c[0];if(d||e)return setTimeout(function(){g(e)},10),!1}var f=b.data,h=a(b.target);return h.hasClass("blockOverlay")&&f.onOverlayClick&&f.onOverlayClick(b),h.parents("div."+f.blockMsgClass).length>0?!0:0===h.parents().children().filter("div.blockUI").length}function g(a){if(o){var b=o[a===!0?o.length-1:0];b&&b.focus()}}function h(a,b,c){var d=a.parentNode,e=a.style,f=(d.offsetWidth-a.offsetWidth)/2-i(d,"borderLeftWidth"),g=(d.offsetHeight-a.offsetHeight)/2-i(d,"borderTopWidth");b&&(e.left=f>0?f+"px":"0"),c&&(e.top=g>0?g+"px":"0")}function i(b,c){return parseInt(a.css(b,c),10)||0}a.fn._fadeIn=a.fn.fadeIn;var j=a.noop||function(){},k=/MSIE/.test(navigator.userAgent),l=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),m=(document.documentMode||0,a.isFunction(document.createElement("div").style.setExpression));a.blockUI=function(a){b(window,a)},a.unblockUI=function(a){c(window,a)},a.growlUI=function(b,c,d,e){var f=a('<div class="growlUI"></div>');b&&f.append("<h1>"+b+"</h1>"),c&&f.append("<h2>"+c+"</h2>"),void 0===d&&(d=3e3);var g=function(b){b=b||{},a.blockUI({message:f,fadeIn:"undefined"!=typeof b.fadeIn?b.fadeIn:700,fadeOut:"undefined"!=typeof b.fadeOut?b.fadeOut:1e3,timeout:"undefined"!=typeof b.timeout?b.timeout:d,centerY:!1,showOverlay:!1,onUnblock:e,css:a.blockUI.defaults.growlCSS})};g();f.css("opacity");f.mouseover(function(){g({fadeIn:0,timeout:3e4});var b=a(".blockMsg");b.stop(),b.fadeTo(300,1)}).mouseout(function(){a(".blockMsg").fadeOut(1e3)})},a.fn.block=function(c){if(this[0]===window)return a.blockUI(c),this;var d=a.extend({},a.blockUI.defaults,c||{});return this.each(function(){var b=a(this);d.ignoreIfBlocked&&b.data("blockUI.isBlocked")||b.unblock({fadeOut:0})}),this.each(function(){"static"==a.css(this,"position")&&(this.style.position="relative",a(this).data("blockUI.static",!0)),this.style.zoom=1,b(this,c)})},a.fn.unblock=function(b){return this[0]===window?(a.unblockUI(b),this):this.each(function(){c(this,b)})},a.blockUI.version=2.7,a.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var n=null,o=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],a):a(jQuery)}();}catch(e){}try{var woocommerce_params={"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/product-brands\/afrakids\/page\/3\/?wc-ajax=%%endpoint%%"};}catch(e){}
try{jQuery(function(a){a(".woocommerce-ordering").on("change","select.orderby",function(){a(this).closest("form").submit()}),a("input.qty:not(.product-quantity input.qty)").each(function(){var b=parseFloat(a(this).attr("min"));b>=0&&parseFloat(a(this).val())<b&&a(this).val(b)})});}catch(e){}
try{/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});}catch(e){}try{var wc_cart_fragments_params={"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/product-brands\/afrakids\/page\/3\/?wc-ajax=%%endpoint%%","fragment_name":"wc_fragments"};}catch(e){}
try{jQuery(function(a){function b(){e&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function c(a){e&&(localStorage.setItem("wc_cart_hash",a),sessionStorage.setItem("wc_cart_hash",a))}function d(){a.ajax(g)}if("undefined"==typeof wc_cart_fragments_params)return!1;var e;try{e="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc")}catch(f){e=!1}var g={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",success:function(d){d&&d.fragments&&(a.each(d.fragments,function(b,c){a(b).replaceWith(c)}),e&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(d.fragments)),c(d.cart_hash),d.cart_hash&&b()),a(document.body).trigger("wc_fragments_refreshed"))}};if(e){var h=null,i=864e5;a(document.body).bind("added_to_cart",function(a,d,e){var f=sessionStorage.getItem("wc_cart_hash");(null===f||void 0===f||""===f)&&b(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(d)),c(e)}),a(document.body).bind("wc_fragments_refreshed",function(){clearTimeout(h),h=setTimeout(d,i)}),a(window).on("storage onstorage",function(b){"wc_cart_hash"===b.originalEvent.key&&localStorage.getItem("wc_cart_hash")!==sessionStorage.getItem("wc_cart_hash")&&a.ajax(g)});try{var j=a.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),k=sessionStorage.getItem("wc_cart_hash"),l=a.cookie("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if((null===k||void 0===k||""===k)&&(k=""),(null===l||void 0===l||""===l)&&(l=""),k&&(null===m||void 0===m||""===m))throw"No cart_created";if(m){var n=1*m+i,o=(new Date).getTime();if(o>n)throw"Fragment expired";h=setTimeout(d,n-o)}if(!j||!j["div.widget_shopping_cart_content"]||k!==l)throw"No fragment";a.each(j,function(b,c){a(b).replaceWith(c)}),a(document.body).trigger("wc_fragments_loaded")}catch(f){d()}}else d();a.cookie("woocommerce_items_in_cart")>0?a(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():a(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),a(document.body).bind("adding_to_cart",function(){a(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()})});}catch(e){}try{var ajaxURL={"ajaxurl":"https:\/\/belanjabekasi.id\/wp-admin\/admin-ajax.php"};}catch(e){}
try{var wc_ps_vars={"minChars":"1","delay":"1500","legacy_api_url":"\/\/belanjabekasi.id\/wc-api\/wc_ps_legacy_api?action=get_result_popup","search_page_url":"https:\/\/belanjabekasi.id\/belanja\/kaos-afrakids-af094-doa-before-eat\/","permalink_structure":"\/%postname%\/"};}catch(e){}
try{var _wpUtilSettings={"ajax":{"url":"\/wp-admin\/admin-ajax.php"}};}catch(e){}
try{var wc_add_to_cart_variation_params={"i18n_no_matching_variations_text":"Sorry, no products matched your selection. Please choose a different combination.","i18n_make_a_selection_text":"Select product options before adding this product to your cart.","i18n_unavailable_text":"Sorry, this product is unavailable. Please choose a different combination."};}catch(e){}
try{/*!
 * Variations Plugin
 */
!function(a,b,c,d){a.fn.wc_variation_form=function(){var c=this,d=c.find(".single_variation"),f=c.closest(".product"),g=parseInt(c.data("product_id"),10),h=c.data("product_variations"),i=h===!1,j=!1,k=c.find(".reset_variations"),l=wp.template("variation-template"),m=wp.template("unavailable-variation-template"),n=c.find(".single_variation_wrap");return n.show(),c.unbind("check_variations update_variation_values found_variation"),c.find(".reset_variations").unbind("click"),c.find(".variations select").unbind("change focusin"),c.on("click",".reset_variations",function(a){a.preventDefault(),c.find(".variations select").val("").change(),c.trigger("reset_data")}).on("hide_variation",function(a){a.preventDefault(),c.find(".single_add_to_cart_button").attr("disabled","disabled").attr("title",wc_add_to_cart_variation_params.i18n_make_a_selection_text)}).on("show_variation",function(a,b,d){a.preventDefault(),d?c.find(".single_add_to_cart_button").removeAttr("disabled").removeAttr("title"):c.find(".single_add_to_cart_button").attr("disabled","disabled").attr("title",wc_add_to_cart_variation_params.i18n_unavailable_text)}).on("reload_product_variations",function(){h=c.data("product_variations"),i=h===!1}).on("reset_data",function(){a(".sku").wc_reset_content(),a(".product_weight").wc_reset_content(),a(".product_dimensions").wc_reset_content(),c.trigger("reset_image"),d.slideUp(200).trigger("hide_variation")}).on("reset_image",function(){c.wc_variations_image_update(!1)}).on("change",".variations select",function(){if(c.find('input[name="variation_id"], input.variation_id').val("").change(),c.find(".wc-no-matching-variations").remove(),i){j&&j.abort();var b=!0,d=!1,e={};c.find(".variations select").each(function(){var c=a(this).data("attribute_name")||a(this).attr("name");0===a(this).val().length?b=!1:d=!0,e[c]=a(this).val()}),b?(e.product_id=g,j=a.ajax({url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_variation"),type:"POST",data:e,success:function(a){a?c.trigger("found_variation",[a]):(c.trigger("reset_data"),c.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),c.find(".wc-no-matching-variations").slideDown(200))}})):c.trigger("reset_data"),d?"hidden"===k.css("visibility")&&k.css("visibility","visible").hide().fadeIn():k.css("visibility","hidden")}else c.trigger("woocommerce_variation_select_change"),c.trigger("check_variations",["",!1]),a(this).blur();a(".product.has-default-attributes > .images").fadeTo(200,1),c.trigger("woocommerce_variation_has_changed")}).on("focusin touchstart",".variations select",function(){a(this).find("option:selected").attr("selected","selected"),i||(c.trigger("woocommerce_variation_select_focusin"),c.trigger("check_variations",[a(this).data("attribute_name")||a(this).attr("name"),!0]))}).on("found_variation",function(b,e){var g=f.find(".product_meta").find(".sku"),h=f.find(".product_weight"),i=f.find(".product_dimensions"),j=n.find(".quantity"),k=!0;e.sku?g.wc_set_content(e.sku):g.wc_reset_content(),e.weight?h.wc_set_content(e.weight):h.wc_reset_content(),e.dimensions?i.wc_set_content(e.dimensions):i.wc_reset_content(),c.wc_variations_image_update(e);var o="";e.variation_is_visible?(o=l({variation:e}),o=o.replace("/*<![CDATA[*/",""),o=o.replace("/*]]>*/",""),d.html(o),c.find('input[name="variation_id"], input.variation_id').val(e.variation_id).change()):(o=m,o=o.replace("/*<![CDATA[*/",""),o=o.replace("/*]]>*/",""),d.html(o),c.find('input[name="variation_id"], input.variation_id').val("").change()),"yes"===e.is_sold_individually?(j.find("input.qty").val("1").attr("min","1").attr("max",""),j.hide()):(j.find("input.qty").attr("min",e.min_qty).attr("max",e.max_qty),j.show()),e.is_purchasable&&e.is_in_stock&&e.variation_is_visible||(k=!1),a.trim(d.text())?d.slideDown(200).trigger("show_variation",[e,k]):d.show().trigger("show_variation",[e,k])}).on("check_variations",function(c,f,g){if(!i){var j=!0,k=!1,l={},m=a(this),n=m.find(".reset_variations");m.find(".variations select").each(function(){var b=a(this).data("attribute_name")||a(this).attr("name");0===a(this).val().length?j=!1:k=!0,f&&b===f?(j=!1,l[b]=""):l[b]=a(this).val()});var o=e.find_matching_variations(h,l);if(j){var p=o.shift();p?m.trigger("found_variation",[p]):(m.find(".variations select").val(""),g||m.trigger("reset_data"),b.alert(wc_add_to_cart_variation_params.i18n_no_matching_variations_text))}else m.trigger("update_variation_values",[o]),g||m.trigger("reset_data"),f||d.slideUp(200).trigger("hide_variation");k?"hidden"===n.css("visibility")&&n.css("visibility","visible").hide().fadeIn():n.css("visibility","hidden")}}).on("update_variation_values",function(b,d){i||(c.find(".variations select").each(function(b,c){var e,f=a(c);f.data("attribute_options")||f.data("attribute_options",f.find("option:gt(0)").get()),f.find("option:gt(0)").remove(),f.append(f.data("attribute_options")),f.find("option:gt(0)").removeClass("attached"),f.find("option:gt(0)").removeClass("enabled"),f.find("option:gt(0)").removeAttr("disabled"),e="undefined"!=typeof f.data("attribute_name")?f.data("attribute_name"):f.attr("name");for(var g in d)if("undefined"!=typeof d[g]){var h=d[g].attributes;for(var i in h)if(h.hasOwnProperty(i)){var j=h[i];if(i===e){var k="";d[g].variation_is_active&&(k="enabled"),j?(j=a("<div/>").html(j).text(),j=j.replace(/'/g,"\\'"),j=j.replace(/"/g,'\\"'),f.find('option[value="'+j+'"]').addClass("attached "+k)):f.find("option:gt(0)").addClass("attached "+k)}}}f.find("option:gt(0):not(.attached)").remove(),f.find("option:gt(0):not(.enabled)").attr("disabled","disabled")}),c.trigger("woocommerce_update_variation_values"))}),c.trigger("wc_variation_form"),c};var e={find_matching_variations:function(a,b){for(var c=[],d=0;d<a.length;d++){var f=a[d];e.variations_match(f.attributes,b)&&c.push(f)}return c},variations_match:function(a,b){var c=!0;for(var e in a)if(a.hasOwnProperty(e)){var f=a[e],g=b[e];f!==d&&g!==d&&0!==f.length&&0!==g.length&&f!==g&&(c=!1)}return c}};a.fn.wc_set_content=function(a){d===this.attr("data-o_content")&&this.attr("data-o_content",this.text()),this.text(a)},a.fn.wc_reset_content=function(){d!==this.attr("data-o_content")&&this.text(this.attr("data-o_content"))},a.fn.wc_set_variation_attr=function(a,b){d===this.attr("data-o_"+a)&&this.attr("data-o_"+a,this.attr(a)?this.attr(a):""),this.attr(a,b)},a.fn.wc_reset_variation_attr=function(a){d!==this.attr("data-o_"+a)&&this.attr(a,this.attr("data-o_"+a))},a.fn.wc_variations_image_update=function(a){var b=this,c=b.closest(".product"),d=c.find("div.images img:eq(0)"),e=c.find("div.images a.zoom:eq(0)");a&&a.image_src&&a.image_src.length>1?(d.wc_set_variation_attr("src",a.image_src),d.wc_set_variation_attr("title",a.image_title),d.wc_set_variation_attr("alt",a.image_title),d.wc_set_variation_attr("srcset",a.image_srcset),d.wc_set_variation_attr("sizes",a.image_sizes),e.wc_set_variation_attr("href",a.image_link),e.wc_set_variation_attr("title",a.image_caption)):(d.wc_reset_variation_attr("src"),d.wc_reset_variation_attr("title"),d.wc_reset_variation_attr("alt"),d.wc_reset_variation_attr("srcset"),d.wc_reset_variation_attr("sizes"),e.wc_reset_variation_attr("href"),e.wc_reset_variation_attr("title"))},a(function(){"undefined"!=typeof wc_add_to_cart_variation_params&&a(".variations_form").each(function(){a(this).wc_variation_form().find(".variations select:eq(0)").change()})})}(jQuery,window,document);}catch(e){}try{var woocommerce_price_slider_params={"currency_symbol":"Rp","currency_pos":"left","min_price":"","max_price":""};}catch(e){}
try{jQuery(function($){$('.add_to_cart_button:not(.product_type_variable, .product_type_grouped)').click(function(){dataLayer.push({'event':'gtm4wp.addProductToCart','productName':$(this).parent().find('h3').text(),'productSKU':$(this).data('product_sku'),'productID':$(this).data('product_id'),});});$('.add_to_cart_button:not(.product_type_variable, .product_type_grouped)').click(function(){var productdata=$(this).closest('li').find('a .gtm4wp_productdata');dataLayer.push({'event':'gtm4wp.addProductToCart','ecommerce':{'currencyCode':'IDR','add':{'products':[{'name':productdata.data('product_name'),'id':productdata.data('product_id'),'price':productdata.data('product_price'),'category':productdata.data('product_cat'),'quantity':1}]}}});});$('.products li a:not(.add_to_cart_button)').click(function(){var productdata=$(this).find('.gtm4wp_productdata');if(0==productdata.length){return true;}
dataLayer.push({'event':'gtm4wp.productClick','ecommerce':{'click':{'products':[{'name':productdata.data('product_name'),'id':productdata.data('product_id'),'price':productdata.data('product_price'),'category':productdata.data('product_cat'),'position':productdata.data('product_listposition')}]}},'eventCallback':function(){document.location=productdata.data('product_url')}});return false;});});}catch(e){}
try{(function(){var request,b=document.body,c='className',cs='customize-support',rcs=new RegExp('(^|\\s+)(no-)?'+cs+'(\\s+|$)');request=true;b[c]=b[c].replace(rcs,' ');b[c]+=(window.postMessage&&request?' ':' no-')+cs;}());}catch(e){}