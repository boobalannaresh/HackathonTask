var div=document.createElement("div");
div.innerHTML=`<input type="Text" id="txt">
<button type="button" onclick="foo()">search</button>
<div><p id="name"></p><p id="isbn"</p><p id="authors"</p><p id="numberOfPages"></p><p id="publisher"></p><p id="characters"></p></div>`;
div.style.textAlign="center";
document.body.append(div);

async function foo(){

        let cc=document.getElementById("txt").value;
        let res= await fetch(`https://anapioficeandfire.com/api/${cc}`);    
        let res1 =await res.json();
        console.log(res);

        let index=res1.length-1;
        var result=res1[index].name;
        document.getElementById("name").innerText=`Books Name:${result}`;

        let isbn= res1[index].isbn;
        document.getElementById('isbn').innerText=`Isbn Name:${isbn}`;
        
        let authors= res1[index].authors;
        document.getElementById('authors').innerText=`Authors Name:${authors}`;

        let numberOfPages = res1[index].numberOfPages;
        document.getElementById('numberOfPages').innerText=`Number Of Pages:${numberOfPages}`;
        
        let publisher = res1[index].publisher;
        document.getElementById('publisher').innerText=`Number Of publisher:${publisher}`;
        
        let characters = res1[index].characters;
        document.getElementById('characters').innerText=`Number Of characters:${characters}`;
         
}