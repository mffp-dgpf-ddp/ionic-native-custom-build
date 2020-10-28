import { IonicNativePlugin } from '@ionic-native/core';
export declare class HyperTrackPluginOriginal extends IonicNativePlugin {
    initialize(publishableKey: string): Promise<HyperTrackCordova>;
    enableDebugLogging(): Promise<any>;
}
interface DeviceIdReceiver {
    (deviceId: string): any;
}
interface TrackingStateReceiver {
    (isRunning: boolean): any;
}
interface FailureHandler {
    (error: Error): any;
}
interface SuccessHandler {
    (): any;
}
interface HyperTrackCordova {
    getDeviceId(success: DeviceIdReceiver, error: FailureHandler): void;
    isRunning(success: TrackingStateReceiver, error: FailureHandler): void;
    setDeviceName(name: string, success: SuccessHandler, error: FailureHandler): void;
    setDeviceMetadata(metadata: Object, success: SuccessHandler, error: FailureHandler): void;
    setTrackingNotificationProperties(title: string, message: string, success: SuccessHandler, error: FailureHandler): void;
    addGeoTag(geotagData: Object, expectedLocation: Coordinates, success: SuccessHandler, error: FailureHandler): void;
    requestPermissionsIfNecessary(success: SuccessHandler, error: FailureHandler): void;
    allowMockLocations(success: SuccessHandler, error: FailureHandler): void;
    syncDeviceSettings(success: SuccessHandler, error: FailureHandler): void;
}
export declare class CoordinatesValidationError extends Error {
}
/** Wrapper class for passing spatial geoposition as a geotag's expected location */
export declare class Coordinates {
    constructor(latitude: number, longitude: number);
}
/**
 * @usage
 * ```typescript
 *   import { HyperTrack } from '@ionic-native/hyper-track';
 *
 *   initializeHypertrack() {
 *     HyperTrack.enableDebugLogging();
 *     HyperTrack.initialize('YOUR_PUBLISHING_KEY')
 *     .then( this.onSdkInstanceReceived )
 *     .catch( (err) => console.error("HyperTrack init failed with error " + err) );
 *   }
 *   onSdkInstanceReceived(sdkInstance: HyperTrack) {
 *       sdkInstance.getDeviceId()
 *      .then((id) => console.log("Got device id " + id))
 *      .then(() => sdkInstance.setDeviceName("Elvis Ionic"))
 *      .then(() => console.log("Device name was changed"))
 *      .then(() => sdkInstance.setDeviceMetadata({platform: "Ionic Android"}))
 *      .then(() => console.log("Device metadata was changed"))
 *      .then(() => sdkInstance.setTrackingNotificationProperties("Tracking On", "Ionic SDK is tracking"))
 *      .then(() => console.log("Notification properties were changed"))
 *      .catch((err) => console.error("Got error in HyperTrack " + err));
 *   }
 *
 * ```
 *
 */
export declare class HyperTrack {
    private cordovaInstanceHandle;
    /** Enables debug log in native HyperTrack SDK. */
    static enableDebugLogging(): void;
    /**
     * Entry point into SDK.
     *
     * Initializes SDK. Also resolves SDK instance that could be used to query deviceId or set
     * various data.
     * @param publishableKey account-specific secret from the HyperTrack dashborad.
     *
     * @see {@link https://dashboard.hypertrack.com/setup}.
     */
    static initialize(publishableKey: string): Promise<HyperTrack>;
    /** Resolves device ID that could be used to identify the device. */
    getDeviceId(): Promise<string>;
    /** Resolves to true if tracking service is running and false otherwise */
    isRunning(): Promise<boolean>;
    /** Sets device name that could be used to identify the device in HyperTrack dashboard */
    setDeviceName(name: string): Promise<any>;
    /**
     * Use this to set additional properties, like segments, teams etc.
     * @param metadata key-value pais of properties.
     */
    setDeviceMetadata(metadata: Object): Promise<any>;
    /** Updates title and text in persistent notification, that appears when tracking is active.  */
    setTrackingNotificationProperties(title: string, message: string): Promise<any>;
    /** Adds special marker-like object to device timeline. */
    addGeotag(geotagData: Object, expectedLocation?: Coordinates): Promise<any>;
    /** Pops up permission request dialog, if permissions weren't granted before or does nothing otherwise. */
    requestPermissionsIfNecessary(): Promise<any>;
    /** Allows injecting false locations into the SDK, which ignores them by default. */
    allowMockLocations(): Promise<any>;
    /**
     * Synchronizes tracking state with platform model. This method is used to
     * harden platform2device communication channel.
     */
    syncDeviceSettings(): Promise<any>;
    private constructor();
}
export {};

export declare const HyperTrackPlugin: HyperTrackPluginOriginal;