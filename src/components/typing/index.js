import { type, type as typeLoop } from '@camwiegert/typical';
import React, { useRef, useEffect, memo } from 'react';

import styles from './styles.module.css';

const TypeAnimation = ({
  sequence,
  repeat,
  className,
  wrapper = 'p',
  cursor = true
}) => {
  const typeRef = useRef(null);
  const baseStyle = styles.type;

  let finalClassName;

  if (className && className.length > 0) {
    if (!cursor) {
      finalClassName = className;
    } else {
      finalClassName = `${baseStyle} ${className}`;
    }
  } else {
    if (!cursor) {
      finalClassName = '';
    } else {
      finalClassName = baseStyle;
    }
  }

  useEffect(() => {
    if (repeat === Infinity) {
      type(typeRef.current, ...sequence, typeLoop);
    } else if (typeof repeat === 'number') {
      type(
        typeRef.current,
        ...Array(repeat)
          .fill(sequence)
          .flat()
      );
    } else {
      type(typeRef.current, ...sequence);
    }
  });

  const Wrapper = wrapper;
  return <Wrapper className={finalClassName} ref={typeRef} />;
};

const areEqual = () => {
  return true
}

export default memo(TypeAnimation, areEqual);
