import {CityType, OfferType} from '../../types/offer.ts';
import {useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import {MapIcon} from '../../const.ts';
import {useMap} from '../../hooks/use-map.ts';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  city: CityType;
  offers: OfferType[];
  activeCard: OfferType | undefined;
}
const defaultCustomIcon = new Icon(MapIcon.Default);
const currentCustomIcon = new Icon(MapIcon.Active);

export function Map({city, offers, activeCard}: Readonly<MapProps>) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      const bounds: [number, number][] = [];

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(
          activeCard !== undefined && offer.title === activeCard.title
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(markerLayer);

        bounds.push([offer.location.latitude, offer.location.longitude]);
      });

      if (bounds.length > 0) {
        map.fitBounds(bounds, {padding: [20, 20]});
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [activeCard, map, offers]);

  return (
    <div style={{height: '100%'}} ref={mapRef}></div>
  );
}
