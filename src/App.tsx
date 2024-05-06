
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from '@components/Layout/Layout';
import { AppRouter } from '@enums/router'
import { RedirectionConfig } from '@router/RedirectionConfig';

const Characters = lazy(() => import('@pages/Characters/Characters'))
const Episodes = lazy(() => import('@pages/Episodes/Episodes'))
const Locations = lazy(() => import('@pages/Locations/Locations'))
const NotFound = lazy(() => import('@pages/NotFound/NotFound'))

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<RedirectionConfig />}/>
        <Route path={AppRouter.CHARACTERS} element={<Characters />}/>
        <Route path={AppRouter.EPISODES} element={<Episodes />}/>
        <Route path={AppRouter.LOCATIONS} element={<Locations />}/>
        <Route path={AppRouter.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
