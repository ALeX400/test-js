// ==UserScript==
// @name         #3 WhatsApp Auto Messenger from URL
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Trimite mesaje automate pe WhatsApp Web dintr-un fișier hosts online
// @author       ChatGPT
// @match        https://web.whatsapp.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const fileContent = `
Trezește-te!
Trezirea!
Hei, trezește-te!
Nu adormi!
E timpul să te trezești!
Hei, ești treaz?
Trezirea, acum!
Dormi?
Trezește-te acum!
Nu te culca!
Trezirea, e urgent!
Hei, nu dormi!
Ești treaz? Trezește-te!
Trezirea! Trezește-te!
Nu adormi, trezește-te!
Hei, nu te culca!
Trezirea, nu dormi!
Trezește-te, acum!
Nu adormi, te rog!
Trezirea, acum!
E timpul să te trezești!
Nu adormi acum!
Hei, trezește-te acum!
Dormi? Trezește-te!
Trezirea, nu dormi!
Nu te culca acum!
Hei, nu dormi!
Ești treaz? Trezește-te!
Nu adormi acum!
Trezirea! Nu dormi!
Hei, trezește-te!
Trezește-te, urgent!
Nu adormi, trezește-te!
E timpul să te trezești acum!
Trezește-te, nu dormi!
Hei, nu adormi!
Trezirea, trezește-te!
Nu te culca, trezește-te!
E timpul să te trezești!
Hei, nu dormi acum!
Trezirea, nu adormi!
Trezește-te, e urgent!
Nu te culca acum!
Hei, ești treaz? Trezește-te!
Trezește-te, nu dormi!
Nu adormi acum!
Hei, trezește-te!
Trezirea, urgent!
Nu adormi, trezește-te!
E timpul să te trezești!
Trezește-te, acum!
Nu adormi, te rog!
Trezirea, acum!
E timpul să te trezești!
Nu adormi acum!
Hei, trezește-te acum!
Dormi? Trezește-te!
Trezirea, nu dormi!
Nu te culca acum!
Hei, nu dormi!
Ești treaz? Trezește-te!
Nu adormi acum!
Trezirea! Nu dormi!
Hei, trezește-te!
Trezește-te, urgent!
Nu adormi, trezește-te!
E timpul să te trezești acum!
Trezește-te, nu dormi!
Hei, nu adormi!
Trezirea, trezește-te!
Nu te culca, trezește-te!
E timpul să te trezești!
Hei, nu dormi acum!
Trezirea, nu adormi!
Trezește-te, e urgent!
Nu te culca acum!
Hei, ești treaz? Trezește-te!
Trezește-te, nu dormi!
Nu adormi acum!
Hei, trezește-te!
Trezirea, urgent!
Nu adormi, trezește-te!
E timpul să te trezești!
Trezește-te, acum!
Nu adormi, te rog!
Trezirea, acum!
E timpul să te trezești!
Nu adormi acum!
Hei, trezește-te acum!
Dormi? Trezește-te!
Trezirea, nu dormi!
Nu te culca acum!
Hei, nu dormi!
Ești treaz? Trezește-te!
Nu adormi acum!
Trezirea! Nu dormi!
Hei, trezește-te!
Trezește-te, urgent!
Nu adormi, trezește-te!
E timpul să te trezești acum!
Trezește-te, nu dormi!
Hei, nu adormi!
Trezirea, trezește-te!
Nu te culca, trezește-te!
E timpul să te trezești!
Hei, nu dormi acum!
Trezirea, nu adormi!
Trezește-te, e urgent!
Nu te culca acum!
Hei, ești treaz? Trezește-te!
Trezește-te, nu dormi!
Nu adormi acum!
Hei, trezește-te!
Trezirea, urgent!
Nu adormi, trezește-te!
E timpul să te trezești!
Trezește-te, acum!
Nu adormi, te rog!
Trezirea, acum!
E timpul să te trezești!
Nu adormi acum!
Hei, trezește-te acum!
Dormi? Trezește-te!
Trezirea, nu dormi!
Nu te culca acum!
Hei, nu dormi!
Ești treaz? Trezește-te!
Nu adormi acum!
Trezirea! Nu dormi!
Hei, trezește-te!
Trezește-te, urgent!
Nu adormi, trezește-te!
E timpul să te trezești acum!
Trezește-te, nu dormi!
Hei, nu adormi!
Trezirea, trezește-te!
Nu te culca, trezește-te!
E timpul să te trezești!
Hei, nu dormi acum!
Trezirea, nu adormi!
Trezește-te, e urgent!
Nu te culca acum!
Hei, ești treaz? Trezește-te!
Trezește-te, nu dormi!
Nu adormi acum!
Hei, trezește-te!
Trezirea, urgent!
Nu adormi, trezește-te!
E timpul să te trezești!
Trezește-te, acum!
Nu adormi, te rog!
Trezirea, acum!
E timpul să te trezești!
Nu adormi acum!
Hei, trezește-te acum!
Dormi? Trezește-te!
Trezirea, nu dormi!
Nu te culca acum!
Hei, nu dormi!
Ești treaz? Trezește-te!
Nu adormi acum!
Trezirea! Nu dormi!
Hei, trezește-te!
Trezește-te, urgent!
Nu adormi, trezește-te!
E timpul să te trezești acum!
Trezește-te, nu dormi!
Hei, nu adormi!
Trezirea, trezește-te!
Nu te culca, trezește-te!
E timpul să te trezești!
Hei, nu dormi acum!
Trezirea, nu adormi!
Trezește-te, e urgent!
Nu te culca acum!
Hei, ești treaz? Trezește-te!
Trezește-te, nu dormi!
Nu adormi acum!
Hei, trezește-te!
Trezirea, urgent!
Nu adormi, trezește-te!
E timpul să te trezești!
Trezește-te, acum!
Nu adormi, te rog!
Trezirea, acum!
E timpul să te trezești!
Nu adormi acum!
Hei, trezește-te acum!
Dormi? Trezește-te!
Trezirea, nu dormi!
Nu te culca acum!
Hei, nu dormi!
Ești treaz? Trezește-te!
Nu adormi acum!
Trezirea! Nu dormi!
Hei, trezește-te!
Trezește-te, urgent!
Nu adormi, trezește-te!
E timpul să te trezești acum!
Trezește-te, nu dormi!
Hei, nu adormi!
Trezirea, trezește-te!
Nu te culca, trezește-te!
E timpul să te trezești!
Hei, nu dormi acum!
Trezirea, nu adormi!
Trezește-te, e urgent!
Nu te culca acum!
Hei, ești treaz? Trezește-te!
Trezește-te, nu dormi!
Nu adormi acum!
Hei, trezește-te!
Trezirea, urgent!
Nu adormi, trezește-te!
E timpul să te trezești!
Trezește-te, acum!
Nu adormi, te rog!
Trezirea, acum!
E timpul să te trezești!
Nu adormi acum!
Hei, trezește-te acum!
Dormi? Trezește-te!
Trezirea, nu dormi!
Nu te culca acum!
Hei, nu dormi!
Ești treaz? Trezește-te!
Nu adormi acum!
Trezirea! Nu dormi!
Hei, trezește-te!
Trezește-te, urgent!
Nu adormi, trezește-te!
E timpul să te trezești acum!
Trezește-te, nu dormi!
Hei, nu adormi!
Trezirea, trezește-te!
Nu te culca, trezește-te!
E timpul să te trezești!
Hei, nu dormi acum!
Trezirea, nu adormi!
Trezește-te, e urgent!
Nu te culca acum!
Hei, ești treaz? Trezește-te!
Trezește-te, nu dormi!
Nu adormi acum!
Hei, trezește-te!
Trezirea, urgent!
Nu adormi, trezește-te!
E timpul să te trezești!
Trezește-te, acum!
Nu adormi, te rog!
Trezirea, acum!
E timpul să te trezești!
Nu adormi acum!
Hei, trezește-te acum!
Dormi? Trezește-te!
Trezirea, nu dormi!
Nu te culca acum!
Hei, nu dormi!
Ești treaz? Trezește-te!
Nu adormi acum!
Trezirea! Nu dormi!
Hei, trezește-te!
Trezește-te, urgent!
Nu adormi, trezește-te!
E timpul să te trezești acum!
Trezește-te, nu dormi!
Hei, nu adormi!
Trezirea, trezește-te!
Nu te culca, trezește-te!
E timpul să te trezești!
Hei, nu dormi acum!
Trezirea, nu adormi!
Trezește-te, e urgent!
Nu te culca acum!
Hei, ești treaz? Trezește-te!
Trezește-te, nu dormi!
Nu adormi acum!
Hei, trezește-te!
Trezirea, urgent!
Nu adormi, trezește-te!
E timpul să te trezești!
Trezește-te, acum!
Nu adormi, te rog!
Trezirea, acum!
E timpul să te trezești!
Nu adormi acum!
Hei, trezește-te acum!
Dormi? Trezește-te!
Trezirea, nu dormi!
Nu te culca acum!
Hei, nu dormi!
Ești treaz? Trezește-te!
Nu adormi acum!
Trezirea! Nu dormi!
Hei, trezește-te!
Trezește-te, urgent!
Nu adormi, trezește-te!
E timpul să te trezești acum!
Trezește-te, nu dormi!
Hei, nu adormi!
Trezirea, trezește-te!
Nu te culca, trezește-te!
E timpul să te trezești!
Hei, nu dormi acum!
Trezirea, nu adormi!
Trezește-te, e urgent!
Nu te culca acum!
Hei, ești treaz? Trezește-te!
Trezește-te, nu dormi!
Nu adormi acum!
Hei, trezește-te!
Trezirea, urgent!
Nu adormi, trezește-te!
E timpul să te trezești!
Trezește-te, acum!
Nu adormi, te rog!
Trezirea, acum!
E timpul să te trezești!
Nu adormi acum!
Hei, trezește-te acum!
Dormi? Trezește-te!
Trezirea, nu dormi!
Nu te culca acum!
Hei, nu dormi!
Ești treaz? Trezește-te!
Nu adormi acum!
Trezirea! Nu dormi!
Hei, trezește-te!
Trezește-te, urgent!
Nu adormi, trezește-te!
E timpul să te trezești acum!
Trezește-te, nu dormi!
Hei, nu adormi!
Trezirea, trezește-te!
Nu te culca, trezește-te!
E timpul să te trezești!
Hei, nu dormi acum!
Trezirea, nu adormi!
Trezește-te, e urgent!
Nu te culca acum!
Hei, ești treaz? Trezește-te!
Trezește-te, nu dormi!
Nu adormi acum!
Hei, trezește-te!
Trezirea, urgent!
Nu adormi, trezește-te!
E timpul să te trezești!
Trezește-te, acum!
Nu adormi, te rog!
Trezirea, acum!
E timpul să te trezești!
Nu adormi acum!
Hei, trezește-te acum!
Dormi? Trezește-te!
Trezirea, nu dormi!
Nu te culca acum!
Hei, nu dormi!
Ești treaz? Trezește-te!
Nu adormi acum!
Trezirea! Nu dormi!
Hei, trezește-te!
Trezește-te, urgent!
Nu adormi, trezește-te!
E timpul să te trezești acum!
Trezește-te, nu dormi!
Hei, nu adormi!
Trezirea, trezește-te!
Nu te culca, trezește-te!
E timpul să te trezești!
Hei, nu dormi acum!
Trezirea, nu adormi!
Trezește-te, e urgent!
Nu te culca acum!
Hei, ești treaz? Trezește-te!
Trezește-te, nu dormi!
Nu adormi acum!
Hei, trezește-te!
Trezirea, urgent!
Nu adormi, trezește-te!
E timpul să te trezești!
Trezește-te, acum!
Nu adormi, te rog!
Trezirea, acum!
E timpul să te trezești!
Nu adormi acum!
Hei, trezește-te acum!
Dormi? Trezește-te!
Trezirea, nu dormi!
Nu te culca acum!
Hei, nu dormi!
Ești treaz? Trezește-te!
`;

    const interval = 0;
    let messages = [];
    let messageIndex = 0;
    let isRunning = false;

    const button = document.createElement('button');
    button.innerText = 'Play';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.zIndex = '1000';
    button.style.padding = '10px';
    button.style.backgroundColor = '#25D366';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    document.body.appendChild(button);

    button.addEventListener('click', async () => {
        if (isRunning) {
            isRunning = false;
            messageIndex = 0;
            button.innerText = 'Play';
            console.log('Mesajele automate au fost oprite și indexul a fost resetat.');
        } else {
            isRunning = true;
            button.innerText = 'Stop';
            console.log('Mesajele automate au fost pornite.');
            await sendMessagesSequentially();
        }
    });

    function loadMessages() {
        messages = fileContent.split('\n')
            .map(line => line.trim())
            .filter(line => line && !line.startsWith('#'));
        console.log('Mesaje încărcate:', messages);
        if (messages.length === 0) {
            console.log('Nu au fost găsite mesaje valide în fișier.');
        }
    }

    async function prepareMessage() {
        if (messages.length === 0) {
            console.log('Nu există mesaje de trimis');
            return false;
        }

        const messageBox = document.querySelector('[contenteditable="true"][data-tab="10"]');
        if (messageBox) {
            messageBox.innerHTML = '';
            messageBox.focus();
            document.execCommand('insertText', false, messages[messageIndex]);
            messageBox.dispatchEvent(new InputEvent('input', { bubbles: true }));
            console.log(`Mesaj pregătit: ${messages[messageIndex]}`);
            return true;
        } else {
            console.log('Nu s-a găsit caseta de mesaj');
            return false;
        }
    }

    async function sendMessage() {
        const sendButton = document.querySelector('button[aria-label="Trimiteţi"]');
        if (sendButton) {
            sendButton.click();
            console.log(`Mesaj trimis: ${messages[messageIndex]}`);
            messageIndex = (messageIndex + 1) % messages.length;
        } else {
            console.log('Nu s-a găsit butonul de trimitere');
        }
    }

    async function sendMessagesSequentially() {
        while (isRunning) {
            const prepared = await prepareMessage();
            if (prepared) {
                await new Promise(resolve => setTimeout(resolve, 100));
                await sendMessage();
                if (interval > 0) {
                    await new Promise(resolve => setTimeout(resolve, interval));
                }
            } else {
                console.log('A apărut o problemă în pregătirea mesajului.');
                isRunning = false;
                button.innerText = 'Play';
                messageIndex = 0;
            }
        }
    }

    loadMessages();
})();
