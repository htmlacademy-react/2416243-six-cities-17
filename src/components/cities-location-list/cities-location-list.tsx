import {store} from '../../store';
import {Cities} from '../../const.ts';
import {CityType} from '../../types/offer.ts';
import {Link} from 'react-router';

interface CitiesLocationListProps {
  onCityLocationClick: (city: CityType) => void;
}

export function CitiesLocationList({onCityLocationClick}: Readonly<CitiesLocationListProps>) {
  const currentCity = store.getState().city.name;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(Cities).map((city) => (
            <li className="locations__item" key={city.name} onClick={() => {
              onCityLocationClick(city);
            }}
            >
              <Link className={`locations__item-link tabs__item ${currentCity === city.name ? 'tabs__item--active' : ''}`} to={''}>
                <span>{city.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
