import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import cv from '../../Assets/CV_EN.pdf';
import {BackgroundCV} from "./styles";

function Cv() {
  //  const [numPages, setNumPages] = useState(null)
  // const [pageNumber, setPageNumber] = useState(1)

  return (
    <>
      <BackgroundCV>
          <div className={"container"}>

        <Document file={cv}>
          <Page width={700} pageNumber={1} />
        </Document>
          </div>
      </BackgroundCV>
    </>
  );
}

export default Cv;
