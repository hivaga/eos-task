import { render } from '@testing-library/react';

import AddressTable from './address-table';

describe('Address Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddressTable addresses={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
