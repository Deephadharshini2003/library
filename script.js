const book=[
    {
    title:"wings of fire",
    author:"Dr A.P.J Abdul kalam",
    yearPublished:2000,
    readStatus:true,
    },
    {
    title:"like it happened yesterday",
    author:"ranveer singh",
    yearPublished:1999,
    readStatus:true,
    },
    {
    title:"diary of a wimpy kid",
    author:"jonathan",
    yearPublished:2003,
    readStatus:true,
    },
  

];
let library=[];

function getSummary()
{

book.forEach(b=>{
    for(let value in b){
        document.write(`${b[value]+"<br/>"}`);
    }
})

 }



function addBook()
{
   let newtitle=prompt(`enter a book title`);
   let newauthor=prompt(`enter the author `);
   let newyear=prompt(`enter the year of publication`);
   let newstatus=prompt(`enter the readstatus`);
   
   book.title=newtitle;
   book.author=newauthor;
   book. yearPublished= newyear;
   book. readStatus=newstatus;
   //library.push(book[4].title);
   //console.log(book);
   document.write("Adding a book to the existing books<br/>");
    library.push(newtitle);
    library.push(newauthor);
    library.push(newyear);
    library.push(newstatus);
    for(let i=0;i<library.length;i++)
    {
       document.write(library[i]+"<br/>");
    }
}
   
   //for(let i=0;i<library.length;i++)
  //  {
   //    console.log(library[i]);
    //}

function removeLastBook()
{
     library.pop();
     library.pop();
     library.pop();
     library.pop();
     document.write("Removing the last book<br/>");
     for(let i=0;i<library.length;i++)
     {
       document.write(library[i]);
     }
    book.forEach(b=>{
        for(let value in b){
            document.write(`${b[value]+"<br/>"}`);
        }
    })
 }
 
 function addBookToFront()
 {
    library.unshift('false');
    library.unshift('1987');
    library.unshift('wilspat');
    library.unshift('albert');
    document.write("Adding a book to front<br/>");
     for(let i=0;i<library.length;i++)
    {
     document.write(library[i]+"<br/>");
    }
    book.forEach(b=>{
        for(let value in b){
            document.write(`${b[value]+"<br/>"}`);
        }
    })
}

function removeFirstBook()
{
    library.shift();
    library.shift();
    library.shift();
    library.shift();
   document.write("Removing the first book<br/>");
    for(let i=0;i<library.length;i++)
    {
     document.write(library[i]+"<br/>");
    }
    book.forEach(b=>{
        for(let value in b){
            document.write(`${b[value]+"<br/>"}`);
        }
    })
}
function getAllTitles()
{
     
    document.write("getting the title of the books<br/>");
   
    let booknew=["wings of fire<br>","like it happened yesterday<br>","diary of a wimpy kid<br>"].map(item => item)
   document.write(booknew);

}
function getBooksByAuthor()
{
   document.write("filtering the books by author<br/>");
   //  let booknew2=["Dr A.P.J Abdul kalam","ranveer singh","jonathan"].filter(item=>item === "jonathan");
    const booknew= {
        title:"diary of a wimpy kid",
        author:"jonathan",
        yearPublished:2003,
        readStatus:true,
        };
       document.write(booknew.title+"<br/>"+booknew.author+"<br/>"+booknew. yearPublished+"<br/>"+booknew.readStatus+"<br/>");
    
}
function getTotalBooksPublishedBefore()
{
    document.write("getting the books count published before a paticular year<br/>");

       let booknew3=book.filter(item=>item.yearPublished>1999);
      document.write(booknew3.length+"<br/>");
}
function getBooksByReadStatus(){
   document.write("printing the read status which is already red<br/>");
    let booknew4=["read","unread","read"].filter(item=>item==="read"+"<br/>");
   // let booknew4=book.filter(item=>item.readStatus);
   document.write(booknew4);
}

  


