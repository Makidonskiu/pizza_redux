import React from 'react';
import classNames from 'classnames';

export const Button = ({className, outline, onClick, children}) => {
  return (
    <button
      className={classNames('button',className, {
        'button--outline': outline,
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};
