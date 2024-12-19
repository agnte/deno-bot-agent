# bb-agent

bot / agent starter

## setup


Configure `.npmrc`

```bash
echo "registry=https://pkgs.dev.azure.com/dynamicscrm/OneCRM/_packaging/DPX-Tools-Upstream/npm/registry/" > .npmrc
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
```

```ps
echo .env
echo "tenantId=$($secretJson.tenant)" >> .env
echo "clientId=$($secretJson.appId)" >> .env
echo "clientSecret=$($secretJson.password)" >> .env
```
Run

```bash
node --env-file .env app.js
```

