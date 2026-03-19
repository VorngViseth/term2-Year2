export default function Logs({ logs }) {
    return (
    <section id="log" className="container">
      <h2>Battle Log</h2>
      <ul>
        {logs.map((log, index) => {
          return (
            <li key={index}>
              <span>{log.isPlayer ? "Player" : "Enemy"}</span>
              <span className={log.isDamage ? "log--damage" : "log--heal"}>{log.text}</span>
            </li>
          );
        })}
      </ul>
    </section>
    );
}