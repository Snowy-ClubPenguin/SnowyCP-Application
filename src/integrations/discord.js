const RPC = require('discord-rpc');
const rpcClient = new RPC.Client({ transport: 'ipc' });
const APPLICATION_ID = '1123174219098894366';
RPC.register(APPLICATION_ID);

function onRpcReady() {
    rpcClient.setActivity({
        state: "Waddling",
        details: "Snowy Club Penguin",
        startTimestamp: Date.now(),
        largeImageKey: "scpapp",
        instance: true,
    });
}

function initDiscordRichPresence() {
    rpcClient.on('ready', onRpcReady);
    rpcClient.login({
        clientId: APPLICATION_ID
    }).catch(console.error);
}

module.exports = { initDiscordRichPresence }