import {render} from '@testing-library/react';

import {CasesTable} from './cases-table';
import {Case} from "../../types/DataTypes";

const CASES: Case[] = []

describe('Case', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<CasesTable cases={CASES}/>);
    expect(baseElement).toBeTruthy();
  });
});
