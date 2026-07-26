import type { IconKind } from "../data/types";

interface IconProps {
  kind: IconKind;
  className?: string;
}

/**
 * A consistent set of flat, line-based illustrations used throughout the
 * app for lesson slides, path nodes, and stage badges. Kept as simple
 * stroke geometry so the whole set reads as one cohesive icon system.
 */
export function Icon({ kind, className = "w-10 h-10" }: IconProps) {
  const common = {
    viewBox: "0 0 48 48",
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (kind) {
    case "cloud-doc":
      return (
        <svg {...common}>
          <path d="M14 30a7 7 0 0 1 1-13.9A9 9 0 0 1 32 15a6.5 6.5 0 0 1 2 12.7" />
          <rect x="18" y="24" width="14" height="16" rx="1.5" />
          <path d="M22 30h6M22 34h6M22 38h3" />
        </svg>
      );
    case "tabs":
      return (
        <svg {...common}>
          <rect x="6" y="12" width="36" height="26" rx="2" />
          <path d="M6 18h36" />
          <path d="M10 15h6M18 15h6" />
        </svg>
      );
    case "plane":
      return (
        <svg {...common}>
          <path d="M8 20 24 14l16 6-16 6Z" />
          <path d="M8 20v10l16 6 16-6V20" />
          <path d="M24 26v10" />
        </svg>
      );
    case "pencil-sketch":
      return (
        <svg {...common}>
          <path d="M10 34 30 14l4 4-20 20H10Z" />
          <path d="M27 17l4 4" />
          <circle cx="14" cy="12" r="2" />
          <path d="M8 40h8" />
        </svg>
      );
    case "constraint":
      return (
        <svg {...common}>
          <path d="M8 14h14M8 20h14" />
          <path d="M30 12v24" />
          <path d="M36 12v24" />
          <circle cx="8" cy="34" r="2" />
          <circle cx="22" cy="34" r="2" />
        </svg>
      );
    case "extrude":
      return (
        <svg {...common}>
          <rect x="8" y="26" width="14" height="12" rx="1" />
          <path d="M15 24V10" />
          <path d="M10 15l5-5 5 5" />
          <path d="M28 32h12M28 38h8" />
        </svg>
      );
    case "revolve":
      return (
        <svg {...common}>
          <path d="M24 8v32" strokeDasharray="3 4" />
          <path d="M18 12h4v24h-4Z" />
          <path d="M30 10a13 13 0 0 1 5 5" />
          <path d="M35 10v6h-6" />
        </svg>
      );
    case "history-tree":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="24" r="3" />
          <circle cx="12" cy="36" r="3" />
          <path d="M15 12h20M15 24h20M15 36h14" />
        </svg>
      );
    case "fillet-corner":
      return (
        <svg {...common}>
          <path d="M10 38V18a8 8 0 0 1 8-8h20" />
          <path d="M10 38h20" />
        </svg>
      );
    case "tube-cross":
      return (
        <svg {...common}>
          <rect x="8" y="14" width="32" height="20" rx="2" />
          <rect x="13" y="19" width="22" height="10" rx="1.5" />
        </svg>
      );
    case "gusset-tri":
      return (
        <svg {...common}>
          <path d="M10 38V14h24Z" />
          <circle cx="16" cy="32" r="1.6" fill="currentColor" />
          <circle cx="22" cy="32" r="1.6" fill="currentColor" />
          <circle cx="16" cy="26" r="1.6" fill="currentColor" />
        </svg>
      );
    case "bolt-explode":
      return (
        <svg {...common}>
          <rect x="8" y="8" width="10" height="10" rx="1.5" />
          <rect x="30" y="8" width="10" height="10" rx="1.5" />
          <rect x="19" y="28" width="10" height="10" rx="1.5" />
          <path d="M18 13h12M24 18v10" />
        </svg>
      );
    case "dof-arrows":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="4" />
          <path d="M24 4v10M24 34v10M4 24h10M34 24h10" />
          <path d="M24 4l-3 5M24 4l3 5M24 44l-3-5M24 44l3-5M4 24l5-3M4 24l5 3M44 24l-5-3M44 24l-5 3" />
        </svg>
      );
    case "gear-pair":
      return (
        <svg {...common}>
          <circle cx="17" cy="24" r="8" />
          <circle cx="17" cy="24" r="2.4" fill="currentColor" />
          <circle cx="34" cy="16" r="5" />
          <circle cx="34" cy="16" r="1.6" fill="currentColor" />
        </svg>
      );
    case "gear-row":
      return (
        <svg {...common}>
          <circle cx="10" cy="30" r="5" />
          <circle cx="24" cy="20" r="7" />
          <circle cx="40" cy="30" r="5" />
        </svg>
      );
    case "belt-loop":
      return (
        <svg {...common}>
          <circle cx="14" cy="24" r="7" />
          <circle cx="34" cy="24" r="7" />
          <path d="M14 17a10 10 0 0 1 20 0M14 31a10 10 0 0 0 20 0" />
        </svg>
      );
    case "sprocket-chain":
      return (
        <svg {...common}>
          <circle cx="16" cy="24" r="8" />
          <path d="M16 16v-3M16 32v3M8 24h-3M24 24h3M10 18l-2-2M22 30l2 2M10 30l-2 2M22 18l2-2" />
          <circle cx="16" cy="24" r="2" fill="currentColor" />
          <path d="M30 24h12" strokeDasharray="2 4" />
        </svg>
      );
    case "import-box":
      return (
        <svg {...common}>
          <rect x="10" y="20" width="20" height="18" rx="1.5" />
          <path d="M34 14v14" />
          <path d="M29 23l5 5 5-5" />
        </svg>
      );
    case "shelf-parts":
      return (
        <svg {...common}>
          <path d="M8 14h32M8 24h32M8 34h32" />
          <rect x="12" y="8" width="6" height="6" />
          <circle cx="26" cy="20" r="3" />
          <path d="M32 30h6v6h-6Z" />
        </svg>
      );
    case "axis-link":
      return (
        <svg {...common}>
          <path d="M10 10v8h8" />
          <path d="M30 30v8h8" />
          <path d="M15 15l18 18" />
        </svg>
      );
    case "nested-boxes":
      return (
        <svg {...common}>
          <rect x="8" y="8" width="32" height="32" rx="2" />
          <rect x="16" y="16" width="16" height="16" rx="1.5" />
        </svg>
      );
    case "slider-var":
      return (
        <svg {...common}>
          <path d="M8 16h32M8 32h32" />
          <circle cx="18" cy="16" r="3.5" fill="currentColor" />
          <circle cx="30" cy="32" r="3.5" fill="currentColor" />
        </svg>
      );
    case "table-config":
      return (
        <svg {...common}>
          <rect x="8" y="10" width="32" height="28" rx="2" />
          <path d="M8 18h32M20 18v20" />
        </svg>
      );
    case "bearing-ring":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="12" />
          <circle cx="24" cy="24" r="5" />
        </svg>
      );
    case "shaft-collar":
      return (
        <svg {...common}>
          <path d="M8 24h32" />
          <rect x="18" y="16" width="4" height="16" rx="1" />
          <rect x="26" y="16" width="4" height="16" rx="1" />
        </svg>
      );
    case "centerline-robot":
      return (
        <svg {...common}>
          <rect x="10" y="12" width="28" height="24" rx="2" />
          <path d="M24 6v6M24 36v6M10 24h-4M42 24h-4" strokeDasharray="2 3" />
        </svg>
      );
    case "module-wheel":
      return (
        <svg {...common}>
          <rect x="14" y="8" width="20" height="14" rx="2" />
          <circle cx="24" cy="34" r="8" />
          <path d="M24 26v4" />
        </svg>
      );
    case "chassis-frame":
      return (
        <svg {...common}>
          <rect x="8" y="14" width="32" height="20" rx="1.5" />
          <circle cx="12" cy="34" r="4" />
          <circle cx="36" cy="34" r="4" />
          <circle cx="12" cy="14" r="4" />
          <circle cx="36" cy="14" r="4" />
        </svg>
      );
    case "arm-link":
      return (
        <svg {...common}>
          <circle cx="12" cy="34" r="3" />
          <path d="M12 34 28 18" />
          <circle cx="28" cy="18" r="3" />
          <path d="M28 18l10-4" />
        </svg>
      );
    case "loop-arrow":
      return (
        <svg {...common}>
          <path d="M12 20a12 12 0 0 1 20-8" />
          <path d="M36 12v6h-6" />
          <path d="M36 28a12 12 0 0 1-20 8" />
          <path d="M12 36v-6h6" />
        </svg>
      );
    case "drawing-sheet":
      return (
        <svg {...common}>
          <rect x="8" y="8" width="32" height="32" rx="2" />
          <path d="M14 30l8-10 6 6 6-8" />
          <path d="M8 34h32" />
        </svg>
      );
    case "bom-table":
      return (
        <svg {...common}>
          <rect x="8" y="10" width="32" height="28" rx="2" />
          <path d="M8 18h32M8 26h32M8 34h32" />
        </svg>
      );
    case "flat-fold":
      return (
        <svg {...common}>
          <path d="M8 34V16h16" />
          <path d="M24 16v10l10 8" />
          <path d="M24 26h12" strokeDasharray="2 3" />
        </svg>
      );
    case "branch-fork":
      return (
        <svg {...common}>
          <circle cx="12" cy="10" r="3" />
          <circle cx="12" cy="38" r="3" />
          <circle cx="34" cy="24" r="3" />
          <path d="M12 13v22" />
          <path d="M12 24c0-6 10-6 22-6" />
        </svg>
      );
    case "people-doc":
      return (
        <svg {...common}>
          <circle cx="14" cy="14" r="5" />
          <path d="M6 30c0-5 4-8 8-8s8 3 8 8" />
          <rect x="26" y="10" width="16" height="20" rx="1.5" />
          <path d="M30 16h8M30 21h8M30 26h5" />
        </svg>
      );
    case "lock-key":
      return (
        <svg {...common}>
          <rect x="12" y="22" width="24" height="18" rx="2" />
          <path d="M17 22v-6a7 7 0 0 1 14 0v6" />
          <circle cx="24" cy="31" r="2.4" fill="currentColor" />
        </svg>
      );
    case "code-brackets":
      return (
        <svg {...common}>
          <path d="M18 14 8 24l10 10" />
          <path d="M30 14l10 10-10 10" />
        </svg>
      );
    case "nurbs-wave":
      return (
        <svg {...common}>
          <path d="M6 32c6-14 12 14 18 0s12-14 18 0" />
          <path d="M6 22c6-10 12 10 18 0s12-10 18 0" strokeOpacity="0.5" />
        </svg>
      );
    case "caliper":
      return (
        <svg {...common}>
          <path d="M8 14v20M40 14v20" />
          <path d="M8 16h32M8 30h20" />
          <path d="M20 30v4M28 16v-4" />
        </svg>
      );
    case "scale-weight":
      return (
        <svg {...common}>
          <path d="M24 8v8" />
          <path d="M10 16h28" />
          <path d="M10 16 4 28a6 6 0 0 0 12 0Z" />
          <path d="M38 16l-6 12a6 6 0 0 0 12 0Z" />
          <path d="M18 40h12" />
        </svg>
      );
    case "checklist-road":
      return (
        <svg {...common}>
          <path d="M10 12h6l-2 4h-2Z" fill="currentColor" />
          <path d="M20 14h18" />
          <path d="M10 24h6l-2 4h-2Z" fill="currentColor" />
          <path d="M20 26h18" />
          <path d="M10 36h6l-2 4h-2Z" fill="currentColor" />
          <path d="M20 38h12" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...common}>
          <path d="M16 10h16v8a8 8 0 0 1-16 0Z" />
          <path d="M16 12H9a5 5 0 0 0 7 8" />
          <path d="M32 12h7a5 5 0 0 1-7 8" />
          <path d="M24 26v6M18 40h12M18 36h12v4H18Z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="14" />
        </svg>
      );
  }
}
