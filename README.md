<h1>START</h1>
yarn run cypress open

<h1>Basic Syntax</h1>
<pre>
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
</pre>

<h1>Basic Command</h1>
<pre>
<ul>
<li>cy.visit(url): Navigates to the specified URL.</li>
<li>cy.get(selector): Selects DOM elements based on the CSS selector.</li>
<li>cy.click(): Triggers a click event on the selected element.</li>
<li>cy.type(text): Enters the specified text into the selected input field.</li>
<li>cy.contains(text): Selects elements that contain the specified text.</li>
<li>cy.wait(time): Pauses the test execution for the specified time (in milliseconds).</li>
<li>cy.should('be.visible'): Asserts that the selected element is visible.</li>
<li>cy.should('have.text', text): Asserts that the selected element has the specified text.</li>
<li>cy.get('[data-testid="element-id"]').should('exist'): Asserts that the element with the specified data-testid attribute exists.</li>
<li>cy.intercept(route, handler): Intercepts and stubs network requests for testing purposes.</li>

</ul>
</pre>

<pre>
<h1>Other things</h1>
<ul>
<li>To ignore console errors use <b>uncaught:exception</b> to handle the error</li>
</ul>
</pre>