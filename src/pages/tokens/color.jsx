import React from 'react'
import Link from 'gatsby-link'


import ExamplePageHeader from '../../components/example-page-header/example-page-header';




export default ({ data }) => {

  return (
    <div>
      <ExamplePageHeader pageModified="January 1, 1999" pageTitle="Color Tokens, yo">
      <p>Variables are a foundational building block of Uniform. Using uniform-ui-css (uniCSS) variables within your project ensures values are updated as they are updated or tweaked in accordance with Uniform’s guidelines. Keeping the uniCSS NPM package that lives within your project updated to the latest version helps ensure your interface stays compliant, reducing the amount of work you need to do.</p>
      <p>The v0.11.0 release of uniCSS made some wholesale changes to the naming convention for variables. All deprecated variables are outlined here. In most cases, we’ve also provided a reference to the new appropriate companion variable. However, there are some places where direct mapping does not exist, which will likely force you to make a difficult design decision or two.</p>
    </ExamplePageHeader>

      {data.allColorsYaml.edges.map(({ node }, index) =>
        <article className="unidocs-example__container color-block__section" key={index} id={node.name}>
          <h2 className="uni-headline--2 unidocs-example__hdr">
            <a className="unidocs-example__hdr-link" href={"#" + node.name}>#</a>
            {node.name}
          </h2>

          <div className="unidocs-example__section unidocs-example__table">
            <table className="unidocs-example__table--color--3">
              <thead>
                <tr>
                  <th></th>
                  <th>Variable Name</th>
                  <th>RGBa</th>
                </tr>
              </thead>
              <tbody>
              {node.colors.map((color, i) =>
                <tr>
                <td><div style={{backgroundColor: 'rgba(' + color.value + ')'}}>&nbsp;</div></td>
                <td>{color.sassVar}</td>
                <td>{"rgba(" + color.value + ")"}</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>

        </article>
      )}
    </div>

  )
}




export const query = graphql`
query ColorTokensQuery {
  allColorsYaml {
    edges {
      node {
        name
        colors {
          name
          value
          commonName
          sassVar
        }
      }
    }
  }
}
`


