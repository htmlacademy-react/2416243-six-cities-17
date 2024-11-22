import {MainPage} from '../../pages/main-page/main-page.tsx';

interface AppProps {
  cityCount: number;
}

export function App({cityCount}: Readonly<AppProps>) {
  return (
    <MainPage cityCount={cityCount}/>
  );
}
