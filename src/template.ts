/**
 * get index file
 */
function getIndexFile(componentName: string) {
  return `export * from './${componentName}.types';

export { default } from './${componentName}';`;
}

/**
 * get component
 */

function getComponentFile(componentName: string) {
  return `import React from 'react';

import * as T from './${componentName}.types';
import * as S from './${componentName}.styles';
import * as U from './${componentName}.utils';

function ${componentName}(props: T.${componentName}Props): JSX.Element {
  const { style, children, className, ...otherProps } = props;

  return (
    <S.Container style={style} className={className} {...otherProps}>
      {children}
    </S.Container>
  );
}

const defaultProps: T.${componentName}DefaultProps = {};

${componentName}.defaultProps = defaultProps;

export default ${componentName};
`;
}

/**
 * get style
 */
function getStylesFile(_componentName: string) {
  return `import styled from 'styled-components';

export const Container = styled.div\`\`;
`;
}

/**
 * get types
 */
function getTypesFile(componentName: string) {
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
function getUtilsFile(componentName: string) {
  return `import * as T from './${componentName}.types';`;
}

/**
 * get stories
 */
function getStoriesFile(componentName: string) {
  return `import React from 'react';
import { storiesOf } from '@storybook/react';

import ${componentName} from './index';

storiesOf('${componentName}', module).add('Default', () => <${componentName}>${componentName}</${componentName}>);`;
}

/**
 * get tests
 */
function getTestsFile(componentName: string) {
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

/**
 * get mocks
 */
function getMocksFile(componentName: string) {
  return `import React from 'react';

import ${componentName}, { ${componentName}Props } from './index';
`;
}

const template = {
  getTestsFile,
  getIndexFile,
  getTypesFile,
  getUtilsFile,
  getMocksFile,
  getStylesFile,
  getStoriesFile,
  getComponentFile,
};

export default template;
