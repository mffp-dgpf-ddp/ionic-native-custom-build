import { __decorate, __extends } from "tslib";
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
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
var BlinkId = /** @class */ (function (_super) {
    __extends(BlinkId, _super);
    function BlinkId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlinkId.prototype.scanWithCamera = function (overlaySettings, recognizerCollection, licenses) { return cordova(this, "scanWithCamera", { "callbackOrder": "reverse" }, arguments); };
    Object.defineProperty(BlinkId.prototype, "Date", {
        get: function () { return cordovaPropertyGet(this, "Date"); },
        set: function (value) { cordovaPropertySet(this, "Date", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Point", {
        get: function () { return cordovaPropertyGet(this, "Point"); },
        set: function (value) { cordovaPropertySet(this, "Point", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Quadrilateral", {
        get: function () { return cordovaPropertyGet(this, "Quadrilateral"); },
        set: function (value) { cordovaPropertySet(this, "Quadrilateral", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BarcodeOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeOverlaySettings", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentOverlaySettings", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentVerificationOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentVerificationOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentVerificationOverlaySettings", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardOverlaySettings", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RecognizerCollection", {
        get: function () { return cordovaPropertyGet(this, "RecognizerCollection"); },
        set: function (value) { cordovaPropertySet(this, "RecognizerCollection", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SuccessFrameGrabberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SuccessFrameGrabberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardEliteRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardEliteRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CzechiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CzechiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentFaceRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "DocumentFaceRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "DocumentFaceRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EgyptIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EgyptIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EudlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EudlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EudlRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyOldIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyOldIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "HongKongIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "HongKongIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IkadRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IkadRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IndonesiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IndonesiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IrelandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IrelandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ItalyDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ItalyDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaMyTenteraRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaMyTenteraRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MexicoVoterIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MexicoVoterIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "NewZealandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "NewZealandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Pdf417RecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "Pdf417RecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417RecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Pdf417Recognizer", {
        get: function () { return cordovaPropertyGet(this, "Pdf417Recognizer"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417Recognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RomaniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RomaniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SimNumberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SimNumberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeChangiEmployeeIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeChangiEmployeeIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SpainDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SpainDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwedenDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwedenDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "VinRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "VinRecognizer", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    BlinkId.pluginName = "BlinkId";
    BlinkId.plugin = "blinkid-cordova";
    BlinkId.pluginRef = "cordova.plugins.BlinkID";
    BlinkId.repo = "https://github.com/BlinkID/blinkid-phonegap";
    BlinkId.install = "ionic cordova plugin add blinkid-cordova --variable CAMERA_USAGE_DESCRIPTION=\"Enable your camera so that you can scan your ID to validate your account\"";
    BlinkId.platforms = ["iOS", "Android"];
    BlinkId = __decorate([
        Injectable()
    ], BlinkId);
    return BlinkId;
}(IonicNativePlugin));
export { BlinkId };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JsaW5raWQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsTUFBTSxDQUFOLElBQVksV0FhWDtBQWJELFdBQVksV0FBVztJQUNyQiw2Q0FBUSxDQUFBO0lBQ1IsaURBQVUsQ0FBQTtJQUNWLHlEQUFjLENBQUE7SUFDZCw2Q0FBUSxDQUFBO0lBQ1IsNkNBQVEsQ0FBQTtJQUNSLDZDQUFRLENBQUE7SUFDUiwrQ0FBUyxDQUFBO0lBQ1QsbURBQVcsQ0FBQTtJQUNYLGlEQUFVLENBQUE7SUFDViw0Q0FBUSxDQUFBO0lBQ1IsZ0RBQVUsQ0FBQTtJQUNWLGtEQUFXLENBQUE7QUFDYixDQUFDLEVBYlcsV0FBVyxLQUFYLFdBQVcsUUFhdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxxQkFJWDtBQUpELFdBQVkscUJBQXFCO0lBQy9CLG1FQUFTLENBQUE7SUFDVCwyRUFBYSxDQUFBO0lBQ2IsbUVBQVMsQ0FBQTtBQUNYLENBQUMsRUFKVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBSWhDO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBT1g7QUFQRCxXQUFZLGdCQUFnQjtJQUMxQiw2REFBVyxDQUFBO0lBQ1gsdUVBQWdCLENBQUE7SUFDaEIsK0RBQVksQ0FBQTtJQUNaLHVEQUFRLENBQUE7SUFDUixpRUFBYSxDQUFBO0lBQ2IscUZBQXVCLENBQUE7QUFDekIsQ0FBQyxFQVBXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFPM0I7QUFFRCxNQUFNLENBQU4sSUFBWSxXQUtYO0FBTEQsV0FBWSxXQUFXO0lBQ3JCLHlDQUFNLENBQUE7SUFDTixtREFBVyxDQUFBO0lBQ1gsbURBQVcsQ0FBQTtJQUNYLHVEQUFhLENBQUE7QUFDZixDQUFDLEVBTFcsV0FBVyxLQUFYLFdBQVcsUUFLdEI7QUFFRCxNQUFNLENBQU4sSUFBWSx3QkFJWDtBQUpELFdBQVksd0JBQXdCO0lBQ2xDLHFFQUFPLENBQUE7SUFDUCxxRUFBTyxDQUFBO0lBQ1AsaUdBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUpXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFJbkM7QUFFRCxNQUFNLENBQU4sSUFBWSxRQXVGWDtBQXZGRCxXQUFZLFFBQVE7SUFDbEIsdURBQWdCLENBQUE7SUFDaEIseUVBQXlCLENBQUE7SUFDekIsbUVBQXNCLENBQUE7SUFDdEIsaUVBQXFCLENBQUE7SUFDckIsK0RBQW9CLENBQUE7SUFDcEIscURBQWUsQ0FBQTtJQUNmLHFDQUFPLENBQUE7SUFDUCwrQ0FBWSxDQUFBO0lBQ1oseURBQWlCLENBQUE7SUFDakIscURBQWUsQ0FBQTtJQUNmLDhFQUE0QixDQUFBO0lBQzVCLGtFQUFzQixDQUFBO0lBQ3RCLHNEQUFnQixDQUFBO0lBQ2hCLDRDQUFXLENBQUE7SUFDWCxnREFBYSxDQUFBO0lBQ2IsZ0RBQWEsQ0FBQTtJQUNiLG9FQUF1QixDQUFBO0lBQ3ZCLGtEQUFjLENBQUE7SUFDZCxvREFBZSxDQUFBO0lBQ2Ysc0RBQWdCLENBQUE7SUFDaEIsMERBQWtCLENBQUE7SUFDbEIsd0RBQWlCLENBQUE7SUFDakIsMERBQWtCLENBQUE7SUFDbEIsc0RBQWdCLENBQUE7SUFDaEIsd0RBQWlCLENBQUE7SUFDakIsOERBQW9CLENBQUE7SUFDcEIsZ0VBQXFCLENBQUE7SUFDckIsd0VBQXlCLENBQUE7SUFDekIsc0VBQXdCLENBQUE7SUFDeEIsd0VBQXlCLENBQUE7SUFDekIsd0RBQWlCLENBQUE7SUFDakIsNERBQW1CLENBQUE7SUFDbkIsMERBQWtCLENBQUE7SUFDbEIsb0RBQWUsQ0FBQTtJQUNmLDBFQUEwQixDQUFBO0lBQzFCLDRFQUEyQixDQUFBO0lBQzNCLDhFQUE0QixDQUFBO0lBQzVCLDBEQUFrQixDQUFBO0lBQ2xCLGtGQUE4QixDQUFBO0lBQzlCLHNFQUF3QixDQUFBO0lBQ3hCLHdFQUF5QixDQUFBO0lBQ3pCLDhDQUFZLENBQUE7SUFDWiw4Q0FBWSxDQUFBO0lBQ1osOENBQVksQ0FBQTtJQUNaLHdFQUF5QixDQUFBO0lBQ3pCLDhFQUE0QixDQUFBO0lBQzVCLDBEQUFrQixDQUFBO0lBQ2xCLDBEQUFrQixDQUFBO0lBQ2xCLG9EQUFlLENBQUE7SUFDZiw4Q0FBWSxDQUFBO0lBQ1osNERBQW1CLENBQUE7SUFDbkIsb0ZBQStCLENBQUE7SUFDL0IsNEVBQTJCLENBQUE7SUFDM0Isa0ZBQThCLENBQUE7SUFDOUIsZ0ZBQTZCLENBQUE7SUFDN0Isd0ZBQWlDLENBQUE7SUFDakMsd0ZBQWlDLENBQUE7SUFDakMsa0VBQXNCLENBQUE7SUFDdEIsMEZBQWtDLENBQUE7SUFDbEMsc0VBQXdCLENBQUE7SUFDeEIsMEZBQWtDLENBQUE7SUFDbEMsOEVBQTRCLENBQUE7SUFDNUIsOEVBQTRCLENBQUE7SUFDNUIsOEVBQTRCLENBQUE7SUFDNUIsd0hBQWlELENBQUE7SUFDakQsMEdBQTBDLENBQUE7SUFDMUMsNEdBQTJDLENBQUE7SUFDM0MsNEVBQTJCLENBQUE7SUFDM0IsZ0VBQXFCLENBQUE7SUFDckIsMEVBQTBCLENBQUE7SUFDMUIsOEVBQTRCLENBQUE7SUFDNUIsZ0VBQXFCLENBQUE7SUFDckIsNERBQW1CLENBQUE7SUFDbkIsNERBQW1CLENBQUE7SUFDbkIsd0VBQXlCLENBQUE7SUFDekIsZ0VBQXFCLENBQUE7SUFDckIsOERBQW9CLENBQUE7SUFDcEIsb0VBQXVCLENBQUE7SUFDdkIsd0VBQXlCLENBQUE7SUFDekIsZ0VBQXFCLENBQUE7SUFDckIsc0RBQWdCLENBQUE7SUFDaEIsZ0VBQXFCLENBQUE7SUFDckIsa0VBQXNCLENBQUE7SUFDdEIsOEVBQTRCLENBQUE7SUFDNUIsc0VBQXdCLENBQUE7SUFDeEIsOERBQW9CLENBQUE7QUFDdEIsQ0FBQyxFQXZGVyxRQUFRLEtBQVIsUUFBUSxRQXVGbkI7O0lBd2lGNEIsMkJBQWlCOzs7O0lBVTVDLGdDQUFjLGFBQ1osZUFBZ0MsRUFDaEMsb0JBQTBDLEVBQzFDLFFBQWtCOzBCQUtELHlCQUFJOzs7Ozs7MEJBQ0osMEJBQUs7Ozs7OzswQkFDTCxrQ0FBYTs7Ozs7OzBCQUViLDJDQUFzQjs7Ozs7OzBCQUN0Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsd0RBQW1DOzs7Ozs7MEJBQ25DLDZDQUF3Qjs7Ozs7OzBCQUV4Qix5Q0FBb0I7Ozs7OzswQkFFcEIsNENBQXVCOzs7Ozs7MEJBQ3ZCLHNDQUFpQjs7Ozs7OzBCQUNqQix3REFBbUM7Ozs7OzswQkFDbkMsa0RBQTZCOzs7Ozs7MEJBRTdCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw4Q0FBeUI7Ozs7OzswQkFDekIsd0NBQW1COzs7Ozs7MEJBQ25CLG9EQUErQjs7Ozs7OzBCQUMvQixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsb0RBQStCOzs7Ozs7MEJBQy9CLGtEQUE2Qjs7Ozs7OzBCQUM3QixtREFBOEI7Ozs7OzswQkFDOUIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG9EQUErQjs7Ozs7OzBCQUMvQixrREFBNkI7Ozs7OzswQkFDN0IsaURBQTRCOzs7Ozs7MEJBQzVCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIseUNBQW9COzs7Ozs7MEJBQ3BCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIseUNBQW9COzs7Ozs7MEJBQ3BCLG1DQUFjOzs7Ozs7MEJBQ2QscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsc0RBQWlDOzs7Ozs7MEJBQ2pDLGdEQUEyQjs7Ozs7OzBCQUMzQix1REFBa0M7Ozs7OzswQkFDbEMsaURBQTRCOzs7Ozs7MEJBQzVCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLHlDQUFvQjs7Ozs7OzBCQUNwQixtQ0FBYzs7Ozs7OzBCQUNkLDhDQUF5Qjs7Ozs7OzBCQUN6Qix3Q0FBbUI7Ozs7OzswQkFDbkIsK0NBQTBCOzs7Ozs7MEJBQzFCLHlDQUFvQjs7Ozs7OzBCQUNwQixzREFBaUM7Ozs7OzswQkFDakMsZ0RBQTJCOzs7Ozs7MEJBQzNCLDJDQUFzQjs7Ozs7OzBCQUN0QixxQ0FBZ0I7Ozs7OzswQkFDaEIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2Qiw4Q0FBeUI7Ozs7OzswQkFDekIsd0NBQW1COzs7Ozs7MEJBQ25CLDhEQUF5Qzs7Ozs7OzBCQUN6Qyx3REFBbUM7Ozs7OzswQkFDbkMsc0RBQWlDOzs7Ozs7MEJBQ2pDLGdEQUEyQjs7Ozs7OzBCQUMzQixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsdURBQWtDOzs7Ozs7MEJBQ2xDLGlEQUE0Qjs7Ozs7OzBCQUM1QixzREFBaUM7Ozs7OzswQkFDakMsZ0RBQTJCOzs7Ozs7MEJBQzNCLHVEQUFrQzs7Ozs7OzBCQUNsQyxpREFBNEI7Ozs7OzswQkFDNUIsd0RBQW1DOzs7Ozs7MEJBQ25DLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw4REFBeUM7Ozs7OzswQkFDekMsd0RBQW1DOzs7Ozs7MEJBQ25DLDZEQUF3Qzs7Ozs7OzBCQUN4Qyx1REFBa0M7Ozs7OzswQkFDbEMsOERBQXlDOzs7Ozs7MEJBQ3pDLHdEQUFtQzs7Ozs7OzBCQUNuQyx3Q0FBbUI7Ozs7OzswQkFDbkIsa0NBQWE7Ozs7OzswQkFDYix5Q0FBb0I7Ozs7OzswQkFDcEIsbUNBQWM7Ozs7OzswQkFDZCxpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7Ozs7Ozs7SUF6TDlCLE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkFsckZwQjtFQWtyRjZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaWNlbnNlcyB7XHJcbiAgaW9zOiBzdHJpbmc7XHJcbiAgYW5kcm9pZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYXJjb2RlVHlwZSB7XHJcbiAgTm9uZSA9IDEsXHJcbiAgUVJDb2RlID0gMixcclxuICBEYXRhTWF0cml4ID0gMyxcclxuICBVUENFID0gNCxcclxuICBVUENBID0gNSxcclxuICBFQU44ID0gNixcclxuICBFQU4xMyA9IDcsXHJcbiAgQ29kZTEyOCA9IDgsXHJcbiAgQ29kZTM5ID0gOSxcclxuICBJVEYgPSAxMCxcclxuICBBenRlYyA9IDExLFxyXG4gIFBERjQxNyA9IDEyLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBSZWNvZ25pemVyUmVzdWx0U3RhdGUge1xyXG4gIGVtcHR5ID0gMSxcclxuICB1bmNlcnRhaW4gPSAyLFxyXG4gIHZhbGlkID0gMyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTXJ0ZERvY3VtZW50VHlwZSB7XHJcbiAgVW5rbm93biA9IDEsXHJcbiAgSWRlbnRpdHlDYXJkID0gMixcclxuICBQYXNzcG9ydCA9IDMsXHJcbiAgVmlzYSA9IDQsXHJcbiAgR3JlZW5DYXJkID0gNSxcclxuICBNYWxheXNpYW5QYXNzSU1NMTNQID0gNixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRXVkbENvdW50cnkge1xyXG4gIFVLID0gMSxcclxuICBHZXJtYW55ID0gMixcclxuICBBdXN0cmlhID0gMyxcclxuICBBdXRvbWF0aWMgPSA0LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEb2N1bWVudEZhY2VEZXRlY3RvclR5cGUge1xyXG4gIFREMSA9IDEsXHJcbiAgVEQyID0gMixcclxuICBQYXNzcG9ydHNBbmRWaXNhcyA9IDMsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFVzZGxLZXlzIHtcclxuICBEb2N1bWVudFR5cGUgPSAwLFxyXG4gIFN0YW5kYXJkVmVyc2lvbk51bWJlciA9IDEsXHJcbiAgQ3VzdG9tZXJGYW1pbHlOYW1lID0gMixcclxuICBDdXN0b21lckZpcnN0TmFtZSA9IDMsXHJcbiAgQ3VzdG9tZXJGdWxsTmFtZSA9IDQsXHJcbiAgRGF0ZU9mQmlydGggPSA1LFxyXG4gIFNleCA9IDYsXHJcbiAgRXllQ29sb3IgPSA3LFxyXG4gIEFkZHJlc3NTdHJlZXQgPSA4LFxyXG4gIEFkZHJlc3NDaXR5ID0gOSxcclxuICBBZGRyZXNzSnVyaXNkaWN0aW9uQ29kZSA9IDEwLFxyXG4gIEFkZHJlc3NQb3N0YWxDb2RlID0gMTEsXHJcbiAgRnVsbEFkZHJlc3MgPSAxMixcclxuICBIZWlnaHQgPSAxMyxcclxuICBIZWlnaHRJbiA9IDE0LFxyXG4gIEhlaWdodENtID0gMTUsXHJcbiAgQ3VzdG9tZXJNaWRkbGVOYW1lID0gMTYsXHJcbiAgSGFpckNvbG9yID0gMTcsXHJcbiAgTmFtZVN1ZmZpeCA9IDE4LFxyXG4gIEFLQUZ1bGxOYW1lID0gMTksXHJcbiAgQUtBRmFtaWx5TmFtZSA9IDIwLFxyXG4gIEFLQUdpdmVuTmFtZSA9IDIxLFxyXG4gIEFLQVN1ZmZpeE5hbWUgPSAyMixcclxuICBXZWlnaHRSYW5nZSA9IDIzLFxyXG4gIFdlaWdodFBvdW5kcyA9IDI0LFxyXG4gIFdlaWdodEtpbG9ncmFtcyA9IDI1LFxyXG4gIEN1c3RvbWVySWROdW1iZXIgPSAyNixcclxuICBGYW1pbHlOYW1lVHJ1bmNhdGlvbiA9IDI3LFxyXG4gIEZpcnN0TmFtZVRydW5jYXRpb24gPSAyOCxcclxuICBNaWRkbGVOYW1lVHJ1bmNhdGlvbiA9IDI5LFxyXG4gIFBsYWNlT2ZCaXJ0aCA9IDMwLFxyXG4gIEFkZHJlc3NTdHJlZXQyID0gMzEsXHJcbiAgUmFjZUV0aG5pY2l0eSA9IDMyLFxyXG4gIE5hbWVQcmVmaXggPSAzMyxcclxuICBDb3VudHJ5SWRlbnRpZmljYXRpb24gPSAzNCxcclxuICBSZXNpZGVuY2VTdHJlZXRBZGRyZXNzID0gMzUsXHJcbiAgUmVzaWRlbmNlU3RyZWV0QWRkcmVzczIgPSAzNixcclxuICBSZXNpZGVuY2VDaXR5ID0gMzcsXHJcbiAgUmVzaWRlbmNlSnVyaXNkaWN0aW9uQ29kZSA9IDM4LFxyXG4gIFJlc2lkZW5jZVBvc3RhbENvZGUgPSAzOSxcclxuICBSZXNpZGVuY2VGdWxsQWRkcmVzcyA9IDQwLFxyXG4gIFVuZGVyMTggPSA0MSxcclxuICBVbmRlcjE5ID0gNDIsXHJcbiAgVW5kZXIyMSA9IDQzLFxyXG4gIFNvY2lhbFNlY3VyaXR5TnVtYmVyID0gNDQsXHJcbiAgQUtBU29jaWFsU2VjdXJpdHlOdW1iZXIgPSA0NSxcclxuICBBS0FNaWRkbGVOYW1lID0gNDYsXHJcbiAgQUtBUHJlZml4TmFtZSA9IDQ3LFxyXG4gIE9yZ2FuRG9ub3IgPSA0OCxcclxuICBWZXRlcmFuID0gNDksXHJcbiAgQUtBRGF0ZU9mQmlydGggPSA1MCxcclxuICBJc3N1ZXJJZGVudGlmaWNhdGlvbk51bWJlciA9IDUxLFxyXG4gIERvY3VtZW50RXhwaXJhdGlvbkRhdGUgPSA1MixcclxuICBKdXJpc2RpY3Rpb25WZXJzaW9uTnVtYmVyID0gNTMsXHJcbiAgSnVyaXNkaWN0aW9uVmVoaWNsZUNsYXNzID0gNTQsXHJcbiAgSnVyaXNkaWN0aW9uUmVzdHJpY3Rpb25Db2RlcyA9IDU1LFxyXG4gIEp1cmlzZGljdGlvbkVuZG9yc2VtZW50Q29kZXMgPSA1NixcclxuICBEb2N1bWVudElzc3VlRGF0ZSA9IDU3LFxyXG4gIEZlZGVyYWxDb21tZXJjaWFsVmVoaWNsZUNvZGVzID0gNTgsXHJcbiAgSXNzdWluZ0p1cmlzZGljdGlvbiA9IDU5LFxyXG4gIFN0YW5kYXJkVmVoaWNsZUNsYXNzaWZpY2F0aW9uID0gNjAsXHJcbiAgSXNzdWluZ0p1cmlzZGljdGlvbk5hbWUgPSA2MSxcclxuICBTdGFuZGFyZEVuZG9yc2VtZW50Q29kZSA9IDYyLFxyXG4gIFN0YW5kYXJkUmVzdHJpY3Rpb25Db2RlID0gNjMsXHJcbiAgSnVyaXNkaWN0aW9uVmVoaWNsZUNsYXNzaWZpY2F0aW9uRGVzY3JpcHRpb24gPSA2NCxcclxuICBKdXJpc2RpY3Rpb25FbmRvcnNtZW50Q29kZURlc2NyaXB0aW9uID0gNjUsXHJcbiAgSnVyaXNkaWN0aW9uUmVzdHJpY3Rpb25Db2RlRGVzY3JpcHRpb24gPSA2NixcclxuICBJbnZlbnRvcnlDb250cm9sTnVtYmVyID0gNjcsXHJcbiAgQ2FyZFJldmlzaW9uRGF0ZSA9IDY4LFxyXG4gIERvY3VtZW50RGlzY3JpbWluYXRvciA9IDY5LFxyXG4gIExpbWl0ZWREdXJhdGlvbkRvY3VtZW50ID0gNzAsXHJcbiAgQXVkaXRJbmZvcm1hdGlvbiA9IDcxLFxyXG4gIENvbXBsaWFuY2VUeXBlID0gNzIsXHJcbiAgSXNzdWVUaW1lc3RhbXAgPSA3MyxcclxuICBQZXJtaXRFeHBpcmF0aW9uRGF0ZSA9IDc0LFxyXG4gIFBlcm1pdElkZW50aWZpZXIgPSA3NSxcclxuICBQZXJtaXRJc3N1ZURhdGUgPSA3NixcclxuICBOdW1iZXJPZkR1cGxpY2F0ZXMgPSA3NyxcclxuICBIQVpNQVRFeHBpcmF0aW9uRGF0ZSA9IDc4LFxyXG4gIE1lZGljYWxJbmRpY2F0b3IgPSA3OSxcclxuICBOb25SZXNpZGVudCA9IDgwLFxyXG4gIFVuaXF1ZUN1c3RvbWVySWQgPSA4MSxcclxuICBEYXRhRGlzY3JpbWluYXRvciA9IDgyLFxyXG4gIERvY3VtZW50RXhwaXJhdGlvbk1vbnRoID0gODMsXHJcbiAgRG9jdW1lbnROb25leHBpcmluZyA9IDg0LFxyXG4gIFNlY3VyaXR5VmVyc2lvbiA9IDg1LFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlRXh0ZW5zaW9uRmFjdG9ycyB7XHJcbiAgdXBGYWN0b3I6IG51bWJlcjtcclxuICByaWdodEZhY3RvcjogbnVtYmVyO1xyXG4gIGRvd25GYWN0b3I6IG51bWJlcjtcclxuICBsZWZ0RmFjdG9yOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZSB7XHJcbiAgZGF5OiBzdHJpbmc7XHJcbiAgbW9udGg6IHN0cmluZztcclxuICB5ZWFyOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlQ3RvciB7XHJcbiAgbmV3IChuYXRpdmVEYXRlOiBEYXRlKTogRGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XHJcbiAgeDogc3RyaW5nO1xyXG4gIHk6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50Q3RvciB7XHJcbiAgbmV3IChuYXRpdmVQb2ludDogUG9pbnQpOiBQb2ludDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBRdWFkcmlsYXRlcmFsIHtcclxuICB1cHBlckxlZnQ6IHN0cmluZztcclxuICB1cHBlclJpZ2h0OiBzdHJpbmc7XHJcbiAgbG93ZXJMZWZ0OiBzdHJpbmc7XHJcbiAgbG93ZXJSaWdodDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUXVhZHJpbGF0ZXJhbEN0b3Ige1xyXG4gIG5ldyAobmF0aXZlUXVhZDogUXVhZHJpbGF0ZXJhbCk6IFF1YWRyaWxhdGVyYWw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheVNldHRpbmdzIHtcclxuICBvdmVybGF5U2V0dGluZ3NUeXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZU92ZXJsYXlTZXR0aW5ncyBleHRlbmRzIE92ZXJsYXlTZXR0aW5ncyB7fVxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVPdmVybGF5U2V0dGluZ3NDdG9yIHtcclxuICBuZXcgKCk6IEJhcmNvZGVPdmVybGF5U2V0dGluZ3M7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRPdmVybGF5U2V0dGluZ3MgZXh0ZW5kcyBPdmVybGF5U2V0dGluZ3Mge31cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudE92ZXJsYXlTZXR0aW5nc0N0b3Ige1xyXG4gIG5ldyAoKTogRG9jdW1lbnRPdmVybGF5U2V0dGluZ3M7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRWZXJpZmljYXRpb25PdmVybGF5U2V0dGluZ3MgZXh0ZW5kcyBPdmVybGF5U2V0dGluZ3Mge1xyXG4gIGZpcnN0U2lkZVNwbGFzaE1lc3NhZ2U6IHN0cmluZztcclxuICBzZWNvbmRTaWRlU3BsYXNoTWVzc2FnZTogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRG9uZVNwbGFzaE1lc3NhZ2U6IHN0cmluZztcclxuICBmaXJzdFNpZGVJbnN0cnVjdGlvbnM6IHN0cmluZztcclxuICBzZWNvbmRTaWRlSW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XHJcbiAgZ2xhcmVNZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5nc0N0b3Ige1xyXG4gIG5ldyAoKTogRG9jdW1lbnRWZXJpZmljYXRpb25PdmVybGF5U2V0dGluZ3M7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzIGV4dGVuZHMgT3ZlcmxheVNldHRpbmdzIHtcclxuICBnbGFyZU1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZE92ZXJsYXlTZXR0aW5nc0N0b3Ige1xyXG4gIG5ldyAoKTogQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIHJlc3VsdFN0YXRlOiBSZWNvZ25pemVyUmVzdWx0U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplclJlc3VsdEN0b3I8VCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBuZXcgKG5hdGl2ZVJlc3VsdDogYW55KTogVDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWNvZ25pemVyPFQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0ID0gYW55PiB7XHJcbiAgcmVjb2duaXplclR5cGU6IHN0cmluZztcclxuICByZXN1bHQ6IFQ7XHJcbiAgY3JlYXRlUmVzdWx0RnJvbU5hdGl2ZShuYXRpdmVSZXN1bHQ6IGFueSk6IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplckN0b3I8VCBleHRlbmRzIFJlY29nbml6ZXI+IHtcclxuICBuZXcgKCk6IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplckNvbGxlY3Rpb24ge1xyXG4gIHJlY29nbml6ZXJBcnJheTogUmVjb2duaXplcltdO1xyXG4gIGFsbG93TXVsdGlwbGVSZXN1bHRzOiBib29sZWFuO1xyXG4gIC8vIHNpY1xyXG4gIG1pbGlzZWNvbmRzQmVmb3JlVGltZW91dDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplckNvbGxlY3Rpb25DdG9yIHtcclxuICBuZXcgKHJlY29nbml6ZXJDb2xsZWN0aW9uOiBSZWNvZ25pemVyW10pOiBSZWNvZ25pemVyQ29sbGVjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGJhcmNvZGVUeXBlOiBCYXJjb2RlVHlwZTtcclxuICByYXdEYXRhOiBzdHJpbmc7XHJcbiAgc3RyaW5nRGF0YTogc3RyaW5nO1xyXG4gIHVuY2VydGFpbjogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEJhcmNvZGVSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QmFyY29kZVJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBhdXRvU2NhbGVEZXRlY3Rpb246IGJvb2xlYW47XHJcbiAgbnVsbFF1aWV0Wm9uZUFsbG93ZWQ6IGJvb2xlYW47XHJcbiAgcmVhZENvZGUzOUFzRXh0ZW5kZWREYXRhOiBib29sZWFuO1xyXG4gIHNjYW5BenRlY0NvZGU6IGJvb2xlYW47XHJcbiAgc2NhbkNvZGUxMjg6IGJvb2xlYW47XHJcbiAgc2NhbkNvZGUzOTogYm9vbGVhbjtcclxuICBzY2FuRGF0YU1hdHJpeDogYm9vbGVhbjtcclxuICBzY2FuRWFuMTM6IGJvb2xlYW47XHJcbiAgc2NhbkVhbjg6IGJvb2xlYW47XHJcbiAgc2NhbkludmVyc2U6IGJvb2xlYW47XHJcbiAgc2Nhbkl0ZjogYm9vbGVhbjtcclxuICBzY2FuUGRmNDE3OiBib29sZWFuO1xyXG4gIHNjYW5RckNvZGU6IGJvb2xlYW47XHJcbiAgc2NhblVuY2VydGFpbjogYm9vbGVhbjtcclxuICBzY2FuVXBjYTogYm9vbGVhbjtcclxuICBzY2FuVXBjZTogYm9vbGVhbjtcclxuICBzbG93ZXJUaG9yb3VnaFNjYW46IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxCYXJjb2RlUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXJ6UmVzdWx0IHtcclxuICBkb2N1bWVudFR5cGU6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBnZW5kZXI6IHN0cmluZztcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBhbGllbk51bWJlcjogc3RyaW5nO1xyXG4gIGFwcGxpY2F0aW9uUmVjZWlwdE51bWJlcjogc3RyaW5nO1xyXG4gIGltbWlncmFudENhc2VOdW1iZXI6IHN0cmluZztcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgc3VjY2Vzc0ZyYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdEN0b3JcclxuICBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBzbGF2ZVJlY29nbml6ZXI6IFJlY29nbml6ZXI7XHJcbiAgY3JlYXRlUmVzdWx0RnJvbU5hdGl2ZShuYXRpdmVSZXN1bHQ6IHsgc2xhdmVSZWNvZ25pemVyUmVzdWx0OiBhbnkgfSk6IFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJDdG9yIHtcclxuICBuZXcgKHJlY29nbml6ZXI6IFJlY29nbml6ZXIpOiBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBsaWNlbnNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgbGljZW5zZVR5cGU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VhbmNlOiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZXllQ29sb3I6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XHJcbiAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIG1ydGRWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHByaW5jaXBhbFJlc2lkZW5jZTogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1YW5jZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBleHRyYWN0UGFzc3BvcnROdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0UHJpbmNpcGFsUmVzaWRlbmNlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHZlaGljbGVDYXRlZ29yaWVzOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZlaGljbGVDYXRlZ29yaWVzOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8QXVzdHJpYURsRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZklzc3VhbmNlOiBEYXRlO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZXllQ29sb3I6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGhlaWdodDogc3RyaW5nO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBwcmluY2lwYWxSZXNpZGVuY2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWFuY2U6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQcmluY2lwYWxSZXNpZGVuY2U6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEF1c3RyaWFJZEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1YW5jZTogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZTogc3RyaW5nO1xyXG4gIGhlaWdodDogc3RyaW5nO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBhc3Nwb3J0TnVtYmVyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBleHRyYWN0UGFzc3BvcnROdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkcml2ZXJSZXN0cmljdGlvbnM6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3VpbmdBZ2VuY3k6IHN0cmluZztcclxuICBsaWNlbnNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REcml2ZXJSZXN0cmljdGlvbnM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdBZ2VuY3k6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYmlydGhEYXRlOiBEYXRlO1xyXG4gIGJsb29kR3JvdXA6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZpbmdlcnByaW50OiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXI8Q29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgbnVsbFF1aWV0Wm9uZUFsbG93ZWQ6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2NhblVuY2VydGFpbjogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxDb2xvbWJpYUlkQmFja1JlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyPENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGNpdGl6ZW5zaGlwOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeVBlcm1hbmVudDogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcclxuICBkb2N1bWVudEJpbGluZ3VhbDogYm9vbGVhbjtcclxuICBkb2N1bWVudERhdGFNYXRjaDogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBub25SZXNpZGVudDogYm9vbGVhbjtcclxuICBwZXJzb25hbElkZW50aWZpY2F0aW9uTnVtYmVyOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkV4cGlyeVBlcm1hbmVudDogYm9vbGVhbjtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkb2N1bWVudEZvck5vblJlc2lkZW50OiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVkQnk6IHN0cmluZztcclxuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcclxuICByZXNpZGVuY2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VlZEJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RSZXNpZGVuY2U6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBjaXRpemVuc2hpcDogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnlQZXJtYW5lbnQ6IGJvb2xlYW47XHJcbiAgZG9jdW1lbnRCaWxpbmd1YWw6IGJvb2xlYW47XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdENpdGl6ZW5zaGlwOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExhc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZXhwaXJlc09uOiBEYXRlO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RXhwaXJlc09uOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8Q3lwcnVzSWRCYWNrUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaWROdW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Q3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REb2N1bWVudE51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcclxuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBwZXJzb25hbElkZW50aWZpY2F0aW9uTnVtYmVyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGF1dGhvcml0eTogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcGVybWFuZW50U3RheTogc3RyaW5nO1xyXG4gIHBlcnNvbmFsTnVtYmVyOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDemVjaGlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQZXJtYW5lbnRTdGF5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQZXJzb25hbE51bWJlcjogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudEZhY2VSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZG9jdW1lbnRMb2NhdGlvbjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZhY2VMb2NhdGlvbjogUXVhZHJpbGF0ZXJhbDtcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxEb2N1bWVudEZhY2VSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudEZhY2VSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxEb2N1bWVudEZhY2VSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0b3JUeXBlOiBEb2N1bWVudEZhY2VEZXRlY3RvclR5cGUuVEQxO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgbnVtU3RhYmxlRGV0ZWN0aW9uc1RocmVzaG9sZDogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG5hdGlvbmFsTnVtYmVyOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVneXB0SWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxOdW1iZXI6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRWd5cHRJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxFZ3lwdElkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBjYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgY3Z2OiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGludmVudG9yeU51bWJlcjogc3RyaW5nO1xyXG4gIG93bmVyOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIHZhbGlkVGhydTogRGF0ZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgYW5vbnltaXplQ2FyZE51bWJlcjogYm9vbGVhbjtcclxuICBhbm9ueW1pemVDdnY6IGJvb2xlYW47XHJcbiAgYW5vbnltaXplT3duZXI6IGJvb2xlYW47XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEludmVudG9yeU51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0T3duZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkVGhydTogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8QmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdWRsUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBiaXJ0aERhdGE6IHN0cmluZztcclxuICBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgZHJpdmVyTnVtYmVyOiBzdHJpbmc7XHJcbiAgZXhwaXJ5RGF0ZTogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3VlRGF0ZTogRGF0ZTtcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBwZXJzb25hbE51bWJlcjogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRXVkbFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8RXVkbFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV1ZGxSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxFdWRsUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGNvdW50cnk6IEV1ZGxDb3VudHJ5LkF1dG9tYXRpYztcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0UGVyc29uYWxOdW1iZXI6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBjYW5OdW1iZXI6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZXllQ29sb3I6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgc2V4OiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8R2VybWFueUNvbWJpbmVkUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZJc3N1ZUIxMDogc3RyaW5nO1xyXG4gIGRhdGVPZklzc3VlQjEwTm90U3BlY2lmaWVkOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueURsQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBhZGRyZXNzQ2l0eTogc3RyaW5nO1xyXG4gIGFkZHJlc3NIb3VzZU51bWJlcjogc3RyaW5nO1xyXG4gIGFkZHJlc3NTdHJlZXQ6IHN0cmluZztcclxuICBhZGRyZXNzWmlwQ29kZTogc3RyaW5nO1xyXG4gIGF1dGhvcml0eTogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGV5ZUNvbG91cjogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8R2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEV5ZUNvbG91cjogYm9vbGVhbjtcclxuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8R2VybWFueUlkQmFja1JlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGNhbk51bWJlcjogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgZ2l2ZW5OYW1lczogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDYW5OdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RG9jdW1lbnROdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxHZXJtYW55SWRGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueU9sZElkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8R2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueU9sZElkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxHZXJtYW55T2xkSWRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEF1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgY29tbWVyY2lhbENvZGU6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbE5hbWU6IHN0cmluZztcclxuICByZXNpZGVudGlhbFN0YXR1czogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0RnVsbE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFJlc2lkZW50aWFsU3RhdHVzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElrYWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGVtcGxveWVyOiBzdHJpbmc7XHJcbiAgZXhwaXJ5RGF0ZTogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmYWN1bHR5QWRkcmVzczogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgcGFzc3BvcnROdW1iZXI6IHN0cmluZztcclxuICBzZWN0b3J5OiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJa2FkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxJa2FkUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWthZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPElrYWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEVtcGxveWVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RFeHBpcnlEYXRlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGYWN1bHR5QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBhc3Nwb3J0TnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZWN0b3I6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElrYWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPElrYWRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBibG9vZFR5cGU6IHN0cmluZztcclxuICBjaXRpemVuc2hpcDogc3RyaW5nO1xyXG4gIGNpdHk6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5UGVybWFuZW50OiBzdHJpbmc7XHJcbiAgZGlzdHJpY3Q6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAga2VsRGVzYTogc3RyaW5nO1xyXG4gIG1hcml0YWxTdGF0dXM6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgb2NjdXBhdGlvbjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHByb3ZpbmNlOiBzdHJpbmc7XHJcbiAgcmVsaWdpb246IHN0cmluZztcclxuICBydDogc3RyaW5nO1xyXG4gIHJ3OiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8SW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0Qmxvb2RUeXBlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDaXRpemVuc2hpcDogYm9vbGVhbjtcclxuICBleHRyYWN0Q2l0eTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REaXN0cmljdDogYm9vbGVhbjtcclxuICBleHRyYWN0S2VsRGVzYTogYm9vbGVhbjtcclxuICBleHRyYWN0TWFyaXRhbFN0YXR1czogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0T2NjdXBhdGlvbjogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RSZWxpZ2lvbjogYm9vbGVhbjtcclxuICBleHRyYWN0UnQ6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFJ3OiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxJbmRvbmVzaWFJZEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkcml2ZXJOdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3VlZEJ5OiBzdHJpbmc7XHJcbiAgLy8gc2ljXHJcbiAgbGljZW5jZUNhdGVnb3JpZXM6IHN0cmluZztcclxuICAvLyBzaWNcclxuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8SXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1ZWRCeTogYm9vbGVhbjtcclxuICBleHRyYWN0TGljZW5jZUNhdGVnb3JpZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExpY2VuY2VOdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPElyZWxhbmREbEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXRhbHlEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBnaXZlbk5hbWU6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgLy8gc2ljXHJcbiAgbGljZW5jZUNhdGVnb3JpZXM6IHN0cmluZztcclxuICAvLyBzaWNcclxuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEl0YWx5RGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0TGljZW5jZUNhdGVnb3JpZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSXRhbHlEbEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxJdGFseURsRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG5hdGlvbmFsTnVtYmVyOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Sm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEpvcmRhbkNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEpvcmRhbkNvbWJpbmVkUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Sm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Sm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxKb3JkYW5JZEJhY2tSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG5hdGlvbmFsTnVtYmVyOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5JZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxKb3JkYW5JZEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XHJcbiAgc2VyaWFsTm86IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8S3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8S3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXJpYWxObzogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxLdXdhaXRJZEJhY2tSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGJpcnRoRGF0YTogRGF0ZTtcclxuICBjaXZpbElkTnVtYmVyOiBzdHJpbmc7XHJcbiAgZXhwaXJ5RGF0ZTogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8S3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RCaXJ0aERhdGU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxLdXdhaXRJZEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGNpdHk6IHN0cmluZztcclxuICBkbENsYXNzOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbEFkZHJlc3M6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkZW50aXR5TnVtYmVyOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgb3duZXJTdGF0ZTogc3RyaW5nO1xyXG4gIHN0cmVldDogc3RyaW5nO1xyXG4gIHZhbGlkRnJvbTogRGF0ZTtcclxuICB2YWxpZFVudGlsOiBEYXRlO1xyXG4gIHppcGNvZGU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8TWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFsYXlzaWFEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDbGFzczogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkRnJvbTogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRVbnRpbDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TWFsYXlzaWFEbEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYXJteU51bWJlcjogc3RyaW5nO1xyXG4gIGJpcnRoRGF0YTogRGF0ZTtcclxuICBjaXR5OiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbEFkZHJlc3M6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgbnJpYzogc3RyaW5nO1xyXG4gIG93bmVyU3RhdGU6IHN0cmluZztcclxuICByZWxpZ2lvbjogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHN0cmVldDogc3RyaW5nO1xyXG4gIHppcGNvZGU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdEN0b3JcclxuICBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RnVsbE5hbWVBbmRBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RSZWxpZ2lvbjogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgY3VycDogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGVsZWN0b3JLZXk6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yXHJcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEN1cnA6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZ1bGxOYW1lOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGNpdmlsU3RhdHVzTnVtYmVyOiBzdHJpbmc7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmF0aGVyc05hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG1vdGhlcnNOYW1lOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdENpdmlsU3RhdHVzTnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZhdGhlcnNOYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RNb3RoZXJzTmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxNb3JvY2NvSWRCYWNrUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8TW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPE1vcm9jY29JZEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFsaWVuTnVtYmVyOiBzdHJpbmc7XHJcbiAgYXBwbGljYXRpb25SZWNlaXB0TnVtYmVyOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnRUeXBlOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGltbWlncmFudENhc2VOdW1iZXI6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpJbWFnZTogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNcnRkQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgYWxsb3dVbnBhcnNlZFJlc3VsdHM6IGJvb2xlYW47XHJcbiAgYWxsb3dVbnZlcmlmaWVkUmVzdWx0czogYm9vbGVhbjtcclxuICBudW1TdGFibGVEZXRlY3Rpb25zVGhyZXNob2xkOiBudW1iZXI7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybk1yekltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNcnRkQ29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPE1ydGRDb21iaW5lZFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1ydGRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBtcnpJbWFnZTogc3RyaW5nO1xyXG4gIG1yelJlc3VsdDogTXJ6UmVzdWx0O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8TXJ0ZFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1ydGRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNcnRkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGFsbG93VW5wYXJzZWRSZXN1bHRzOiBib29sZWFuO1xyXG4gIGFsbG93VW52ZXJpZmllZFJlc3VsdHM6IGJvb2xlYW47XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuTXJ6SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2F2ZUltYWdlRFBJOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNcnRkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxNcnRkUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGV4dGVuZGVkTnJpYzogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbnJpYzogc3RyaW5nO1xyXG4gIG9sZE5yaWM6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNeUthZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE9sZE5yaWM6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxNeUthZEJhY2tSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNeUthZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFybXlOdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG5yaWNOdW1iZXI6IHN0cmluZztcclxuICBvd25lckFkZHJlc3M6IHN0cmluZztcclxuICBvd25lckFkZHJlc3NDaXR5OiBzdHJpbmc7XHJcbiAgb3duZXJBZGRyZXNzU3RhdGU6IHN0cmluZztcclxuICBvd25lckFkZHJlc3NTdHJlZXQ6IHN0cmluZztcclxuICBvd25lckFkZHJlc3NaaXBDb2RlOiBzdHJpbmc7XHJcbiAgb3duZXJCaXJ0aERhdGU6IERhdGU7XHJcbiAgb3duZXJGdWxsTmFtZTogc3RyaW5nO1xyXG4gIG93bmVyUmVsaWdpb246IHN0cmluZztcclxuICBvd25lclNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8TXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE15S2FkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNeUthZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGV4dHJhY3RBcm15TnVtYmVyOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TXlLYWRGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBjYXJkVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkb25vckluZGljYXRvcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZXM6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGxpY2VuY2VOdW1iZXI6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdEN0b3JcclxuICBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERvbm9ySW5kaWNhdG9yOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBjYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgY3Z2OiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgaW52ZW50b3J5TnVtYmVyOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgb3duZXI6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgdmFsaWRUaHJ1OiBEYXRlO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxCbGlua0NhcmRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxCbGlua0NhcmRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgYW5vbnltaXplQ2FyZE51bWJlcjogYm9vbGVhbjtcclxuICBhbm9ueW1pemVDdnY6IGJvb2xlYW47XHJcbiAgYW5vbnltaXplT3duZXI6IGJvb2xlYW47XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEN2djogYm9vbGVhbjtcclxuICBleHRyYWN0SW52ZW50b3J5TnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RPd25lcjogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRUaHJ1OiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8QmxpbmtDYXJkUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGRmNDE3UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGJhcmNvZGVUeXBlOiBzdHJpbmc7XHJcbiAgcmF3RGF0YTogc3RyaW5nO1xyXG4gIHN0cmluZ0RhdGE6IHN0cmluZztcclxuICB1bmNlcnRhaW46IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQZGY0MTdSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFBkZjQxN1JlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBkZjQxN1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFBkZjQxN1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBudWxsUXVpZXRab25lQWxsb3dlZDogYm9vbGVhbjtcclxuICBzY2FuSW52ZXJzZTogYm9vbGVhbjtcclxuICBzY2FuVW5jZXJ0YWluOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUGRmNDE3UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxQZGY0MTdSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZhbWlseU5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgZ2l2ZW5OYW1lczogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgcGFyZW50c0dpdmVuTmFtZXM6IHN0cmluZztcclxuICBwZXJzb25hbE51bWJlcjogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICBzZXg6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8UG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RmFtaWx5TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQYXJlbnRzR2l2ZW5OYW1lczogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFBvbGFuZENvbWJpbmVkUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8UG9sYW5kSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8UG9sYW5kSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxQb2xhbmRJZEJhY2tSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZhbWlseU5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZXM6IHN0cmluZztcclxuICBwYXJlbnRzR2l2ZW5OYW1lczogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFBvbGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8UG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZhbWlseU5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBhcmVudHNHaXZlbk5hbWVzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8UG9sYW5kSWRGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBjYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgY25wOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpZFNlcmllczogc3RyaW5nO1xyXG4gIGlzc3VlZEJ5OiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgbm9uTVJaTmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBub25NUlpTZXg6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHBhcmVudE5hbWVzOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICB2YWxpZEZyb206IERhdGU7XHJcbiAgdmFsaWRVbnRpbDogRGF0ZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvbWFuaWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Um9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWVkQnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExhc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROb25NUlpTZXg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRGcm9tOiBib29sZWFuO1xyXG4gIGV4dHJhY3RWYWxpZFVudGlsOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJvbWFuaWFJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxSb21hbmlhSWRGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcclxuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgam1iZzogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2VyYmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2VyYmlhQ29tYmluZWRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNlcmJpYUlkQmFja1JlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3VpbmdEYXRlOiBEYXRlO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgdmFsaWRUaHJ1OiBEYXRlO1xyXG4gIHZhbGlkVW50aWw6IERhdGU7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdEYXRlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RWYWxpZFVudGlsOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgc2ltTnVtYmVyOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbU51bWJlclJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2ltTnVtYmVyUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTaW1OdW1iZXJSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGNvbXBhbnlOYW1lOiBzdHJpbmc7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdEN0b3JcclxuICBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0Q29tcGFueU5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgYWRkcmVzc0NoYW5nZURhdGU6IERhdGU7XHJcbiAgYmxvb2RHcm91cDogc3RyaW5nO1xyXG4gIGNvdW50cnlPZkJpcnRoOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByYWNlOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yXHJcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3NDaGFuZ2VEYXRlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RCbG9vZEdyb3VwOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDb3VudHJ5T2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RSYWNlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYmlydGhEYXRhOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVEYXRlOiBEYXRlO1xyXG4gIGxpY2VuY2VOdW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmFsaWRUaWxsOiBEYXRlO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RCaXJ0aERhdGU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VlRGF0ZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRUaWxsOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgYWRkcmVzc0NoYW5nZURhdGU6IHN0cmluZztcclxuICBibG9vZEdyb3VwOiBzdHJpbmc7XHJcbiAgY2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzc0NoYW5nZURhdGU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEJsb29kR3JvdXA6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgY291bnRyeU9mQmlydGg6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByYWNlOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdENvdW50cnlPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0UmFjZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBudW1iZXI7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IG51bWJlcjtcclxuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBlcnNvbmFsSWRlbnRpZmljYXRpb25OdW1iZXI6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHNwZWNpYWxSZW1hcmtzOiBzdHJpbmc7XHJcbiAgc3VybmFtZUF0QmlydGg6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERvY3VtZW50TnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1ZWRCeTogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTcGVjaWFsUmVtYXJrczogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZUF0QmlydGg6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc3BlY2lhbFJlbWFya3M6IHN0cmluZztcclxuICBzdXJuYW1lQXRCaXJ0aDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3Zha2lhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTcGVjaWFsUmVtYXJrczogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZUF0QmlydGg6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2xvdmFraWFJZEJhY2tSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZWRCeTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBwZXJzb25hbE51bWJlcjogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REb2N1bWVudE51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWVkQnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBjaXRpemVuc2hpcDogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcclxuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgcGVyc29uYWxJZGVudGlmaWNhdGlvbk51bWJlcjogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBhdXRob3JpdHk6IHN0cmluZztcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbGljZW5jZUNhdGVnb3JpZXM6IHN0cmluZztcclxuICBudW1iZXI6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxuICB2YWxpZEZyb206IERhdGU7XHJcbiAgdmFsaWRVbnRpbDogRGF0ZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3BhaW5EbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RMaWNlbmNlQ2F0ZWdvcmllczogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RWYWxpZEZyb206IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkVW50aWw6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNwYWluRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U3BhaW5EbEZyb250UmVjb2duaXplcj4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1aW5nQWdlbmN5OiBzdHJpbmc7XHJcbiAgbGljZW5jZUNhdGVnb3JpZXM6IHN0cmluZztcclxuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHJlZmVyZW5jZU51bWJlcjogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0TGljZW5jZUNhdGVnb3JpZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFJlZmVyZW5jZU51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRGcm9tOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dlZGVuRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U3dlZGVuRGxGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZXhwaXJ5RGF0ZVBlcm1hbmVudDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHZlaGljbGVDYXRlZ29yaWVzOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvclxyXG4gIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RWZWhpY2xlQ2F0ZWdvcmllczogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhdXRob3JpdHk6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGhlaWdodDogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBub25NcnpEYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgbm9uTXJ6U2V4OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwbGFjZU9mT3JpZ2luOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IFN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3JcclxuICBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZPcmlnaW46IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZTogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3JcclxuICBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBnaXZlbk5hbWU6IHN0cmluZztcclxuICBoZWlnaHQ6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgbm9uTXJ6RGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgbm9uTXJ6RGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIG5vbk1yelNleDogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcGFzc3BvcnROdW1iZXI6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvclxyXG4gIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcclxuICBleHRyYWN0UGFzc3BvcnROdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGV4cGlyeURhdGU6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZURhdGU6IERhdGU7XHJcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xyXG4gIGxpY2Vuc2luZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBsYWNlT2ZJc3N1ZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yXHJcbiAgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0TGljZW5zZU51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0TGljZW5zaW5nQXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZklzc3VlOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXI+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG1yelJlc3VsdDogTXJ6UmVzdWx0O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3JcclxuICBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaWROdW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvclxyXG4gIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaW5SZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgdmluOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBWaW5SZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFZpblJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZpblJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFZpblJlY29nbml6ZXJSZXN1bHQ+IHt9XHJcbmV4cG9ydCBpbnRlcmZhY2UgVmluUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxWaW5SZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2RsUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIG9wdGlvbmFsRWxlbWVudHM6IGFueVtdO1xyXG4gIHJhd0RhdGE6IHN0cmluZztcclxuICByYXdTdHJpbmdEYXRhOiBzdHJpbmc7XHJcbiAgdW5jZXJ0YWluOiBzdHJpbmc7XHJcbiAgZmllbGRzOiBhbnlbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZGxSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFVzZGxSZWNvZ25pemVyUmVzdWx0PiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2RsUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8VXNkbFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBudWxsUXVpZXRab25lQWxsb3dlZDogYm9vbGVhbjtcclxuICB1bmNlcnRhaW5EZWNvZGluZzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZGxSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFVzZGxSZWNvZ25pemVyPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2RsQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgb3B0aW9uYWxFbGVtZW50czogYW55W107XHJcbiAgcmF3RGF0YTogc3RyaW5nO1xyXG4gIHJhd1N0cmluZ0RhdGE6IHN0cmluZztcclxuICB1bmNlcnRhaW46IGJvb2xlYW47XHJcbiAgZmllbGRzOiBhbnlbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZGxDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8VXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNkbENvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8VXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBVc2RsQ29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFVzZGxDb21iaW5lZFJlY29nbml6ZXI+IHt9XHJcblxyXG4vKipcclxuICogQG5hbWUgQmxpbmtJZFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogTWljcm9ibGluayBTREsgd3JhcHBlciBmb3IgYmFyY29kZSBhbmQgZG9jdW1lbnQgc2Nhbm5pbmcuIFNlZSB0aGVcclxuICogYmxpbmtpZC1waG9uZWdhcCByZXBvc2l0b3J5IGZvciBhdmFpbGFibGUgcmVjb2duaXplcnMgYW5kIG90aGVyIHNldHRpbmdzXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJsaW5rSWQsIFJlY29nbml6ZXJSZXN1bHRTdGF0ZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmxpbmtpZC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJsaW5rSWQ6IEJsaW5rSWQpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogY29uc3Qgb3ZlcmxheVNldHRpbmdzID0gbmV3IHRoaXMuYmxpbmtJZC5Eb2N1bWVudE92ZXJsYXlTZXR0aW5ncygpO1xyXG4gKlxyXG4gKiBjb25zdCB1c2RsUmVjb2duaXplciA9IG5ldyB0aGlzLmJsaW5rSWQuVXNkbFJlY29nbml6ZXIoKTtcclxuICogY29uc3QgdXNkbFN1Y2Nlc3NGcmFtZUdyYWJiZXIgPSBuZXcgdGhpcy5ibGlua0lkLlN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyKHVzZGxSZWNvZ25pemVyKTtcclxuICpcclxuICogY29uc3QgYmFyY29kZVJlY29nbml6ZXIgPSBuZXcgdGhpcy5ibGlua0lkLkJhcmNvZGVSZWNvZ25pemVyKCk7XHJcbiAqIGJhcmNvZGVSZWNvZ25pemVyLnNjYW5QZGY0MTcgPSB0cnVlO1xyXG4gKlxyXG4gKiBjb25zdCByZWNvZ25pemVyQ29sbGVjdGlvbiA9IG5ldyB0aGlzLmJsaW5rSWQuUmVjb2duaXplckNvbGxlY3Rpb24oW1xyXG4gKiAgIHVzZGxTdWNjZXNzRnJhbWVHcmFiYmVyLFxyXG4gKiAgIGJhcmNvZGVSZWNvZ25pemVyLFxyXG4gKiBdKTtcclxuICpcclxuICogY29uc3QgY2FuY2VsZWQgPSBhd2FpdCB0aGlzLmJsaW5rSWQuc2NhbldpdGhDYW1lcmEoXHJcbiAqICAgb3ZlcmxheVNldHRpbmdzLFxyXG4gKiAgIHJlY29nbml6ZXJDb2xsZWN0aW9uLFxyXG4gKiAgIHsgaW9zOiBJT1NfTElDRU5TRV9LRVksIGFuZHJvaWQ6IEFORFJPSURfTElDRU5TRV9LRVkgfSxcclxuICogKTtcclxuICpcclxuICogaWYgKCFjYW5jZWxlZCkge1xyXG4gKiAgIGlmICh1c2RsUmVjb2duaXplci5yZXN1bHQucmVzdWx0U3RhdGUgPT09IFJlY29nbml6ZXJSZXN1bHRTdGF0ZS52YWxpZCkge1xyXG4gKiAgICAgY29uc3Qgc3VjY2Vzc0ZyYW1lID0gdXNkbFN1Y2Nlc3NGcmFtZUdyYWJiZXIucmVzdWx0LnN1Y2Nlc3NGcmFtZTtcclxuICogICAgIGlmIChzdWNjZXNzRnJhbWUpIHtcclxuICogICAgICAgdGhpcy5iYXNlNjRJbWcgPSBgZGF0YTppbWFnZS9qcGc7YmFzZTY0LCAke3N1Y2Nlc3NGcmFtZX1gO1xyXG4gKiAgICAgICB0aGlzLmZpZWxkcyA9IHVzZGxSZWNvZ25pemVyLnJlc3VsdC5maWVsZHM7XHJcbiAqICAgICB9XHJcbiAqICAgfSBlbHNlIHtcclxuICogICAgIHRoaXMuYmFyY29kZVN0cmluZ0RhdGEgPSBiYXJjb2RlUmVjb2duaXplci5yZXN1bHQuc3RyaW5nRGF0YTtcclxuICogICB9XHJcbiAqIH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGNvbnN0IG92ZXJsYXlTZXR0aW5ncyA9IG5ldyB0aGlzLmJsaW5rSWQuQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzKCk7XHJcbiAqIGNvbnN0IHJlY29nbml6ZXIgPSBuZXcgdGhpcy5ibGlua0lkLkJsaW5rQ2FyZFJlY29nbml6ZXIoKTtcclxuICogcmVjb2duaXplci5yZXR1cm5GdWxsRG9jdW1lbnRJbWFnZSA9IGZhbHNlO1xyXG4gKiByZWNvZ25pemVyLmRldGVjdEdsYXJlID0gdHJ1ZTtcclxuICogcmVjb2duaXplci5leHRyYWN0Q3Z2ID0gdHJ1ZTtcclxuICogcmVjb2duaXplci5leHRyYWN0VmFsaWRUaHJ1ID0gdHJ1ZTtcclxuICogcmVjb2duaXplci5leHRyYWN0T3duZXIgPSB0cnVlO1xyXG4gKlxyXG4gKiBjb25zdCByZWNvZ25pemVyQ29sbGVjdGlvbiA9IG5ldyB0aGlzLmJsaW5rSWQuUmVjb2duaXplckNvbGxlY3Rpb24oW3JlY29nbml6ZXJdKTtcclxuICogY29uc3QgY2FuY2VsZWQgPSBhd2FpdCB0aGlzLmJsaW5rSWQuc2NhbldpdGhDYW1lcmEoXHJcbiAqICAgb3ZlcmxheVNldHRpbmdzLFxyXG4gKiAgIHJlY29nbml6ZXJDb2xsZWN0aW9uLFxyXG4gKiAgIHtcclxuICogICAgIGlvczogJycsIC8vaU9TIExpY2Vuc2UgS2V5XHJcbiAqICAgICBhbmRyb2lkOiAnJyAvL0FuZHJvaWQgTGljZW5zZSBLZXlcclxuICogICB9LFxyXG4gKiApO1xyXG4gKlxyXG4gKiBpZiAoIWNhbmNlbGVkKSB7XHJcbiAqICAgaWYgKHJlY29nbml6ZXIucmVzdWx0LnJlc3VsdFN0YXRlID09PSBSZWNvZ25pemVyUmVzdWx0U3RhdGUudmFsaWQpIHtcclxuICogICAgIGNvbnN0IHJlc3VsdHMgPSByZWNvZ25pemVyLnJlc3VsdDtcclxuICpcclxuICogICAgIGlmIChyZXN1bHRzLnJlc3VsdFN0YXRlID09PSBSZWNvZ25pemVyUmVzdWx0U3RhdGUudmFsaWQpIHtcclxuICogICAgICAgY29uc3QgY2NJbmZvID0ge1xyXG4gKiAgICAgICAgIGNhcmROdW1iZXI6IE51bWJlcihyZXN1bHRzLmNhcmROdW1iZXIpLFxyXG4gKiAgICAgICAgIGV4cGlyYXRpb25Nb250aDogTnVtYmVyKHJlc3VsdHMudmFsaWRUaHJ1Lm1vbnRoKSxcclxuICogICAgICAgICBleHBpcmF0aW9uWWVhcjogTnVtYmVyKHJlc3VsdHMudmFsaWRUaHJ1LnllYXIpLFxyXG4gKiAgICAgICAgIGN2djogTnVtYmVyKHJlc3VsdHMuY3Z2KVxyXG4gKiAgICAgICB9O1xyXG4gKiAgICAgfVxyXG4gKiAgIH1cclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQmxpbmtJZCcsXHJcbiAgcGx1Z2luOiAnYmxpbmtpZC1jb3Jkb3ZhJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuQmxpbmtJRCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9CbGlua0lEL2JsaW5raWQtcGhvbmVnYXAnLFxyXG4gIGluc3RhbGw6XHJcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGJsaW5raWQtY29yZG92YSAtLXZhcmlhYmxlIENBTUVSQV9VU0FHRV9ERVNDUklQVElPTj1cIkVuYWJsZSB5b3VyIGNhbWVyYSBzbyB0aGF0IHlvdSBjYW4gc2NhbiB5b3VyIElEIHRvIHZhbGlkYXRlIHlvdXIgYWNjb3VudFwiJyxcclxuICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmxpbmtJZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBPcGVucyB0aGUgY2FtZXJhIGRpYWxvZyBhbmQgYXR0ZW1wdHMgdG8gc2NhbiBhIGJhcmNvZGUvZG9jdW1lbnRcclxuICAgKiBAcGFyYW0gb3ZlcmxheVNldHRpbmdzIHtPdmVybGF5U2V0dGluZ3N9IGZvciBjYW1lcmEgb3ZlcmxheSBjdXN0b21pemF0aW9uXHJcbiAgICogQHBhcmFtIHJlY29nbml6ZXJDb2xsZWN0aW9uIHtSZWNvZ25pemVyQ29sbGVjdGlvbn0gY29sbGVjdGlvbiBvZiByZWNvZ25pemVycyB0byBzY2FuIHdpdGhcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBzY2FuV2l0aENhbWVyYShcclxuICAgIG92ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzLFxyXG4gICAgcmVjb2duaXplckNvbGxlY3Rpb246IFJlY29nbml6ZXJDb2xsZWN0aW9uLFxyXG4gICAgbGljZW5zZXM6IExpY2Vuc2VzXHJcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KCkgRGF0ZTogRGF0ZUN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvaW50OiBQb2ludEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFF1YWRyaWxhdGVyYWw6IFF1YWRyaWxhdGVyYWxDdG9yO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KCkgQmFyY29kZU92ZXJsYXlTZXR0aW5nczogQmFyY29kZU92ZXJsYXlTZXR0aW5nc0N0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERvY3VtZW50T3ZlcmxheVNldHRpbmdzOiBEb2N1bWVudE92ZXJsYXlTZXR0aW5nc0N0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERvY3VtZW50VmVyaWZpY2F0aW9uT3ZlcmxheVNldHRpbmdzOiBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5nc0N0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rQ2FyZE92ZXJsYXlTZXR0aW5nczogQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzQ3RvcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFJlY29nbml6ZXJDb2xsZWN0aW9uOiBSZWNvZ25pemVyQ29sbGVjdGlvbkN0b3I7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCYXJjb2RlUmVjb2duaXplclJlc3VsdDogQmFyY29kZVJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCYXJjb2RlUmVjb2duaXplcjogQmFyY29kZVJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdDogU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplcjogU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJDdG9yO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdDogQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXI6IEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplclJlc3VsdDogQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplcjogQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplcjogQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdDogQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyOiBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogQXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhSWRCYWNrUmVjb2duaXplcjogQXVzdHJpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFJZEZyb250UmVjb2duaXplcjogQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdDogQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXI6IEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXI6IEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplclJlc3VsdDogQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtDYXJkUmVjb2duaXplclJlc3VsdDogQmxpbmtDYXJkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rQ2FyZFJlY29nbml6ZXI6IEJsaW5rQ2FyZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXI6IENvbG9tYmlhSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyOiBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogQ3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdDogQ3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdDogQ3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEN5cHJ1c0lkQmFja1JlY29nbml6ZXI6IEN5cHJ1c0lkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdDogQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDeXBydXNJZEZyb250UmVjb2duaXplcjogQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgRG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdDogRG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyOiBFZ3lwdElkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgRXVkbFJlY29nbml6ZXJSZXN1bHQ6IEV1ZGxSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogR2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXI6IEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdDogR2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55RGxCYWNrUmVjb2duaXplcjogR2VybWFueURsQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdDogR2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55SWRCYWNrUmVjb2duaXplcjogR2VybWFueUlkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlJZEZyb250UmVjb2duaXplcjogR2VybWFueUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdDogR2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlPbGRJZFJlY29nbml6ZXI6IEdlcm1hbnlPbGRJZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0OiBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplcjogR2VybWFueVBhc3Nwb3J0UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyOiBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSWthZFJlY29nbml6ZXJSZXN1bHQ6IElrYWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSWthZFJlY29nbml6ZXI6IElrYWRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXI6IEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXI6IElyZWxhbmREbEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJdGFseURsRnJvbnRSZWNvZ25pemVyOiBJdGFseURsRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXI6IEpvcmRhbkNvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBKb3JkYW5JZEJhY2tSZWNvZ25pemVyOiBKb3JkYW5JZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuSWRGcm9udFJlY29nbml6ZXI6IEpvcmRhbklkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgS3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdDogS3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEt1d2FpdElkQmFja1JlY29nbml6ZXI6IEt1d2FpdElkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdDogS3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBLdXdhaXRJZEZyb250UmVjb2duaXplcjogS3V3YWl0SWRGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTWFsYXlzaWFEbEZyb250UmVjb2duaXplcjogTWFsYXlzaWFEbEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdDogTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyOiBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplcjogTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyOiBNb3JvY2NvSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdDogTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyOiBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTXJ0ZENvbWJpbmVkUmVjb2duaXplcjogTXJ0ZENvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1ydGRSZWNvZ25pemVyUmVzdWx0OiBNcnRkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1ydGRSZWNvZ25pemVyOiBNcnRkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHQ6IE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNeUthZEJhY2tSZWNvZ25pemVyOiBNeUthZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTXlLYWRGcm9udFJlY29nbml6ZXI6IE15S2FkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXI6IE5ld1plYWxhbmREbEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBkZjQxN1JlY29nbml6ZXJSZXN1bHQ6IFBkZjQxN1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQZGY0MTdSZWNvZ25pemVyOiBQZGY0MTdSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXI6IFBvbGFuZENvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHQ6IFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyOiBQb2xhbmRJZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFBvbGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kSWRGcm9udFJlY29nbml6ZXI6IFBvbGFuZElkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXI6IFJvbWFuaWFJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyOiBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2VyYmlhSWRCYWNrUmVjb2duaXplcjogU2VyYmlhSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyOiBTZXJiaWFJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHQ6IFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW1OdW1iZXJSZWNvZ25pemVyOiBTaW1OdW1iZXJSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJSZXN1bHQ6IFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXI6IFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXI6IFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyOiBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyOiBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXI6IFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXI6IFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92YWtpYUlkQmFja1JlY29nbml6ZXI6IFNsb3Zha2lhSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyOiBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXI6IFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXI6IFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyOiBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdDogU3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNwYWluRGxGcm9udFJlY29nbml6ZXI6IFNwYWluRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdDogU3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2VkZW5EbEZyb250UmVjb2duaXplcjogU3dlZGVuRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplcjogU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdDogU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyOiBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplcjogU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0OiBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyOiBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyOiBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHQ6IFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyOiBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXI6IFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVmluUmVjb2duaXplclJlc3VsdDogVmluUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFZpblJlY29nbml6ZXI6IFZpblJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVc2RsUmVjb2duaXplclJlc3VsdDogVXNkbFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVc2RsUmVjb2duaXplcjogVXNkbFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVc2RsQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBVc2RsQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVXNkbENvbWJpbmVkUmVjb2duaXplcjogVXNkbENvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbn1cclxuIl19