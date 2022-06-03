import React from 'react';
import TitleH3 from "../../../../../ui/TitleH3/TitleH3";
import styled from "styled-components";
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import theme from "../../../../../styles/theme";
import TitleH4 from "../../../../../ui/TitleH4/TitleH4";
import Paragraph from "../../../../../ui/Paragraph/Paragaph";

const StyledCloudsCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  grid-area: clouds;
`

const StyledProgressBar = styled.div`
  display: flex;
  margin-top: 10px;
  svg {
    max-width: 120px;
    margin-right: 30px;
  }
  h4 {
    margin-bottom: 5px;
  }
  @media ${({theme}) => theme.media.tablet} {
    svg {
      width: 350px;
    }
  }
  @media ${({theme}) => theme.media.intermediate} {
    svg {
      max-width: 100px;
    }
  }

`

interface IProps {
    cloudsPercent: number
}

const CloudsCard = ({cloudsPercent}: IProps) => {
    let cloudsTypeTitle;
    let cloudsTypeParagraph;
    if (cloudsPercent <= 10) {
        cloudsTypeTitle = "Not cloudy";
        cloudsTypeParagraph = "There are no clouds or they are almost absent. Sky is clear"
    }
    else if (cloudsPercent <= 50 && cloudsPercent > 10) {
        cloudsTypeTitle = "A little cloudy";
        cloudsTypeParagraph = "In some places the sky is covered with clouds."
    }
    else  {
        cloudsTypeTitle = "Cloudy";
        cloudsTypeParagraph = "The sky is almost completely or completely covered with clouds"
    }
    return (
        <StyledCloudsCard>
            <TitleH3 fontSize={theme.fontSize.large}>Clouds</TitleH3>
            <StyledProgressBar>
                <CircularProgressbar value={cloudsPercent} text={`${cloudsPercent}%`}/>
                <span>
                    <TitleH4>{cloudsTypeTitle}</TitleH4>
                    <Paragraph>{cloudsTypeParagraph}</Paragraph>
              </span>
            </StyledProgressBar>
        </StyledCloudsCard>
    );
};

export default CloudsCard;