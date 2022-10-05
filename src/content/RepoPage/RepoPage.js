import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Button } from '@carbon/react';
import pdf from '../../Data/NGR_CV_Msc.pdf';
import { saveAs } from 'file-saver';

const RepoPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const saveFile = () => {
    saveAs(pdf, 'CV_NGR.pdf');
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Button onClick={saveFile}>download</Button>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
        <Page pageNumber={2} />
        <Page pageNumber={3} />
        <Page pageNumber={4} />
      </Document>
      {/* <p>
        Page {pageNumber} of {numPages}
      </p> */}
    </div>
  );
};

export default RepoPage;
