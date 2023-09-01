let url = 'https://test.create.diagnal.com/data/page';
let c=1;
let co=1;
let flag=0;
var dict=[];
var sdict={};
let searchelement;
const b=document.getElementById('cont');
const d=document.getElementById('to')

function load(j)
{
    let x=url+j+'.json';
     
        
    fetch(x)
    
.then(res=>{
    if(!res.ok)
    {
        throw new Error('network');
    }
    return res.json();
}
)

.then(data=>
    {
        
        
       let a= data['page']['content-items']['content'];
       
       
       
       const t=document.getElementById('cont');
       for(let i=0;i<a.length;i++){
        const posdiv=document.createElement('div');
        posdiv.classList.add('poster');
        const posimg=document.createElement('img');
        posimg.classList.add('re');
        let x='https://test.create.diagnal.com/images/'+a[i]['poster-image'];
        
        
        posimg.src=x;
        posimg.onerror=()=>
        {
                posimg.classList.add('anime');
                flag++;
                console.log(flag);
                posimg.src='https://test.create.diagnal.com/images/placeholder_for_missing_posters.png';
                posimg.height=272;
                posimg.width=182;
        }
        const movtitle=document.createElement('p');

        movtitle.classList.add('re');
        movtitle.textContent=a[i].name;
        
        
        
        posdiv.appendChild(posimg);
        posdiv.appendChild(movtitle);
        t.appendChild(posdiv);





       }
       
    })
.catch(err => { throw err });

}
const a=document.getElementById('butt');
a.addEventListener('click',visib);
const s=document.getElementById('ser');

function visib()
            
{ 
    // console.log(co);
    if(co%2!=0)
    {
    const s=document.getElementById('ser');
    s.style.visibility='visible';
    searchelement=document.getElementById('ser').value;
    console.log(searchelement);
    console.log(searchelement.toLowerCase())
    searchh(searchelement.toLowerCase())
    co++;
    }
    else if(co%2==0)
    {
    const s=document.getElementById('ser');
    s.style.visibility='hidden';
    searchelement=document.getElementById('ser').value;
    console.log(searchelement);
    console.log(searchelement.toLowerCase())
    searchh(searchelement.toLowerCase())
    co++;
    }
    event.preventDefault();
    


    
}
function handle()
{
    
    const escrolltop=document.documentElement.scrollTop;
    const wh=window.innerHeight;
    const ch=b.clientHeight;
    
    if (escrolltop+wh>=ch)
    {
        load(c);
        
        
        c++;
    
    if(c>3)
    {
        
        sdict=dict;
        window.removeEventListener('scroll',handle);
    }
}
}
window.addEventListener('scroll',handle);
load(c);
c++;


function searchh(element)
{
    for(let j=1;j<4;j++)
    {
        let j=1;
    let x=url+j+'.json';
     console.log(element)
        
    fetch(x)
    
.then(res=>{
    if(!res.ok)
    {
        throw new Error('network');
    }
    return res.json();
}
)

.then(data=>
    {
        
        
       let ab= data['page']['content-items']['content'];
    //    console.log(ab[0].name);
    for(let i=0;i<ab.length;i++)
    {
        // console.log(ab[i].name)
        // console.log(element)
        if(element.toLowerCase()==ab[i].name.toLowerCase())
        {
            console.log('enterd');
            const qq=document.getElementById('cont');
            qq.style.visibility='hidden';
            console.log('found');
            const sdiv=document.createElement('div');
        sdiv.classList.add('poster');
        const simg=document.createElement('img');
        simg.classList.add('re');
        let x='https://test.create.diagnal.com/images/'+ab[i]['poster-image'];
        
        
        simg.src=x;
        const smovtitle=document.createElement('p');

        smovtitle.classList.add('re');
        smovtitle.textContent=ab[i].name;
        sdiv.appendChild(simg);
        sdiv.appendChild(smovtitle);
        const fu=document.getElementById('searchdd');
        fu.style.visibility='visible';
        // let f=0;
        // if(f==0)
        // {
        //     const t=document.getElementById('cont');
        //     t.innerHTML="";
        //     f++;
        // }
        fu.appendChild(sdiv);
        fu.classList.add('container');
        document.getElementById('cont').innerHTML=""
        window.removeEventListener('scroll',handle);


        }
    }
    
    
    

    })
    .catch(err => { throw err });
    }
    
    
    }



