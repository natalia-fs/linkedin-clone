import React from 'react';

import LoadingProfilePannel from '../Shimmer/LoadingProfilePannel'
import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';

import { Container } from './styles';

const LeftColumn: React.FC<LoadingProps> = ({isLoading}) => {
  return (
    <Container className="left-column">
      {isLoading ? (
        <LoadingProfilePannel />
      ) : (
        <>
          <ProfilePanel />
          <HashtagPanel />
        </>
      )}
      
    </Container>
  );
};

export default LeftColumn;
