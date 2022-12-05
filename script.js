first=()=>{
    saw.value=Math.round((mge.value*0.28));
    mni.value=mge.value-saw.value;
    mni2.value=mge.value-saw.value;
    mdi.value=mni.value-me.value;
    ani.value=mni2.value*12;
    adi.value=mdi.value*12;

}
second=()=>{
    me.value=Math.round(parseInt(h.value)+parseInt(m.value)+parseInt(t.value)
    +parseInt(g.value)+parseInt(s.value)+parseInt(c.value)+parseInt(e.value));
    me2.value=Math.round(parseInt(h.value)+parseInt(m.value)+parseInt(t.value)
    +parseInt(g.value)+parseInt(s.value)+parseInt(c.value)+parseInt(e.value));
    mdi.value=mni.value-me.value;
    lae.value=me2.value*12;
    adi.value=mdi.value*12;

}

rese=()=>{
    full.reset();
    alert("Reset");
}
