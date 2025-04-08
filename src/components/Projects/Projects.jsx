import { ProjectCard } from "./ProjectCard"
import projects from "../../data/projects.json"
import styled from "styled-components"

const ProjectsSection = styled.section`
  padding: 60px 40px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const ProjectsTitle = styled.h2`
  font-size: var(--font-size-h2-mob);
  font-family: var(--font-family-headlines);

  @media (min-width: 768px) {
    font-size: var(--font-size-h2-desktop);
  }
`

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`

export const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectsTitle>&lt;FEATURED PROJECTS&gt;</ProjectsTitle>

      <ProjectsWrapper>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            tags={project.tags}
            title={project.title}
            text={project.text}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </ProjectsWrapper>
    </ProjectsSection>
  )
}
