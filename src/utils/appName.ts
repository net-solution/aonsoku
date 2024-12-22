import { version, repository } from '@/../package.json'

export const appName = 'Aonsoku-refix'

export function getAppInfo() {
  return {
    name: appName,
    version,
    url: repository.url,
  }
}
