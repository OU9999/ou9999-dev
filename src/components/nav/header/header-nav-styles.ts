const headerNavLinkClassName =
  "group relative inline-flex h-10 min-w-10 items-center justify-center px-1 pb-1 pt-2 outline-none";

const headerNavTextClassName =
  "relative z-10 translate-y-px font-brand text-xl font-normal leading-none text-google-paper transition-colors duration-200 group-hover:text-mineral-blue group-focus-visible:text-mineral-blue";

const headerNavBrushUnderlineClassName =
  "pointer-events-none absolute -bottom-2 left-1/2 h-[10px] w-[118%] -translate-x-1/2 bg-[url('/imgs/header/home-brush-hard-chalk-steel-v1.png')] bg-[length:100%_100%] bg-center bg-no-repeat opacity-0 transition-opacity duration-200 md:-bottom-3 md:h-3";

const headerNavActiveBrushUnderlineClassName =
  "opacity-82 group-hover:opacity-0 group-focus-visible:opacity-0";

const headerNavActiveBrushTintClassName =
  "pointer-events-none absolute -bottom-2 left-1/2 h-[10px] w-[118%] -translate-x-1/2 bg-mineral-blue opacity-0 transition-opacity duration-200 [mask-image:url('/imgs/header/home-brush-hard-chalk-steel-v1.png')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-image:url('/imgs/header/home-brush-hard-chalk-steel-v1.png')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%] group-hover:opacity-82 group-focus-visible:opacity-82 md:-bottom-3 md:h-3";

export {
  headerNavActiveBrushTintClassName,
  headerNavActiveBrushUnderlineClassName,
  headerNavBrushUnderlineClassName,
  headerNavLinkClassName,
  headerNavTextClassName,
};
