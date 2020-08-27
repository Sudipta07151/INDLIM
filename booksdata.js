const yourAPIKey='AIzaSyCs7AzS7X0AJV--9K0hTRfc41NQzoc-Rag';

const getBookByISBN=async(isbn_no)=>{
    const base='https://www.googleapis.com/books/v1/volumes';
    const query=`?q=isbn:${isbn_no}&key=${yourAPIKey}`;

    const response= await fetch(base+query);
    const data= await response.json();
    return data;
};


const getBookByName=async(title)=>{
    const base='https://www.googleapis.com/books/v1/volumes';
    const query=`?q=intitle:${title}&key=${yourAPIKey}`;

    const response= await fetch(base+query);
    const data= await response.json();
    return data;
};

getBookByISBN('9788120330511')
.then(data=>document.write(
`
SEARCHED BY ISBN:
<br>
BOOK NAME:  ${data.items[0].volumeInfo.title}
<br>
AUTHOR NAME:   ${data.items[0].volumeInfo.authors}
<br>`
)).catch(err=>console.log(err)
);

getBookByName('CORE JAVA MADE SIMPLE')
.then(data=>document.write(
    `
    SEARCHED BY NAME:
    <br>
    BOOK NAME:  ${data.items[0].volumeInfo.title}
    <br>
    AUTHOR NAME:   ${data.items[0].volumeInfo.authors}
    <br>`
)).catch(err=>console.log(err)
);
    