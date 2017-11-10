import React from 'react'
import Link from 'gatsby-link'


import ExamplePageHeader from '../../components/example-page-header/example-page-header';
import ExampleSection from '../../components/example-section/example-section-component';
import DoContainer from '../../components/example-do-container/example-do-container';
import DoItem from '../../components/example-do-item/example-do-item';
import DoItemComponent from '../../components/example-do-item/example-do-item-component';

import Button from '../../components/component-button/button';

import styles from './style.module.scss';


const ColorPage = () => (
  <div>

    <ExamplePageHeader pageModified="January 1, 1999" pageTitle="Color">
      <p>This page recreates a design.hudl page, using components and code rather than markdown. The purpose is allow team members to compare and contrast a couple of authoring possibilities within Gatsby to understand and decide what is most important to us, overall.</p>
    </ExamplePageHeader>



    {/* UI Environments           */}
    {/* ========================= */}
    <ExampleSection title="UI Colors">
      <p className={styles.textLarge}>An environment can be thought of as a set of UI Colors designed for specific interface experiences. Our system currently has two environments: Light and Dark.</p>

      <DoContainer>
        <DoItem  type="yep" text="Do use the Light Environment for most interfaces" />
        <DoItem text="Do use the Dark Environment for immersive content experiences" type="yep" />
      </DoContainer>

      <p className={styles.textLarge}>The Light Environment is our default environment and suitable for most Hudl interfaces. Light Environment characteristics are intended to be smart, reliable and understated.</p>
      <p className={styles.textLarge}>The Dark Environment is a secondary environment and suitable for focused, immersive content experiences.</p>
       <p className={"uni-pad--two--horiz " + styles.textLarge }><strong>Light Environment</strong> (LE) — browsing experiences for everyday work [such as: viewing, managing information]</p>
      <p className={"uni-pad--two--horiz " + styles.textLarge }><strong>Dark Environment</strong> (DE)  immersive content experiences [such as: video editing, tagging]</p>
      <p className={styles.textLarge}>Only one environment should be used per interface. If you are unsure which environment is right, use Light.</p>
    </ExampleSection>



    {/* Switching Environments    */}
    {/* ========================= */}
    <ExampleSection>
      <h3 className="uni-subhead uni-margin--one--btm">Switching Environments</h3>
      <p className={styles.textLarge}>Switching environments is an event. It is a dramatic interface change with experience consequences.</p>
      <p className={styles.textLarge}>While this “mode shift” can be an effective experience tool, the event can be a disorienting user experience. The decision to transition between environments must be carefully considered.</p>
      <DoContainer>
        <DoItem text="Do switch environments when entering a different mode" type="yep" />
        <DoItem text="Do not switch environments for regions belonging to the main interface" type="nope" />
      </DoContainer>
      <p className={styles.textLarge}>Switching environments is like entering a different room. The Light Environment is the office and the Dark Environment is the movie theater.</p>
      <p className={styles.textLarge}>Tangential tasks should maintain the same environment as the primary activity. For instance, editing a tag in a video watching experience should maintain the video player Dark Environment.</p>
    </ExampleSection>


    {/* Environment Levels        */}
    {/* ========================= */}
    <ExampleSection>
      <h3 className="uni-headline--2 uni-margin--one--btm">Environment Levels</h3>
      <p className={styles.textLarge}>Levels are background colors for regions. These regions create grouping and separation of interface elements. Each environment has four levels. Each level has one accent.</p>
      <img src="http://design.hudl.com/assets/img/uniform/color/environment-levels.png" />
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

    </ExampleSection>


  </div>
)

export default ColorPage
