// const fetchBooks = async () => {
//   try {
//     setIsLoading(true);

//     // Replace 'YOUR_API_KEY' with your actual Google Books API key
//     const apiKey = "YOUR_API_KEY";
//     const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`;

//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     if (data.items) {
//       setBooks(data.items);
//     } else {
//       setBooks([]);
//     }
//   } catch (error) {
//     console.error("Error fetching books:", error);
//   } finally {
//     setIsLoading(false);
//   }
// };
