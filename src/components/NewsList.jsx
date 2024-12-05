import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export default function NewsList() {
  const [news, setNews] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const q = query(collection(db, 'news'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNews(newsData);
    });

    return () => unsubscribe();
  }, []);

  async function handleDelete(id) {
    try {
      await deleteDoc(doc(db, 'news', id));
      toast.success('News deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete news');
      console.error('Error deleting news:', error);
    }
  }

  return (
    <div className="space-y-4">
      {news.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="mt-2 text-gray-600">{item.content}</p>
          <div className="mt-2 text-sm text-gray-500">
            Posted by: {item.authorEmail}
          </div>
          {currentUser && currentUser.uid === item.authorId && (
            <button
              onClick={() => handleDelete(item.id)}
              className="mt-2 text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}