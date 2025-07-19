import { useState, useEffect } from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

import { db } from "../firebase/config";

import { collection, onSnapshot } from "firebase/firestore";

export default function Home() {
	const [books, setBooks] = useState(null);

	useEffect(() => {
		const unsub = onSnapshot(collection(db, "books"), (snapshot) => {
			const booksData = [];
			for (const doc of snapshot.docs) {
				booksData.push({ id: doc.id, ...doc.data() });
			}
			setBooks(booksData);
			console.log("Current books: ", booksData);
		});

		// Cleanup
		return () => {
			unsub();
		};
	}, []);

	return (
		<div className="App">
			{books && <BookList books={books} />}
			<BookForm />
		</div>
	);
}
