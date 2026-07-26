export type IconKind =
  | "cloud-doc"
  | "tabs"
  | "plane"
  | "pencil-sketch"
  | "constraint"
  | "extrude"
  | "revolve"
  | "history-tree"
  | "fillet-corner"
  | "tube-cross"
  | "gusset-tri"
  | "bolt-explode"
  | "dof-arrows"
  | "gear-pair"
  | "gear-row"
  | "belt-loop"
  | "sprocket-chain"
  | "import-box"
  | "shelf-parts"
  | "axis-link"
  | "nested-boxes"
  | "slider-var"
  | "table-config"
  | "bearing-ring"
  | "shaft-collar"
  | "centerline-robot"
  | "module-wheel"
  | "chassis-frame"
  | "arm-link"
  | "loop-arrow"
  | "drawing-sheet"
  | "bom-table"
  | "flat-fold"
  | "branch-fork"
  | "people-doc"
  | "lock-key"
  | "code-brackets"
  | "nurbs-wave"
  | "caliper"
  | "scale-weight"
  | "checklist-road"
  | "trophy";

export interface Slide {
  heading: string;
  body: string;
  icon: IconKind;
  caption: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Resource {
  label: string;
  url: string;
}

export interface Lesson {
  id: string;
  title: string;
  blurb: string;
  xp: number;
  minutes: number;
  icon: IconKind;
  slides: Slide[];
  quiz: QuizQuestion;
  resource: Resource;
}

export interface Stage {
  id: string;
  title: string;
  subtitle: string;
  icon: IconKind;
  lessons: Lesson[];
}
