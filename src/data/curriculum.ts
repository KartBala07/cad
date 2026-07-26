import type { Lesson, Stage } from "./types";

const RESOURCES = {
  home: { label: "FRCDesign.org", url: "https://frcdesign.org/" },
  course: {
    label: "FRC Design Learning Course",
    url: "https://frcdesign.org/learning-course/",
  },
  resources: {
    label: "Design Resources & Wiki",
    url: "https://frcdesign.org/resources/",
  },
  stage1Intro: {
    label: "Learning Course · Stage 1",
    url: "https://frcdesign.org/learning-course/stage1/introduction/",
  },
  stage1Layout: {
    label: "Learning Course · Layout Sketch",
    url: "https://www.frcdesign.org/learning-course/stage1/1D/layout-sketch/",
  },
  stage1Gearbox: {
    label: "Learning Course · Gear & Belt Gearbox",
    url: "https://www.frcdesign.org/learning-course/stage1/1B/exercise3/",
  },
  stage1Setup: {
    label: "Learning Course · Intro & Setup",
    url: "https://www.frcdesign.org/learning-course/stage1/1A/section1-setup/",
  },
  stage4: {
    label: "Learning Course · Stage 4",
    url: "https://www.frcdesign.org/learning-course/stage4/",
  },
  educatorsOverview: {
    label: "Educator's Guide · Stage 1 Overview",
    url: "https://www.frcdesign.org/educators-guide/stage1/",
  },
} as const;

export const STAGES: Stage[] = [
  {
    id: "stage1",
    title: "Onshape Foundations",
    subtitle: "Documents, sketches, and your first solid parts",
    icon: "plane",
    lessons: [
      {
        id: "welcome-to-onshape",
        title: "Meet Onshape",
        blurb: "Documents, tabs, and why FRC teams love cloud CAD",
        xp: 10,
        minutes: 3,
        icon: "cloud-doc",
        slides: [
          {
            heading: "CAD in the cloud",
            icon: "cloud-doc",
            caption: "No installs. No file-locking. Just a browser tab.",
            body:
              "Onshape is full-featured CAD that runs entirely in your browser. There's nothing to install, no file to email around, and no 'who has it checked out' problem — the whole team can be in the same document, on any laptop, at the same time.",
          },
          {
            heading: "Documents & tabs",
            icon: "tabs",
            caption: "One document can hold many Part Studios and Assemblies.",
            body:
              "Every project lives in a Document. Inside it, tabs hold Part Studios (where you model parts), Assemblies (where parts come together with mates), and Drawings (for manufacturing). Think of tabs like sheets in a spreadsheet — organized, but all connected.",
          },
          {
            heading: "The feature timeline",
            icon: "history-tree",
            caption: "Every edit is a step you can reorder, edit, or roll back.",
            body:
              "As you build a part, Onshape records every sketch and feature in a timeline at the bottom of the screen. You can scrub backward to see history, double-click any step to edit it, and reorder features — this is what makes CAD 'parametric' instead of just drawing shapes.",
          },
          {
            heading: "Versions instead of 'final_v3_FINAL'",
            icon: "branch-fork",
            caption: "Named versions are permanent snapshots you can always return to.",
            body:
              "Instead of saving copies with messy filenames, Onshape lets you create a named Version — a permanent snapshot of the whole document. Before a big change, snapshot a version. If something breaks, you can always look at (or restore) exactly how it was.",
          },
        ],
        quiz: {
          question: "Why do FRC teams especially benefit from Onshape being cloud-based?",
          options: [
            "It makes robots lighter",
            "Multiple students can work in the same document at once, from any computer, without emailing files around",
            "It automatically machines parts",
            "It replaces the need for a drivetrain",
          ],
          correctIndex: 1,
          explanation:
            "Cloud CAD means your whole team can design together in real time without file-locking or version conflicts — huge during a 6-week build season.",
        },
        resource: RESOURCES.stage1Setup,
      },
      {
        id: "sketch-basics",
        title: "Sketching Fundamentals",
        blurb: "Planes, geometry, and constraints — the foundation of every part",
        xp: 10,
        minutes: 4,
        icon: "pencil-sketch",
        slides: [
          {
            heading: "Every part starts flat",
            icon: "plane",
            caption: "Front, Top, and Right — the three default planes.",
            body:
              "Every 3D part begins as a 2D sketch drawn on a flat plane. Onshape gives you three default planes — Front, Top, and Right — that all pass through the origin at right angles to each other. Pick the plane that gives you the clearest view of the shape you're about to draw.",
          },
          {
            heading: "Lines, arcs, and circles",
            icon: "pencil-sketch",
            caption: "Sketch tools live in the toolbar above the canvas.",
            body:
              "The sketch toolbar gives you lines, rectangles, circles, arcs, and slots. Draw loosely first — get the rough shape down — because the next step, constraints and dimensions, is what actually locks the geometry into place.",
          },
          {
            heading: "Constraints do the real work",
            icon: "constraint",
            caption: "Vertical, horizontal, parallel, coincident, symmetric — pick the right one.",
            body:
              "Constraints describe relationships: this line is horizontal, these two edges are parallel, this point sits on that line. A well-constrained sketch turns green — every point is fully defined and predictable, so changing one dimension won't collapse your shape.",
          },
          {
            heading: "Dimensions drive the design",
            icon: "constraint",
            caption: "Double-click a dimension later to change the whole part.",
            body:
              "Dimensions set the actual sizes — length, radius, angle. Because they're parametric, changing a single dimension after the fact (say, making a bracket 10mm wider) updates the sketch and every feature built on top of it automatically.",
          },
        ],
        quiz: {
          question: "What does it mean when a sketch turns fully green in Onshape?",
          options: [
            "The sketch has an error",
            "The sketch is fully constrained — every point's position is defined",
            "The part is ready to manufacture",
            "The sketch is hidden",
          ],
          correctIndex: 1,
          explanation:
            "Green means fully constrained: no ambiguity left in the geometry. Black or blue leftover geometry means something is still free to move.",
        },
        resource: {
          label: "Onshape Learning Center · Sketching",
          url: "https://learn.onshape.com/",
        },
      },
      {
        id: "extrude-revolve",
        title: "Extrude & Revolve",
        blurb: "Turning flat sketches into solid 3D features",
        xp: 10,
        minutes: 4,
        icon: "extrude",
        slides: [
          {
            heading: "Extrude: push a shape into space",
            icon: "extrude",
            caption: "A 2D profile, pushed straight along its normal direction.",
            body:
              "Extrude takes a closed sketch profile and pushes it straight out to a thickness you choose — perfect for plates, box tube walls, or gussets. You can extrude in one direction, both directions symmetrically, or all the way up to another surface.",
          },
          {
            heading: "Revolve: spin a profile around an axis",
            icon: "revolve",
            caption: "Great for shafts, wheels, spacers, and standoffs.",
            body:
              "Revolve spins a sketch profile around a centerline to create round parts — shafts, spacers, pulleys, wheels. Draw only half the cross-section, pick the axis, and Onshape sweeps it a full 360° (or any angle you set).",
          },
          {
            heading: "Add or remove material",
            icon: "extrude",
            caption: "Every feature is 'New', 'Add', 'Remove', or 'Intersect'.",
            body:
              "Both Extrude and Revolve can add material (build up a shape) or remove it (cut a pocket or hole). The same tool, just a different Boolean operation — this is how you drill mounting holes or cut a slot into an existing part.",
          },
          {
            heading: "Stacking features",
            icon: "history-tree",
            caption: "Complex parts are just simple features, stacked in order.",
            body:
              "Real FRC parts are rarely one feature. A gearbox plate might be: extrude the plate, cut bearing bores, cut mounting holes, then fillet the corners. Order matters — features build on whatever geometry exists at that point in the timeline.",
          },
        ],
        quiz: {
          question: "You need to model a cylindrical standoff. Which tool is the natural fit?",
          options: ["Extrude", "Revolve", "Fillet", "Mate"],
          correctIndex: 1,
          explanation:
            "Revolve is ideal for round parts like standoffs, shafts, and spacers — sketch a half cross-section and spin it around a centerline.",
        },
        resource: {
          label: "Onshape Learning Center · Basic Part Modeling",
          url: "https://learn.onshape.com/",
        },
      },
      {
        id: "fillets-chamfers",
        title: "Fillets, Chamfers & Feature Order",
        blurb: "Polishing edges and understanding why order matters",
        xp: 10,
        minutes: 3,
        icon: "fillet-corner",
        slides: [
          {
            heading: "Fillet: round an edge",
            icon: "fillet-corner",
            caption: "Reduces stress concentration and sharp corners that snag.",
            body:
              "A fillet rounds a sharp edge to a chosen radius. On a robot, fillets aren't just cosmetic — rounded corners on plates and tubes reduce stress risers and are far less likely to snag on field elements or cut a teammate's hand during pit work.",
          },
          {
            heading: "Chamfer: bevel an edge",
            icon: "fillet-corner",
            caption: "A flat angled cut instead of a curve.",
            body:
              "A chamfer cuts a flat angled edge instead of a curve — commonly used to make a hole easier to start a bolt into, or to break a sharp corner quickly without the extra geometry a fillet adds.",
          },
          {
            heading: "The timeline remembers order",
            icon: "history-tree",
            caption: "Features reference the geometry that existed before them.",
            body:
              "If you fillet an edge and then later edit the sketch that created it, Onshape has to figure out what 'that edge' still means. This is why experienced designers often add fillets and chamfers near the end of a part's feature list — it keeps earlier edits from breaking downstream features.",
          },
          {
            heading: "Editing a feature in history",
            icon: "history-tree",
            caption: "Double-click any feature in the timeline to edit its values.",
            body:
              "Double-click any feature — a sketch, an extrude, a fillet — anywhere in the timeline to reopen and edit it. Onshape will re-run every feature after it. If something downstream can no longer find the geometry it depended on, you'll see a rollback error to fix.",
          },
        ],
        quiz: {
          question: "Why do many designers add fillets and chamfers near the end of the feature list?",
          options: [
            "Onshape requires it",
            "It makes the part lighter",
            "It reduces the chance that editing earlier sketches breaks the rounded edges",
            "Fillets can only be applied to finished parts",
          ],
          correctIndex: 2,
          explanation:
            "Later features depend on earlier geometry. Keeping fillets/chamfers last minimizes how much downstream geometry breaks when you tweak an earlier sketch.",
        },
        resource: RESOURCES.resources,
      },
      {
        id: "box-tube-gusset",
        title: "Box Tube & Gusset",
        blurb: "Model the two parts every FRC chassis is built from",
        xp: 15,
        minutes: 5,
        icon: "tube-cross",
        slides: [
          {
            heading: "Why box tube?",
            icon: "tube-cross",
            caption: "1x1 and 2x1 aluminum box tube form most FRC chassis frames.",
            body:
              "Most FRC drivebases and frames are built from aluminum box tube — commonly 1x1 or 2x1 inch, in 1/16' wall thickness. It's light, strong in bending, and easy to bolt or rivet gussets to. Modeling one accurately means sketching the true cross-section, not just a rectangle.",
          },
          {
            heading: "Sketch the cross-section",
            icon: "pencil-sketch",
            caption: "Outer rectangle, offset inward by wall thickness.",
            body:
              "Sketch the outer rectangle at your tube's outer dimensions, then use the Offset tool to create the inner wall a set distance in — that's your wall thickness. Extrude that hollow profile along the tube's length to get an accurate box tube.",
          },
          {
            heading: "The gusset plate",
            icon: "gusset-tri",
            caption: "A flat bracket that ties two tubes together at a joint.",
            body:
              "A gusset is a flat plate — often triangular or L-shaped — that bolts or rivets across a joint between two tubes to resist twisting and keep the frame square. Model it as a simple extruded sketch with mounting holes patterned to match your tube's rivet spacing.",
          },
          {
            heading: "Pattern the bolt holes",
            icon: "extrude",
            caption: "Linear patterns keep hole spacing exact and easy to edit.",
            body:
              "Rather than sketching every rivet hole by hand, sketch one hole and use a Linear Pattern to repeat it at a fixed spacing. If you need to add a hole or change spacing later, you edit the pattern once instead of every hole.",
          },
        ],
        quiz: {
          question: "What is the fastest, most editable way to place 6 evenly-spaced rivet holes along a gusset?",
          options: [
            "Sketch each hole individually with its own dimensions",
            "Sketch one hole and use a Linear Pattern",
            "Copy-paste the part six times",
            "Use Revolve",
          ],
          correctIndex: 1,
          explanation:
            "A Linear Pattern repeats one feature at a defined spacing — one edit updates every hole, which is exactly the parametric workflow CAD is good at.",
        },
        resource: RESOURCES.stage1Intro,
      },
      {
        id: "intro-assemblies",
        title: "Assemblies & Mates",
        blurb: "Bringing parts together so they move the way a real robot does",
        xp: 15,
        minutes: 5,
        icon: "bolt-explode",
        slides: [
          {
            heading: "From parts to assemblies",
            icon: "bolt-explode",
            caption: "An Assembly tab references parts — it doesn't copy them.",
            body:
              "An Assembly tab is where individual parts and subassemblies come together into a working mechanism. Parts are inserted by reference, so if you edit a part in its Part Studio, every assembly using it updates automatically.",
          },
          {
            heading: "Degrees of freedom",
            icon: "dof-arrows",
            caption: "A free part can move in 6 ways: 3 translations, 3 rotations.",
            body:
              "Before it's mated, a part floating in an assembly has 6 degrees of freedom — it can slide along X, Y, Z and rotate about each axis. Mating a part means removing degrees of freedom until it moves only the way it should in real life.",
          },
          {
            heading: "Common mate types",
            icon: "axis-link",
            caption: "Fastened, Revolute, Slider, Cylindrical, Ball, Planar.",
            body:
              "A Fastened mate locks two parts rigidly together (like a bolted bracket). A Revolute mate allows rotation around one axis (a shaft in a bearing). A Slider allows motion along one axis (a linear rail). Choosing the right mate type is how you simulate real robot motion.",
          },
          {
            heading: "Checking your work",
            icon: "dof-arrows",
            caption: "Drag a part in the assembly to test that it moves correctly.",
            body:
              "After mating, click and drag a part in the assembly canvas. If a wheel spins freely around its axle but a bracket you meant to fix rigidly wobbles, you're missing a mate. This 'drag test' catches mistakes long before parts are ever cut.",
          },
        ],
        quiz: {
          question: "You want a wheel to spin freely around a fixed axle. Which mate type fits best?",
          options: ["Fastened", "Revolute", "Planar", "Parallel"],
          correctIndex: 1,
          explanation:
            "A Revolute mate allows rotation about a single axis while constraining every other degree of freedom — exactly how a wheel spins on an axle.",
        },
        resource: {
          label: "Onshape Learning Center · Assemblies",
          url: "https://learn.onshape.com/",
        },
      },
    ],
  },
  {
    id: "stage2",
    title: "Power & Motion",
    subtitle: "Gearboxes, transmissions, and the COTS parts that drive them",
    icon: "gear-pair",
    lessons: [
      {
        id: "two-stage-gearbox",
        title: "Two-Stage Gear & Belt Gearbox",
        blurb: "The classic FRC exercise: reduce speed, multiply torque",
        xp: 15,
        minutes: 5,
        icon: "gear-pair",
        slides: [
          {
            heading: "Why gear down at all?",
            icon: "gear-pair",
            caption: "Motors spin fast with low torque; wheels need the opposite.",
            body:
              "FRC motors like the Falcon 500 or Kraken X60 spin at thousands of RPM but produce relatively little torque. A gearbox trades speed for torque: gearing down 10:1 means roughly 10x the torque at 1/10th the speed — what a drivetrain or lift actually needs.",
          },
          {
            heading: "Stage one: gears",
            icon: "gear-pair",
            caption: "Gear ratio = driven tooth count ÷ driving tooth count.",
            body:
              "In a gear mesh, the ratio between the driving gear and the driven gear is simply their tooth counts. A 12-tooth pinion driving a 36-tooth gear gives a 3:1 reduction. Model both gears' pitch diameters accurately so their centers land at the correct distance apart.",
          },
          {
            heading: "Stage two: a belt reduction",
            icon: "belt-loop",
            caption: "Belts add a second reduction stage without touching gears.",
            body:
              "After the gear stage, a second reduction is often done with a toothed belt (like HTD or GT2) between two pulleys. Multiplying the gear stage ratio by the belt stage ratio gives your total gearbox reduction — this is exactly the two-stage exercise FRC Design's own course walks through.",
          },
          {
            heading: "Center-to-center distance matters",
            icon: "gear-pair",
            caption: "Get this wrong and your gears won't mesh — or will bind.",
            body:
              "Whether it's a gear mesh or a belt run, the center-to-center distance between shafts must match the components' pitch diameters (or belt length) almost exactly. This is a perfect use for a layout sketch with driven dimensions, so if you swap a gear later, the spacing updates automatically.",
          },
        ],
        quiz: {
          question: "A 14-tooth pinion drives a 42-tooth gear. What's the reduction ratio?",
          options: ["1:1", "3:1", "14:1", "42:1"],
          correctIndex: 1,
          explanation:
            "42 ÷ 14 = 3, so this is a 3:1 reduction: the output shaft turns once for every three turns of the input.",
        },
        resource: RESOURCES.stage1Gearbox,
      },
      {
        id: "belts-chains",
        title: "Belts, Chains & Sprockets",
        blurb: "The other ways FRC robots transmit power",
        xp: 10,
        minutes: 4,
        icon: "sprocket-chain",
        slides: [
          {
            heading: "Chain and sprockets",
            icon: "sprocket-chain",
            caption: "#25 chain is the FRC standard for high-torque transmissions.",
            body:
              "Roller chain and sprockets (commonly #25 pitch in FRC) transmit power without slipping, even under high torque — great for drivetrains and elevators. Modeling accurate sprocket pitch diameters keeps chain length calculations correct.",
          },
          {
            heading: "Timing belts",
            icon: "belt-loop",
            caption: "Lighter than chain, no lubrication needed, still won't slip.",
            body:
              "Toothed timing belts (HTD, GT2) mesh like gears through their teeth, so they don't slip like a smooth belt would — but they're much lighter than chain and need no lubrication. Many modern swerve and elevator designs favor belts for exactly this reason.",
          },
          {
            heading: "Modeling a belt path",
            icon: "belt-loop",
            caption: "A sketch tangent to both pulleys defines the belt loop.",
            body:
              "To model a belt in Onshape, sketch two circles at the pulleys' pitch diameters, then draw tangent lines connecting them and trim to form the belt loop. Onshape's Belt/Chain feature can even automate this once pulleys are positioned.",
          },
          {
            heading: "Picking the right transmission",
            icon: "sprocket-chain",
            caption: "Chain: rugged and cheap. Belt: light and clean. Gears: compact and precise.",
            body:
              "There's no universally 'best' transmission — chain is rugged and forgiving of misalignment, belts are lighter and quieter, and direct gear meshes are the most compact. FRC teams pick based on the mechanism's torque, space constraints, and how much maintenance they can afford during competition.",
          },
        ],
        quiz: {
          question: "Which transmission type is generally the lightest while still avoiding slip?",
          options: ["Smooth flat belt", "Toothed timing belt", "Roller chain", "Friction wheel"],
          correctIndex: 1,
          explanation:
            "Toothed timing belts mesh through their teeth like a gear, so they resist slip while weighing much less than chain.",
        },
        resource: RESOURCES.resources,
      },
      {
        id: "cots-parts",
        title: "Working with COTS Parts",
        blurb: "Importing McMaster-Carr, VEX, WCP, and REV components",
        xp: 10,
        minutes: 4,
        icon: "import-box",
        slides: [
          {
            heading: "You don't model everything",
            icon: "import-box",
            caption: "COTS = Commercial Off-The-Shelf: bought, not made.",
            body:
              "FRC robots are full of Commercial Off-The-Shelf (COTS) parts — motors, gearboxes, bearings, fasteners — bought from vendors like WCP, REV, VEXpro, and McMaster-Carr rather than machined by the team. Modeling every bolt from scratch would waste build season; instead, you import accurate CAD models vendors already publish.",
          },
          {
            heading: "McMaster-Carr's CAD button",
            icon: "shelf-parts",
            caption: "Nearly every McMaster part page has a 'CAD' download link.",
            body:
              "McMaster-Carr publishes downloadable CAD for almost every part they sell — bolts, bearings, standoffs — in formats Onshape can import directly. Many teams keep a shared 'Vendor Parts' document just for these imports, so nobody re-downloads the same bearing twice.",
          },
          {
            heading: "Onshape's built-in Parts library",
            icon: "shelf-parts",
            caption: "Search fasteners and standard content right inside Onshape.",
            body:
              "Onshape includes a standard content library with common fasteners, and many FRC vendors (like WCP and REV) publish official Onshape libraries you can insert directly with correct configurations — matching bolt length, thread size, and material.",
          },
          {
            heading: "Keep COTS parts read-only",
            icon: "import-box",
            caption: "Never edit the geometry of an imported vendor part.",
            body:
              "Once imported, treat COTS parts as read-only reference geometry — don't edit their features. If a bearing's CAD is wrong, re-import a corrected version rather than hand-editing it, so your model always matches the real part you'll actually receive.",
          },
        ],
        quiz: {
          question: "What does 'COTS' stand for in FRC design?",
          options: [
            "Custom Onshape Tube System",
            "Commercial Off-The-Shelf",
            "Certified Onshape Team Standard",
            "Chassis Optimization Tuning Software",
          ],
          correctIndex: 1,
          explanation:
            "COTS parts are bought ready-made from vendors — motors, bearings, gearboxes, fasteners — instead of custom-machined by the team.",
        },
        resource: RESOURCES.resources,
      },
      {
        id: "mate-connectors",
        title: "Mate Connectors & Subassemblies",
        blurb: "Precise attachment points that survive redesigns",
        xp: 15,
        minutes: 5,
        icon: "axis-link",
        slides: [
          {
            heading: "Beyond faces and edges",
            icon: "axis-link",
            caption: "A mate connector is a custom coordinate system you define.",
            body:
              "Regular mates attach to faces, edges, or points — but those disappear if the geometry changes. A Mate Connector is a custom, named coordinate system you place explicitly (like 'the exact center of this bolt pattern'), so your mate survives redesigns that would otherwise break it.",
          },
          {
            heading: "Building reliable subassemblies",
            icon: "nested-boxes",
            caption: "Group related parts so they move and insert as one unit.",
            body:
              "A subassembly bundles related parts — like an entire swerve module or a gearbox — into one nested unit inside a larger assembly. This keeps the top-level assembly readable and lets you reuse a proven module (say, 4 identical swerve modules) without rebuilding it four times.",
          },
          {
            heading: "Rigid vs. flexible subassemblies",
            icon: "nested-boxes",
            caption: "Choose whether internal parts can still move within the parent.",
            body:
              "By default, a subassembly's internal mates still work inside the parent assembly — a gearbox's gears can still spin. Marking a subassembly 'rigid' freezes it as one solid block, which is useful when you just need it to sit somewhere and don't want to accidentally break its internal mates.",
          },
          {
            heading: "Naming connectors clearly",
            icon: "axis-link",
            caption: "'Motor Mount Face — Center' beats 'Mate connector 7'.",
            body:
              "As an assembly grows, clearly-named mate connectors save enormous time — a teammate should be able to tell what 'Bore Center — Output Shaft' is used for without opening the part. This habit matters more as your team and document both grow.",
          },
        ],
        quiz: {
          question: "Why use a Mate Connector instead of mating directly to a face?",
          options: [
            "Mate Connectors render faster",
            "It survives geometry changes better, since it's an explicitly defined coordinate system",
            "Faces can't be mated at all in Onshape",
            "It automatically calculates gear ratios",
          ],
          correctIndex: 1,
          explanation:
            "Mate Connectors are stable, named reference frames — they don't disappear or shift unexpectedly the way a face can when you edit upstream geometry.",
        },
        resource: {
          label: "Onshape Learning Center · Advanced Assemblies",
          url: "https://learn.onshape.com/",
        },
      },
      {
        id: "configurations",
        title: "Variables & Configurations",
        blurb: "One part, many sizes, zero duplicate files",
        xp: 15,
        minutes: 4,
        icon: "slider-var",
        slides: [
          {
            heading: "Naming your numbers",
            icon: "slider-var",
            caption: "A variable turns '25.4' into 'boreDiameter' everywhere it's used.",
            body:
              "Instead of typing raw numbers into every dimension, Onshape lets you define Variables — named values like boreDiameter or tubeWallThickness — used across multiple sketches and features. Change the variable once, and every feature referencing it updates together.",
          },
          {
            heading: "Configurations: one part, many variants",
            icon: "table-config",
            caption: "A bracket that comes in 2, 3, or 4-hole versions — one Part Studio.",
            body:
              "A Configuration lets a single Part Studio represent several variants — say, a bracket with 2, 3, or 4 mounting holes — controlled by a dropdown or checkbox instead of duplicating the whole file. This mirrors how vendors publish adjustable CAD for parts that come in multiple sizes.",
          },
          {
            heading: "Where this saves real time",
            icon: "table-config",
            caption: "Swap a wheel diameter across the whole drivetrain in one edit.",
            body:
              "Imagine standardizing a variable like wheelDiameter across your entire drivetrain assembly. Test with a 4' wheel, decide you need 3', and update one variable instead of hunting through a dozen parts for every place '4' appears.",
          },
          {
            heading: "Feature Studios for team-wide standards",
            icon: "table-config",
            caption: "Share a set of standard variables across every document on the team.",
            body:
              "Advanced teams centralize shared variables — like standard bolt sizes or box tube dimensions — in a Feature Studio that every Part Studio on the team can reference. That's a taste of Stage 4 workflow: designing once, reusing everywhere.",
          },
        ],
        quiz: {
          question: "What's the main benefit of using a Configuration instead of copy-pasting a Part Studio for each size variant?",
          options: [
            "Configurations are required by Onshape",
            "It keeps every variant in one editable place instead of duplicated files that drift out of sync",
            "It makes the part lighter",
            "It removes the need for mates",
          ],
          correctIndex: 1,
          explanation:
            "Configurations avoid duplicate, drifting copies of a part — one Part Studio cleanly represents every size or option variant.",
        },
        resource: RESOURCES.resources,
      },
      {
        id: "bearing-blocks",
        title: "Bearing Blocks & Shaft Design",
        blurb: "Supporting rotating shafts the way real robots do",
        xp: 15,
        minutes: 4,
        icon: "bearing-ring",
        slides: [
          {
            heading: "Why shafts need support",
            icon: "bearing-ring",
            caption: "A shaft needs at least two points of support to stay aligned.",
            body:
              "Any rotating shaft — an axle, an output shaft — needs to be supported so it stays aligned under load instead of wobbling or binding. In FRC, that support almost always comes from a bearing pressed into a bearing block or plate.",
          },
          {
            heading: "Modeling a bearing bore",
            icon: "bearing-ring",
            caption: "Bore diameter should match the bearing's outer diameter, often with a light press fit.",
            body:
              "A bearing bore is a precisely-sized hole that a bearing presses into. Model it to the bearing's actual outer diameter (check the vendor's CAD or spec sheet) — too loose and the bearing spins in its bore; too tight and it won't seat or may crack a 3D printed part.",
          },
          {
            heading: "Shaft collars and retention",
            icon: "shaft-collar",
            caption: "Something has to stop the shaft from sliding out axially.",
            body:
              "A bearing constrains a shaft radially but not axially — nothing stops it from sliding sideways. Shaft collars, snap rings, or shoulders on the shaft itself lock it in place along its length. Always account for this in your design, not just the spin.",
          },
          {
            heading: "Two supports, not one",
            icon: "bearing-ring",
            caption: "A single bearing lets a shaft tilt; two bearings keep it true.",
            body:
              "A shaft held by only one bearing can tilt like a pencil balanced on a fingertip. Supporting a shaft at two separated points — a bearing block on each end — keeps it running true under load, which matters a lot for anything geared or chained.",
          },
        ],
        quiz: {
          question: "What keeps a shaft from sliding axially even though its bearings let it spin freely?",
          options: [
            "The gear ratio",
            "Shaft collars, snap rings, or a shoulder on the shaft",
            "The bearing block's material",
            "Nothing — bearings prevent all motion",
          ],
          correctIndex: 1,
          explanation:
            "Bearings constrain radial motion (they let the shaft spin) but not axial motion — you need a separate retention feature like a shaft collar.",
        },
        resource: RESOURCES.resources,
      },
    ],
  },
  {
    id: "stage3",
    title: "Whole-Robot Design",
    subtitle: "Top-down layout, drivebases, and manufacturing-ready output",
    icon: "centerline-robot",
    lessons: [
      {
        id: "layout-sketch",
        title: "Top-Down Design with Layout Sketches",
        blurb: "The single sketch that drives your whole robot",
        xp: 20,
        minutes: 5,
        icon: "centerline-robot",
        slides: [
          {
            heading: "Design top-down, not bottom-up",
            icon: "centerline-robot",
            caption: "Plan the whole robot's footprint before modeling any one part.",
            body:
              "Bottom-up design — modeling one part in detail before knowing where it sits — leads to collisions and rework. Top-down design starts with a Layout Sketch: a single 2D (or 3D) sketch that blocks out where every major subsystem sits before you model any single part in detail.",
          },
          {
            heading: "What goes in a layout sketch",
            icon: "centerline-robot",
            caption: "Frame perimeter, wheel centers, bumper zone, subsystem envelopes.",
            body:
              "A drivebase layout sketch typically includes the frame perimeter, wheel centerlines, bumper zone (a strict FRC rule constraint), and rough bounding boxes for major subsystems like an elevator or arm — all driven by variables so the whole robot can be resized from one place.",
          },
          {
            heading: "Deriving part sketches from the layout",
            icon: "centerline-robot",
            caption: "Individual parts reference the layout sketch instead of guessing.",
            body:
              "Once the layout sketch exists, individual Part Studios can reference it directly — a box tube's length pulls from the frame perimeter, a bearing block's position pulls from a wheel centerline. Change the layout once, and everything downstream follows.",
          },
          {
            heading: "This is exactly FRC Design's own workflow",
            icon: "loop-arrow",
            caption: "Practiced across Stage 2 and used team-wide in Stage 3 projects.",
            body:
              "This top-down, layout-sketch-first approach is the backbone of how FRCDesign.org teaches whole-robot modeling — practiced repeatedly through their course and used on real multi-document robot projects. It's one of the highest-leverage habits you can build early.",
          },
        ],
        quiz: {
          question: "What is the main purpose of a top-down layout sketch?",
          options: [
            "To make the CAD file smaller",
            "To block out where every major subsystem sits before modeling detailed parts",
            "To replace the need for an assembly",
            "To generate a bill of materials automatically",
          ],
          correctIndex: 1,
          explanation:
            "A layout sketch establishes overall geometry and spacing first, so individual parts can be designed to fit a plan instead of colliding by accident.",
        },
        resource: RESOURCES.stage1Layout,
      },
      {
        id: "swerve-module",
        title: "Integrating a Swerve Module",
        blurb: "Dropping a complex COTS assembly into your robot",
        xp: 20,
        minutes: 5,
        icon: "module-wheel",
        slides: [
          {
            heading: "What a swerve module is",
            icon: "module-wheel",
            caption: "Independent steering + drive at each corner of the robot.",
            body:
              "A swerve module lets one wheel both drive and steer independently — most competitive swerve robots use 4 modules, one per corner, giving the robot the ability to translate in any direction while facing any heading, decoupled from its motion.",
          },
          {
            heading: "It's a COTS subassembly",
            icon: "nested-boxes",
            caption: "Vendors like WCP and REV publish full swerve module CAD.",
            body:
              "Modules from vendors like WCP (Swerve X2) or REV (MAXSwerve) come as pre-built Onshape assemblies you insert as a single subassembly, complete with correct mates already defined — you're integrating it, not modeling it from scratch.",
          },
          {
            heading: "Mounting to your frame",
            icon: "axis-link",
            caption: "Mate connectors on the module line up with your chassis layout.",
            body:
              "Vendor modules typically include mate connectors at their mounting bolt pattern. Positioning four modules correctly usually means mating each module's connector to a corresponding mate connector on your frame — driven by the wheel centerlines from your layout sketch.",
          },
          {
            heading: "Checking for interference",
            icon: "dof-arrows",
            caption: "Swerve modules rotate 360° — check clearance through the full range.",
            body:
              "Because swerve modules rotate continuously, you must check clearance through their full rotation — not just their resting position — against the frame, bumpers, and neighboring modules. Onshape's interference detection tool can check this automatically across an assembly.",
          },
        ],
        quiz: {
          question: "Why should you check swerve module clearance through its full rotation, not just one position?",
          options: [
            "Modules only rotate a few degrees so it doesn't matter",
            "Because the module can rotate a full 360°, it may only collide with the frame at certain angles",
            "Onshape doesn't allow checking multiple angles",
            "Swerve modules never rotate during a match",
          ],
          correctIndex: 1,
          explanation:
            "A collision that only appears at, say, 47° of rotation is easy to miss if you only ever look at the module sitting straight — always sweep the full range.",
        },
        resource: RESOURCES.resources,
      },
      {
        id: "drivebase",
        title: "Designing a Drivebase Chassis",
        blurb: "Frame, bumpers, and wheelbase — the robot's foundation",
        xp: 20,
        minutes: 5,
        icon: "chassis-frame",
        slides: [
          {
            heading: "Wheelbase and track width",
            icon: "chassis-frame",
            caption: "These two numbers shape how the robot turns and handles.",
            body:
              "Wheelbase is the distance between front and rear wheel centers; track width is the distance between left and right. Together they define your drivebase's footprint and heavily influence turning behavior, traction, and how easily the robot tips.",
          },
          {
            heading: "Framing with box tube",
            icon: "tube-cross",
            caption: "The perimeter frame ties directly back to your layout sketch.",
            body:
              "The frame perimeter is usually built from box tube, cut to lengths pulled directly from your layout sketch's frame dimensions. Corner gussets or welded/riveted joints tie the tubes together into a rigid rectangle.",
          },
          {
            heading: "Bumpers aren't optional",
            icon: "chassis-frame",
            caption: "FRC's bumper rules constrain your frame perimeter and zone.",
            body:
              "FRC rules require bumpers within a specific zone around the frame perimeter, with specific height and coverage requirements. Modeling the bumper zone into your layout sketch early avoids discovering late that a mechanism overhangs into illegal territory.",
          },
          {
            heading: "Weight budget from the start",
            icon: "scale-weight",
            caption: "FRC robots have a strict total weight limit — track it as you design.",
            body:
              "FRC enforces a maximum robot weight. Using Onshape's mass properties on your assembly (with reasonably accurate material assignments) lets you track running weight as you design, instead of discovering an overweight robot the week before your event.",
          },
        ],
        quiz: {
          question: "What do 'wheelbase' and 'track width' describe together?",
          options: [
            "The robot's total weight",
            "The drivebase's footprint — front/rear and left/right wheel spacing",
            "The gear ratio of the drivetrain",
            "The bumper height",
          ],
          correctIndex: 1,
          explanation:
            "Wheelbase (front-to-back) and track width (side-to-side) define the rectangle your wheels sit at, shaping handling and stability.",
        },
        resource: RESOURCES.stage1Layout,
      },
      {
        id: "subsystem-design",
        title: "Designing a Subsystem",
        blurb: "Iterating on a mechanism like an arm or intake",
        xp: 20,
        minutes: 5,
        icon: "arm-link",
        slides: [
          {
            heading: "Start with the job, not the geometry",
            icon: "arm-link",
            caption: "What does this mechanism need to do, and how fast?",
            body:
              "Before sketching a single bracket, define the mechanism's job: how far does an arm need to reach, how fast, holding what load? These requirements — not aesthetics — should drive every early geometric decision.",
          },
          {
            heading: "Rough it out, then refine",
            icon: "loop-arrow",
            caption: "A blocky first pass beats a beautiful part that doesn't fit.",
            body:
              "Early iterations should be rough — simple extruded blocks standing in for a gearbox, a basic tube for an arm — placed inside your layout sketch's envelope. Refine shapes and add real parts only once the overall motion and packaging are proven out.",
          },
          {
            heading: "Simulate motion early",
            icon: "dof-arrows",
            caption: "Mate an arm's pivot early and drag-test its full range.",
            body:
              "As soon as a pivot exists, mate it and drag-test the mechanism through its full range of motion inside the robot assembly — catching a frame collision or cable-routing problem while it's just a rough block is far cheaper than after machining real parts.",
          },
          {
            heading: "Iteration is the whole game",
            icon: "loop-arrow",
            caption: "Expect to redesign a mechanism 3-5 times before it's competition-ready.",
            body:
              "Competitive subsystems are rarely right on the first try. Budget for iteration: build, test (even in cardboard or a rough CAD mockup), find what fails, and redesign. Treating the first version as a draft — not a final answer — is what separates fast teams from stuck ones.",
          },
        ],
        quiz: {
          question: "What should typically come first when designing a new subsystem like an arm?",
          options: [
            "Choosing the exact bolt pattern for the gearbox",
            "Defining what the mechanism needs to do (reach, speed, load) before detailed geometry",
            "Picking the paint color",
            "Writing the drawing's title block",
          ],
          correctIndex: 1,
          explanation:
            "Functional requirements should drive geometry, not the other way around — know the job the mechanism must do before locking in detailed shapes.",
        },
        resource: RESOURCES.course,
      },
      {
        id: "drawings-bom",
        title: "Drawings & BOMs",
        blurb: "Turning a 3D model into instructions a machinist can follow",
        xp: 20,
        minutes: 4,
        icon: "drawing-sheet",
        slides: [
          {
            heading: "Why you still need drawings",
            icon: "drawing-sheet",
            caption: "A 3D model doesn't tell a machinist what tolerance matters.",
            body:
              "Even with a perfect 3D model, a 2D Drawing communicates exactly what a machinist, sponsor shop, or teammate needs: which dimensions are critical, what tolerance is acceptable, and what material and finish to use. This is especially important for parts sent to outside shops.",
          },
          {
            heading: "Views, dimensions, and title blocks",
            icon: "drawing-sheet",
            caption: "Standard views plus a title block with part name, material, and revision.",
            body:
              "A drawing sheet typically shows front, top, and side views (plus an isometric for clarity), dimensioned only where it matters, with a title block listing part name, material, quantity, and revision — so anyone picking up the sheet knows exactly what they're building.",
          },
          {
            heading: "Generating a BOM",
            icon: "bom-table",
            caption: "Onshape can auto-generate a Bill of Materials from your assembly.",
            body:
              "For an assembly, Onshape can automatically generate a Bill of Materials — a table listing every part, quantity, and (if you've set it) vendor part number. This is invaluable for ordering COTS parts and tracking what's actually needed to build a subsystem.",
          },
          {
            heading: "Keep drawings in sync",
            icon: "loop-arrow",
            caption: "Drawings reference the model live — edit the part, and the drawing updates.",
            body:
              "Because Onshape drawings reference the live Part Studio or Assembly, editing the underlying model updates the drawing's views and BOM automatically — no more manually redrawing a part after every design change like older CAD tools require.",
          },
        ],
        quiz: {
          question: "What is a Bill of Materials (BOM) primarily used for?",
          options: [
            "Listing every sketch constraint used in a part",
            "Listing every part in an assembly with quantities, useful for ordering and tracking",
            "Recording the robot's total weight",
            "Storing feature history",
          ],
          correctIndex: 1,
          explanation:
            "A BOM is a structured list of every part (and quantity) in an assembly — critical for ordering COTS hardware and tracking what needs to be built.",
        },
        resource: {
          label: "Onshape Learning Center · Drawings",
          url: "https://learn.onshape.com/",
        },
      },
      {
        id: "sheet-metal",
        title: "Sheet Metal Basics",
        blurb: "Flat patterns that fold into brackets and electronics boards",
        xp: 20,
        minutes: 4,
        icon: "flat-fold",
        slides: [
          {
            heading: "When to reach for sheet metal",
            icon: "flat-fold",
            caption: "Great for brackets, electronics boards, and formed panels.",
            body:
              "Onshape's sheet metal tools model parts as a constant-thickness sheet that's cut flat and then bent — ideal for brackets, electronics mounting boards, and formed panels that a sponsor shop can cut and brake-form cheaply.",
          },
          {
            heading: "Bends and the flat pattern",
            icon: "flat-fold",
            caption: "Onshape calculates the unfolded flat shape automatically.",
            body:
              "You model the part in its folded, 3D shape, and Onshape's sheet metal feature set calculates the corresponding Flat Pattern automatically — accounting for how much material a bend consumes (the 'bend allowance'), so the flat shape you send to a laser or brake is dimensionally correct.",
          },
          {
            heading: "Choosing bend radius and relief",
            icon: "flat-fold",
            caption: "Real material can't bend to a perfect sharp corner.",
            body:
              "Real sheet metal can't fold to a mathematically sharp corner — you specify a bend radius matching your brake tooling, and corner reliefs where multiple bends meet to prevent the material from tearing.",
          },
          {
            heading: "Exporting for fabrication",
            icon: "drawing-sheet",
            caption: "The flat pattern exports as a DXF for laser or waterjet cutting.",
            body:
              "The flat pattern can be exported as a DXF file, which laser cutters, waterjets, and sheet metal brakes read directly — a clean bridge from your Onshape model straight to a physical part, without redrawing anything by hand.",
          },
        ],
        quiz: {
          question: "What does Onshape's sheet metal 'Flat Pattern' represent?",
          options: [
            "A 3D rendering of the finished bracket",
            "The unfolded, flat shape of the part, accounting for material consumed by bends",
            "A list of every bolt used in the part",
            "The part's mass properties",
          ],
          correctIndex: 1,
          explanation:
            "The flat pattern is the calculated 2D shape you'd cut from flat stock before bending — it accounts for bend allowance so the folded result comes out to the right dimensions.",
        },
        resource: RESOURCES.resources,
      },
    ],
  },
  {
    id: "stage4",
    title: "Pro Workflow",
    subtitle: "Team collaboration, FeatureScript, and strategic design",
    icon: "code-brackets",
    lessons: [
      {
        id: "versioning-branching",
        title: "Versions, Branches & Merging",
        blurb: "Onshape's git-like history, built for teams",
        xp: 25,
        minutes: 5,
        icon: "branch-fork",
        slides: [
          {
            heading: "Beyond simple versions",
            icon: "branch-fork",
            caption: "A Branch lets you experiment without touching the main design.",
            body:
              "Versions are permanent snapshots, but sometimes you want to experiment — try a risky redesign of a gearbox — without risking the team's main workspace. A Branch creates an independent copy of history you can freely edit, then decide later whether to bring back.",
          },
          {
            heading: "Merging changes back",
            icon: "branch-fork",
            caption: "Merge brings a branch's changes into the main workspace intentionally.",
            body:
              "Once a branched experiment works out, Merging brings those changes back into the main workspace. This mirrors how software teams use git — try things safely on the side, then deliberately fold in what worked.",
          },
          {
            heading: "Why this matters during build season",
            icon: "loop-arrow",
            caption: "Six weeks means constant, sometimes risky, iteration.",
            body:
              "During a 6-week build season, multiple students often want to try different approaches to the same subsystem simultaneously. Branches let that happen safely — nobody's experiment can accidentally break what the rest of the team is relying on.",
          },
          {
            heading: "Rolling back safely",
            icon: "history-tree",
            caption: "A named Version is always there if a change goes badly wrong.",
            body:
              "If an in-progress change breaks something badly, you can always go back to the last named Version and continue from there. This safety net is exactly why disciplined teams snapshot a version before any major structural change.",
          },
        ],
        quiz: {
          question: "What is the main advantage of using a Branch before a risky redesign?",
          options: [
            "It automatically fixes design errors",
            "It lets you experiment without affecting the main workspace, then merge back only if it works",
            "It reduces the part count",
            "It's required before every extrude",
          ],
          correctIndex: 1,
          explanation:
            "A branch isolates risky experimentation from the shared main workspace — exactly the safety net a fast-moving team needs.",
        },
        resource: RESOURCES.stage4,
      },
      {
        id: "team-collaboration",
        title: "Team Collaboration & Permissions",
        blurb: "Keeping a growing team's CAD organized and safe",
        xp: 20,
        minutes: 4,
        icon: "people-doc",
        slides: [
          {
            heading: "Folders and document structure",
            icon: "people-doc",
            caption: "A predictable structure keeps 20+ students from getting lost.",
            body:
              "As a team's document count grows into the dozens, a clear folder structure — separated by subsystem, by season, or by 'in-progress' vs. 'released' — keeps new members from wasting time hunting for the right file.",
          },
          {
            heading: "Roles and permissions",
            icon: "lock-key",
            caption: "Not everyone needs edit access to every document.",
            body:
              "Onshape lets you set viewer, editor, and owner permissions per document or folder. Giving new members viewer access to released designs while reserving edit access for verified leads prevents accidental changes to a design that's about to be machined.",
          },
          {
            heading: "Releases: locking in 'this is what we're building'",
            icon: "lock-key",
            caption: "A Release marks a part or assembly as approved for manufacturing.",
            body:
              "A Release is a formal, approved snapshot of a part or assembly — signaling 'this is what we're actually manufacturing,' separate from in-progress design iterations. Released items typically get a revision letter and can't be silently edited afterward.",
          },
          {
            heading: "Comments instead of hallway conversations",
            icon: "people-doc",
            caption: "Leave feedback directly on the model, visible to the whole team.",
            body:
              "Onshape supports comments directly on parts, faces, or assemblies — letting a mentor or lead leave feedback exactly where it applies, visible to everyone on the team, instead of a verbal note that gets forgotten.",
          },
        ],
        quiz: {
          question: "What is the main purpose of 'Releasing' a part in Onshape?",
          options: [
            "To delete old versions",
            "To formally mark a design as approved for manufacturing, separate from in-progress iterations",
            "To export a DXF automatically",
            "To share the document publicly on the internet",
          ],
          correctIndex: 1,
          explanation:
            "A Release is a controlled, approved checkpoint — it tells the whole team 'this exact version is what we are building,' distinct from ongoing design changes.",
        },
        resource: RESOURCES.stage4,
      },
      {
        id: "featurescript-intro",
        title: "Introduction to FeatureScript",
        blurb: "Writing your own custom CAD features with code",
        xp: 25,
        minutes: 5,
        icon: "code-brackets",
        slides: [
          {
            heading: "CAD features are just programs",
            icon: "code-brackets",
            caption: "Every built-in Onshape feature is written in FeatureScript.",
            body:
              "Every tool you've used — Extrude, Fillet, Pattern — is itself written in Onshape's own language, FeatureScript. Once you understand that, it makes sense that you can write your own custom features the same way, tailored exactly to your team's repeated tasks.",
          },
          {
            heading: "Why FRC teams write custom features",
            icon: "code-brackets",
            caption: "Automate a repetitive, error-prone modeling task once.",
            body:
              "A common example: a custom feature that generates a bolt-hole pattern matching a specific vendor's gearbox footprint, taking bolt size and spacing as inputs. Write it once, and every teammate can insert it correctly without memorizing the exact hole spacing.",
          },
          {
            heading: "A gentle first script",
            icon: "code-brackets",
            caption: "FeatureScript looks like JavaScript/TypeScript with CAD-specific functions.",
            body:
              "FeatureScript syntax will feel familiar if you've done any programming — variables, functions, and conditionals — plus CAD-specific functions like `extrude()` or `opPattern()` that operate on sketches and solids directly from code.",
          },
          {
            heading: "Start by reading, not writing",
            icon: "code-brackets",
            caption: "Onshape lets you view the FeatureScript behind any built-in feature.",
            body:
              "Before writing your own, try viewing the FeatureScript source behind a built-in feature (Onshape exposes this). Reading how a real, working feature handles inputs and edge cases is one of the fastest ways to learn the language's patterns.",
          },
        ],
        quiz: {
          question: "What language are Onshape's own built-in features (Extrude, Fillet, etc.) written in?",
          options: ["Python", "FeatureScript", "C++", "JavaScript"],
          correctIndex: 1,
          explanation:
            "FeatureScript is Onshape's own language — the same one used to build every native feature, and the one you use to write custom features.",
        },
        resource: {
          label: "Onshape FeatureScript Documentation",
          url: "https://cad.onshape.com/FsDoc/",
        },
      },
      {
        id: "surfacing-advanced",
        title: "Advanced Surfacing",
        blurb: "Complex shapes beyond simple extrudes and revolves",
        xp: 25,
        minutes: 5,
        icon: "nurbs-wave",
        slides: [
          {
            heading: "When solid features aren't enough",
            icon: "nurbs-wave",
            caption: "Some shapes — shrouds, scoops, complex intakes — need surfaces.",
            body:
              "Extrude and Revolve cover most FRC parts, but organic or complex transitional shapes — a curved intake scoop, a shrouded fan housing — often need Onshape's surfacing tools, which model shape as thin, mathematical surfaces before thickening into a solid.",
          },
          {
            heading: "Lofts: blending cross-sections",
            icon: "nurbs-wave",
            caption: "Loft smoothly connects two or more different-shaped profiles.",
            body:
              "A Loft blends between two or more sketch profiles — say, a round opening at one end transitioning to a rectangular opening at the other — creating a smooth, continuous surface between shapes that a simple extrude never could.",
          },
          {
            heading: "Boundary surfaces and guide curves",
            icon: "nurbs-wave",
            caption: "Guide curves give you control over exactly how a surface flows.",
            body:
              "For more control than a basic loft, Boundary surfaces let you add guide curves that steer how the surface flows between profiles — useful for aerodynamic shapes or ergonomic covers where a simple blend looks wrong.",
          },
          {
            heading: "Thicken to get a solid",
            icon: "nurbs-wave",
            caption: "Surfaces become manufacturable once you thicken them into a solid.",
            body:
              "A surface alone has no material — it's a mathematical sheet. The Thicken feature adds a wall thickness to turn it into a real, manufacturable solid, ready for the same downstream features (holes, fillets) as any other part.",
          },
        ],
        quiz: {
          question: "What does a Loft feature do?",
          options: [
            "Rounds a sharp edge",
            "Blends smoothly between two or more differently-shaped sketch profiles",
            "Generates a bill of materials",
            "Calculates gear ratios",
          ],
          correctIndex: 1,
          explanation:
            "Loft creates a smooth transitional surface or solid between multiple cross-sections — ideal for shapes a simple extrude or revolve can't produce.",
        },
        resource: {
          label: "Onshape Learning Center · Surfacing",
          url: "https://learn.onshape.com/",
        },
      },
      {
        id: "dfm-tolerancing",
        title: "Design for Manufacturing & Tolerancing",
        blurb: "Designing parts that actually fit together in real life",
        xp: 25,
        minutes: 5,
        icon: "caliper",
        slides: [
          {
            heading: "Nothing is made exactly to size",
            icon: "caliper",
            caption: "Real manufacturing always has some variation from the nominal dimension.",
            body:
              "No manufacturing process is perfect — a 'quarter-inch' hole might really be 0.248' to 0.252' depending on the tool and process. Tolerance is the acceptable range of variation you decide is fine for a part to still function correctly.",
          },
          {
            heading: "Clearance vs. press fits",
            icon: "caliper",
            caption: "Design the gap on purpose — don't leave it to chance.",
            body:
              "A clearance fit (a bolt through a hole) needs the hole slightly larger than the bolt so it slides freely. A press fit (a bearing into a bore) needs the bore slightly smaller than the part so it stays put through friction. Deciding which you want — and sizing for it — is a deliberate design choice.",
          },
          {
            heading: "Designing around your process",
            icon: "caliper",
            caption: "A part 3D printed in-house tolerates different limits than a CNC'd part from a sponsor.",
            body:
              "Design for Manufacturing means matching your tolerances and features to the process actually making the part — a 3D printer struggles with tight tolerances and unsupported overhangs, while a CNC mill handles precision well but costs more machine time per feature.",
          },
          {
            heading: "Communicating tolerance on drawings",
            icon: "drawing-sheet",
            caption: "Only call out tight tolerances where they truly matter.",
            body:
              "On a drawing, most dimensions can use a standard 'general tolerance' note, but a handful of truly critical dimensions — a bearing bore, a shaft diameter — deserve an explicit, tighter tolerance callout so a machinist knows exactly which numbers can't drift.",
          },
        ],
        quiz: {
          question: "What's the key difference between a clearance fit and a press fit?",
          options: [
            "Clearance fits are always for 3D printed parts",
            "A clearance fit allows free sliding motion; a press fit relies on friction from an interference to stay put",
            "Press fits are only used on drawings, never in real parts",
            "There is no functional difference",
          ],
          correctIndex: 1,
          explanation:
            "Clearance fits have a small gap for free motion (a bolt through a hole); press fits are sized slightly interfering so friction holds the parts together (a bearing in a bore).",
        },
        resource: RESOURCES.resources,
      },
      {
        id: "strategic-design",
        title: "Strategic & Iterative Design",
        blurb: "The mindset that separates fast teams from stuck teams",
        xp: 25,
        minutes: 5,
        icon: "checklist-road",
        slides: [
          {
            heading: "CAD speed is a competitive advantage",
            icon: "checklist-road",
            caption: "The team that iterates fastest usually wins the design race.",
            body:
              "In a 6-week build season, the team that can model, test, and revise a mechanism fastest gets more shots at getting it right. Every habit in this app — top-down layout, variables, mate connectors, clean feature trees — exists to make iteration faster, not just to look tidy.",
          },
          {
            heading: "Strategic design starts with the game",
            icon: "checklist-road",
            caption: "Understand what actually scores points before designing how to score them.",
            body:
              "Before any CAD happens, strong teams analyze the game manual and decide on a strategy — which tasks are worth the most points per second of cycle time, which are safest, which fit the team's build capability — and only then design mechanisms to execute that strategy.",
          },
          {
            heading: "Prototype before you commit",
            icon: "loop-arrow",
            caption: "A cardboard or 3D-printed mockup answers questions CAD alone can't.",
            body:
              "A rough physical prototype — cardboard, 3D printed, or scrap box tube — can answer real-world questions (does this actually grip the game piece? does this arm actually clear the frame?) faster than another round of CAD-only iteration.",
          },
          {
            heading: "Document decisions, not just parts",
            icon: "checklist-road",
            caption: "Onshape comments and descriptions record 'why', which outlasts any one season.",
            body:
              "Recording why a design choice was made — in comments, descriptions, or a linked doc — helps next year's team (and this year's tired, stressed version of you) understand the reasoning instead of just inheriting the geometry. This is the essence of FRC Design's Stage 4 workflow focus: fast, well-documented, collaborative CAD.",
          },
        ],
        quiz: {
          question: "According to a strategic design mindset, what should typically come before any CAD modeling begins?",
          options: [
            "Ordering all COTS parts",
            "Analyzing the game manual and deciding on a scoring strategy",
            "Writing FeatureScript custom features",
            "Generating the bill of materials",
          ],
          correctIndex: 1,
          explanation:
            "Strategy — understanding what's actually worth building — should drive what gets designed, not the other way around.",
        },
        resource: RESOURCES.stage4,
      },
    ],
  },
];

export function allLessons(stages: Stage[]): Lesson[] {
  return stages.flatMap((s) => s.lessons);
}

export function findLesson(lessonId: string): { stage: Stage; lesson: Lesson } | null {
  for (const stage of STAGES) {
    const lesson = stage.lessons.find((l) => l.id === lessonId);
    if (lesson) return { stage, lesson };
  }
  return null;
}

export function lessonNeighbors(lessonId: string): {
  prev: Lesson | null;
  next: Lesson | null;
} {
  const flat = allLessons(STAGES);
  const idx = flat.findIndex((l) => l.id === lessonId);
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}
