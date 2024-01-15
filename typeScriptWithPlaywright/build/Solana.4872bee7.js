(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function r(r,e,t,o){Object.defineProperty(r,e,{get:t,set:o,enumerable:!0,configurable:!0})}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;e.register("iBvu5",(function(t,o){r(t.exports,"DisconnectedDevice",(function(){return c}),(function(r){return c=r})),r(t.exports,"DisconnectedDeviceDuringOperation",(function(){return u}),(function(r){return u=r})),r(t.exports,"TransportOpenUserCancelled",(function(){return C}),(function(r){return C=r})),r(t.exports,"TransportRaceCondition",(function(){return i}),(function(r){return i=r})),r(t.exports,"TransportError",(function(){return l}),(function(r){return l=r})),r(t.exports,"StatusCodes",(function(){return E}),(function(r){return E=r})),r(t.exports,"TransportStatusError",(function(){return d}),(function(r){return d=r})),r(t.exports,"createCustomErrorClass",(function(){return e("3BQlJ").createCustomErrorClass}),(function(r){return e("3BQlJ").createCustomErrorClass=r}));var s,a=e("3BQlJ"),n=(s=function(r,e){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])},s(r,e)},function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=r}s(r,e),r.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),c=((0,a.createCustomErrorClass)("AccountNameRequired"),(0,a.createCustomErrorClass)("AccountNotSupported"),(0,a.createCustomErrorClass)("AmountRequired"),(0,a.createCustomErrorClass)("BluetoothRequired"),(0,a.createCustomErrorClass)("BtcUnmatchedApp"),(0,a.createCustomErrorClass)("CantOpenDevice"),(0,a.createCustomErrorClass)("CashAddrNotSupported"),(0,a.createCustomErrorClass)("CurrencyNotSupported"),(0,a.createCustomErrorClass)("DeviceAppVerifyNotSupported"),(0,a.createCustomErrorClass)("DeviceGenuineSocketEarlyClose"),(0,a.createCustomErrorClass)("DeviceNotGenuine"),(0,a.createCustomErrorClass)("DeviceOnDashboardExpected"),(0,a.createCustomErrorClass)("DeviceOnDashboardUnexpected"),(0,a.createCustomErrorClass)("DeviceInOSUExpected"),(0,a.createCustomErrorClass)("DeviceHalted"),(0,a.createCustomErrorClass)("DeviceNameInvalid"),(0,a.createCustomErrorClass)("DeviceSocketFail"),(0,a.createCustomErrorClass)("DeviceSocketNoBulkStatus"),(0,a.createCustomErrorClass)("DisconnectedDevice")),u=(0,a.createCustomErrorClass)("DisconnectedDeviceDuringOperation"),C=((0,a.createCustomErrorClass)("DeviceExtractOnboardingStateError"),(0,a.createCustomErrorClass)("DeviceOnboardingStatePollingError"),(0,a.createCustomErrorClass)("EnpointConfig"),(0,a.createCustomErrorClass)("EthAppPleaseEnableContractData"),(0,a.createCustomErrorClass)("FeeEstimationFailed"),(0,a.createCustomErrorClass)("FirmwareNotRecognized"),(0,a.createCustomErrorClass)("HardResetFail"),(0,a.createCustomErrorClass)("InvalidXRPTag"),(0,a.createCustomErrorClass)("InvalidAddress"),(0,a.createCustomErrorClass)("InvalidAddressBecauseDestinationIsAlsoSource"),(0,a.createCustomErrorClass)("LatestMCUInstalledError"),(0,a.createCustomErrorClass)("UnknownMCU"),(0,a.createCustomErrorClass)("LedgerAPIError"),(0,a.createCustomErrorClass)("LedgerAPIErrorWithMessage"),(0,a.createCustomErrorClass)("LedgerAPINotAvailable"),(0,a.createCustomErrorClass)("ManagerAppAlreadyInstalled"),(0,a.createCustomErrorClass)("ManagerAppRelyOnBTC"),(0,a.createCustomErrorClass)("ManagerAppDepInstallRequired"),(0,a.createCustomErrorClass)("ManagerAppDepUninstallRequired"),(0,a.createCustomErrorClass)("ManagerDeviceLocked"),(0,a.createCustomErrorClass)("ManagerFirmwareNotEnoughSpace"),(0,a.createCustomErrorClass)("ManagerNotEnoughSpace"),(0,a.createCustomErrorClass)("ManagerUninstallBTCDep"),(0,a.createCustomErrorClass)("NetworkDown"),(0,a.createCustomErrorClass)("NoAddressesFound"),(0,a.createCustomErrorClass)("NotEnoughBalance"),(0,a.createCustomErrorClass)("NotEnoughBalanceToDelegate"),(0,a.createCustomErrorClass)("NotEnoughBalanceInParentAccount"),(0,a.createCustomErrorClass)("NotEnoughSpendableBalance"),(0,a.createCustomErrorClass)("NotEnoughBalanceBecauseDestinationNotCreated"),(0,a.createCustomErrorClass)("NoAccessToCamera"),(0,a.createCustomErrorClass)("NotEnoughGas"),(0,a.createCustomErrorClass)("NotSupportedLegacyAddress"),(0,a.createCustomErrorClass)("GasLessThanEstimate"),(0,a.createCustomErrorClass)("PriorityFeeTooLow"),(0,a.createCustomErrorClass)("PriorityFeeTooHigh"),(0,a.createCustomErrorClass)("PriorityFeeHigherThanMaxFee"),(0,a.createCustomErrorClass)("MaxFeeTooLow"),(0,a.createCustomErrorClass)("PasswordsDontMatch"),(0,a.createCustomErrorClass)("PasswordIncorrect"),(0,a.createCustomErrorClass)("RecommendSubAccountsToEmpty"),(0,a.createCustomErrorClass)("RecommendUndelegation"),(0,a.createCustomErrorClass)("TimeoutTagged"),(0,a.createCustomErrorClass)("UnexpectedBootloader"),(0,a.createCustomErrorClass)("MCUNotGenuineToDashboard"),(0,a.createCustomErrorClass)("RecipientRequired"),(0,a.createCustomErrorClass)("UnavailableTezosOriginatedAccountReceive"),(0,a.createCustomErrorClass)("UnavailableTezosOriginatedAccountSend"),(0,a.createCustomErrorClass)("UpdateFetchFileFail"),(0,a.createCustomErrorClass)("UpdateIncorrectHash"),(0,a.createCustomErrorClass)("UpdateIncorrectSig"),(0,a.createCustomErrorClass)("UpdateYourApp"),(0,a.createCustomErrorClass)("UserRefusedDeviceNameChange"),(0,a.createCustomErrorClass)("UserRefusedAddress"),(0,a.createCustomErrorClass)("UserRefusedFirmwareUpdate"),(0,a.createCustomErrorClass)("UserRefusedAllowManager"),(0,a.createCustomErrorClass)("UserRefusedOnDevice"),(0,a.createCustomErrorClass)("TransportOpenUserCancelled")),i=((0,a.createCustomErrorClass)("TransportInterfaceNotAvailable"),(0,a.createCustomErrorClass)("TransportRaceCondition")),l=((0,a.createCustomErrorClass)("TransportWebUSBGestureRequired"),(0,a.createCustomErrorClass)("DeviceShouldStayInApp"),(0,a.createCustomErrorClass)("WebsocketConnectionError"),(0,a.createCustomErrorClass)("WebsocketConnectionFailed"),(0,a.createCustomErrorClass)("WrongDeviceForAccount"),(0,a.createCustomErrorClass)("WrongAppForCurrency"),(0,a.createCustomErrorClass)("ETHAddressNonEIP"),(0,a.createCustomErrorClass)("CantScanQRCode"),(0,a.createCustomErrorClass)("FeeNotLoaded"),(0,a.createCustomErrorClass)("FeeRequired"),(0,a.createCustomErrorClass)("FeeTooHigh"),(0,a.createCustomErrorClass)("DustLimit"),(0,a.createCustomErrorClass)("PendingOperation"),(0,a.createCustomErrorClass)("SyncError"),(0,a.createCustomErrorClass)("PairingFailed"),(0,a.createCustomErrorClass)("GenuineCheckFailed"),(0,a.createCustomErrorClass)("LedgerAPI4xx"),(0,a.createCustomErrorClass)("LedgerAPI5xx"),(0,a.createCustomErrorClass)("FirmwareOrAppUpdateRequired"),(0,a.createCustomErrorClass)("LanguageNotFound"),(0,a.createCustomErrorClass)("NoDBPathGiven"),(0,a.createCustomErrorClass)("DBWrongPassword"),(0,a.createCustomErrorClass)("DBNotReset"),function(r){function e(e,t){var o=this,s="TransportError";return(o=r.call(this,e||s)||this).name=s,o.message=e,o.stack=(new Error).stack,o.id=t,o}return n(e,r),e}(Error));(0,a.addCustomErrorDeserializer)("TransportError",(function(r){return new l(r.message,r.id)}));var E={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,MISSING_CRITICAL_PARAMETER:26624,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586,LOCKED_DEVICE:21781};function d(r){this.name="TransportStatusError";var e=Object.keys(E).find((function(e){return E[e]===r}))||"UNKNOWN_ERROR",t=function(r){switch(r){case 26368:return"Incorrect length";case 26624:return"Missing critical parameter";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received";case 21781:return"Locked device"}if(28416<=r&&r<=28671)return"Internal error, please report"}(r)||e,o=r.toString(16);this.message="Ledger device: ".concat(t," (0x").concat(o,")"),this.stack=(new Error).stack,this.statusCode=r,this.statusText=e}d.prototype=new Error,(0,a.addCustomErrorDeserializer)("TransportStatusError",(function(r){return new d(r.statusCode)}))})),e.register("3BQlJ",(function(e,t){r(e.exports,"addCustomErrorDeserializer",(function(){return c}),(function(r){return c=r})),r(e.exports,"createCustomErrorClass",(function(){return u}),(function(r){return u=r}));var o,s=(o=function(r,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])},o(r,e)},function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=r}o(r,e),r.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),a={},n={},c=function(r,e){n[r]=e},u=function(r){var e=function(e){function t(o,s,a){var n=e.call(this,o||r,a)||this;if(Object.setPrototypeOf(n,t.prototype),n.name=r,s)for(var c in s)n[c]=s[c];if(a&&"object"==typeof a&&"cause"in a&&!("cause"in n)){var u=a.cause;n.cause=u,"stack"in u&&(n.stack=n.stack+"\nCAUSE: "+u.stack)}return n}return s(t,e),t}(Error);return a[r]=e,e}}));
//# sourceMappingURL=Solana.4872bee7.js.map
define=__define;})(window.define);