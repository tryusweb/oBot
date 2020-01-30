// ==UserScript==
// @version 7.6.4
// @name scriptBest
// @description OGame: Miglioramento giocabilità  con funzioni automatiche e di controllo
// @author info@tryus.it
// @creator Tryus
// @copyright 2020, Tryus
// @license 0BSD
// @grant unsafeWindow
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_deleteValue
// @grant GM_xmlhttpRequest
// @grant GM_getResourceURL
// @include *://*.ogame.gameforge.com*
// @updateURL https://scriptog.tryus.it/jsBot/scriptBest.user.js
// @downloadURL https://scriptog.tryus.it/jsBot/scriptBest.user.js
// @connect scriptog.tryus.it
// @connect api.telegram.org
// ==/UserScript==
(function() {
    function b(b) {
        let a = unsafeWindow.debugScriptBest ? {
            'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
        } : {};
        GM_xmlhttpRequest({
            method: 'GET',
            url: unsafeWindow.pathDomain + '/jsBot/js/' + unsafeWindow.versionSBI + '/' + b + '.js',
            ignoreCache: unsafeWindow.debugScriptBest,
            headers: a,
            onload: function(b) {
                if (b.responseText.indexOf('<head>') !== -1) unsafeWindow.errorScriptBest || (unsafeWindow.errorScriptBest = !0, alert('This version is not supported, please update the bot by downloading it from the site: ' + unsafeWindow.pathDomain));
                else {
                    let a = document.createElement('script');
                    a.innerHTML = b.responseText, document.body.appendChild(a);
                }
            },
            onerror: function(a) {
                a && a.error && a.error.indexOf('404') !== -1 && !unsafeWindow.sendErrorMessage && (unsafeWindow.sendErrorMessage = 1, alert('This version is not supported, please update the bot by downloading it from the site: ' + unsafeWindow.pathDomain));
            }
        });
    }
    let a = !1;
    if (sessionStorage.getItem('ScriptBest_debug_clean') && (sessionStorage.removeItem('ScriptBest_debug_clean'), a = !0), location.href.indexOf('api') === -1 && location.href.indexOf('board') === -1 && location.href.indexOf('allianceInfo') === -1) {
        unsafeWindow.debugScriptBest = a, unsafeWindow.TOKEN_USER = GM_getValue('TOKEN_USER', null), unsafeWindow.pathDomain = 'https://scriptog.tryus.it', unsafeWindow.webservicePath = unsafeWindow.pathDomain + '/ws/', unsafeWindow.versionSBI = GM_info.script.version, unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest, unsafeWindow.GM_setValue = GM_setValue, unsafeWindow.GM_getValue = GM_getValue, b('AutoLoader'), b('Main');
        let c = setInterval(function() {
            if (typeof AutoLoader !== 'undefined' && typeof Main !== 'undefined') {
                clearInterval(c);
                let a = new AutoLoader();
            }
        }, 100);
        if (window.player && window.player.hasCommander) {
            $('#mmonetbar').hide();
            $('#banner_skyscraper').hide();
            $('#promotionCountdownBox').hide();
        }
    }
}());
