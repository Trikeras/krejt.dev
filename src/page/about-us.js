import React, { useRef, useEffect, memo, CSSProperties } from 'react';
import ReactMarkdown from 'react-markdown'

import './styles.css';

class AboutUs extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    const markdown = `
      ### Mire se vini zhvillues

      **Krejt.dev** eshte komunitet per krejt zhvilluesit:
      programera, dizajnera, muzikant, projekt menaxhera,
      etj.

      Njerzt qe punojne edhe pas ores 6
      `;


    return (
      <div className='messageBox'>
        <ReactMarkdown children={markdown} />
      </div>
    );
  }
}

export default AboutUs;