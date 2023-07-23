import { render } from '@testing-library/react';

import PersonDetails from './person-details';

describe('PersonDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PersonDetails />);
    expect(baseElement).toBeTruthy();
  });
});
