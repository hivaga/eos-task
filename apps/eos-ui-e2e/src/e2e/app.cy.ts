import { getGreeting } from '../support/app.po';

describe('eos-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/components.po.ts` file
    getGreeting().contains('Welcome eos-ui');
  });
});
