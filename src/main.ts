import * as core from '@actions/core'
import {updateTestFlight} from './app-store-connect-api'

async function run(): Promise<void> {
  try {
    const appId = core.getInput('app-id')
    const version = core.getInput('bundle-version-string')
    const buildNumber = core.getInput('build-number')
    const groupName = core.getInput('group-name')
    const issuerId = core.getInput('issuer-id')
    const apiKeyId = core.getInput('api-key-id')
    const apiPrivateKey = core.getInput('api-private-key')
    const whatsnew = core.getInput('whats-new')
    const shouldSubmit = !!core.getInput('submit-for-review');

    await updateTestFlight(
      appId,
      version,
      buildNumber,
      groupName,
      issuerId,
      apiKeyId,
      apiPrivateKey,
      whatsnew,
      shouldSubmit
    )
  } catch (error) {
    // @ts-ignore
    console.log('error', error.response.data)
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
