// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
  getInstruction("mashedPotatoes", 1, (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    getInstruction("mashedPotatoes", 2, (step) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
      getInstruction("mashedPotatoes", 3, (step) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
        getInstruction("mashedPotatoes", 4, () => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>enjoy</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").hidden = false;
        }, (err) => console.log(err));
      }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));
}, (err) => console.log(err));
 


// Iteration 2 - using promises
obtainInstruction('steak', 0)


  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2); // Nächster Schritt
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li`;
    return obtainInstruction('steak', 3); // Nächster Schritt
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5); // Nächster Schritt
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li`;
    return obtainInstruction('steak', 6); // Nächster Schritt
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li`;
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li`;
    document.querySelector("#steakImg").hidden = false;
  })
  
  .catch((error) => {
    console.error(error);
    
  });

// Iteration 3 using async/await
async function makeBroccoli() {

  for(let i=0;i< broccoli.length;i++) {
    try {
      const instruction=await obtainInstruction('broccoli', i);
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
  
    }catch (error) {
      console.error(error);
    }
    
  }
  document.querySelector("#broccoli").innerHTML += `<li>broccoli is ready</li>`;
  document.querySelector("#broccoliImg").hidden = false;
}
makeBroccoli();

/*
async function brSp() {

  for(let i=0;i< brusselsSprouts.length;i++) {
    try {
      const instruction=await obtainInstruction('brusselsSprouts', i);
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction}</li>`;
  
    }catch (error) {
      console.error(error);
    }
    
  }
  document.querySelector("#brusselsSprouts").innerHTML += `<li>brusselsSprouts is ready</li>`;
  document.querySelector("#brusselsSproutsImg").hidden = false;
}
//brSp();
  


Promise.all([brSp()])
*/

async function getAllInstructions(food) {
  const promises = [];

  for (let step = 0; step < brusselsSprouts.length; step++) {
    promises.push(obtainInstruction(food, step));
  }

  try {
    const instructions = await Promise.all(promises);
    return instructions;
  } catch (error) {
    console.error(error);
  }
}


getAllInstructions("brusselsSprouts")
  .then((instructions) => {
    instructions.forEach((instruction, index) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction}</li>`;
      
    });
    document.querySelector("#brusselsSprouts").innerHTML += `<li>is ready</li>`
    document.querySelector("#brusselsSproutsImg").hidden = false;;
  })
  .catch((error) => {
    console.error(error);
  });