import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Report = () => {
  const { id } = useParams();
  const [fileData, setFileData] = useState(null);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/files/${id}`);
        setFileData(response.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <Page
          key={`page_${i}`}
          pageNumber={i}
          width={600}
          renderTextLayer={false}
        />
      );
    }
    return pages;
  };

  return (
    <div>
      {fileData && (
        <div>
          <h1>{fileData.name}</h1>
          <p>Date and Time: {fileData.createdAt}</p>
          <Document
            file={fileData.url}
            onLoadSuccess={handleDocumentLoadSuccess}
          >
            {renderPages()}
          </Document>
          <a href={fileData.reportUrl} download={`${fileData.name}_report.pdf`}>
            Download Report
          </a>
        </div>
      )}
    </div>
  );
};

export default Report;
