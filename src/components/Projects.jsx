import { forwardRef } from "react"
import styled from "styled-components"

const ProjectsSection = styled.section`
  padding: 60px 40px;
  height: 100vh;
`

const ProjectsTitle = styled.h2`
  font-size: var(--font-size-h2-mob);
  font-family: var(--font-family-headlines);

  @media (min-width: 768px) {
    font-size: var(--font-size-h2-desktop);
  }
`

export const Projects = forwardRef((props, ref) => {
  return (
    <ProjectsSection ref={ref}>
      <ProjectsTitle>&lt;FEATURED PROJECTS&gt;</ProjectsTitle>
    </ProjectsSection>
  )
})
