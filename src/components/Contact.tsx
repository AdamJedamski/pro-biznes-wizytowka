import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Błąd",
        description: "Proszę wypełnić wszystkie wymagane pola.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }
      });

      if (error) throw error;

      toast({
        title: "Wysłano!",
        description: "Twoja wiadomość została wysłana. Odezwiemy się wkrótce!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skontaktuj Się Z Nami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Odpowiemy na każde pytanie i pomożemy dobrać idealne rozwiązanie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Imię i nazwisko *</Label>
                <Input
                  id="name"
                  placeholder="Jan Kowalski"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jan.kowalski@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+48 123 456 789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Wiadomość *</Label>
                <Textarea
                  id="message"
                  placeholder="Opisz swoje potrzeby..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                variant="cta"
                className="w-full"
                disabled={isSubmitting}
              >
                <Mail className="mr-2 h-5 w-5" />
                {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-primary text-primary-foreground border-0">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                  <a 
                    href="tel:+48123456789" 
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-lg"
                  >
                    +48 123 456 789
                  </a>
                  <p className="text-sm text-primary-foreground/70 mt-1">
                    Pon-Pt: 8:00 - 18:00, Sob: 9:00 - 14:00
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary text-primary-foreground border-0">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a 
                    href="mailto:blackgranny1906@gmail.com" 
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                  >
                    blackgranny1906@gmail.com
                  </a>
                  <p className="text-sm text-primary-foreground/70 mt-1">
                    Odpowiadamy w ciągu 24h
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary text-primary-foreground border-0">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Siedziba firmy</h3>
                  <p className="text-primary-foreground/90">
                    ul. Portowa 123<br />
                    00-001 Warszawa<br />
                    Polska
                  </p>
                </div>
              </div>
            </Card>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Godziny otwarcia</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Poniedziałek - Piątek</span>
                  <span className="font-semibold">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota</span>
                  <span className="font-semibold">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Niedziela</span>
                  <span className="font-semibold text-destructive">Nieczynne</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
