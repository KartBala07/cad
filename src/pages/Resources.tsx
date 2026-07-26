import { RESOURCE_GROUPS } from "../data/resources";

export function Resources() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-100 mb-2">
        Go deeper
      </h1>
      <p className="text-ink-300 text-sm mb-8 max-w-xl">
        This app's curriculum is inspired by and structured after{" "}
        <a
          href="https://frcdesign.org/"
          target="_blank"
          rel="noreferrer"
          className="text-lime-400 hover:underline"
        >
          FRCDesign.org
        </a>
        , an Onshape education partner built specifically for FIRST Robotics
        Competition teams. Every lesson links back to real source material —
        use these once you want more depth than a 5-minute lesson can give.
      </p>

      <div className="space-y-8">
        {RESOURCE_GROUPS.map((group) => (
          <section key={group.heading}>
            <h2 className="font-display font-bold text-lg text-ink-100 mb-3">
              {group.heading}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {group.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-ink-700 bg-ink-850 p-4 hover:border-lime-400/40 hover:bg-ink-800 transition-colors"
                >
                  <p className="font-semibold text-sm text-ink-100 group-hover:text-lime-300 transition-colors">
                    {link.title} <span className="text-ink-500">↗</span>
                  </p>
                  <p className="text-xs text-ink-300 mt-1.5 leading-relaxed">
                    {link.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
