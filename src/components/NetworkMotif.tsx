// A quiet node-and-line motif standing in for "network / connectivity" — the one
// deliberate visual flourish on the site, reused instead of scattered per-page effects.
export function NetworkMotif({ className }: { className?: string }) {
  const nodes = [
    { x: 40, y: 60 },
    { x: 190, y: 30 },
    { x: 320, y: 90 },
    { x: 150, y: 170 },
    { x: 300, y: 220 },
    { x: 60, y: 230 },
    { x: 380, y: 150 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 5],
    [3, 4],
    [4, 6],
    [2, 6],
  ];

  return (
    <svg
      viewBox="0 0 420 280"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 3 ? 7 : 4.5}
          fill="currentColor"
          className={i === 3 ? "animate-pulseline" : ""}
        />
      ))}
    </svg>
  );
}
