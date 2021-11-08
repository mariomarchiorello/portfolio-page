import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import cv from '../../Assets/CV_EN.pdf';
import { Background } from '../../Styles/globalstyle';

function Cv() {
  //  const [numPages, setNumPages] = useState(null)
  // const [pageNumber, setPageNumber] = useState(1)

  return (
    <>
      <Background>
        <Document file={cv}>
          <Page pageNumber={1} />
        </Document>
      </Background>
    </>
  );
}

export default Cv;
