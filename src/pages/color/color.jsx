import React from 'react'
import Link from 'gatsby-link'

import Markdown from 'react-markdown'


import ExamplePageHeader from '../../components/example-page-header/example-page-header';
import ExampleSection from '../../components/example-section/example-section-component';
import DoContainer from '../../components/example-do-container/example-do-container';
import DoItem from '../../components/example-do-item/example-do-item';
import DoItemComponent from '../../components/example-do-item/example-do-item-component';

import Button from '../../components/component-button/button';

import styles from './style.module.scss';

// import Text from './_test_color_text.md';


const ColorPage = () => (
  <div>

    <ExamplePageHeader pageModified="January 1, 1999" pageTitle="Color">
      <p>xxxxxx</p>
    </ExamplePageHeader>



    {/* UI Environments           */}
    {/* ========================= */}
    <ExampleSection title="UI Colors">
      <p className={styles.textLarge}>xxxxx</p>

      <DoContainer>
        <DoItem  type="yep" text="Do use the Light Environment for most interfaces" />
        <DoItem text="Do use the Dark Environment for immersive content experiences" type="yep" />
      </DoContainer>

      <p className={styles.textLarge}>ssssss</p>
      <p className={styles.textLarge}>sssss</p>
       <p className={"uni-pad--two--horiz " + styles.textLarge }><strong>Light Environment</strong> sssss</p>
      <p className={"uni-pad--two--horiz " + styles.textLarge }><strong>Dark Environment</strong> sssss</p>
      <p className={styles.textLarge}>xxxxxxxxx</p>
    </ExampleSection>



    {/* Switching Environments    */}
    {/* ========================= */}
    <ExampleSection>
      <h3 className="uni-subhead uni-margin--one--btm">Switching Environments</h3>
      <p className={styles.textLarge}>xxxxx</p>
      <p className={styles.textLarge}>xxxxx</p>
      <DoContainer>
        <DoItem text="Do switch environments when entering a different mode" type="yep" />
        <DoItem text="Do not switch environments for regions belonging to the main interface" type="nope" />
      </DoContainer>
      <p className={styles.textLarge}>xxxx</p>
      <p className={styles.textLarge}>xxxx</p>
    </ExampleSection>


    {/* Environment Levels        */}
    {/* ========================= */}
    <ExampleSection>
      <h3 className="uni-headline--2 uni-margin--one--btm">Environment Levels</h3>
      <p className={styles.textLarge}>xxxx</p>
    </ExampleSection>




    {/* Test        */}
    {/* ========================= */}
    <ExampleSection>
      <h3 className="uni-headline--2 uni-margin--one--btm">Test with components</h3>
      <DoContainer>
        <DoItemComponent text="This is a great button" type="yep">
          <Button type="primary" text="button is great" />
        </DoItemComponent>

        <DoItemComponent text="This is a terrible button" type="nope">
          <Button type="danger" text="button is poop" />
        </DoItemComponent>

      </DoContainer>

      <div>
        Trying to use react-markdown to write markdown within a jsx file. Does not work. Sigh.
        <Markdown>
        {`
          # Hello

          poop markdown
        `}
        </Markdown>
      </div>

    </ExampleSection>


  </div>
)

export default ColorPage
