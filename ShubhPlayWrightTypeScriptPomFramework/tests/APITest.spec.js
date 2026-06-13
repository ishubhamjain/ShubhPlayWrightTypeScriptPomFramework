const{test,expect,request} = require('@playwright/test');
const loginResponse = {userEmail:"john.doe21@example.com",userPassword:"Password123#"};

test.beforeAll(async()=>{

    const apicontext = await request.newContext();
    const loginresponse = await apicontext.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
        data:loginResponse
    });
   // await expect(loginresponse.status()).toBe(200).toBeTruthy();
   // await expect(loginresponse.ok()).toBeTruthy();
   await expect(loginresponse.ok()).toBeTruthy();
    const loginResponseJson = await loginresponse.json();
 //   loginResponseJson.
    global.token = loginResponseJson.token;
    console.log(global.token);
});

test.beforeEach(async()=>{
    console.log("Before each test");
});

test('API test',async({page})=>{
   // const apicontext = await request.newContext(); 
   console.log("API test global");  
   console.log(global.token);

   await page.addInitScript(value=>{
    window.localStorage.setItem('token',value);
   //window.indexedDB.complete('token',value);
   },global.token);

   await page.goto('https://rahulshettyacademy.com/client/');
 //  await page.pause();

 //  await page.locator('#userEmail').fill('')

});