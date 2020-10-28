import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export declare type OS = 'Android' | 'iOS';
export declare type Gender = 'Male' | 'Female';
export declare type Event = 'messageReceived' | 'notificationTapped' | 'tokenReceived' | 'registrationUpdated' | 'geofenceEntered' | 'actionTapped' | 'installationUpdated' | 'userUpdated' | 'personalized' | 'depersonalized';
export interface CustomEvent {
    definitionId: string;
    properties: Record<string, string | number | boolean>;
}
export interface Configuration {
    /**
     * The application code of your Application from Push Portal website
     */
    applicationCode: string;
    geofencingEnabled?: boolean;
    /**
     * Message storage save callback
     */
    messageStorage?: string;
    defaultMessageStorage?: boolean;
    ios?: {
        notificationTypes?: string[];
        forceCleanup?: boolean;
        logging?: boolean;
    };
    android?: {
        notificationIcon: string;
        multipleNotifications: boolean;
        notificationAccentColor: string;
    };
    privacySettings?: {
        applicationCodePersistingDisabled?: boolean;
        userDataPersistingDisabled?: boolean;
        carrierInfoSendingDisabled?: boolean;
        systemInfoSendingDisabled?: boolean;
    };
    notificationCategories?: [{
        identifier?: string;
        actions?: [{
            identifier?: string;
            title?: string;
            foreground?: boolean;
            authenticationRequired?: boolean;
            moRequired?: boolean;
            destructive?: boolean;
            icon?: string;
            textInputActionButtonTitle?: string;
            textInputPlaceholder?: string;
        }];
    }];
}
export interface UserData {
    externalUserId: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    gender?: Gender;
    birthday?: Date;
    phones?: string[];
    emails?: string[];
    tags?: string[];
    customAttributes?: Record<string, string | number | boolean>;
}
export interface Installation {
    isPrimaryDevice?: boolean;
    isPushRegistrationEnabled?: boolean;
    notificationsEnabled?: boolean;
    geoEnabled?: boolean;
    sdkVersion?: string;
    appVersion?: string;
    os?: OS;
    osVersion: string;
    deviceManufacturer?: string;
    deviceModel?: string;
    deviceSecure?: boolean;
    language?: string;
    deviceTimezoneId?: string;
    applicationUserId?: string;
    deviceName?: string;
    customAttributes?: Record<string, string | number | boolean>;
}
export interface UserIdentity {
    phones?: string[];
    emails?: string[];
    externalUserId: string;
}
export interface PersonalizeContext {
    userIdentity: UserIdentity;
    userAttributes?: Record<string, string>;
    forceDepersonalize?: boolean;
}
export interface Message {
    messageId: string;
    title?: string;
    body?: string;
    sound?: string;
    silent?: boolean;
    customPayload?: Record<string, string>;
    internalData?: string;
    receivedTimestamp?: number;
    seenDate?: number;
    contentUrl?: string;
    seen?: boolean;
    geo?: boolean;
    originalPayload?: Record<string, string>;
    vibrate?: boolean;
    icon?: string;
    category?: string;
    chat?: string;
    browserUrl?: string;
    deeplink?: string;
    webViewUrl?: string;
    inAppDismissTitle?: string;
}
export interface MobileMessagingError {
    code: string;
    message: string;
}
export interface ChatConfig {
    ios?: {
        showModally: boolean;
    };
}
export declare class DefaultMessageStorage {
    find(messageId: string, callback: (message: Message) => void): void;
    findAll(callback: (messages: Message[]) => void): void;
    delete(messageId: string, callback: () => void): void;
    deleteAll(callback: () => void): void;
}
/**
 * @name Mobile Messaging
 * @description
 * Mobile Messaging SDK is designed and developed to easily enable push notification channel in your mobile application.
 * In almost no time of implementation you get push notification in your application and access to the features of [Infobip IP Messaging Platform](https://portal.infobip.com/push/).
 * This document describes library integration steps for your Cordova project.
 *
 * For more info see [Cordova plugin docs](https://github.com/infobip/mobile-messaging-cordova-plugin)
 *
 * @usage
 * ```typescript
 * import { MobileMessaging } from '@ionic-native/mobile-messaging/ngx';
 *
 *
 * constructor(private mobileMessaging: MobileMessaging) { }
 *
 * ...
 *
 *
 *  this.mobileMessaging.init({
 *    applicationCode: '<your_application_code>',
 *    geofencingEnabled: '<true/false>',
 *    defaultMessageStorage: '<true/false>',
 *    ios: {
 *      notificationTypes: ['alert', 'badge', 'sound']
 *    },
 *    android: {
 *      notificationIcon: <String; a resource name for a status bar icon (without extension), located in '/platforms/android/app/src/main/res/mipmap'>,
 *      multipleNotifications: <Boolean; set to 'true' to enable multiple notifications>,
 *      notificationAccentColor: <String; set to hex color value in format '#RRGGBB' or '#AARRGGBB'>
 *     }}, (err) => {
 *      ...
 *    });
 *
 *  this.mobileMessaging.register('messageReceived').subscribe((message: Message) => {
 *    ...
 *  });
 *
 * ```
 */
export declare class MobileMessagingOriginal extends IonicNativePlugin {
    /**
     * Starts a new Mobile Messaging session.
     *
     * @name init
     * @param config. Configuration for Mobile Messaging
     * @param {Function} onInitError. Error callback
     */
    init(config: Configuration, onInitError?: (error: MobileMessagingError) => void): void;
    /**
     * Register to event coming from MobileMessaging library.
     *
     * @name register
     * @param event
     */
    register(event: Event): Observable<Message>;
    on(event: Event): Observable<Message>;
    /**
     * Un register from MobileMessaging library event.
     *
     * @name unregister
     * @param {String} eventName
     * @param {Function} handler will be unregistered from event
     */
    unregister(event: Event): Observable<Message>;
    off(event: Event): Observable<Message>;
    /**
     * Sends an event to the server eventually, handles possible errors and do retries for you.
     *
     * @name submitEvent
     * @param {Object} eventData. An object containing event data
     * {
     *   definitionId: "eventDefinitionId"
     *   properties: {
     *     "stringAttribute": "string",
     *     "numberAttribute": 1,
     *     "dateAttribute": "2020-02-26T09:41:57Z",
     *     "booleanAttribute": true
     *   }
     * }
     */
    submitEvent(event: CustomEvent): void;
    /**
     * Sends an event to the server immediately.
     * You have to handle possible connection or server errors, do retries yourself.
     *
     * @name submitEventImmediately
     * @param {Object} eventData. An object containing event data
     * {
     *   definitionId: "eventDefinitionId"
     *   properties: {
     *     "stringAttribute": "string",
     *     "numberAttribute": 1,
     *     "dateAttribute": "2020-02-26T09:41:57Z",
     *     "booleanAttribute": true
     *   }
     * }
     * @param {Function} callback will be called on result, you have to handle error and do retries yourself
     */
    submitEventImmediately(event: CustomEvent): Promise<void>;
    /**
     * Saves user data to the server.
     *
     * @name saveUser
     * @param {Object} userData. An object containing user data
     */
    saveUser(userData: UserData): Promise<any>;
    /**
     * Fetch user data from the server.
     *
     * @name fetchUser
     */
    fetchUser(): Promise<UserData>;
    /**
     * Gets user data from the locally stored cache.
     *
     * @name getUser
     */
    getUser(): Promise<UserData>;
    /**
     * Saves installation to the server.
     *
     * @name saveInstallation
     * @param {Object} installation. An object containing installation data
     */
    saveInstallation(installation: Installation): Promise<Installation>;
    /**
     * Fetches installation from the server.
     *
     * @name fetchInstallation
     */
    fetchInstallation(): Promise<Installation>;
    /**
     * Gets locally cached installation.
     *
     * @name getInstallation
     */
    getInstallation(): Promise<Installation>;
    /**
     * Sets any installation as primary for this user.
     *
     * @name setInstallationAsPrimary
     * @param {String} pushRegistrationId of an installation
     * @param {Boolean} primary or not
     */
    setInstallationAsPrimary(pushRegistrationId: string, primary: boolean): Promise<any>;
    /**
     * Performs personalization of the current installation on the platform.
     *
     * @name personalize
     * @param {Object} context. An object containing user identity information as well as additional user attributes.
     */
    personalize(context: PersonalizeContext): Promise<PersonalizeContext>;
    /**
     * Performs depersonalization of the current installation on the platform.
     *
     * @name depersonalize
     */
    depersonalize(): Promise<any>;
    /**
     * Performs depersonalization of the installation referenced by pushRegistrationId.
     *
     * @param {String} pushRegistrationId of the remote installation to depersonalize
     */
    depersonalizeInstallation(pushRegistrationId: string): Promise<any>;
    /**
     * Mark messages as seen
     *
     * @name markMessagesSeen
     * @param {Array} messageIds of identifiers of message to mark as seen
     */
    markMessagesSeen(messageIds: string[]): Promise<any>;
    /**
     * Displays built-in error dialog so that user can resolve errors during sdk initialization.
     *
     * @name showDialogForError
     * @param {Number} errorCode to display dialog for
     */
    showDialogForError(errorCode: number): Promise<any>;
    defaultMessageStorage(): DefaultMessageStorage | undefined;
    /**
     * Displays chat view.
     *
     * @name showChat
     * @param {ChatConfig} chat config
     */
    showChat(config?: ChatConfig): Promise<any>;
}

export declare const MobileMessaging: MobileMessagingOriginal;