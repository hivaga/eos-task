import {render} from '@testing-library/react';

import CreditorDetails from './creditor-details';


describe('PersonDetails', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<CreditorDetails selectedCreditorID={null}/>);
    expect(baseElement).toBeTruthy();
  });
});
