import { useState } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';

export function App(context: any): JSXInternal.Element {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + Preac17</h1>
      <div class="card">
        <button onClick={() => {
          setCount(count => count + 1);
          console.log(window.Blinko.toast.success('success-01'))
        }}>count is {count}</button>
      </div>
    </>
  );
}
