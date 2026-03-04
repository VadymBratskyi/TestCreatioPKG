namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: RealtyServiceSchema

	/// <exclude/>
	public class RealtyServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public RealtyServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public RealtyServiceSchema(RealtyServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7c47e280-ebd4-4477-8230-a4fdcaa1a40e");
			Name = "RealtyService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a6f79b4f-a7bd-4ade-be03-e862fdf4f909");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,82,77,75,195,64,16,61,91,232,127,88,122,106,33,4,212,155,197,67,43,40,21,218,74,19,240,32,30,182,201,164,46,238,151,59,147,66,144,254,119,39,201,98,91,15,118,46,217,125,239,237,204,203,219,181,210,0,122,89,128,200,33,4,137,174,162,244,193,217,74,237,234,32,73,57,59,28,124,15,7,130,171,70,101,119,34,107,144,192,164,25,132,189,42,96,233,74,208,211,11,124,250,10,219,139,154,89,65,106,223,13,60,147,30,77,113,19,54,102,76,39,232,37,111,177,3,251,165,32,11,122,143,240,12,253,10,136,197,158,27,110,149,86,212,108,224,171,86,1,12,88,194,241,233,166,157,46,238,197,133,35,173,42,141,64,57,137,115,124,189,213,170,16,133,150,136,98,3,82,83,19,13,137,59,49,151,8,113,215,171,99,138,157,193,181,135,62,220,63,206,59,146,127,116,97,247,238,19,198,75,160,15,87,178,187,209,203,58,203,71,137,152,187,178,201,168,209,173,99,150,45,1,81,238,224,23,77,95,131,244,30,202,228,216,173,173,214,55,32,61,186,96,36,157,157,236,161,244,25,157,77,88,134,222,89,132,255,117,147,19,171,49,128,18,10,101,164,22,79,64,185,35,169,103,198,213,150,230,77,222,120,88,148,99,164,208,222,100,232,2,234,177,68,156,129,235,170,130,16,153,225,224,138,43,210,28,61,95,196,138,159,232,228,52,191,182,2,80,29,172,184,190,185,157,30,137,67,191,228,207,225,7,78,115,197,105,216,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7c47e280-ebd4-4477-8230-a4fdcaa1a40e"));
		}

		#endregion

	}

	#endregion

}

