// @ts-check
import express, { json } from 'express';

import { CloudAdapter, loadAuthConfigFromEnv, authorizeJWT } from '@microsoft/agents-bot-hosting';
import pjson from '@microsoft/agents-bot-hosting/package.json' with {type: 'json'};
import { EchoBot } from './bot.js';

const config = loadAuthConfigFromEnv()
const adapter = new CloudAdapter(config);
const myBot = new EchoBot()

const server = express()
server.use(authorizeJWT(config))
server.use(json())

server.post('/api/messages', 
    async (req, res) => {
        await adapter.process(req, res, (context) => myBot.run(context));
    }
)

const port = process.env.PORT || 3978

server.listen(port, () => {
    console.log('os', process.platform, 'node', process.versions.node, 'deno', process.versions.deno)
    console.log(`\n${ pjson.name } v${ pjson.version } listening on ${ port } for bot ${ process.env.clientId }`);
})