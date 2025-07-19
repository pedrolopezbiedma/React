import { db } from "../firebase/config";

import { collection, doc, deleteDoc } from "firebase/firestore";

export default function BookList({ books }) {
	const handleClick = async (id) => {
		await deleteDoc(doc(collection(db, "books"), id));
	};

	return (
		<div className="book-list">
			<ul>
				{books.map((book) => (
					<li key={book.id} onClick={() => handleClick(book.id)}>
						{book.title}
					</li>
				))}
			</ul>
		</div>
	);
}
