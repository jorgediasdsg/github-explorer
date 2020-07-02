import React from 'react';
import {useRouteMatch} from 'react-router-dom'

interface repositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const {params} = useRouteMatch<repositoryParams>();
return <h1>Repository: {params.repository}</h1>;
};

export default Repository;
