namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MyRealtyEventsSchema

	/// <exclude/>
	public class MyRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MyRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MyRealtyEventsSchema(MyRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("cccc50af-a1e8-47e1-9c60-72498c173890");
			Name = "MyRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a6f79b4f-a7bd-4ade-be03-e862fdf4f909");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,83,77,111,219,48,12,189,23,232,127,32,140,29,108,32,16,218,235,178,21,88,178,116,8,208,125,32,118,118,25,118,80,100,198,213,32,75,134,40,167,243,134,252,247,73,150,211,37,246,10,140,39,139,122,124,124,143,162,53,175,145,26,46,16,10,180,150,147,217,59,182,52,122,47,171,214,114,39,141,190,190,250,125,125,5,62,90,146,186,130,188,35,135,245,252,60,117,94,88,215,70,191,120,105,145,173,180,147,78,34,253,15,134,173,14,168,93,128,70,240,183,254,162,235,179,15,210,203,208,104,211,92,60,98,205,63,121,23,240,22,146,13,114,229,186,251,205,118,157,100,223,99,85,211,238,148,20,32,20,39,130,143,93,68,92,112,192,107,88,112,194,127,176,71,134,193,255,25,153,57,120,197,178,68,56,24,89,194,103,157,243,131,247,145,154,221,15,20,14,8,117,137,118,6,145,112,129,123,111,170,167,125,103,43,2,204,206,9,67,236,124,115,246,76,114,170,198,108,126,9,139,116,96,123,3,222,108,26,19,89,44,24,129,75,20,178,230,10,26,43,69,152,76,172,98,31,208,21,93,131,229,210,168,182,214,95,185,106,241,205,0,189,75,147,47,1,188,205,223,39,227,214,114,15,105,100,186,131,219,155,83,76,140,132,64,182,166,37,215,2,21,150,190,175,179,45,206,167,40,114,54,60,188,95,61,226,21,22,88,55,138,187,160,83,227,19,60,24,193,149,252,197,119,10,243,30,151,14,234,183,132,214,239,166,246,67,246,139,201,54,72,166,181,194,131,140,245,44,51,72,46,158,151,146,217,180,113,136,100,210,128,88,63,138,53,21,198,44,100,21,79,73,198,10,51,8,24,15,100,234,193,107,143,9,118,111,108,205,93,58,242,230,213,221,178,155,197,171,201,108,67,184,71,107,158,122,239,171,159,2,155,224,238,84,63,134,31,255,30,135,207,99,248,63,142,127,0,209,120,128,122,200,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("ba756383-30de-0726-23cb-4bddbcf4a8b1"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("a6f79b4f-a7bd-4ade-be03-e862fdf4f909"),
				CreatedInSchemaUId = new Guid("cccc50af-a1e8-47e1-9c60-72498c173890"),
				ModifiedInSchemaUId = new Guid("cccc50af-a1e8-47e1-9c60-72498c173890")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("cccc50af-a1e8-47e1-9c60-72498c173890"));
		}

		#endregion

	}

	#endregion

}

