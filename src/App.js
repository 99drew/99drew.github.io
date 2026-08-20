import { useEffect } from 'react';
import Header from './components/header.js';
import Body from './components/body.js';
import Footer from './components/footer.js';
import BackgroundArt from './components/backgroundArt.js';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext.js';
// eslint-disable-next-line
import Style from './css/style.css';

function HtmlLangSync() {
  const { lang } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  }, [lang]);
  return null;
}

function App() {
  return (
    <LanguageProvider>
      <HtmlLangSync />
      <Header />
      <div className="bg-art-root">
        <BackgroundArt />
        <Body />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
