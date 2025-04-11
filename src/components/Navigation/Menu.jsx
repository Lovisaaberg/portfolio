import styled from "styled-components"

const MenuWrapper = styled.ul`
  display: none;

  @media (min-width: 768px) {
    list-style: none;
    display: flex;
    font-family: var(--font-family-text);
    font-size: var(--font-size-medium);
    color: var(--text-color-primary);
    margin-bottom: 60px;
    gap: 36px;
    justify-content: flex-end;
    width: 100%;
  }
`

const MenuLink = styled.li`
  @media (min-width: 768px) {
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #8d72f8;
    }
  }
`

export const Menu = ({ scrollToSection }) => {
  return (
    <MenuWrapper>
      <MenuLink onClick={() => scrollToSection("projects")}>.Projects</MenuLink>
      <MenuLink onClick={() => scrollToSection("skills")}>
        .Skills & Tech
      </MenuLink>
      <MenuLink onClick={() => scrollToSection("contact")}>.Contact</MenuLink>
    </MenuWrapper>
  )
}
