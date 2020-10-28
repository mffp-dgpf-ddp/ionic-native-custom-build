import { IonicNativePlugin } from '@ionic-native/core';
export interface PromptsOptions {
    /**
     * a function to pass the user's decision whether to remember their choice of app.
     * This will be passed a single boolean value indicating the user's decision.
     * @param rememberChoice
     */
    callback?: (rememberChoice: boolean) => void;
    /**
     * text to display in the native prompt header asking user whether to remember their choice.
     * Defaults to "Remember your choice?" if not specified.
     */
    headerText?: string;
    /**
     * text to display in the native prompt body asking user whether to remember their choice.
     * Defaults to "Use the same app for navigating next time?" if not specified.
     */
    bodyText?: string;
    /**
     * text to display for the Yes button.
     * Defaults to "Yes" if not specified.
     */
    yesButtonText?: string;
    /**
     * text to display for the No button.
     * Defaults to "No" if not specified.
     */
    noButtonText?: string;
}
export interface RememberChoiceOptions {
    /**
     * whether to remember user choice of app for next time, instead of asking again for user choice.
     * `"prompt"` - Prompt user to decide whether to remember choice.
     *  - Default value if unspecified.
     *  - If `promptFn` is defined, this will be used for user confirmation.
     *  - Otherwise (by default), a native dialog will be displayed to ask user.
     * `false` - Do not remember user choice.
     * `true` - Remember user choice.
     */
    enabled?: boolean | string;
    /**
     * a function which asks the user whether to remember their choice of app.
     * If this is defined, then the default dialog prompt will not be shown, allowing for a custom UI for asking the user.
     * This will be passed a callback function which should be invoked with a single boolean argument which indicates the user's decision to remember their choice.
     * @param callback
     */
    promptFn?: (callback: (rememberChoice: boolean) => void) => void;
    /**
     * options related to the default dialog prompt used to ask the user whether to remember their choice of app.
     */
    prompt?: PromptsOptions;
}
export interface AppSelectionOptions {
    /**
     * text to display in the native picker which enables user to select which navigation app to launch.
     * Defaults to "Select app for navigation" if not specified.
     */
    dialogHeaderText?: string;
    /**
     * text to display for the cancel button in the native picker which enables user to select which navigation app to launch.
     * Defaults to "Cancel" if not specified.
     */
    cancelButtonText?: string;
    /**
     * List of apps, defined as `launchnavigator.APP` constants, which should be displayed in the picker if the app is available.
     * This can be used to restrict which apps are displayed, even if they are installed.
     * By default, all available apps will be displayed.
     */
    list?: string[];
    /**
     * Callback to invoke when the user selects an app in the native picker.
     * A single string argument is passed which is the app what was selected defined as a `launchnavigator.APP` constant.
     */
    callback?: (app: string) => void;
    /**
     * (Android only) native picker theme. Specify using `actionsheet.ANDROID_THEMES` constants.
     * Default `actionsheet.ANDROID_THEMES.THEME_HOLO_LIGHT`
     */
    androidTheme?: number;
    /**
     * options related to whether to remember user choice of app for next time, instead of asking again for user choice.
     */
    rememberChoice?: RememberChoiceOptions;
}
export interface LaunchNavigatorOptions {
    /**
     * A callback to invoke when the navigation app is successfully launched.
     */
    successCallback?: Function;
    /**
     * A callback to invoke if an error is encountered while launching the app.
     * A single string argument containing the error message will be passed in.
     */
    errorCallback?: (error: string) => void;
    /**
     * name of the navigation app to use for directions.
     * Specify using launchnavigator.APP constants.
     * e.g. `launchnavigator.APP.GOOGLE_MAPS`.
     * If not specified, defaults to User Selection.
     */
    app?: string;
    /**
     * nickname to display in app for destination. e.g. "Bob's House".
     */
    destinationName?: string;
    /**
     * Start point of the navigation.
     * If not specified, the current device location will be used.
     * Either:
     *  - a {string} containing the address. e.g. "Buckingham Palace, London"
     *  - a {string} containing a latitude/longitude coordinate. e.g. "50.1. -4.0"
     *  - an {array}, where the first element is the latitude and the second element is a longitude, as decimal numbers. e.g. [50.1, -4.0]
     */
    start?: string | number[];
    /**
     * nickname to display in app for start . e.g. "My House".
     */
    startName?: string;
    /**
     * Transportation mode for navigation: "driving", "walking" or "transit". Defaults to "driving" if not specified.
     */
    transportMode?: string;
    /**
     * If true, debug log output will be generated by the plugin. Defaults to false.
     */
    enableDebug?: boolean;
    /**
     * a key/value map of extra app-specific parameters. For example, to tell Google Maps on Android to display Satellite view in "maps" launch mode: `{"t": "k"}`
     */
    extras?: any;
    /**
     * (Android only) mode in which to open Google Maps app.
     * `launchnavigator.LAUNCH_MODE.MAPS` or `launchnavigator.LAUNCH_MODE.TURN_BY_TURN`
     * Defaults to `launchnavigator.LAUNCH_MODE.MAPS` if not specified.
     */
    launchModeGoogleMaps?: string;
    /**
     * (iOS only) method to use to open Apple Maps app.
     * `launchnavigator.LAUNCH_MODE.URI_SCHEME` or `launchnavigator.LAUNCH_MODE.MAPKIT`
     * Defaults to `launchnavigator.LAUNCH_MODE.URI_SCHEME` if not specified.
     */
    launchModeAppleMaps?: string;
    /**
     * If true, and input location type(s) doesn't match those required by the app, use geocoding to obtain the address/coords as required. Defaults to true.
     */
    enableGeolocation?: boolean;
    /**
     * options related to the default native actionsheet picker which enables user to select which navigation app to launch if `app` is not specified.
     */
    appSelection?: AppSelectionOptions;
}
export interface UserChoice {
    /**
     * Indicates whether a user choice exists for a preferred navigator app.
     * @param callback - function to pass result to: will receive a boolean argument.
     */
    exists: (callback: (exists: boolean) => void) => void;
    /**
     * Returns current user choice of preferred navigator app.
     * @param callback - function to pass result to: will receive a string argument indicating the app, which is a constant in `launchnavigator.APP`.
     */
    get: (callback: (app: string) => void) => void;
    /**
     * Sets the current user choice of preferred navigator app.
     * @param app - app to set as preferred choice as a constant in `launchnavigator.APP`.
     * @param callback - function to call once operation is complete.
     */
    set: (app: string, callback: () => void) => void;
    /**
     * Clears the current user choice of preferred navigator app.
     * @param callback - function to call once operation is complete.
     */
    clear: (callback: () => void) => void;
}
export interface UserPrompted {
    /**
     * Indicates whether user has already been prompted whether to remember their choice a preferred navigator app.
     * @param callback - function to pass result to: will receive a boolean argument.
     */
    get: (callback: (exists: boolean) => void) => void;
    /**
     * Sets flag indicating user has already been prompted whether to remember their choice a preferred navigator app.
     * @param callback - function to call once operation is complete.
     */
    set: (callback: () => void) => void;
    /**
     * Clears flag which indicates if user has already been prompted whether to remember their choice a preferred navigator app.
     * @param callback - function to call once operation is complete.
     */
    clear: (callback: () => void) => void;
}
export interface AppSelection {
    userChoice: UserChoice;
    userPrompted: UserPrompted;
}
/**
 * @name Launch Navigator
 * @description
 * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
 *
 * @usage
 * Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.
 *
 * ```typescript
 * import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
 *
 * constructor(private launchNavigator: LaunchNavigator) { }
 *
 * ...
 *
 * let options: LaunchNavigatorOptions = {
 *   start: 'London, ON',
 *   app: LaunchNavigator.APPS.UBER
 * }
 *
 * this.launchNavigator.navigate('Toronto, ON', options)
 *   .then(
 *     success => console.log('Launched navigator'),
 *     error => console.log('Error launching navigator', error)
 *   );
 * ```
 * @interfaces
 * LaunchNavigatorOptions
 * PromptsOptions
 * RememberChoiceOptions
 * AppSelectionOptions
 * UserChoice
 * UserPrompted
 * AppSelection
 */
export declare class LaunchNavigator extends IonicNativePlugin {
    APP: any;
    TRANSPORT_MODE: any;
    appSelection: AppSelection;
    /**
     * Launches navigator app
     * @param destination {string|number[]} Location name or coordinates (as string or array)
     * @param options {LaunchNavigatorOptions}
     * @returns {Promise<any>}
     */
    navigate(destination: string | number[], options?: LaunchNavigatorOptions): Promise<any>;
    /**
     * Determines if the given app is installed and available on the current device.
     * @param app {string}
     * @returns {Promise<any>}
     */
    isAppAvailable(app: string): Promise<any>;
    /**
     * Returns a list indicating which apps are installed and available on the current device.
     * @returns {Promise<string[]>}
     */
    availableApps(): Promise<string[]>;
    /**
     * Returns the display name of the specified app.
     * @param app {string}
     * @returns {string}
     */
    getAppDisplayName(app: string): string;
    /**
     * Returns list of supported apps on a given platform.
     * @param platform {string}
     * @returns {string[]}
     */
    getAppsForPlatform(platform: string): string[];
    /**
     * Indicates if an app on a given platform supports specification of transport mode.
     * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
     * @param platform {string}
     * @returns {boolean}
     */
    supportsTransportMode(app: string, platform: string): boolean;
    /**
     * Returns the list of transport modes supported by an app on a given platform.
     * @param app {string}
     * @param platform {string}
     * @returns {string[]}
     */
    getTransportModes(app: string, platform: string): string[];
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    supportsDestName(app: string, platform: string): boolean;
    /**
     * Indicates if an app on a given platform supports specification of start location.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    supportsStart(app: string, platform: string): boolean;
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    supportsStartName(app: string, platform: string): boolean;
    /**
     * Indicates if an app on a given platform supports specification of launch mode.
     * Note that currently only Google Maps on Android does.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    supportsLaunchMode(app: string, platform: string): boolean;
    /**
     * @param destination {string | number[]}
     * @param options {LaunchNavigatorOptions}
     */
    userSelect(destination: string | number[], options: LaunchNavigatorOptions): void;
}