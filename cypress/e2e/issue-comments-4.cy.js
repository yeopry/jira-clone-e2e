describe('Issue comments creating, editing and deleting', () => {
    beforeEach(() => {
        cy.visit('/');
<<<<<<< HEAD
        cy.url().should('eq', 'https://jira.ivorreic.com/project/board').then((url) => {
=======
        cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {
>>>>>>> 2da89e0741511f34c2c672a47960c6d6c3a5778c
            cy.visit(url + '/board');
            cy.contains('This is an issue of type: Task.').click();
        });
    });

    it('Should create a comment successfully', () => {
        const comment = 'TEST_COMMENT';

        getIssueDetailsModal().within(() => {
            cy.contains('Add a comment...')
                .click()
                .should('not.exist');

            cy.get('textarea[placeholder="Add a comment..."]').type(comment);

            cy.contains('button', 'Save')
                .click()
                .should('not.exist');

            cy.contains('Add a comment...').should('exist');
            cy.get('[data-testid="issue-comment"]').should('contain', comment);
        });
    });

    it('Should edit a comment successfully', () => {
        const previousComment = 'An old silent pond...';
        const comment = 'TEST_COMMENT_EDITED';

        getIssueDetailsModal().within(() => {
            cy.get('[data-testid="issue-comment"]')
                .first()
                .contains('Edit')
                .click()
                .should('not.exist');

            cy.get('textarea[placeholder="Add a comment..."]')
                .should('contain', previousComment)
                .clear()
                .type(comment);

            cy.contains('button', 'Save')
                .click()
                .should('not.exist');

            cy.get('[data-testid="issue-comment"]')
                .should('contain', 'Edit')
                .and('contain', comment);
        });
    });

    it('Should delete a comment successfully', () => {
        getIssueDetailsModal()
            .find('[data-testid="issue-comment"]')
            .contains('Delete')
            .click();

        cy.get('[data-testid="modal:confirm"]')
            .contains('button', 'Delete comment')
            .click()
            .should('not.exist');

        getIssueDetailsModal()
            .find('[data-testid="issue-comment"]')
            .should('not.exist');
    });

    const getIssueDetailsModal = () => cy.get('[data-testid="modal:issue-details"]');
});
