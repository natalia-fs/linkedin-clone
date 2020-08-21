import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars0.githubusercontent.com/u/53195920?v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Natália Francisco</h1>
        <h2>Web Dev Intern @ Lemobs</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.280</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">447</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
