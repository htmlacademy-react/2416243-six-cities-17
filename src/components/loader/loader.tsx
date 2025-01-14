import './loader.css';
import {CSSProperties} from 'react';
import {useAppSelector} from '../../hooks';

export function Loader() {
  const loader = useAppSelector((state) => state.isDataLoading);

  return loader
    ? (
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
    )
    : null;
}
