(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{255:function(t,i,n){"use strict";n.r(i);var e=n(11),l={props:{item:{required:!0}},computed:{link(){return Object(e.c)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:e.g,isMailto:e.h,isTel:e.i,focusoutAction(){this.$emit("focusout")}}},s=n(4),o=Object(s.a)(l,(function(){var t=this,i=t._self._c;return t.isExternal(t.link)?i("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),i("OutboundLink")],1):i("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(i){return t.focusoutAction.apply(null,arguments)}}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);i.default=o.exports}}]);