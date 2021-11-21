import React, { memo } from 'react';

import CircularLoading from '../../components/CircularLoading';

import { LoadingContainer } from './styles';

interface FullLoaderProps {
  show: boolean;
}

function FullLoader(props: FullLoaderProps) {
  const { show } = props;
  if (!show) return <span />;
  return (
    <LoadingContainer>
      <div className="loader">
        <CircularLoading />
      </div>
    </LoadingContainer>
  );
}

export default memo(FullLoader);
