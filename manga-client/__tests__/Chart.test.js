import { render } from '@testing-library/react';
import Chart from '../src/app/components/Chart/Chart';

describe('it renders', () => {
  test('Chart component loads', () => {
    render(<Chart />);
  });
});
