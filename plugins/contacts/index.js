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
import { IonicNativePlugin, checkAvailability, cordovaInstance, instanceAvailability, instancePropertyGet, instancePropertySet, getPromise } from '@ionic-native/core';
var Contact = /** @class */ (function () {
    function Contact() {
        if (checkAvailability('navigator.contacts', 'create', 'Contacts') === true) {
            this._objectInstance = navigator.contacts.create();
        }
    }
    Contact.prototype.clone = function () {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var newContact = new Contact();
                for (var prop in _this) {
                    if (prop === 'id')
                        return;
                    newContact[prop] = _this[prop];
                }
                return newContact;
            }
        })();
    };
    Contact.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    Contact.prototype.save = function () {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.save(function (contact) {
                        _this._objectInstance = contact;
                        resolve(_this);
                    }, reject);
                });
            }
        })();
    };
    Object.defineProperty(Contact.prototype, "id", {
        get: function () { return instancePropertyGet(this, "id"); },
        set: function (value) { instancePropertySet(this, "id", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "displayName", {
        get: function () { return instancePropertyGet(this, "displayName"); },
        set: function (value) { instancePropertySet(this, "displayName", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "name", {
        get: function () { return instancePropertyGet(this, "name"); },
        set: function (value) { instancePropertySet(this, "name", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "nickname", {
        get: function () { return instancePropertyGet(this, "nickname"); },
        set: function (value) { instancePropertySet(this, "nickname", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "phoneNumbers", {
        get: function () { return instancePropertyGet(this, "phoneNumbers"); },
        set: function (value) { instancePropertySet(this, "phoneNumbers", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "emails", {
        get: function () { return instancePropertyGet(this, "emails"); },
        set: function (value) { instancePropertySet(this, "emails", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "addresses", {
        get: function () { return instancePropertyGet(this, "addresses"); },
        set: function (value) { instancePropertySet(this, "addresses", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "ims", {
        get: function () { return instancePropertyGet(this, "ims"); },
        set: function (value) { instancePropertySet(this, "ims", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "organizations", {
        get: function () { return instancePropertyGet(this, "organizations"); },
        set: function (value) { instancePropertySet(this, "organizations", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "birthday", {
        get: function () { return instancePropertyGet(this, "birthday"); },
        set: function (value) { instancePropertySet(this, "birthday", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "note", {
        get: function () { return instancePropertyGet(this, "note"); },
        set: function (value) { instancePropertySet(this, "note", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "photos", {
        get: function () { return instancePropertyGet(this, "photos"); },
        set: function (value) { instancePropertySet(this, "photos", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "categories", {
        get: function () { return instancePropertyGet(this, "categories"); },
        set: function (value) { instancePropertySet(this, "categories", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "urls", {
        get: function () { return instancePropertyGet(this, "urls"); },
        set: function (value) { instancePropertySet(this, "urls", value); },
        enumerable: true,
        configurable: true
    });
    return Contact;
}());
export { Contact };
var ContactName = /** @class */ (function () {
    function ContactName(formatted, familyName, givenName, middleName, honorificPrefix, honorificSuffix) {
        this.formatted = formatted;
        this.familyName = familyName;
        this.givenName = givenName;
        this.middleName = middleName;
        this.honorificPrefix = honorificPrefix;
        this.honorificSuffix = honorificSuffix;
    }
    return ContactName;
}());
export { ContactName };
var ContactField = /** @class */ (function () {
    function ContactField(type, value, pref) {
        this.type = type;
        this.value = value;
        this.pref = pref;
    }
    return ContactField;
}());
export { ContactField };
var ContactAddress = /** @class */ (function () {
    function ContactAddress(pref, type, formatted, streetAddress, locality, region, postalCode, country) {
        this.pref = pref;
        this.type = type;
        this.formatted = formatted;
        this.streetAddress = streetAddress;
        this.locality = locality;
        this.region = region;
        this.postalCode = postalCode;
        this.country = country;
    }
    return ContactAddress;
}());
export { ContactAddress };
var ContactOrganization = /** @class */ (function () {
    function ContactOrganization(type, name, department, title, pref) {
        this.type = type;
        this.name = name;
        this.department = department;
        this.title = title;
        this.pref = pref;
    }
    return ContactOrganization;
}());
export { ContactOrganization };
var ContactFindOptions = /** @class */ (function () {
    function ContactFindOptions(filter, multiple, desiredFields, hasPhoneNumber) {
        this.filter = filter;
        this.multiple = multiple;
        this.desiredFields = desiredFields;
        this.hasPhoneNumber = hasPhoneNumber;
    }
    return ContactFindOptions;
}());
export { ContactFindOptions };
var Contacts = /** @class */ (function (_super) {
    __extends(Contacts, _super);
    function Contacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a single contact.
     * @returns {Contact} Returns a Contact object
     */
    Contacts.prototype.create = function () {
        return new Contact();
    };
    Contacts.prototype.find = function (fields, options) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    navigator.contacts.find(fields, function (contacts) {
                        resolve(contacts.map(processContact));
                    }, reject, options);
                });
            }
        })();
    };
    Contacts.prototype.pickContact = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    navigator.contacts.pickContact(function (contact) { return resolve(processContact(contact)); }, reject);
                });
            }
        })();
    };
    Contacts.pluginName = "Contacts";
    Contacts.plugin = "cordova-plugin-contacts";
    Contacts.pluginRef = "navigator.contacts";
    Contacts.repo = "https://github.com/apache/cordova-plugin-contacts";
    Contacts.platforms = ["Android", "BlackBerry 10", "Browser", "Firefox OS", "iOS", "Ubuntu", "Windows", "Windows 8", "Windows Phone"];
    return Contacts;
}(IonicNativePlugin));
export { Contacts };
/**
 * @hidden
 */
function processContact(contact) {
    var newContact = new Contact();
    for (var prop in contact) {
        if (typeof contact[prop] === 'function')
            continue;
        newContact[prop] = contact[prop];
    }
    return newContact;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvbnRhY3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHlIQVFMLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDOztJQXVHMUI7UUFDRSxJQUFJLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDMUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUdELHVCQUFLOzs7c0RBQVk7Z0JBQ2YsSUFBTSxVQUFVLEdBQVEsSUFBSSxPQUFPLEVBQUUsQ0FBQztnQkFDdEMsS0FBSyxJQUFNLElBQUksSUFBSSxLQUFJLEVBQUU7b0JBQ3ZCLElBQUksSUFBSSxLQUFLLElBQUk7d0JBQUUsT0FBTztvQkFDMUIsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0I7Z0JBQ0QsT0FBTyxVQUFVLENBQUM7YUFDbkI7OztJQUdELHdCQUFNO0lBS04sc0JBQUk7OztzREFBaUI7Z0JBQ25CLE9BQU8sVUFBVSxDQUFDLFVBQUMsT0FBaUIsRUFBRSxNQUFnQjtvQkFDcEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFZO3dCQUNyQyxLQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQzt3QkFDL0IsT0FBTyxDQUFDLEtBQUksQ0FBQyxDQUFDO29CQUNoQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDLENBQUM7YUFDSjs7OzBCQS9DbUIsdUJBQUU7Ozs7OzswQkFDRixnQ0FBVzs7Ozs7OzBCQUNYLHlCQUFJOzs7Ozs7MEJBQ0osNkJBQVE7Ozs7Ozsw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QWdDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzdGLENBQUMsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7O21CQXRZSDtFQWdXOEIsaUJBQWlCO1NBQWxDLFFBQVE7QUF5Q3JCOztHQUVHO0FBQ0gsU0FBUyxjQUFjLENBQUMsT0FBWTtJQUNsQyxJQUFNLFVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ2pDLEtBQUssSUFBTSxJQUFJLElBQUksT0FBTyxFQUFFO1FBQzFCLElBQUksT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVTtZQUFFLFNBQVM7UUFDbEQsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQztJQUNELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvcmRvdmFDaGVjayxcclxuICBDb3Jkb3ZhSW5zdGFuY2UsXHJcbiAgSW5zdGFuY2VDaGVjayxcclxuICBJbnN0YW5jZVByb3BlcnR5LFxyXG4gIElvbmljTmF0aXZlUGx1Z2luLFxyXG4gIFBsdWdpbixcclxuICBjaGVja0F2YWlsYWJpbGl0eSxcclxuICBnZXRQcm9taXNlLFxyXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55LCBuYXZpZ2F0b3I6IGFueTtcclxuXHJcbmV4cG9ydCB0eXBlIENvbnRhY3RGaWVsZFR5cGUgPVxyXG4gIHwgJyonXHJcbiAgfCAnYWRkcmVzc2VzJ1xyXG4gIHwgJ2JpcnRoZGF5J1xyXG4gIHwgJ2NhdGVnb3JpZXMnXHJcbiAgfCAnY291bnRyeSdcclxuICB8ICdkZXBhcnRtZW50J1xyXG4gIHwgJ2Rpc3BsYXlOYW1lJ1xyXG4gIHwgJ2VtYWlscydcclxuICB8ICduYW1lLmZhbWlseU5hbWUnXHJcbiAgfCAnbmFtZS5mb3JtYXR0ZWQnXHJcbiAgfCAnbmFtZS5naXZlbk5hbWUnXHJcbiAgfCAnbmFtZS5ob25vcmlmaWNQcmVmaXgnXHJcbiAgfCAnbmFtZS5ob25vcmlmaWNTdWZmaXgnXHJcbiAgfCAnaWQnXHJcbiAgfCAnaW1zJ1xyXG4gIHwgJ2xvY2FsaXR5J1xyXG4gIHwgJ25hbWUubWlkZGxlTmFtZSdcclxuICB8ICduYW1lJ1xyXG4gIHwgJ25pY2tuYW1lJ1xyXG4gIHwgJ25vdGUnXHJcbiAgfCAnb3JnYW5pemF0aW9ucydcclxuICB8ICdwaG9uZU51bWJlcnMnXHJcbiAgfCAncGhvdG9zJ1xyXG4gIHwgJ3Bvc3RhbENvZGUnXHJcbiAgfCAncmVnaW9uJ1xyXG4gIHwgJ3N0cmVldEFkZHJlc3MnXHJcbiAgfCAndGl0bGUnXHJcbiAgfCAndXJscyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0UHJvcGVydGllcyB7XHJcbiAgLyoqIEEgZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXIuICovXHJcbiAgaWQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBBIGdsb2JhbGx5IHVuaXF1ZSBpZGVudGlmaWVyIG9uIEFuZHJvaWQuICovXHJcbiAgcmF3SWQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGUgbmFtZSBvZiB0aGlzIENvbnRhY3QsIHN1aXRhYmxlIGZvciBkaXNwbGF5IHRvIGVuZCB1c2Vycy4gKi9cclxuICBkaXNwbGF5TmFtZT86IHN0cmluZztcclxuXHJcbiAgLyoqIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBjb21wb25lbnRzIG9mIGEgcGVyc29ucyBuYW1lLiAqL1xyXG4gIG5hbWU/OiBJQ29udGFjdE5hbWU7XHJcblxyXG4gIC8qKiBBIGNhc3VhbCBuYW1lIGJ5IHdoaWNoIHRvIGFkZHJlc3MgdGhlIGNvbnRhY3QuICovXHJcbiAgbmlja25hbWU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBBbiBhcnJheSBvZiBhbGwgdGhlIGNvbnRhY3QncyBwaG9uZSBudW1iZXJzLiAqL1xyXG4gIHBob25lTnVtYmVycz86IElDb250YWN0RmllbGRbXTtcclxuXHJcbiAgLyoqIEFuIGFycmF5IG9mIGFsbCB0aGUgY29udGFjdCdzIGVtYWlsIGFkZHJlc3Nlcy4gKi9cclxuICBlbWFpbHM/OiBJQ29udGFjdEZpZWxkW107XHJcblxyXG4gIC8qKiBBbiBhcnJheSBvZiBhbGwgdGhlIGNvbnRhY3QncyBhZGRyZXNzZXMuICovXHJcbiAgYWRkcmVzc2VzPzogSUNvbnRhY3RBZGRyZXNzW107XHJcblxyXG4gIC8qKiBBbiBhcnJheSBvZiBhbGwgdGhlIGNvbnRhY3QncyBJTSBhZGRyZXNzZXMuICovXHJcbiAgaW1zPzogSUNvbnRhY3RGaWVsZFtdO1xyXG5cclxuICAvKiogQW4gYXJyYXkgb2YgYWxsIHRoZSBjb250YWN0J3Mgb3JnYW5pemF0aW9ucy4gKi9cclxuICBvcmdhbml6YXRpb25zPzogSUNvbnRhY3RPcmdhbml6YXRpb25bXTtcclxuXHJcbiAgLyoqIFRoZSBiaXJ0aGRheSBvZiB0aGUgY29udGFjdC4gKi9cclxuICBiaXJ0aGRheT86IERhdGU7XHJcblxyXG4gIC8qKiBBIG5vdGUgYWJvdXQgdGhlIGNvbnRhY3QuICovXHJcbiAgbm90ZT86IHN0cmluZztcclxuXHJcbiAgLyoqIEFuIGFycmF5IG9mIHRoZSBjb250YWN0J3MgcGhvdG9zLiAqL1xyXG4gIHBob3Rvcz86IElDb250YWN0RmllbGRbXTtcclxuXHJcbiAgLyoqIEFuIGFycmF5IG9mIGFsbCB0aGUgdXNlci1kZWZpbmVkIGNhdGVnb3JpZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250YWN0LiAqL1xyXG4gIGNhdGVnb3JpZXM/OiBJQ29udGFjdEZpZWxkW107XHJcblxyXG4gIC8qKiBBbiBhcnJheSBvZiB3ZWIgcGFnZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250YWN0LiAqL1xyXG4gIHVybHM/OiBJQ29udGFjdEZpZWxkW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29udGFjdCBpbXBsZW1lbnRzIElDb250YWN0UHJvcGVydGllcyB7XHJcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG5hbWU6IElDb250YWN0TmFtZTtcclxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG5pY2tuYW1lOiBzdHJpbmc7XHJcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBwaG9uZU51bWJlcnM6IElDb250YWN0RmllbGRbXTtcclxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGVtYWlsczogSUNvbnRhY3RGaWVsZFtdO1xyXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgYWRkcmVzc2VzOiBJQ29udGFjdEFkZHJlc3NbXTtcclxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGltczogSUNvbnRhY3RGaWVsZFtdO1xyXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgb3JnYW5pemF0aW9uczogSUNvbnRhY3RPcmdhbml6YXRpb25bXTtcclxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGJpcnRoZGF5OiBEYXRlO1xyXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbm90ZTogc3RyaW5nO1xyXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgcGhvdG9zOiBJQ29udGFjdEZpZWxkW107XHJcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBjYXRlZ29yaWVzOiBJQ29udGFjdEZpZWxkW107XHJcbiAgQEluc3RhbmNlUHJvcGVydHkoKSB1cmxzOiBJQ29udGFjdEZpZWxkW107XHJcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcclxuXHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eSgnbmF2aWdhdG9yLmNvbnRhY3RzJywgJ2NyZWF0ZScsICdDb250YWN0cycpID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmF2aWdhdG9yLmNvbnRhY3RzLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEluc3RhbmNlQ2hlY2soKVxyXG4gIGNsb25lKCk6IENvbnRhY3Qge1xyXG4gICAgY29uc3QgbmV3Q29udGFjdDogYW55ID0gbmV3IENvbnRhY3QoKTtcclxuICAgIGZvciAoY29uc3QgcHJvcCBpbiB0aGlzKSB7XHJcbiAgICAgIGlmIChwcm9wID09PSAnaWQnKSByZXR1cm47XHJcbiAgICAgIG5ld0NvbnRhY3RbcHJvcF0gPSB0aGlzW3Byb3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0NvbnRhY3Q7XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YUluc3RhbmNlKClcclxuICByZW1vdmUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBJbnN0YW5jZUNoZWNrKClcclxuICBzYXZlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uuc2F2ZSgoY29udGFjdDogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBjb250YWN0O1xyXG4gICAgICAgIHJlc29sdmUodGhpcyk7XHJcbiAgICAgIH0sIHJlamVjdCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0RXJyb3Ige1xyXG4gIC8qKiBFcnJvciBjb2RlICovXHJcbiAgY29kZTogbnVtYmVyO1xyXG4gIC8qKiBFcnJvciBtZXNzYWdlICovXHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgQ29udGFjdEVycm9yOiB7XHJcbiAgbmV3IChjb2RlOiBudW1iZXIpOiBJQ29udGFjdEVycm9yO1xyXG4gIFVOS05PV05fRVJST1I6IG51bWJlcjtcclxuICBJTlZBTElEX0FSR1VNRU5UX0VSUk9SOiBudW1iZXI7XHJcbiAgVElNRU9VVF9FUlJPUjogbnVtYmVyO1xyXG4gIFBFTkRJTkdfT1BFUkFUSU9OX0VSUk9SOiBudW1iZXI7XHJcbiAgSU9fRVJST1I6IG51bWJlcjtcclxuICBOT1RfU1VQUE9SVEVEX0VSUk9SOiBudW1iZXI7XHJcbiAgUEVSTUlTU0lPTl9ERU5JRURfRVJST1I6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3ROYW1lIHtcclxuICAvKiogVGhlIGNvbXBsZXRlIG5hbWUgb2YgdGhlIGNvbnRhY3QuICovXHJcbiAgZm9ybWF0dGVkPzogc3RyaW5nO1xyXG4gIC8qKiBUaGUgY29udGFjdCdzIGZhbWlseSBuYW1lLiAqL1xyXG4gIGZhbWlseU5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqIFRoZSBjb250YWN0J3MgZ2l2ZW4gbmFtZS4gKi9cclxuICBnaXZlbk5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqIFRoZSBjb250YWN0J3MgbWlkZGxlIG5hbWUuICovXHJcbiAgbWlkZGxlTmFtZT86IHN0cmluZztcclxuICAvKiogVGhlIGNvbnRhY3QncyBwcmVmaXggKGV4YW1wbGUgTXIuIG9yIERyLikgKi9cclxuICBob25vcmlmaWNQcmVmaXg/OiBzdHJpbmc7XHJcbiAgLyoqIFRoZSBjb250YWN0J3Mgc3VmZml4IChleGFtcGxlIEVzcS4pLiAqL1xyXG4gIGhvbm9yaWZpY1N1ZmZpeD86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0TmFtZSBpbXBsZW1lbnRzIElDb250YWN0TmFtZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZm9ybWF0dGVkPzogc3RyaW5nLFxyXG4gICAgcHVibGljIGZhbWlseU5hbWU/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgZ2l2ZW5OYW1lPzogc3RyaW5nLFxyXG4gICAgcHVibGljIG1pZGRsZU5hbWU/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgaG9ub3JpZmljUHJlZml4Pzogc3RyaW5nLFxyXG4gICAgcHVibGljIGhvbm9yaWZpY1N1ZmZpeD86IHN0cmluZ1xyXG4gICkge31cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdEZpZWxkIHtcclxuICAvKiogQSBzdHJpbmcgdGhhdCBpbmRpY2F0ZXMgd2hhdCB0eXBlIG9mIGZpZWxkIHRoaXMgaXMsIGhvbWUgZm9yIGV4YW1wbGUuICovXHJcbiAgdHlwZT86IHN0cmluZztcclxuICAvKiogVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCwgc3VjaCBhcyBhIHBob25lIG51bWJlciBvciBlbWFpbCBhZGRyZXNzLiAqL1xyXG4gIHZhbHVlPzogc3RyaW5nO1xyXG4gIC8qKiBTZXQgdG8gdHJ1ZSBpZiB0aGlzIENvbnRhY3RGaWVsZCBjb250YWlucyB0aGUgdXNlcidzIHByZWZlcnJlZCB2YWx1ZS4gKi9cclxuICBwcmVmPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0RmllbGQgaW1wbGVtZW50cyBJQ29udGFjdEZpZWxkIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZT86IHN0cmluZywgcHVibGljIHZhbHVlPzogc3RyaW5nLCBwdWJsaWMgcHJlZj86IGJvb2xlYW4pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RBZGRyZXNzIHtcclxuICAvKiogU2V0IHRvIHRydWUgaWYgdGhpcyBDb250YWN0QWRkcmVzcyBjb250YWlucyB0aGUgdXNlcidzIHByZWZlcnJlZCB2YWx1ZS4gKi9cclxuICBwcmVmPzogYm9vbGVhbjtcclxuICAvKiogQSBzdHJpbmcgaW5kaWNhdGluZyB3aGF0IHR5cGUgb2YgZmllbGQgdGhpcyBpcywgaG9tZSBmb3IgZXhhbXBsZS4gKi9cclxuICB0eXBlPzogc3RyaW5nO1xyXG4gIC8qKiBUaGUgZnVsbCBhZGRyZXNzIGZvcm1hdHRlZCBmb3IgZGlzcGxheS4gKi9cclxuICBmb3JtYXR0ZWQ/OiBzdHJpbmc7XHJcbiAgLyoqIFRoZSBmdWxsIHN0cmVldCBhZGRyZXNzLiAqL1xyXG4gIHN0cmVldEFkZHJlc3M/OiBzdHJpbmc7XHJcbiAgLyoqIFRoZSBjaXR5IG9yIGxvY2FsaXR5LiAqL1xyXG4gIGxvY2FsaXR5Pzogc3RyaW5nO1xyXG4gIC8qKiBUaGUgc3RhdGUgb3IgcmVnaW9uLiAqL1xyXG4gIHJlZ2lvbj86IHN0cmluZztcclxuICAvKiogVGhlIHppcCBjb2RlIG9yIHBvc3RhbCBjb2RlLiAqL1xyXG4gIHBvc3RhbENvZGU/OiBzdHJpbmc7XHJcbiAgLyoqIFRoZSBjb3VudHJ5IG5hbWUuICovXHJcbiAgY291bnRyeT86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0QWRkcmVzcyBpbXBsZW1lbnRzIElDb250YWN0QWRkcmVzcyB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcHJlZj86IGJvb2xlYW4sXHJcbiAgICBwdWJsaWMgdHlwZT86IHN0cmluZyxcclxuICAgIHB1YmxpYyBmb3JtYXR0ZWQ/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgc3RyZWV0QWRkcmVzcz86IHN0cmluZyxcclxuICAgIHB1YmxpYyBsb2NhbGl0eT86IHN0cmluZyxcclxuICAgIHB1YmxpYyByZWdpb24/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgcG9zdGFsQ29kZT86IHN0cmluZyxcclxuICAgIHB1YmxpYyBjb3VudHJ5Pzogc3RyaW5nXHJcbiAgKSB7fVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0T3JnYW5pemF0aW9uIHtcclxuICAvKiogU2V0IHRvIHRydWUgaWYgdGhpcyBDb250YWN0T3JnYW5pemF0aW9uIGNvbnRhaW5zIHRoZSB1c2VyJ3MgcHJlZmVycmVkIHZhbHVlLiAqL1xyXG4gIHByZWY/OiBib29sZWFuO1xyXG4gIC8qKiBBIHN0cmluZyB0aGF0IGluZGljYXRlcyB3aGF0IHR5cGUgb2YgZmllbGQgdGhpcyBpcywgaG9tZSBmb3IgZXhhbXBsZS4gKi9cclxuICB0eXBlPzogc3RyaW5nO1xyXG4gIC8qKiBUaGUgbmFtZSBvZiB0aGUgb3JnYW5pemF0aW9uLiAqL1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqIFRoZSBkZXBhcnRtZW50IHRoZSBjb250cmFjdCB3b3JrcyBmb3IuICovXHJcbiAgZGVwYXJ0bWVudD86IHN0cmluZztcclxuICAvKiogVGhlIGNvbnRhY3QncyB0aXRsZSBhdCB0aGUgb3JnYW5pemF0aW9uLiAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbnRhY3RPcmdhbml6YXRpb24gaW1wbGVtZW50cyBJQ29udGFjdE9yZ2FuaXphdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdHlwZT86IHN0cmluZyxcclxuICAgIHB1YmxpYyBuYW1lPzogc3RyaW5nLFxyXG4gICAgcHVibGljIGRlcGFydG1lbnQ/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgcHJlZj86IGJvb2xlYW5cclxuICApIHt9XHJcbn1cclxuXHJcbi8qKiBTZWFyY2ggb3B0aW9ucyB0byBmaWx0ZXIgbmF2aWdhdG9yLmNvbnRhY3RzLiAgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdEZpbmRPcHRpb25zIHtcclxuICAvKiogVGhlIHNlYXJjaCBzdHJpbmcgdXNlZCB0byBmaW5kIG5hdmlnYXRvci5jb250YWN0cy4gKi9cclxuICBmaWx0ZXI/OiBzdHJpbmc7XHJcbiAgLyoqIERldGVybWluZXMgaWYgdGhlIGZpbmQgb3BlcmF0aW9uIHJldHVybnMgbXVsdGlwbGUgbmF2aWdhdG9yLmNvbnRhY3RzLiBEZWZhdWx0cyB0byBmYWxzZS4gKi9cclxuICBtdWx0aXBsZT86IGJvb2xlYW47XHJcbiAgLyoqIENvbnRhY3QgZmllbGRzIHRvIGJlIHJldHVybmVkIGJhY2suIElmIHNwZWNpZmllZCwgdGhlIHJlc3VsdGluZyBDb250YWN0IG9iamVjdCBvbmx5IGZlYXR1cmVzIHZhbHVlcyBmb3IgdGhlc2UgZmllbGRzLiAqL1xyXG4gIGRlc2lyZWRGaWVsZHM/OiBzdHJpbmdbXTtcclxuICAvKipcclxuICAgKiAoQW5kcm9pZCBvbmx5KTogRmlsdGVycyB0aGUgc2VhcmNoIHRvIG9ubHkgcmV0dXJuIGNvbnRhY3RzIHdpdGggYSBwaG9uZSBudW1iZXIgaW5mb3JtZWQuXHJcbiAgICovXHJcbiAgaGFzUGhvbmVOdW1iZXI/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbnRhY3RGaW5kT3B0aW9ucyBpbXBsZW1lbnRzIElDb250YWN0RmluZE9wdGlvbnMge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGZpbHRlcj86IHN0cmluZyxcclxuICAgIHB1YmxpYyBtdWx0aXBsZT86IGJvb2xlYW4sXHJcbiAgICBwdWJsaWMgZGVzaXJlZEZpZWxkcz86IHN0cmluZ1tdLFxyXG4gICAgcHVibGljIGhhc1Bob25lTnVtYmVyPzogYm9vbGVhblxyXG4gICkge31cclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIENvbnRhY3RzXHJcbiAqIEBwcmVtaWVyIGNvbnRhY3RzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBY2Nlc3MgYW5kIG1hbmFnZSBDb250YWN0cyBvbiB0aGUgZGV2aWNlLlxyXG4gKlxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKiBAdXNhZ2VcclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBDb250YWN0cywgQ29udGFjdCwgQ29udGFjdEZpZWxkLCBDb250YWN0TmFtZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29udGFjdHMvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWN0czogQ29udGFjdHMpIHsgfVxyXG4gKlxyXG4gKiBsZXQgY29udGFjdDogQ29udGFjdCA9IHRoaXMuY29udGFjdHMuY3JlYXRlKCk7XHJcbiAqXHJcbiAqIGNvbnRhY3QubmFtZSA9IG5ldyBDb250YWN0TmFtZShudWxsLCAnU21pdGgnLCAnSm9obicpO1xyXG4gKiBjb250YWN0LnBob25lTnVtYmVycyA9IFtuZXcgQ29udGFjdEZpZWxkKCdtb2JpbGUnLCAnNjQ3MTIzNDU2NycpXTtcclxuICogY29udGFjdC5zYXZlKCkudGhlbihcclxuICogICAoKSA9PiBjb25zb2xlLmxvZygnQ29udGFjdCBzYXZlZCEnLCBjb250YWN0KSxcclxuICogICAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGNvbnRhY3QuJywgZXJyb3IpXHJcbiAqICk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAY2xhc3Nlc1xyXG4gKiBDb250YWN0XHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIElDb250YWN0UHJvcGVydGllc1xyXG4gKiBJQ29udGFjdEVycm9yXHJcbiAqIElDb250YWN0TmFtZVxyXG4gKiBJQ29udGFjdEZpZWxkXHJcbiAqIElDb250YWN0QWRkcmVzc1xyXG4gKiBJQ29udGFjdE9yZ2FuaXphdGlvblxyXG4gKiBJQ29udGFjdEZpbmRPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQ29udGFjdHMnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNvbnRhY3RzJyxcclxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuY29udGFjdHMnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNvbnRhY3RzJyxcclxuICBwbGF0Zm9ybXM6IFtcclxuICAgICdBbmRyb2lkJyxcclxuICAgICdCbGFja0JlcnJ5IDEwJyxcclxuICAgICdCcm93c2VyJyxcclxuICAgICdGaXJlZm94IE9TJyxcclxuICAgICdpT1MnLFxyXG4gICAgJ1VidW50dScsXHJcbiAgICAnV2luZG93cycsXHJcbiAgICAnV2luZG93cyA4JyxcclxuICAgICdXaW5kb3dzIFBob25lJyxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdHMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgc2luZ2xlIGNvbnRhY3QuXHJcbiAgICogQHJldHVybnMge0NvbnRhY3R9IFJldHVybnMgYSBDb250YWN0IG9iamVjdFxyXG4gICAqL1xyXG4gIGNyZWF0ZSgpOiBDb250YWN0IHtcclxuICAgIHJldHVybiBuZXcgQ29udGFjdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VhcmNoIGZvciBjb250YWN0cyBpbiB0aGUgQ29udGFjdHMgbGlzdC5cclxuICAgKiBAcGFyYW0ge0NvbnRhY3RGaWVsZFR5cGVbXX0gZmllbGRzIENvbnRhY3QgZmllbGRzIHRvIGJlIHVzZWQgYXMgYSBzZWFyY2ggcXVhbGlmaWVyXHJcbiAgICogQHBhcmFtIHtJQ29udGFjdEZpbmRPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9uYWwgb3B0aW9ucyBmb3IgdGhlIHF1ZXJ5XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Q29udGFjdFtdPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBzZWFyY2ggcmVzdWx0cyAoYW4gYXJyYXkgb2YgQ29udGFjdCBvYmplY3RzKVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGZpbmQoZmllbGRzOiBDb250YWN0RmllbGRUeXBlW10sIG9wdGlvbnM/OiBJQ29udGFjdEZpbmRPcHRpb25zKTogUHJvbWlzZTxDb250YWN0W10+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlKChyZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICBuYXZpZ2F0b3IuY29udGFjdHMuZmluZChcclxuICAgICAgICBmaWVsZHMsXHJcbiAgICAgICAgKGNvbnRhY3RzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShjb250YWN0cy5tYXAocHJvY2Vzc0NvbnRhY3QpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlamVjdCxcclxuICAgICAgICBvcHRpb25zXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBhIHNpbmdsZSBDb250YWN0LlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRhY3Q+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHNlbGVjdGVkIENvbnRhY3RcclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBwaWNrQ29udGFjdCgpOiBQcm9taXNlPENvbnRhY3Q+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlKChyZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICBuYXZpZ2F0b3IuY29udGFjdHMucGlja0NvbnRhY3QoKGNvbnRhY3Q6IGFueSkgPT4gcmVzb2x2ZShwcm9jZXNzQ29udGFjdChjb250YWN0KSksIHJlamVjdCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5mdW5jdGlvbiBwcm9jZXNzQ29udGFjdChjb250YWN0OiBhbnkpIHtcclxuICBjb25zdCBuZXdDb250YWN0ID0gbmV3IENvbnRhY3QoKTtcclxuICBmb3IgKGNvbnN0IHByb3AgaW4gY29udGFjdCkge1xyXG4gICAgaWYgKHR5cGVvZiBjb250YWN0W3Byb3BdID09PSAnZnVuY3Rpb24nKSBjb250aW51ZTtcclxuICAgIG5ld0NvbnRhY3RbcHJvcF0gPSBjb250YWN0W3Byb3BdO1xyXG4gIH1cclxuICByZXR1cm4gbmV3Q29udGFjdDtcclxufVxyXG4iXX0=