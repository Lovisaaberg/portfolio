import styled from "styled-components"
import ButtonComponent from "../Navigation/Button"

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 1023px) {
    flex-direction: ${({ $reverseOrder }) =>
      $reverseOrder ? "row-reverse" : "row"};
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    align-items: center;
    gap: 60px;
  }
`

const Image = styled.img`
  width: 240px;
  height: 240px;

  @media (min-width: 621px) {
    width: 400px;
    height: 400px;
  }

  @media (min-width: 1280px) {
    width: 479px;
    height: 479px;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 620px;

  @media (min-width: 1024px) {
    text-align: left;
    align-items: flex-start;
  }
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 30px 0px 30px 0px;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: start;
  }
`

const Tag = styled.span`
  background-color: #ffffff;
  padding: 2px 4px;
  border: 1px solid #000000;
  border-radius: 4px;
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-headlines);

  @media (min-width: 768px) {
    padding: 2px 8px;
  }
`

const Title = styled.h3`
  font-size: var(--font-size-h3-mob);
  font-weight: bold;
  font-family: var(--font-family-headlines);
  margin-bottom: 16px;
`

const Text = styled.p`
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-text);
  color: var(--text-color-secondary);
  margin-bottom: 30px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`

export const ProjectCard = ({
  image,
  tags,
  title,
  text,
  demoUrl,
  githubUrl,
  reverseOrder = false,
}) => {
  return (
    <CardContainer $reverseOrder={reverseOrder}>
      <Image src={image} alt={title} />

      <Content>
        <TagContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>

        <Title>{title}</Title>
        <Text>{text}</Text>

        <ButtonWrapper>
          <ButtonComponent
            label="Live Demo"
            variant="primary"
            onClick={() => window.open(demoUrl, "_blank")}
          />

          <ButtonComponent
            label="View Code"
            variant="secondary"
            onClick={() => window.open(githubUrl, "_blank")}
          />
        </ButtonWrapper>
      </Content>
    </CardContainer>
  )
}
