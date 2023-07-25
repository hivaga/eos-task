import {render} from '@testing-library/react';

import CreditorInfoTable, {CreditorInfoTableProps} from './creditor-info-table';

const data:CreditorInfoTableProps = {
  "workUnitId": "00000000-0000-0000-0000-000000000005",
  "entityType": "00000000-0000-0000-0000-000000000002",
  "status": "00000000-0000-0000-0000-000000000000",
  "key": "0000557",
  "date": "4/4/2016",
  "type": "00000000-0000-0000-0000-000000000003",
  "court": "ЧСИ - 851",
  "bailiffName": "Кредитор - Георги Георгиев",
}

describe('CreaditorInfoTable', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<CreditorInfoTable props={data}/>);
    expect(baseElement).toBeTruthy();
  });
});
