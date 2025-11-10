function NewsCard({
    category = "Politics",
    image,
    headline = "Sample Headline",
    excerpt = "This is a short excerpt of the news article. It gives a brief overview of the content.",
    author = "Author Name",
    date = "Nov 10, 2025",
    readTime = "3 min read",
}) {
    const categoryColors = {
        Politics: "bg-green-600 text-white",
        Sports: "bg-yellow-500 text-black",
        Entertainment: "bg-red-500 text-white",
    };

    return (
        <div className="max-w-md bg-white rounded-xl shadow overflow-hidden relative">
            {/* Category Badge */}
            <div
                className={`absolute mt-4 ml-4 px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[category] || "bg-gray-500 text-white"
                    }`}
            >
                {category}
            </div>

            {/* Featured Image */}
            <img
                src={image || "https://via.placeholder.com/400x200"}
                alt={headline}
                className="w-full h-90 object-cover"
            />

            {/* Content */}
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900 mb-2">{headline}</h2>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">{excerpt}</p>

                {/* Author and Meta */}
                <div className="flex justify-between items-center text-xs text-gray-500">
                    <div>
                        {author} · {date}
                    </div>
                    <div>{readTime}</div>
                </div>

                {/* Read More */}
                <a
                    href="#"
                    className="text-green-600 font-semibold text-sm mt-2 inline-block"
                >
                    Read more →
                </a>
            </div>
        </div>
    );
}

export default NewsCard;
