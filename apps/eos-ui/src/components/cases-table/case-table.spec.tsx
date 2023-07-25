import { render } from '@testing-library/react';

import Case from './cases-table';

describe('Case', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Case />);
    expect(baseElement).toBeTruthy();
  });
});
