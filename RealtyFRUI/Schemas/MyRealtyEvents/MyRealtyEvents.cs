namespace Terrasoft.Configuration
{
    using System;
    using Terrasoft.Common;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;

    [EntityEventListener(SchemaName = "RealtyFRUI")]
    public class MyRealtyEventListener : BaseEntityEventListener
    {
        public override void OnSaving(object sender, EntityBeforeEventArgs e) {
            base.OnSaving(sender, e);
            Entity realty = (Entity)sender;
            decimal price = realty.GetTypedColumnValue<decimal>("PriceUSD");
            if (price > 1000000000) {
                e.IsCanceled = true;
                string messageTemplate = new LocalizableString(realty.UserConnection.ResourceStorage, "MyRealtyEvents",
                    "LocalizableStrings.ValueIsTooBig.Value").ToString();
                string message = string.Format(messageTemplate, "1.0B$");
                throw new Exception(message);
            }
        }

        /// <summary>Handles entity Saved event.</summary>
        /// <param name="sender">Event sender.</param>
        /// <param name="e">The <see cref="T:Terrasoft.Core.Entities.EntityAfterEventArgs" /> instance containing the event data.</param>
        public override void OnSaved(object sender, EntityAfterEventArgs e) {
            base.OnSaved(sender, e);
        }

        /// <summary>Handles entity Deleting event.</summary>
        /// <param name="sender">Event sender.</param>
        /// <param name="e">The <see cref="T:Terrasoft.Core.Entities.EntityBeforeEventArgs" /> instance containing the event data.</param>
        public override void OnDeleting(object sender, EntityBeforeEventArgs e) {
            base.OnDeleting(sender, e);
        }

        /// <summary>Handles entity Deleted event.</summary>
        /// <param name="sender">Event sender.</param>
        /// <param name="e">The <see cref="T:Terrasoft.Core.Entities.EntityAfterEventArgs" /> instance containing the event data.</param>
        public override void OnDeleted(object sender, EntityAfterEventArgs e) {
            base.OnDeleted(sender, e);
        }
    }

}