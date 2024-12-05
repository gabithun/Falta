import { useAuth } from '../contexts/AuthContext';
import NewsForm from '../components/NewsForm';
import NewsList from '../components/NewsList';

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome, {currentUser.email}</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Post a New Story</h2>
        <NewsForm />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Recent Stories</h2>
        <NewsList />
      </div>
    </div>
  );
}