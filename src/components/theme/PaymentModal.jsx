import { useEffect, useMemo, useState } from "react";

const formatPrice = (value) => `\u20B9${Math.round(value || 0).toLocaleString("en-IN")}`;

export default function PaymentModal({
  isOpen,
  bookingData,
  onClose,
  onPaymentSuccess,
  onGoToConfirmation,
}) {
  const [paymentType, setPaymentType] = useState("Card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setPaymentType("Card");
      setCardNumber("");
      setExpiry("");
      setCvv("");
      setUpiId("");
      setIsProcessing(false);
      setIsSuccess(false);
      setBookingId("");
    }
  }, [isOpen]);

  const invoiceText = useMemo(() => {
    if (!bookingData || !bookingId) return "";
    return [
      "Travel Booking Invoice",
      `Booking ID: ${bookingId}`,
      `Package: ${bookingData.packageTitle}`,
      `Start Date: ${bookingData.startDate || "TBD"}`,
      `Adults: ${bookingData.adults}`,
      `Children: ${bookingData.children}`,
      `Rooms: ${bookingData.rooms}`,
      `Payment Method: ${paymentType}`,
      `Total Paid: ${formatPrice(bookingData.total)}`,
    ].join("\n");
  }, [bookingData, bookingId, paymentType]);

  if (!isOpen || !bookingData) return null;

  const handlePayNow = () => {
    setIsProcessing(true);
    window.setTimeout(() => {
      const generatedId = `BK${Date.now().toString().slice(-8)}`;
      setBookingId(generatedId);
      setIsProcessing(false);
      setIsSuccess(true);
      onPaymentSuccess?.({ ...bookingData, bookingId: generatedId, paymentType, paidAt: new Date().toISOString() });
    }, 1600);
  };

  const downloadInvoice = () => {
    const blob = new Blob([invoiceText], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `invoice-${bookingId || "booking"}.pdf`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-slate-900/60 px-4 py-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl animate-scaleIn">
        {!isSuccess ? (
          <>
            <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                  Step 3 of 4
                </p>
                <h2 className="text-xl font-bold text-slate-900">Payment</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                Close
              </button>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {["Card", "UPI", "Net Banking"].map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setPaymentType(method)}
                  className={`rounded-lg border px-3 py-1.5 text-sm font-semibold transition duration-300 ${
                    paymentType === method
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>

            {paymentType === "Card" ? (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Card number"
                  value={cardNumber}
                  onChange={(event) => setCardNumber(event.target.value)}
                  className="h-11 w-full rounded-xl border border-slate-300 px-3 outline-none focus:border-indigo-500"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(event) => setExpiry(event.target.value)}
                    className="h-11 w-full rounded-xl border border-slate-300 px-3 outline-none focus:border-indigo-500"
                  />
                  <input
                    type="password"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(event) => setCvv(event.target.value)}
                    className="h-11 w-full rounded-xl border border-slate-300 px-3 outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            ) : (
              <input
                type="text"
                placeholder={paymentType === "UPI" ? "UPI ID" : "Bank account alias"}
                value={upiId}
                onChange={(event) => setUpiId(event.target.value)}
                className="h-11 w-full rounded-xl border border-slate-300 px-3 outline-none focus:border-indigo-500"
              />
            )}

            <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm">
              <div className="flex justify-between font-semibold text-slate-700">
                <span>Total Amount</span>
                <span>{formatPrice(bookingData.total)}</span>
              </div>
            </div>

            <button
              type="button"
              disabled={isProcessing}
              onClick={handlePayNow}
              className="mt-4 h-11 w-full rounded-xl bg-indigo-600 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isProcessing ? "Processing Payment..." : "Pay Now"}
            </button>
          </>
        ) : (
          <div className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Step 4 of 4</p>
            <h2 className="text-2xl font-bold text-slate-900">Payment Successful</h2>
            <p className="text-sm text-slate-600">Your booking is confirmed.</p>
            <div className="rounded-xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">
              Booking ID: {bookingId}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={downloadInvoice}
                className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-slate-50"
              >
                Download Invoice
              </button>
              <button
                type="button"
                onClick={() => onGoToConfirmation?.(bookingId)}
                className="flex-1 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-700"
              >
                View Confirmation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
