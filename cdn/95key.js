const threeblacklist = [333, 444, 555, 666, 777, 888, 999]

console.log("\n\n\n\nWelcome to JS95Gen by Dumprr\n--\nWindows 95 Key Generator made in JavaScript/NodeJS. It's fully open source.\nBased off of Py95Gen. (Also made by Dumprr)\n\n\n")

var key = ''
var M7i; 

function mod3(){
    var m3i;
    m3i = ''
    for (let i = 0; i < 3; i++) {
        m3i += Math.floor(Math.random() * 10)
    }
    if (threeblacklist.includes(m3i)) {
        console.log("mod3 error! retrying")
        mod3()
   } else {
    return(m3i)
   }
}

function mod7() {
    var m7i1 = Math.floor(Math.random() * 10)
    var m7i2 = Math.floor(Math.random() * 10)
    var m7i3 = Math.floor(Math.random() * 10)
    var m7i4 = Math.floor(Math.random() * 10)
    var m7i5 = Math.floor(Math.random() * 10)
    var m7i6 = Math.floor(Math.random() * 10)
    var m7i7 = Math.floor(Math.random() * 10)
    
    M7i = (String(m7i1)+String(m7i2)+String(m7i3)+String(m7i4)+String(m7i5)+String(m7i6)+String(m7i7))
    intm7i = (m7i1+m7i2+m7i3+m7i4+m7i5+m7i6+m7i7)
   
    if (intm7i % 7 != 0) {
        console.log("mod7 fail! retrying")
        mod7()
   } else {
     return(`${M7i}`)
   }
}

function finish() {
    mod7()
    document.getElementById("key").innerHTML = (`Windows 95 key: ${mod3()}-${M7i} | Key Weight: ${intm7i / 7}`);
    console.log(`Key Weight: ${intm7i / 7}`)
}

document.getElementById("secret").onclick = function() {finish()};