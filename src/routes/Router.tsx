import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AllRoutes from '@enums/AllRoutes';
import Feed from '@pages/Feed/Feed';
import Post from '@pages/Post/Post';
import UserProfile from '@pages/UserProfile/UserProfile';
import ContentWrapper from '@components/ContentWrapper';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AllRoutes.Feed} element={<ContentWrapper />}>
        <Route index element={<Feed />} />
        <Route path={AllRoutes.Post} element={<Post />} />
        <Route path={AllRoutes.UserProfile} element={<UserProfile />} />
      </Route>

      <Route path="*" element={<Navigate to={AllRoutes.Feed} />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
