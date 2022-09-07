import { Table } from 'react-bootstrap';

export const Pessoas = () => {
  const pessoas = [
    {
      id: 1,
      nome: 'Thais',
      email: 'thais@gmail.com',
    },
    {
      id: 2,
      nome: 'Thais2',
      email: 'thais2@gmail.com',
    },
    {
      id: 3,
      nome: 'Thais3',
      email: 'thais3@gmail.com',
    },
  ];

  return (
    <Table striped hover variant='dark'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>E-mail</th>
        </tr>
      </thead>
      <tbody>
        {pessoas.map((pessoa) => (
          <tr key={pessoa.id}>
            <td>{pessoa.id}</td>
            <td>{pessoa.nome}</td>
            <td>{pessoa.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
