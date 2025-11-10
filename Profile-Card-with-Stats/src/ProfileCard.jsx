function ProfileCard() {
  return (
    <div className="w-80 bg-white rounded-xl shadow p-4">
      {/* header background with Nigerian flag colors */}
      <div className="h-20 bg-gradient-to-r from-green-600 via-white to-green-600 rounded-lg"></div>

      {/* avatar container */}
      <div className="flex justify-center -mt-10">
        <img
          src="https://res.cloudinary.com/dbadkovof/image/upload/v1762809833/otp_yy8ike.jpg"
          className="w-20 h-20 rounded-full bg-gray-300 border-4 border-white object-cover"
        />
      </div>

      {/* name, title and location */}
      <div className="text-center mt-2">
        <h2 className="text-lg font-semibold">Tunji Paul</h2>
        <p className="text-sm text-gray-600">AI Developer</p>
        <p className="text-xs text-gray-500">Ogun, Nigeria</p>
      </div>

      {/* stats section */}
      <div className="flex justify-between mt-4">
        {/* followers */}
        <div className="text-center">
          <h3 className="text-lg font-bold">1.2k</h3>
          <p className="text-xs text-gray-500">Followers</p>
        </div>

        {/* posts */}
        <div className="text-center">
          <h3 className="text-lg font-bold">340</h3>
          <p className="text-xs text-gray-500">Posts</p>
        </div>

        {/* likes */}
        <div className="text-center">
          <h3 className="text-lg font-bold">8.1k</h3>
          <p className="text-xs text-gray-500">Likes</p>
        </div>
      </div>

      {/* bio */}
      <p className="text-sm text-gray-700 mt-4">
        You can find me in the intersection of tech, politics and gospel music.
      </p>

      {/* follow button */}
      <button className="w-full bg-green-600 text-white py-2 rounded-lg mt-4">
        Follow
      </button>
    </div>
  );
}

export default ProfileCard;
