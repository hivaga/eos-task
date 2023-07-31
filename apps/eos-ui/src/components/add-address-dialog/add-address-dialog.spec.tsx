import { render } from '@testing-library/react';

import AddAddressDialog from './add-address-dialog';

describe('AddAddressDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddAddressDialog workUnitId={'12345'}/>);
    expect(baseElement).toBeTruthy();
  });
});
