/**
 * Workshop #16
 * We are locating issues here based on one enter ('multiple assignees')
 * Think and create a loop using "forEach", which would allow us to test multiple enters without creating a new instance of test for that
 * Use object with multiple rows for solving this task.
 *
 * Expected result:
 * 1. You will have object with multiple entries
 * 2. You are running test X amount of times without creating new instance of test (using "it")
 */

describe('Issue filtering', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('eq','https://jira.ivorreic.com/project/board').then((url) => {
      cy.visit(url + '/board');
    });
  });

  const issueToValidate = [
    {
      issueName: 'you can',
      expectedAmountOfIssues: '2',
    },
    {
      issueName: 'multiple assignees',
      expectedAmountOfIssues: '1',
    },
    {
      issueName: 'an issue',
      expectedAmountOfIssues: '3',
    }
  ]
  for (let issue of issueToValidate) {
    it(`Should filter issues by title: ${issue.issueName}`, () => {
      getSearchInput().debounced('type', issue.issueName);
      cy.get('[data-testid="list-issue"]').should('have.length', issue.expectedAmountOfIssues);
    });
  }

  /* Possible solution using forEach:
  it(`Should filter issues by title: `, () => {
    issuesToValidate.forEach(issue => {
      getSearchInput().clear().debounced('type', issue.issueName);
      cy.get('[data-testid="list-issue"]')
        .should('have.length', issue.expectedAmountOfIssues);
    });
  });
  */

  /**
   * New tests can be created here for practice
   * 1. Filter by avatar
   * 2. Filter by "Only My Issues" button
   * 3. Filter by "Recently Updated" button
   */

  const getSearchInput = () => cy.get('[data-testid="board-filters"]').find('input');
});
