# bb-agent

bot / agent starter

## setup


Configure `.npmrc`

```bash
touch .npmrc
echo "registry=https://pkgs.dev.azure.com/dynamicscrm/OneCRM/_packaging/CopilotSDK-JS-Nightly/npm/registry/ " >> .npmrc
echo "always-auth=true" >> .npmrc
```

Install

```bash
npm -dd i
```

Provision / Configure ABS

```bash
$botName = Read-Host "BotName in ABS"
$appId = az ad app create --display-name $botName --sign-in-audience "AzureADMyOrg" --query appId | ConvertFrom-Json
$secretJson = az ad app credential reset --id $appId | ConvertFrom-Json

touch .env
echo "tenantId=$($secretJson.tenant)" >> .env
echo "clientId=$appId" >> .env
echo "clientSecret=$secretJson.password" >> .env
```


Run

```bash
node --env-file .env app.js
```

