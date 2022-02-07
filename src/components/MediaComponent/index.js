import React from "react";
import styled from "styled-components";

const MediaComponent = () => {
  return (
    <Container>
      <Video>
        <iframe
          src="https://www.youtube.com/embed/XHB7oDU28Z0"
          title="San Pietro in Bevagna | 4K | Dji Mavic Pro 2 Drone"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Video>
    </Container>
  );
};

export default MediaComponent;

const Container = styled.div`
  width: 80rem;
  max-width: 90%;
  margin: 0 auto;
  padding: 3rem 0 7rem;
`;
const Video = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;
