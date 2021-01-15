import React from 'react';

import * as T from './{{name}}.types';
import * as S from './{{name}}.styles';
import * as U from './{{name}}.utils';

function {{name}}(props: T.{{name}}Props) {
  const { style, children, className, ...otherProps } = props;

  return (
    <S.Container style={style} className={className} {...otherProps}>
      {children}
    </S.Container>
  );
}

const defaultProps: T.{{name}}DefaultProps = {};

{{name}}.defaultProps = defaultProps;

export default {{name}};
