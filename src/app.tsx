import { useState } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';

export function App(): JSXInternal.Element {
  const [count, setCount] = useState(0);
  const i18n = window.Blinko.i18n;

  return (
    <>
      <h1>{i18n.t('title')}</h1>
      <div class="card">
        <button onClick={() => {
          setCount(count => count + 1);
          console.log(window.Blinko.toast.success(i18n.t('successMessage')));
        }}>
          {i18n.t('countLabel', { count })}
        </button>
      </div>
    </>
  );
}
