import { render } from '@testing-library/react';

import DebtorDetails from './debtor-details';

describe('DebtorDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DebtorDetails selectedDebtorID={null} />);
    expect(baseElement).toBeTruthy();
  });
});
