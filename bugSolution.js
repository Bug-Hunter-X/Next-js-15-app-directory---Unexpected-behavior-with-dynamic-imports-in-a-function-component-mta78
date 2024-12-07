```javascript
// pages/index.js
import { Suspense, lazy } from 'react';

const DynamicComponent = lazy(() => import('./dynamic'));

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </Suspense>
    </div>
  );
}
```