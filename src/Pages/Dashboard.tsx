import { useAppContext } from "../context/useAppContext";

function Dashboard() {
  const {posts,users}=useAppContext();

  const totalPosts = posts ? posts.length : 0;
  const totalUsers = users ? users.length : 0;  
  return (
    <>
      <h2 className="text-teal-300 font-semibold text-2xl mb-10">
        Welcome to Dashboard
      </h2>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border rounded-xl p-4">
          <h3 className="text-teal-300 font-semibold text-xl mb-5">
            Total Posts
          </h3>
          <p>{totalPosts}</p>
        </div>
        <div className="border rounded-xl p-4">
          <h3 className="text-teal-300 font-semibold text-xl mb-5">
            Total Users
          </h3>
          <p>{totalUsers}</p>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
