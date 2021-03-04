import React from "react";
import styled from "styled-components";
import { themeLight, themeDark } from "components/library";

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 5;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  padding: ${(p) => p.theme.lenMd3};
  transform: translateX(${(p) => (p.isOpen ? 0 : "100%")});
  background: ${(p) => p.theme.colorCardBackground};

  transition: transform 0.35s;
`;

const StyledHeader = styled.div`
  color: ${(p) => p.theme.colorText};
  font-size: ${(p) => p.theme.lenMd3};
  margin-bottom: ${(p) => p.theme.lenMd3};
`;

const StyledSection = styled.div`
  color: ${(p) => p.theme.colorLabel};
  margin-bottom: ${(p) => p.theme.lenSm3};
`;

const StyledThemesWrapper = styled.div`
  display: flex;
`;

const StyledTheme = styled.button`
  flex: 0 0 ${(p) => p.theme.lenLg1};
  display: flex;
  width: ${(p) => p.theme.lenLg1};
  height ${(p) => p.theme.lenLg1};
  margin-right: ${(p) => p.theme.lenSm3};
`;

const StyledThemePrimary = styled.div`
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  height: 100%;
  width: 50%;
  background: ${(p) => p.background};
`;

const StyledThemeAccent = styled.div`
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  height: 100%;
  width: 50%;
  background: ${(p) => p.background};
`;

const Wrapper = ({
  isSettingsOpen,
  setSettingsOpen,
  isDarkTheme,
  setTheme,
}) => {
  return (
    <StyledWrapper isOpen={isSettingsOpen}>
      <StyledHeader>Settings</StyledHeader>
      <StyledSection>Theme</StyledSection>

      <StyledThemesWrapper>
        <StyledTheme onClick={() => setTheme(themeLight)}>
          <StyledThemePrimary background={themeLight.colorBackground} />
          <StyledThemeAccent background={themeLight.colorPrimary} />
        </StyledTheme>
        <StyledTheme onClick={() => setTheme(themeDark)}>
          <StyledThemePrimary background={themeDark.colorBackground} />
          <StyledThemeAccent background={themeDark.colorPrimary} />
        </StyledTheme>
      </StyledThemesWrapper>
    </StyledWrapper>
  );
};

export default Wrapper;
