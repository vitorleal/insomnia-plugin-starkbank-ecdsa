#insomnia-plugin-starkbank-ecdsa

[Insomnia](https://insomnia.rest/download) plugin to add [StarkBank Authentication](https://starkbank.com/docs/api#authentication) Headers, and sign the `Access-Signature` using ECDSA elliptic curve with your private key.

Environments to add:
- `privateKeyContent` - the content of you StarkBank private key
- `accessId` - project/{projectId} or organization/{organizationId}

Headers Added to the requests:
- `Access-Id`
- `Access-Time`
- `Access-Signature`
