import styled from "styled-components"

const SkillsSection = styled.section`
  padding: 100px 40px 120px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #171824;
  color: #ffffff;
`

const SkillsTitle = styled.h2`
  font-size: var(--font-size-h2-mob);
  font-family: var(--font-family-headlines);

  @media (min-width: 768px) {
    font-size: var(--font-size-h2-desktop);
    margin-bottom: 60px;
  }
`

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 100px;
  }
`

const Category = styled.div`
  margin-top: 30px;
`

const CategoryTitle = styled.h3`
  font-size: var(--font-size-h4-mob);
  font-family: var(--font-family-headlines);
  margin-top: 60px;
  margin-bottom: 16px;
`

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`

const SkillsItem = styled.li`
  font-family: var(--font-family-text);

  @media (min-width: 768px) {
    font-size: var(--font-size-medium);
  }
`

export const Skills = () => {
  return (
    <SkillsSection>
      <SkillsTitle>&lt;SKILLS & TECH&gt;</SkillsTitle>

      <SkillsWrapper>
        <Category>
          <CategoryTitle>CODE</CategoryTitle>
          <SkillsList>
            <SkillsItem>JavaScript (ES6+)</SkillsItem>
            <SkillsItem>React (JSX, HOOKS)</SkillsItem>
            <SkillsItem>API's</SkillsItem>
            <SkillsItem>Node.js</SkillsItem>
            <SkillsItem>MongoDB</SkillsItem>
            <SkillsItem>HTML5</SkillsItem>
            <SkillsItem>CSS3</SkillsItem>
            <SkillsItem>Flexbox</SkillsItem>
            <SkillsItem>Grid</SkillsItem>
            <SkillsItem>Tailwind CSS</SkillsItem>
            <SkillsItem>Styled Components</SkillsItem>
          </SkillsList>
        </Category>

        <Category>
          <CategoryTitle>TOOLS</CategoryTitle>
          <SkillsList>
            <SkillsItem>GitHub</SkillsItem>
            <SkillsItem>Git</SkillsItem>
            <SkillsItem>Netlify</SkillsItem>
            <SkillsItem>Render</SkillsItem>
            <SkillsItem>Postman</SkillsItem>
            <SkillsItem>Figma</SkillsItem>
            <SkillsItem>Slack</SkillsItem>
          </SkillsList>
        </Category>

        <Category>
          <CategoryTitle>METHODS</CategoryTitle>
          <SkillsList>
            <SkillsItem>Agile methodology</SkillsItem>
            <SkillsItem>Mob-programming</SkillsItem>
            <SkillsItem>Pair-programming</SkillsItem>
            <SkillsItem>Code reviews</SkillsItem>
          </SkillsList>
        </Category>

        <Category>
          <CategoryTitle>UX</CategoryTitle>
          <SkillsList>
            <SkillsItem>Design Thinking</SkillsItem>
            <SkillsItem>Prototyping</SkillsItem>
            <SkillsItem>Web Accessibility</SkillsItem>
          </SkillsList>
        </Category>
      </SkillsWrapper>
    </SkillsSection>
  )
}
