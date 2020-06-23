/**
 * get index file
 */
function getIndexFile(componentName) {
  return `export * from './${componentName}.types';

export { default } from './${componentName}';`;
}

/**
 * get component
 */

function getComponentFile(componentName) {
  return `import React from 'react';

import * as T from './${componentName}.types';
import * as S from './${componentName}.styles';
import * as U from './${componentName}.utils';

function ${componentName}(props: T.${componentName}Props): JSX.Element {
  const { style, children, className, ...otherProps } = props;

  return <S.Container style={style} className={className} {...otherProps}>{children}</S.Container>;
}

${componentName}.defaultProps = U.defaultProps;

export default ${componentName};
`;
}

/**
 * get style
 */
function getStylesFile(componentName) {
  return `import styled from 'styled-components';

export const Container = styled.div\`\`;
`;
}

/**
 * get types
 */
function getTypesFile(componentName) {
  return `import { ReactNode, CSSProperties } from 'react';

export interface ${componentName}DefaultProps {}

export interface ${componentName}Props extends Partial<${componentName}DefaultProps> {
  style?: CSSProperties;
  children?: ReactNode;
  className?: string;
}
`;
}

/**
 * get utils
 */
function getUtilsFile(componentName) {
  return `import * as T from './${componentName}.types';

export const defaultProps: T.${componentName}DefaultProps = {};`;
}

/**
 * get stories
 */
function getStoriesFile(componentName) {
  return `import React from 'react';
import { storiesOf } from '@storybook/react';

import ${componentName} from './index';

storiesOf('${componentName}', module).add('Default', () => <${componentName}>${componentName}</${componentName}>);`;
}

/**
 * get tests
 */
function getTestsFile(componentName) {
  return `import React from 'react';
import { mount } from 'enzyme';

import ${componentName} from './index';

describe('[component] ${componentName}', () => {
  test('[Snapshot] ${componentName}', () => {
    const component = mount(
      <${componentName}>
        Steve fish muskellunge swallower triplefin blenny horsefish wolffish.
      </${componentName}>
    );

    expect(component).toMatchSnapshot();
  });
});
`;
}

module.exports = {
  getTestsFile,
  getIndexFile,
  getTypesFile,
  getUtilsFile,
  getStylesFile,
  getStoriesFile,
  getComponentFile,
};
