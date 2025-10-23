import { Card } from "@/components/ui/card";
import { Shield, Truck, Award, Users } from "lucide-react";

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
