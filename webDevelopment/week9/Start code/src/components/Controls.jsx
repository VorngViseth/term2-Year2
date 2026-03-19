export default function Controls({ onControl }) {
    return (
    <section id="controls">
      <button onClick={() => onControl('attack')}>ATTACK</button>
      <button onClick={() => onControl('special-attack')}>SPECIAL !</button>
      <button onClick={() => onControl('heal')}>HEAL</button>
      <button onClick={() => onControl('surrender')}>KILL YOURSELF</button>
    </section>
    );
}