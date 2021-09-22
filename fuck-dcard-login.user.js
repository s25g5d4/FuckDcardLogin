// ==UserScript==
// @name        FuckDcardLogin
// @description 小孩子才登入看文章。低能卡吃屎。
// @namespace   https://github.com/s25g5d4/FuckDcardLogin
// @match       https://*.dcard.tw/*
// @match       http://*.dcard.tw/*
// @version     1.0
// @author      s25g5d4
// @homepageURL https://github.com/s25g5d4/FuckDcardLogin
// @grant       none
// ==/UserScript==

const removeLoginModal = (target) => {
    target.style.overflow = null;
    target.querySelector('.__portal').remove();
};

const observer = new MutationObserver((mutations) => {
    mutations.forEach((record) => {
        const style = record.target.getAttribute('style');
        console.log('style changed!', style);

        if (style.includes('overflow')) {
            observer.disconnect();
            removeLoginModal(record.target);
        }
    });
});

const target = document.body;
observer.observe(target, { attributes: true, attributeFilter: ['style'] });
setTimeout(() => {
    target.querySelector('.__portal').remove();
}, 100);
