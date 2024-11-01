import Services from "@/app/components/Services";

function ServicesPage() {
  return (
    <div className="container py-20">
      <div className="text-center my-6">
        <h3 className="text-4xl text-black font-bold">
          Awsome Service We Provide
        </h3>
        <p className="text-sm">
          Being a Best Website Design Company in Brahmanbaria
        </p>
      </div>
      <div className="px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Services />
      </div>
    </div>
  );
}

export default ServicesPage;
