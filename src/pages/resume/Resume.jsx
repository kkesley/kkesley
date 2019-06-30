import React, { memo } from 'react'
import Helmet from 'react-helmet'
import PDFMake from 'pdfmake'
import PDFFonts from "pdfmake/build/vfs_fonts";

import Banner from './Banner'
import Career from './Career'
import Project from './Project'
import Skill from './Skill'
import Education from './Education'

import content from './content'

PDFMake.vfs = PDFFonts.pdfMake.vfs;

const downloadResume = () => {
  PDFMake.createPdf({
    content: [
      'First paragraph',
      'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
    ]
  }).download('Resume - Kendrick Kesley');
}

const Resume = () => {
  return (
    <div id="page__project-list">
        <Helmet>
            <title>Résumé - Kendrick Kesley</title>
            <link rel="canonical" href="https://kkesley.com/resume" />
            <meta property="og:url" content="https://kkesley.com/resume"/>
            <meta name="description" content="Grab my latest résumé." />
            <meta property="og:description" content="Grab my latest résumé." />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Résumé - Kendrick Kesley" />
            <meta property="og:image" content="https://avatars3.githubusercontent.com/u/14907878?s=40&v=4" />
        </Helmet>
        <Banner downloadResume={downloadResume} content={content} />
        <Career content={content} />
        <Project content={content} />
        <Skill content={content} />
        <Education content={content} />
    </div>
  );
}

export default memo(Resume);
