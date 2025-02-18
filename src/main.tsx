import { useState } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';

export function App(context: any): JSXInternal.Element {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + Preact1</h1>
      <div class="card">
        <button onClick={() => {
          setCount(count => count + 1);
          console.log(window.Blinko.toast.success('成功'))
        }}>count is {count}</button>
      </div>
    </>
  );
}