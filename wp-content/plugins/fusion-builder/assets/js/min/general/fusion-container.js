function initScrollingSections(){var i,e,n=jQuery("#content").find(".fusion-scroll-section"),t=(Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0))+(jQuery("#wpadminbar").length?parseInt(jQuery("#wpadminbar").height(),10):0);window.lastYPosition=0,window.scrollDisabled=!1,n.length&&(jQuery("#content").find(".non-hundred-percent-height-scrolling").length||1!==n.length||jQuery.trim(jQuery("#sliders-container").html())||(n.addClass("active"),n.find(".fusion-scroll-section-nav li:first a").addClass("active"),i=!0),n.each(function(){1<jQuery(this).children("div").length&&(e=t?"calc("+(100*jQuery(this).children("div").size()+50)+"vh - "+t+"px)":100*jQuery(this).children("div").size()+50+"vh",jQuery(this).css("height",e),t&&(jQuery(this).find(".hundred-percent-height-scrolling").css("height","calc(100vh - "+t+"px)"),jQuery(this).find(".fusion-scroll-section-nav").css("top","calc(50% + "+t/2+"px)")))}),window.lastYPosition=jQuery(window).scrollTop(),jQuery(window).scroll(function(){var e=jQuery(window).scrollTop();window.scrollDisabled||jQuery(".fusion-scroll-section").each(function(){1<jQuery(this).children("div").length&&!jQuery(this).hasClass("fusion-scroll-section-mobile-disabled")&&jQuery(this).fusionPositionScrollSectionElements(e,i)})}),jQuery(".fusion-scroll-section-link").on("click",function(e){var i=jQuery(this).parents(".fusion-scroll-section"),n=getScrollSectionPositionValues(i),t=i.find(".fusion-scroll-section-element"),o=t.length,s=parseInt(jQuery(this).parents(".fusion-scroll-section-nav").find(".fusion-scroll-section-link.active").data("element"),10),c=parseInt(jQuery(this).data("element"),10),l=Math.abs(c-s);e.preventDefault(),0<l&&(i.data("clicked",c),"fixed"!==t.last().css("position")&&t.css({position:"fixed",top:n.sectionTopOffset,left:n.sectionLeftOffset,padding:"0",width:n.sectionWidth}),1===c?jQuery(window).scrollTop(n.sectionTop+1):o===c?jQuery(window).scrollTop(n.sectionBottom-n.viewportHeight-1):s<c?jQuery(window).scrollTop(n.sectionTop+n.viewportHeight*c-1):jQuery(window).scrollTop(n.sectionTop+n.viewportHeight*(c-1)+1))})),jQuery(".hundred-percent-height").length&&(setCorrectResizeValuesForScrollSections(),jQuery(window).on("resize",function(){setCorrectResizeValuesForScrollSections()}))}function setCorrectResizeValuesForScrollSections(){var e=jQuery("#content").find(".fusion-scroll-section"),i=0,n=0,t=jQuery("#wpadminbar").length?parseInt(jQuery("#wpadminbar").height(),10):0;e.length&&(jQuery(".fusion-scroll-section.active").find(".fusion-scroll-section-element").css({left:jQuery("#content").offset().left}),jQuery(".fusion-scroll-section").find(".fusion-scroll-section-element").css({width:jQuery("#content").width()}),0==fusionContainerVars.container_hundred_percent_height_mobile&&(Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")?(jQuery(".fusion-scroll-section").removeClass("active").addClass("fusion-scroll-section-mobile-disabled"),jQuery(".fusion-scroll-section").attr("style",""),jQuery(".fusion-scroll-section").find(".fusion-scroll-section-element").attr("style",""),jQuery(".fusion-scroll-section").find(".hundred-percent-height-scrolling").css("height","auto"),jQuery(".fusion-scroll-section").find(".fusion-fullwidth-center-content").css("height","auto")):jQuery(".fusion-scroll-section").hasClass("fusion-scroll-section-mobile-disabled")&&(jQuery(".fusion-scroll-section").find(".fusion-fullwidth-center-content").css("height",""),Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight||(i=getStickyHeaderHeight(!0)),n=i+t,e.each(function(){1<jQuery(this).children("div").length&&(jQuery(this).css("height",100*jQuery(this).children("div").size()+50+"vh"),jQuery(this).find(".hundred-percent-height-scrolling").css("height","calc(100vh - "+n+"px)"))}),scrollToCurrentScrollSection()))),jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").length&&(Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight||(i=getStickyHeaderHeight(!0)),n=i+t,0==fusionContainerVars.container_hundred_percent_height_mobile&&(Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")?(jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").css("height","auto"),jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").find(".fusion-fullwidth-center-content").css("height","auto")):(jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").css("height","calc(100vh - "+n+"px)"),jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").find(".fusion-fullwidth-center-content").css("height",""))))}function scrollToCurrentScrollSection(){var s=Math.ceil(jQuery(window).scrollTop()),e=jQuery(window).height(),c=Math.floor(s+e),i=Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0),n=jQuery("#wpadminbar").length?parseInt(jQuery("#wpadminbar").height(),10):0;s+=i+n,jQuery(".fusion-page-load-link").hasClass("fusion-page.load-scroll-section-link")||jQuery(".fusion-scroll-section").each(function(){var e=jQuery(this),i=Math.ceil(e.offset().top),n=Math.ceil(e.outerHeight()),t=Math.floor(i+n),o=jQuery("html").hasClass("ua-edge")||jQuery("html").hasClass("ua-ie")?"body":"html";i<=s&&c<=t?(e.addClass("active"),jQuery(o).animate({scrollTop:i-50},{duration:50,easing:"easeInExpo",complete:function(){jQuery(o).animate({scrollTop:i},{duration:50,easing:"easeOutExpo",complete:function(){Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")||jQuery(".fusion-scroll-section").removeClass("fusion-scroll-section-mobile-disabled")}})}})):Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")||jQuery(".fusion-scroll-section").removeClass("fusion-scroll-section-mobile-disabled")})}function getScrollSectionPositionValues(e){var i={};return i.sectionTop=Math.ceil(e.offset().top),i.sectionHeight=Math.ceil(e.outerHeight()),i.sectionBottom=Math.floor(i.sectionTop+i.sectionHeight),i.viewportTop=Math.ceil(jQuery(window).scrollTop()),i.viewportHeight=jQuery(window).height(),i.viewportBottom=Math.floor(i.viewportTop+i.viewportHeight),i.sectionWidth=jQuery("#content").width(),i.sectionTopOffset=jQuery("#wpadminbar").length?parseInt(jQuery("#wpadminbar").height(),10):0,i.sectionLeftOffset=jQuery("#content").offset().left,i.sectionTopOffset+=Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0),i.viewportTop+=i.sectionTopOffset,i}jQuery(window).on("load fusion-element-render-fusion_builder_container resize",function(e,i){var n=void 0!==i?jQuery('div[data-cid="'+i+'"]').find(".fullwidth-faded"):jQuery(".fullwidth-faded"),t=void 0!==i?jQuery('div[data-cid="'+i+'"]').find(".hundred-percent-height"):jQuery(".hundred-percent-height"),o=Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0),s=jQuery("#wpadminbar").length?parseInt(jQuery("#wpadminbar").height(),10):0,c=jQuery("body").hasClass("fusion-builder-live")&&!jQuery("body").hasClass("fusion-builder-preview-mode"),l=o+s;n.fusionScroller({type:"fading_blur"}),t.css("min-height","").css("height",""),t.find(".fusion-fullwidth-center-content").css("min-height",""),0==fusionContainerVars.container_hundred_percent_height_mobile&&Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")?(t.css("height","auto"),c&&(t.css("min-height","0"),t.find(".fusion-fullwidth-center-content").css("min-height","0"))):(t.css("height","calc(100vh - "+l+"px)"),c&&(t.css("min-height","calc(100vh - "+l+"px)"),t.find(".fusion-fullwidth-center-content").css("min-height","calc(100vh - "+l+"px)")))}),jQuery(document).ready(function(){initScrollingSections(),Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")&&jQuery(".fullwidth-faded").each(function(){var e=jQuery(this).css("background-image"),i=jQuery(this).css("background-color");jQuery(this).parent().css("background-image",e),jQuery(this).parent().css("background-color",i),jQuery(this).remove()})}),jQuery(window).on("load",function(){jQuery("#content").find(".fusion-scroll-section").length&&void 0===jQuery(".fusion-page-load-link").attr("href")&&setTimeout(function(){scrollToCurrentScrollSection()},400)}),function(c){"use strict";var l="down";function r(){var e=window.pageYOffset||document.documentElement.scrollTop,i=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(i,e)},window.scrollDisabled=!0}function a(){window.onscroll=function(){},window.scrollDisabled=!1}c.fn.fusionPositionScrollSectionElements=function(e,i){var n=c(this),t=n.find(".fusion-scroll-section-element").length,o=0,s=getScrollSectionPositionValues(n);(i=i||!1)||(s.sectionTop<=s.viewportTop&&s.sectionBottom>=s.viewportBottom?n.addClass("active"):n.removeClass("active")),window.lastYPosition<e?(n.data("clicked")?(o=n.data("clicked"),n.removeData("clicked"),n.removeAttr("data-clicked")):o=(o=n.find(".fusion-scroll-section-element.active")).length?t<(o=o.data("element")+1)?t:o:1,s.sectionTop<=s.viewportTop&&s.sectionTop+s.viewportHeight>s.viewportTop?(n.find(".fusion-scroll-section-element").removeClass("active"),n.children(":nth-child(1)").addClass("active"),n.find(".fusion-scroll-section-nav a").removeClass("active"),n.find('.fusion-scroll-section-nav a[data-element="'+n.children(":nth-child(1)").data("element")+'"] ').addClass("active"),n.find(".fusion-scroll-section-element").css({position:"fixed",top:s.sectionTopOffset,left:s.sectionLeftOffset,padding:"0",width:s.sectionWidth}),n.children(":nth-child(1)").css("display","block"),window.scrollDisabled=!0,c(window).scrollTop(s.sectionTop+s.viewportHeight-1),r(),setTimeout(function(){a()},fusionContainerVars.hundred_percent_scroll_sensitivity)):s.sectionBottom<=s.viewportBottom&&"absolute"!==n.find(".fusion-scroll-section-element").last().css("position")?(n.find(".fusion-scroll-section-element").removeClass("active"),n.find(".fusion-scroll-section-element").last().addClass("active"),n.find(".fusion-scroll-section-element").css("position","absolute"),n.find(".fusion-scroll-section-element").last().css({top:"auto",left:"0",bottom:"0",padding:""}),n.find(".fusion-scroll-section-nav a").removeClass("active"),n.find(".fusion-scroll-section-nav a").last().addClass("active")):1<o&&"fixed"===n.find(".fusion-scroll-section-element").last().css("position")&&(!n.children(":nth-child("+o+")").hasClass("active")||"up"===l)&&(n.find(".fusion-scroll-section-element").removeClass("active"),n.children(":nth-child("+o+")").addClass("active"),n.find(".fusion-scroll-section-nav a").removeClass("active"),n.find('.fusion-scroll-section-nav a[data-element="'+n.children(":nth-child("+o+")").data("element")+'"] ').addClass("active"),window.scrollDisabled=!0,o<t?c(window).scrollTop(s.sectionTop+s.viewportHeight*o-1):c(window).scrollTop(s.sectionBottom-s.viewportHeight),r(),setTimeout(function(){a()},fusionContainerVars.hundred_percent_scroll_sensitivity)),l="down"):window.lastYPosition>e&&(n.data("clicked")?(o=n.data("clicked"),n.removeData("clicked"),n.removeAttr("data-clicked")):o=(o=n.find(".fusion-scroll-section-element.active")).length?(o=o.data("element")-1)<1?1:o:0,s.sectionBottom>=s.viewportBottom&&"absolute"===n.find(".fusion-scroll-section-element").last().css("position")?(n.find(".fusion-scroll-section-element").removeClass("active"),n.find(".fusion-scroll-section-element").last().addClass("active"),n.find(".fusion-scroll-section-nav a").removeClass("active"),n.find('.fusion-scroll-section-nav a[data-element="'+n.find(".fusion-scroll-section-element").last().data("element")+'"] ').addClass("active"),n.find(".fusion-scroll-section-element").css({position:"fixed",top:s.sectionTopOffset,left:s.sectionLeftOffset,padding:"0",width:s.sectionWidth}),n.find(".fusion-scroll-section-element").last().css("display","block"),window.scrollDisabled=!0,c(window).scrollTop(s.sectionTop+s.viewportHeight*(t-1)),r(),setTimeout(function(){a()},fusionContainerVars.hundred_percent_scroll_sensitivity)):(s.sectionTop>=s.viewportTop||0===c(window).scrollTop()&&n.find(".fusion-scroll-section-element").first().hasClass("active"))&&""!==n.find(".fusion-scroll-section-element").first().css("position")?(n.find(".fusion-scroll-section-element").removeClass("active"),n.find(".fusion-scroll-section-element").first().addClass("active"),n.find(".fusion-scroll-section-element").css("position",""),n.find(".fusion-scroll-section-element").first().css("padding",""),n.find(".fusion-scroll-section-nav a").removeClass("active"),n.find(".fusion-scroll-section-nav a").first().addClass("active")):0<o&&"fixed"===n.find(".fusion-scroll-section-element").last().css("position")&&(!n.children(":nth-child("+o+")").hasClass("active")||"down"===l)&&(n.find(".fusion-scroll-section-element").removeClass("active"),n.children(":nth-child("+o+")").addClass("active"),n.find(".fusion-scroll-section-nav a").removeClass("active"),n.find('.fusion-scroll-section-nav a[data-element="'+n.children(":nth-child("+o+")").data("element")+'"] ').addClass("active"),window.scrollDisabled=!0,c(window).scrollTop(s.sectionTop+s.viewportHeight*(o-1)),r(),setTimeout(function(){a()},fusionContainerVars.hundred_percent_scroll_sensitivity)),l="up"),window.lastYPosition=c(window).scrollTop()}}(jQuery);