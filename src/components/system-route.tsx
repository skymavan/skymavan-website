type SystemStage = {
  index: string;
  label: string;
  description: string;
  human?: boolean;
};

const stages: ReadonlyArray<SystemStage> = [
  {
    index: "01",
    label: "Input",
    description: "Trusted context enters from the tools and data your team already uses.",
  },
  {
    index: "02",
    label: "Reason",
    description: "The system interprets the task, applies constraints, and prepares an action.",
  },
  {
    index: "03",
    label: "Human approval",
    description: "A person reviews consequential decisions before the workflow continues.",
    human: true,
  },
  {
    index: "04",
    label: "Act",
    description: "Approved work reaches the right system with a visible operating trail.",
  },
];

export function SystemRoute() {
  return (
    <ol className="system-route" aria-label="AI system route">
      {stages.map((stage) => (
        <li
          key={stage.label}
          className={stage.human ? "system-stage system-stage-human" : "system-stage"}
        >
          <div className="system-stage-head">
            <span className="system-stage-index">{stage.index}</span>
            <span className="system-node" aria-hidden="true" />
          </div>
          <h3>{stage.label}</h3>
          <p>{stage.description}</p>
        </li>
      ))}
    </ol>
  );
}
