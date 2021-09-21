sap.ui.define(function () {
	"use strict";

	var Formatter = {

		weightState: function (fValue) {
			try {
				fValue = parseFloat(fValue);
				if (fValue < 0) {
					return "None";
				} else if (fValue < 1000) {
					return "Success";
				} else if (fValue < 2000) {
					return "Warning";
				} else {
					return "Error";
				}
			} catch (err) {
				return "None";
			}
		},
		numberUnit: function (sValue) {
			if (!sValue) {
				return "0.00";
			}

			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				maxFractionDigits: 2,
				minFractionDigits: 2,
				groupingEnabled: true,
				groupingSeparator: ",",
				decimalSeparator: "."
			});

			return oNumberFormat.format(sValue);

		}
	};

	return Formatter;

}, /* bExport= */ true);