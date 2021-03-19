import React from 'react';
import { Container } from './styles';

export const TransectionsTable: React.FC = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Development Z</td>
            <td>2100:00</td>
            <td>DV</td>
            <td>21/21/2112</td>
          </tr>
          <tr>
            <td>Development Z</td>
            <td>2100:00</td>
            <td>DV</td>
            <td>21/21/2112</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
