import { render } from '@testing-library/react';
import FormDelete from '../src/app/components/FormDelete/FormDelete';

describe('component renders', () => {
  test('component does not crash', () => {
    render(<FormDelete />);
  });
});
