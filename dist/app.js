webpackJsonp([0],[
/* 0 */
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by yuting on 2016/11/14.
	 */
	
	__webpack_require__(/*! ../sass/main.scss */ 1);
	
	var app = {};
	//路由设置
	
	//历史记录
	app.init = function(){
	    //导入插件
	    __webpack_require__(/*! angular */ 9);
	    __webpack_require__(/*! angular-ui-router */ 11);
	
	    //导入app
	    __webpack_require__(/*! ./app */ 12);
	};
	
	app.start = function(){
	    //手动启动应用
	    angular.element(document).ready(function() {
	        angular.bootstrap(document, ['myApp']);
	    });
	};
	
	app.init();
	app.start();
	
	
	
	


/***/ },
/* 1 */
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/.0.25.0@css-loader!./../../~/.4.0.2@sass-loader!./main.scss */ 2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/.0.13.1@style-loader/addStyles.js */ 8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.4.0.2@sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.4.0.2@sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/*!**************************************************************************!*\
  !*** ./~/.0.25.0@css-loader!./~/.4.0.2@sass-loader!./src/sass/main.scss ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/.0.25.0@css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-family: \"PingFang\", \"Helvetica\", \"Droid Sans Fallback\", \"Microsoft Yahei\", \"STHeiti Light\", monospace, monospace;\n  background-color: #f8f8f8; }\n\nhtml, body {\n  height: 100%;\n  width: 100%; }\n\nimg {\n  border: 0;\n  max-width: 100%; }\n\n* {\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle; }\n\nbody,\nul,\nol,\nli,\ndl,\ndt,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\np,\nblockquote,\nfieldset,\ninput,\nabbr,\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmark,\nmeter,\nnav,\noutput,\nprogress,\nsection,\nsummary,\ntime,\ntd {\n  margin: 0;\n  padding: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\ncode,\naddress,\ncaption,\ncite,\ncode,\nem,\nth,\nfigcaption {\n  font-weight: normal;\n  font-style: normal; }\n\nfieldset,\niframe,\ninput {\n  border: none; }\n\ninput {\n  outline: none; }\n\ncaption,\nth {\n  text-align: left; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nul {\n  list-style: none outside; }\n\nins {\n  text-decoration: none; }\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection,\nfigure,\nfigcaption,\ndetails,\nsummary {\n  display: block; }\n\ndiv.v-container, div.one-page {\n  height: 100%;\n  width: 100%; }\n\ndiv.one-page {\n  overflow: hidden; }\n\n/*页面奔放起来的关键 CSS class*/\n.pt-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  display: none;\n  background-color: white; }\n\n.pt-page-current {\n  visibility: visible;\n  display: block;\n  z-index: 1; }\n\n.space .first {\n  border-top: none; }\n\n@keyframes myFirst {\n  from {\n    bottom: -29rem; }\n  to {\n    bottom: 0; } }\n\n@-moz-keyframes myFirst {\n  from {\n    bottom: -29rem; }\n  to {\n    bottom: 0; } }\n\n@-o-keyframes myFirst {\n  from {\n    bottom: -29rem; }\n  to {\n    bottom: 0; } }\n\n@-webkit-keyframes myFirst {\n  from {\n    bottom: -29rem; }\n  to {\n    bottom: 0; } }\n\n@keyframes second {\n  from {\n    bottom: 0; }\n  to {\n    bottom: -29rem; } }\n\n@-moz-keyframes second {\n  from {\n    bottom: 0; }\n  to {\n    bottom: -29rem; } }\n\n@-o-keyframes second {\n  from {\n    bottom: 0; }\n  to {\n    bottom: -29rem; } }\n\n@-webkit-keyframes second {\n  from {\n    bottom: 0; }\n  to {\n    bottom: -29rem; } }\n\n@-webkit-keyframes buzz-out {\n  0% {\n    -webkit-transform: rotate(2deg); }\n  2% {\n    -webkit-transform: rotate(-2deg); }\n  4% {\n    -webkit-transform: rotate(2deg); }\n  6% {\n    -webkit-transform: rotate(-2deg); }\n  8% {\n    -webkit-transform: rotate(2deg); }\n  10% {\n    -webkit-transform: rotate(-2deg); }\n  12% {\n    -webkit-transform: rotate(2deg); }\n  14% {\n    -webkit-transform: rotate(-2deg); }\n  16% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(0deg); } }\n\n.buzz {\n  -webkit-animation-name: buzz-out;\n  -webkit-animation-duration: 3.5s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite; }\n\n.btn-lg.on {\n  background-color: #f60; }\n\n.bg_size {\n  background-size: 100% auto; }\n\n.help {\n  background-color: #fff;\n  padding-left: 1.5rem;\n  border-bottom: 1px solid #e5e5e5; }\n\n.help a {\n  text-decoration: none; }\n\n.help a li {\n  line-height: 5rem;\n  border-bottom: 1px solid #e5e5e5;\n  padding-right: 1.5rem; }\n\n.help a:last-child li {\n  border-bottom: none; }\n\n.help li b {\n  color: #ccc;\n  padding-right: 10px; }\n\n.help li span {\n  color: #333; }\n\n.help .icon_gray_right {\n  width: 3rem;\n  height: 5rem;\n  opacity: .6; }\n\n.help-detail {\n  padding: 1rem;\n  background-color: #fff; }\n\n.help-detail article {\n  margin-bottom: 2rem;\n  line-height: 2.2rem;\n  color: #333; }\n\n.help-detail article h3 {\n  font-weight: bold;\n  font-size: 1.6rem; }\n\n.a-wrap {\n  margin: 1.5rem auto;\n  text-align: center; }\n\n.a-wrap .logo {\n  width: 12rem;\n  margin-top: 2rem; }\n\n.a-wrap .info {\n  width: 20rem;\n  color: #bbb;\n  margin-top: 0.5rem;\n  margin-bottom: 4rem; }\n\n.a-wrap .tip {\n  margin: 1rem 0 4rem 0;\n  color: #999; }\n\n.btn-lg {\n  margin: 15px; }\n\n.btn-lg div {\n  width: 100%;\n  border-radius: 0.5rem;\n  color: #fff;\n  line-height: 4rem;\n  text-align: center; }\n\n.btn-lg .on {\n  background-color: #f60; }\n\n.agreement {\n  color: #ababab;\n  line-height: 2rem;\n  text-align: center;\n  position: relative;\n  margin-left: 1.5rem; }\n\n.agreement-left {\n  color: #ababab;\n  line-height: 2rem;\n  text-align: left;\n  position: relative;\n  margin-left: 2rem; }\n\n.agreement .checkbox, .agreement-left .checkbox {\n  position: relative;\n  left: -0.5rem;\n  top: 0.2rem; }\n\n.agreement a, .agreement-left a {\n  margin-top: 0.3rem; }\n\n.agreement a span, .agreement-left a span {\n  color: #5EBDE9; }\n\n.xiahuaxian {\n  display: inline-block;\n  border-bottom: 2px solid #333;\n  min-width: 2rem; }\n\n.back {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 999; }\n\n.back1 {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: transparent;\n  z-index: 999; }\n\n.chose {\n  box-shadow: inset 0 0 0 3px #F3AF00; }\n\n.orange-bg {\n  background-color: #f2f2f2; }\n\n.yaDuoVip table {\n  width: 100%;\n  border: 1px solid #b2b2b2; }\n\n.yaDuoVip td {\n  width: 30%;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  border: 1px solid #b2b2b2;\n  text-align: center; }\n\n.bg_white {\n  background: #fff; }\n\n.jiaobiao {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border: solid 2rem;\n  border-color: red red transparent transparent;\n  border-radius: 0 3px; }\n\n.h_100_ {\n  height: 100%; }\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  outline: medium;\n  border: 0; }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n@font-face {\n  font-family: 'icomoon';\n  src: url(" + __webpack_require__(/*! ../fonts/icomoon.eot?i6vfx8 */ 4) + ");\n  src: url(" + __webpack_require__(/*! ../fonts/icomoon.eot?i6vfx8 */ 4) + "#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(/*! ../fonts/icomoon.ttf?i6vfx8 */ 5) + ") format(\"truetype\"), url(" + __webpack_require__(/*! ../fonts/icomoon.woff?i6vfx8 */ 6) + ") format(\"woff\"), url(" + __webpack_require__(/*! ../fonts/icomoon.svg?i6vfx8 */ 7) + "#icomoon) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'icomoon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-oc-cir:before {\n  content: \"\\E900\"; }\n\n/*!\nAniCollection - http://anicollection.github.io/\nLicensed under the MIT license - http://opensource.org/licenses/MIT\nCopyright (c) 2015 Dariel Noel\n\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license - http://opensource.org/licenses/MIT\nCopyright (c) 2014 Daniel Eden\n*/\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s; }\n\n.duration-xs {\n  -webkit-animation-duration: 0.25s;\n  animation-duration: 0.25s; }\n\n.duration-sm {\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s; }\n\n.duration-md {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n\n.duration-lg {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s; }\n\n.duration-xl {\n  -webkit-animation-duration: 4s;\n  animation-duration: 4s; }\n\n/*animation-timing-function: sets the animation speed\n( linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier ).*/\n.timing-linear {\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear; }\n\n.timing-ease-in {\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in; }\n\n.timing-ease-out {\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out; }\n\n.timing-ease-in-out {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n.timing-cubic-bezier {\n  -webkit-animation-timing-function: cubic-bezier;\n  animation-timing-function: cubic-bezier; }\n\n/*animation-delay: the delay before our animation will start.*/\n.delay-xs {\n  -webkit-animation-delay: 0.25s;\n  animation-delay: 0.25s; }\n\n.delay-sm {\n  -webkit-animation-delay: 0.5s;\n  animation-delay: 0.5s; }\n\n.delay-md {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n\n.delay-lg {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s; }\n\n.delay-xl {\n  -webkit-animation-delay: 4s;\n  animation-delay: 4s; }\n\n/*how many times it will iterate through animation.*/\n.iteration-infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n.iteration-1 {\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1; }\n\n.iteration-2 {\n  -webkit-animation-iteration-count: 2;\n  animation-iteration-count: 2; }\n\n.iteration-3 {\n  -webkit-animation-iteration-count: 3;\n  animation-iteration-count: 3; }\n\n.iteration-4 {\n  -webkit-animation-iteration-count: 2;\n  animation-iteration-count: 2; }\n\n.iteration-5 {\n  -webkit-animation-iteration-count: 4;\n  animation-iteration-count: 4; }\n\n/* animation-direction: gives you the ability to change the loop direction, from start to end ,\nor from end to start, or both.*/\n.direction-normal {\n  -webkit-animation-direction: normal;\n  animation-direction: normal; }\n\n.direction-reverse {\n  -webkit-animation-direction: reverse;\n  animation-direction: reverse; }\n\n.direction-alternate {\n  -webkit-animation-direction: alternate;\n  animation-direction: alternate; }\n\n.direction-alternate-reverse {\n  -webkit-animation-direction: alternate-reverse;\n  animation-direction: alternate-reverse; }\n\n/* animation-fill-mode: specifies which styles will be applied to the element when our animation is finished*/\n.fill-mode-none {\n  -webkit-animation-fill-mode: none;\n  animation-fill-mode: none; }\n\n.fill-mode-forwards {\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards; }\n\n.fill-mode-backwards {\n  -webkit-animation-fill-mode: backwards;\n  animation-fill-mode: backwards; }\n\n.fill-mode-both {\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n/*\n *@name bounce\n *@className bounce animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes bounce {\n  0%, 100%, 20%, 53%, 80% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  40%, 43% {\n    -webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0); }\n  70% {\n    -webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n    transform: translate3d(0, -4px, 0); } }\n\n@keyframes bounce {\n  0%, 100%, 20%, 53%, 80% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  40%, 43% {\n    -webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0);\n    -ms-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0); }\n  70% {\n    -webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0);\n    -ms-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n    -ms-transform: translate3d(0, -4px, 0);\n    transform: translate3d(0, -4px, 0); } }\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  -ms-transform-origin: center bottom;\n  transform-origin: center bottom; }\n\n/*\n *@name flash\n *@className flash animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes flash {\n  0%, 100%, 50% {\n    opacity: 1; }\n  25%, 75% {\n    opacity: 0; } }\n\n@keyframes flash {\n  0%, 100%, 50% {\n    opacity: 1; }\n  25%, 75% {\n    opacity: 0; } }\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash; }\n\n/*\n *@name pulse\n *@className pulse animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Nick Pettit\n *@source Glide\n *@sourceUrl https://github.com/nickpettit/glide\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    -ms-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    -ms-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    -ms-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse; }\n\n/*\n *@name rubberBand\n *@className rubberBand animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes rubberBand {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1); }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1); }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1); }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1); }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes rubberBand {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    -ms-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    -ms-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1); }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    -ms-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1); }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    -ms-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1); }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    -ms-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1); }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    -ms-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    -ms-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand; }\n\n/*\n *@name shake\n *@className shake animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes shake {\n  0%, 100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); } }\n\n@keyframes shake {\n  0%, 100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    -ms-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    -ms-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); } }\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake; }\n\n/*\n *@name swing\n *@className swing animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg); }\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg); }\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg); }\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg); }\n  100% {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg); } }\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    -ms-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg); }\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    -ms-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg); }\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    -ms-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg); }\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    -ms-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg); }\n  100% {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    -ms-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg); } }\n\n.swing {\n  -webkit-transform-origin: top center;\n  -ms-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing; }\n\n/*\n *@name tada\n *@className tada animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes tada {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes tada {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    -ms-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    -ms-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    -ms-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada; }\n\n/*\n *@name wobble\n *@className wobble animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Nick Pettit\n *@source Glide\n *@sourceUrl https://github.com/nickpettit/glide\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes wobble {\n  0% {\n    -webkit-transform: none;\n    transform: none; }\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); }\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); }\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); }\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); }\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes wobble {\n  0% {\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; }\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    -ms-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); }\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    -ms-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); }\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    -ms-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); }\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    -ms-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); }\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    -ms-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); }\n  100% {\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble; }\n\n/*\n *@name bounceIn\n *@className bounceIn animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes bounceIn {\n  0%, 100%, 20%, 40%, 60%, 80% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes bounceIn {\n  0%, 100%, 20%, 40%, 60%, 80% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    -ms-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    -ms-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    -ms-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    -ms-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    -ms-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn; }\n\n/*\n *@name bounceInDown\n *@className bounceInDown animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes bounceInDown {\n  0%, 100%, 60%, 75%, 90% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInDown {\n  0%, 100%, 60%, 75%, 90% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    -ms-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    -ms-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    -ms-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    -ms-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0); }\n  100% {\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown; }\n\n/*\n *@name bounceInLeft\n *@className bounceInLeft animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes bounceInLeft {\n  0%, 100%, 60%, 75%, 90% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInLeft {\n  0%, 100%, 60%, 75%, 90% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    -ms-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    -ms-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    -ms-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    -ms-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0); }\n  100% {\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft; }\n\n/*\n *@name bounceInRight\n *@className bounceInRight animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes bounceInRight {\n  0%, 100%, 60%, 75%, 90% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInRight {\n  0%, 100%, 60%, 75%, 90% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    -ms-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    -ms-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    -ms-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    -ms-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0); }\n  100% {\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight; }\n\n/*\n *@name bounceInUp\n *@className bounceInUp animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes bounceInUp {\n  0%, 100%, 60%, 75%, 90% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes bounceInUp {\n  0%, 100%, 60%, 75%, 90% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    -ms-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    -ms-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    -ms-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    -ms-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp; }\n\n/*\n *@name bounceOut\n *@className bounceOut animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); } }\n\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    -ms-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    -ms-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); } }\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut; }\n\n/*\n *@name bounceOutDown\n *@className bounceOutDown animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    -ms-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    -ms-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    -ms-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown; }\n\n/*\n *@name bounceOutLeft\n *@className bounceOutLeft animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    -ms-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    -ms-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft; }\n\n/*\n *@name bounceOutRight\n *@className bounceOutRight animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    -ms-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    -ms-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight; }\n\n/*\n *@name bounceOutUp\n *@className bounceOutUp animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    -ms-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    -ms-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    -ms-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp; }\n\n/*\n *@name fadeIn\n *@className fadeIn animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn; }\n\n/*\n *@name fadeInDown\n *@className fadeInDown animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    -ms-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n/*\n *@name fadeInDownBig\n *@className fadeInDownBig animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    -ms-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig; }\n\n/*\n *@name fadeInLeft\n *@className fadeInLeft animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    -ms-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft; }\n\n/*\n *@name fadeInLeftBig\n *@className fadeInLeftBig animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    -ms-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig; }\n\n/*\n *@name fadeInRight\n *@className fadeInRight animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    -ms-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight; }\n\n/*\n *@name fadeInRightBig\n *@className fadeInRightBig animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    -ms-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig; }\n\n/*\n *@name fadeInUp\n *@className fadeInUp animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    -ms-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp; }\n\n/*\n *@name fadeInUpBig\n *@className fadeInUpBig animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeInUpBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInUpBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    -ms-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig; }\n\n/*\n *@name fadeOut\n *@className fadeOut animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut; }\n\n/*\n *@name fadeOutDown\n *@className fadeOutDown animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeOutDown {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n@keyframes fadeOutDown {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    -ms-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown; }\n\n/*\n *@name fadeOutDownBig\n *@className fadeOutDownBig animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeOutDownBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n@keyframes fadeOutDownBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    -ms-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig; }\n\n/*\n *@name fadeOutLeft\n *@className fadeOutLeft animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeOutLeft {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n@keyframes fadeOutLeft {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    -ms-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft; }\n\n/*\n *@name fadeOutLeftBig\n *@className fadeOutLeftBig animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n@keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    -ms-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig; }\n\n/*\n *@name fadeOutRight\n *@className fadeOutRight animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeOutRight {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n@keyframes fadeOutRight {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    -ms-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight; }\n\n/*\n *@name fadeOutRightBig\n *@className fadeOutRightBig animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeOutRightBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n@keyframes fadeOutRightBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    -ms-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig; }\n\n/*\n *@name fadeOutUp\n *@className fadeOutUp animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeOutUp {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n@keyframes fadeOutUp {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    -ms-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp; }\n\n/*\n *@name fadeOutUpBig\n *@className fadeOutUpBig animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes fadeOutUpBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n@keyframes fadeOutUpBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    -ms-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig; }\n\n/*\n *@name flip\n *@className flip animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes flip {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  80% {\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; } }\n\n@keyframes flip {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -ms-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -ms-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -ms-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  80% {\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    -ms-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  100% {\n    -webkit-transform: perspective(400px);\n    -ms-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; } }\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  -ms-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip; }\n\n/*\n *@name flipInX\n *@className flipInX animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n@keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -ms-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -ms-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    -ms-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    -ms-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  100% {\n    -webkit-transform: perspective(400px);\n    -ms-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX; }\n\n/*\n *@name flipInY\n *@className flipInY animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg); }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n@keyframes flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -ms-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -ms-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    -ms-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    -ms-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg); }\n  100% {\n    -webkit-transform: perspective(400px);\n    -ms-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY; }\n\n/*\n *@name flipOutX\n *@className flipOutX animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes flipOutX {\n  0% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n@keyframes flipOutX {\n  0% {\n    -webkit-transform: perspective(400px);\n    -ms-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -ms-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -ms-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important; }\n\n/*\n *@name flipOutY\n *@className flipOutY animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes flipOutY {\n  0% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0; } }\n\n@keyframes flipOutY {\n  0% {\n    -webkit-transform: perspective(400px);\n    -ms-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    -ms-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -ms-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0; } }\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY; }\n\n/*\n *@name lightSpeedIn\n *@className lightSpeedIn animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes lightSpeedIn {\n  0% {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0; }\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes lightSpeedIn {\n  0% {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    -ms-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0; }\n  60% {\n    -webkit-transform: skewX(20deg);\n    -ms-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: skewX(-5deg);\n    -ms-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out; }\n\n/*\n *@name lightSpeedOut\n *@className lightSpeedOut animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes lightSpeedOut {\n  0% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0; } }\n\n@keyframes lightSpeedOut {\n  0% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    -ms-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0; } }\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in; }\n\n/*\n *@name rotate\n *@className rotate animated\n *@cssCode\n *@editionLink codepen.io\n *@author Quinn Keaveney\n *@source AniCollection\n *@sourceUrl https://github.com/anicollection/anicollection/\n *@issues https://github.com/anicollection/anicollection/issues\n *@license MIT\n */\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg); }\n  100% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform-origin: center;\n    -ms-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    -ms-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg); }\n  100% {\n    -webkit-transform-origin: center;\n    -ms-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.rotate {\n  -webkit-animation-name: rotate;\n  animation-name: rotate; }\n\n/*\n *@name rotateDownLeft\n *@className rotateDownLeft animated\n *@cssCode\n *@editionLink codepen.io\n *@author Quinn Keaveney\n *@source AniCollection\n *@sourceUrl https://github.com/anicollection/anicollection\n *@issues https://github.com/anicollection/anicollection/issues\n *@license MIT\n */\n@-webkit-keyframes rotateDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg); }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes rotateDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    -ms-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg); }\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.rotateDownLeft {\n  -webkit-animation-name: rotateDownLeft;\n  animation-name: rotateDownLeft; }\n\n/*\n *@name rotateDownRight\n *@className rotateDownRight animated\n *@cssCode\n *@editionLink codepen.io\n *@author Quinn Keaveney\n *@source AniCollection\n *@sourceUrl https://github.com/anicollection/anicollection\n *@issues https://github.com/anicollection/anicollection/issues\n *@license MIT\n */\n@-webkit-keyframes rotateDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg); }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes rotateDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    -ms-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg); }\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.rotateDownRight {\n  -webkit-animation-name: rotateDownRight;\n  animation-name: rotateDownRight; }\n\n/*\n *@name rotateUpLeft\n *@className rotateUpLeft animated\n *@cssCode\n *@editionLink codepen.io\n *@author Quinn Keaveney\n *@source AniCollection\n *@sourceUrl https://github.com/anicollection/anicollection\n *@issues https://github.com/anicollection/anicollection/issues\n *@license MIT\n */\n@-webkit-keyframes rotateUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg); }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes rotateUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    -ms-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg); }\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.rotateUpLeft {\n  -webkit-animation-name: rotateUpLeft;\n  animation-name: rotateUpLeft; }\n\n/*\n *@name rotateUpRight\n *@className rotateUpRight animated\n *@cssCode\n *@editionLink codepen.io\n *@author Quinn Keaveney\n *@source AniCollection\n *@sourceUrl https://github.com/anicollection/anicollection\n *@issues https://github.com/anicollection/anicollection/issues\n *@license MIT\n */\n@-webkit-keyframes rotateUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg); }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes rotateUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    -ms-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg); }\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.rotateUpRight {\n  -webkit-animation-name: rotateUpRight;\n  animation-name: rotateUpRight; }\n\n/*\n *@name rotateIn\n *@className rotateIn animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes rotateIn {\n  0% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateIn {\n  0% {\n    -webkit-transform-origin: center;\n    -ms-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    -ms-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: center;\n    -ms-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn; }\n\n/*\n *@name rotateInDownLeft\n *@className rotateInDownLeft animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes rotateInDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    -ms-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft; }\n\n/*\n *@name rotateInDownRight\n *@className rotateInDownRight animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes rotateInDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    -ms-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight; }\n\n/*\n *@name rotateInUpLeft\n *@className rotateInUpLeft animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes rotateInUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    -ms-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft; }\n\n/*\n *@name rotateInUpRight\n *@className rotateInUpRight animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes rotateInUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    -ms-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight; }\n\n/*\n *@name rotateOut\n *@className rotateOut animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes rotateOut {\n  0% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0; } }\n\n@keyframes rotateOut {\n  0% {\n    -webkit-transform-origin: center;\n    -ms-transform-origin: center;\n    transform-origin: center;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: center;\n    -ms-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    -ms-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0; } }\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut; }\n\n/*\n *@name rotateOutDownLeft\n *@className rotateOutDownLeft animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes rotateOutDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    -ms-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; } }\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft; }\n\n/*\n *@name rotateOutDownRight\n *@className rotateOutDownRight animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes rotateOutDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    -ms-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight; }\n\n/*\n *@name rotateOutUpLeft\n *@className rotateOutUpLeft animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes rotateOutUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    -ms-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft; }\n\n/*\n *@name rotateOutUpRight\n *@className rotateOutUpRight animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes rotateOutUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0; } }\n\n@keyframes rotateOutUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    -ms-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0; } }\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight; }\n\n/*\n *@name hinge\n *@className hinge animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0; } }\n\n@keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    -ms-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    -ms-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0, 700px, 0);\n    -ms-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0; } }\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge; }\n\n/*\n *@name rollIn\n *@className rollIn animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Nick Pettit\n *@source Glide\n *@sourceUrl https://github.com/nickpettit/glide\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes rollIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes rollIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    -ms-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn; }\n\n/*\n *@name rollOut\n *@className rollOut animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Nick Pettit\n *@source Glide\n *@sourceUrl https://github.com/nickpettit/glide\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes rollOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg); } }\n\n@keyframes rollOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    -ms-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg); } }\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut; }\n\n/*\n *@name zoomIn\n *@className zoomIn animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn; }\n\n/*\n *@name zoomInDown\n *@className zoomInDown animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes zoomInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown; }\n\n/*\n *@name zoomInLeft\n *@className zoomInLeft animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes zoomInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft; }\n\n/*\n *@name zoomInRight\n *@className zoomInRight animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes zoomInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInRight {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight; }\n\n/*\n *@name zoomInUp\n *@className zoomInUp animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes zoomInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp; }\n\n/*\n *@name zoomOut\n *@className zoomOut animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes zoomOut {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n\n@keyframes zoomOut {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    -ms-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut; }\n\n/*\n *@name zoomOutDown\n *@className zoomOutDown animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    -ms-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown; }\n\n/*\n *@name zoomOutLeft\n *@className zoomOutLeft animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center; } }\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    -ms-transform-origin: left center;\n    transform-origin: left center; } }\n\n.zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft; }\n\n/*\n *@name zoomOutRight\n *@className zoomOutRight animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center; } }\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n    -ms-transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    -ms-transform-origin: right center;\n    transform-origin: right center; } }\n\n.zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight; }\n\n/*\n *@name zoomOutUp\n *@className zoomOutUp animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    -ms-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp; }\n\n/*\n *@name slideInDown\n *@className slideInDown animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes slideInDown {\n  0% {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes slideInDown {\n  0% {\n    -webkit-transform: translate3d(0, -100%, 0);\n    -ms-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown; }\n\n/*\n *@name slideInLeft\n *@className slideInLeft animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes slideInLeft {\n  0% {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes slideInLeft {\n  0% {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    -ms-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft; }\n\n/*\n *@name slideInRight\n *@className slideInRight animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes slideInRight {\n  0% {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes slideInRight {\n  0% {\n    -webkit-transform: translate3d(100%, 0, 0);\n    -ms-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight; }\n\n/*\n *@name slideInUp\n *@className slideInUp animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes slideInUp {\n  0% {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes slideInUp {\n  0% {\n    -webkit-transform: translate3d(0, 100%, 0);\n    -ms-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.slideInUp {\n  -webkit-animation-name: slideInUp;\n  animation-name: slideInUp; }\n\n/*\n *@name slideOutDown\n *@className slideOutDown animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes slideOutDown {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n@keyframes slideOutDown {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    -ms-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n.slideOutDown {\n  -webkit-animation-name: slideOutDown;\n  animation-name: slideOutDown; }\n\n/*\n *@name slideOutLeft\n *@className slideOutLeft animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes slideOutLeft {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n@keyframes slideOutLeft {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    -ms-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft; }\n\n/*\n *@name slideOutRight\n *@className slideOutRight animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes slideOutRight {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n@keyframes slideOutRight {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    -ms-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight; }\n\n/*\n *@name slideOutUp\n *@className slideOutUp animated\n *@cssCode true\n *@editionLink codepen.io\n *@author Dan Eden\n *@source Animate.css\n *@sourceUrl http://daneden.github.io/animate.css/\n *@issues https://github.com/daneden/animate.css/issues\n *@license MIT\n */\n@-webkit-keyframes slideOutUp {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n@keyframes slideOutUp {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    -ms-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp; }\n", ""]);
	
	// exports


/***/ },
/* 3 */
/*!**********************************************!*\
  !*** ./~/.0.25.0@css-loader/lib/css-base.js ***!
  \**********************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/*!**************************************!*\
  !*** ./src/fonts/icomoon.eot?i6vfx8 ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/981394af5d07aab3990e965a63971e8c.eot";

/***/ },
/* 5 */
/*!**************************************!*\
  !*** ./src/fonts/icomoon.ttf?i6vfx8 ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/53c3cdce2ecad72935fcde71777577d9.ttf";

/***/ },
/* 6 */
/*!***************************************!*\
  !*** ./src/fonts/icomoon.woff?i6vfx8 ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/f29ebb78b5a89f47d44890abe62f3297.woff";

/***/ },
/* 7 */
/*!**************************************!*\
  !*** ./src/fonts/icomoon.svg?i6vfx8 ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/3e1e43b6c623950e698b0539a26c0998.svg";

/***/ },
/* 8 */
/*!*********************************************!*\
  !*** ./~/.0.13.1@style-loader/addStyles.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by yuting on 2016/11/16.
	 */
	
	/**
	 * 依赖的子模块数组有多少子模块就加多少子模块    使用name关键字变成 ['demo','ui.router']
	 */
	var relaArr = [
	    __webpack_require__(/*! ./module/demo/Init */ 13).name
	];
	
	var app = angular.module('myApp', relaArr); //模块
	
	__webpack_require__(/*! ./base/baseService */ 29)(app);
	__webpack_require__(/*! ./base/baseController */ 32)(app);
	
	/**
	 * 此地进行全局监控
	 */
	app.run(['$rootScope', '$location', '$state',  function($rootScope, $location, $state){
	    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
	        //Todo: 加入历史记录操控
	        console.log('历史记录操作');
	
	    });
	}]);
	
	module.exports = app;

/***/ },
/* 13 */
/*!************************************!*\
  !*** ./src/js/module/demo/Init.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by yuting on 2016/11/16.
	 *
	 */
	
	/**
	 * 模块名称
	 */
	var moduleName = 'demo';
	__webpack_require__(/*! . */ 14)("./" + moduleName + '.scss');
	
	/**
	 * 初始化一个模块名称,在当前位置进行路由的配置
	 */
	
	var app = angular.module(moduleName, ['ui.router']);
	var G = __webpack_require__(/*! ./guidance */ 17)(app);
	
	/**
	 * 子模块的路由配置
	 */
	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	    //每个路由会对应一个控制器，与一个模版文件
	    $stateProvider.state('test', {
	        url: '/test',
	        controller: G.controllers.testCtrl,
	        template: G.templates.testTpl
	    });
	
	    //当路由为test2 的情况下 默认为page1
	    $urlRouterProvider.when('/test2', 'test2/page1');
	
	    //嵌套试图例子路由
	    $stateProvider.state('test2', {
	            url: '/test2',
	            controller: G.controllers.testCtrl2,
	            template: G.templates.testTpl2
	        })
	        .state('test2.Page1', {
	            url: '/page1',
	            params : { attrs : null},
	            controller: G.controllers.pageCtrl1,
	            template: G.templates.page1Tpl
	        })
	        .state('test2.Page2', {
	            url: '/page2',
	            params : { attrs : null },
	            controller: G.controllers.pageCtrl2,
	            template: G.templates.page2Tpl
	        })
	        .state('test2.Page3', {
	            url: '/page3',
	            template: G.templates.page3Tpl
	        });
	}]);
	
	module.exports = app;

/***/ },
/* 14 */
/*!*******************************************!*\
  !*** ./src/js/module/demo ^\.\/.*\.scss$ ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./demo.scss": 15
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 14;


/***/ },
/* 15 */
/*!**************************************!*\
  !*** ./src/js/module/demo/demo.scss ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/.0.25.0@css-loader!./../../../../~/.4.0.2@sass-loader!./demo.scss */ 16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/.0.13.1@style-loader/addStyles.js */ 8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/.0.25.0@css-loader/index.js!./../../../../node_modules/.4.0.2@sass-loader/index.js!./demo.scss", function() {
				var newContent = require("!!./../../../../node_modules/.0.25.0@css-loader/index.js!./../../../../node_modules/.4.0.2@sass-loader/index.js!./demo.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/*!************************************************************************************!*\
  !*** ./~/.0.25.0@css-loader!./~/.4.0.2@sass-loader!./src/js/module/demo/demo.scss ***!
  \************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/.0.25.0@css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, "#page1Tpl {\n  background-color: blueviolet; }\n\n#testTpl div {\n  width: 100%;\n  height: 30px;\n  background-color: red; }\n", ""]);
	
	// exports


/***/ },
/* 17 */
/*!****************************************!*\
  !*** ./src/js/module/demo/guidance.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by yuting on 2016/11/17.
	 */
	module.exports = function (app) {
	    return {
	        /**
	         * 导入此模块所需要引用的 【service】
	         */
	
	        services: {
	            testSer: __webpack_require__(/*! ./service/testSer */ 18)(app)
	        },
	
	        /**
	         * 导入此模块所需要引用的 【controllers】
	         */
	
	        controllers: {
	            testCtrl: __webpack_require__(/*! ./controller/testCtrl */ 20)(app),
	            testCtrl2: __webpack_require__(/*! ./controller/testCtrl2 */ 21)(app),
	            pageCtrl1: __webpack_require__(/*! ./controller/pageCtrl1 */ 22)(app),
	            pageCtrl2: __webpack_require__(/*! ./controller/pageCtrl2 */ 23)(app)
	        },
	
	        /**
	         * 导入此模块所需要引用的 【templates】
	         */
	
	        templates: {
	            testTpl: __webpack_require__(/*! html!./template/testTpl.html */ 24),
	            testTpl2: __webpack_require__(/*! html!./template/testTpl2.html */ 25),
	            page1Tpl: __webpack_require__(/*! html!./template/page1.html */ 26),
	            page2Tpl: __webpack_require__(/*! html!./template/page2.html */ 27),
	            page3Tpl: __webpack_require__(/*! html!./template/page3.html */ 28)
	        }
	    }
	};

/***/ },
/* 18 */
/*!***********************************************!*\
  !*** ./src/js/module/demo/service/testSer.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by yuting on 2016/11/17.
	 */
	
	var Config = __webpack_require__(/*! ../../../util/config */ 19);
	
	module.exports = function(app){
	    app.service('testSer',['baseService',function(bs){
	        bs.setReqConfig({
	            url: Config.get(Config.business.query_welfare)
	        });
	
	        this.fetch = bs.fetch;
	    }]);
	};


/***/ },
/* 19 */
/*!*******************************!*\
  !*** ./src/js/util/config.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by yuting on 2016/11/17.
	 */
	
	var Config = {
	    business: {
	        "query_welfare": "api/business/queryWelfare",
	        "login": "api/business/queryWelfare"
	    },
	
	    host: '',
	    //微信前置
	    wechat_host : '',
	    get: function (url) {
	        if (this.host) {
	            return this.host.replace(/\/$/, '') + '/' + url.replace(/^\//, '');
	        }
	        return url;
	    }
	};
	
	
	if (false) {
	    Config.host = 'https://client.tycredit.com/';
	}
	
	if (false) {
	    Config.host = 'http://116.228.151.160:52021/';
	}
	
	if (false) {
	    Config.get = function (url) {
	        console.assert(!/^\//.test(url), "请使用相对URL");
	        return url + '.json';
	    };
	}
	
	module.exports = Config;

/***/ },
/* 20 */
/*!***************************************************!*\
  !*** ./src/js/module/demo/controller/testCtrl.js ***!
  \***************************************************/
/***/ function(module, exports) {

	/**
	 * Created by yuting on 2016/11/16.
	 */
	
	/**
	 * 控制器引入当前模块依赖,对当前模块进行单独的控制器定义
	 * @returns {string} 返回控制器名称
	 */
	
	module.exports = function(app){
	    var controllerName = 'testCtrl';
	
	    app.controller(controllerName,['$scope','$controller','$state','testSer',function($scope,$controller,$state,ts){
	        $controller('baseController', {$scope: $scope}); //继承baseController
	
	        $scope.setTitle('进行设置');
	
	        $scope.goTest2 = function(){
	            $state.go('test2.Page1',{ attrs : '我来自testCtrl'});
	        }
	    }]);
	
	    return controllerName;
	};


/***/ },
/* 21 */
/*!****************************************************!*\
  !*** ./src/js/module/demo/controller/testCtrl2.js ***!
  \****************************************************/
/***/ function(module, exports) {

	/**
	 * Created by yuting on 2016/11/16.
	 */
	
	/**
	 * 控制器引入当前模块依赖,对当前模块进行单独的控制器定义
	 * @returns {string} 返回控制器名称
	 */
	
	module.exports = function(app){
	    var controllerName = 'testCtrl2';
	
	    app.controller(controllerName,['$scope','testSer',function($scope,model){
	        var success = function(data){
	            $scope.item = data.result;
	        };
	        var fail = function(){
	            console.log('哥报错了');
	        };
	        model.fetch().then(success,fail);
	    }]);
	
	    return controllerName;
	};


/***/ },
/* 22 */
/*!****************************************************!*\
  !*** ./src/js/module/demo/controller/pageCtrl1.js ***!
  \****************************************************/
/***/ function(module, exports) {

	/**
	 * Created by yuting on 2016/11/16.
	 */
	
	/**
	 * 控制器引入当前模块依赖,对当前模块进行单独的控制器定义
	 * @returns {string} 返回控制器名称
	 */
	
	module.exports = function(app){
	    var controllerName = 'pageCtrl1';
	
	    app.controller(controllerName,['$scope','$stateParams','testSer',function($scope,$stateParams,ts){
	        debugger;
	        console.log('pageCtrl1',$stateParams.attrs);
	    }]);
	
	    return controllerName;
	};


/***/ },
/* 23 */
/*!****************************************************!*\
  !*** ./src/js/module/demo/controller/pageCtrl2.js ***!
  \****************************************************/
/***/ function(module, exports) {

	/**
	 * Created by yuting on 2016/11/16.
	 */
	
	/**
	 * 控制器引入当前模块依赖,对当前模块进行单独的控制器定义
	 * @returns {string} 返回控制器名称
	 */
	
	module.exports = function(app){
	    var controllerName = 'pageCtrl2';
	
	    app.controller(controllerName,['$scope','$stateParams',function($scope,$stateParams){
	        console.log('pageCtrl2',$stateParams.attrs);
	    }]);
	
	    return controllerName;
	};


/***/ },
/* 24 */
/*!*************************************************************************!*\
  !*** ./~/.0.4.4@html-loader!./src/js/module/demo/template/testTpl.html ***!
  \*************************************************************************/
/***/ function(module, exports) {

	module.exports = "<section id=\"testTpl\">\n    <div data-anijs=\"if: click , do: swing animated\">\n\n    </div>\n    <button ng-click=\"goTest2()\">带参数去路由test2</button>\n</section>";

/***/ },
/* 25 */
/*!**************************************************************************!*\
  !*** ./~/.0.4.4@html-loader!./src/js/module/demo/template/testTpl2.html ***!
  \**************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div>\n    <div>\n        <span style=\"width:100px\" ui-sref=\".Page1\"><a href=\"\">Page-1</a></span>\n        <span style=\"width:100px\" ui-sref=\".Page2({ attrs : item.hello })\"><a href=\"\">{{ item.hello }}</a></span>\n        <span style=\"width:100px\" ui-sref=\".Page3\"><a href=\"\">Page-3</a></span>\n    </div>\n    <div>\n        <div ui-view/>\n    </div>\n</div>";

/***/ },
/* 26 */
/*!***********************************************************************!*\
  !*** ./~/.0.4.4@html-loader!./src/js/module/demo/template/page1.html ***!
  \***********************************************************************/
/***/ function(module, exports) {

	module.exports = "<section id=\"page1Tpl\">\n    <div>\n        <h1>Page 1 content goes here...</h1>\n    </div>\n</section>";

/***/ },
/* 27 */
/*!***********************************************************************!*\
  !*** ./~/.0.4.4@html-loader!./src/js/module/demo/template/page2.html ***!
  \***********************************************************************/
/***/ function(module, exports) {

	module.exports = "<!-- Page2.html -->\n<div>\n    <div>\n        <h1>Page 2 content goes here...</h1>\n    </div>\n</div>";

/***/ },
/* 28 */
/*!***********************************************************************!*\
  !*** ./~/.0.4.4@html-loader!./src/js/module/demo/template/page3.html ***!
  \***********************************************************************/
/***/ function(module, exports) {

	module.exports = "<!-- Page3.html -->\n<div>\n    <div>\n        <h1>Page 3 content goes here...</h1>\n    </div>\n</div>";

/***/ },
/* 29 */
/*!************************************!*\
  !*** ./src/js/base/baseService.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 初始化一些base对象使用时从此地导入
	 * @param app
	 */
	var headers = __webpack_require__(/*! ../util/httpHeaderConfig */ 30);
	var _ = __webpack_require__(/*! underscore */ 31);
	
	var baseConfig = {
	    retry: true,
	    method:  false ? 'GET' : 'POST',
	    timeout: 30000,
	    responseType: "json",
	    withCredentials: false,
	    headers: headers
	};
	
	module.exports = function (app) {
	    app.service('baseService', ['$q', '$http', function ($q, $http) {
	
	        var reqConfig = {};
	
	        var _this = this;
	
	        _this.alert = function () {
	            console.log('baseService');
	        };
	
	        _this.setReqConfig = function (configObj) {
	            reqConfig = _.extend({}, baseConfig, configObj);
	        };
	
	        _this.run = function (params) {
	            var defer = $q.defer();
	            var _params = params;
	
	            var httpConfig = {
	                method: reqConfig.method, //POST
	                withCredentials: reqConfig.withCredentials, //false
	                headers: reqConfig.headers,
	                url: reqConfig.url, //'/demo/queryComponents',
	                timeout: 30000,
	                responseType: "json"
	            };
	
	            //get与post赋值
	            if (httpConfig.method.toUpperCase() != "GET" && httpConfig.method.toUpperCase() != "DELETE") {
	                httpConfig.data = _params;
	            } else {
	                httpConfig.params = _params;
	            }
	            //参考网址http://www.cnblogs.com/ys-ys/p/4984639.html?utm_source=tuicool&utm_medium=referral
	            $http(httpConfig)
	                .success(function (data, status, headers, config) {
	                    console.log('[success ' + reqConfig.url + ' result]');
	                    console.log(JSON.stringify(data));
	                    defer.resolve(data);
	                })
	                .error(function (data, status, headers, config) {
	                    defer.reject(data);
	                });
	
	            return defer.promise; //返回承诺，返回获取数据的API
	        };
	
	        _this.fetch = function (params) {
	            var delay = $q.defer();
	            var promise = _this.run(params);
	            promise.then(function (data) {
	                delay.resolve(data);
	            }, function (data) {
	                delay.reject(data);
	            });
	            return delay.promise;
	        }
	    }]);
	};


/***/ },
/* 30 */
/*!*****************************************!*\
  !*** ./src/js/util/httpHeaderConfig.js ***!
  \*****************************************/
/***/ function(module, exports) {

	/**
	 * Created by yuting on 2016/11/17.
	 * 放置http请求头信息
	 */
	
	var headers = {};
	headers['Content-Type'] = 'application/json;charset=utf-8';
	headers['XChannel'] = 'weixin';
	
	module.exports = headers;

/***/ },
/* 31 */
/*!*******************************************!*\
  !*** ./~/.1.8.3@underscore/underscore.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function() {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };
	
	  _.noop = function(){};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };
	
	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 32 */
/*!***************************************!*\
  !*** ./src/js/base/baseController.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 初始化一些base对象使用时从此地导入
	 * @param app
	 */
	var anijs = __webpack_require__(/*! anijs */ 33);
	
	module.exports = function(app){
	    app.controller('baseController',['$scope',function($scope){
	
	        $scope.setTitle = function(title){
	            console.log(title);
	        };
	
	
	        $scope.$watch('$viewContentLoaded', function() {
	            anijs.run();
	        });
	
	        console.log('自动埋点');
	    }]);
	};


/***/ },
/* 33 */
/*!*****************************!*\
  !*** ./src/js/lib/anijs.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	AniJS - http://anijs.github.io
	Licensed under the MIT license
	
	Copyright (c) 2014 Dariel Noel <darielnoel@gmail.com>
	
	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	*/
	
	(function(root, factory) {
	    "use strict";
	    if (typeof module == "object" && typeof module.exports == "object") {
	        module.exports = root.document ?
	            factory(root, true) :
	            function(w) {
	                if (!w.document) {
	                    throw new Error("AniJS-RWWD");
	                }
	                return factory(w);
	        };
	    } else {
	        factory(root);
	    }
	
	})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
	
	
	    /**
	     * AniJS is library for write declarative animations in your static html documents
	     * @class AniJSit
	     * @constructor init
	     * @author @dariel_noel
	     */
	    var AniJS = (function(AniJS) {
	
	        //Shorthands
	        var ANIJS_DATATAG_NAME = 'data-anijs',
	            DEFAULT = 'default',
	            BODY = 'body',
	            PARAMS_SEPARATOR = '|',
	            MULTIPLE_CLASS_SEPARATOR = '$',
	            EVENT_RESERVED_WORD = 'if',
	            EVENT_TARGET_RESERVED_WORD = 'on',
	            BEHAVIOR_RESERVED_WORD = ['do', 'after', 'before', 'to'],
	            BEHAVIOR_TARGET_RESERVED_WORD = 'to',
	            REGEX_BEGIN = '(\\s+|^)',
	            REGEX_END = '(\\s+|$)',
	            ANIMATION_END = 'animationend',
	            TRANSITION_END = 'transitionend',
	            TARGET = 'target';
	
	        /////////////////////////////////////////////////////////
	        // Public API
	        /////////////////////////////////////////////////////////
	
	        AniJS = {
	
	            rootDOMTravelScope: {},
	
	            notifierCollection: {},
	
	            /**
	             * Initializer Function
	             * @method init
	             * @return
	             */
	            init: function() {
	
	                //ATTRS inicialization
	                selfish._helperCollection = {};
	
	                var defaultHelper = selfish._createDefaultHelper();
	
	                //Registering an empty helper
	                AniJS.registerHelper(DEFAULT, defaultHelper);
	
	                //Default Helper Index
	                selfish._helperDefaultIndex = DEFAULT;
	
	                AniJS.rootDOMTravelScope = document;
	
	                //Initialize the Parser Object
	                AniJS.Parser = selfish.Parser;
	
	                //AnimationEnd Correct Prefix Setup
	                selfish._animationEndEvent = selfish._animationEndPrefix();
	
	                //Add this class names when anim
	                selfish._classNamesWhenAnim = '';
	            },
	
	            /**
	             * You can use these to change the scope to run AniJS
	             * @method setDOMRootTravelScope
	             * @param {} selector
	             * @return
	             */
	            setDOMRootTravelScope: function(selector) {
	                var rootDOMTravelScope,
	                    domDocument = document;
	                try {
	                    if (selector === 'document') {
	                        rootDOMTravelScope = domDocument;
	                    } else {
	                        rootDOMTravelScope = domDocument.querySelector(selector);
	                        if (!rootDOMTravelScope) {
	                            rootDOMTravelScope = domDocument;
	                        }
	                    }
	
	                } catch (e) {
	                    rootDOMTravelScope = domDocument;
	                }
	                AniJS.rootDOMTravelScope = rootDOMTravelScope;
	            },
	
	            /**
	             * Parse Declarations and setup Anim in a founded elements
	             * @method run
	             * @return
	             */
	            run: function() {
	                var aniJSNodeCollection = [],
	                    aniJSParsedSentenceCollection = {};
	
	                //Clear all node listener
	                AniJS.purgeAll();
	
	                AniJS.notifierCollection = {};
	
	                aniJSNodeCollection = selfish._findAniJSNodeCollection(AniJS.rootDOMTravelScope);
	
	                var size = aniJSNodeCollection.length,
	                    i = 0,
	                    item;
	
	                for (i; i < size; i++) {
	                    item = aniJSNodeCollection[i];
	
	                    //IMPROVE: The datatag name migth come from configuration
	                    aniJSParsedSentenceCollection = selfish._getParsedAniJSSentenceCollection(item.getAttribute(ANIJS_DATATAG_NAME));
	
	                    //Le seteo su animacion
	                    selfish._setupElementAnim(item, aniJSParsedSentenceCollection);
	                }
	
	                //We can use this for supply the window load and DomContentLoaded in some context
	                var aniJSEventsNotifier = AniJS.getNotifier('AniJSNotifier');
	                if(aniJSEventsNotifier){
	                    aniJSEventsNotifier.dispatchEvent('onRunFinished');
	                }
	            },
	
	            /**
	             * Create an animation from a aniJSParsedSentenceCollection
	             * @method createAnimation
	             * @param {} aniJSParsedSentenceCollection
	             * @param {} element
	             * @return
	             */
	            createAnimation: function(aniJSParsedSentenceCollection, element) {
	                var nodeElement = element || '';
	
	                //BEAUTIFY: The params order migth be the same
	                selfish._setupElementAnim(nodeElement, aniJSParsedSentenceCollection);
	            },
	
	            /**
	             * Return a Helper by ID, you can use this to attach callback to the Helper
	             * @method getHelper
	             * @param {} helperID
	             * @return LogicalExpression
	             */
	            getHelper: function(helperID) {
	                var helperCollection = selfish._helperCollection;
	                return helperCollection[helperID] || helperCollection[DEFAULT];
	            },
	
	            /**
	             * A helper it's a callback function container
	             * using this function you can register your custom Helper
	             * @method registerHelper
	             * @param {} helperName
	             * @param {} helperInstance
	             * @return
	             */
	            registerHelper: function(helperName, helperInstance) {
	                selfish._helperCollection[helperName] = helperInstance;
	            },
	
	            /**
	             * Purge a NodeList By Selector
	             * @method purge
	             * @param {} selector
	             * @return
	             */
	            purge: function(selector) {
	                //TODO: Search a regular expression for test a valid CSS selector
	                if (selector && selector !== '' && selector !== ' ') {
	                    var purgeNodeCollection = document.querySelectorAll(selector),
	                        size = purgeNodeCollection.length,
	                        i = 0;
	
	                    for (i; i < size; i++) {
	                        AniJS.EventSystem.purgeEventTarget(purgeNodeCollection[i]);
	                    }
	                }
	            },
	
	            /**
	             * Purge all register elements handle
	             * you can use this when you run AniJS again
	             * @method purgeAll
	             * @return
	             */
	            purgeAll: function() {
	                AniJS.EventSystem.purgeAll();
	            },
	
	            /**
	             * Remove all listener from an element
	             * @method purgeEventTarget
	             * @param {} element
	             * @return
	             */
	            purgeEventTarget: function(element) {
	                AniJS.EventSystem.purgeEventTarget(element);
	            },
	
	            /**
	             * Add default class names while Anim
	             * @method setClassNamesWhenAnim
	             * @param {} defaultClasses
	             * @return
	             */
	            setClassNamesWhenAnim: function(defaultClasses) {
	                selfish._classNamesWhenAnim = ' ' + defaultClasses;
	            },
	
	            /**
	             * Create an EventTarget
	             * @method createNotifier
	             * @return EventTarget
	             */
	            createNotifier: function() {
	                return AniJS.EventSystem.createEventTarget();
	            },
	
	            /**
	             * Put an event Notifier in the notifierCollection
	             * @method registerNotifier
	             * @param {} notifier
	             * @return Literal
	             */
	            registerNotifier: function(notifier) {
	                var notifierCollection = AniJS.notifierCollection;
	
	                //TODO: Optimize lookups here
	                if (notifier.id && notifier.value && AniJS.EventSystem.isEventTarget(notifier.value)) {
	                    notifierCollection[notifier.id] = notifier.value;
	                    return 1;
	                }
	
	                return '';
	            },
	
	            /**
	             * Return an notifier instance
	             * @method getNotifier
	             * @param {} notifierID
	             * @return notifier
	             */
	            getNotifier: function(notifierID) {
	                return AniJS.notifierCollection[notifierID];
	            }
	
	        };
	
	        /////////////////////////////////////////////////////////
	        // Private Methods an Vars
	        /////////////////////////////////////////////////////////
	
	        var selfish = {
	
	        };
	
	        /**
	         * Description
	         * @method _createDefaultHelper
	         * @return defaultHelper
	         */
	        selfish._createDefaultHelper = function() {
	            //TODO: Why default helper here, migth be directly in the public API
	            var defaultHelper = {
	                /**
	                 * Remove the animation class added when animation is created
	                 * @method removeAnim
	                 * @param {} e
	                 * @param {} animationContext
	                 * @return
	                 */
	                removeAnim: function(e, animationContext) {
	                    if(e.target && e.type){
	                      animationContext.nodeHelper.removeClass(e.target, animationContext.behavior);
	                    }
	                },
	                /**
	                 * Holds the animation class added when animation is created
	                 * @method holdAnimClass
	                 * @param {} e
	                 * @param {} animationContext
	                 * @return
	                 */
	                holdAnimClass: function(e, animationContext) {
	                },
	
	                fireOnce: function(e, animationContext) {
	                    animationContext.eventSystem.removeEventListenerHelper(animationContext.eventTarget, animationContext.event.type, animationContext.listener);
	                },
	
	                /**
	                 * Fire custom event
	                 *
	                 * Examples:
	                 *
	                 *  Fire dummyEvent event of customNotifier
	                 *
	                 *  if: click, do: $addClass fadeIn animated, to: #container, after: emit customNotifier.dummyEvent
	                 *  if: dummyEvent, on: $customNotifier, do: $addClass hidden,  to: $children #container | div
	                 *
	                 *
	                 * @author Yolier Galan Tasse <gallegogt@gmail.com>
	                 * @since  2014-09-20
	                 * @param  {object}   e          The event handler
	                 * @param  {object}   ctx        AniJS Animation Context Object
	                 * @param  {[string]} params     [description]
	                 */
	                emit: function(e, ctx, params) {
	                    var cevent = params[0] || null,
	                        notifier = "";
	                    if(cevent !== null) {
	                        cevent = cevent.split('.');
	                        if(cevent.length > 1) {
	                            notifier = cevent[0];
	                            cevent = cevent[1];
	                        } else {
	                            notifier = "";
	                            cevent = cevent[0];
	                        }
	                        var customNotifier = AniJS.getNotifier(notifier) || null;
	                        if(customNotifier !== null)
	                            customNotifier.dispatchEvent(cevent);
	                    }
	                    //Run the animation
	                    if(!ctx.hasRunned){
	                        ctx.run();
	                    }
	                }
	            };
	
	            return defaultHelper;
	        };
	
	        /**
	         * Create a Parser Instance
	         * @method _createParser
	         * @return Parser
	         */
	        selfish._createParser = function() {
	            //TODO: The Parser could be an static class
	            return new Parser();
	        };
	
	        /**
	         * Setup the animation of the some element
	         * @method _setupElementAnim
	         * @param {} element
	         * @param {} aniJSParsedSentenceCollection
	         * @return
	         */
	        selfish._setupElementAnim = function(element, aniJSParsedSentenceCollection) {
	            var size = aniJSParsedSentenceCollection.length,
	                i = 0,
	                item,
	                before,
	                after,
	                behavior;
	
	            for (i; i < size; i++) {
	                item = aniJSParsedSentenceCollection[i];
	                after = item.after;
	                before = item.before;
	                behavior = item.behavior;
	
	                if(after){
	                    item.after = selfish.Parser.parseDoDefinition(after);
	                }
	                if(before){
	                    item.before = selfish.Parser.parseDoDefinition(before);
	                }
	                if(behavior){
	                    item.behavior = selfish.Parser.parseDoDefinition(behavior);
	                }
	                selfish._setupElementSentenceAnim(element, item);
	            }
	        };
	
	        /**
	         * Setup the element animation from a AniJS Sentence
	         * @method _setupElementSentenceAnim
	         * @param {} element
	         * @param {} aniJSParsedSentence
	         * @return
	         */
	        selfish._setupElementSentenceAnim = function(element, aniJSParsedSentence) {
	            //TODO: If the user use animationend or transitionend names to custom events the eventdispach will be not executed
	            var event = selfish._eventHelper(aniJSParsedSentence),
	                eventTargetList = selfish._eventTargetHelper(element, aniJSParsedSentence),
	                afterFunctionName;
	
	            if(aniJSParsedSentence.after && selfish.Util.beArray(aniJSParsedSentence.after)){
	                afterFunctionName =  aniJSParsedSentence.after[0];
	            }
	
	            //Es obligatorio definir de eventTarget ATTR
	            if (event !== '') {
	                var size = eventTargetList.length,
	                    i = 0,
	                    eventTargetItem;
	                for (i; i < size; i++) {
	                    eventTargetItem = eventTargetList[i];
	                    if (AniJS.EventSystem.isEventTarget(eventTargetItem)) {
	                        var listener = function(event) {
	
	                            //Si cambia algun parametro dinamicamente entonces hay que enterarse
	                            var behaviorTargetList = selfish._behaviorTargetHelper(element, aniJSParsedSentence, event),
	                                behavior = selfish._behaviorHelper(aniJSParsedSentence),
	                                before = selfish._beforeHelper(element, aniJSParsedSentence),
	                                after = selfish._afterHelper(element, aniJSParsedSentence);
	                            if (selfish._classNamesWhenAnim !== '') {
	                                if(!selfish.Util.beArray(behavior))
	                                    behavior += selfish._classNamesWhenAnim;
	                            }
	                            //Creo un nuevo animation context
	                            var animationContextConfig = {
	                                behaviorTargetList: behaviorTargetList,
	                                nodeHelper: selfish.NodeHelper,
	                                animationEndEvent: selfish._animationEndEvent,
	                                behavior: behavior,
	                                after: after,
	                                eventSystem: AniJS.EventSystem,
	                                eventTarget: event.currentTarget,
	                                afterFunctionName: afterFunctionName,
	                                dataAniJSOwner: element,
	                                listener: listener,
	                                event: event,
	                                before: before
	                                //TODO: eventSystem should be called directly
	                            },
	
	                            animationContextInstance = new AniJS.AnimationContext(animationContextConfig);
	
	                            animationContextInstance.runAll(animationContextConfig);
	                        };
	
	                        //TODO: Improve lookup here AniJS.EventSystem
	                        AniJS.EventSystem.addEventListenerHelper(eventTargetItem, event, listener, false);
	
	                        //Register event to feature handle
	                        AniJS.EventSystem.registerEventHandle(eventTargetItem, event, listener);
	                    }
	                }
	            }
	        };
	
	        /**
	         * Helper to setup the Event that trigger the animation from declaration
	         * https://developer.mozilla.org/en-US/docs/Web/Reference/Events
	         * http://www.w3schools.com/tags/ref_eventattributes.asp
	         * @method _eventHelper
	         * @param {} element
	         * @param {} aniJSParsedSentence
	         * @return event
	         */
	        selfish._eventHelper = function(aniJSParsedSentence) {
	            var defaultValue = '',
	                event = aniJSParsedSentence.event || defaultValue;
	
	            //TODO: Improve to reduce this ugly logic here
	            if (event === ANIMATION_END) {
	                event = selfish._animationEndPrefix();
	            } else if (event === TRANSITION_END) {
	                event = selfish._transitionEndPrefix();
	            }
	
	            return event;
	        };
	
	        /**
	         * Helper to setup the Place from listen the trigger event of the animation
	         * If is not specified one place, se asume que es himself
	         * Take in account that where it's just a selector
	         * @method _eventTargetHelper
	         * @param {} element
	         * @param {} aniJSParsedSentence
	         * @return eventTargetList
	         */
	        selfish._eventTargetHelper = function(element, aniJSParsedSentence) {
	            var defaultValue = element,
	                eventTargetList = [defaultValue],
	                rootDOMTravelScope = AniJS.rootDOMTravelScope,
	                notifierList;
	
	            //TODO: We could add other non direct DOM Objects
	            if (aniJSParsedSentence.eventTarget) {
	
	                notifierList = selfish._notifierHelper(aniJSParsedSentence.eventTarget);
	
	                if (notifierList.length > 0) {
	                    eventTargetList = notifierList;
	                } else if (aniJSParsedSentence.eventTarget === 'document') {
	                    eventTargetList = [document];
	                } else if (aniJSParsedSentence.eventTarget === 'window') {
	                    eventTargetList = [window];
	                } else if (aniJSParsedSentence.eventTarget.split) {
	                    try {
	                        eventTargetList = rootDOMTravelScope.querySelectorAll(aniJSParsedSentence.eventTarget);
	                    } catch (e) {
	                        console.log('Ugly Selector Here');
	                        eventTargetList = [];
	                    }
	                }
	            }
	            //It's not a nodeList any more
	            return eventTargetList;
	        };
	
	        /**
	         * Helper to setup the Node can be animated
	         * @method _behaviorTargetHelper
	         * @param {} element
	         * @param {} aniJSParsedSentence
	         * @return behaviorTargetNodeList
	         */
	        selfish._behaviorTargetHelper = function(element, aniJSParsedSentence, event) {
	            var defaultValue = element,
	                behaviorTargetNodeList = [defaultValue],
	                rootDOMTravelScope = AniJS.rootDOMTravelScope,
	                behaviorTarget = aniJSParsedSentence.behaviorTarget;
	
	            if (behaviorTarget) {
	                if(!selfish.Util.beArray(behaviorTarget)){
	                    if(behaviorTarget === TARGET && event.currentTarget){
	                        behaviorTargetNodeList = [event.currentTarget];
	                    } else{
	                        //Expression regular remplazar caracteres $ por comas
	                        //TODO: Estudiar si este caracter no esta agarrado
	                        behaviorTarget = behaviorTarget.split(MULTIPLE_CLASS_SEPARATOR).join(',');
	                        try {
	                            behaviorTargetNodeList = rootDOMTravelScope.querySelectorAll(behaviorTarget);
	                        } catch (e) {
	                            behaviorTargetNodeList = [];
	                        }
	                    }
	                } else{
	                    var behaviorObject = this._actionHelper(element, aniJSParsedSentence, behaviorTarget);
	                    if(behaviorObject && selfish.Util.isFunction(behaviorObject[0])){
	                        behaviorTargetNodeList = behaviorObject[0]
	                                                    (event,{dataAniJSOwner:element},
	                                                    selfish._paramsHelper(behaviorObject));
	                    }
	                }
	            }
	            return behaviorTargetNodeList;
	        };
	
	        /**
	         * Helper to setup the Animation type
	         * @method _behaviorHelper
	         * @param {} element
	         * @param {} aniJSParsedSentence
	         * @return defaultValue
	         */
	        selfish._behaviorHelper = function(aniJSParsedSentence) {
	            return this._actionHelper({}, aniJSParsedSentence, aniJSParsedSentence.behavior);
	        };
	
	        /**
	         * Helper to setup the after callback function
	         * @method _afterHelper
	         * @param {} element
	         * @param {} aniJSParsedSentence
	         * @return defaultValue
	         */
	        selfish._afterHelper = function(element, aniJSParsedSentence) {
	            var defaultValue =  aniJSParsedSentence.after;
	            // return defaultValue;
	            if(!selfish.Util.beArray(defaultValue))
	                return selfish._callbackHelper(element, aniJSParsedSentence, defaultValue);
	            return this._actionHelper(element, aniJSParsedSentence, defaultValue);
	        };
	
	        /**
	         * Helper to setup the after callback function
	         * @method _afterHelper
	         * @param {} element
	         * @param {} aniJSParsedSentence
	         * @return defaultValue
	         */
	        selfish._beforeHelper = function(element, aniJSParsedSentence) {
	            var defaultValue =  aniJSParsedSentence.before;
	            if(!selfish.Util.beArray(defaultValue))
	                return selfish._callbackHelper(element, aniJSParsedSentence, defaultValue);
	            return this._actionHelper(element, aniJSParsedSentence, defaultValue);
	        };
	        /**
	         * The executed actions helper
	         * @author Dariel Noel <darielnoel@gmail.com>
	         * @since  2014-09-10
	         * @param  {[type]}   element             [description]
	         * @param  {[type]}   aniJSParsedSentence [description]
	         * @param  {[type]}   action              [description]
	         * @return {[type]}                       [description]
	         */
	        selfish._actionHelper = function(element, aniJSParsedSentence, action) {
	            var defaultValue = action || '',
	                executeFunction;
	            if(selfish.Util.beArray(defaultValue)) {
	                executeFunction = selfish._callbackHelper(element, aniJSParsedSentence, defaultValue[0]);
	                if(executeFunction) {
	                    defaultValue[0] = executeFunction;
	                } else {
	                    defaultValue = defaultValue.join(' ');
	                }
	
	            }
	            return defaultValue;
	        };
	
	        /**
	         * Helper for before and after helpers refactoring
	         * @method _callbackHelper
	         * @param {} element
	         * @param {} aniJSParsedSentence
	         * @param {} callbackFunction
	         * @return defaultValue
	         */
	        selfish._callbackHelper = function(element, aniJSParsedSentence, callbackFunction) {
	            var defaultValue = callbackFunction || '',
	                helper = selfish._helperHelper(aniJSParsedSentence);
	
	            if (defaultValue) {
	                if (!selfish.Util.isFunction(defaultValue)) {
	                    var helperCollection = selfish._helperCollection,
	                        helperInstance = helperCollection[helper];
	
	                    if (helperInstance && selfish.Util.isFunction(helperInstance[defaultValue])) {
	                        defaultValue = helperInstance[defaultValue];
	                    } else {
	                        defaultValue = false;
	                    }
	                }
	            }
	
	            return defaultValue;
	        };
	
	        /**
	         * Helper to setup the helper of the animation
	         * @method _helperHelper
	         * @param {} element
	         * @param {} aniJSParsedSentence
	         * @return defaultValue
	         */
	        selfish._helperHelper = function(aniJSParsedSentence) {
	            var defaultValue = aniJSParsedSentence.helper || selfish._helperDefaultIndex;
	            return defaultValue;
	        };
	
	        /**
	         * Helper to setup the notifier
	         * @method _notifierHelper
	         * @param {} eventTargetDefinition
	         * @return defaultValue
	         */
	        selfish._notifierHelper = function(eventTargetDefinition) {
	            var defaultValue = [],
	                notifierCollection = AniJS.notifierCollection;
	
	            if (eventTargetDefinition) {
	                //{id: notifierID, value:notifierObject}
	                if (eventTargetDefinition.id && AniJS.EventSystem.isEventTarget(eventTargetDefinition.value)) {
	                    //TODO: In the near future could be an object list
	                    defaultValue.push(eventTargetDefinition.value);
	
	                    AniJS.registerNotifier(eventTargetDefinition);
	                } else if (eventTargetDefinition.split) {
	                    //Picar por signo de peso y obtener la lista de id de events Notifiers
	                    notifierIDList = eventTargetDefinition.split('$');
	                    var size = notifierIDList.length,
	                        i = 1,
	                        notifierID;
	
	                    for (i; i < size; i++) {
	                        notifierID = notifierIDList[i];
	                        if (notifierID && notifierID !== ' ') {
	                            //limpiarle los espacios alante y atras (trim)
	                            notifierID = notifierID.trim();
	
	                            //TODO: Big Refactoring here
	                            var value = AniJS.getNotifier(notifierID);
	                            if (!value) {
	                                value = AniJS.EventSystem.createEventTarget();
	                                AniJS.registerNotifier({
	                                    id: notifierID,
	                                    value: value
	                                });
	                            }
	                            defaultValue.push(value);
	                        }
	                    }
	                }
	            }
	
	            return defaultValue;
	        };
	
	        selfish._paramsHelper = function(paramsArray){
	            var arr = [],
	                i = paramsArray.length;
	            while(i-- > 1) arr[i - 1] = paramsArray[i];
	            return arr;
	        };
	
	        /**
	         * Parse an String Declaration
	         * @method _getParsedAniJSSentenceCollection
	         * @param {} stringDeclaration
	         * @return CallExpression
	         */
	        selfish._getParsedAniJSSentenceCollection = function(stringDeclaration) {
	            return selfish.Parser.parse(stringDeclaration);
	        };
	
	        /**
	         * Select all DOM nodes that have a AniJS declaration
	         * @method _findAniJSNodeCollection
	         * @param {} rootDOMTravelScope
	         * @return CallExpression
	         */
	        selfish._findAniJSNodeCollection = function(rootDOMTravelScope) {
	            //IMPROVE: Might a configuration option
	            var aniJSDataTagName = '[' + ANIJS_DATATAG_NAME + ']';
	            return rootDOMTravelScope.querySelectorAll(aniJSDataTagName);
	        };
	
	        /**
	         * Return the correct AnimationEnd Prefix according to the current browser
	         * @method _animationEndPrefix
	         * @return
	         */
	        selfish._animationEndPrefix = function() {
	            var endPrefixBrowserDetectionIndex = selfish._endPrefixBrowserDetectionIndex(),
	                animationEndBrowserPrefix = [ANIMATION_END, 'oAnimationEnd', ANIMATION_END, 'webkitAnimationEnd'];
	
	            return animationEndBrowserPrefix[endPrefixBrowserDetectionIndex];
	        };
	
	        /**
	         * Return the correct TransitionEnd Prefix according to the current browser
	         * @method _transitionEndPrefix
	         * @return
	         */
	        selfish._transitionEndPrefix = function() {
	            var endPrefixBrowserDetectionIndex = selfish._endPrefixBrowserDetectionIndex(),
	                transitionEndBrowserPrefix = [TRANSITION_END, 'oTransitionEnd', TRANSITION_END, 'webkitTransitionEnd'];
	
	            return transitionEndBrowserPrefix[endPrefixBrowserDetectionIndex];
	        };
	
	        /**
	         * Return the correct Transition and  Animation End Prefix helper according to the current browser
	         * @method _transitionEndPrefix
	         * @return index of the prefix acording to the browser
	         */
	        selfish._endPrefixBrowserDetectionIndex = function() {
	            //TODO: Delete de element after create this
	            var el = document.createElement('fe'),
	                ANIM = 'Animation',
	                animationBrowserDetection = ['animation', 'O'+ANIM, 'Moz'+ANIM, 'webkit'+ANIM];
	
	            for (var i = 0; i < animationBrowserDetection.length; i++) {
	                if (el.style[animationBrowserDetection[i]] !== undefined) {
	                    return i;
	                }
	            }
	        };
	
	        /////////////////////////////////////////////////////////
	        // Private SubModules
	        /////////////////////////////////////////////////////////
	
	        /**
	         * Encapsulate the animation Context
	         * @class animationContext
	         * @author @dariel_noel
	         */
	        AniJS.AnimationContext = (function(config) {
	
	            //TODO: Module aproach here
	            var animationContextInstance = this;
	
	            /**
	             * Class constructor
	             * @method init
	             * @param {} config
	             * @return
	             */
	            animationContextInstance.init = function(config) {
	
	                //TODO: Valorar la idea de usar prototype por performance reasons
	                //ATTRS
	                animationContextInstance.behaviorTargetList = config.behaviorTargetList || [];
	
	                animationContextInstance.nodeHelper = config.nodeHelper;
	
	                animationContextInstance.animationEndEvent = config.animationEndEvent;
	
	                animationContextInstance.behavior = config.behavior;
	
	                animationContextInstance.after = config.after;
	
	                animationContextInstance.eventSystem = config.eventSystem;
	
	                animationContextInstance.eventTarget = config.eventTarget;
	
	                animationContextInstance.afterFunctionName = config.afterFunctionName;
	
	                animationContextInstance.dataAniJSOwner = config.dataAniJSOwner;
	
	                animationContextInstance.listener = config.listener;
	
	                animationContextInstance.event = config.event;
	                animationContextInstance.before = config.before;
	            };
	
	            /**
	             * Custom AniJS animation behavior
	             * @author Dariel Noel <darielnoel@gmail.com>
	             * @since  2014-09-03
	             * @param  {[type]}   target   [description]
	             * @param  {[type]}   behavior [description]
	             * @return {[type]}            [description]
	             */
	            animationContextInstance.doDefaultAction = function(target, behavior){
	                var instance = animationContextInstance,
	                    nodeHelper = instance.nodeHelper,
	                    animationEndEvent = instance.animationEndEvent,
	                    after = instance.after,
	                    afterFunctionName = instance.afterFunctionName,
	                    lastBehavior;
	
	                //create event
	                instance.eventSystem.addEventListenerHelper(target, animationEndEvent, function(e) {
	                    e.stopPropagation();
	                    //remove event
	                    instance.eventSystem.removeEventListenerHelper(e.target, e.type, arguments.callee);
	                    if(after){
	                        if(selfish.Util.isFunction(after)){
	                            after(e, animationContextInstance);
	                        } else if(selfish.Util.beArray(after)) {
	                            after[0](e, animationContextInstance, selfish._paramsHelper(after));
	                        }
	                    }
	                });
	                // Backguard compatibility
	                if (afterFunctionName !== "holdAnimClass" && afterFunctionName !== "$holdAnimClass") {
	                    lastBehavior = target._ajLastBehavior;
	                    if(lastBehavior){
	                        // removing the animation by default if there are not hold animClass
	                        nodeHelper.removeClass(target, lastBehavior);
	                    }
	                    target._ajLastBehavior = behavior;
	                }
	                // Trigger a reflow in between removing and adding the class name.
	                // http://css-tricks.com/restart-css-animation/
	                target.offsetWidth = target.offsetWidth;
	                nodeHelper.addClass(target, behavior);
	            };
	
	            /**
	             * Allows to use a custom helpers function via do definitions
	             * @author Dariel Noel <darielnoel@gmail.com>
	             * @since  2014-09-03
	             * @param  {[type]}   target   [description]
	             * @param  {[type]}   behavior [description]
	             * @return {[type]}            [description]
	             */
	            animationContextInstance.doFunctionAction = function(target, behavior){
	                var instance = animationContextInstance,
	                    after = instance.after,
	                    e = {target:target};
	                behavior[0](e, animationContextInstance, selfish._paramsHelper(behavior));
	                if(selfish.Util.isFunction(after)){
	                    after(e, animationContextInstance);
	                } else {
	                    if(selfish.Util.beArray(after)) {
	                        after[0](e, animationContextInstance, selfish._paramsHelper(after));
	                    }
	                }
	            };
	
	            /**
	             * Create an animation context instance for every behavior target list
	             * and run it
	             * @method run
	             * @return
	             */
	            animationContextInstance.runAll = function() {
	                var instance = animationContextInstance,
	                    behaviorTargetList = instance.behaviorTargetList,
	                    behaviorTargetListSize = behaviorTargetList.length,
	                    behavior = instance.behavior,
	                    j = 0,
	                    before = instance.before,
	                    simpleAnimationContextInstance,
	                    event = animationContextInstance.event,
	                    animationContextConfig;
	
	                for (j; j < behaviorTargetListSize; j++) {
	
	                    animationContextConfig = {
	                        behaviorTargetList: [behaviorTargetList[j]],
	                        nodeHelper: animationContextInstance.nodeHelper,
	                        animationEndEvent: animationContextInstance.animationEndEvent,
	                        behavior: animationContextInstance.behavior,
	                        after: animationContextInstance.after,
	                        eventSystem: animationContextInstance.eventSystem,
	                        eventTarget: animationContextInstance.eventTarget,
	                        afterFunctionName: animationContextInstance.afterFunctionName,
	                        dataAniJSOwner: animationContextInstance.dataAniJSOwner,
	                        listener: animationContextInstance.listener,
	                        event: event
	                        //TODO: eventSystem should be called directly
	                    };
	
	                    simpleAnimationContextInstance = new AniJS.AnimationContext(animationContextConfig);
	                    if (before) {
	                        if(selfish.Util.isFunction(before)) {
	                            before(event, simpleAnimationContextInstance);
	                        } else if(selfish.Util.beArray(before)) {
	                            before[0](event, simpleAnimationContextInstance, selfish._paramsHelper(before));
	                        }
	                    } else {
	                        simpleAnimationContextInstance.run();
	                    }
	                }
	            };
	            /**
	             * Execute an animation context instance
	             * @method run
	             * @return
	             */
	            animationContextInstance.run = function() {
	                var instance = animationContextInstance,
	                    behavior = instance.behavior,
	                    behaviorTargetListItem = instance.behaviorTargetList[0];
	
	                animationContextInstance.hasRunned = 1;
	                if(selfish.Util.beArray(behavior)){
	                    instance
	                        .doFunctionAction(behaviorTargetListItem, behavior);
	                } else{
	                    instance
	                        .doDefaultAction(behaviorTargetListItem, behavior);
	                }
	            };
	
	            animationContextInstance.init(config);
	        });
	
	        /**
	         * Encapsulate the AnimJS sintax parser
	         * @class Parser
	         * @author @dariel_noel
	         */
	        selfish.Parser = {
	
	            /**
	             * Parse a aniJSDeclaration
	             * @method parse
	             * @param {} aniJSDeclaration
	             * @return CallExpression
	             */
	            parse: function(aniJSDeclaration) {
	                return this.parseDeclaration(aniJSDeclaration);
	            },
	
	            /**
	             * Declaration parse
	             *  Sintax: Declaration -> Sentence; | *
	             *  Example: SentenceA; SentenceB
	             * @method _parseDeclaration
	             * @param {} declaration
	             * @return parsedDeclaration
	             */
	            parseDeclaration: function(declaration) {
	                var parsedDeclaration = [],
	                    sentenceCollection,
	                    parsedSentence;
	
	                sentenceCollection = declaration.split(';');
	
	                var size = sentenceCollection.length,
	                    i = 0;
	
	                for (i; i < size; i++) {
	                    parsedSentence = this.parseSentence(sentenceCollection[i]);
	                    parsedDeclaration.push(parsedSentence);
	                }
	
	                return parsedDeclaration;
	            },
	
	            /**
	             * Sentence Parse
	             *  Sintax: Sentence -> if, on, do, to, after, helper
	             *  Example: "if: DOMContentLoaded, on: document, do:flip, to: .animatecss, after: testcallback"
	             *  note: The order it's not important
	             * @method _parseSentence
	             * @param {} sentence
	             * @return parsedSentence
	             */
	            parseSentence: function(sentence) {
	                var parsedSentence = {},
	                    definitionCollection,
	                    parsedDefinition;
	
	                definitionCollection = sentence.split(',');
	
	                var size = definitionCollection.length,
	                    i = 0;
	
	                for (i; i < size; i++) {
	                    parsedDefinition = this.parseDefinition(definitionCollection[i]);
	                    parsedSentence[parsedDefinition.key] = parsedDefinition.value;
	                }
	                return parsedSentence;
	            },
	
	            /**
	             * Parse definition
	             *  Sintax: Definition -> if | on | do | to | after | helper
	             *  Example: "if: DOMContentLoaded, on: document, do:flip, to: .animatecss,  after: testcallback"
	             * @method _parseDefinition
	             * @param {} definition
	             * @return parsedDefinition
	             */
	            parseDefinition: function(definition) {
	                var parsedDefinition = {},
	                    definitionBody,
	                    definitionKey,
	                    definitionValue,
	                    EVENT_KEY = 'event',
	                    EVENT_TARGET_KEY = 'eventTarget',
	                    BEHAVIOR_KEY = ['behavior', 'after', 'before', 'behaviorTarget'];
	
	                //Performance reasons
	                definitionBody = definition.split(':');
	                if (definitionBody.length > 1) {
	                    definitionKey = definitionBody[0].trim();
	                    //CSS3 selectors support
	                    if(definitionBody.length > 2){
	                        definitionValue = definitionBody.slice(1);
	                        definitionValue = definitionValue.join(':');
	                        definitionValue = definitionValue.trim();
	                    } else {
	                        definitionValue = definitionBody[1].trim();
	                    }
	                    parsedDefinition.value = definitionValue;
	                    //Change by reserved words
	                    if (definitionKey === EVENT_RESERVED_WORD) {
	                        definitionKey = EVENT_KEY;
	                    } else if (definitionKey === EVENT_TARGET_RESERVED_WORD) {
	                        definitionKey = EVENT_TARGET_KEY;
	                    } else {
	                        for (var i = BEHAVIOR_RESERVED_WORD.length - 1; i >= 0; i--) {
	                              if(definitionKey === BEHAVIOR_RESERVED_WORD[i]) {
	                                definitionKey = BEHAVIOR_KEY[i];
	                                /**
	                                 * TODO: This code is deprecated for next version
	                                 */
	                                if((definitionKey === 'after' || definitionKey === 'before') && definitionValue[0]!== '$') {
	                                    definitionValue = '$' + definitionValue;
	                                }
	                                definitionValue = this.parseDoDefinition(definitionValue);
	                              }
	                        }
	                    }
	                    parsedDefinition.key = definitionKey;
	                    parsedDefinition.value = definitionValue;
	                }
	
	                return parsedDefinition;
	            },
	
	            /**
	             * Allow to parse do definitions
	             * @author Dariel Noel <darielnoel@gmail.com>
	             * @since  2014-09-03
	             * @param  {[type]}   doDefinition [description]
	             */
	            parseDoDefinition: function(doDefinition) {
	                var reg = /^\$(\w+)\s*/g,
	                    regMatch = reg.exec(doDefinition),
	                    functionName = "",
	                    parametersArray = [], it = 1;
	
	                if(regMatch !== null) {
	                    functionName = regMatch[1];
	                    doDefinitionArray = doDefinition.split(regMatch[0])[1];
	                    doDefinitionArray = doDefinitionArray !== null ? doDefinitionArray.split(PARAMS_SEPARATOR) : [];
	                    doDefinition = [];
	                    doDefinition[0] = functionName;
	                    for (var i = 0; i < doDefinitionArray.length; i++) {
	                        if(doDefinitionArray[i] !== "")
	                            doDefinition[it++] = doDefinitionArray[i].trim();
	                    }
	                    return doDefinition;
	                }
	                return doDefinition;
	            }
	        };
	
	        /**
	         * Helper to DOM manipulation
	         * @class Parser
	         * @author @dariel_noel
	         */
	        selfish.NodeHelper = {
	
	            /**
	             * Add some classes to a node
	             * @method addClass
	             * @param {} elem
	             * @param {} string
	             * @return
	             */
	            addClass: function(elem, string) {
	                if (!(string instanceof Array)) {
	                    string = string.split(' ');
	                }
	                for (var i = 0, len = string.length; i < len; ++i) {
	                    if (string[i] && !new RegExp(REGEX_BEGIN + string[i] + REGEX_END).test(elem.className)) {
	                        elem.className = (elem.className === "") ?  string[i] : elem.className.trim() + ' ' + string[i];
	                    }
	                }
	            },
	
	            /**
	             * Remove class of some DOM element
	             * @method removeClass
	             * @param {} elem
	             * @param {} string
	             * @return
	             */
	            removeClass: function(elem, string) {
	                if (!(string instanceof Array)) {
	                    string = string.split(' ');
	                }
	                for (var i = 0, len = string.length; i < len; ++i) {
	                    elem.className = elem.className.replace(new RegExp(REGEX_BEGIN + string[i] + REGEX_END), ' ').trim();
	                }
	            },
	
	            /**
	             * Test if the nested element has the supply class
	             * @method hasClass
	             * @param {} elem
	             * @param {} string
	             * @return LogicalExpression
	             */
	            hasClass: function(elem, string) {
	                return string && new RegExp(REGEX_BEGIN + string + REGEX_END).test(elem.className);
	            }
	        };
	
	        /**
	         * A kind of util functions
	         * @class Util
	         * @author @dariel_noel
	         */
	        selfish.Util = {
	
	            /**
	             * Thanks a lot to underscore guys
	             * @method isFunction
	             * @param {} obj
	             * @return UnaryExpression
	             */
	            isFunction: function(obj) {
	                return !!(obj && obj.constructor && obj.call && obj.apply);
	            },
	            /**
	             * Test if some object is an array
	             * @author Dariel Noel <darielnoel@gmail.com>
	             * @since  2014-09-09
	             * @return {Boolean}  [description]
	             */
	            beArray:function(object){
	                return Array.isArray(object);
	            }
	        };
	
	        /////////////////////////////////////////////////////////
	        // Public SubModules
	        /////////////////////////////////////////////////////////
	
	        /**
	         * Event System Interface (AniJS Current Implementation)
	         * @class EventSystem
	         * @author @dariel_noel
	         */
	        AniJS.EventSystem = {
	
	            //ATTRS
	            eventCollection: {},
	
	            eventIdCounter: 0,
	
	            /**
	             * Return true if the element it's an event target object
	             * @method isEventTarget
	             * @param {} element
	             * @return true or false
	             */
	            isEventTarget: function(element) {
	                return (element.addEventListener) ? 1 : 0;
	            },
	
	            /**
	             * Create new EventTarget element
	             * @method createEventTarget
	             * @return AniJS.EventTarget
	             */
	            createEventTarget: function() {
	                return new AniJS.EventTarget();
	            },
	
	            /**
	             * Put a listener in the object
	             * @method addEventListenerHelper
	             * @param {} eventTargetItem
	             * @param {} event
	             * @param {} listener
	             * @param {} other
	             * @return
	             */
	            addEventListenerHelper: function(eventTargetItem, event, listener, other) {
	                eventTargetItem.addEventListener(event, listener, false);
	            },
	
	            /**
	             * Put a listener of the object
	             * @method removeEventListenerHelper
	             * @param {} e
	             * @param {} arguments
	             * @return
	             */
	            removeEventListenerHelper: function(element, type, listener) {
	                if(element){
	                    element.removeEventListener(type, listener);
	                }
	            },
	
	
	            /**
	             * Purge all register elements handle
	             * @method purgeAll
	             * @return
	             */
	            purgeAll: function() {
	                var instance = this,
	                    eventCollection = instance.eventCollection,
	                    eventCollectionKeyList = Object.keys(eventCollection),
	                    size = eventCollectionKeyList.length,
	                    i = 0,
	                    key,
	                    eventObject;
	
	                for (i; i < size; i++) {
	                    key = eventCollectionKeyList[i];
	                    eventObject = eventCollection[key];
	
	                    if (eventObject && eventObject.handleCollection && eventObject.handleCollection.length > 0) {
	                        instance.purgeEventTarget(eventObject.handleCollection[0].element);
	                    }
	
	                    delete eventCollection[key];
	                }
	            },
	
	            /**
	             * Detach all AniJS subscriptions to the all nodes bellow this
	             * @method purgeAllNodes
	             * @param {} element
	             * @return
	             */
	            purgeAllNodes: function(element){
	                //Dame todos los que tengan data-anijs
	                //a cada uno purgue
	                var nodes = element.querySelectorAll("*");
	                    size = nodes.length;
	                for (var i = size - 1; i >= 0; i--) {
	                    this.purgeEventTarget(nodes[i]);
	                }
	            },
	
	            /**
	             * Detach all AniJS subscriptions to this element
	             * @method purgeEventTarget
	             * @param {} element
	             * @return
	             */
	            purgeEventTarget: function(element) {
	                var instance = this,
	                    aniJSEventID = element._aniJSEventID,
	                    elementHandleCollection;
	                if (aniJSEventID) {
	
	                    //Se le quitan todos los eventos a los que este suscrito
	                    elementHandleCollection = instance.eventCollection[aniJSEventID].handleCollection;
	
	                    var size = elementHandleCollection.length,
	                        i = 0,
	                        item;
	
	                    for (i; i < size; i++) {
	                        item = elementHandleCollection[i];
	
	                        //Para cada handle
	                        instance.removeEventListenerHelper(element, item.eventType, item.listener);
	
	                    }
	                    instance.eventCollection[aniJSEventID] = element._aniJSEventID = null;
	                    delete instance.eventCollection[aniJSEventID];
	                    delete element._aniJSEventID;
	                }
	            },
	
	            /**
	             * Create a handle to remove the listener when purge it
	             * @method registerEventHandle
	             * @param {} element
	             * @param {} eventType
	             * @param {} listener
	             * @return
	             */
	            registerEventHandle: function(element, eventType, listener) {
	                var instance = this,
	                    aniJSEventID = element._aniJSEventID,
	                    eventCollection = instance.eventCollection,
	                    elementEventHandle = {
	                        eventType: eventType,
	                        listener: listener,
	                        element: element
	                    };
	
	                if (aniJSEventID) {
	                    eventCollection[aniJSEventID].handleCollection.push(elementEventHandle);
	                } else {
	                    var tempEventHandle = {
	                        handleCollection: [elementEventHandle]
	                    };
	
	                    eventCollection[++instance.eventIdCounter] = tempEventHandle;
	                    element._aniJSEventID = instance.eventIdCounter;
	                }
	            }
	
	        };
	
	
	        /**
	         * Helper the custom EventTarget
	         * Copyright (c) 2010 Nicholas C. Zakas. All rights reserved.
	         * MIT License
	         * http://www.nczonline.net/blog/2010/03/09/custom-events-in-javascript/
	         * @class EventTarget
	         */
	        AniJS.EventTarget = function EventTarget() {
	            this._listeners = {};
	        };
	
	        AniJS.EventTarget.prototype = {
	
	            constructor: AniJS.EventTarget,
	
	            /**
	             * Registers the specified listener on the EventTarget it's called on
	             * Similar to the native implementation
	             * @method addEventListener
	             * @param {} type
	             * @param {} listener
	             * @param {} other
	             * @return
	             */
	            addEventListener: function(type, listener, other) {
	                var instance = this;
	                if (typeof instance._listeners[type] == "undefined") {
	                    instance._listeners[type] = [];
	                }
	
	                instance._listeners[type].push(listener);
	            },
	
	            /**
	             * Dispatches an Event at the specified EventTarget
	             * Similar to the native implementation
	             * @method dispatchEvent
	             * @param {} event
	             * @return
	             */
	            dispatchEvent: function(event) {
	                var instance = this;
	                if (typeof event == "string") {
	                    event = {
	                        type: event
	                    };
	                }
	                if (!event.target) {
	                    event.target = instance;
	                }
	
	                if (!event.type) { //falsy
	                    throw new Error("Event object missing 'type' property.");
	                }
	
	                if (this._listeners[event.type] instanceof Array) {
	                    var listeners = instance._listeners[event.type];
	
	                    for (var i = 0, len = listeners.length; i < len; i++) {
	                        listeners[i].call(instance, event);
	                    }
	                }
	            },
	
	            /**
	             * Removes the event listener previously registered with EventTarget.addEventListener.
	             * Similar to the native implementation
	             * @method removeEventListener
	             * @param {} type
	             * @param {} listener
	             * @return
	             */
	            removeEventListener: function(type, listener) {
	                var instance = this;
	                if (instance._listeners[type] instanceof Array) {
	                    var listeners = instance._listeners[type];
	                    for (var i = 0, len = listeners.length; i < len; i++) {
	                        if (listeners[i] === listener) {
	                            listeners.splice(i, 1);
	                            break;
	                        }
	                    }
	                }
	            }
	        };
	
	        return AniJS;
	
	    }(AniJS || {}));
	
	    AniJS.init();
	    AniJS.run();
	
	    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	    // AMD Support
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            return AniJS;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    if (typeof noGlobal == typeof undefined) {
	        window.AniJS = AniJS;
	    }
	
	    return AniJS;
	});


/***/ }
]);
//# sourceMappingURL=app.js.map