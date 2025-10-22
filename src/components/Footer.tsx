export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-primary-foreground/80">
            &copy; {new Date().getFullYear()} Kontenery Premium. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-primary-foreground/60 mt-2">
            NIP: 123-456-78-90 | REGON: 123456789
          </p>
        </div>
      </div>
    </footer>
  );
};
