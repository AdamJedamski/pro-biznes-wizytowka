import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-business-portrait.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(215 95% 15% / 0.95), hsl(215 95% 20% / 0.85)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Najlepsze Kontenery<br />w Polsce
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Profesjonalne rozwiązania magazynowe i transportowe. 
              Sprawdzona jakość, konkurencyjne ceny, szybka realizacja.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                variant="hero"
                onClick={scrollToContact}
                className="text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Wyślij zapytanie
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="text-lg bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm"
              >
                <a href="tel:+48123456789">
                  <Phone className="mr-2 h-5 w-5" />
                  +48 123 456 789
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
