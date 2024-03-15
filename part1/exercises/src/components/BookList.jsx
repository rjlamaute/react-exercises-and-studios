export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://m.media-amazon.com/images/I/815GrZMJQcL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "";
   let book3 = "";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Nothing here!" />
         <img src={book2} alt="Nothing here!" />
         <img src={book3} alt="Nothing here!" />
      </div>
   );
}
