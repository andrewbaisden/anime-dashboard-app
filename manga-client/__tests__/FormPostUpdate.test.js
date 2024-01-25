import { render } from '@testing-library/react';
import FormPostUpdate from '../src/app/components/FormPostUpdate/FormPostUpdate';

describe('Form component', () => {
  test('renders without crashiing', () => {
    render(<FormPostUpdate />);
  });
});
