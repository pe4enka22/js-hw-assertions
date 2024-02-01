let pageData = [{
  //case1
  position: "top-right",
  type: "info",
  title: "title1",
  content: "content1",
  time: "4000",
  toastColor: 'rgb(4, 149, 238)',
  toastPosition: 'ng-tns-c209-54',
  toastIcon: '<path d=\"M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>'
},{
  //case2
  position: "bottom-right",
  type: "primary",
  title: "title2",
  content: "content2",
  time: "5000",
  toastColor: 'rgb(233, 29, 99)',
  toastPosition: 'ng-tns-c209-55',
  toastIcon: '<path d=\"M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"></path>'
}, {
  //case3
  position: "top-start",
  type: "warning",
  title: "title3",
  content: "content3",
  time: "4536",
  toastColor: 'rgb(255, 159, 5)',
  toastPosition: 'ng-tns-c209-56',
  toastIcon: '<path d=\"M12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"></path>'
},{
  //case4
  position: "bottom-start",
  type: "danger",
  title: "title4",
  content: "content4",
  time: "3532",
  toastColor: 'rgb(176, 0, 32)',
  toastPosition: "ng-tns-c209-57",
  toastIcon: '<path d=\"M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44zM6.87 12.8H12a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78l-.45 4.15 4.59-6.86H12a1 1 0 0 1-1-1.11l.45-4.15z"></path>'
}]


describe("beforeEach method", () => {
  before(() => {
    cy.log('Open main page');
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.log('Open Dark Theme');
    cy.get('[alt="Material Dark Theme"]').click();
    cy.log('Open Modal & Overlays page');
    cy.get('[title="Modal & Overlays"]').click();
    cy.log('Select Toastr');
    cy.get('[href="/pages/modal-overlays/toastr"]').click();

     })

  it('Expect', () => {

    cy.get('nb-card-body button').first().click();
    cy.get('#nb-option-24').click().then( position =>{
      expect(position).to.have.prop('textContent','top-right')
      })

    cy.get('nb-card-body button').last().click();
    cy.get('#nb-option-34').click().then( type =>{
      expect(type).to.have.prop('textContent','info')
        })

     cy.get('[name="title"]').clear().type('Title1').then( title =>{
       expect(title).to.have.value('Title1')
      })

    cy.get('[name="content"]').clear().type('Content1').then( content =>{
       expect(content).to.have.value('Content1')
        })

    cy.get('[name="timeout"]').clear().type('200000').then( time =>{
      expect(time).to.have.value('200000')
    })

//result

    cy.get('nb-card-footer button').first().click();
    cy.get('nb-toast').should('have.css', 'background-color', 'rgb(4, 149, 238)');
    cy.get('nb-toast').should('have.class', 'ng-tns-c209-54');
    cy.get('nb-toast path').should('have.prop', 'outerHTML', '<path d=\"M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>');
    cy.get('nb-toast> .content-container').should("contain.text", 'Title1Content1')


  })

})





