/*!
 * Copyright 2014-2015 The Bootstrap Authors
 * Copyright 2014-2015 Twitter, Inc.
 *
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see https://creativecommons.org/licenses/by/3.0/.
 */
!function(){"use strict";var n=window.navigator.userAgent;if(!(n.indexOf("Opera")>-1||n.indexOf("Presto")>-1)){var e=function(){var n=/MSIE ([0-9.]+)/.exec(window.navigator.userAgent);if(null===n)return null;var e=parseInt(n[1],10);return Math.floor(e)}();if(null!==e){var i,r=void 0===(i=new Function("/*@cc_on return @_jscript_version; @*/")())?11:i<9?8:i;e!==r&&window.alert("WARNING: You appear to be using IE"+r+" in IE"+e+" emulation mode.\nIE emulation modes can behave significantly differently from ACTUAL older versions of IE.\nPLEASE DON'T FILE BOOTSTRAP BUGS based on testing in IE emulation modes!")}}}();