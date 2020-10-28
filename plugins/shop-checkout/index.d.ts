import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name ShopCheckout
 * @description
 * This is a plugin that allows your Ionic app to use ShopChecout for Android.
 * Follow the offical documentation to setup this plugin correctly: https://developer.shoptopup.com/docs/shoptopup-for-cordovaphonegap
 *
 * @usage
 * ```typescript
 * import { ShopCheckout } from '@ionic-native/shop-checkout/ngx';
 *
 *
 * constructor(private shopCheckout: ShopCheckout) { }
 *
 * ...
 *
 * this.shopCheckout.registerAgent();
 * ...
 * this.shopCheckout.openProducts();
 *
 * ```
 */
export declare class ShopCheckoutOriginal extends IonicNativePlugin {
    /**
     * Register an agent
     * @param options {any} Options
     * @return {Promise<void>} Returns a promise
     */
    registerAgent(options: any): Promise<void>;
    /**
     * Open products view
     * @param options {any} Options
     * @return {Promise<void>} Returns a promise
     */
    openProducts(options: any): Promise<void>;
    /**
     * Open trannsactions view
     * @param options {any} Options
     * @return {Promise<void>} Returns a promise
     */
    openTransactions(options: any): Promise<void>;
    /**
     * @return {Promise<void>} Returns a promise
     */
    logout(options: any): Promise<void>;
    /**
     * @return {Promise<boolean>} Returns a promise
     */
    isInitialized(): Promise<boolean>;
}

export declare const ShopCheckout: ShopCheckoutOriginal;