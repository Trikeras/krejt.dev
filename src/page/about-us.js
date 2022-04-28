import React, { useRef, useEffect, memo, CSSProperties } from 'react';
import ReactMarkdown from 'react-markdown'

import './styles.css';

class AboutUs extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    const markdown = `
# Mire se vini zhvillues

**Krejt.dev** eshte komunitet per krejt zhvilluesit: programera, dizajnera, muzikant, projekt menaxhera etj.

Qellimi i krejt neve eshte qe te nxitet bashkepunimi, krejt kjo duke e lehtesu komunikimin mes krejtve.
Krejt do te kemi slack channels per cfardo lemi qe na intereson si per shembull: java, nodejs, kubernetes, react, javacsript, business, events, applications, design dhe cfardoe tjeter qe do te na lehtesonte komunikimin kshtuqe edhe bashkepunimin mes nesh.

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