import React, { useRef, useEffect, memo, CSSProperties } from 'react';
import ReactMarkdown from 'react-markdown'

import './styles.css';

class AboutUs extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    const markdown = `
### Mire se vini zhvillues!

**Krejt.dev** eshte komunitet per gjithe zhvilluesit: programeret, dizajneret, muzikantet, projekt menaxheret, biznismenet, marketuesit, shitesit, e shume role tjera qe se bashku _mund_ te realizojne projekte qe sjellin benefite shoqerise. _(and makes 'em founders filthy rich)_

Ky komunitet fillon nga nevoja personale me kontaktu edhe me u njoftu me individe qe kane backgrounds te ndryshem edhe me mujt me fillu projekte se bashku. Menyra e tanishme, me shkru ne dhjetera e qindra grupe ne Facebook, pos qe nuk eshte efikase, njerzit e duhur rralle shohin postimet.

Ideja per **Krejt.dev** eshte te organizohemi ne nen-grupe si p.sh.: grupi i administratoreve te linux-it, programereve te Java-se (si dhe te qdo gjuhe tjeter programuese), te eksperteve te rrjetave, dizajnereve. Dhe nese nje ide pershkon disa nga keto grupe, personi me ide mund te merr nga ekspertiza e qdo grupi qe te realizoj idene e tije.

Po qe kjo te realizohet na duhesh **Ti**. Nese je ekspert ne nje fushe, le te themi Golang. Ateher, bashkohu ne komunitet, krijo grupin per #Golang dhe fto te tjere te interesuar ne kete teknologji.

Nese **Krejt.dev** behet komuniteti qe nderlidhe te gjitha fushat, ateher kemi:

* Bashkpunim ne zhvillimin e projekteve qe mund te zhvillojne boten
* Largojme  barrierat per te komunikuar me ekspert ne fusha te ndryshme
* Njoftohemi dhe perkrahim njeri tjetrin ne karriere, duke ofruar dhe lajmeruar per mundesite qe shohim
* Mundesi per studente te ekspozohen dhe te ju ofrohen mundesi punesimi

"A jam i duhuri per tu bashkuar ne Krejt.dev?" - Nese je ekspert qe interesohesh te zhvillosh projekte personale me te tjere pas punes, ateher ti je i duhuri. Nese, ke nje ide dhe te holla dhe kerkon eksperte qe te ndihmojne ne realizimin e saj. Gjithashtu, je i duhuri. Nese te intereson nje fushe dhe deshiron te qendrosh ne rrjedha me mundesite per ate fushe, ateher je i mireseardhur. Ndersa, nese keni probeleme per te kuptuar anglishten, dhe deshironi te beni pytje qe zgjidhjet gjenden me nje google search, ateher jo, ky grup nuk eshte per individe te tille.

Komuniteti i jone ndodhet vetem ne Slack. Mund te bashkohesh duke shkuar ne kete link ["Get an invite to krejt.slack.dev"](https://join.slack.com/t/krejt/shared_invite/zt-16lpcsiwl-nedKbfY9EFd4eGdZm22U3w)
`;


    return (
      <div className='messageBoxWrapper'>
        <div className='messageBox'>
          <ReactMarkdown children={markdown} />
        </div>
      </div>
    );
  }
}

export default AboutUs;