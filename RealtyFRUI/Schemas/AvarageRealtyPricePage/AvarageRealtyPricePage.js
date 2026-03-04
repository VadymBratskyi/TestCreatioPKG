define("AvarageRealtyPricePage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TopAreaProfileContainer",
				"values": {
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "RichTextEditor_3h59nvw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 5,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.PageParameters_RichTextParameter1_60pn129",
					"control": "$PageParameters_RichTextParameter1_60pn129",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": true,
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "SysFile",
						"recordColumnName": "RecordId"
					},
					"visible": true,
					"readonly": true,
					"toolbarDisplayMode": null
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_ef6c2yi",
				"values": {
					"layoutConfig": {
						"column": 6,
						"colSpan": 4,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PageParameters_IntegerParameter1_t3y422e",
					"control": "$PageParameters_IntegerParameter1_t3y422e",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PageParameters_RichTextParameter1_60pn129": {
						"modelConfig": {
							"path": "PageParameters.SQText"
						}
					},
					"PageParameters_IntegerParameter1_t3y422e": {
						"modelConfig": {
							"path": "PageParameters.IntegerParameter1"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});