import ContactDisplay from "@/features/contact/components/ContactDisplay";
import ContactHero from "@/features/contact/components/ContactHero";
import OrderForm from "@/features/contact/components/OrderForm";

export default function Contact() {
  return (
    <main className="min-h-screen font-heading">
      <ContactHero/>
      <div className="flex flex-col-reverse px-10 md:px-0 md:flex-row w-full flex-1 gap-12px max-w-300 mx-auto mb-24 mt-16">
        <ContactDisplay className="flex-1"/>
        <OrderForm className="flex-1"/>
      </div>
    </main>
  );
}