import { useRef } from "react"
import { Header } from "./components/Header"
import GlobalStyles from "./GlobalStyles"
import { Projects } from "./components/Projects"
// import { Skills } from "./components/Skills"
// import { Contact } from "./components/Contact"
// import { Footer } from "./components/Footer"

export const App = () => {
  const projectsRef = useRef(null)

  return (
    <>
      <GlobalStyles />
      <Header scrollToRef={projectsRef} />
      <Projects ref={projectsRef} />
      {/* <Skills />
      <Contact />
      <Footer /> */}
    </>
  )
}
