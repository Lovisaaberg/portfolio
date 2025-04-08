import styled from "styled-components"
import ButtonComponent from "../Navigation/Button"

const CardContainer = styled.div`
  width: 240px;

  &:hover {
    transform: scale(1.05);
  }
`

const Image = styled.img`
  width: 240px;
  height: 240px;

  @media (min-width: 768px) {
    width: 479px;
    height: 479px;
  }
`
const Content = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`

const Tag = styled.span`
  background-color: #eee;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

const Text = styled.p`
  font-size: 14px;
  color: #444;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
`
export const ProjectCard = ({
  image,
  tags,
  title,
  text,
  demoUrl,
  githubUrl,
}) => {
  return (
    <CardContainer>
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
