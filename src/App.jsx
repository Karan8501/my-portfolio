import AnchorLinks from './components/AnchorLinks/AnchorLinks';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Connect from './components/Connect/Connect';
import Projects from './components/Projects/Projects';
import WhoAmI from './components/WhoAmI/WhoAmI';
import SkillsSection from './components/Skills/Skills';
const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhoAmI />
        <Projects />
        <SkillsSection />
        <Connect />
        <AnchorLinks />

      </main>
      <Footer />

    </>
  );
};

export default App;
