import React from 'react';

interface IConditionalProps {
  condition: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const Conditional = (props: IConditionalProps): JSX.Element | null => {
  const { condition, children, fallback } = props;

  if (!condition) return fallback ? <>{fallback}</> : null;

  return <>{children}</>;
};

export default Conditional;
