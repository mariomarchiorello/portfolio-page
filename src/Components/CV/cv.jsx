import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import cv from '../../Assets/CV_EN.pdf';
import { BackgroundCV } from './styles';

function Cv() {
  //  const [numPages, setNumPages] = useState(null)
  // const [pageNumber, setPageNumber] = useState(1)

  return (
    <>
      <BackgroundCV>
        <div className={'container'}>
          <Document file={cv}>
            {window.innerWidth <= 480 ? (
              <Page scale={0.8} width={500} pageNumber={1} />
            ) : (
              <Page scale={0.8} width={900} pageNumber={1} />
            )}
          </Document>
        </div>
      </BackgroundCV>
    </>
  );
}

export default Cv;
