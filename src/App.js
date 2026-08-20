import Header from './components/header.js';
import Body from './components/body.js';
import Footer from './components/footer.js';
import BackgroundArt from './components/backgroundArt.js';
// eslint-disable-next-line
import Style from './css/style.css';


function App() {
  return (
    <>
      <Header />
      <div className="bg-art-root">
        <BackgroundArt />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
