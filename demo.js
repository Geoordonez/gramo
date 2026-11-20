(function(){if(!/[?&]demo=1/.test(location.search))return;
  var KEY='f3g-db', usp=new URLSearchParams(location.search);
  try{
    if(usp.has('demo')){
      var now=Date.now(),D=86400000,seed=7;function rnd(){seed=(seed*9301+49297)%233280;return seed/233280}
      function iso(t){return new Date(t).toISOString()}
      var sp={
        a:{name:'Jade White',colorHex:'#FFFFFF',material:'PLA Basic',brand:'Bambu Lab',initialG:1000,remainingG:520,costQ:180,cat:true},
        b:{name:'Black',colorHex:'#000000',material:'PLA Basic',brand:'Bambu Lab',initialG:1000,remainingG:130,costQ:180,cat:true},
        c:{name:'Red',colorHex:'#C12E1F',material:'PLA Basic',brand:'Bambu Lab',initialG:1000,remainingG:760,costQ:180,cat:true},
        d:{name:'Gold',colorHex:'#E5B03D',material:'PLA Silk',brand:'Bambu Lab',initialG:1000,remainingG:240,costQ:210,cat:true},
        e:{name:'Sky Blue',colorHex:'#56B7E6',material:'PLA Matte',brand:'Bambu Lab',initialG:1000,remainingG:880,costQ:195,cat:true}};
      Object.keys(sp).forEach(function(k){sp[k].createdAt=iso(now-40*D)});
      var names=['Llaveros Cross Nails','Billetes verdes x6','Lagartija flexible','Esmalte destapador','Llavero logo cliente','Muestra mayoreo'];
      var ids=Object.keys(sp),pr={},n=0;
      for(var i=44;i>=0;i--){ if(rnd()<.35)continue; var cnt=1+Math.floor(rnd()*2.4);
        for(var j=0;j<cnt;j++){ var lines=[],tot=0,nl=1+Math.floor(rnd()*2.3),used={};
          for(var k=0;k<nl;k++){var sid=ids[Math.floor(rnd()*ids.length)];if(used[sid])continue;used[sid]=1;var g=Math.round((8+rnd()*(i<10?70:50))*10)/10;tot+=g;lines.push({spoolId:sid,label:sp[sid].name,colorHex:sp[sid].colorHex,g:g})}
          pr['p'+(n++)]={name:names[Math.floor(rnd()*names.length)],createdAt:iso(now-i*D-Math.floor(rnd()*12)*3600000),totalG:Math.round(tot*10)/10,costQ:Math.round(tot*0.19*100)/100,lines:lines,fromPrinter:rnd()<.6?'P1S':'A1'}}}
      var ex={x1:{concept:'Bobina PLA Basic · Jade White',amountQ:180,date:iso(now-30*D).slice(0,10),kind:'Filamento',spoolId:'a'},x2:{concept:'Bobina PLA Silk · Gold',amountQ:210,date:iso(now-18*D).slice(0,10),kind:'Filamento',spoolId:'d'},
        x3:{concept:'Bolsitas para llaveros',desc:'200 bolsitas transparentes con zipper',amountQ:65,date:iso(now-9*D).slice(0,10),kind:'Empaque'},x4:{concept:'Boquilla nueva A1',desc:'Boquilla 0.4 mm de repuesto',amountQ:120,date:iso(now-4*D).slice(0,10),kind:'Repuestos'},
        x5:{concept:'Bobina PLA Matte · Sky Blue',amountQ:195,date:iso(now-2*D).slice(0,10),kind:'Filamento',spoolId:'e'},x6:{concept:'Argollas llaveros',desc:'500 argollas de 25 mm, zona 4',amountQ:85,date:iso(now-12*D).slice(0,10),kind:'Otro'},
        x7:{concept:'Envío de pedido a Xela',amountQ:35,date:iso(now-6*D).slice(0,10),kind:'Envíos'},x8:{concept:'Argollas llaveros',desc:'300 argollas',amountQ:55,date:iso(now-1*D).slice(0,10),kind:'Otro'},x9:{concept:'Cinta doble cara',amountQ:28,date:iso(now-25*D).slice(0,10),kind:'Otro'}};
      var inc={i1:{concept:'50 llaveros Cross Nails',amountQ:650,date:iso(now-20*D).slice(0,10)},i2:{concept:'12 billetes de Bob Esponja',amountQ:720,date:iso(now-11*D).slice(0,10)},i3:{concept:'Lagartijas (6)',amountQ:360,date:iso(now-5*D).slice(0,10)},i4:{concept:'Llavero con logo (30)',amountQ:390,date:iso(now-1*D).slice(0,10)}};
      localStorage.setItem(KEY,JSON.stringify({spools:sp,prints:pr,expenses:ex,incomes:inc}));
    }
  }catch(e){}
})();
