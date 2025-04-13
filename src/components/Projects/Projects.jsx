import React, { useState } from "react"
import { ProjectCard } from "./ProjectCard"
import projects from "../../data/projects.json"
import styled from "styled-components"
import chevron from "../../assets/icons/chevron.png"

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

const ShowMoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  cursor: pointer;

  & img {
    width: 48px;
    height: 48px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: translateY(5px);
  }

  & .text {
    margin-bottom: 8px;
    font-size: var(--font-size-text-mob);
    font-family: var(--font-family-text);

    @media (min-width: 768px) {
      font-size: var(--font-size-medium);
    }
  }
`

export const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(5)

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 5)
  }
  return (
    <ProjectsSection>
      <ProjectsTitle>&lt;FEATURED PROJECTS&gt;</ProjectsTitle>

      <ProjectsWrapper>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={project.id}
            image={project.image || "defaultImage.png"}
            tags={project.tags}
            title={project.title}
            text={project.text}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
            reverseOrder={index % 2 === 0}
          />
        ))}
      </ProjectsWrapper>

      {visibleProjects < projects.length && (
        <ShowMoreWrapper
          onClick={handleShowMore}
          aria-label="Show more projects"
        >
          <span className="text">Show More Projects...</span>
          <img src={chevron} alt="Show more" />
        </ShowMoreWrapper>
      )}
    </ProjectsSection>
  )
}
