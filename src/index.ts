import { Client } from "@xhayper/discord-rpc";

const client = new Client({
    clientId: "1112126517770727615 ",
});

client.login();

client.on("ready", () => {
    console.log("ready");
});
