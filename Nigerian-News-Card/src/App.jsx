import NewsCard from "./NewsCard";

function App() {
  const newsArticles = [
    {
      category: "Politics",
      headline: "Violence Escalates in Northern Nigeria",
      excerpt:
        "Christians in northern Nigeria face deadly attacks, displacement, and rising tensions across communities.",
      author: "Tunji Paul",
      date: "Nov 10, 2025",
      readTime: "5 min read",
      image:
        "https://i.pinimg.com/736x/60/09/57/600957f2992cec05753e9a1310fb625b.jpg",
    },
    {
      category: "Sports",
      headline: "Super Eagles Triumph in African Cup",
      excerpt:
        "Nigeria's national football team secures a thrilling victory in the African Cup, delighting fans nationwide.",
      author: "Opeisa Johnson",
      date: "Nov 9, 2025",
      readTime: "4 min read",
      image:
        "https://i.pinimg.com/1200x/d3/84/0f/d3840f0ada27aab09a81b067eaf0d4cc.jpg",
    },
    {
      category: "Entertainment",
      headline: "Nollywood Star Wins International Award",
      excerpt:
        "A renowned Nigerian actor receives global recognition, highlighting the growing influence of Nollywood.",
      author: "Anika Micheal",
      date: "Nov 8, 2025",
      readTime: "3 min read",
      image:
        "https://i.pinimg.com/1200x/37/06/84/37068457089a846fd1a68dd1b60d913b.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-green-600">Nigerian News</h1>
      {newsArticles.map((article, index) => (
        <NewsCard key={index} {...article} />
      ))}
    </div>
  );
}

export default App;
