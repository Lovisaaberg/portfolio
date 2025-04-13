import { Header } from "./components/Header"
import { Projects } from "./components/Projects/Projects"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import GlobalStyles from "./GlobalStyles"

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  )
}
