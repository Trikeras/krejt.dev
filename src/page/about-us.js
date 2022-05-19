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

**Krejt.dev** eshte komunitet per gjithe zhvilluesit: programeret, dizajneret, muzikantet, projekt menaxheret, biznismenet, marketuesit, shitesit, e shume role tjera -- qe se bashku _mund_ te realizojne projekte qe sjellin benefite shoqerise. _(and makes 'em founders filthy rich)_

Ky komunitet fillon nga nevoja personale me kontaktu dhe me u njoftu me individ qe kane backgrounds te ndryshem per me bashkepunu. Sepse menyra e tanishme, me shkru ne dhjetera e qindra grupe ne Facebook, pos qe nuk eshte efikase, njerzit e duhur rralle i shohin postimet.

Ideja per **Krejt.dev** eshte te organizohemi ne nen-grupe si: grupi i administratoreve te linux-it, programereve te Java-se (si dhe te qdo gjuhe tjeter programuese), te eksperteve te rrjetave, dizajnereve, e keshtu me rradhe. 

Dhe nese nje ide pershkon disa nga keto grupe, ju keni qasje ne ekspertizen e qdo grupi qe te realizosh idene tende.

Qe kjo te realizohet na duhesh **ti**. Nese ke interes ne nje fushe, le te themi Golang. Ateher, bashkohu ne komunitet, krijo grupin per #Golang dhe fto te tjere te interesuar ne kete teknologji.

Nese **Krejt.dev** behet komuniteti qe nderlidhe te gjitha fushat, ateher kemi:

* Bashkepunime ne zhvillimin e projekteve qe mund te zhvillojne boten
* Largojme barrierat per te komunikuar mes nesh
* Njoftohemi dhe perkrahim njeri tjetrin ne karriere, duke ofruar dhe lajmeruar per mundesite qe shohim
* Mundesi per studente te ekspozohen dhe te iu ofrohen mundesi punesimi

"A jam i duhuri per tu bashkuar ne Krejt.dev?" - Nese je zhvillues dhe deshiron te zhvillosh projekte personale me te tjere pas punes, ti je i duhuri. Nese ke interes per nje fushe dhe deshiron te qendrosh ne rrjedha me mundesite ne ate fushe, je i mireseardhur. Nese ke ekspertize ne nje fushe, dhe deshiron te krijosh nje komunitet rreth asaj fushe, gjithashtu ti je i duhuri. Nese je student dhe deshiron te kontaktosh dhe te perfitosh nga pervojat e tjereve ne industri, bashkohu! 

Ndersa nese keni pyetje qe mund te gjeni pergjigjjet ne google, por nuk dini te perdorni ate, ose nuk dini anglishte, ky grup nuk eshte per ty -- ka grupe tjera qe jane pikenisje me e pershtatshme per ty.

Komuniteti i jone ndodhet ne Slack tek krejt.slack.dev. Bashkohu duke vizituar kete link ["Merr nje ftese per krejt.slack.dev"](https://join.slack.com/t/krejt/shared_invite/zt-16lpcsiwl-SFZaa9Nf2Zx7kVRvBBSb8Q)
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