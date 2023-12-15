import ValidatorComp from "@/components/ui/ValidatorComp";
import TemplateForge from "@/components/TemplateForge/TemplateForge";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-16 antialiased">
      <h1 className="mb-8">Template Forge</h1>
      {/* <ValidatorComp /> */}
      <TemplateForge />
    </main>
  );
}
