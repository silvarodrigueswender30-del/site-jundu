import Link from "next/link";
import { siteData } from "@/data/site";

export function SiteFooter() {
  const { footer, navigation } = siteData.sections;
  const navLinks = siteData.navigation;
  
  return (
    <footer className="w-full bg-forest-900 border-t border-surface/10 pt-16 pb-8">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-surface text-3xl mb-6">{footer.brand}</h3>
            <p className="font-body text-[14px] text-surface/60 max-w-[30ch]">
              A verdadeira essência de Ubatuba, servida com paixão e hospitalidade.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="font-body text-[12px] uppercase tracking-[0.2em] text-surface/50 mb-6">Menu</h4>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="font-body text-[15px] text-surface hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-surface"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Social & Legal */}
          <div>
            <h4 className="font-body text-[12px] uppercase tracking-[0.2em] text-surface/50 mb-6">Redes</h4>
            <ul className="flex flex-col gap-4 mb-10">
              {footer.social.map((link, index) => (
                <li key={`social-${index}`}>
                  <Link 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[15px] text-surface hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-surface"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="font-body text-[12px] uppercase tracking-[0.2em] text-surface/50 mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              {footer.legal.map((link, index) => (
                <li key={`legal-${index}`}>
                  <Link 
                    href={link.href}
                    className="font-body text-[15px] text-surface/70 hover:text-surface transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-surface"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-surface/10">
          <p className="font-body text-[12px] text-surface/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} {footer.brand}. Todos os direitos reservados.
          </p>
          <p className="font-body text-[12px] text-surface/50">
            {footer.credit}
          </p>
        </div>

      </div>
    </footer>
  );
}
