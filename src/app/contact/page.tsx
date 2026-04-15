import ContactDisplay from "@/features/contact/components/ContactDisplay";
import ContactHero from "@/features/contact/components/ContactHero";
import OrderForm from "@/features/contact/components/OrderForm";

export default async function Contact({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const params = await searchParams;

  const servicePackage = params.p ?? undefined;
  const tier = params.t ?? undefined;

  console.log(searchParams);
  return (
    <main className="min-h-screen font-heading">
      <ContactHero />
      <div className="flex flex-col-reverse px-10 md:px-0 md:flex-row w-full flex-1 gap-12px max-w-300 mx-auto mb-24 mt-16">
        <ContactDisplay className="flex-1" />
        <OrderForm className="flex-1" props={({ package: servicePackage, tier: tier })} />
      </div>
    </main>
  );
}