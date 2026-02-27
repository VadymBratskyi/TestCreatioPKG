define("RealtyFRUI_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"color": "#CCEDFC",
					"visible": true,
					"alignItems": "stretch",
					"justifyContent": "start",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"color": "#FDEDCC",
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "#FDEDCC",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true,
					"visible": true,
					"stretch": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "remove",
				"name": "FeedTabContainer"
			},
			{
				"operation": "remove",
				"name": "Feed"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderLabel"
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "6d4504ea-d5c1-4b8b-9be7-6aa9fd0a2e50",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_wsyfwha",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_wsyfwha_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.MyCustomRequest",
						"params": {
							"showSuccessMessage": true
						}
					},
					"clickMode": "default",
					"icon": "copilot-rewrite-btn-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Name",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.Name",
					"control": "$Name",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PriceUSD_ogyemaj",
					"control": "$PDS_PriceUSD_ogyemaj",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AreaSQFT",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_AreaSQFT_0c711jy",
					"control": "$PDS_AreaSQFT_0c711jy",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Number_vmssdcq",
					"control": "$PDS_Number_vmssdcq",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_CommissionUSD_f6n8q44",
					"control": "$PDS_CommissionUSD_f6n8q44",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Column10_r9v0e3x",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Column10_r9v0e3x",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_mb85th1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_mb85th1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Type",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_RealtyOffer_fe0miww",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_RealtyOffer_fe0miww",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_h1kjq7j",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_h1kjq7j_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Column13_nc33j94",
					"control": "$PDS_Column13_nc33j94",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Column12_11xgkq1",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Column12_11xgkq1",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_xb9tixa",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xb9tixa_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_RealtyOfferCommissionPercent_olme3zg",
					"control": "$PDS_RealtyOfferCommissionPercent_olme3zg",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_imnl4vn",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_imnl4vn_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_v0i5b8r",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_imnl4vn",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_in78ovl",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_v0i5b8r",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_k4gs3on",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_k4gs3on_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "RealtyVisitFRUI",
							"defaultValues": [
								{
									"attributeName": "ParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_in78ovl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_6fsmkw5",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_6fsmkw5_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_173ysafDS"
						}
					}
				},
				"parentName": "FlexContainer_in78ovl",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_jm9grex",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_jm9grex_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_in78ovl",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_ibmubf4",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_ibmubf4_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_173ysaf"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_jm9grex",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_auerc5i",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_auerc5i_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "RealtyVisitFRUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_jm9grex",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_jkuv3ql",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_jkuv3ql_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_jkuv3ql_GridDetail_173ysaf",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_173ysaf"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_jkuv3ql_SearchValue",
							"GridDetailSearchFilter_jkuv3ql_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_in78ovl",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_1pl7kn6",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_imnl4vn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_173ysaf",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_173ysaf",
					"primaryColumnName": "GridDetail_173ysafDS_Id",
					"columns": [
						{
							"id": "e50404a0-a518-0119-f178-9adf52ef2257",
							"code": "GridDetail_173ysafDS_VisitDate",
							"caption": "#ResourceString(GridDetail_173ysafDS_VisitDate)#",
							"dataValueType": 7
						},
						{
							"id": "817090aa-9990-ab48-07bf-cdfdfeb58a95",
							"code": "GridDetail_173ysafDS_PotentialCustomer",
							"caption": "#ResourceString(GridDetail_173ysafDS_PotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "e9cf2808-725e-dd5e-a9a4-ae9756b7cb11",
							"code": "GridDetail_173ysafDS_Comment",
							"caption": "#ResourceString(GridDetail_173ysafDS_Comment)#",
							"dataValueType": 28,
							"width": 124
						},
						{
							"id": "90db8ab9-dd63-361d-1f52-2b0467354402",
							"code": "GridDetail_173ysafDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_173ysafDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 141
						},
						{
							"id": "f0460d3a-1bd0-81fa-152b-44833501ef0d",
							"code": "GridDetail_173ysafDS_ManagerEmployee",
							"caption": "#ResourceString(GridDetail_173ysafDS_ManagerEmployee)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_1pl7kn6",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"PDS_PriceUSD_ogyemaj": {
						"modelConfig": {
							"path": "PDS.PriceUSD"
						}
					},
					"PDS_AreaSQFT_0c711jy": {
						"modelConfig": {
							"path": "PDS.AreaSQFT"
						}
					},
					"PDS_Column10_r9v0e3x": {
						"modelConfig": {
							"path": "PDS.Type"
						}
					},
					"PDS_Column10_r9v0e3x_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_RealtyOffer_fe0miww": {
						"modelConfig": {
							"path": "PDS.RealtyOffer"
						}
					},
					"PDS_RealtyOffer_fe0miww_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_Column12_11xgkq1": {
						"modelConfig": {
							"path": "PDS.Manager"
						}
					},
					"PDS_Column12_11xgkq1_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_Column13_nc33j94": {
						"modelConfig": {
							"path": "PDS.Comment"
						}
					},
					"PDS_Number_vmssdcq": {
						"modelConfig": {
							"path": "PDS.Number"
						}
					},
					"GridDetail_173ysaf": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_173ysafDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_jkuv3ql_GridDetail_173ysaf",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_173ysaf_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Comment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_173ysafDS_VisitDate": {
									"modelConfig": {
										"path": "GridDetail_173ysafDS.VisitDate"
									}
								},
								"GridDetail_173ysafDS_PotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_173ysafDS.PotentialCustomer"
									}
								},
								"GridDetail_173ysafDS_Comment": {
									"modelConfig": {
										"path": "GridDetail_173ysafDS.Comment"
									}
								},
								"GridDetail_173ysafDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_173ysafDS.CreatedOn"
									}
								},
								"GridDetail_173ysafDS_ManagerEmployee": {
									"modelConfig": {
										"path": "GridDetail_173ysafDS.ManagerEmployee"
									}
								},
								"GridDetail_173ysafDS_Id": {
									"modelConfig": {
										"path": "GridDetail_173ysafDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_173ysaf_PredefinedFilter": {
						"value": null
					},
					"PDS_CommissionUSD_f6n8q44": {
						"modelConfig": {
							"path": "PDS.CommissionUSD"
						}
					},
					"PDS_RealtyOfferCommissionPercent_olme3zg": {
						"modelConfig": {
							"path": "PDS.RealtyOfferCommissionPercent_olme3zg"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"CardState"
				],
				"values": {
					"modelConfig": {}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_173ysafDS": [
							{
								"attributePath": "ParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "RealtyFRUI",
							"attributes": {
								"RealtyOfferCommissionPercent_olme3zg": {
									"path": "RealtyOffer.CommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_173ysafDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "RealtyVisitFRUI",
							"attributes": {
								"VisitDate": {
									"path": "VisitDate"
								},
								"PotentialCustomer": {
									"path": "PotentialCustomer"
								},
								"Comment": {
									"path": "Comment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"ManagerEmployee": {
									"path": "ManagerEmployee"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.MyCustomRequest",
				handler: async (request, next) => {
					var area = await request?.$context.PDS_PriceUSD_ogyemaj;
					Terrasoft.showInformation("Button works.." + area);
					return next?.handler(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {
					if(request.attributeName === "PDS_PriceUSD_ogyemaj" ||
					  request.attributeName === "PDS_RealtyOffer_fe0miww") {
						var price = await request.$context.PDS_PriceUSD_ogyemaj;
						var percent = await request.$context.PDS_RealtyOfferCommissionPercent_olme3zg;
						var commission = price * percent / 100;
						request.$context.PDS_CommissionUSD_f6n8q44 = commission;
					  }
					return next?.handler(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});