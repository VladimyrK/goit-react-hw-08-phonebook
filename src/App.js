import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import AppBar from './components/AppBar';
import Container from './components/Container';
import HomePage from 'pages/HomePage';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

export default function App() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Container>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Container>
    </Suspense>
  );
}
