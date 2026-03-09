import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Confirmation from "../components/theme/Confirmation";
import HiddenConfirmation from "../components/hidden/Confirmation";

export default function ConfirmationPage() {
  const { bookingId } = useParams();

  const booking = useMemo(() => {
    const all = JSON.parse(localStorage.getItem("themeBookings") || "[]");
    return all.find((item) => item.bookingId === bookingId);
  }, [bookingId]);

  const hiddenBooking = useMemo(() => {
    const all = JSON.parse(localStorage.getItem("hiddenBookings") || "[]");
    return all.find((item) => item.bookingId === bookingId);
  }, [bookingId]);

  return (
    <section className="mx-auto min-h-[60vh] max-w-4xl px-4 py-16">
      {hiddenBooking ? <HiddenConfirmation booking={hiddenBooking} /> : <Confirmation booking={booking} />}
    </section>
  );
}
