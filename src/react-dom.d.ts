declare module 'react-dom' {
  export function flushSync(callback: () => void): void;
  export function flushSync<R>(callback: () => R): R;
}