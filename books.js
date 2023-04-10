let lib=localStorage.getItem('library');
if(lib==null){
    libObj=[];
}
else{
    libObj=JSON.parse(lib);
}

let tbl=document.getElementById('tb');
let html="";
libObj.forEach((element)=>{
html+=`
<tr class="tt">
<td>${element.books}</td>
<td>${element.authors}</td>
<td>${element.types}</td>
</tr>
`;
});

tbl.innerHTML=html;


let searchtxt=document.getElementById('searchtxt');
searchtxt.addEventListener('input',function(){
    let val=searchtxt.value;
    let div=document.getElementsByClassName('tt');
    Array.from(div).forEach(function(element){
        let aut=element.getElementsByTagName('td')[0].innerText;
        if(aut.includes(val)){
            element.style.display="block";
        }
        else
    {
        element.style.display="none";
    }


    })


});