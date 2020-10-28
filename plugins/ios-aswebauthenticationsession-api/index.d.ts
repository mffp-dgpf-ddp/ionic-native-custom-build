import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name ios-aswebauthenticationsession-api
 * @description
 * Plugin for iOS 12 ASWebAuthenticationSession API
 *
 * @usage
 * ```typescript
 * import { IosASWebauthenticationSession } from '@ionic-native/ios-aswebauthenticationsession-api/ngx';
 *
 *
 * constructor(private IosASWebauthenticationSession: ios-aswebauthenticationsession-api) { }
 *
 * ...
 *
 *
 * this.IosASWebauthenticationSession.start(callbackUrl, authorizeURL)
 *   .then((redirectUrl: string) => console.log(redirectUrl))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class IosASWebauthenticationSessionOriginal extends IonicNativePlugin {
    /**
     * This function start an authentication flow in ASWebauthenticationSession
     * @param callbackUrl {string} Callback URL of your App
     * @param authorizeURL {number} Authorization URL
     * @return {Promise<string>} Returns a promise that resolves a string containing the redirect URL after finishing ASWebauthenticationSession
     */
    start(callbackUrl: string, authorizeURL: string): Promise<string>;
}

export declare const IosASWebauthenticationSession: IosASWebauthenticationSessionOriginal;