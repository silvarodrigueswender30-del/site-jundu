import { JunduFlowerIcon } from "@/components/icons/jundu-flower-icon";

// Unidades físicas do Jundu — conteúdo exibido em loop no marquee
const UNITS = ["ITAGUÁ", "PRUMIRIM", "PRAIA GRANDE"] as const;

// Um "slide" do marquee: UNIDADE · [flor] · UNIDADE · [flor] · UNIDADE · [flor] ·
// Duplicado no JSX (aria-hidden na cópia) para criar o efeito de scroll infinito seamless.
function MarqueeSlide({ hidden }: { hidden?: boolean }) {
  return (
    <div
      className="flex items-center shrink-0 gap-0"
      aria-hidden={hidden ?? undefined}
    >
      {UNITS.map((unit) => (
        <span key={unit} className="flex items-center gap-6 md:gap-8">
          <span className="font-body text-[11px] md:text-[13px] uppercase tracking-[0.32em] text-moss-600 whitespace-nowrap">
            {unit}
          </span>
          <span className="flex items-center mx-2 text-moss-600 opacity-70">
            <JunduFlowerIcon size={14} />
          </span>
        </span>
      ))}
    </div>
  );
}

export function UnitsMarquee() {
  return (
    <div
      role="presentation"
      aria-label="Nossas unidades: Itaguá, Prumirim e Praia Grande"
      className="w-full overflow-hidden bg-background border-y border-border py-4 md:py-5 select-none"
    >
      {/*
        O track interno contém 2× o conteúdo lado a lado.
        A animação desloca -50% (= largura de um bloco), criando loop seamless.
        prefers-reduced-motion: o keyframe não roda — conteúdo fica estático.
      */}
      <div
        className="flex w-max animate-[marquee-scroll_42s_linear_infinite] motion-reduce:animate-none hover:[animation-play-state:paused]"
      >
        {/* Bloco original — lido por screen readers */}
        <MarqueeSlide />
        {/* Cópia para efeito de loop contínuo — ocultada para a/11y */}
        <MarqueeSlide hidden />
      </div>
    </div>
  );
}
