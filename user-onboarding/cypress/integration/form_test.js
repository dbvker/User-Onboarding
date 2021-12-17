describe('User Onboarding', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('sanity check to make sure tests work', () => {
    // 'it' is a test
    // expect is an assertion
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5); // Strict equality ===
    expect({}).not.to.equal({}); // Strict equality {} !== {}
    expect({}).to.eql({}); // not strict ==
  })

  // helpers to grab elements
  const nameInput = () => cy.get('input[name=name]');
  const emailInput = () => cy.get('input[name=email]');
  const passInput = () => cy.get('input[name=password]');
  const termsInput = () => cy.get('input[name=terms]');
  const createButton = () => cy.get('button[class="form-button"]')

  describe('filling out the inputs', () => {
    it('can type in the inputs', () => {
      nameInput()
        .should('have.value', '')
        .type('Dylan')
        .should('have.value', 'Dylan');

      emailInput()
        .should('have.value', '')
        .type('dylan@123.com')
        .should('have.value', 'dylan@123.com');

      passInput()
        .should('have.value', '')
        .type('123abc')
        .should('have.value', '123abc');
    })
  })

  describe('check if terms can be clicked', () => {
    it('can click the terms checkbox', () => {
      termsInput().click();
    })
  })
  
  describe('check that a user can be created', () => {
    it('can create a user', () => {
      nameInput().type('Alex');
      emailInput().type('Alex@yahoo.com');
      passInput().type('abc123');
      termsInput().click();

      // Click "create user button"
      createButton().click();
    })
  })
})