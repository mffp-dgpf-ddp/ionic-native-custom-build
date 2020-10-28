import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var PayPal = /** @class */ (function (_super) {
    __extends(PayPal, _super);
    function PayPal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayPal.prototype.version = function () { return cordova(this, "version", {}, arguments); };
    PayPal.prototype.init = function (clientIdsForEnvironments) { return cordova(this, "init", {}, arguments); };
    PayPal.prototype.prepareToRender = function (environment, configuration) { return cordova(this, "prepareToRender", {}, arguments); };
    PayPal.prototype.renderSinglePaymentUI = function (payment) { return cordova(this, "renderSinglePaymentUI", {}, arguments); };
    PayPal.prototype.clientMetadataID = function () { return cordova(this, "clientMetadataID", {}, arguments); };
    PayPal.prototype.renderFuturePaymentUI = function () { return cordova(this, "renderFuturePaymentUI", {}, arguments); };
    PayPal.prototype.renderProfileSharingUI = function (scopes) { return cordova(this, "renderProfileSharingUI", {}, arguments); };
    PayPal.pluginName = "PayPal";
    PayPal.plugin = "com.paypal.cordova.mobilesdk";
    PayPal.pluginRef = "PayPalMobile";
    PayPal.repo = "https://github.com/paypal/PayPal-Cordova-Plugin";
    PayPal.platforms = ["Android", "iOS"];
    PayPal = __decorate([
        Injectable()
    ], PayPal);
    return PayPal;
}(IonicNativePlugin));
export { PayPal };
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment(amount, currency, shortDescription, intent, details) {
        /**
         * Optional Build Notation code ("BN code"), obtained from partnerprogram@paypal.com,
         * for your tracking purposes.
         */
        this.bnCode = 'PhoneGap_SP';
        this.amount = amount;
        this.currency = currency;
        this.shortDescription = shortDescription;
        this.intent = intent;
        this.details = details;
    }
    return PayPalPayment;
}());
export { PayPalPayment };
var PayPalItem = /** @class */ (function () {
    /**
     * The PayPalItem class defines an optional itemization for a payment.
     * @see https://developer.paypal.com/docs/api/#item-object for more details.
     * @param {String} name: Name of the item. 127 characters max
     * @param {Number} quantity: Number of units. 10 characters max.
     * @param {String} price: Unit price for this item 10 characters max.
     * May be negative for "coupon" etc
     * @param {String} currency: ISO standard currency code.
     * @param {String} sku: The stock keeping unit for this item. 50 characters max (optional)
     */
    function PayPalItem(name, quantity, price, currency, sku) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.currency = currency;
        this.sku = sku;
    }
    return PayPalItem;
}());
export { PayPalItem };
var PayPalPaymentDetails = /** @class */ (function () {
    /**
     * The PayPalPaymentDetails class defines optional amount details.
     * @param {String} subtotal: Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.
     * @param {String} shipping: Amount charged for shipping. 10 characters max with support for 2 decimal places.
     * @param {String} tax: Amount charged for tax. 10 characters max with support for 2 decimal places.
     */
    function PayPalPaymentDetails(subtotal, shipping, tax) {
        this.subtotal = subtotal;
        this.shipping = shipping;
        this.tax = tax;
    }
    return PayPalPaymentDetails;
}());
export { PayPalPaymentDetails };
var PayPalConfiguration = /** @class */ (function () {
    /**
     * You use a PayPalConfiguration object to configure many aspects of how the SDK behaves.
     * see defaults for options available
     */
    function PayPalConfiguration(options) {
        var defaults = {
            defaultUserEmail: null,
            defaultUserPhoneCountryCode: null,
            defaultUserPhoneNumber: null,
            merchantName: null,
            merchantPrivacyPolicyURL: null,
            merchantUserAgreementURL: null,
            acceptCreditCards: true,
            payPalShippingAddressOption: 0,
            rememberUser: true,
            languageOrLocale: null,
            disableBlurWhenBackgrounding: false,
            presentingInPopover: false,
            forceDefaultsInSandbox: false,
            sandboxUserPassword: null,
            sandboxUserPin: null,
        };
        if (options && typeof options === 'object') {
            for (var i in options) {
                if (defaults.hasOwnProperty(i)) {
                    defaults[i] = options[i];
                }
            }
        }
        return defaults;
    }
    return PayPalConfiguration;
}());
export { PayPalConfiguration };
var PayPalShippingAddress = /** @class */ (function () {
    /**
     * See the documentation of the individual properties for more detail.
     * @param {String} recipientName: Name of the recipient at this address. 50 characters max.
     * @param {String} line1: Line 1 of the address (e.g., Number, street, etc). 100 characters max.
     * @param {String} line2: Line 2 of the address (e.g., Suite, apt #, etc). 100 characters max. Optional.
     * @param {String} city: City name. 50 characters max.
     * @param {String} state: 2-letter code for US states, and the equivalent for other countries. 100 characters max. Required in certain countries.
     * @param {String} postalCode: ZIP code or equivalent is usually required for countries that have them. 20 characters max. Required in certain countries.
     * @param {String} countryCode: 2-letter country code. 2 characters max.
     */
    function PayPalShippingAddress(recipientName, line1, line2, city, state, postalCode, countryCode) {
        this.recipientName = recipientName;
        this.line1 = line1;
        this.line2 = line2;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.countryCode = countryCode;
    }
    return PayPalShippingAddress;
}());
export { PayPalShippingAddress };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3BheXBhbC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF5RTVDLDBCQUFpQjs7OztJQU0zQyx3QkFBTztJQWNQLHFCQUFJLGFBQUMsd0JBQTJDO0lBY2hELGdDQUFlLGFBQUMsV0FBbUIsRUFBRSxhQUFrQztJQWF2RSxzQ0FBcUIsYUFBQyxPQUFzQjtJQWU1QyxpQ0FBZ0I7SUFTaEIsc0NBQXFCO0lBWXJCLHVDQUFzQixhQUFDLE1BQWdCOzs7Ozs7SUFuRjVCLE1BQU07UUFEbEIsVUFBVSxFQUFFO09BQ0EsTUFBTTtpQkExRW5CO0VBMEU0QixpQkFBaUI7U0FBaEMsTUFBTTs7SUFpR2pCLHVCQUNFLE1BQWMsRUFDZCxRQUFnQixFQUNoQixnQkFBd0IsRUFDeEIsTUFBYyxFQUNkLE9BQThCO1FBeUJoQzs7O1dBR0c7UUFDSCxXQUFNLEdBQUcsYUFBYSxDQUFDO1FBM0JyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQzt3QkF2TEg7Ozs7SUFrUEU7Ozs7Ozs7OztPQVNHO0lBQ0gsb0JBQVksSUFBWSxFQUFFLFFBQWdCLEVBQUUsS0FBYSxFQUFFLFFBQWdCLEVBQUUsR0FBWTtRQUN2RixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO3FCQWxRSDs7OztJQTBTRTs7Ozs7T0FLRztJQUNILDhCQUFZLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxHQUFXO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7K0JBcFRIOzs7O0lBbWFFOzs7T0FHRztJQUNILDZCQUFZLE9BQW9DO1FBQzlDLElBQU0sUUFBUSxHQUErQjtZQUMzQyxnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLDJCQUEyQixFQUFFLElBQUk7WUFDakMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQix3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLHdCQUF3QixFQUFFLElBQUk7WUFDOUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QiwyQkFBMkIsRUFBRSxDQUFDO1lBQzlCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsNEJBQTRCLEVBQUUsS0FBSztZQUNuQyxtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLHNCQUFzQixFQUFFLEtBQUs7WUFDN0IsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDO1FBRUYsSUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQzFDLEtBQUssSUFBTSxDQUFDLElBQUksT0FBTyxFQUFFO2dCQUN2QixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzFCO2FBQ0Y7U0FDRjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OEJBbmNIOzs7O0lBMGNFOzs7Ozs7Ozs7T0FTRztJQUNILCtCQUNFLGFBQXFCLEVBQ3JCLEtBQWEsRUFDYixLQUFhLEVBQ2IsSUFBWSxFQUNaLEtBQWEsRUFDYixVQUFrQixFQUNsQixXQUFtQjtRQUVuQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO2dDQXBlSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgUGF5UGFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQYXlQYWwgcGx1Z2luIGZvciBDb3Jkb3ZhL0lvbmljIEFwcGxpY2F0aW9uc1xyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBQYXlQYWwsIFBheVBhbFBheW1lbnQsIFBheVBhbENvbmZpZ3VyYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3BheXBhbC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBheVBhbDogUGF5UGFsKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMucGF5UGFsLmluaXQoe1xyXG4gKiAgIFBheVBhbEVudmlyb25tZW50UHJvZHVjdGlvbjogJ1lPVVJfUFJPRFVDVElPTl9DTElFTlRfSUQnLFxyXG4gKiAgIFBheVBhbEVudmlyb25tZW50U2FuZGJveDogJ1lPVVJfU0FOREJPWF9DTElFTlRfSUQnXHJcbiAqIH0pLnRoZW4oKCkgPT4ge1xyXG4gKiAgIC8vIEVudmlyb25tZW50czogUGF5UGFsRW52aXJvbm1lbnROb05ldHdvcmssIFBheVBhbEVudmlyb25tZW50U2FuZGJveCwgUGF5UGFsRW52aXJvbm1lbnRQcm9kdWN0aW9uXHJcbiAqICAgdGhpcy5wYXlQYWwucHJlcGFyZVRvUmVuZGVyKCdQYXlQYWxFbnZpcm9ubWVudFNhbmRib3gnLCBuZXcgUGF5UGFsQ29uZmlndXJhdGlvbih7XHJcbiAqICAgICAvLyBPbmx5IG5lZWRlZCBpZiB5b3UgZ2V0IGFuIFwiSW50ZXJuYWwgU2VydmljZSBFcnJvclwiIGFmdGVyIFBheVBhbCBsb2dpbiFcclxuICogICAgIC8vcGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uOiAyIC8vIFBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvblBheVBhbFxyXG4gKiAgIH0pKS50aGVuKCgpID0+IHtcclxuICogICAgIGxldCBwYXltZW50ID0gbmV3IFBheVBhbFBheW1lbnQoJzMuMzMnLCAnVVNEJywgJ0Rlc2NyaXB0aW9uJywgJ3NhbGUnKTtcclxuICogICAgIHRoaXMucGF5UGFsLnJlbmRlclNpbmdsZVBheW1lbnRVSShwYXltZW50KS50aGVuKCgpID0+IHtcclxuICogICAgICAgLy8gU3VjY2Vzc2Z1bGx5IHBhaWRcclxuICpcclxuICogICAgICAgLy8gRXhhbXBsZSBzYW5kYm94IHJlc3BvbnNlXHJcbiAqICAgICAgIC8vXHJcbiAqICAgICAgIC8vIHtcclxuICogICAgICAgLy8gICBcImNsaWVudFwiOiB7XHJcbiAqICAgICAgIC8vICAgICBcImVudmlyb25tZW50XCI6IFwic2FuZGJveFwiLFxyXG4gKiAgICAgICAvLyAgICAgXCJwcm9kdWN0X25hbWVcIjogXCJQYXlQYWwgaU9TIFNES1wiLFxyXG4gKiAgICAgICAvLyAgICAgXCJwYXlwYWxfc2RrX3ZlcnNpb25cIjogXCIyLjE2LjBcIixcclxuICogICAgICAgLy8gICAgIFwicGxhdGZvcm1cIjogXCJpT1NcIlxyXG4gKiAgICAgICAvLyAgIH0sXHJcbiAqICAgICAgIC8vICAgXCJyZXNwb25zZV90eXBlXCI6IFwicGF5bWVudFwiLFxyXG4gKiAgICAgICAvLyAgIFwicmVzcG9uc2VcIjoge1xyXG4gKiAgICAgICAvLyAgICAgXCJpZFwiOiBcIlBBWS0xQUIyMzQ1NkNENzg5MDEyRUYzNEdISUpcIixcclxuICogICAgICAgLy8gICAgIFwic3RhdGVcIjogXCJhcHByb3ZlZFwiLFxyXG4gKiAgICAgICAvLyAgICAgXCJjcmVhdGVfdGltZVwiOiBcIjIwMTYtMTAtMDNUMTM6MzM6MzNaXCIsXHJcbiAqICAgICAgIC8vICAgICBcImludGVudFwiOiBcInNhbGVcIlxyXG4gKiAgICAgICAvLyAgIH1cclxuICogICAgICAgLy8gfVxyXG4gKiAgICAgfSwgKCkgPT4ge1xyXG4gKiAgICAgICAvLyBFcnJvciBvciByZW5kZXIgZGlhbG9nIGNsb3NlZCB3aXRob3V0IGJlaW5nIHN1Y2Nlc3NmdWxcclxuICogICAgIH0pO1xyXG4gKiAgIH0sICgpID0+IHtcclxuICogICAgIC8vIEVycm9yIGluIGNvbmZpZ3VyYXRpb25cclxuICogICB9KTtcclxuICogfSwgKCkgPT4ge1xyXG4gKiAgIC8vIEVycm9yIGluIGluaXRpYWxpemF0aW9uLCBtYXliZSBQYXlQYWwgaXNuJ3Qgc3VwcG9ydGVkIG9yIHNvbWV0aGluZyBlbHNlXHJcbiAqIH0pO1xyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogUGF5UGFsRW52aXJvbm1lbnRcclxuICogUGF5UGFsQ29uZmlndXJhdGlvbk9wdGlvbnNcclxuICogQGNsYXNzZXNcclxuICogUGF5UGFsUGF5bWVudFxyXG4gKiBQYXlQYWxJdGVtXHJcbiAqIFBheVBhbFBheW1lbnREZXRhaWxzXHJcbiAqIFBheVBhbFNoaXBwaW5nQWRkcmVzc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1BheVBhbCcsXHJcbiAgcGx1Z2luOiAnY29tLnBheXBhbC5jb3Jkb3ZhLm1vYmlsZXNkaycsXHJcbiAgcGx1Z2luUmVmOiAnUGF5UGFsTW9iaWxlJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3BheXBhbC9QYXlQYWwtQ29yZG92YS1QbHVnaW4nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQYXlQYWwgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgdGhlIHZlcnNpb24gb2YgdGhlIFBheVBhbCBpT1MgU0RLIGxpYnJhcnkuIFVzZWZ1bCB3aGVuIGNvbnRhY3Rpbmcgc3VwcG9ydC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB2ZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBZb3UgbXVzdCBwcmVjb25uZWN0IHRvIFBheVBhbCB0byBwcmVwYXJlIHRoZSBkZXZpY2UgZm9yIHByb2Nlc3NpbmcgcGF5bWVudHMuXHJcbiAgICogVGhpcyBpbXByb3ZlcyB0aGUgdXNlciBleHBlcmllbmNlLCBieSBtYWtpbmcgdGhlIHByZXNlbnRhdGlvbiBvZiB0aGVcclxuICAgKiBVSSBmYXN0ZXIuIFRoZSBwcmVjb25uZWN0IGlzIHZhbGlkIGZvciBhIGxpbWl0ZWQgdGltZSwgc29cclxuICAgKiB0aGUgcmVjb21tZW5kZWQgdGltZSB0byBwcmVjb25uZWN0IGlzIG9uIHBhZ2UgbG9hZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7UGF5UGFsRW52aXJvbm1lbnR9IGNsaWVudElkc0ZvckVudmlyb25tZW50czogc2V0IG9mIGNsaWVudCBpZHMgZm9yIGVudmlyb25tZW50c1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGluaXQoY2xpZW50SWRzRm9yRW52aXJvbm1lbnRzOiBQYXlQYWxFbnZpcm9ubWVudCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBZb3UgbXVzdCBwcmVjb25uZWN0IHRvIFBheVBhbCB0byBwcmVwYXJlIHRoZSBkZXZpY2UgZm9yIHByb2Nlc3NpbmcgcGF5bWVudHMuXHJcbiAgICogVGhpcyBpbXByb3ZlcyB0aGUgdXNlciBleHBlcmllbmNlLCBieSBtYWtpbmcgdGhlIHByZXNlbnRhdGlvbiBvZiB0aGUgVUkgZmFzdGVyLlxyXG4gICAqIFRoZSBwcmVjb25uZWN0IGlzIHZhbGlkIGZvciBhIGxpbWl0ZWQgdGltZSwgc28gdGhlIHJlY29tbWVuZGVkIHRpbWUgdG8gcHJlY29ubmVjdCBpcyBvbiBwYWdlIGxvYWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZW52aXJvbm1lbnQ6IGF2YWlsYWJsZSBvcHRpb25zIGFyZSBcIlBheVBhbEVudmlyb25tZW50Tm9OZXR3b3JrXCIsIFwiUGF5UGFsRW52aXJvbm1lbnRQcm9kdWN0aW9uXCIgYW5kIFwiUGF5UGFsRW52aXJvbm1lbnRTYW5kYm94XCJcclxuICAgKiBAcGFyYW0ge1BheVBhbENvbmZpZ3VyYXRpb259IGNvbmZpZ3VyYXRpb246IFBheVBhbENvbmZpZ3VyYXRpb24gb2JqZWN0LCBmb3IgRnV0dXJlIFBheW1lbnRzIG1lcmNoYW50TmFtZSwgbWVyY2hhbnRQcml2YWN5UG9saWN5VVJMIGFuZCBtZXJjaGFudFVzZXJBZ3JlZW1lbnRVUkwgbXVzdCBiZSBzZXQgYmUgc2V0XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcHJlcGFyZVRvUmVuZGVyKGVudmlyb25tZW50OiBzdHJpbmcsIGNvbmZpZ3VyYXRpb246IFBheVBhbENvbmZpZ3VyYXRpb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgUGF5UGFsIFVJIHRvIGNvbGxlY3QgcGF5bWVudCBmcm9tIHRoZSB1c2VyLlxyXG4gICAqIFNlZSBodHRwczovL2RldmVsb3Blci5wYXlwYWwuY29tL3dlYmFwcHMvZGV2ZWxvcGVyL2RvY3MvaW50ZWdyYXRpb24vbW9iaWxlL2lvcy1pbnRlZ3JhdGlvbi1ndWlkZS9cclxuICAgKiBmb3IgbW9yZSBkb2N1bWVudGF0aW9uIG9mIHRoZSBwYXJhbXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1BheVBhbFBheW1lbnR9IHBheW1lbnQgUGF5UGFsUGF5bWVudCBvYmplY3RcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZW5kZXJTaW5nbGVQYXltZW50VUkocGF5bWVudDogUGF5UGFsUGF5bWVudCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPbmNlIGEgdXNlciBoYXMgY29uc2VudGVkIHRvIGZ1dHVyZSBwYXltZW50cywgd2hlbiB0aGUgdXNlciBzdWJzZXF1ZW50bHkgaW5pdGlhdGVzIGEgUGF5UGFsIHBheW1lbnRcclxuICAgKiBmcm9tIHRoZWlyIGRldmljZSB0byBiZSBjb21wbGV0ZWQgYnkgeW91ciBzZXJ2ZXIsIFBheVBhbCB1c2VzIGEgQ29ycmVsYXRpb24gSUQgdG8gdmVyaWZ5IHRoYXQgdGhlXHJcbiAgICogcGF5bWVudCBpcyBvcmlnaW5hdGluZyBmcm9tIGEgdmFsaWQsIHVzZXItY29uc2VudGVkIGRldmljZSthcHBsaWNhdGlvbi5cclxuICAgKiBUaGlzIGhlbHBzIHJlZHVjZSBmcmF1ZCBhbmQgZGVjcmVhc2UgZGVjbGluZXMuXHJcbiAgICogVGhpcyBtZXRob2QgTVVTVCBiZSBjYWxsZWQgcHJpb3IgdG8gaW5pdGlhdGluZyBhIHByZS1jb25zZW50ZWQgcGF5bWVudCAoYSBcImZ1dHVyZSBwYXltZW50XCIpIGZyb20gYSBtb2JpbGUgZGV2aWNlLlxyXG4gICAqIFBhc3MgdGhlIHJlc3VsdCB0byB5b3VyIHNlcnZlciwgdG8gaW5jbHVkZSBpbiB0aGUgcGF5bWVudCByZXF1ZXN0IHNlbnQgdG8gUGF5UGFsLlxyXG4gICAqIERvIG5vdCBvdGhlcndpc2UgY2FjaGUgb3Igc3RvcmUgdGhpcyB2YWx1ZS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjbGllbnRNZXRhZGF0YUlEKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQbGVhc2UgUmVhZCBEb2NzIG9uIEZ1dHVyZSBQYXltZW50cyBhdCBodHRwczovL2dpdGh1Yi5jb20vcGF5cGFsL1BheVBhbC1pT1MtU0RLI2Z1dHVyZS1wYXltZW50c1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlbmRlckZ1dHVyZVBheW1lbnRVSSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGxlYXNlIFJlYWQgRG9jcyBvbiBQcm9maWxlIFNoYXJpbmcgYXQgaHR0cHM6Ly9naXRodWIuY29tL3BheXBhbC9QYXlQYWwtaU9TLVNESyNwcm9maWxlLXNoYXJpbmdcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHNjb3BlcyBzY29wZXMgU2V0IG9mIHJlcXVlc3RlZCBzY29wZS12YWx1ZXMuIEFjY2VwdGVkIHNjb3BlcyBhcmU6IG9wZW5pZCwgcHJvZmlsZSwgYWRkcmVzcywgZW1haWwsIHBob25lLCBmdXR1cmVwYXltZW50cyBhbmQgcGF5cGFsYXR0cmlidXRlc1xyXG4gICAqIFNlZSBodHRwczovL2RldmVsb3Blci5wYXlwYWwuY29tL2RvY3MvaW50ZWdyYXRpb24vZGlyZWN0L2lkZW50aXR5L2F0dHJpYnV0ZXMvIGZvciBtb3JlIGRldGFpbHNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZW5kZXJQcm9maWxlU2hhcmluZ1VJKHNjb3Blczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXlQYWxFbnZpcm9ubWVudCB7XHJcbiAgUGF5UGFsRW52aXJvbm1lbnRQcm9kdWN0aW9uOiBzdHJpbmc7XHJcbiAgUGF5UGFsRW52aXJvbm1lbnRTYW5kYm94OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGF5UGFsUGF5bWVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBhbW91bnQ6IHN0cmluZyxcclxuICAgIGN1cnJlbmN5OiBzdHJpbmcsXHJcbiAgICBzaG9ydERlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICBpbnRlbnQ6IHN0cmluZyxcclxuICAgIGRldGFpbHM/OiBQYXlQYWxQYXltZW50RGV0YWlsc1xyXG4gICkge1xyXG4gICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XHJcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XHJcbiAgICB0aGlzLnNob3J0RGVzY3JpcHRpb24gPSBzaG9ydERlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5pbnRlbnQgPSBpbnRlbnQ7XHJcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGFtb3VudCBvZiB0aGUgcGF5bWVudC5cclxuICAgKi9cclxuICBhbW91bnQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBUaGUgSVNPIDQyMTcgY3VycmVuY3kgZm9yIHRoZSBwYXltZW50LlxyXG4gICAqL1xyXG4gIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcGF5bWVudC5cclxuICAgKi9cclxuICBzaG9ydERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogXCJTYWxlXCIgZm9yIGFuIGltbWVkaWF0ZSBwYXltZW50LlxyXG4gICAqL1xyXG4gIGludGVudDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIEJ1aWxkIE5vdGF0aW9uIGNvZGUgKFwiQk4gY29kZVwiKSwgb2J0YWluZWQgZnJvbSBwYXJ0bmVycHJvZ3JhbUBwYXlwYWwuY29tLFxyXG4gICAqIGZvciB5b3VyIHRyYWNraW5nIHB1cnBvc2VzLlxyXG4gICAqL1xyXG4gIGJuQ29kZSA9ICdQaG9uZUdhcF9TUCc7XHJcbiAgLyoqXHJcbiAgICogT3B0aW9uYWwgaW52b2ljZSBudW1iZXIsIGZvciB5b3VyIHRyYWNraW5nIHB1cnBvc2VzLiAodXAgdG8gMjU2IGNoYXJhY3RlcnMpXHJcbiAgICovXHJcbiAgaW52b2ljZU51bWJlcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIHRleHQsIGZvciB5b3VyIHRyYWNraW5nIHB1cnBvc2VzLiAodXAgdG8gMjU2IGNoYXJhY3RlcnMpXHJcbiAgICovXHJcbiAgY3VzdG9tOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogT3B0aW9uYWwgdGV4dCB3aGljaCB3aWxsIGFwcGVhciBvbiB0aGUgY3VzdG9tZXIncyBjcmVkaXQgY2FyZCBzdGF0ZW1lbnQuICh1cCB0byAyMiBjaGFyYWN0ZXJzKVxyXG4gICAqL1xyXG4gIHNvZnREZXNjcmlwdG9yOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogT3B0aW9uYWwgYXJyYXkgb2YgUGF5UGFsSXRlbSBvYmplY3RzLlxyXG4gICAqL1xyXG4gIGl0ZW1zOiBQYXlQYWxJdGVtW107XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIHBheWVlIGVtYWlsLCBpZiB5b3VyIGFwcCBpcyBwYXlpbmcgYSB0aGlyZC1wYXJ0eSBtZXJjaGFudC5cclxuICAgKiBUaGUgcGF5ZWUncyBlbWFpbC4gSXQgbXVzdCBiZSBhIHZhbGlkIFBheVBhbCBlbWFpbCBhZGRyZXNzLlxyXG4gICAqL1xyXG4gIHBheWVlRW1haWw6IHN0cmluZztcclxuICAvKipcclxuICAgKiBPcHRpb25hbCBjdXN0b21lciBzaGlwcGluZyBhZGRyZXNzLCBpZiB5b3VyIGFwcCB3aXNoZXMgdG8gcHJvdmlkZSB0aGlzIHRvIHRoZSBTREsuXHJcbiAgICovXHJcbiAgc2hpcHBpbmdBZGRyZXNzOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogT3B0aW9uYWwgUGF5UGFsUGF5bWVudERldGFpbHMgb2JqZWN0XHJcbiAgICovXHJcbiAgZGV0YWlsczogUGF5UGFsUGF5bWVudERldGFpbHM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGF5UGFsSXRlbSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIFBheVBhbEl0ZW0gY2xhc3MgZGVmaW5lcyBhbiBvcHRpb25hbCBpdGVtaXphdGlvbiBmb3IgYSBwYXltZW50LlxyXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIucGF5cGFsLmNvbS9kb2NzL2FwaS8jaXRlbS1vYmplY3QgZm9yIG1vcmUgZGV0YWlscy5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZTogTmFtZSBvZiB0aGUgaXRlbS4gMTI3IGNoYXJhY3RlcnMgbWF4XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHF1YW50aXR5OiBOdW1iZXIgb2YgdW5pdHMuIDEwIGNoYXJhY3RlcnMgbWF4LlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcmljZTogVW5pdCBwcmljZSBmb3IgdGhpcyBpdGVtIDEwIGNoYXJhY3RlcnMgbWF4LlxyXG4gICAqIE1heSBiZSBuZWdhdGl2ZSBmb3IgXCJjb3Vwb25cIiBldGNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY3VycmVuY3k6IElTTyBzdGFuZGFyZCBjdXJyZW5jeSBjb2RlLlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBza3U6IFRoZSBzdG9jayBrZWVwaW5nIHVuaXQgZm9yIHRoaXMgaXRlbS4gNTAgY2hhcmFjdGVycyBtYXggKG9wdGlvbmFsKVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlciwgcHJpY2U6IHN0cmluZywgY3VycmVuY3k6IHN0cmluZywgc2t1Pzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xyXG4gICAgdGhpcy5za3UgPSBza3U7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIE5hbWUgb2YgdGhlIGl0ZW0uIDEyNyBjaGFyYWN0ZXJzIG1heFxyXG4gICAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBOdW1iZXIgb2YgdW5pdHMuIDEwIGNoYXJhY3RlcnMgbWF4LlxyXG4gICAqL1xyXG4gIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVW5pdCBwcmljZSBmb3IgdGhpcyBpdGVtIDEwIGNoYXJhY3RlcnMgbWF4LlxyXG4gICAqL1xyXG4gIHByaWNlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogSVNPIHN0YW5kYXJkIGN1cnJlbmN5IGNvZGUuXHJcbiAgICovXHJcbiAgY3VycmVuY3k6IHN0cmluZztcclxuICAvKipcclxuICAgKiBUaGUgc3RvY2sga2VlcGluZyB1bml0IGZvciB0aGlzIGl0ZW0uIDUwIGNoYXJhY3RlcnMgbWF4IChvcHRpb25hbClcclxuICAgKi9cclxuICBza3U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGF5UGFsUGF5bWVudERldGFpbHMge1xyXG4gIC8qKlxyXG4gICAqIFN1Yi10b3RhbCAoYW1vdW50KSBvZiBpdGVtcyBiZWluZyBwYWlkIGZvci4gMTAgY2hhcmFjdGVycyBtYXggd2l0aCBzdXBwb3J0IGZvciAyIGRlY2ltYWwgcGxhY2VzLlxyXG4gICAqL1xyXG4gIHN1YnRvdGFsOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQW1vdW50IGNoYXJnZWQgZm9yIHNoaXBwaW5nLiAxMCBjaGFyYWN0ZXJzIG1heCB3aXRoIHN1cHBvcnQgZm9yIDIgZGVjaW1hbCBwbGFjZXMuXHJcbiAgICovXHJcbiAgc2hpcHBpbmc6IHN0cmluZztcclxuICAvKipcclxuICAgKiBBbW91bnQgY2hhcmdlZCBmb3IgdGF4LiAxMCBjaGFyYWN0ZXJzIG1heCB3aXRoIHN1cHBvcnQgZm9yIDIgZGVjaW1hbCBwbGFjZXMuXHJcbiAgICovXHJcbiAgdGF4OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBQYXlQYWxQYXltZW50RGV0YWlscyBjbGFzcyBkZWZpbmVzIG9wdGlvbmFsIGFtb3VudCBkZXRhaWxzLlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdWJ0b3RhbDogU3ViLXRvdGFsIChhbW91bnQpIG9mIGl0ZW1zIGJlaW5nIHBhaWQgZm9yLiAxMCBjaGFyYWN0ZXJzIG1heCB3aXRoIHN1cHBvcnQgZm9yIDIgZGVjaW1hbCBwbGFjZXMuXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNoaXBwaW5nOiBBbW91bnQgY2hhcmdlZCBmb3Igc2hpcHBpbmcuIDEwIGNoYXJhY3RlcnMgbWF4IHdpdGggc3VwcG9ydCBmb3IgMiBkZWNpbWFsIHBsYWNlcy5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdGF4OiBBbW91bnQgY2hhcmdlZCBmb3IgdGF4LiAxMCBjaGFyYWN0ZXJzIG1heCB3aXRoIHN1cHBvcnQgZm9yIDIgZGVjaW1hbCBwbGFjZXMuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc3VidG90YWw6IHN0cmluZywgc2hpcHBpbmc6IHN0cmluZywgdGF4OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3VidG90YWwgPSBzdWJ0b3RhbDtcclxuICAgIHRoaXMuc2hpcHBpbmcgPSBzaGlwcGluZztcclxuICAgIHRoaXMudGF4ID0gdGF4O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGF5UGFsQ29uZmlndXJhdGlvbk9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgYmUgb3ZlcnJpZGRlbiBieSBlbWFpbCB1c2VkIGluIG1vc3QgcmVjZW50IFBheVBhbCBsb2dpbi5cclxuICAgKi9cclxuICBkZWZhdWx0VXNlckVtYWlsPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgYmUgb3ZlcnJpZGRlbiBieSBwaG9uZSBjb3VudHJ5IGNvZGUgdXNlZCBpbiBtb3N0IHJlY2VudCBQYXlQYWwgbG9naW5cclxuICAgKi9cclxuICBkZWZhdWx0VXNlclBob25lQ291bnRyeUNvZGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogV2lsbCBiZSBvdmVycmlkZGVuIGJ5IHBob25lIG51bWJlciB1c2VkIGluIG1vc3QgcmVjZW50IFBheVBhbCBsb2dpbi5cclxuICAgKi9cclxuICBkZWZhdWx0VXNlclBob25lTnVtYmVyPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFlvdXIgY29tcGFueSBuYW1lLCBhcyBpdCBzaG91bGQgYmUgZGlzcGxheWVkIHRvIHRoZSB1c2VyIHdoZW4gcmVxdWVzdGluZyBjb25zZW50IHZpYSBhIFBheVBhbEZ1dHVyZVBheW1lbnRWaWV3Q29udHJvbGxlci5cclxuICAgKi9cclxuICBtZXJjaGFudE5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVVJMIG9mIHlvdXIgY29tcGFueSdzIHByaXZhY3kgcG9saWN5LCB3aGljaCB3aWxsIGJlIG9mZmVyZWQgdG8gdGhlIHVzZXIgd2hlbiByZXF1ZXN0aW5nIGNvbnNlbnQgdmlhIGEgUGF5UGFsRnV0dXJlUGF5bWVudFZpZXdDb250cm9sbGVyLlxyXG4gICAqL1xyXG4gIG1lcmNoYW50UHJpdmFjeVBvbGljeVVSTD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBVUkwgb2YgeW91ciBjb21wYW55J3MgdXNlciBhZ3JlZW1lbnQsIHdoaWNoIHdpbGwgYmUgb2ZmZXJlZCB0byB0aGUgdXNlciB3aGVuIHJlcXVlc3RpbmcgY29uc2VudCB2aWEgYSBQYXlQYWxGdXR1cmVQYXltZW50Vmlld0NvbnRyb2xsZXIuXHJcbiAgICovXHJcbiAgbWVyY2hhbnRVc2VyQWdyZWVtZW50VVJMPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIElmIHNldCB0byBOTywgdGhlIFNESyB3aWxsIG9ubHkgc3VwcG9ydCBwYXlpbmcgd2l0aCBQYXlQYWwsIG5vdCB3aXRoIGNyZWRpdCBjYXJkcy5cclxuICAgKiBUaGlzIGFwcGxpZXMgb25seSB0byBzaW5nbGUgcGF5bWVudHMgKHZpYSBQYXlQYWxQYXltZW50Vmlld0NvbnRyb2xsZXIpLlxyXG4gICAqIEZ1dHVyZSBwYXltZW50cyAodmlhIFBheVBhbEZ1dHVyZVBheW1lbnRWaWV3Q29udHJvbGxlcikgYWx3YXlzIHVzZSBQYXlQYWwuXHJcbiAgICogRGVmYXVsdHMgdG8gdHJ1ZVxyXG4gICAqL1xyXG4gIGFjY2VwdENyZWRpdENhcmRzPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBGb3Igc2luZ2xlIHBheW1lbnRzLCBvcHRpb25zIGZvciB0aGUgc2hpcHBpbmcgYWRkcmVzcy5cclxuICAgKiAtIDAgLSBQYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb25Ob25lOiBubyBzaGlwcGluZyBhZGRyZXNzIGFwcGxpZXMuXHJcbiAgICogLSAxIC0gUGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uUHJvdmlkZWQ6IHNoaXBwaW5nIGFkZHJlc3Mgd2lsbCBiZSBwcm92aWRlZCBieSB5b3VyIGFwcCxcclxuICAgKiAgIGluIHRoZSBzaGlwcGluZ0FkZHJlc3MgcHJvcGVydHkgb2YgUGF5UGFsUGF5bWVudC5cclxuICAgKiAtIDIgLSBQYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb25QYXlQYWw6IHVzZXIgd2lsbCBjaG9vc2UgZnJvbSBzaGlwcGluZyBhZGRyZXNzZXMgb24gZmlsZVxyXG4gICAqICAgZm9yIHRoZWlyIFBheVBhbCBhY2NvdW50LlxyXG4gICAqIC0gMyAtIFBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvbkJvdGg6IHVzZXIgd2lsbCBjaG9vc2UgZnJvbSB0aGUgc2hpcHBpbmcgYWRkcmVzcyBwcm92aWRlZCBieSB5b3VyIGFwcCxcclxuICAgKiAgIGluIHRoZSBzaGlwcGluZ0FkZHJlc3MgcHJvcGVydHkgb2YgUGF5UGFsUGF5bWVudCwgcGx1cyB0aGUgc2hpcHBpbmcgYWRkcmVzc2VzIG9uIGZpbGUgZm9yIHRoZSB1c2VyJ3MgUGF5UGFsIGFjY291bnQuXHJcbiAgICogRGVmYXVsdHMgdG8gMCAoUGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uTm9uZSkuXHJcbiAgICovXHJcbiAgcGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIElmIHNldCB0byBZRVMsIHRoZW4gaWYgdGhlIHVzZXIgcGF5cyB2aWEgdGhlaXIgUGF5UGFsIGFjY291bnQsXHJcbiAgICogdGhlIFNESyB3aWxsIHJlbWVtYmVyIHRoZSB1c2VyJ3MgUGF5UGFsIHVzZXJuYW1lIG9yIHBob25lIG51bWJlcjtcclxuICAgKiBpZiB0aGUgdXNlciBwYXlzIHZpYSB0aGVpciBjcmVkaXQgY2FyZCwgdGhlbiB0aGUgU0RLIHdpbGwgcmVtZW1iZXJcclxuICAgKiB0aGUgUGF5UGFsIFZhdWx0IHRva2VuIHJlcHJlc2VudGluZyB0aGUgdXNlcidzIGNyZWRpdCBjYXJkLlxyXG4gICAqXHJcbiAgICogSWYgc2V0IHRvIE5PLCB0aGVuIGFueSBwcmV2aW91c2x5LXJlbWVtYmVyZWQgdXNlcm5hbWUsIHBob25lIG51bWJlciwgb3JcclxuICAgKiBjcmVkaXQgY2FyZCB0b2tlbiB3aWxsIGJlIGVyYXNlZCwgYW5kIHN1YnNlcXVlbnQgcGF5bWVudCBpbmZvcm1hdGlvbiB3aWxsXHJcbiAgICogbm90IGJlIHJlbWVtYmVyZWQuXHJcbiAgICpcclxuICAgKiBEZWZhdWx0cyB0byBZRVMuXHJcbiAgICovXHJcbiAgcmVtZW1iZXJVc2VyPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBJZiBub3Qgc2V0LCBvciBpZiBzZXQgdG8gbmlsLCBkZWZhdWx0cyB0byB0aGUgZGV2aWNlJ3MgY3VycmVudCBsYW5ndWFnZSBzZXR0aW5nLlxyXG4gICAqXHJcbiAgICogQ2FuIGJlIHNwZWNpZmllZCBhcyBhIGxhbmd1YWdlIGNvZGUgKFwiZW5cIiwgXCJmclwiLCBcInpoLUhhbnNcIiwgZXRjLikgb3IgYXMgYSBsb2NhbGUgKFwiZW5fQVVcIiwgXCJmcl9GUlwiLCBcInpoLUhhbnRfSEtcIiwgZXRjLikuXHJcbiAgICogSWYgdGhlIGxpYnJhcnkgZG9lcyBub3QgY29udGFpbiBsb2NhbGl6ZWQgc3RyaW5ncyBmb3IgYSBzcGVjaWZpZWQgbG9jYWxlLCB0aGVuIHdpbGwgZmFsbCBiYWNrIHRvIHRoZSBsYW5ndWFnZS4gRS5nLiwgXCJlc19DT1wiIC0+IFwiZXNcIi5cclxuICAgKiBJZiB0aGUgbGlicmFyeSBkb2VzIG5vdCBjb250YWluIGxvY2FsaXplZCBzdHJpbmdzIGZvciBhIHNwZWNpZmllZCBsYW5ndWFnZSwgdGhlbiB3aWxsIGZhbGwgYmFjayB0byBBbWVyaWNhbiBFbmdsaXNoLlxyXG4gICAqXHJcbiAgICogSWYgeW91IHNwZWNpZnkgb25seSBhIGxhbmd1YWdlIGNvZGUsIGFuZCB0aGF0IGNvZGUgbWF0Y2hlcyB0aGUgZGV2aWNlJ3MgY3VycmVudGx5IHByZWZlcnJlZCBsYW5ndWFnZSxcclxuICAgKiB0aGVuIHRoZSBsaWJyYXJ5IHdpbGwgYXR0ZW1wdCB0byB1c2UgdGhlIGRldmljZSdzIGN1cnJlbnQgcmVnaW9uIGFzIHdlbGwuXHJcbiAgICogRS5nLiwgc3BlY2lmeWluZyBcImVuXCIgb24gYSBkZXZpY2Ugc2V0IHRvIFwiRW5nbGlzaFwiIGFuZCBcIlVuaXRlZCBLaW5nZG9tXCIgd2lsbCByZXN1bHQgaW4gXCJlbl9HQlwiLlxyXG4gICAqL1xyXG4gIGxhbmd1YWdlT3JMb2NhbGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTm9ybWFsbHksIHRoZSBTREsgYmx1cnMgdGhlIHNjcmVlbiB3aGVuIHRoZSBhcHAgaXMgYmFja2dyb3VuZGVkLFxyXG4gICAqIHRvIG9ic2N1cmUgY3JlZGl0IGNhcmQgb3IgUGF5UGFsIGFjY291bnQgZGV0YWlscyBpbiB0aGUgaU9TLXNhdmVkIHNjcmVlbnNob3QuXHJcbiAgICogSWYgeW91ciBhcHAgYWxyZWFkeSBkb2VzIGl0cyBvd24gYmx1cnJpbmcgdXBvbiBiYWNrZ3JvdW5kaW5nLCB5b3UgbWlnaHQgY2hvb3NlIHRvIGRpc2FibGUgdGhpcy5cclxuICAgKiBEZWZhdWx0cyB0byBOTy5cclxuICAgKi9cclxuICBkaXNhYmxlQmx1cldoZW5CYWNrZ3JvdW5kaW5nPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBJZiB5b3Ugd2lsbCBwcmVzZW50IHRoZSBTREsncyB2aWV3IGNvbnRyb2xsZXIgd2l0aGluIGEgcG9wb3ZlciwgdGhlbiBzZXQgdGhpcyBwcm9wZXJ0eSB0byBZRVMuXHJcbiAgICogRGVmYXVsdHMgdG8gTk8uIChpT1Mgb25seSlcclxuICAgKi9cclxuICBwcmVzZW50aW5nSW5Qb3BvdmVyPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBTYW5kYm94IGNyZWRlbnRpYWxzIGNhbiBiZSBkaWZmaWN1bHQgdG8gdHlwZSBvbiBhIG1vYmlsZSBkZXZpY2UuIFNldHRpbmcgdGhpcyBmbGFnIHRvIFlFUyB3aWxsXHJcbiAgICogY2F1c2UgdGhlIHNhbmRib3hVc2VyUGFzc3dvcmQgYW5kIHNhbmRib3hVc2VyUGluIHRvIGFsd2F5cyBiZSBwcmUtcG9wdWxhdGVkIGludG8gbG9naW4gZmllbGRzLlxyXG4gICAqL1xyXG4gIGZvcmNlRGVmYXVsdHNJblNhbmRib3g/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIFBhc3N3b3JkIHRvIHVzZSBmb3Igc2FuZGJveCBpZiAnZm9yY2VEZWZhdWx0c0luU2FuZGJveCcgaXMgc2V0LlxyXG4gICAqL1xyXG4gIHNhbmRib3hVc2VyUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogUElOIHRvIHVzZSBmb3Igc2FuZGJveCBpZiAnZm9yY2VEZWZhdWx0c0luU2FuZGJveCcgaXMgc2V0LlxyXG4gICAqL1xyXG4gIHNhbmRib3hVc2VyUGluPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBheVBhbENvbmZpZ3VyYXRpb24gaW1wbGVtZW50cyBQYXlQYWxDb25maWd1cmF0aW9uT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogWW91IHVzZSBhIFBheVBhbENvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIGNvbmZpZ3VyZSBtYW55IGFzcGVjdHMgb2YgaG93IHRoZSBTREsgYmVoYXZlcy5cclxuICAgKiBzZWUgZGVmYXVsdHMgZm9yIG9wdGlvbnMgYXZhaWxhYmxlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IFBheVBhbENvbmZpZ3VyYXRpb25PcHRpb25zKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0czogUGF5UGFsQ29uZmlndXJhdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgIGRlZmF1bHRVc2VyRW1haWw6IG51bGwsXHJcbiAgICAgIGRlZmF1bHRVc2VyUGhvbmVDb3VudHJ5Q29kZTogbnVsbCxcclxuICAgICAgZGVmYXVsdFVzZXJQaG9uZU51bWJlcjogbnVsbCxcclxuICAgICAgbWVyY2hhbnROYW1lOiBudWxsLFxyXG4gICAgICBtZXJjaGFudFByaXZhY3lQb2xpY3lVUkw6IG51bGwsXHJcbiAgICAgIG1lcmNoYW50VXNlckFncmVlbWVudFVSTDogbnVsbCxcclxuICAgICAgYWNjZXB0Q3JlZGl0Q2FyZHM6IHRydWUsXHJcbiAgICAgIHBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvbjogMCxcclxuICAgICAgcmVtZW1iZXJVc2VyOiB0cnVlLFxyXG4gICAgICBsYW5ndWFnZU9yTG9jYWxlOiBudWxsLFxyXG4gICAgICBkaXNhYmxlQmx1cldoZW5CYWNrZ3JvdW5kaW5nOiBmYWxzZSxcclxuICAgICAgcHJlc2VudGluZ0luUG9wb3ZlcjogZmFsc2UsXHJcbiAgICAgIGZvcmNlRGVmYXVsdHNJblNhbmRib3g6IGZhbHNlLFxyXG4gICAgICBzYW5kYm94VXNlclBhc3N3b3JkOiBudWxsLFxyXG4gICAgICBzYW5kYm94VXNlclBpbjogbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGZvciAoY29uc3QgaSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgICAgICBkZWZhdWx0c1tpXSA9IG9wdGlvbnNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYXlQYWxTaGlwcGluZ0FkZHJlc3Mge1xyXG4gIC8qKlxyXG4gICAqIFNlZSB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGZvciBtb3JlIGRldGFpbC5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcmVjaXBpZW50TmFtZTogTmFtZSBvZiB0aGUgcmVjaXBpZW50IGF0IHRoaXMgYWRkcmVzcy4gNTAgY2hhcmFjdGVycyBtYXguXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGxpbmUxOiBMaW5lIDEgb2YgdGhlIGFkZHJlc3MgKGUuZy4sIE51bWJlciwgc3RyZWV0LCBldGMpLiAxMDAgY2hhcmFjdGVycyBtYXguXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGxpbmUyOiBMaW5lIDIgb2YgdGhlIGFkZHJlc3MgKGUuZy4sIFN1aXRlLCBhcHQgIywgZXRjKS4gMTAwIGNoYXJhY3RlcnMgbWF4LiBPcHRpb25hbC5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2l0eTogQ2l0eSBuYW1lLiA1MCBjaGFyYWN0ZXJzIG1heC5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhdGU6IDItbGV0dGVyIGNvZGUgZm9yIFVTIHN0YXRlcywgYW5kIHRoZSBlcXVpdmFsZW50IGZvciBvdGhlciBjb3VudHJpZXMuIDEwMCBjaGFyYWN0ZXJzIG1heC4gUmVxdWlyZWQgaW4gY2VydGFpbiBjb3VudHJpZXMuXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBvc3RhbENvZGU6IFpJUCBjb2RlIG9yIGVxdWl2YWxlbnQgaXMgdXN1YWxseSByZXF1aXJlZCBmb3IgY291bnRyaWVzIHRoYXQgaGF2ZSB0aGVtLiAyMCBjaGFyYWN0ZXJzIG1heC4gUmVxdWlyZWQgaW4gY2VydGFpbiBjb3VudHJpZXMuXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvdW50cnlDb2RlOiAyLWxldHRlciBjb3VudHJ5IGNvZGUuIDIgY2hhcmFjdGVycyBtYXguXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByZWNpcGllbnROYW1lOiBzdHJpbmcsXHJcbiAgICBsaW5lMTogc3RyaW5nLFxyXG4gICAgbGluZTI6IHN0cmluZyxcclxuICAgIGNpdHk6IHN0cmluZyxcclxuICAgIHN0YXRlOiBzdHJpbmcsXHJcbiAgICBwb3N0YWxDb2RlOiBzdHJpbmcsXHJcbiAgICBjb3VudHJ5Q29kZTogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlY2lwaWVudE5hbWUgPSByZWNpcGllbnROYW1lO1xyXG4gICAgdGhpcy5saW5lMSA9IGxpbmUxO1xyXG4gICAgdGhpcy5saW5lMiA9IGxpbmUyO1xyXG4gICAgdGhpcy5jaXR5ID0gY2l0eTtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIHRoaXMucG9zdGFsQ29kZSA9IHBvc3RhbENvZGU7XHJcbiAgICB0aGlzLmNvdW50cnlDb2RlID0gY291bnRyeUNvZGU7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIE5hbWUgb2YgdGhlIHJlY2lwaWVudCBhdCB0aGlzIGFkZHJlc3MuIDUwIGNoYXJhY3RlcnMgbWF4LlxyXG4gICAqL1xyXG4gIHJlY2lwaWVudE5hbWU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBMaW5lIDEgb2YgdGhlIGFkZHJlc3MgKGUuZy4sIE51bWJlciwgc3RyZWV0LCBldGMpLiAxMDAgY2hhcmFjdGVycyBtYXguXHJcbiAgICovXHJcbiAgbGluZTE6IHN0cmluZztcclxuICAvKipcclxuICAgKiBMaW5lIDIgb2YgdGhlIGFkZHJlc3MgKGUuZy4sIFN1aXRlLCBhcHQgIywgZXRjKS4gMTAwIGNoYXJhY3RlcnMgbWF4LiBPcHRpb25hbC5cclxuICAgKi9cclxuICBsaW5lMjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIENpdHkgbmFtZS4gNTAgY2hhcmFjdGVycyBtYXguXHJcbiAgICovXHJcbiAgY2l0eTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIDItbGV0dGVyIGNvZGUgZm9yIFVTIHN0YXRlcywgYW5kIHRoZSBlcXVpdmFsZW50IGZvciBvdGhlciBjb3VudHJpZXMuIDEwMCBjaGFyYWN0ZXJzIG1heC4gUmVxdWlyZWQgaW4gY2VydGFpbiBjb3VudHJpZXMuXHJcbiAgICovXHJcbiAgc3RhdGU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBaSVAgY29kZSBvciBlcXVpdmFsZW50IGlzIHVzdWFsbHkgcmVxdWlyZWQgZm9yIGNvdW50cmllcyB0aGF0IGhhdmUgdGhlbS4gMjAgY2hhcmFjdGVycyBtYXguIFJlcXVpcmVkIGluIGNlcnRhaW4gY291bnRyaWVzLlxyXG4gICAqL1xyXG4gIHBvc3RhbENvZGU6IHN0cmluZztcclxuICAvKipcclxuICAgKiAyLWxldHRlciBjb3VudHJ5IGNvZGUuIDIgY2hhcmFjdGVycyBtYXguXHJcbiAgICovXHJcbiAgY291bnRyeUNvZGU6IHN0cmluZztcclxufVxyXG4iXX0=