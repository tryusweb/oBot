// ==UserScript==
// @version 7.5.9
// @name scriptBest
// @description OGame: Miglioramento giocabilità  con funzioni automatiche e di controllo
// @author info@tryus.it
// @creator Tryus
// @copyright 2019, Tryus
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
    let debug = false;
    if(sessionStorage.getItem("ScriptBest_debug_clean")){
        sessionStorage.removeItem("ScriptBest_debug_clean");
        debug = true;
    }
    function addScript(b) {
        let a = unsafeWindow.debugScriptBest ? {
            'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
        } : {};
        GM_xmlhttpRequest({
            method: 'GET',
            url: unsafeWindow.pathDomain + '/jsBot/js/' + unsafeWindow.versionSBI + '/' + b + '.js',
            ignoreCache: unsafeWindow.debugScriptBest,
            headers: a,
            onload: function(b) {
                let a = document.createElement('script');
                a.innerHTML = b.responseText, document.body.appendChild(a);
            },
            onerror: function(a) {
                a && a.error && a.error.indexOf('404') !== -1 && !unsafeWindow.sendErrorMessage && (unsafeWindow.sendErrorMessage = 1, alert('This version is not supported, please update the bot by downloading it from the site: ' + unsafeWindow.pathDomain));
            }
        });
    }
    if (location.href.indexOf('api') === -1 && location.href.indexOf('board') === -1 && location.href.indexOf('allianceInfo') === -1) {
        unsafeWindow.debugScriptBest = debug, unsafeWindow.TOKEN_USER = GM_getValue('TOKEN_USER', null), unsafeWindow.pathDomain = 'https://scriptog.tryus.it', unsafeWindow.webservicePath = unsafeWindow.pathDomain + '/ws/', unsafeWindow.versionSBI = GM_info.script.version, unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest, unsafeWindow.GM_setValue = GM_setValue, unsafeWindow.GM_getValue = GM_getValue, addScript('AutoLoader'), addScript('Main');
        let rI = setInterval(function() {
            if (typeof AutoLoader !== 'undefined' && typeof Main !== 'undefined') {
                clearInterval(rI);
                let a = new AutoLoader();
            }
        }, 100);

        if(window.player && window.player.hasCommander){
            //$("body").removeClass("no-commander");
            if($("#mmonetbar")) $("#mmonetbar").hide();
            if($("#banner_skyscraper")) $("#banner_skyscraper").hide();
            if($("#promotionCountdownBox")) $("#promotionCountdownBox").hide();
        }

    }

})();
