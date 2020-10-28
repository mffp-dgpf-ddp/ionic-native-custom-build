var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var PayPalOriginal = /** @class */ (function (_super) {
    __extends(PayPalOriginal, _super);
    function PayPalOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayPalOriginal.prototype.version = function () { return cordova(this, "version", {}, arguments); };
    PayPalOriginal.prototype.init = function (clientIdsForEnvironments) { return cordova(this, "init", {}, arguments); };
    PayPalOriginal.prototype.prepareToRender = function (environment, configuration) { return cordova(this, "prepareToRender", {}, arguments); };
    PayPalOriginal.prototype.renderSinglePaymentUI = function (payment) { return cordova(this, "renderSinglePaymentUI", {}, arguments); };
    PayPalOriginal.prototype.clientMetadataID = function () { return cordova(this, "clientMetadataID", {}, arguments); };
    PayPalOriginal.prototype.renderFuturePaymentUI = function () { return cordova(this, "renderFuturePaymentUI", {}, arguments); };
    PayPalOriginal.prototype.renderProfileSharingUI = function (scopes) { return cordova(this, "renderProfileSharingUI", {}, arguments); };
    PayPalOriginal.pluginName = "PayPal";
    PayPalOriginal.plugin = "com.paypal.cordova.mobilesdk";
    PayPalOriginal.pluginRef = "PayPalMobile";
    PayPalOriginal.repo = "https://github.com/paypal/PayPal-Cordova-Plugin";
    PayPalOriginal.platforms = ["Android", "iOS"];
    return PayPalOriginal;
}(IonicNativePlugin));
var PayPal = new PayPalOriginal();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3BheXBhbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF5RTVDLDBCQUFpQjs7OztJQU0zQyx3QkFBTztJQWNQLHFCQUFJLGFBQUMsd0JBQTJDO0lBY2hELGdDQUFlLGFBQUMsV0FBbUIsRUFBRSxhQUFrQztJQWF2RSxzQ0FBcUIsYUFBQyxPQUFzQjtJQWU1QyxpQ0FBZ0I7SUFTaEIsc0NBQXFCO0lBWXJCLHVDQUFzQixhQUFDLE1BQWdCOzs7Ozs7aUJBN0p6QztFQTBFNEIsaUJBQWlCO1NBQWhDLE1BQU07O0lBaUdqQix1QkFDRSxNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsZ0JBQXdCLEVBQ3hCLE1BQWMsRUFDZCxPQUE4QjtRQXlCaEM7OztXQUdHO1FBQ0gsV0FBTSxHQUFHLGFBQWEsQ0FBQztRQTNCckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7d0JBdkxIOzs7O0lBa1BFOzs7Ozs7Ozs7T0FTRztJQUNILG9CQUFZLElBQVksRUFBRSxRQUFnQixFQUFFLEtBQWEsRUFBRSxRQUFnQixFQUFFLEdBQVk7UUFDdkYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztxQkFsUUg7Ozs7SUEwU0U7Ozs7O09BS0c7SUFDSCw4QkFBWSxRQUFnQixFQUFFLFFBQWdCLEVBQUUsR0FBVztRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDOytCQXBUSDs7OztJQW1hRTs7O09BR0c7SUFDSCw2QkFBWSxPQUFvQztRQUM5QyxJQUFNLFFBQVEsR0FBK0I7WUFDM0MsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QiwyQkFBMkIsRUFBRSxJQUFJO1lBQ2pDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsd0JBQXdCLEVBQUUsSUFBSTtZQUM5Qix3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsMkJBQTJCLEVBQUUsQ0FBQztZQUM5QixZQUFZLEVBQUUsSUFBSTtZQUNsQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLDRCQUE0QixFQUFFLEtBQUs7WUFDbkMsbUJBQW1CLEVBQUUsS0FBSztZQUMxQixzQkFBc0IsRUFBRSxLQUFLO1lBQzdCLG1CQUFtQixFQUFFLElBQUk7WUFDekIsY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQztRQUVGLElBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUMxQyxLQUFLLElBQU0sQ0FBQyxJQUFJLE9BQU8sRUFBRTtnQkFDdkIsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUM5QixRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMxQjthQUNGO1NBQ0Y7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzhCQW5jSDs7OztJQTBjRTs7Ozs7Ozs7O09BU0c7SUFDSCwrQkFDRSxhQUFxQixFQUNyQixLQUFhLEVBQ2IsS0FBYSxFQUNiLElBQVksRUFDWixLQUFhLEVBQ2IsVUFBa0IsRUFDbEIsV0FBbUI7UUFFbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztnQ0FwZUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFBheVBhbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUGF5UGFsIHBsdWdpbiBmb3IgQ29yZG92YS9Jb25pYyBBcHBsaWNhdGlvbnNcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgUGF5UGFsLCBQYXlQYWxQYXltZW50LCBQYXlQYWxDb25maWd1cmF0aW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9wYXlwYWwvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwYXlQYWw6IFBheVBhbCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLnBheVBhbC5pbml0KHtcclxuICogICBQYXlQYWxFbnZpcm9ubWVudFByb2R1Y3Rpb246ICdZT1VSX1BST0RVQ1RJT05fQ0xJRU5UX0lEJyxcclxuICogICBQYXlQYWxFbnZpcm9ubWVudFNhbmRib3g6ICdZT1VSX1NBTkRCT1hfQ0xJRU5UX0lEJ1xyXG4gKiB9KS50aGVuKCgpID0+IHtcclxuICogICAvLyBFbnZpcm9ubWVudHM6IFBheVBhbEVudmlyb25tZW50Tm9OZXR3b3JrLCBQYXlQYWxFbnZpcm9ubWVudFNhbmRib3gsIFBheVBhbEVudmlyb25tZW50UHJvZHVjdGlvblxyXG4gKiAgIHRoaXMucGF5UGFsLnByZXBhcmVUb1JlbmRlcignUGF5UGFsRW52aXJvbm1lbnRTYW5kYm94JywgbmV3IFBheVBhbENvbmZpZ3VyYXRpb24oe1xyXG4gKiAgICAgLy8gT25seSBuZWVkZWQgaWYgeW91IGdldCBhbiBcIkludGVybmFsIFNlcnZpY2UgRXJyb3JcIiBhZnRlciBQYXlQYWwgbG9naW4hXHJcbiAqICAgICAvL3BheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvbjogMiAvLyBQYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb25QYXlQYWxcclxuICogICB9KSkudGhlbigoKSA9PiB7XHJcbiAqICAgICBsZXQgcGF5bWVudCA9IG5ldyBQYXlQYWxQYXltZW50KCczLjMzJywgJ1VTRCcsICdEZXNjcmlwdGlvbicsICdzYWxlJyk7XHJcbiAqICAgICB0aGlzLnBheVBhbC5yZW5kZXJTaW5nbGVQYXltZW50VUkocGF5bWVudCkudGhlbigoKSA9PiB7XHJcbiAqICAgICAgIC8vIFN1Y2Nlc3NmdWxseSBwYWlkXHJcbiAqXHJcbiAqICAgICAgIC8vIEV4YW1wbGUgc2FuZGJveCByZXNwb25zZVxyXG4gKiAgICAgICAvL1xyXG4gKiAgICAgICAvLyB7XHJcbiAqICAgICAgIC8vICAgXCJjbGllbnRcIjoge1xyXG4gKiAgICAgICAvLyAgICAgXCJlbnZpcm9ubWVudFwiOiBcInNhbmRib3hcIixcclxuICogICAgICAgLy8gICAgIFwicHJvZHVjdF9uYW1lXCI6IFwiUGF5UGFsIGlPUyBTREtcIixcclxuICogICAgICAgLy8gICAgIFwicGF5cGFsX3Nka192ZXJzaW9uXCI6IFwiMi4xNi4wXCIsXHJcbiAqICAgICAgIC8vICAgICBcInBsYXRmb3JtXCI6IFwiaU9TXCJcclxuICogICAgICAgLy8gICB9LFxyXG4gKiAgICAgICAvLyAgIFwicmVzcG9uc2VfdHlwZVwiOiBcInBheW1lbnRcIixcclxuICogICAgICAgLy8gICBcInJlc3BvbnNlXCI6IHtcclxuICogICAgICAgLy8gICAgIFwiaWRcIjogXCJQQVktMUFCMjM0NTZDRDc4OTAxMkVGMzRHSElKXCIsXHJcbiAqICAgICAgIC8vICAgICBcInN0YXRlXCI6IFwiYXBwcm92ZWRcIixcclxuICogICAgICAgLy8gICAgIFwiY3JlYXRlX3RpbWVcIjogXCIyMDE2LTEwLTAzVDEzOjMzOjMzWlwiLFxyXG4gKiAgICAgICAvLyAgICAgXCJpbnRlbnRcIjogXCJzYWxlXCJcclxuICogICAgICAgLy8gICB9XHJcbiAqICAgICAgIC8vIH1cclxuICogICAgIH0sICgpID0+IHtcclxuICogICAgICAgLy8gRXJyb3Igb3IgcmVuZGVyIGRpYWxvZyBjbG9zZWQgd2l0aG91dCBiZWluZyBzdWNjZXNzZnVsXHJcbiAqICAgICB9KTtcclxuICogICB9LCAoKSA9PiB7XHJcbiAqICAgICAvLyBFcnJvciBpbiBjb25maWd1cmF0aW9uXHJcbiAqICAgfSk7XHJcbiAqIH0sICgpID0+IHtcclxuICogICAvLyBFcnJvciBpbiBpbml0aWFsaXphdGlvbiwgbWF5YmUgUGF5UGFsIGlzbid0IHN1cHBvcnRlZCBvciBzb21ldGhpbmcgZWxzZVxyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIFBheVBhbEVudmlyb25tZW50XHJcbiAqIFBheVBhbENvbmZpZ3VyYXRpb25PcHRpb25zXHJcbiAqIEBjbGFzc2VzXHJcbiAqIFBheVBhbFBheW1lbnRcclxuICogUGF5UGFsSXRlbVxyXG4gKiBQYXlQYWxQYXltZW50RGV0YWlsc1xyXG4gKiBQYXlQYWxTaGlwcGluZ0FkZHJlc3NcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdQYXlQYWwnLFxyXG4gIHBsdWdpbjogJ2NvbS5wYXlwYWwuY29yZG92YS5tb2JpbGVzZGsnLFxyXG4gIHBsdWdpblJlZjogJ1BheVBhbE1vYmlsZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wYXlwYWwvUGF5UGFsLUNvcmRvdmEtUGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGF5UGFsIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIHRoZSB2ZXJzaW9uIG9mIHRoZSBQYXlQYWwgaU9TIFNESyBsaWJyYXJ5LiBVc2VmdWwgd2hlbiBjb250YWN0aW5nIHN1cHBvcnQuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgdmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogWW91IG11c3QgcHJlY29ubmVjdCB0byBQYXlQYWwgdG8gcHJlcGFyZSB0aGUgZGV2aWNlIGZvciBwcm9jZXNzaW5nIHBheW1lbnRzLlxyXG4gICAqIFRoaXMgaW1wcm92ZXMgdGhlIHVzZXIgZXhwZXJpZW5jZSwgYnkgbWFraW5nIHRoZSBwcmVzZW50YXRpb24gb2YgdGhlXHJcbiAgICogVUkgZmFzdGVyLiBUaGUgcHJlY29ubmVjdCBpcyB2YWxpZCBmb3IgYSBsaW1pdGVkIHRpbWUsIHNvXHJcbiAgICogdGhlIHJlY29tbWVuZGVkIHRpbWUgdG8gcHJlY29ubmVjdCBpcyBvbiBwYWdlIGxvYWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1BheVBhbEVudmlyb25tZW50fSBjbGllbnRJZHNGb3JFbnZpcm9ubWVudHM6IHNldCBvZiBjbGllbnQgaWRzIGZvciBlbnZpcm9ubWVudHNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpbml0KGNsaWVudElkc0ZvckVudmlyb25tZW50czogUGF5UGFsRW52aXJvbm1lbnQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogWW91IG11c3QgcHJlY29ubmVjdCB0byBQYXlQYWwgdG8gcHJlcGFyZSB0aGUgZGV2aWNlIGZvciBwcm9jZXNzaW5nIHBheW1lbnRzLlxyXG4gICAqIFRoaXMgaW1wcm92ZXMgdGhlIHVzZXIgZXhwZXJpZW5jZSwgYnkgbWFraW5nIHRoZSBwcmVzZW50YXRpb24gb2YgdGhlIFVJIGZhc3Rlci5cclxuICAgKiBUaGUgcHJlY29ubmVjdCBpcyB2YWxpZCBmb3IgYSBsaW1pdGVkIHRpbWUsIHNvIHRoZSByZWNvbW1lbmRlZCB0aW1lIHRvIHByZWNvbm5lY3QgaXMgb24gcGFnZSBsb2FkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVudmlyb25tZW50OiBhdmFpbGFibGUgb3B0aW9ucyBhcmUgXCJQYXlQYWxFbnZpcm9ubWVudE5vTmV0d29ya1wiLCBcIlBheVBhbEVudmlyb25tZW50UHJvZHVjdGlvblwiIGFuZCBcIlBheVBhbEVudmlyb25tZW50U2FuZGJveFwiXHJcbiAgICogQHBhcmFtIHtQYXlQYWxDb25maWd1cmF0aW9ufSBjb25maWd1cmF0aW9uOiBQYXlQYWxDb25maWd1cmF0aW9uIG9iamVjdCwgZm9yIEZ1dHVyZSBQYXltZW50cyBtZXJjaGFudE5hbWUsIG1lcmNoYW50UHJpdmFjeVBvbGljeVVSTCBhbmQgbWVyY2hhbnRVc2VyQWdyZWVtZW50VVJMIG11c3QgYmUgc2V0IGJlIHNldFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHByZXBhcmVUb1JlbmRlcihlbnZpcm9ubWVudDogc3RyaW5nLCBjb25maWd1cmF0aW9uOiBQYXlQYWxDb25maWd1cmF0aW9uKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IFBheVBhbCBVSSB0byBjb2xsZWN0IHBheW1lbnQgZnJvbSB0aGUgdXNlci5cclxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIucGF5cGFsLmNvbS93ZWJhcHBzL2RldmVsb3Blci9kb2NzL2ludGVncmF0aW9uL21vYmlsZS9pb3MtaW50ZWdyYXRpb24tZ3VpZGUvXHJcbiAgICogZm9yIG1vcmUgZG9jdW1lbnRhdGlvbiBvZiB0aGUgcGFyYW1zLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtQYXlQYWxQYXltZW50fSBwYXltZW50IFBheVBhbFBheW1lbnQgb2JqZWN0XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVuZGVyU2luZ2xlUGF5bWVudFVJKHBheW1lbnQ6IFBheVBhbFBheW1lbnQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT25jZSBhIHVzZXIgaGFzIGNvbnNlbnRlZCB0byBmdXR1cmUgcGF5bWVudHMsIHdoZW4gdGhlIHVzZXIgc3Vic2VxdWVudGx5IGluaXRpYXRlcyBhIFBheVBhbCBwYXltZW50XHJcbiAgICogZnJvbSB0aGVpciBkZXZpY2UgdG8gYmUgY29tcGxldGVkIGJ5IHlvdXIgc2VydmVyLCBQYXlQYWwgdXNlcyBhIENvcnJlbGF0aW9uIElEIHRvIHZlcmlmeSB0aGF0IHRoZVxyXG4gICAqIHBheW1lbnQgaXMgb3JpZ2luYXRpbmcgZnJvbSBhIHZhbGlkLCB1c2VyLWNvbnNlbnRlZCBkZXZpY2UrYXBwbGljYXRpb24uXHJcbiAgICogVGhpcyBoZWxwcyByZWR1Y2UgZnJhdWQgYW5kIGRlY3JlYXNlIGRlY2xpbmVzLlxyXG4gICAqIFRoaXMgbWV0aG9kIE1VU1QgYmUgY2FsbGVkIHByaW9yIHRvIGluaXRpYXRpbmcgYSBwcmUtY29uc2VudGVkIHBheW1lbnQgKGEgXCJmdXR1cmUgcGF5bWVudFwiKSBmcm9tIGEgbW9iaWxlIGRldmljZS5cclxuICAgKiBQYXNzIHRoZSByZXN1bHQgdG8geW91ciBzZXJ2ZXIsIHRvIGluY2x1ZGUgaW4gdGhlIHBheW1lbnQgcmVxdWVzdCBzZW50IHRvIFBheVBhbC5cclxuICAgKiBEbyBub3Qgb3RoZXJ3aXNlIGNhY2hlIG9yIHN0b3JlIHRoaXMgdmFsdWUuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2xpZW50TWV0YWRhdGFJRCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGxlYXNlIFJlYWQgRG9jcyBvbiBGdXR1cmUgUGF5bWVudHMgYXQgaHR0cHM6Ly9naXRodWIuY29tL3BheXBhbC9QYXlQYWwtaU9TLVNESyNmdXR1cmUtcGF5bWVudHNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZW5kZXJGdXR1cmVQYXltZW50VUkoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBsZWFzZSBSZWFkIERvY3Mgb24gUHJvZmlsZSBTaGFyaW5nIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9wYXlwYWwvUGF5UGFsLWlPUy1TREsjcHJvZmlsZS1zaGFyaW5nXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBzY29wZXMgc2NvcGVzIFNldCBvZiByZXF1ZXN0ZWQgc2NvcGUtdmFsdWVzLiBBY2NlcHRlZCBzY29wZXMgYXJlOiBvcGVuaWQsIHByb2ZpbGUsIGFkZHJlc3MsIGVtYWlsLCBwaG9uZSwgZnV0dXJlcGF5bWVudHMgYW5kIHBheXBhbGF0dHJpYnV0ZXNcclxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIucGF5cGFsLmNvbS9kb2NzL2ludGVncmF0aW9uL2RpcmVjdC9pZGVudGl0eS9hdHRyaWJ1dGVzLyBmb3IgbW9yZSBkZXRhaWxzXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVuZGVyUHJvZmlsZVNoYXJpbmdVSShzY29wZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGF5UGFsRW52aXJvbm1lbnQge1xyXG4gIFBheVBhbEVudmlyb25tZW50UHJvZHVjdGlvbjogc3RyaW5nO1xyXG4gIFBheVBhbEVudmlyb25tZW50U2FuZGJveDogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBheVBhbFBheW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgYW1vdW50OiBzdHJpbmcsXHJcbiAgICBjdXJyZW5jeTogc3RyaW5nLFxyXG4gICAgc2hvcnREZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgaW50ZW50OiBzdHJpbmcsXHJcbiAgICBkZXRhaWxzPzogUGF5UGFsUGF5bWVudERldGFpbHNcclxuICApIHtcclxuICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xyXG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xyXG4gICAgdGhpcy5zaG9ydERlc2NyaXB0aW9uID0gc2hvcnREZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuaW50ZW50ID0gaW50ZW50O1xyXG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhbW91bnQgb2YgdGhlIHBheW1lbnQuXHJcbiAgICovXHJcbiAgYW1vdW50OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhlIElTTyA0MjE3IGN1cnJlbmN5IGZvciB0aGUgcGF5bWVudC5cclxuICAgKi9cclxuICBjdXJyZW5jeTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEEgc2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHBheW1lbnQuXHJcbiAgICovXHJcbiAgc2hvcnREZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFwiU2FsZVwiIGZvciBhbiBpbW1lZGlhdGUgcGF5bWVudC5cclxuICAgKi9cclxuICBpbnRlbnQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBPcHRpb25hbCBCdWlsZCBOb3RhdGlvbiBjb2RlIChcIkJOIGNvZGVcIiksIG9idGFpbmVkIGZyb20gcGFydG5lcnByb2dyYW1AcGF5cGFsLmNvbSxcclxuICAgKiBmb3IgeW91ciB0cmFja2luZyBwdXJwb3Nlcy5cclxuICAgKi9cclxuICBibkNvZGUgPSAnUGhvbmVHYXBfU1AnO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIGludm9pY2UgbnVtYmVyLCBmb3IgeW91ciB0cmFja2luZyBwdXJwb3Nlcy4gKHVwIHRvIDI1NiBjaGFyYWN0ZXJzKVxyXG4gICAqL1xyXG4gIGludm9pY2VOdW1iZXI6IHN0cmluZztcclxuICAvKipcclxuICAgKiBPcHRpb25hbCB0ZXh0LCBmb3IgeW91ciB0cmFja2luZyBwdXJwb3Nlcy4gKHVwIHRvIDI1NiBjaGFyYWN0ZXJzKVxyXG4gICAqL1xyXG4gIGN1c3RvbTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIHRleHQgd2hpY2ggd2lsbCBhcHBlYXIgb24gdGhlIGN1c3RvbWVyJ3MgY3JlZGl0IGNhcmQgc3RhdGVtZW50LiAodXAgdG8gMjIgY2hhcmFjdGVycylcclxuICAgKi9cclxuICBzb2Z0RGVzY3JpcHRvcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIGFycmF5IG9mIFBheVBhbEl0ZW0gb2JqZWN0cy5cclxuICAgKi9cclxuICBpdGVtczogUGF5UGFsSXRlbVtdO1xyXG5cclxuICAvKipcclxuICAgKiBPcHRpb25hbCBwYXllZSBlbWFpbCwgaWYgeW91ciBhcHAgaXMgcGF5aW5nIGEgdGhpcmQtcGFydHkgbWVyY2hhbnQuXHJcbiAgICogVGhlIHBheWVlJ3MgZW1haWwuIEl0IG11c3QgYmUgYSB2YWxpZCBQYXlQYWwgZW1haWwgYWRkcmVzcy5cclxuICAgKi9cclxuICBwYXllZUVtYWlsOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogT3B0aW9uYWwgY3VzdG9tZXIgc2hpcHBpbmcgYWRkcmVzcywgaWYgeW91ciBhcHAgd2lzaGVzIHRvIHByb3ZpZGUgdGhpcyB0byB0aGUgU0RLLlxyXG4gICAqL1xyXG4gIHNoaXBwaW5nQWRkcmVzczogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIFBheVBhbFBheW1lbnREZXRhaWxzIG9iamVjdFxyXG4gICAqL1xyXG4gIGRldGFpbHM6IFBheVBhbFBheW1lbnREZXRhaWxzO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBheVBhbEl0ZW0ge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBQYXlQYWxJdGVtIGNsYXNzIGRlZmluZXMgYW4gb3B0aW9uYWwgaXRlbWl6YXRpb24gZm9yIGEgcGF5bWVudC5cclxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLnBheXBhbC5jb20vZG9jcy9hcGkvI2l0ZW0tb2JqZWN0IGZvciBtb3JlIGRldGFpbHMuXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWU6IE5hbWUgb2YgdGhlIGl0ZW0uIDEyNyBjaGFyYWN0ZXJzIG1heFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBxdWFudGl0eTogTnVtYmVyIG9mIHVuaXRzLiAxMCBjaGFyYWN0ZXJzIG1heC5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJpY2U6IFVuaXQgcHJpY2UgZm9yIHRoaXMgaXRlbSAxMCBjaGFyYWN0ZXJzIG1heC5cclxuICAgKiBNYXkgYmUgbmVnYXRpdmUgZm9yIFwiY291cG9uXCIgZXRjXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGN1cnJlbmN5OiBJU08gc3RhbmRhcmQgY3VycmVuY3kgY29kZS5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2t1OiBUaGUgc3RvY2sga2VlcGluZyB1bml0IGZvciB0aGlzIGl0ZW0uIDUwIGNoYXJhY3RlcnMgbWF4IChvcHRpb25hbClcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIsIHByaWNlOiBzdHJpbmcsIGN1cnJlbmN5OiBzdHJpbmcsIHNrdT86IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMucXVhbnRpdHkgPSBxdWFudGl0eTtcclxuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcclxuICAgIHRoaXMuc2t1ID0gc2t1O1xyXG4gIH1cclxuICAvKipcclxuICAgKiBOYW1lIG9mIHRoZSBpdGVtLiAxMjcgY2hhcmFjdGVycyBtYXhcclxuICAgKi9cclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTnVtYmVyIG9mIHVuaXRzLiAxMCBjaGFyYWN0ZXJzIG1heC5cclxuICAgKi9cclxuICBxdWFudGl0eTogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFVuaXQgcHJpY2UgZm9yIHRoaXMgaXRlbSAxMCBjaGFyYWN0ZXJzIG1heC5cclxuICAgKi9cclxuICBwcmljZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIElTTyBzdGFuZGFyZCBjdXJyZW5jeSBjb2RlLlxyXG4gICAqL1xyXG4gIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhlIHN0b2NrIGtlZXBpbmcgdW5pdCBmb3IgdGhpcyBpdGVtLiA1MCBjaGFyYWN0ZXJzIG1heCAob3B0aW9uYWwpXHJcbiAgICovXHJcbiAgc2t1Pzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBheVBhbFBheW1lbnREZXRhaWxzIHtcclxuICAvKipcclxuICAgKiBTdWItdG90YWwgKGFtb3VudCkgb2YgaXRlbXMgYmVpbmcgcGFpZCBmb3IuIDEwIGNoYXJhY3RlcnMgbWF4IHdpdGggc3VwcG9ydCBmb3IgMiBkZWNpbWFsIHBsYWNlcy5cclxuICAgKi9cclxuICBzdWJ0b3RhbDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEFtb3VudCBjaGFyZ2VkIGZvciBzaGlwcGluZy4gMTAgY2hhcmFjdGVycyBtYXggd2l0aCBzdXBwb3J0IGZvciAyIGRlY2ltYWwgcGxhY2VzLlxyXG4gICAqL1xyXG4gIHNoaXBwaW5nOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQW1vdW50IGNoYXJnZWQgZm9yIHRheC4gMTAgY2hhcmFjdGVycyBtYXggd2l0aCBzdXBwb3J0IGZvciAyIGRlY2ltYWwgcGxhY2VzLlxyXG4gICAqL1xyXG4gIHRheDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgUGF5UGFsUGF5bWVudERldGFpbHMgY2xhc3MgZGVmaW5lcyBvcHRpb25hbCBhbW91bnQgZGV0YWlscy5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3VidG90YWw6IFN1Yi10b3RhbCAoYW1vdW50KSBvZiBpdGVtcyBiZWluZyBwYWlkIGZvci4gMTAgY2hhcmFjdGVycyBtYXggd2l0aCBzdXBwb3J0IGZvciAyIGRlY2ltYWwgcGxhY2VzLlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaGlwcGluZzogQW1vdW50IGNoYXJnZWQgZm9yIHNoaXBwaW5nLiAxMCBjaGFyYWN0ZXJzIG1heCB3aXRoIHN1cHBvcnQgZm9yIDIgZGVjaW1hbCBwbGFjZXMuXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRheDogQW1vdW50IGNoYXJnZWQgZm9yIHRheC4gMTAgY2hhcmFjdGVycyBtYXggd2l0aCBzdXBwb3J0IGZvciAyIGRlY2ltYWwgcGxhY2VzLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHN1YnRvdGFsOiBzdHJpbmcsIHNoaXBwaW5nOiBzdHJpbmcsIHRheDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN1YnRvdGFsID0gc3VidG90YWw7XHJcbiAgICB0aGlzLnNoaXBwaW5nID0gc2hpcHBpbmc7XHJcbiAgICB0aGlzLnRheCA9IHRheDtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBheVBhbENvbmZpZ3VyYXRpb25PcHRpb25zIHtcclxuICAvKipcclxuICAgKiBXaWxsIGJlIG92ZXJyaWRkZW4gYnkgZW1haWwgdXNlZCBpbiBtb3N0IHJlY2VudCBQYXlQYWwgbG9naW4uXHJcbiAgICovXHJcbiAgZGVmYXVsdFVzZXJFbWFpbD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBXaWxsIGJlIG92ZXJyaWRkZW4gYnkgcGhvbmUgY291bnRyeSBjb2RlIHVzZWQgaW4gbW9zdCByZWNlbnQgUGF5UGFsIGxvZ2luXHJcbiAgICovXHJcbiAgZGVmYXVsdFVzZXJQaG9uZUNvdW50cnlDb2RlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgYmUgb3ZlcnJpZGRlbiBieSBwaG9uZSBudW1iZXIgdXNlZCBpbiBtb3N0IHJlY2VudCBQYXlQYWwgbG9naW4uXHJcbiAgICovXHJcbiAgZGVmYXVsdFVzZXJQaG9uZU51bWJlcj86IHN0cmluZztcclxuICAvKipcclxuICAgKiBZb3VyIGNvbXBhbnkgbmFtZSwgYXMgaXQgc2hvdWxkIGJlIGRpc3BsYXllZCB0byB0aGUgdXNlciB3aGVuIHJlcXVlc3RpbmcgY29uc2VudCB2aWEgYSBQYXlQYWxGdXR1cmVQYXltZW50Vmlld0NvbnRyb2xsZXIuXHJcbiAgICovXHJcbiAgbWVyY2hhbnROYW1lPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFVSTCBvZiB5b3VyIGNvbXBhbnkncyBwcml2YWN5IHBvbGljeSwgd2hpY2ggd2lsbCBiZSBvZmZlcmVkIHRvIHRoZSB1c2VyIHdoZW4gcmVxdWVzdGluZyBjb25zZW50IHZpYSBhIFBheVBhbEZ1dHVyZVBheW1lbnRWaWV3Q29udHJvbGxlci5cclxuICAgKi9cclxuICBtZXJjaGFudFByaXZhY3lQb2xpY3lVUkw/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVVJMIG9mIHlvdXIgY29tcGFueSdzIHVzZXIgYWdyZWVtZW50LCB3aGljaCB3aWxsIGJlIG9mZmVyZWQgdG8gdGhlIHVzZXIgd2hlbiByZXF1ZXN0aW5nIGNvbnNlbnQgdmlhIGEgUGF5UGFsRnV0dXJlUGF5bWVudFZpZXdDb250cm9sbGVyLlxyXG4gICAqL1xyXG4gIG1lcmNoYW50VXNlckFncmVlbWVudFVSTD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBJZiBzZXQgdG8gTk8sIHRoZSBTREsgd2lsbCBvbmx5IHN1cHBvcnQgcGF5aW5nIHdpdGggUGF5UGFsLCBub3Qgd2l0aCBjcmVkaXQgY2FyZHMuXHJcbiAgICogVGhpcyBhcHBsaWVzIG9ubHkgdG8gc2luZ2xlIHBheW1lbnRzICh2aWEgUGF5UGFsUGF5bWVudFZpZXdDb250cm9sbGVyKS5cclxuICAgKiBGdXR1cmUgcGF5bWVudHMgKHZpYSBQYXlQYWxGdXR1cmVQYXltZW50Vmlld0NvbnRyb2xsZXIpIGFsd2F5cyB1c2UgUGF5UGFsLlxyXG4gICAqIERlZmF1bHRzIHRvIHRydWVcclxuICAgKi9cclxuICBhY2NlcHRDcmVkaXRDYXJkcz86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogRm9yIHNpbmdsZSBwYXltZW50cywgb3B0aW9ucyBmb3IgdGhlIHNoaXBwaW5nIGFkZHJlc3MuXHJcbiAgICogLSAwIC0gUGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uTm9uZTogbm8gc2hpcHBpbmcgYWRkcmVzcyBhcHBsaWVzLlxyXG4gICAqIC0gMSAtIFBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvblByb3ZpZGVkOiBzaGlwcGluZyBhZGRyZXNzIHdpbGwgYmUgcHJvdmlkZWQgYnkgeW91ciBhcHAsXHJcbiAgICogICBpbiB0aGUgc2hpcHBpbmdBZGRyZXNzIHByb3BlcnR5IG9mIFBheVBhbFBheW1lbnQuXHJcbiAgICogLSAyIC0gUGF5UGFsU2hpcHBpbmdBZGRyZXNzT3B0aW9uUGF5UGFsOiB1c2VyIHdpbGwgY2hvb3NlIGZyb20gc2hpcHBpbmcgYWRkcmVzc2VzIG9uIGZpbGVcclxuICAgKiAgIGZvciB0aGVpciBQYXlQYWwgYWNjb3VudC5cclxuICAgKiAtIDMgLSBQYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb25Cb3RoOiB1c2VyIHdpbGwgY2hvb3NlIGZyb20gdGhlIHNoaXBwaW5nIGFkZHJlc3MgcHJvdmlkZWQgYnkgeW91ciBhcHAsXHJcbiAgICogICBpbiB0aGUgc2hpcHBpbmdBZGRyZXNzIHByb3BlcnR5IG9mIFBheVBhbFBheW1lbnQsIHBsdXMgdGhlIHNoaXBwaW5nIGFkZHJlc3NlcyBvbiBmaWxlIGZvciB0aGUgdXNlcidzIFBheVBhbCBhY2NvdW50LlxyXG4gICAqIERlZmF1bHRzIHRvIDAgKFBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvbk5vbmUpLlxyXG4gICAqL1xyXG4gIHBheVBhbFNoaXBwaW5nQWRkcmVzc09wdGlvbj86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBJZiBzZXQgdG8gWUVTLCB0aGVuIGlmIHRoZSB1c2VyIHBheXMgdmlhIHRoZWlyIFBheVBhbCBhY2NvdW50LFxyXG4gICAqIHRoZSBTREsgd2lsbCByZW1lbWJlciB0aGUgdXNlcidzIFBheVBhbCB1c2VybmFtZSBvciBwaG9uZSBudW1iZXI7XHJcbiAgICogaWYgdGhlIHVzZXIgcGF5cyB2aWEgdGhlaXIgY3JlZGl0IGNhcmQsIHRoZW4gdGhlIFNESyB3aWxsIHJlbWVtYmVyXHJcbiAgICogdGhlIFBheVBhbCBWYXVsdCB0b2tlbiByZXByZXNlbnRpbmcgdGhlIHVzZXIncyBjcmVkaXQgY2FyZC5cclxuICAgKlxyXG4gICAqIElmIHNldCB0byBOTywgdGhlbiBhbnkgcHJldmlvdXNseS1yZW1lbWJlcmVkIHVzZXJuYW1lLCBwaG9uZSBudW1iZXIsIG9yXHJcbiAgICogY3JlZGl0IGNhcmQgdG9rZW4gd2lsbCBiZSBlcmFzZWQsIGFuZCBzdWJzZXF1ZW50IHBheW1lbnQgaW5mb3JtYXRpb24gd2lsbFxyXG4gICAqIG5vdCBiZSByZW1lbWJlcmVkLlxyXG4gICAqXHJcbiAgICogRGVmYXVsdHMgdG8gWUVTLlxyXG4gICAqL1xyXG4gIHJlbWVtYmVyVXNlcj86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogSWYgbm90IHNldCwgb3IgaWYgc2V0IHRvIG5pbCwgZGVmYXVsdHMgdG8gdGhlIGRldmljZSdzIGN1cnJlbnQgbGFuZ3VhZ2Ugc2V0dGluZy5cclxuICAgKlxyXG4gICAqIENhbiBiZSBzcGVjaWZpZWQgYXMgYSBsYW5ndWFnZSBjb2RlIChcImVuXCIsIFwiZnJcIiwgXCJ6aC1IYW5zXCIsIGV0Yy4pIG9yIGFzIGEgbG9jYWxlIChcImVuX0FVXCIsIFwiZnJfRlJcIiwgXCJ6aC1IYW50X0hLXCIsIGV0Yy4pLlxyXG4gICAqIElmIHRoZSBsaWJyYXJ5IGRvZXMgbm90IGNvbnRhaW4gbG9jYWxpemVkIHN0cmluZ3MgZm9yIGEgc3BlY2lmaWVkIGxvY2FsZSwgdGhlbiB3aWxsIGZhbGwgYmFjayB0byB0aGUgbGFuZ3VhZ2UuIEUuZy4sIFwiZXNfQ09cIiAtPiBcImVzXCIuXHJcbiAgICogSWYgdGhlIGxpYnJhcnkgZG9lcyBub3QgY29udGFpbiBsb2NhbGl6ZWQgc3RyaW5ncyBmb3IgYSBzcGVjaWZpZWQgbGFuZ3VhZ2UsIHRoZW4gd2lsbCBmYWxsIGJhY2sgdG8gQW1lcmljYW4gRW5nbGlzaC5cclxuICAgKlxyXG4gICAqIElmIHlvdSBzcGVjaWZ5IG9ubHkgYSBsYW5ndWFnZSBjb2RlLCBhbmQgdGhhdCBjb2RlIG1hdGNoZXMgdGhlIGRldmljZSdzIGN1cnJlbnRseSBwcmVmZXJyZWQgbGFuZ3VhZ2UsXHJcbiAgICogdGhlbiB0aGUgbGlicmFyeSB3aWxsIGF0dGVtcHQgdG8gdXNlIHRoZSBkZXZpY2UncyBjdXJyZW50IHJlZ2lvbiBhcyB3ZWxsLlxyXG4gICAqIEUuZy4sIHNwZWNpZnlpbmcgXCJlblwiIG9uIGEgZGV2aWNlIHNldCB0byBcIkVuZ2xpc2hcIiBhbmQgXCJVbml0ZWQgS2luZ2RvbVwiIHdpbGwgcmVzdWx0IGluIFwiZW5fR0JcIi5cclxuICAgKi9cclxuICBsYW5ndWFnZU9yTG9jYWxlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE5vcm1hbGx5LCB0aGUgU0RLIGJsdXJzIHRoZSBzY3JlZW4gd2hlbiB0aGUgYXBwIGlzIGJhY2tncm91bmRlZCxcclxuICAgKiB0byBvYnNjdXJlIGNyZWRpdCBjYXJkIG9yIFBheVBhbCBhY2NvdW50IGRldGFpbHMgaW4gdGhlIGlPUy1zYXZlZCBzY3JlZW5zaG90LlxyXG4gICAqIElmIHlvdXIgYXBwIGFscmVhZHkgZG9lcyBpdHMgb3duIGJsdXJyaW5nIHVwb24gYmFja2dyb3VuZGluZywgeW91IG1pZ2h0IGNob29zZSB0byBkaXNhYmxlIHRoaXMuXHJcbiAgICogRGVmYXVsdHMgdG8gTk8uXHJcbiAgICovXHJcbiAgZGlzYWJsZUJsdXJXaGVuQmFja2dyb3VuZGluZz86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogSWYgeW91IHdpbGwgcHJlc2VudCB0aGUgU0RLJ3MgdmlldyBjb250cm9sbGVyIHdpdGhpbiBhIHBvcG92ZXIsIHRoZW4gc2V0IHRoaXMgcHJvcGVydHkgdG8gWUVTLlxyXG4gICAqIERlZmF1bHRzIHRvIE5PLiAoaU9TIG9ubHkpXHJcbiAgICovXHJcbiAgcHJlc2VudGluZ0luUG9wb3Zlcj86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogU2FuZGJveCBjcmVkZW50aWFscyBjYW4gYmUgZGlmZmljdWx0IHRvIHR5cGUgb24gYSBtb2JpbGUgZGV2aWNlLiBTZXR0aW5nIHRoaXMgZmxhZyB0byBZRVMgd2lsbFxyXG4gICAqIGNhdXNlIHRoZSBzYW5kYm94VXNlclBhc3N3b3JkIGFuZCBzYW5kYm94VXNlclBpbiB0byBhbHdheXMgYmUgcHJlLXBvcHVsYXRlZCBpbnRvIGxvZ2luIGZpZWxkcy5cclxuICAgKi9cclxuICBmb3JjZURlZmF1bHRzSW5TYW5kYm94PzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBQYXNzd29yZCB0byB1c2UgZm9yIHNhbmRib3ggaWYgJ2ZvcmNlRGVmYXVsdHNJblNhbmRib3gnIGlzIHNldC5cclxuICAgKi9cclxuICBzYW5kYm94VXNlclBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFBJTiB0byB1c2UgZm9yIHNhbmRib3ggaWYgJ2ZvcmNlRGVmYXVsdHNJblNhbmRib3gnIGlzIHNldC5cclxuICAgKi9cclxuICBzYW5kYm94VXNlclBpbj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYXlQYWxDb25maWd1cmF0aW9uIGltcGxlbWVudHMgUGF5UGFsQ29uZmlndXJhdGlvbk9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFlvdSB1c2UgYSBQYXlQYWxDb25maWd1cmF0aW9uIG9iamVjdCB0byBjb25maWd1cmUgbWFueSBhc3BlY3RzIG9mIGhvdyB0aGUgU0RLIGJlaGF2ZXMuXHJcbiAgICogc2VlIGRlZmF1bHRzIGZvciBvcHRpb25zIGF2YWlsYWJsZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYXlQYWxDb25maWd1cmF0aW9uT3B0aW9ucykge1xyXG4gICAgY29uc3QgZGVmYXVsdHM6IFBheVBhbENvbmZpZ3VyYXRpb25PcHRpb25zID0ge1xyXG4gICAgICBkZWZhdWx0VXNlckVtYWlsOiBudWxsLFxyXG4gICAgICBkZWZhdWx0VXNlclBob25lQ291bnRyeUNvZGU6IG51bGwsXHJcbiAgICAgIGRlZmF1bHRVc2VyUGhvbmVOdW1iZXI6IG51bGwsXHJcbiAgICAgIG1lcmNoYW50TmFtZTogbnVsbCxcclxuICAgICAgbWVyY2hhbnRQcml2YWN5UG9saWN5VVJMOiBudWxsLFxyXG4gICAgICBtZXJjaGFudFVzZXJBZ3JlZW1lbnRVUkw6IG51bGwsXHJcbiAgICAgIGFjY2VwdENyZWRpdENhcmRzOiB0cnVlLFxyXG4gICAgICBwYXlQYWxTaGlwcGluZ0FkZHJlc3NPcHRpb246IDAsXHJcbiAgICAgIHJlbWVtYmVyVXNlcjogdHJ1ZSxcclxuICAgICAgbGFuZ3VhZ2VPckxvY2FsZTogbnVsbCxcclxuICAgICAgZGlzYWJsZUJsdXJXaGVuQmFja2dyb3VuZGluZzogZmFsc2UsXHJcbiAgICAgIHByZXNlbnRpbmdJblBvcG92ZXI6IGZhbHNlLFxyXG4gICAgICBmb3JjZURlZmF1bHRzSW5TYW5kYm94OiBmYWxzZSxcclxuICAgICAgc2FuZGJveFVzZXJQYXNzd29yZDogbnVsbCxcclxuICAgICAgc2FuZGJveFVzZXJQaW46IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBmb3IgKGNvbnN0IGkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChkZWZhdWx0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICAgICAgZGVmYXVsdHNbaV0gPSBvcHRpb25zW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZWZhdWx0cztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGF5UGFsU2hpcHBpbmdBZGRyZXNzIHtcclxuICAvKipcclxuICAgKiBTZWUgdGhlIGRvY3VtZW50YXRpb24gb2YgdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcyBmb3IgbW9yZSBkZXRhaWwuXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHJlY2lwaWVudE5hbWU6IE5hbWUgb2YgdGhlIHJlY2lwaWVudCBhdCB0aGlzIGFkZHJlc3MuIDUwIGNoYXJhY3RlcnMgbWF4LlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lMTogTGluZSAxIG9mIHRoZSBhZGRyZXNzIChlLmcuLCBOdW1iZXIsIHN0cmVldCwgZXRjKS4gMTAwIGNoYXJhY3RlcnMgbWF4LlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lMjogTGluZSAyIG9mIHRoZSBhZGRyZXNzIChlLmcuLCBTdWl0ZSwgYXB0ICMsIGV0YykuIDEwMCBjaGFyYWN0ZXJzIG1heC4gT3B0aW9uYWwuXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNpdHk6IENpdHkgbmFtZS4gNTAgY2hhcmFjdGVycyBtYXguXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlOiAyLWxldHRlciBjb2RlIGZvciBVUyBzdGF0ZXMsIGFuZCB0aGUgZXF1aXZhbGVudCBmb3Igb3RoZXIgY291bnRyaWVzLiAxMDAgY2hhcmFjdGVycyBtYXguIFJlcXVpcmVkIGluIGNlcnRhaW4gY291bnRyaWVzLlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwb3N0YWxDb2RlOiBaSVAgY29kZSBvciBlcXVpdmFsZW50IGlzIHVzdWFsbHkgcmVxdWlyZWQgZm9yIGNvdW50cmllcyB0aGF0IGhhdmUgdGhlbS4gMjAgY2hhcmFjdGVycyBtYXguIFJlcXVpcmVkIGluIGNlcnRhaW4gY291bnRyaWVzLlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb3VudHJ5Q29kZTogMi1sZXR0ZXIgY291bnRyeSBjb2RlLiAyIGNoYXJhY3RlcnMgbWF4LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcmVjaXBpZW50TmFtZTogc3RyaW5nLFxyXG4gICAgbGluZTE6IHN0cmluZyxcclxuICAgIGxpbmUyOiBzdHJpbmcsXHJcbiAgICBjaXR5OiBzdHJpbmcsXHJcbiAgICBzdGF0ZTogc3RyaW5nLFxyXG4gICAgcG9zdGFsQ29kZTogc3RyaW5nLFxyXG4gICAgY291bnRyeUNvZGU6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgdGhpcy5yZWNpcGllbnROYW1lID0gcmVjaXBpZW50TmFtZTtcclxuICAgIHRoaXMubGluZTEgPSBsaW5lMTtcclxuICAgIHRoaXMubGluZTIgPSBsaW5lMjtcclxuICAgIHRoaXMuY2l0eSA9IGNpdHk7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB0aGlzLnBvc3RhbENvZGUgPSBwb3N0YWxDb2RlO1xyXG4gICAgdGhpcy5jb3VudHJ5Q29kZSA9IGNvdW50cnlDb2RlO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBOYW1lIG9mIHRoZSByZWNpcGllbnQgYXQgdGhpcyBhZGRyZXNzLiA1MCBjaGFyYWN0ZXJzIG1heC5cclxuICAgKi9cclxuICByZWNpcGllbnROYW1lOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTGluZSAxIG9mIHRoZSBhZGRyZXNzIChlLmcuLCBOdW1iZXIsIHN0cmVldCwgZXRjKS4gMTAwIGNoYXJhY3RlcnMgbWF4LlxyXG4gICAqL1xyXG4gIGxpbmUxOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTGluZSAyIG9mIHRoZSBhZGRyZXNzIChlLmcuLCBTdWl0ZSwgYXB0ICMsIGV0YykuIDEwMCBjaGFyYWN0ZXJzIG1heC4gT3B0aW9uYWwuXHJcbiAgICovXHJcbiAgbGluZTI6IHN0cmluZztcclxuICAvKipcclxuICAgKiBDaXR5IG5hbWUuIDUwIGNoYXJhY3RlcnMgbWF4LlxyXG4gICAqL1xyXG4gIGNpdHk6IHN0cmluZztcclxuICAvKipcclxuICAgKiAyLWxldHRlciBjb2RlIGZvciBVUyBzdGF0ZXMsIGFuZCB0aGUgZXF1aXZhbGVudCBmb3Igb3RoZXIgY291bnRyaWVzLiAxMDAgY2hhcmFjdGVycyBtYXguIFJlcXVpcmVkIGluIGNlcnRhaW4gY291bnRyaWVzLlxyXG4gICAqL1xyXG4gIHN0YXRlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogWklQIGNvZGUgb3IgZXF1aXZhbGVudCBpcyB1c3VhbGx5IHJlcXVpcmVkIGZvciBjb3VudHJpZXMgdGhhdCBoYXZlIHRoZW0uIDIwIGNoYXJhY3RlcnMgbWF4LiBSZXF1aXJlZCBpbiBjZXJ0YWluIGNvdW50cmllcy5cclxuICAgKi9cclxuICBwb3N0YWxDb2RlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogMi1sZXR0ZXIgY291bnRyeSBjb2RlLiAyIGNoYXJhY3RlcnMgbWF4LlxyXG4gICAqL1xyXG4gIGNvdW50cnlDb2RlOiBzdHJpbmc7XHJcbn1cclxuIl19