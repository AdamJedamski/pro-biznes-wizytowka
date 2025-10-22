import { Card } from "@/components/ui/card";
import { Shield, Truck, Award, Users } from "lucide-react";
import containersImage from "@/assets/containers-background.jpg";

const features = [
  {
    icon: Shield,
    title: "Pewność Jakości",
    description: "Tylko sprawdzone kontenery w doskonałym stanie technicznym"
  },
  {
    icon: Truck,
    title: "Szybka Dostawa",
    description: "Realizacja zamówień w 24-48h na terenie całej Polski"
  },
  {
    icon: Award,
    title: "15 Lat Doświadczenia",
    description: "Zaufało nam ponad 2000 firm i klientów indywidualnych"
  },
  {
    icon: Users,
    title: "Profesjonalna Obsługa",
    description: "Doradztwo i wsparcie na każdym etapie współpracy"
  }
];

export const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Dlaczego Warto Wybrać Nas?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jesteśmy liderem na rynku kontenerów w Polsce. 
            Nasza oferta to gwarancja najwyższej jakości i profesjonalizmu.
          </p>
        </div>

        <div 
          className="relative rounded-2xl overflow-hidden mb-16 h-[400px] shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(to top, hsl(215 95% 15% / 0.7), transparent), url(${containersImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">
              Tysiące Kontenerów w Magazynie
            </h3>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Dysponujemy największym wyborem kontenerów różnych typów i rozmiarów. 
              Od standardowych 20' i 40' po specjalistyczne kontenery chłodnicze i biurowe.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
