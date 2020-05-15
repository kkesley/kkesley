import PDFMake from 'pdfmake'
import PDFFonts from 'pdfmake/build/vfs_fonts'

PDFMake.vfs = PDFFonts.pdfMake.vfs

const TITLE_COLOR = '#2a7a87'

const horizontalLine = function (width_percent) {
  width_percent = width_percent === undefined ? 100 : width_percent

  var length = (514 / 100) * width_percent

  var return_obj = {
    margin: [0, 5, 0, 5],
    canvas: [
      {
        type: 'line',
        x1: 0,
        y1: 0,
        x2: length,
        y2: 0,
        lineWidth: 2,
        lineColor: TITLE_COLOR,
      },
    ],
  }

  return return_obj
}

export default ({
  personal_detail,
  careers,
  projects,
  skills,
  educations,
}) => () => {
  PDFMake.createPdf({
    // header: {
    //   columns: [
    //     'Resume - Kendrick Kesley',
    //     {
    //       text: `generated on: ${dayjs().format('DD MMM YYYY HH:mm:ss Z')}`,
    //       alignment: 'right',
    //     },
    //   ],
    //   color: '#808080', //grey
    //   fontSize: 8,
    //   margin: [40, 12, 40, 0],
    // },
    footer: (currentPage, pageCount) => ({
      text: `page ${currentPage.toString()} of ${pageCount}`,
      alignment: 'right',
      color: '#808080', //grey
      fontSize: 8,
      margin: [40, 0, 40, 0],
    }),
    content: [
      //START: TITLE
      {
        stack: [
          { text: personal_detail.name, style: 'intro' },
          horizontalLine(),
          {
            text: [
              personal_detail.location,
              ' | ',
              {
                text: personal_detail.email,
                link: `mailto:${personal_detail.email}`,
                style: 'link',
              },
              ' | ',
              {
                text: 'https://kkesley.com',
                link: 'https://kkesley.com',
                style: 'link',
              },
              ' | ',
              {
                text: 'tel: 0416842836',
              },
            ],
          },
        ],
      },
      //END: TITLE
      //START: CAREER
      {
        stack: [
          { text: 'Career', style: 'header' },
          careers.map((career) => ({
            stack: [
              {
                text: `${career.title} | ${career.company} | ${career.year}`,
                style: 'item_title',
              },
              {
                ul: career.contents.map((content) => content),
              },
            ],
            margin: [0, 0, 0, 12], //BOTTOM: 12 | for every item in careers
          })),
        ],
        margin: [0, 12, 0, 0], //TOP: 12 | for this section
      },
      //END: CAREER
      //START: PROJECTS
      {
        stack: [
          { text: 'Projects', style: 'header' },
          projects.map((project) => ({
            stack: [
              {
                text: `${project.title} | ${project.year}`,
                style: 'item_title',
              },
              {
                ul: project.contents.map((content) => content),
              },
            ],
            margin: [0, 0, 0, 12], //BOTTOM: 12 | for every item in projects
          })),
        ],
        margin: [0, 12, 0, 0], //TOP: 12 | for this section
      },
      //END: PROJECTS
      //START: SKILLS
      {
        stack: [
          { text: 'Skills', style: 'header' },
          skills.map((skill) => ({
            stack: [
              { text: skill.section, style: 'item_title' },
              {
                ul: skill.contents.map((content) => content),
              },
            ],
            margin: [0, 0, 0, 12], //BOTTOM: 12 | for every item in skills
          })),
        ],
        margin: [0, 12, 0, 0], //TOP: 12 | for this section
      },
      //END: SKILLS
      //START: EDUCATION
      {
        stack: [
          { text: 'Education', style: 'header' },
          educations.map((education) => ({
            stack: [
              {
                text: `${education.title} | ${education.year_completion}`,
                style: 'item_title',
              },
              { text: education.university },
            ],
            margin: [0, 0, 0, 12], //BOTTOM: 12 | for every item in education
          })),
        ],
        margin: [0, 12, 0, 0], //TOP: 12 | for this section
      },
      //END: EDUCATION
    ],
    defaultStyle: {
      lineHeight: 1.5,
      fontSize: 11,
    },
    styles: {
      intro: {
        color: TITLE_COLOR,
        fontSize: 25,
        lineHeight: 1,
      },
      header: {
        color: TITLE_COLOR,
        fontSize: 16,
        bold: true,
      },
      item_title: {
        color: '#000000',
        fontSize: 16,
        bold: true,
      },
      link: {
        color: TITLE_COLOR,
        decoration: 'underline',
      },
    },
    info: {
      title: 'Resume - Kendrick Kesley',
      author: 'Kendrick Kesley',
      subject: 'Resume',
      keywords: 'resume kendrick kesley',
    },
  }).download('Resume - Kendrick Kesley')
}
