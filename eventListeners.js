// function eventListeners() {



//   function addSubmitListeners() {
//     // find each submit button; link inputs to submit
//     let submitButtons = document.querySelectorAll('.answer');
//     console.log(submitButtons);

//     submitButtons.forEach(submitButton => {
//       submitButton.addEventListener('click', function(e) {
//         let args = [];
//         // get args data based on id passed on click

//         Array.from(document.getElementsByClassName('argument')).forEach(arg => {
//           args.push(arg.value)
//         })
//         // if (fn !== this.fn) fn = this.fn;
//         // this[targetId] = fn.apply(this, args);
//         this['answer'] = fn.apply(this, args);
//         // find target based on click
//         let moduleClicked = this.closest('section')
//         // console.log(moduleClicked)
//         let elId = moduleClicked.id;
//         let children = moduleClicked.children;
//         // console.log(children)
//         for (let i = 0; i < children.length; i++) {
//           let child = children[i]
//           if (child.className === 'answer' /* && child.className.includes(elId) */ ) {
//             // child.textContent = this.targetId;
//             child.textContent = this.answer;
//           }
//         }
//       })
//     })
//   }
//   function calcAnswer(fn,args) {

//   }
//   // addSubmitListeners()
// }
// // eventListeners();

