import { FC } from 'react';

import Button from '../button';

type Props = {
  children?: React.ReactNode;
};

export const LocationInfo: FC<Props> = () => {
  const mapsLink =
    typeof window === 'undefined' || /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent)
      ? process.env.NEXT_PUBLIC_APPLE_MAPS_LINK
      : process.env.NEXT_PUBLIC_GOOGLE_MAPS_LINK;

  return (
    <div>
      <div className="text-center text-3xl mb-8 w-56 m-auto">
        <a href={mapsLink}>
          <span className="block">32062 Pleasant Glen</span>
          <span className="block">Trabuco Canyon, CA 92679</span>
        </a>
      </div>
      <div className="text-center mb-8">
        <Button href={mapsLink}>Get directions</Button>
      </div>
    </div>
  );
};

export default LocationInfo;
