import React from 'react';
import Link from 'gatsby-link';

import ExamplePageHeader from '../../components/example-page-header/example-page-header';
import ExampleComponent from '../../components/example-item-component/example-item-component';

const ButtonsPage = () => (
  <div>
    <ExamplePageHeader pageModified="January 1, 1999" pageTitle="Buttons, yo">
      <p>
        Buttons Learn more about{' '}
        <Link className="uni-Link" to="/">
          correct application of  buttons.
        </Link>
      </p>
    </ExamplePageHeader>

    {/* Standard Buttons          */}
    {/* ========================= */}
    <ExampleComponent
      text="Uniform-UI includes five predefined button styles, each serving its own purpose."
      idLink="standard-buttons"
      title="Standard Buttons"
      status="deprecated"
    >
      Removed
    </ExampleComponent>

    {/* Minimal Buttons          */}
    {/* ========================= */}
    <ExampleComponent
      text="The minimal, text buttons can be used in a variety of conditions, including as a secondary action within a modal (cancelling an action, for example), or as actions within a card."
      idLink="minimal-buttons"
      title="Minimal Buttons"
      status="stable"
    >
      Removed
    </ExampleComponent>

    {/* Minimal Buttons          */}
    {/* ========================= */}
    <ExampleComponent
      text="Uniform UI provides three size variations that are utilized by a modifier class such as `uni-btn--large`. Without any size modifiers, a button is `uni-btn--medium`, by default."
      idLink="size-variations"
      title="Size Variations"
      status="stable"
    >
      Removed
    </ExampleComponent>

    {/* Icon Buttons          */}
    {/* ========================= */}
    <ExampleComponent
      text="THESE WILL NOT WORK. I DID NOT PULL IN THE ICON COMPONENT. Adding icons to buttons is quite easy. The size of the icon inside the button is relative to the size of the button itself. Also, the color of the icon will automatically be the same color as the color of the text inside the button.The best method of using icons in buttons is with the button component from uniform-ui-components. However, if happened to need to hand code some non-react buttons with icons, reach out to us and we'll offer some potentially useful avenues."
      idLink="icon-buttons"
      title="Buttons with Icons"
      status="stable"
    >
      Removed
    </ExampleComponent>

    <ExampleComponent> </ExampleComponent>
  </div>
);

export default ButtonsPage;
