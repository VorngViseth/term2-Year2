export default function Entity({hp, name}) {
  const hrPercent = hp > 100 ? 100 : hp < 0 ? 0 : hp;
  return (
    <section className="container">
      <h2>{name} Health</h2>
      <div className="healthbar">
        <div style={{ width: `${hrPercent}%` }} className="healthbar__value"></div>
      </div>
    </section>
  );
}