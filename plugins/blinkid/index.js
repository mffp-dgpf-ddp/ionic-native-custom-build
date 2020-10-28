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
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@ionic-native/core';
export var BarcodeType;
(function (BarcodeType) {
    BarcodeType[BarcodeType["None"] = 1] = "None";
    BarcodeType[BarcodeType["QRCode"] = 2] = "QRCode";
    BarcodeType[BarcodeType["DataMatrix"] = 3] = "DataMatrix";
    BarcodeType[BarcodeType["UPCE"] = 4] = "UPCE";
    BarcodeType[BarcodeType["UPCA"] = 5] = "UPCA";
    BarcodeType[BarcodeType["EAN8"] = 6] = "EAN8";
    BarcodeType[BarcodeType["EAN13"] = 7] = "EAN13";
    BarcodeType[BarcodeType["Code128"] = 8] = "Code128";
    BarcodeType[BarcodeType["Code39"] = 9] = "Code39";
    BarcodeType[BarcodeType["ITF"] = 10] = "ITF";
    BarcodeType[BarcodeType["Aztec"] = 11] = "Aztec";
    BarcodeType[BarcodeType["PDF417"] = 12] = "PDF417";
})(BarcodeType || (BarcodeType = {}));
export var RecognizerResultState;
(function (RecognizerResultState) {
    RecognizerResultState[RecognizerResultState["empty"] = 1] = "empty";
    RecognizerResultState[RecognizerResultState["uncertain"] = 2] = "uncertain";
    RecognizerResultState[RecognizerResultState["valid"] = 3] = "valid";
})(RecognizerResultState || (RecognizerResultState = {}));
export var MrtdDocumentType;
(function (MrtdDocumentType) {
    MrtdDocumentType[MrtdDocumentType["Unknown"] = 1] = "Unknown";
    MrtdDocumentType[MrtdDocumentType["IdentityCard"] = 2] = "IdentityCard";
    MrtdDocumentType[MrtdDocumentType["Passport"] = 3] = "Passport";
    MrtdDocumentType[MrtdDocumentType["Visa"] = 4] = "Visa";
    MrtdDocumentType[MrtdDocumentType["GreenCard"] = 5] = "GreenCard";
    MrtdDocumentType[MrtdDocumentType["MalaysianPassIMM13P"] = 6] = "MalaysianPassIMM13P";
})(MrtdDocumentType || (MrtdDocumentType = {}));
export var EudlCountry;
(function (EudlCountry) {
    EudlCountry[EudlCountry["UK"] = 1] = "UK";
    EudlCountry[EudlCountry["Germany"] = 2] = "Germany";
    EudlCountry[EudlCountry["Austria"] = 3] = "Austria";
    EudlCountry[EudlCountry["Automatic"] = 4] = "Automatic";
})(EudlCountry || (EudlCountry = {}));
export var DocumentFaceDetectorType;
(function (DocumentFaceDetectorType) {
    DocumentFaceDetectorType[DocumentFaceDetectorType["TD1"] = 1] = "TD1";
    DocumentFaceDetectorType[DocumentFaceDetectorType["TD2"] = 2] = "TD2";
    DocumentFaceDetectorType[DocumentFaceDetectorType["PassportsAndVisas"] = 3] = "PassportsAndVisas";
})(DocumentFaceDetectorType || (DocumentFaceDetectorType = {}));
export var UsdlKeys;
(function (UsdlKeys) {
    UsdlKeys[UsdlKeys["DocumentType"] = 0] = "DocumentType";
    UsdlKeys[UsdlKeys["StandardVersionNumber"] = 1] = "StandardVersionNumber";
    UsdlKeys[UsdlKeys["CustomerFamilyName"] = 2] = "CustomerFamilyName";
    UsdlKeys[UsdlKeys["CustomerFirstName"] = 3] = "CustomerFirstName";
    UsdlKeys[UsdlKeys["CustomerFullName"] = 4] = "CustomerFullName";
    UsdlKeys[UsdlKeys["DateOfBirth"] = 5] = "DateOfBirth";
    UsdlKeys[UsdlKeys["Sex"] = 6] = "Sex";
    UsdlKeys[UsdlKeys["EyeColor"] = 7] = "EyeColor";
    UsdlKeys[UsdlKeys["AddressStreet"] = 8] = "AddressStreet";
    UsdlKeys[UsdlKeys["AddressCity"] = 9] = "AddressCity";
    UsdlKeys[UsdlKeys["AddressJurisdictionCode"] = 10] = "AddressJurisdictionCode";
    UsdlKeys[UsdlKeys["AddressPostalCode"] = 11] = "AddressPostalCode";
    UsdlKeys[UsdlKeys["FullAddress"] = 12] = "FullAddress";
    UsdlKeys[UsdlKeys["Height"] = 13] = "Height";
    UsdlKeys[UsdlKeys["HeightIn"] = 14] = "HeightIn";
    UsdlKeys[UsdlKeys["HeightCm"] = 15] = "HeightCm";
    UsdlKeys[UsdlKeys["CustomerMiddleName"] = 16] = "CustomerMiddleName";
    UsdlKeys[UsdlKeys["HairColor"] = 17] = "HairColor";
    UsdlKeys[UsdlKeys["NameSuffix"] = 18] = "NameSuffix";
    UsdlKeys[UsdlKeys["AKAFullName"] = 19] = "AKAFullName";
    UsdlKeys[UsdlKeys["AKAFamilyName"] = 20] = "AKAFamilyName";
    UsdlKeys[UsdlKeys["AKAGivenName"] = 21] = "AKAGivenName";
    UsdlKeys[UsdlKeys["AKASuffixName"] = 22] = "AKASuffixName";
    UsdlKeys[UsdlKeys["WeightRange"] = 23] = "WeightRange";
    UsdlKeys[UsdlKeys["WeightPounds"] = 24] = "WeightPounds";
    UsdlKeys[UsdlKeys["WeightKilograms"] = 25] = "WeightKilograms";
    UsdlKeys[UsdlKeys["CustomerIdNumber"] = 26] = "CustomerIdNumber";
    UsdlKeys[UsdlKeys["FamilyNameTruncation"] = 27] = "FamilyNameTruncation";
    UsdlKeys[UsdlKeys["FirstNameTruncation"] = 28] = "FirstNameTruncation";
    UsdlKeys[UsdlKeys["MiddleNameTruncation"] = 29] = "MiddleNameTruncation";
    UsdlKeys[UsdlKeys["PlaceOfBirth"] = 30] = "PlaceOfBirth";
    UsdlKeys[UsdlKeys["AddressStreet2"] = 31] = "AddressStreet2";
    UsdlKeys[UsdlKeys["RaceEthnicity"] = 32] = "RaceEthnicity";
    UsdlKeys[UsdlKeys["NamePrefix"] = 33] = "NamePrefix";
    UsdlKeys[UsdlKeys["CountryIdentification"] = 34] = "CountryIdentification";
    UsdlKeys[UsdlKeys["ResidenceStreetAddress"] = 35] = "ResidenceStreetAddress";
    UsdlKeys[UsdlKeys["ResidenceStreetAddress2"] = 36] = "ResidenceStreetAddress2";
    UsdlKeys[UsdlKeys["ResidenceCity"] = 37] = "ResidenceCity";
    UsdlKeys[UsdlKeys["ResidenceJurisdictionCode"] = 38] = "ResidenceJurisdictionCode";
    UsdlKeys[UsdlKeys["ResidencePostalCode"] = 39] = "ResidencePostalCode";
    UsdlKeys[UsdlKeys["ResidenceFullAddress"] = 40] = "ResidenceFullAddress";
    UsdlKeys[UsdlKeys["Under18"] = 41] = "Under18";
    UsdlKeys[UsdlKeys["Under19"] = 42] = "Under19";
    UsdlKeys[UsdlKeys["Under21"] = 43] = "Under21";
    UsdlKeys[UsdlKeys["SocialSecurityNumber"] = 44] = "SocialSecurityNumber";
    UsdlKeys[UsdlKeys["AKASocialSecurityNumber"] = 45] = "AKASocialSecurityNumber";
    UsdlKeys[UsdlKeys["AKAMiddleName"] = 46] = "AKAMiddleName";
    UsdlKeys[UsdlKeys["AKAPrefixName"] = 47] = "AKAPrefixName";
    UsdlKeys[UsdlKeys["OrganDonor"] = 48] = "OrganDonor";
    UsdlKeys[UsdlKeys["Veteran"] = 49] = "Veteran";
    UsdlKeys[UsdlKeys["AKADateOfBirth"] = 50] = "AKADateOfBirth";
    UsdlKeys[UsdlKeys["IssuerIdentificationNumber"] = 51] = "IssuerIdentificationNumber";
    UsdlKeys[UsdlKeys["DocumentExpirationDate"] = 52] = "DocumentExpirationDate";
    UsdlKeys[UsdlKeys["JurisdictionVersionNumber"] = 53] = "JurisdictionVersionNumber";
    UsdlKeys[UsdlKeys["JurisdictionVehicleClass"] = 54] = "JurisdictionVehicleClass";
    UsdlKeys[UsdlKeys["JurisdictionRestrictionCodes"] = 55] = "JurisdictionRestrictionCodes";
    UsdlKeys[UsdlKeys["JurisdictionEndorsementCodes"] = 56] = "JurisdictionEndorsementCodes";
    UsdlKeys[UsdlKeys["DocumentIssueDate"] = 57] = "DocumentIssueDate";
    UsdlKeys[UsdlKeys["FederalCommercialVehicleCodes"] = 58] = "FederalCommercialVehicleCodes";
    UsdlKeys[UsdlKeys["IssuingJurisdiction"] = 59] = "IssuingJurisdiction";
    UsdlKeys[UsdlKeys["StandardVehicleClassification"] = 60] = "StandardVehicleClassification";
    UsdlKeys[UsdlKeys["IssuingJurisdictionName"] = 61] = "IssuingJurisdictionName";
    UsdlKeys[UsdlKeys["StandardEndorsementCode"] = 62] = "StandardEndorsementCode";
    UsdlKeys[UsdlKeys["StandardRestrictionCode"] = 63] = "StandardRestrictionCode";
    UsdlKeys[UsdlKeys["JurisdictionVehicleClassificationDescription"] = 64] = "JurisdictionVehicleClassificationDescription";
    UsdlKeys[UsdlKeys["JurisdictionEndorsmentCodeDescription"] = 65] = "JurisdictionEndorsmentCodeDescription";
    UsdlKeys[UsdlKeys["JurisdictionRestrictionCodeDescription"] = 66] = "JurisdictionRestrictionCodeDescription";
    UsdlKeys[UsdlKeys["InventoryControlNumber"] = 67] = "InventoryControlNumber";
    UsdlKeys[UsdlKeys["CardRevisionDate"] = 68] = "CardRevisionDate";
    UsdlKeys[UsdlKeys["DocumentDiscriminator"] = 69] = "DocumentDiscriminator";
    UsdlKeys[UsdlKeys["LimitedDurationDocument"] = 70] = "LimitedDurationDocument";
    UsdlKeys[UsdlKeys["AuditInformation"] = 71] = "AuditInformation";
    UsdlKeys[UsdlKeys["ComplianceType"] = 72] = "ComplianceType";
    UsdlKeys[UsdlKeys["IssueTimestamp"] = 73] = "IssueTimestamp";
    UsdlKeys[UsdlKeys["PermitExpirationDate"] = 74] = "PermitExpirationDate";
    UsdlKeys[UsdlKeys["PermitIdentifier"] = 75] = "PermitIdentifier";
    UsdlKeys[UsdlKeys["PermitIssueDate"] = 76] = "PermitIssueDate";
    UsdlKeys[UsdlKeys["NumberOfDuplicates"] = 77] = "NumberOfDuplicates";
    UsdlKeys[UsdlKeys["HAZMATExpirationDate"] = 78] = "HAZMATExpirationDate";
    UsdlKeys[UsdlKeys["MedicalIndicator"] = 79] = "MedicalIndicator";
    UsdlKeys[UsdlKeys["NonResident"] = 80] = "NonResident";
    UsdlKeys[UsdlKeys["UniqueCustomerId"] = 81] = "UniqueCustomerId";
    UsdlKeys[UsdlKeys["DataDiscriminator"] = 82] = "DataDiscriminator";
    UsdlKeys[UsdlKeys["DocumentExpirationMonth"] = 83] = "DocumentExpirationMonth";
    UsdlKeys[UsdlKeys["DocumentNonexpiring"] = 84] = "DocumentNonexpiring";
    UsdlKeys[UsdlKeys["SecurityVersion"] = 85] = "SecurityVersion";
})(UsdlKeys || (UsdlKeys = {}));
var BlinkIdOriginal = /** @class */ (function (_super) {
    __extends(BlinkIdOriginal, _super);
    function BlinkIdOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlinkIdOriginal.prototype.scanWithCamera = function (overlaySettings, recognizerCollection, licenses) { return cordova(this, "scanWithCamera", { "callbackOrder": "reverse" }, arguments); };
    Object.defineProperty(BlinkIdOriginal.prototype, "Date", {
        get: function () { return cordovaPropertyGet(this, "Date"); },
        set: function (value) { cordovaPropertySet(this, "Date", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "Point", {
        get: function () { return cordovaPropertyGet(this, "Point"); },
        set: function (value) { cordovaPropertySet(this, "Point", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "Quadrilateral", {
        get: function () { return cordovaPropertyGet(this, "Quadrilateral"); },
        set: function (value) { cordovaPropertySet(this, "Quadrilateral", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BarcodeOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BarcodeOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeOverlaySettings", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "DocumentOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentOverlaySettings", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "DocumentVerificationOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentVerificationOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentVerificationOverlaySettings", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardOverlaySettings", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "RecognizerCollection", {
        get: function () { return cordovaPropertyGet(this, "RecognizerCollection"); },
        set: function (value) { cordovaPropertySet(this, "RecognizerCollection", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BarcodeRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BarcodeRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SuccessFrameGrabberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SuccessFrameGrabberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustraliaDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustraliaDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustraliaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustraliaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardEliteRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardEliteRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CroatiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CroatiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CroatiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CyprusIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CyprusIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CyprusIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CyprusIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CzechiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CzechiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "DocumentFaceRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "DocumentFaceRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "DocumentFaceRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "EgyptIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "EgyptIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "EudlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EudlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EudlRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyOldIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyOldIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "HongKongIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "HongKongIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IkadRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IkadRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IndonesiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IndonesiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IrelandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IrelandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ItalyDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ItalyDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "KuwaitIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "KuwaitIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "KuwaitIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "KuwaitIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MalaysiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MalaysiaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MalaysiaMyTenteraRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MalaysiaMyTenteraRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MexicoVoterIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MexicoVoterIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MoroccoIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MoroccoIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MoroccoIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MoroccoIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MrtdCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MrtdCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MrtdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MrtdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MyKadBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MyKadBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MyKadFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MyKadFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "NewZealandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "NewZealandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "Pdf417RecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "Pdf417RecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417RecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "Pdf417Recognizer", {
        get: function () { return cordovaPropertyGet(this, "Pdf417Recognizer"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417Recognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "RomaniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "RomaniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SimNumberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SimNumberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeChangiEmployeeIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeChangiEmployeeIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SpainDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SpainDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwedenDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwedenDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "VinRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "VinRecognizer", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UsdlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UsdlRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UsdlCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UsdlCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    BlinkIdOriginal.pluginName = "BlinkId";
    BlinkIdOriginal.plugin = "blinkid-cordova";
    BlinkIdOriginal.pluginRef = "cordova.plugins.BlinkID";
    BlinkIdOriginal.repo = "https://github.com/BlinkID/blinkid-phonegap";
    BlinkIdOriginal.install = "ionic cordova plugin add blinkid-cordova --variable CAMERA_USAGE_DESCRIPTION=\"Enable your camera so that you can scan your ID to validate your account\"";
    BlinkIdOriginal.platforms = ["iOS", "Android"];
    return BlinkIdOriginal;
}(IonicNativePlugin));
var BlinkId = new BlinkIdOriginal();
export { BlinkId };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JsaW5raWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7QUFRekYsTUFBTSxDQUFOLElBQVksV0FhWDtBQWJELFdBQVksV0FBVztJQUNyQiw2Q0FBUSxDQUFBO0lBQ1IsaURBQVUsQ0FBQTtJQUNWLHlEQUFjLENBQUE7SUFDZCw2Q0FBUSxDQUFBO0lBQ1IsNkNBQVEsQ0FBQTtJQUNSLDZDQUFRLENBQUE7SUFDUiwrQ0FBUyxDQUFBO0lBQ1QsbURBQVcsQ0FBQTtJQUNYLGlEQUFVLENBQUE7SUFDViw0Q0FBUSxDQUFBO0lBQ1IsZ0RBQVUsQ0FBQTtJQUNWLGtEQUFXLENBQUE7QUFDYixDQUFDLEVBYlcsV0FBVyxLQUFYLFdBQVcsUUFhdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxxQkFJWDtBQUpELFdBQVkscUJBQXFCO0lBQy9CLG1FQUFTLENBQUE7SUFDVCwyRUFBYSxDQUFBO0lBQ2IsbUVBQVMsQ0FBQTtBQUNYLENBQUMsRUFKVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBSWhDO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBT1g7QUFQRCxXQUFZLGdCQUFnQjtJQUMxQiw2REFBVyxDQUFBO0lBQ1gsdUVBQWdCLENBQUE7SUFDaEIsK0RBQVksQ0FBQTtJQUNaLHVEQUFRLENBQUE7SUFDUixpRUFBYSxDQUFBO0lBQ2IscUZBQXVCLENBQUE7QUFDekIsQ0FBQyxFQVBXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFPM0I7QUFFRCxNQUFNLENBQU4sSUFBWSxXQUtYO0FBTEQsV0FBWSxXQUFXO0lBQ3JCLHlDQUFNLENBQUE7SUFDTixtREFBVyxDQUFBO0lBQ1gsbURBQVcsQ0FBQTtJQUNYLHVEQUFhLENBQUE7QUFDZixDQUFDLEVBTFcsV0FBVyxLQUFYLFdBQVcsUUFLdEI7QUFFRCxNQUFNLENBQU4sSUFBWSx3QkFJWDtBQUpELFdBQVksd0JBQXdCO0lBQ2xDLHFFQUFPLENBQUE7SUFDUCxxRUFBTyxDQUFBO0lBQ1AsaUdBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUpXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFJbkM7QUFFRCxNQUFNLENBQU4sSUFBWSxRQXVGWDtBQXZGRCxXQUFZLFFBQVE7SUFDbEIsdURBQWdCLENBQUE7SUFDaEIseUVBQXlCLENBQUE7SUFDekIsbUVBQXNCLENBQUE7SUFDdEIsaUVBQXFCLENBQUE7SUFDckIsK0RBQW9CLENBQUE7SUFDcEIscURBQWUsQ0FBQTtJQUNmLHFDQUFPLENBQUE7SUFDUCwrQ0FBWSxDQUFBO0lBQ1oseURBQWlCLENBQUE7SUFDakIscURBQWUsQ0FBQTtJQUNmLDhFQUE0QixDQUFBO0lBQzVCLGtFQUFzQixDQUFBO0lBQ3RCLHNEQUFnQixDQUFBO0lBQ2hCLDRDQUFXLENBQUE7SUFDWCxnREFBYSxDQUFBO0lBQ2IsZ0RBQWEsQ0FBQTtJQUNiLG9FQUF1QixDQUFBO0lBQ3ZCLGtEQUFjLENBQUE7SUFDZCxvREFBZSxDQUFBO0lBQ2Ysc0RBQWdCLENBQUE7SUFDaEIsMERBQWtCLENBQUE7SUFDbEIsd0RBQWlCLENBQUE7SUFDakIsMERBQWtCLENBQUE7SUFDbEIsc0RBQWdCLENBQUE7SUFDaEIsd0RBQWlCLENBQUE7SUFDakIsOERBQW9CLENBQUE7SUFDcEIsZ0VBQXFCLENBQUE7SUFDckIsd0VBQXlCLENBQUE7SUFDekIsc0VBQXdCLENBQUE7SUFDeEIsd0VBQXlCLENBQUE7SUFDekIsd0RBQWlCLENBQUE7SUFDakIsNERBQW1CLENBQUE7SUFDbkIsMERBQWtCLENBQUE7SUFDbEIsb0RBQWUsQ0FBQTtJQUNmLDBFQUEwQixDQUFBO0lBQzFCLDRFQUEyQixDQUFBO0lBQzNCLDhFQUE0QixDQUFBO0lBQzVCLDBEQUFrQixDQUFBO0lBQ2xCLGtGQUE4QixDQUFBO0lBQzlCLHNFQUF3QixDQUFBO0lBQ3hCLHdFQUF5QixDQUFBO0lBQ3pCLDhDQUFZLENBQUE7SUFDWiw4Q0FBWSxDQUFBO0lBQ1osOENBQVksQ0FBQTtJQUNaLHdFQUF5QixDQUFBO0lBQ3pCLDhFQUE0QixDQUFBO0lBQzVCLDBEQUFrQixDQUFBO0lBQ2xCLDBEQUFrQixDQUFBO0lBQ2xCLG9EQUFlLENBQUE7SUFDZiw4Q0FBWSxDQUFBO0lBQ1osNERBQW1CLENBQUE7SUFDbkIsb0ZBQStCLENBQUE7SUFDL0IsNEVBQTJCLENBQUE7SUFDM0Isa0ZBQThCLENBQUE7SUFDOUIsZ0ZBQTZCLENBQUE7SUFDN0Isd0ZBQWlDLENBQUE7SUFDakMsd0ZBQWlDLENBQUE7SUFDakMsa0VBQXNCLENBQUE7SUFDdEIsMEZBQWtDLENBQUE7SUFDbEMsc0VBQXdCLENBQUE7SUFDeEIsMEZBQWtDLENBQUE7SUFDbEMsOEVBQTRCLENBQUE7SUFDNUIsOEVBQTRCLENBQUE7SUFDNUIsOEVBQTRCLENBQUE7SUFDNUIsd0hBQWlELENBQUE7SUFDakQsMEdBQTBDLENBQUE7SUFDMUMsNEdBQTJDLENBQUE7SUFDM0MsNEVBQTJCLENBQUE7SUFDM0IsZ0VBQXFCLENBQUE7SUFDckIsMEVBQTBCLENBQUE7SUFDMUIsOEVBQTRCLENBQUE7SUFDNUIsZ0VBQXFCLENBQUE7SUFDckIsNERBQW1CLENBQUE7SUFDbkIsNERBQW1CLENBQUE7SUFDbkIsd0VBQXlCLENBQUE7SUFDekIsZ0VBQXFCLENBQUE7SUFDckIsOERBQW9CLENBQUE7SUFDcEIsb0VBQXVCLENBQUE7SUFDdkIsd0VBQXlCLENBQUE7SUFDekIsZ0VBQXFCLENBQUE7SUFDckIsc0RBQWdCLENBQUE7SUFDaEIsZ0VBQXFCLENBQUE7SUFDckIsa0VBQXNCLENBQUE7SUFDdEIsOEVBQTRCLENBQUE7SUFDNUIsc0VBQXdCLENBQUE7SUFDeEIsOERBQW9CLENBQUE7QUFDdEIsQ0FBQyxFQXZGVyxRQUFRLEtBQVIsUUFBUSxRQXVGbkI7O0lBd2lGNEIsMkJBQWlCOzs7O0lBVTVDLGdDQUFjLGFBQ1osZUFBZ0MsRUFDaEMsb0JBQTBDLEVBQzFDLFFBQWtCOzBCQUtELHlCQUFJOzs7Ozs7MEJBQ0osMEJBQUs7Ozs7OzswQkFDTCxrQ0FBYTs7Ozs7OzBCQUViLDJDQUFzQjs7Ozs7OzBCQUN0Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsd0RBQW1DOzs7Ozs7MEJBQ25DLDZDQUF3Qjs7Ozs7OzBCQUV4Qix5Q0FBb0I7Ozs7OzswQkFFcEIsNENBQXVCOzs7Ozs7MEJBQ3ZCLHNDQUFpQjs7Ozs7OzBCQUNqQix3REFBbUM7Ozs7OzswQkFDbkMsa0RBQTZCOzs7Ozs7MEJBRTdCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw4Q0FBeUI7Ozs7OzswQkFDekIsd0NBQW1COzs7Ozs7MEJBQ25CLG9EQUErQjs7Ozs7OzBCQUMvQixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsb0RBQStCOzs7Ozs7MEJBQy9CLGtEQUE2Qjs7Ozs7OzBCQUM3QixtREFBOEI7Ozs7OzswQkFDOUIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG9EQUErQjs7Ozs7OzBCQUMvQixrREFBNkI7Ozs7OzswQkFDN0IsaURBQTRCOzs7Ozs7MEJBQzVCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIseUNBQW9COzs7Ozs7MEJBQ3BCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIseUNBQW9COzs7Ozs7MEJBQ3BCLG1DQUFjOzs7Ozs7MEJBQ2QscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsc0RBQWlDOzs7Ozs7MEJBQ2pDLGdEQUEyQjs7Ozs7OzBCQUMzQix1REFBa0M7Ozs7OzswQkFDbEMsaURBQTRCOzs7Ozs7MEJBQzVCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLHlDQUFvQjs7Ozs7OzBCQUNwQixtQ0FBYzs7Ozs7OzBCQUNkLDhDQUF5Qjs7Ozs7OzBCQUN6Qix3Q0FBbUI7Ozs7OzswQkFDbkIsK0NBQTBCOzs7Ozs7MEJBQzFCLHlDQUFvQjs7Ozs7OzBCQUNwQixzREFBaUM7Ozs7OzswQkFDakMsZ0RBQTJCOzs7Ozs7MEJBQzNCLDJDQUFzQjs7Ozs7OzBCQUN0QixxQ0FBZ0I7Ozs7OzswQkFDaEIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2Qiw4Q0FBeUI7Ozs7OzswQkFDekIsd0NBQW1COzs7Ozs7MEJBQ25CLDhEQUF5Qzs7Ozs7OzBCQUN6Qyx3REFBbUM7Ozs7OzswQkFDbkMsc0RBQWlDOzs7Ozs7MEJBQ2pDLGdEQUEyQjs7Ozs7OzBCQUMzQixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsdURBQWtDOzs7Ozs7MEJBQ2xDLGlEQUE0Qjs7Ozs7OzBCQUM1QixzREFBaUM7Ozs7OzswQkFDakMsZ0RBQTJCOzs7Ozs7MEJBQzNCLHVEQUFrQzs7Ozs7OzBCQUNsQyxpREFBNEI7Ozs7OzswQkFDNUIsd0RBQW1DOzs7Ozs7MEJBQ25DLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw4REFBeUM7Ozs7OzswQkFDekMsd0RBQW1DOzs7Ozs7MEJBQ25DLDZEQUF3Qzs7Ozs7OzBCQUN4Qyx1REFBa0M7Ozs7OzswQkFDbEMsOERBQXlDOzs7Ozs7MEJBQ3pDLHdEQUFtQzs7Ozs7OzBCQUNuQyx3Q0FBbUI7Ozs7OzswQkFDbkIsa0NBQWE7Ozs7OzswQkFDYix5Q0FBb0I7Ozs7OzswQkFDcEIsbUNBQWM7Ozs7OzswQkFDZCxpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7Ozs7Ozs7a0JBMzJGM0M7RUFrckY2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGljZW5zZXMge1xyXG4gIGlvczogc3RyaW5nO1xyXG4gIGFuZHJvaWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFyY29kZVR5cGUge1xyXG4gIE5vbmUgPSAxLFxyXG4gIFFSQ29kZSA9IDIsXHJcbiAgRGF0YU1hdHJpeCA9IDMsXHJcbiAgVVBDRSA9IDQsXHJcbiAgVVBDQSA9IDUsXHJcbiAgRUFOOCA9IDYsXHJcbiAgRUFOMTMgPSA3LFxyXG4gIENvZGUxMjggPSA4LFxyXG4gIENvZGUzOSA9IDksXHJcbiAgSVRGID0gMTAsXHJcbiAgQXp0ZWMgPSAxMSxcclxuICBQREY0MTcgPSAxMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUmVjb2duaXplclJlc3VsdFN0YXRlIHtcclxuICBlbXB0eSA9IDEsXHJcbiAgdW5jZXJ0YWluID0gMixcclxuICB2YWxpZCA9IDMsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1ydGREb2N1bWVudFR5cGUge1xyXG4gIFVua25vd24gPSAxLFxyXG4gIElkZW50aXR5Q2FyZCA9IDIsXHJcbiAgUGFzc3BvcnQgPSAzLFxyXG4gIFZpc2EgPSA0LFxyXG4gIEdyZWVuQ2FyZCA9IDUsXHJcbiAgTWFsYXlzaWFuUGFzc0lNTTEzUCA9IDYsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEV1ZGxDb3VudHJ5IHtcclxuICBVSyA9IDEsXHJcbiAgR2VybWFueSA9IDIsXHJcbiAgQXVzdHJpYSA9IDMsXHJcbiAgQXV0b21hdGljID0gNCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRG9jdW1lbnRGYWNlRGV0ZWN0b3JUeXBlIHtcclxuICBURDEgPSAxLFxyXG4gIFREMiA9IDIsXHJcbiAgUGFzc3BvcnRzQW5kVmlzYXMgPSAzLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBVc2RsS2V5cyB7XHJcbiAgRG9jdW1lbnRUeXBlID0gMCxcclxuICBTdGFuZGFyZFZlcnNpb25OdW1iZXIgPSAxLFxyXG4gIEN1c3RvbWVyRmFtaWx5TmFtZSA9IDIsXHJcbiAgQ3VzdG9tZXJGaXJzdE5hbWUgPSAzLFxyXG4gIEN1c3RvbWVyRnVsbE5hbWUgPSA0LFxyXG4gIERhdGVPZkJpcnRoID0gNSxcclxuICBTZXggPSA2LFxyXG4gIEV5ZUNvbG9yID0gNyxcclxuICBBZGRyZXNzU3RyZWV0ID0gOCxcclxuICBBZGRyZXNzQ2l0eSA9IDksXHJcbiAgQWRkcmVzc0p1cmlzZGljdGlvbkNvZGUgPSAxMCxcclxuICBBZGRyZXNzUG9zdGFsQ29kZSA9IDExLFxyXG4gIEZ1bGxBZGRyZXNzID0gMTIsXHJcbiAgSGVpZ2h0ID0gMTMsXHJcbiAgSGVpZ2h0SW4gPSAxNCxcclxuICBIZWlnaHRDbSA9IDE1LFxyXG4gIEN1c3RvbWVyTWlkZGxlTmFtZSA9IDE2LFxyXG4gIEhhaXJDb2xvciA9IDE3LFxyXG4gIE5hbWVTdWZmaXggPSAxOCxcclxuICBBS0FGdWxsTmFtZSA9IDE5LFxyXG4gIEFLQUZhbWlseU5hbWUgPSAyMCxcclxuICBBS0FHaXZlbk5hbWUgPSAyMSxcclxuICBBS0FTdWZmaXhOYW1lID0gMjIsXHJcbiAgV2VpZ2h0UmFuZ2UgPSAyMyxcclxuICBXZWlnaHRQb3VuZHMgPSAyNCxcclxuICBXZWlnaHRLaWxvZ3JhbXMgPSAyNSxcclxuICBDdXN0b21lcklkTnVtYmVyID0gMjYsXHJcbiAgRmFtaWx5TmFtZVRydW5jYXRpb24gPSAyNyxcclxuICBGaXJzdE5hbWVUcnVuY2F0aW9uID0gMjgsXHJcbiAgTWlkZGxlTmFtZVRydW5jYXRpb24gPSAyOSxcclxuICBQbGFjZU9mQmlydGggPSAzMCxcclxuICBBZGRyZXNzU3RyZWV0MiA9IDMxLFxyXG4gIFJhY2VFdGhuaWNpdHkgPSAzMixcclxuICBOYW1lUHJlZml4ID0gMzMsXHJcbiAgQ291bnRyeUlkZW50aWZpY2F0aW9uID0gMzQsXHJcbiAgUmVzaWRlbmNlU3RyZWV0QWRkcmVzcyA9IDM1LFxyXG4gIFJlc2lkZW5jZVN0cmVldEFkZHJlc3MyID0gMzYsXHJcbiAgUmVzaWRlbmNlQ2l0eSA9IDM3LFxyXG4gIFJlc2lkZW5jZUp1cmlzZGljdGlvbkNvZGUgPSAzOCxcclxuICBSZXNpZGVuY2VQb3N0YWxDb2RlID0gMzksXHJcbiAgUmVzaWRlbmNlRnVsbEFkZHJlc3MgPSA0MCxcclxuICBVbmRlcjE4ID0gNDEsXHJcbiAgVW5kZXIxOSA9IDQyLFxyXG4gIFVuZGVyMjEgPSA0MyxcclxuICBTb2NpYWxTZWN1cml0eU51bWJlciA9IDQ0LFxyXG4gIEFLQVNvY2lhbFNlY3VyaXR5TnVtYmVyID0gNDUsXHJcbiAgQUtBTWlkZGxlTmFtZSA9IDQ2LFxyXG4gIEFLQVByZWZpeE5hbWUgPSA0NyxcclxuICBPcmdhbkRvbm9yID0gNDgsXHJcbiAgVmV0ZXJhbiA9IDQ5LFxyXG4gIEFLQURhdGVPZkJpcnRoID0gNTAsXHJcbiAgSXNzdWVySWRlbnRpZmljYXRpb25OdW1iZXIgPSA1MSxcclxuICBEb2N1bWVudEV4cGlyYXRpb25EYXRlID0gNTIsXHJcbiAgSnVyaXNkaWN0aW9uVmVyc2lvbk51bWJlciA9IDUzLFxyXG4gIEp1cmlzZGljdGlvblZlaGljbGVDbGFzcyA9IDU0LFxyXG4gIEp1cmlzZGljdGlvblJlc3RyaWN0aW9uQ29kZXMgPSA1NSxcclxuICBKdXJpc2RpY3Rpb25FbmRvcnNlbWVudENvZGVzID0gNTYsXHJcbiAgRG9jdW1lbnRJc3N1ZURhdGUgPSA1NyxcclxuICBGZWRlcmFsQ29tbWVyY2lhbFZlaGljbGVDb2RlcyA9IDU4LFxyXG4gIElzc3VpbmdKdXJpc2RpY3Rpb24gPSA1OSxcclxuICBTdGFuZGFyZFZlaGljbGVDbGFzc2lmaWNhdGlvbiA9IDYwLFxyXG4gIElzc3VpbmdKdXJpc2RpY3Rpb25OYW1lID0gNjEsXHJcbiAgU3RhbmRhcmRFbmRvcnNlbWVudENvZGUgPSA2MixcclxuICBTdGFuZGFyZFJlc3RyaWN0aW9uQ29kZSA9IDYzLFxyXG4gIEp1cmlzZGljdGlvblZlaGljbGVDbGFzc2lmaWNhdGlvbkRlc2NyaXB0aW9uID0gNjQsXHJcbiAgSnVyaXNkaWN0aW9uRW5kb3JzbWVudENvZGVEZXNjcmlwdGlvbiA9IDY1LFxyXG4gIEp1cmlzZGljdGlvblJlc3RyaWN0aW9uQ29kZURlc2NyaXB0aW9uID0gNjYsXHJcbiAgSW52ZW50b3J5Q29udHJvbE51bWJlciA9IDY3LFxyXG4gIENhcmRSZXZpc2lvbkRhdGUgPSA2OCxcclxuICBEb2N1bWVudERpc2NyaW1pbmF0b3IgPSA2OSxcclxuICBMaW1pdGVkRHVyYXRpb25Eb2N1bWVudCA9IDcwLFxyXG4gIEF1ZGl0SW5mb3JtYXRpb24gPSA3MSxcclxuICBDb21wbGlhbmNlVHlwZSA9IDcyLFxyXG4gIElzc3VlVGltZXN0YW1wID0gNzMsXHJcbiAgUGVybWl0RXhwaXJhdGlvbkRhdGUgPSA3NCxcclxuICBQZXJtaXRJZGVudGlmaWVyID0gNzUsXHJcbiAgUGVybWl0SXNzdWVEYXRlID0gNzYsXHJcbiAgTnVtYmVyT2ZEdXBsaWNhdGVzID0gNzcsXHJcbiAgSEFaTUFURXhwaXJhdGlvbkRhdGUgPSA3OCxcclxuICBNZWRpY2FsSW5kaWNhdG9yID0gNzksXHJcbiAgTm9uUmVzaWRlbnQgPSA4MCxcclxuICBVbmlxdWVDdXN0b21lcklkID0gODEsXHJcbiAgRGF0YURpc2NyaW1pbmF0b3IgPSA4MixcclxuICBEb2N1bWVudEV4cGlyYXRpb25Nb250aCA9IDgzLFxyXG4gIERvY3VtZW50Tm9uZXhwaXJpbmcgPSA4NCxcclxuICBTZWN1cml0eVZlcnNpb24gPSA4NSxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZUV4dGVuc2lvbkZhY3RvcnMge1xyXG4gIHVwRmFjdG9yOiBudW1iZXI7XHJcbiAgcmlnaHRGYWN0b3I6IG51bWJlcjtcclxuICBkb3duRmFjdG9yOiBudW1iZXI7XHJcbiAgbGVmdEZhY3RvcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGUge1xyXG4gIGRheTogc3RyaW5nO1xyXG4gIG1vbnRoOiBzdHJpbmc7XHJcbiAgeWVhcjogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUN0b3Ige1xyXG4gIG5ldyAobmF0aXZlRGF0ZTogRGF0ZSk6IERhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xyXG4gIHg6IHN0cmluZztcclxuICB5OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludEN0b3Ige1xyXG4gIG5ldyAobmF0aXZlUG9pbnQ6IFBvaW50KTogUG9pbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUXVhZHJpbGF0ZXJhbCB7XHJcbiAgdXBwZXJMZWZ0OiBzdHJpbmc7XHJcbiAgdXBwZXJSaWdodDogc3RyaW5nO1xyXG4gIGxvd2VyTGVmdDogc3RyaW5nO1xyXG4gIGxvd2VyUmlnaHQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFF1YWRyaWxhdGVyYWxDdG9yIHtcclxuICBuZXcgKG5hdGl2ZVF1YWQ6IFF1YWRyaWxhdGVyYWwpOiBRdWFkcmlsYXRlcmFsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlTZXR0aW5ncyB7XHJcbiAgb3ZlcmxheVNldHRpbmdzVHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVPdmVybGF5U2V0dGluZ3MgZXh0ZW5kcyBPdmVybGF5U2V0dGluZ3Mge31cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlT3ZlcmxheVNldHRpbmdzQ3RvciB7XHJcbiAgbmV3ICgpOiBCYXJjb2RlT3ZlcmxheVNldHRpbmdzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50T3ZlcmxheVNldHRpbmdzIGV4dGVuZHMgT3ZlcmxheVNldHRpbmdzIHt9XHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRPdmVybGF5U2V0dGluZ3NDdG9yIHtcclxuICBuZXcgKCk6IERvY3VtZW50T3ZlcmxheVNldHRpbmdzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50VmVyaWZpY2F0aW9uT3ZlcmxheVNldHRpbmdzIGV4dGVuZHMgT3ZlcmxheVNldHRpbmdzIHtcclxuICBmaXJzdFNpZGVTcGxhc2hNZXNzYWdlOiBzdHJpbmc7XHJcbiAgc2Vjb25kU2lkZVNwbGFzaE1lc3NhZ2U6IHN0cmluZztcclxuICBzY2FubmluZ0RvbmVTcGxhc2hNZXNzYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3RTaWRlSW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XHJcbiAgc2Vjb25kU2lkZUluc3RydWN0aW9uczogc3RyaW5nO1xyXG4gIGdsYXJlTWVzc2FnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRWZXJpZmljYXRpb25PdmVybGF5U2V0dGluZ3NDdG9yIHtcclxuICBuZXcgKCk6IERvY3VtZW50VmVyaWZpY2F0aW9uT3ZlcmxheVNldHRpbmdzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZE92ZXJsYXlTZXR0aW5ncyBleHRlbmRzIE92ZXJsYXlTZXR0aW5ncyB7XHJcbiAgZ2xhcmVNZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRPdmVybGF5U2V0dGluZ3NDdG9yIHtcclxuICBuZXcgKCk6IEJsaW5rQ2FyZE92ZXJsYXlTZXR0aW5ncztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWNvZ25pemVyUmVzdWx0IHtcclxuICByZXN1bHRTdGF0ZTogUmVjb2duaXplclJlc3VsdFN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXJSZXN1bHRDdG9yPFQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgbmV3IChuYXRpdmVSZXN1bHQ6IGFueSk6IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplcjxUIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCA9IGFueT4ge1xyXG4gIHJlY29nbml6ZXJUeXBlOiBzdHJpbmc7XHJcbiAgcmVzdWx0OiBUO1xyXG4gIGNyZWF0ZVJlc3VsdEZyb21OYXRpdmUobmF0aXZlUmVzdWx0OiBhbnkpOiBUO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXJDdG9yPFQgZXh0ZW5kcyBSZWNvZ25pemVyPiB7XHJcbiAgbmV3ICgpOiBUO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXJDb2xsZWN0aW9uIHtcclxuICByZWNvZ25pemVyQXJyYXk6IFJlY29nbml6ZXJbXTtcclxuICBhbGxvd011bHRpcGxlUmVzdWx0czogYm9vbGVhbjtcclxuICAvLyBzaWNcclxuICBtaWxpc2Vjb25kc0JlZm9yZVRpbWVvdXQ6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXJDb2xsZWN0aW9uQ3RvciB7XHJcbiAgbmV3IChyZWNvZ25pemVyQ29sbGVjdGlvbjogUmVjb2duaXplcltdKTogUmVjb2duaXplckNvbGxlY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBiYXJjb2RlVHlwZTogQmFyY29kZVR5cGU7XHJcbiAgcmF3RGF0YTogc3RyaW5nO1xyXG4gIHN0cmluZ0RhdGE6IHN0cmluZztcclxuICB1bmNlcnRhaW46IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxCYXJjb2RlUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEJhcmNvZGVSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgYXV0b1NjYWxlRGV0ZWN0aW9uOiBib29sZWFuO1xyXG4gIG51bGxRdWlldFpvbmVBbGxvd2VkOiBib29sZWFuO1xyXG4gIHJlYWRDb2RlMzlBc0V4dGVuZGVkRGF0YTogYm9vbGVhbjtcclxuICBzY2FuQXp0ZWNDb2RlOiBib29sZWFuO1xyXG4gIHNjYW5Db2RlMTI4OiBib29sZWFuO1xyXG4gIHNjYW5Db2RlMzk6IGJvb2xlYW47XHJcbiAgc2NhbkRhdGFNYXRyaXg6IGJvb2xlYW47XHJcbiAgc2NhbkVhbjEzOiBib29sZWFuO1xyXG4gIHNjYW5FYW44OiBib29sZWFuO1xyXG4gIHNjYW5JbnZlcnNlOiBib29sZWFuO1xyXG4gIHNjYW5JdGY6IGJvb2xlYW47XHJcbiAgc2NhblBkZjQxNzogYm9vbGVhbjtcclxuICBzY2FuUXJDb2RlOiBib29sZWFuO1xyXG4gIHNjYW5VbmNlcnRhaW46IGJvb2xlYW47XHJcbiAgc2NhblVwY2E6IGJvb2xlYW47XHJcbiAgc2NhblVwY2U6IGJvb2xlYW47XHJcbiAgc2xvd2VyVGhvcm91Z2hTY2FuOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8QmFyY29kZVJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1yelJlc3VsdCB7XHJcbiAgZG9jdW1lbnRUeXBlOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgZ2VuZGVyOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgYWxpZW5OdW1iZXI6IHN0cmluZztcclxuICBhcHBsaWNhdGlvblJlY2VpcHROdW1iZXI6IHN0cmluZztcclxuICBpbW1pZ3JhbnRDYXNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIHN1Y2Nlc3NGcmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHRDdG9yXHJcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgc2xhdmVSZWNvZ25pemVyOiBSZWNvZ25pemVyO1xyXG4gIGNyZWF0ZVJlc3VsdEZyb21OYXRpdmUobmF0aXZlUmVzdWx0OiB7IHNsYXZlUmVjb2duaXplclJlc3VsdDogYW55IH0pOiBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyQ3RvciB7XHJcbiAgbmV3IChyZWNvZ25pemVyOiBSZWNvZ25pemVyKTogU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0TGFzdE5hbWU6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8QXVzdHJhbGlhRGxCYWNrUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xyXG4gIGxpY2Vuc2VUeXBlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmFsaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxBdXN0cmFsaWFEbEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1YW5jZTogRGF0ZTtcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcclxuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGV5ZUNvbG9yOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZTogc3RyaW5nO1xyXG4gIGhlaWdodDogc3RyaW5nO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBtcnRkVmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBwcmluY2lwYWxSZXNpZGVuY2U6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWFuY2U6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBhc3Nwb3J0TnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFByaW5jaXBhbFJlc2lkZW5jZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8QXVzdHJpYUNvbWJpbmVkUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICB2ZWhpY2xlQ2F0ZWdvcmllczogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RWZWhpY2xlQ2F0ZWdvcmllczogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEF1c3RyaWFEbEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZJc3N1YW5jZTogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGV5ZUNvbG9yOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBoZWlnaHQ6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgcHJpbmNpcGFsUmVzaWRlbmNlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VhbmNlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0UHJpbmNpcGFsUmVzaWRlbmNlOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhSWRCYWNrUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhSWRGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWFuY2U6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBnaXZlbk5hbWU6IHN0cmluZztcclxuICBoZWlnaHQ6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBwYXNzcG9ydE51bWJlcjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBhc3Nwb3J0TnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZHJpdmVyUmVzdHJpY3Rpb25zOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1aW5nQWdlbmN5OiBzdHJpbmc7XHJcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Q29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RHJpdmVyUmVzdHJpY3Rpb25zOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1aW5nQWdlbmN5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGJpcnRoRGF0ZTogRGF0ZTtcclxuICBibG9vZEdyb3VwOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmaW5nZXJwcmludDogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyPENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIG51bGxRdWlldFpvbmVBbGxvd2VkOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNjYW5VbmNlcnRhaW46IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8Q29sb21iaWFJZEJhY2tSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplcjxDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0TGFzdE5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8Q29sb21iaWFJZEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBjaXRpemVuc2hpcDogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnlQZXJtYW5lbnQ6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnRCaWxpbmd1YWw6IGJvb2xlYW47XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbm9uUmVzaWRlbnQ6IGJvb2xlYW47XHJcbiAgcGVyc29uYWxJZGVudGlmaWNhdGlvbk51bWJlcjogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZFeHBpcnlQZXJtYW5lbnQ6IGJvb2xlYW47XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZG9jdW1lbnRGb3JOb25SZXNpZGVudDogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3VlZEJ5OiBzdHJpbmc7XHJcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XHJcbiAgcmVzaWRlbmNlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1ZWRCeTogYm9vbGVhbjtcclxuICBleHRyYWN0UmVzaWRlbmNlOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgY2l0aXplbnNoaXA6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5UGVybWFuZW50OiBib29sZWFuO1xyXG4gIGRvY3VtZW50QmlsaW5ndWFsOiBib29sZWFuO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Q3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDaXRpemVuc2hpcDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGV4cGlyZXNPbjogRGF0ZTtcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDeXBydXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDeXBydXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEV4cGlyZXNPbjogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEN5cHJ1c0lkQmFja1JlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkTnVtYmVyOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RG9jdW1lbnROdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxDeXBydXNJZEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgcGVyc29uYWxJZGVudGlmaWNhdGlvbk51bWJlcjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhdXRob3JpdHk6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHBlcm1hbmVudFN0YXk6IHN0cmluZztcclxuICBwZXJzb25hbE51bWJlcjogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEF1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0UGVybWFuZW50U3RheTogYm9vbGVhbjtcclxuICBleHRyYWN0UGVyc29uYWxOdW1iZXI6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RHaXZlbk5hbWVzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxDeXBydXNJZEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRvY3VtZW50TG9jYXRpb246IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmYWNlTG9jYXRpb246IFF1YWRyaWxhdGVyYWw7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8RG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRGYWNlUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8RG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdG9yVHlwZTogRG9jdW1lbnRGYWNlRGV0ZWN0b3JUeXBlLlREMTtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIG51bVN0YWJsZURldGVjdGlvbnNUaHJlc2hvbGQ6IG51bWJlcjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRWd5cHRJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBuYXRpb25hbE51bWJlcjogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRWd5cHRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsTnVtYmVyOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEVneXB0SWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8RWd5cHRJZEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgY2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGN2djogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBpbnZlbnRvcnlOdW1iZXI6IHN0cmluZztcclxuICBvd25lcjogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICB2YWxpZFRocnU6IERhdGU7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8QmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGFub255bWl6ZUNhcmROdW1iZXI6IGJvb2xlYW47XHJcbiAgYW5vbnltaXplQ3Z2OiBib29sZWFuO1xyXG4gIGFub255bWl6ZU93bmVyOiBib29sZWFuO1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJbnZlbnRvcnlOdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE93bmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RWYWxpZFRocnU6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXVkbFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgYmlydGhEYXRhOiBzdHJpbmc7XHJcbiAgY291bnRyeTogc3RyaW5nO1xyXG4gIGRyaXZlck51bWJlcjogc3RyaW5nO1xyXG4gIGV4cGlyeURhdGU6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZURhdGU6IERhdGU7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgcGVyc29uYWxOdW1iZXI6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEV1ZGxSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEV1ZGxSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdWRsUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8RXVkbFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBjb3VudHJ5OiBFdWRsQ291bnRyeS5BdXRvbWF0aWM7XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBlcnNvbmFsTnVtYmVyOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgY2FuTnVtYmVyOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGV5ZUNvbG9yOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGhlaWdodDogc3RyaW5nO1xyXG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIHNleDogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mSXNzdWVCMTA6IHN0cmluZztcclxuICBkYXRlT2ZJc3N1ZUIxME5vdFNwZWNpZmllZDogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55RGxCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxHZXJtYW55RGxCYWNrUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgYWRkcmVzc0NpdHk6IHN0cmluZztcclxuICBhZGRyZXNzSG91c2VOdW1iZXI6IHN0cmluZztcclxuICBhZGRyZXNzU3RyZWV0OiBzdHJpbmc7XHJcbiAgYWRkcmVzc1ppcENvZGU6IHN0cmluZztcclxuICBhdXRob3JpdHk6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBleWVDb2xvdXI6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGhlaWdodDogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RFeWVDb2xvdXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBjYW5OdW1iZXI6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZXM6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxHZXJtYW55SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0Q2FuTnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERvY3VtZW50TnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RHaXZlbk5hbWVzOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8R2VybWFueUlkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55T2xkSWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55T2xkSWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlPbGRJZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlPbGRJZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8R2VybWFueU9sZElkUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGF1dGhvcml0eTogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8R2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8R2VybWFueVBhc3Nwb3J0UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGNvbW1lcmNpYWxDb2RlOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgcmVzaWRlbnRpYWxTdGF0dXM6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8SG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8SG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZ1bGxOYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RSZXNpZGVudGlhbFN0YXR1czogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJa2FkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBlbXBsb3llcjogc3RyaW5nO1xyXG4gIGV4cGlyeURhdGU6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmFjdWx0eUFkZHJlc3M6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBhc3Nwb3J0TnVtYmVyOiBzdHJpbmc7XHJcbiAgc2VjdG9yeTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSWthZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8SWthZFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElrYWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxJa2FkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RFbXBsb3llcjogYm9vbGVhbjtcclxuICBleHRyYWN0RXhwaXJ5RGF0ZTogYm9vbGVhbjtcclxuICBleHRyYWN0RmFjdWx0eUFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQYXNzcG9ydE51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0U2VjdG9yOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJa2FkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxJa2FkUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgYmxvb2RUeXBlOiBzdHJpbmc7XHJcbiAgY2l0aXplbnNoaXA6IHN0cmluZztcclxuICBjaXR5OiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeVBlcm1hbmVudDogc3RyaW5nO1xyXG4gIGRpc3RyaWN0OiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGtlbERlc2E6IHN0cmluZztcclxuICBtYXJpdGFsU3RhdHVzOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG9jY3VwYXRpb246IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBwcm92aW5jZTogc3RyaW5nO1xyXG4gIHJlbGlnaW9uOiBzdHJpbmc7XHJcbiAgcnQ6IHN0cmluZztcclxuICBydzogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEJsb29kVHlwZTogYm9vbGVhbjtcclxuICBleHRyYWN0Q2l0aXplbnNoaXA6IGJvb2xlYW47XHJcbiAgZXh0cmFjdENpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGlzdHJpY3Q6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEtlbERlc2E6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE1hcml0YWxTdGF0dXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE9jY3VwYXRpb246IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0UmVsaWdpb246IGJvb2xlYW47XHJcbiAgZXh0cmFjdFJ0OiBib29sZWFuO1xyXG4gIGV4dHJhY3RSdzogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8SW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZHJpdmVyTnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZWRCeTogc3RyaW5nO1xyXG4gIC8vIHNpY1xyXG4gIGxpY2VuY2VDYXRlZ29yaWVzOiBzdHJpbmc7XHJcbiAgLy8gc2ljXHJcbiAgbGljZW5jZU51bWJlcjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWVkQnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExpY2VuY2VDYXRlZ29yaWVzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RMaWNlbmNlTnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElyZWxhbmREbEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxJcmVsYW5kRGxGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIC8vIHNpY1xyXG4gIGxpY2VuY2VDYXRlZ29yaWVzOiBzdHJpbmc7XHJcbiAgLy8gc2ljXHJcbiAgbGljZW5jZU51bWJlcjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSXRhbHlEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGFseURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExpY2VuY2VDYXRlZ29yaWVzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEl0YWx5RGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8SXRhbHlEbEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbE51bWJlcjogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEpvcmRhbkNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbkNvbWJpbmVkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxKb3JkYW5Db21iaW5lZFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbklkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbklkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8Sm9yZGFuSWRCYWNrUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbE51bWJlcjogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Sm9yZGFuSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8Sm9yZGFuSWRGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG1yelJlc3VsdDogTXJ6UmVzdWx0O1xyXG4gIHNlcmlhbE5vOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2VyaWFsTm86IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8S3V3YWl0SWRCYWNrUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBiaXJ0aERhdGE6IERhdGU7XHJcbiAgY2l2aWxJZE51bWJlcjogc3RyaW5nO1xyXG4gIGV4cGlyeURhdGU6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEt1d2FpdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8S3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QmlydGhEYXRlOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8S3V3YWl0SWRGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBjaXR5OiBzdHJpbmc7XHJcbiAgZGxDbGFzczogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxBZGRyZXNzOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpZGVudGl0eU51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG93bmVyU3RhdGU6IHN0cmluZztcclxuICBzdHJlZXQ6IHN0cmluZztcclxuICB2YWxpZEZyb206IERhdGU7XHJcbiAgdmFsaWRVbnRpbDogRGF0ZTtcclxuICB6aXBjb2RlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0Q2xhc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RWYWxpZEZyb206IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkVW50aWw6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFybXlOdW1iZXI6IHN0cmluZztcclxuICBiaXJ0aERhdGE6IERhdGU7XHJcbiAgY2l0eTogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxBZGRyZXNzOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBmdWxsTmFtZTogc3RyaW5nO1xyXG4gIG5yaWM6IHN0cmluZztcclxuICBvd25lclN0YXRlOiBzdHJpbmc7XHJcbiAgcmVsaWdpb246IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzdHJlZXQ6IHN0cmluZztcclxuICB6aXBjb2RlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHRDdG9yXHJcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZ1bGxOYW1lQW5kQWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0UmVsaWdpb246IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGN1cnA6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBlbGVjdG9yS2V5OiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBmdWxsTmFtZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvclxyXG4gIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8TWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDdXJwOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGdWxsTmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBjaXZpbFN0YXR1c051bWJlcjogc3RyaW5nO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhdGhlcnNOYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBtb3RoZXJzTmFtZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8TW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDaXZpbFN0YXR1c051bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RGYXRoZXJzTmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0TW90aGVyc05hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TW9yb2Njb0lkQmFja1JlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1vcm9jY29JZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxNb3JvY2NvSWRGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1ydGRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhbGllbk51bWJlcjogc3RyaW5nO1xyXG4gIGFwcGxpY2F0aW9uUmVjZWlwdE51bWJlcjogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGRvY3VtZW50VHlwZTogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBpbW1pZ3JhbnRDYXNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6SW1hZ2U6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1ydGRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8TXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZENvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGFsbG93VW5wYXJzZWRSZXN1bHRzOiBib29sZWFuO1xyXG4gIGFsbG93VW52ZXJpZmllZFJlc3VsdHM6IGJvb2xlYW47XHJcbiAgbnVtU3RhYmxlRGV0ZWN0aW9uc1RocmVzaG9sZDogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5NcnpJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZENvbWJpbmVkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxNcnRkQ29tYmluZWRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNcnRkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbXJ6SW1hZ2U6IHN0cmluZztcclxuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1ydGRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPE1ydGRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNcnRkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TXJ0ZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBhbGxvd1VucGFyc2VkUmVzdWx0czogYm9vbGVhbjtcclxuICBhbGxvd1VudmVyaWZpZWRSZXN1bHRzOiBib29sZWFuO1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybk1yekltYWdlOiBib29sZWFuO1xyXG4gIHNhdmVJbWFnZURQSTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TXJ0ZFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBleHRlbmRlZE5yaWM6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG5yaWM6IHN0cmluZztcclxuICBvbGROcmljOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8TXlLYWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TXlLYWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RPbGROcmljOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE15S2FkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TXlLYWRCYWNrUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhcm15TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBucmljTnVtYmVyOiBzdHJpbmc7XHJcbiAgb3duZXJBZGRyZXNzOiBzdHJpbmc7XHJcbiAgb3duZXJBZGRyZXNzQ2l0eTogc3RyaW5nO1xyXG4gIG93bmVyQWRkcmVzc1N0YXRlOiBzdHJpbmc7XHJcbiAgb3duZXJBZGRyZXNzU3RyZWV0OiBzdHJpbmc7XHJcbiAgb3duZXJBZGRyZXNzWmlwQ29kZTogc3RyaW5nO1xyXG4gIG93bmVyQmlydGhEYXRlOiBEYXRlO1xyXG4gIG93bmVyRnVsbE5hbWU6IHN0cmluZztcclxuICBvd25lclJlbGlnaW9uOiBzdHJpbmc7XHJcbiAgb3duZXJTZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNeUthZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBleHRyYWN0QXJteU51bWJlcjogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE15S2FkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPE15S2FkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgY2FyZFZlcnNpb246IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZG9ub3JJbmRpY2F0b3I6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWVzOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yXHJcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REb25vckluZGljYXRvcjogYm9vbGVhbjtcclxuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgY2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGN2djogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGludmVudG9yeU51bWJlcjogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG93bmVyOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIHZhbGlkVGhydTogRGF0ZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8QmxpbmtDYXJkUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QmxpbmtDYXJkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGFub255bWl6ZUNhcmROdW1iZXI6IGJvb2xlYW47XHJcbiAgYW5vbnltaXplQ3Z2OiBib29sZWFuO1xyXG4gIGFub255bWl6ZU93bmVyOiBib29sZWFuO1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDdnY6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEludmVudG9yeU51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0T3duZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkVGhydTogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEJsaW5rQ2FyZFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBkZjQxN1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBiYXJjb2RlVHlwZTogc3RyaW5nO1xyXG4gIHJhd0RhdGE6IHN0cmluZztcclxuICBzdHJpbmdEYXRhOiBzdHJpbmc7XHJcbiAgdW5jZXJ0YWluOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUGRmNDE3UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxQZGY0MTdSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZGY0MTdSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxQZGY0MTdSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgbnVsbFF1aWV0Wm9uZUFsbG93ZWQ6IGJvb2xlYW47XHJcbiAgc2NhbkludmVyc2U6IGJvb2xlYW47XHJcbiAgc2NhblVuY2VydGFpbjogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBkZjQxN1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8UGRmNDE3UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmYW1pbHlOYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZXM6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBhcmVudHNHaXZlbk5hbWVzOiBzdHJpbmc7XHJcbiAgcGVyc29uYWxOdW1iZXI6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZhbWlseU5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0UGFyZW50c0dpdmVuTmFtZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZENvbWJpbmVkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxQb2xhbmRDb21iaW5lZFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZElkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZElkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8UG9sYW5kSWRCYWNrUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmYW1pbHlOYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBnaXZlbk5hbWVzOiBzdHJpbmc7XHJcbiAgcGFyZW50c0dpdmVuTmFtZXM6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFBvbGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGYW1pbHlOYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RHaXZlbk5hbWVzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQYXJlbnRzR2l2ZW5OYW1lczogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZElkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFBvbGFuZElkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgY2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGNucDogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaWRTZXJpZXM6IHN0cmluZztcclxuICBpc3N1ZWRCeTogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG5vbk1SWk5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgbm9uTVJaU2V4OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwYXJlbnROYW1lczogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgdmFsaWRGcm9tOiBEYXRlO1xyXG4gIHZhbGlkVW50aWw6IERhdGU7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Um9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VlZEJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0Tm9uTVJaU2V4OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkRnJvbTogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRVbnRpbDogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8Um9tYW5pYUlkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIGptYmc6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2VyYmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNlcmJpYUNvbWJpbmVkUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTZXJiaWFJZEJhY2tSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1aW5nRGF0ZTogRGF0ZTtcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHZhbGlkVGhydTogRGF0ZTtcclxuICB2YWxpZFVudGlsOiBEYXRlO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2VyYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1aW5nRGF0ZTogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRVbnRpbDogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTZXJiaWFJZEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2ltTnVtYmVyUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIHNpbU51bWJlcjogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2ltTnVtYmVyUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW1OdW1iZXJSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbU51bWJlclJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2ltTnVtYmVyUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBjb21wYW55TmFtZTogc3RyaW5nO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJSZXN1bHRDdG9yXHJcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdENvbXBhbnlOYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGFkZHJlc3NDaGFuZ2VEYXRlOiBEYXRlO1xyXG4gIGJsb29kR3JvdXA6IHN0cmluZztcclxuICBjb3VudHJ5T2ZCaXJ0aDogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcmFjZTogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvclxyXG4gIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzQ2hhbmdlRGF0ZTogYm9vbGVhbjtcclxuICBleHRyYWN0Qmxvb2RHcm91cDogYm9vbGVhbjtcclxuICBleHRyYWN0Q291bnRyeU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0UmFjZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGJpcnRoRGF0YTogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3VlRGF0ZTogRGF0ZTtcclxuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbGlkVGlsbDogRGF0ZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QmlydGhEYXRlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1ZURhdGU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkVGlsbDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGFkZHJlc3NDaGFuZ2VEYXRlOiBzdHJpbmc7XHJcbiAgYmxvb2RHcm91cDogc3RyaW5nO1xyXG4gIGNhcmROdW1iZXI6IHN0cmluZztcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3NDaGFuZ2VEYXRlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RCbG9vZEdyb3VwOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGNvdW50cnlPZkJpcnRoOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcmFjZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDb3VudHJ5T2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFJhY2U6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogbnVtYmVyO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBudW1iZXI7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBwZXJzb25hbElkZW50aWZpY2F0aW9uTnVtYmVyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzcGVjaWFsUmVtYXJrczogc3RyaW5nO1xyXG4gIHN1cm5hbWVBdEJpcnRoOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REb2N1bWVudE51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWVkQnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBleHRyYWN0U3BlY2lhbFJlbWFya3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWVBdEJpcnRoOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNwZWNpYWxSZW1hcmtzOiBzdHJpbmc7XHJcbiAgc3VybmFtZUF0QmlydGg6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0U3BlY2lhbFJlbWFya3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWVBdEJpcnRoOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNsb3Zha2lhSWRCYWNrUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVkQnk6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgcGVyc29uYWxOdW1iZXI6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0RG9jdW1lbnROdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VlZEJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2xvdmFraWFJZEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgY2l0aXplbnNoaXA6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIHBlcnNvbmFsSWRlbnRpZmljYXRpb25OdW1iZXI6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTbG92ZW5pYUlkQmFja1JlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmVuaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmVuaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2xvdmVuaWFJZEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIGxpY2VuY2VDYXRlZ29yaWVzOiBzdHJpbmc7XHJcbiAgbnVtYmVyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbiAgdmFsaWRGcm9tOiBEYXRlO1xyXG4gIHZhbGlkVW50aWw6IERhdGU7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNwYWluRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0TGljZW5jZUNhdGVnb3JpZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRGcm9tOiBib29sZWFuO1xyXG4gIGV4dHJhY3RWYWxpZFVudGlsOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNwYWluRGxGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0FnZW5jeTogc3RyaW5nO1xyXG4gIGxpY2VuY2VDYXRlZ29yaWVzOiBzdHJpbmc7XHJcbiAgbGljZW5jZU51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByZWZlcmVuY2VOdW1iZXI6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2VkZW5EbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExpY2VuY2VDYXRlZ29yaWVzOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RSZWZlcmVuY2VOdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkRnJvbTogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGV4cGlyeURhdGVQZXJtYW5lbnQ6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBsaWNlbnNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICB2ZWhpY2xlQ2F0ZWdvcmllczogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdEN0b3JcclxuICBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0TGFzdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0VmVoaWNsZUNhdGVnb3JpZXM6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U3dpdHplcmxhbmREbEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBoZWlnaHQ6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgbm9uTXJ6RGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIG5vbk1yelNleDogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZk9yaWdpbjogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBTdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yXHJcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEF1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mT3JpZ2luOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBnaXZlbk5hbWU6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yXHJcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGF1dGhvcml0eTogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XHJcbiAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG5vbk1yekRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIG5vbk1yekRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBub25NcnpTZXg6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHBhc3Nwb3J0TnVtYmVyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3JcclxuICBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBhc3Nwb3J0TnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBleHBpcnlEYXRlOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVEYXRlOiBEYXRlO1xyXG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcclxuICBsaWNlbnNpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBwbGFjZU9mSXNzdWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvclxyXG4gIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExpY2Vuc2VOdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExpY2Vuc2luZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yXHJcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkTnVtYmVyOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3JcclxuICBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8VW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmluUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIHZpbjogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVmluUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxWaW5SZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaW5SZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxWaW5SZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5leHBvcnQgaW50ZXJmYWNlIFZpblJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8VmluUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNkbFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBvcHRpb25hbEVsZW1lbnRzOiBhbnlbXTtcclxuICByYXdEYXRhOiBzdHJpbmc7XHJcbiAgcmF3U3RyaW5nRGF0YTogc3RyaW5nO1xyXG4gIHVuY2VydGFpbjogc3RyaW5nO1xyXG4gIGZpZWxkczogYW55W107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBVc2RsUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxVc2RsUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNkbFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVzZGxSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgbnVsbFF1aWV0Wm9uZUFsbG93ZWQ6IGJvb2xlYW47XHJcbiAgdW5jZXJ0YWluRGVjb2Rpbmc6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBVc2RsUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxVc2RsUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIG9wdGlvbmFsRWxlbWVudHM6IGFueVtdO1xyXG4gIHJhd0RhdGE6IHN0cmluZztcclxuICByYXdTdHJpbmdEYXRhOiBzdHJpbmc7XHJcbiAgdW5jZXJ0YWluOiBib29sZWFuO1xyXG4gIGZpZWxkczogYW55W107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBVc2RsQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFVzZGxDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZGxDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVzZGxDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNkbENvbWJpbmVkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxVc2RsQ29tYmluZWRSZWNvZ25pemVyPiB7fVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEJsaW5rSWRcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIE1pY3JvYmxpbmsgU0RLIHdyYXBwZXIgZm9yIGJhcmNvZGUgYW5kIGRvY3VtZW50IHNjYW5uaW5nLiBTZWUgdGhlXHJcbiAqIGJsaW5raWQtcGhvbmVnYXAgcmVwb3NpdG9yeSBmb3IgYXZhaWxhYmxlIHJlY29nbml6ZXJzIGFuZCBvdGhlciBzZXR0aW5nc1xyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBCbGlua0lkLCBSZWNvZ25pemVyUmVzdWx0U3RhdGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JsaW5raWQvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBibGlua0lkOiBCbGlua0lkKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGNvbnN0IG92ZXJsYXlTZXR0aW5ncyA9IG5ldyB0aGlzLmJsaW5rSWQuRG9jdW1lbnRPdmVybGF5U2V0dGluZ3MoKTtcclxuICpcclxuICogY29uc3QgdXNkbFJlY29nbml6ZXIgPSBuZXcgdGhpcy5ibGlua0lkLlVzZGxSZWNvZ25pemVyKCk7XHJcbiAqIGNvbnN0IHVzZGxTdWNjZXNzRnJhbWVHcmFiYmVyID0gbmV3IHRoaXMuYmxpbmtJZC5TdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplcih1c2RsUmVjb2duaXplcik7XHJcbiAqXHJcbiAqIGNvbnN0IGJhcmNvZGVSZWNvZ25pemVyID0gbmV3IHRoaXMuYmxpbmtJZC5CYXJjb2RlUmVjb2duaXplcigpO1xyXG4gKiBiYXJjb2RlUmVjb2duaXplci5zY2FuUGRmNDE3ID0gdHJ1ZTtcclxuICpcclxuICogY29uc3QgcmVjb2duaXplckNvbGxlY3Rpb24gPSBuZXcgdGhpcy5ibGlua0lkLlJlY29nbml6ZXJDb2xsZWN0aW9uKFtcclxuICogICB1c2RsU3VjY2Vzc0ZyYW1lR3JhYmJlcixcclxuICogICBiYXJjb2RlUmVjb2duaXplcixcclxuICogXSk7XHJcbiAqXHJcbiAqIGNvbnN0IGNhbmNlbGVkID0gYXdhaXQgdGhpcy5ibGlua0lkLnNjYW5XaXRoQ2FtZXJhKFxyXG4gKiAgIG92ZXJsYXlTZXR0aW5ncyxcclxuICogICByZWNvZ25pemVyQ29sbGVjdGlvbixcclxuICogICB7IGlvczogSU9TX0xJQ0VOU0VfS0VZLCBhbmRyb2lkOiBBTkRST0lEX0xJQ0VOU0VfS0VZIH0sXHJcbiAqICk7XHJcbiAqXHJcbiAqIGlmICghY2FuY2VsZWQpIHtcclxuICogICBpZiAodXNkbFJlY29nbml6ZXIucmVzdWx0LnJlc3VsdFN0YXRlID09PSBSZWNvZ25pemVyUmVzdWx0U3RhdGUudmFsaWQpIHtcclxuICogICAgIGNvbnN0IHN1Y2Nlc3NGcmFtZSA9IHVzZGxTdWNjZXNzRnJhbWVHcmFiYmVyLnJlc3VsdC5zdWNjZXNzRnJhbWU7XHJcbiAqICAgICBpZiAoc3VjY2Vzc0ZyYW1lKSB7XHJcbiAqICAgICAgIHRoaXMuYmFzZTY0SW1nID0gYGRhdGE6aW1hZ2UvanBnO2Jhc2U2NCwgJHtzdWNjZXNzRnJhbWV9YDtcclxuICogICAgICAgdGhpcy5maWVsZHMgPSB1c2RsUmVjb2duaXplci5yZXN1bHQuZmllbGRzO1xyXG4gKiAgICAgfVxyXG4gKiAgIH0gZWxzZSB7XHJcbiAqICAgICB0aGlzLmJhcmNvZGVTdHJpbmdEYXRhID0gYmFyY29kZVJlY29nbml6ZXIucmVzdWx0LnN0cmluZ0RhdGE7XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBjb25zdCBvdmVybGF5U2V0dGluZ3MgPSBuZXcgdGhpcy5ibGlua0lkLkJsaW5rQ2FyZE92ZXJsYXlTZXR0aW5ncygpO1xyXG4gKiBjb25zdCByZWNvZ25pemVyID0gbmV3IHRoaXMuYmxpbmtJZC5CbGlua0NhcmRSZWNvZ25pemVyKCk7XHJcbiAqIHJlY29nbml6ZXIucmV0dXJuRnVsbERvY3VtZW50SW1hZ2UgPSBmYWxzZTtcclxuICogcmVjb2duaXplci5kZXRlY3RHbGFyZSA9IHRydWU7XHJcbiAqIHJlY29nbml6ZXIuZXh0cmFjdEN2diA9IHRydWU7XHJcbiAqIHJlY29nbml6ZXIuZXh0cmFjdFZhbGlkVGhydSA9IHRydWU7XHJcbiAqIHJlY29nbml6ZXIuZXh0cmFjdE93bmVyID0gdHJ1ZTtcclxuICpcclxuICogY29uc3QgcmVjb2duaXplckNvbGxlY3Rpb24gPSBuZXcgdGhpcy5ibGlua0lkLlJlY29nbml6ZXJDb2xsZWN0aW9uKFtyZWNvZ25pemVyXSk7XHJcbiAqIGNvbnN0IGNhbmNlbGVkID0gYXdhaXQgdGhpcy5ibGlua0lkLnNjYW5XaXRoQ2FtZXJhKFxyXG4gKiAgIG92ZXJsYXlTZXR0aW5ncyxcclxuICogICByZWNvZ25pemVyQ29sbGVjdGlvbixcclxuICogICB7XHJcbiAqICAgICBpb3M6ICcnLCAvL2lPUyBMaWNlbnNlIEtleVxyXG4gKiAgICAgYW5kcm9pZDogJycgLy9BbmRyb2lkIExpY2Vuc2UgS2V5XHJcbiAqICAgfSxcclxuICogKTtcclxuICpcclxuICogaWYgKCFjYW5jZWxlZCkge1xyXG4gKiAgIGlmIChyZWNvZ25pemVyLnJlc3VsdC5yZXN1bHRTdGF0ZSA9PT0gUmVjb2duaXplclJlc3VsdFN0YXRlLnZhbGlkKSB7XHJcbiAqICAgICBjb25zdCByZXN1bHRzID0gcmVjb2duaXplci5yZXN1bHQ7XHJcbiAqXHJcbiAqICAgICBpZiAocmVzdWx0cy5yZXN1bHRTdGF0ZSA9PT0gUmVjb2duaXplclJlc3VsdFN0YXRlLnZhbGlkKSB7XHJcbiAqICAgICAgIGNvbnN0IGNjSW5mbyA9IHtcclxuICogICAgICAgICBjYXJkTnVtYmVyOiBOdW1iZXIocmVzdWx0cy5jYXJkTnVtYmVyKSxcclxuICogICAgICAgICBleHBpcmF0aW9uTW9udGg6IE51bWJlcihyZXN1bHRzLnZhbGlkVGhydS5tb250aCksXHJcbiAqICAgICAgICAgZXhwaXJhdGlvblllYXI6IE51bWJlcihyZXN1bHRzLnZhbGlkVGhydS55ZWFyKSxcclxuICogICAgICAgICBjdnY6IE51bWJlcihyZXN1bHRzLmN2dilcclxuICogICAgICAgfTtcclxuICogICAgIH1cclxuICogICB9XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0JsaW5rSWQnLFxyXG4gIHBsdWdpbjogJ2JsaW5raWQtY29yZG92YScsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkJsaW5rSUQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vQmxpbmtJRC9ibGlua2lkLXBob25lZ2FwJyxcclxuICBpbnN0YWxsOlxyXG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBibGlua2lkLWNvcmRvdmEgLS12YXJpYWJsZSBDQU1FUkFfVVNBR0VfREVTQ1JJUFRJT049XCJFbmFibGUgeW91ciBjYW1lcmEgc28gdGhhdCB5b3UgY2FuIHNjYW4geW91ciBJRCB0byB2YWxpZGF0ZSB5b3VyIGFjY291bnRcIicsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJsaW5rSWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogT3BlbnMgdGhlIGNhbWVyYSBkaWFsb2cgYW5kIGF0dGVtcHRzIHRvIHNjYW4gYSBiYXJjb2RlL2RvY3VtZW50XHJcbiAgICogQHBhcmFtIG92ZXJsYXlTZXR0aW5ncyB7T3ZlcmxheVNldHRpbmdzfSBmb3IgY2FtZXJhIG92ZXJsYXkgY3VzdG9taXphdGlvblxyXG4gICAqIEBwYXJhbSByZWNvZ25pemVyQ29sbGVjdGlvbiB7UmVjb2duaXplckNvbGxlY3Rpb259IGNvbGxlY3Rpb24gb2YgcmVjb2duaXplcnMgdG8gc2NhbiB3aXRoXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgc2NhbldpdGhDYW1lcmEoXHJcbiAgICBvdmVybGF5U2V0dGluZ3M6IE92ZXJsYXlTZXR0aW5ncyxcclxuICAgIHJlY29nbml6ZXJDb2xsZWN0aW9uOiBSZWNvZ25pemVyQ29sbGVjdGlvbixcclxuICAgIGxpY2Vuc2VzOiBMaWNlbnNlc1xyXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERhdGU6IERhdGVDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2ludDogUG9pbnRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBRdWFkcmlsYXRlcmFsOiBRdWFkcmlsYXRlcmFsQ3RvcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJhcmNvZGVPdmVybGF5U2V0dGluZ3M6IEJhcmNvZGVPdmVybGF5U2V0dGluZ3NDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBEb2N1bWVudE92ZXJsYXlTZXR0aW5nczogRG9jdW1lbnRPdmVybGF5U2V0dGluZ3NDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5nczogRG9jdW1lbnRWZXJpZmljYXRpb25PdmVybGF5U2V0dGluZ3NDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0NhcmRPdmVybGF5U2V0dGluZ3M6IEJsaW5rQ2FyZE92ZXJsYXlTZXR0aW5nc0N0b3I7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBSZWNvZ25pemVyQ29sbGVjdGlvbjogUmVjb2duaXplckNvbGxlY3Rpb25DdG9yO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KCkgQmFyY29kZVJlY29nbml6ZXJSZXN1bHQ6IEJhcmNvZGVSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQmFyY29kZVJlY29nbml6ZXI6IEJhcmNvZGVSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHQ6IFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXI6IFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyQ3RvcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHQ6IEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyOiBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXI6IEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXI6IEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFEbEZyb250UmVjb2duaXplcjogQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUlkQmFja1JlY29nbml6ZXI6IEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXI6IEF1c3RyaWFJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyOiBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyOiBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHQ6IEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHQ6IEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0NhcmRSZWNvZ25pemVyOiBCbGlua0NhcmRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdDogQ29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyOiBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFJZEZyb250UmVjb2duaXplcjogQ29sb21iaWFJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogQ3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDeXBydXNJZEJhY2tSZWNvZ25pemVyOiBDeXBydXNJZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXI6IEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogQ3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHQ6IERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgRWd5cHRJZEZyb250UmVjb2duaXplcjogRWd5cHRJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEV1ZGxSZWNvZ25pemVyUmVzdWx0OiBFdWRsUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyOiBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueURsQmFja1JlY29nbml6ZXI6IEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUlkQmFja1JlY29nbml6ZXI6IEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXI6IEdlcm1hbnlJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55T2xkSWRSZWNvZ25pemVyOiBHZXJtYW55T2xkSWRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdDogR2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXI6IEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplcjogSG9uZ0tvbmdJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIElrYWRSZWNvZ25pemVyUmVzdWx0OiBJa2FkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIElrYWRSZWNvZ25pemVyOiBJa2FkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyOiBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdDogSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyOiBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSXRhbHlEbEZyb250UmVjb2duaXplcjogSXRhbHlEbEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbkNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyOiBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuSWRCYWNrUmVjb2duaXplcjogSm9yZGFuSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyOiBKb3JkYW5JZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyOiBLdXdhaXRJZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgS3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEt1d2FpdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgS3V3YWl0SWRGcm9udFJlY29nbml6ZXI6IEt1d2FpdElkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdDogTWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXI6IE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHQ6IE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplcjogTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdDogTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXI6IE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdDogTW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNb3JvY2NvSWRCYWNrUmVjb2duaXplcjogTW9yb2Njb0lkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1vcm9jY29JZEZyb250UmVjb2duaXplcjogTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdDogTXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1ydGRDb21iaW5lZFJlY29nbml6ZXI6IE1ydGRDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNcnRkUmVjb2duaXplclJlc3VsdDogTXJ0ZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNcnRkUmVjb2duaXplcjogTXJ0ZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTXlLYWRCYWNrUmVjb2duaXplcjogTXlLYWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBNeUthZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE15S2FkRnJvbnRSZWNvZ25pemVyOiBNeUthZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdDogTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyOiBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQZGY0MTdSZWNvZ25pemVyUmVzdWx0OiBQZGY0MTdSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUGRmNDE3UmVjb2duaXplcjogUGRmNDE3UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdDogUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyOiBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kSWRCYWNrUmVjb2duaXplcjogUG9sYW5kSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZElkRnJvbnRSZWNvZ25pemVyOiBQb2xhbmRJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdDogUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyOiBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplcjogU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogU2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUlkQmFja1JlY29nbml6ZXI6IFNlcmJpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdDogU2VyYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFJZEZyb250UmVjb2duaXplcjogU2VyYmlhSWRGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0OiBTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2ltTnVtYmVyUmVjb2duaXplcjogU2ltTnVtYmVyUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyOiBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyOiBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdDogU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplcjogU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplcjogU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyOiBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyOiBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplclJlc3VsdDogU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyOiBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFJZEZyb250UmVjb2duaXplcjogU2xvdmFraWFJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyOiBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyOiBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFJZEZyb250UmVjb2duaXplcjogU2xvdmVuaWFJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyOiBTcGFpbkRsRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3dlZGVuRGxGcm9udFJlY29nbml6ZXI6IFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdDogU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXI6IFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHQ6IFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplcjogU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdDogU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXI6IFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdDogU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplcjogU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdDogVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplcjogVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplcjogVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyOiBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFZpblJlY29nbml6ZXJSZXN1bHQ6IFZpblJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBWaW5SZWNvZ25pemVyOiBWaW5SZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVXNkbFJlY29nbml6ZXJSZXN1bHQ6IFVzZGxSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVXNkbFJlY29nbml6ZXI6IFVzZGxSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdDogVXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVzZGxDb21iaW5lZFJlY29nbml6ZXI6IFVzZGxDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG59XHJcbiJdfQ==