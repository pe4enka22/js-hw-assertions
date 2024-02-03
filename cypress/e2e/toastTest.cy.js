let pageData = [{
    //case1
    position: "top-right",
    positionClass: "#nb-option-24",
    typeClass: "#nb-option-34",
    type: "info",
    title: "title1",
    content: "content1",
    time: "4000",
    toastColor: 'rgb(4, 149, 238)',
    toastPosition: 'static',
    toastIcon: '<path d=\"M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>'
}, {
    //case2
    position: "bottom-right",
    positionClass: "#nb-option-27",
    typeClass: "#nb-option-32",
    type: "primary",
    title: "title2",
    content: "content2",
    time: "9000",
    toastColor: 'rgb(233, 29, 99)',
    toastPosition: 'static',
    toastIcon: '<path d=\"M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"></path>'
}, {
    //case3
    position: "top-start",
    positionClass: "#nb-option-29",
    typeClass: "#nb-option-35",
    type: "warning",
    title: "title3",
    content: "content3",
    time: "10000",
    toastColor: 'rgb(255, 159, 5)',
    toastPosition: 'static',
    toastIcon: '<path d=\"M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zm-1.7 2.05a1.31 1.31 0 0 1-1.19.65H4.33a1.31 1.31 0 0 1-1.19-.65 1 1 0 0 1 0-1l7.68-12.73a1.48 1.48 0 0 1 2.36 0l7.67 12.72a1 1 0 0 1 .01 1.01z"></path>'
}, {
    //case4
    position: "bottom-start",
    positionClass: "#nb-option-31",
    typeClass: "#nb-option-36",
    type: "danger",
    title: "title4",
    content: "content4",
    time: "8000",
    toastColor: 'rgb(176, 0, 32)',
    toastPosition: 'static',
    toastIcon: '<path d=\"M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44zM6.87 12.8H12a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78l-.45 4.15 4.59-6.86H12a1 1 0 0 1-1-1.11l.45-4.15z"></path>'
}]
describe("beforeEach method", () => {
    beforeEach(() => {
        cy.log('Open main page');
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.log('Open Dark Theme');
        cy.get('[alt="Material Dark Theme"]').click();
        cy.log('Open Modal & Overlays page');
        cy.get('[title="Modal & Overlays"]').click();
        cy.log('Select Toast');
        cy.get('[href="/pages/modal-overlays/toastr"]').click();
    })
    pageData.forEach(pageData => {
        it('Expect', () => {
            cy.get('nb-card-body button').first().click();
            cy.get(`${pageData.positionClass}`).click().then(position => {
               expect(position).to.have.prop('textContent', `${pageData.position}`)
            })

            cy.get('nb-card-body button').last().click();
            cy.get(`${pageData.typeClass}`).click().then(type => {
               expect(type).to.have.prop('textContent', `${pageData.type}`)
            })

            cy.get('[name="title"]').clear().type(`${pageData.title}`).then(title => {
               expect(title).to.have.value(`${pageData.title}`)
            })

            cy.get('[name="content"]').clear().type(`${pageData.content}`).then(content => {
               expect(content).to.have.value(`${pageData.content}`)
            })

            cy.get('[name="timeout"]').clear().type(`${pageData.time}`).then(time => {
               expect(time).to.have.value(`${pageData.time}`)
            })
            //result
            cy.get('nb-card-footer button').first().click();
            cy.get('nb-toast').should('have.css', 'background-color', `${pageData.toastColor}`);
            cy.get('nb-toast').should('have.css', 'position', `${pageData.toastPosition}`);
            cy.get('nb-toast path').should('have.prop', 'outerHTML', `${pageData.toastIcon}`);
            cy.get('nb-toast> .content-container').should("contain.text", `${pageData.title}${pageData.content}`)
        })
    })
})