# bb-agent

bot / agent starter

## setup


Configure `.npmrc`

```bash
echo "registry=https://pkgs.dev.azure.com/dynamicscrm/OneCRM/_packaging/CopilotSDK-JS-Nightly/npm/registry/ " > .npmrc
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
```
MicrosoftAppType=SingleTenant
MicrosoftAppTenantId=69e9b82d-4842-4902-8d1e-abc5b98a55e8
MicrosoftAppId=2bcdb210-4ed5-4ae8-96c8-33668ad97ed1
MicrosoftAppPassword=
```
Run

```bash
node --env-file .env app.js
```

