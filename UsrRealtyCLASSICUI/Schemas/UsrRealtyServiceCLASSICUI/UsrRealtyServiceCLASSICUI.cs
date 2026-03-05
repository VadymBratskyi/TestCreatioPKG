namespace Terrasoft.Configuration
{
    using System;
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrRealtyServiceCLASSICUI : BaseService
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public decimal GetTotalAmountByTypeId(string realtyTypeId, string realtyOfferTypeId,
				string entityName) {
            if (string.IsNullOrEmpty(realtyTypeId) || string.IsNullOrEmpty(realtyOfferTypeId) ||
                string.IsNullOrEmpty(entityName)) {
                return -1;
            }
            Select select = new Select(UserConnection)
                .Column(Func.Sum("UsrPriceUSD"))
                .From(entityName)
                .Where("UsrTypeId").IsEqual(Column.Parameter(new Guid(realtyTypeId)))
                .And("UsrRealtyOfferId").IsEqual(Column.Parameter(new Guid(realtyOfferTypeId)))
                as Select;
            return select.ExecuteScalar<decimal>();
        }

        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped, RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json)]
        public string GetExamples() {
            return "Test service. OK!";
        }
    }
}