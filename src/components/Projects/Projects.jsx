import { ProjectCard } from "./ProjectCard"
import projects from "../../data/projects.json"
import styled from "styled-components"

const ProjectsSection = styled.section`
  padding: 100px 40px 120px 40px;
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
    margin-bottom: 80px;
  }
`

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`

export const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectsTitle>&lt;FEATURED PROJECTS&gt;</ProjectsTitle>

      <ProjectsWrapper>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            tags={project.tags}
            title={project.title}
            text={project.text}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
            reverseOrder={index % 2 === 0}
          />
        ))}
      </ProjectsWrapper>
    </ProjectsSection>
  )
}
