// @ts-check
const express = require('express')

const {
    CloudAdapter, ConfigurationBotFrameworkAuthentication,
} = require('botbuilder')

const { EchoBot } = require('./bot')

const server = express()
server.use(express.json())


const adapter = new CloudAdapter(new ConfigurationBotFrameworkAuthentication());
const myBot = new EchoBot()

server.post('/api/messages', 
    async (req, res) => {
        console.log(req.body)
        await adapter.process(req, res, (context) => myBot.run(context));
    }
)

const port = process.env.PORT || 3978

server.listen(port, () => {
    console.log(`\n lisenting on ${ port } for bot ${ process.env.MicrosoftAppId }`);
})