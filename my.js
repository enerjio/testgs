
function testGS(){

    const url ="https://script.googleusercontent.com/macros/echo?user_content_key=-SQ9cMhiE4LdPubqmFwI-l8bmhR8izDqPrA66gDbUHwVMk6E403hk_-HTruNKeEPAj4hXcSeK6Hrf269PgyBc2ODKyb2ODvIm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBxEoIptzfrYg0I_K-JJriYTABK2upRuO6BymXlW4n3BXgZ0Dn8Q0WLypHnojptp-4RH8Oj9w8J6&lib=MYl1DWJOg9utvYEagXVRMJk4PFTUaRp0z";


    fetch(url)
    .then(d => d.json())
    .then(d=>{
          document.getElementById("app").textContent = d[0].status;
    });

}

document.getElementById("btn").addEventListener("click",testGS);
