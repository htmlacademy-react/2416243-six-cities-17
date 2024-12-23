import './loader.css';
import {CSSProperties} from 'react';

export function Loader() {
  return (
    <div className="overlay">
      <div className="loader">
        {Array.from({ length: 12 }, (_, index) => (
          <div
            key={index}
            className="loader__stick"
            style={{ '--i': index + 1 } as CSSProperties}
          >
          </div>
        ))}
      </div>
    </div>
  );
}
