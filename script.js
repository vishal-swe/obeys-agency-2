let tl=gsap.timeline()


tl.from("#loading h1",{
    y:100,
    delay:0.3,
	stagger:0.2,
    duration:0.9,
    opacity:0,
})
let h5=document.querySelector("#load-100")
let morr=0
console.dir(h5)
// setInterval(() => {
//     if(morr<100){
//         morr++
//         console.log(morr)
//         console.log(h5.innerHTML)
//         h5.innerHTML=morr
//     }
//     else{
//         morr=100
//     }
// }, 45);



tl.to("load-100",{
    onstart:setInterval(() => {
    if(morr<100){
        morr++
        console.log(morr)
        console.log(h5.innerHTML)
        h5.innerHTML=morr
    }
    else{
        morr=100
    }
}, 30),
})