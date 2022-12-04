import IssueModal from "../pages/IssueModal";
import { faker } from '@faker-js/faker';


describe('Issue create', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.intercept('GET','**/currentUser').as('currentUserApiRequest')
      cy.url().should('eq', /*'http://34.247.67.214:8080/project')*/ 'https://jira.ivorreic.com/project/board').then((url) => {
        cy.wait('@currentUserApiRequest')
        cy.visit(url + '/settings?modal-issue-create=true');
      });
    });

    const title = faker.name.fullName();
    const description = faker.lorem.paragraph();

    it('Should create an issue and validate it successfully', () => {
      IssueModal.createIssue(title, description)
      
    });
  });
