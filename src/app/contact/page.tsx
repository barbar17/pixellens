import ContactDisplay from "@/features/contact/components/ContactDisplay";
import ContactHero from "@/features/contact/components/ContactHero";
import OrderForm from "@/features/contact/components/OrderForm";

export default function Contact() {
  return (
    <main className="min-h-screen font-heading">
      <ContactHero/>
      <div className="grid grid-cols-[1fr_1.1fr] gap-px max-w-300 mx-auto mb-24 mt-16 max-lg:grid-cols-1">
        <ContactDisplay/>
        <OrderForm/>
      </div>
    </main>
  );
}