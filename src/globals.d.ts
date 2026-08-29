// Ambient module declarations for non-code imports.
// Needed under "moduleResolution": "bundler", which otherwise can't resolve
// side-effect stylesheet imports or SVG-as-component imports (@svgr/webpack).

declare module "*.css";

declare module "*.svg" {
  import type { FC, SVGProps } from "react";
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
