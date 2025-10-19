import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-muted/30 to-background py-20">
        <div className="container-custom px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-block p-6 bg-primary/10 rounded-full mb-6">
                <i className="fas fa-compass text-7xl text-primary"></i>
              </div>
            </div>

            <h1 className="font-heading text-6xl mb-4 text-primary">404</h1>
            <h2 className="font-heading text-3xl mb-6">Página Não Encontrada</h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ops! Parece que você se perdeu. A página que você está procurando não existe ou foi movida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/">
                <Button className="btn-hero text-lg px-10 py-6">
                  <i className="fas fa-home mr-3"></i>
                  Voltar para Início
                </Button>
              </Link>

              <Link to="/contato">
                <Button className="btn-outline text-lg px-10 py-6">
                  <i className="fas fa-envelope mr-3"></i>
                  Fale Conosco
                </Button>
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">Você pode estar procurando:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/" className="text-primary hover:text-accent transition-colors">
                  Início
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/sobre" className="text-primary hover:text-accent transition-colors">
                  Sobre
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/servicos" className="text-primary hover:text-accent transition-colors">
                  Serviços
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/contato" className="text-primary hover:text-accent transition-colors">
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
