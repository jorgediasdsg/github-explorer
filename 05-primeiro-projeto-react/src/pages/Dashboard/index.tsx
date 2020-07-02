import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no GitHub</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/16909215?s=460&u=9382e8dac305174f9148d2573cda31bf14cb2400&v=4"
            alt="Jorge Dias"
          />
          <div>
            <strong>jorgediasdsg/github-explorer</strong>
            <p>Projeto de treinmaneot de aula do promeiro projeto de ReactJS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/16909215?s=460&u=9382e8dac305174f9148d2573cda31bf14cb2400&v=4"
            alt="Jorge Dias"
          />
          <div>
            <strong>jorgediasdsg/github-explorer</strong>
            <p>Projeto de treinmaneot de aula do promeiro projeto de ReactJS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/16909215?s=460&u=9382e8dac305174f9148d2573cda31bf14cb2400&v=4"
            alt="Jorge Dias"
          />
          <div>
            <strong>jorgediasdsg/github-explorer</strong>
            <p>Projeto de treinmaneot de aula do promeiro projeto de ReactJS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
