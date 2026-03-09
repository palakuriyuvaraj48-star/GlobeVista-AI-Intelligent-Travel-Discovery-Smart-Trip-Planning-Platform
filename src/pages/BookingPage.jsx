import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookingPanel from "../components/theme/BookingPanel";
import PaymentModal from "../components/theme/PaymentModal";
import { findPackageById } from "../data/themePackages";

export default function BookingPage() {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const packageItem = useMemo(() => findPackageById(packageId), [packageId]);
  const [paymentPayload, setPaymentPayload] = useState(null);

  const saveBooking = (booking) => {
    const existing = JSON.parse(localStorage.getItem("themeBookings") || "[]");
    localStorage.setItem("themeBookings", JSON.stringify([booking, ...existing]));
  };

  if (!packageItem) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Package not found</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-2xl font-bold text-slate-900">Booking: {packageItem.title}</h1>
        <p className="mt-2 text-sm text-slate-600">
          {"\u20B9"}
          {packageItem.basePrice.toLocaleString("en-IN")} per person
        </p>
      </div>
      <BookingPanel
        isOpen
        packageItem={packageItem}
        onClose={() => navigate(-1)}
        onProceedPayment={(payload) => setPaymentPayload(payload)}
      />
      <PaymentModal
        isOpen={Boolean(paymentPayload)}
        bookingData={paymentPayload}
        onClose={() => setPaymentPayload(null)}
        onPaymentSuccess={(booking) => saveBooking(booking)}
        onGoToConfirmation={(bookingId) => navigate(`/confirmation/${bookingId}`)}
      />
    </section>
  );
}
