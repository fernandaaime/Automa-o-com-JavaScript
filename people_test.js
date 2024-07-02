Feature('people');

Scenario('Teste validar request people',  ({ I }) => {
    I.sendGetRequest('/people')
    I.seeResponseCodeIsSucessful()
});



