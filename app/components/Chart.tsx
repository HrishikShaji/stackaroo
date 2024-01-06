export const Chart = () => {
  return (
    <div className="container">
      <h1 className="level-1 rectangle">CEO</h1>
      <ol className="level-2-wrapper">
        <li>
          <h2 className="level-2 rectangle">Director A</h2>
          <ol className="level-3-wrapper">
            <li>
              <h3 className="level-3 rectangle">Manager A</h3>
            </li>
            <li>
              <h3 className="level-3 rectangle">Manager B</h3>
            </li>
          </ol>
        </li>
        <li>
          <h2 className="level-2 rectangle">Director B</h2>
          <ol className="side-wrapper">
            <li>
              <h4 className="side rectangle">Person A</h4>
            </li>
            <li>
              <h4 className="side rectangle">Person B</h4>
            </li>
            <li>
              <h4 className="side rectangle">Person C</h4>
            </li>
            <li>
              <h4 className="side rectangle">Person D</h4>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
};
