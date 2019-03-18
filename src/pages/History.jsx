import React from 'react';

import { withTranslation } from 'react-i18next';
import '../styles/index.scss';
import Quote from '@twal/components/ui/Quote';
import OneFourthLayout from '@twal/components/layouts/OnFourthLayout';
// import ColumnLayout from '@twal/components/layouts/ColumnLayout';
import Scrollable from '@twal/components/ui/Scrollable';

const Left = () => (
  <Scrollable>
    <article className="panel text-panel">
      <h1>Histoire</h1>
      <p>Qu'est ce que twal ?</p>
      <p>
        Iamque lituis cladium concrepantibus internarum non celate ut antea turbidum saeviebat
        ingenium a veri consideratione detortum et nullo inpositorum vel conpositorum fidem
        sollemniter inquirente nec discernente a societate noxiorum insontes velut exturbatum e
        iudiciis fas omne discessit, et causarum legitima silente defensione carnifex rapinarum
        sequester et obductio capitum et bonorum ubique multatio versabatur per orientales
        provincias, quas recensere puto nunc oportunum absque Mesopotamia digesta, cum bella
        Parthica dicerentur, et Aegypto, quam necessario aliud reieci ad tempus.
      </p>
      <p>
        Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae
        multiplices et siquae alites capi per aucupium possint, et plerosque mos vidimus frumenti
        usum et vini penitus ignorantes.
      </p>
      <Quote author="gaetan">ghostbuster to rule them all yop hi lol</Quote>
      <Paraph />
      <Paraph />
      <Paraph />
      <Paraph />
      <Paraph />
      <Paraph />
      <Paraph />
      <Paraph />
      <p>fin du paragraphe</p>
    </article>
  </Scrollable>
);

const Paraph = () => (
  <p>
    Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae
    multiplices et siquae alites capi per aucupium possint, et plerosque mos vidimus frumenti usum
    et vini penitus ignorantes.
  </p>
);

const Right = () => (
  <article className="panel text-panel">
    <img src="imgs/twal.svg" alt="logo" />
    <p style={{ textAlign: 'center', margin: '45px 0' }}>Salut</p>
    <Quote author="gaetan">ghostbuster to rule them all yop hi lol</Quote>
    <Paraph />
    <Paraph />
    <Paraph />
    <Paraph />
    <Paraph />
    <Paraph />
    <Paraph />
    <Paraph />
    <Paraph />
    <p>fin du paragraphe</p>
  </article>
);
const Small = () => (
  <Scrollable>
    <Right />
  </Scrollable>
);

const History = ({ t }) => (
  <>
    {/* <OneThirdLayout Small={Small} Big={Left} smallFirst={true} /> */}
    <OneFourthLayout Small={Small} Big={Left} />
  </>
  // <ColumnLayout>
  //   <Left />
  //   <Scrollable>
  //     <ColumnLayout classNames="panel">
  //       <Right />
  //       <Right />
  //     </ColumnLayout>
  //   </Scrollable>
  // </ColumnLayout>
);

export default withTranslation()(History);
