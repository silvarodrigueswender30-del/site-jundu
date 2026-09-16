# Arquitetura de Componentes

1. **SiteHeader**: Client Component. Lida com interatividade de scroll (fade in/out background).
2. **MobileMenu**: Client Component. Overlay fullscreen com animações de stagger list.
3. **HeroCinematic**: Server + Client Component. Componente de topo da página inicial, vídeos de autoplay e poster AVIF. 
4. **EssenceIntro**: Server Component. Seção de tipografia grande para "Sinta o Jundu antes de chegar".
5. **GastronomyEditorial**: Server Component. Grid misto de texto e fotografia macro.
6. **VerticalStories**: Client Component. Carrossel flexível de vídeos 9:16.
7. **ArchitectureMosaic**: Server Component. Grid assimétrico para mostrar fotos dos ambientes.
8. **BrandWindowJ**: Client Component. Container que usará o SVG Mask (quando oficializado).
9. **UnitsAccordion**: Client Component. Painéis expandíveis (Prumirim, Itaguá, Praia Grande).
10. **EventsSection**: Server Component. Layout de calendário e agendas.
11. **MenuTeaser**: Server Component. Card de chamada para PDF/Página do menu.
12. **FinalCTA**: Server Component. Footer-pre-footer com parallax suave.
13. **SiteFooter**: Server Component. Rodapé estático com endereços e logos.
14. **CardShell / CardVideo / CardUnit**: Componentes de display semântico.
15. **VideoPlayer**: Client Component. IntersecObserver embutido e acessibilidade custom.
16. **OpeningHours**: Server Component. Micro-UI de lista de horários.
17. **StickyMobileCTA**: Client Component. Botão persistente nas telas pequenas.
18. **MotionToggle**: Client Component. Acessibilidade para desativar parallax e transições.
19. **UnitSelector**: Client Component. Select customizado para escolher a unidade.
