import { ActivityHandler, MessageFactory } from '@microsoft/agents-bot-hosting';

export class EchoBot extends ActivityHandler {
    constructor() {
        super()
        this.onMessage(async (context, next) => {
            const replyText = `Echo: ${ context.activity.text }`
            await context.sendActivity(MessageFactory.text(replyText, replyText))
            await next()
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded
            const welcomeText = 'Hello from the Agents SDK 👌 and welcome!'
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity(MessageFactory.text(welcomeText, welcomeText))
                }
            }
            await next()
        })
    }
}