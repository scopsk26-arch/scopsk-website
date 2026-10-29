import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {ThemeProvider} from '@/context/ThemeContext';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {HomePage} from '@/pages/HomePage';
import {PrivacyPage} from '@/pages/PrivacyPage';
import {TermsPage} from '@/pages/TermsPage';
import {AccountDeletionPage} from '@/pages/AccountDeletionPage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route
                path="/account-deletion"
                element={<AccountDeletionPage />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
