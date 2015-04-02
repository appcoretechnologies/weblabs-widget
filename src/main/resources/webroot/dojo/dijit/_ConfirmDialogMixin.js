define([
	"dojo/_base/declare",
	"./_WidgetsInTemplateMixin",
	"dojo/i18n!./nls/common",
	"dojo/text!./templates/actionBar.html",
	"./form/Button"		// used by templates
], function(declare, _WidgetsInTemplateMixin, strings, actionBarMarkup) {

	return declare("dijit/_ConfirmDialogMixin", _WidgetsInTemplateMixin, {
		// summary:
		//		Mixin for Dialog/TooltipDialog with OK/Cancel buttons.

		// HTML snippet for action bar, overrides _DialogMixin.actionBarTemplate
		actionBarTemplate: actionBarMarkup,

		// buttonOk: String
		//		Label of OK test
		buttonOk: strings.buttonOk,
		_setButtonOkAttr: { node: "okButton", attribute: "label" },

		// buttonCancel: String
		//		Label of cancel test
		buttonCancel: strings.buttonCancel,
		_setButtonCancelAttr: { node: "cancelButton", attribute: "label" }
	});
});
