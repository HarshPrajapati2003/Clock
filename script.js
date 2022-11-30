setInterval(()=>{
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotaion = 30*htime + mtime/2 + stime/120;
    mrotaion = 6*mtime + stime/10;
    srotaion = 6*stime;

    document.getElementById("hour").style.transform = `rotate(${hrotaion}deg)`;
    document.getElementById("min").style.transform = `rotate(${mrotaion}deg)`;
    document.getElementById("sec").style.transform = `rotate(${srotaion}deg)`;
},1000);