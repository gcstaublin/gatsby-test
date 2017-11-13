import React from 'react';
import Link from 'gatsby-link';

import ExamplePageHeader from '../../components/example-page-header/example-page-header';
import ExampleComponent from '../../components/example-item-component/example-item-component';
import { Textarea, Button, Headline } from '../../uniComponents';
import UniButton from '../../uniComponents/uniButton';

const LinksPage = () => (
  <div>
    <ExamplePageHeader pageModified="January 1, 1999" pageTitle="Buttons, yo">
      <p>
        Uniform-UI provides custom button styles for actions in forms, dialogs and any place within Hudl that is
        submitting information or initiating action. There are a variety of contextual variations, sizes and usages
        across the spectrum for what you’ll need to build Hudl. Learn more about{' '}
        <Link className="uni-Link" to="/">
          correct application of Uniform buttons.
        </Link>
      </p>
    </ExamplePageHeader>
    <ExampleComponent text="This is a uniComponent test">
      <Textarea label="Heads up" />
      <Button type="primary" text="brains" />
      <Headline level="1">Go to google!</Headline>
    </ExampleComponent>
  </div>
);

export default LinksPage;
