import { JunduFlowerIcon } from "@/components/icons/jundu-flower-icon";

// Copy do marquee — par em loop: JUNDU + UBATUBA EM CADA DETALHE
// 7 repetições por metade garantem cobertura contínua em viewports até 1920px+.
// O overflow:hidden do container corta o excesso — sem custo de performance.
const REPEAT_COUNT = 7;

// Um par: JUNDU · [flor] · UBATUBA EM CADA DETALHE · [flor]
// gap-8 (32px) entre texto e flor; mx-5 (20px) de margem na flor = espaçamento ~52px entre blocos.
function MarqueePair({ index }: { index: number }) {
  return (
    <span className="flex items-center shrink-0">
      <span className="font-body text-[11px] md:text-[13px] uppercase tracking-[0.32em] text-moss-600 whitespace-nowrap px-8">
        JUNDU
      </span>
      <span className="flex items-center shrink-0 text-moss-600 opacity-70" aria-hidden="true">
        <JunduFlowerIcon size={14} />
      </span>
      <span className="font-body text-[11px] md:text-[13px] uppercase tracking-[0.32em] text-moss-600 whitespace-nowrap px-8">
        UBATUBA EM CADA DETALHE
      </span>
      {/* Separador final de cada par — visible entre pares consecutivos */}
      <span
        key={index}
        className="flex items-center shrink-0 text-moss-600 opacity-70"
        aria-hidden="true"
      >
        <JunduFlowerIcon size={14} />
      </span>
    </span>
  );
}

// Uma metade do track: REPEAT_COUNT pares lado a lado.
// Duplicado no JSX (aria-hidden na cópia) para criar o efeito de scroll seamless.
function MarqueeHalf({ hidden }: { hidden?: boolean }) {
  return (
    <div
      className="flex items-center shrink-0"
      aria-hidden={hidden === true ? true : undefined}
    >
      {Array.from({ length: REPEAT_COUNT }, (_, i) => (
        <MarqueePair key={i} index={i} />
      ))}
    </div>
  );
}

export function UnitsMarquee() {
  return (
    <div
      role="presentation"
      aria-label="Jundu — Ubatuba em cada detalhe"
      className="w-full overflow-hidden bg-background border-y border-border py-4 md:py-5 select-none"
    >
      {/*
        Track = 2 × MarqueeHalf lado a lado.
        A animação desloca -50% da largura total (= exatamente 1 metade),
        criando um loop contínuo sem salto perceptível.
        prefers-reduced-motion: animate-none — conteúdo estático e legível.
      */}
      <div
        className="flex w-max animate-[marquee-scroll_42s_linear_infinite] motion-reduce:animate-none hover:[animation-play-state:paused]"
      >
        {/* Metade original — lida por screen readers */}
        <MarqueeHalf />
        {/* Metade duplicada — oculta para a11y, existe apenas para o loop visual */}
        <MarqueeHalf hidden />
      </div>
    </div>
  );
}
