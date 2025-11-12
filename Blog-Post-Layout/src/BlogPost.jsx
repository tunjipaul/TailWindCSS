function BlogPost() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div
        className="w-full h-64 bg-center bg-cover rounded-lg object-cover"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/d4/00/c1/d400c149f56c008e4b74cb9fdabeff12.jpg')",
        }}
      ></div>

      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-2">
          The Shifting Dynamics of Nigerian Politics
        </h1>
        <p className="text-sm text-white/50">
          By Tunji Paul • Nov 12, 2025 • 5 min read
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="md:col-span-2 space-y-4">
          <p>
            Nigerian politics has always been a complex mix of ethnicity,
            ideology, and personal ambition — but in recent years, a noticeable
            shift has begun to emerge. Younger Nigerians, fueled by social media
            and civic awareness, are increasingly challenging the dominance of
            traditional political structures. The #EndSARS movement, for
            instance, showed that political engagement no longer depends solely
            on party affiliation but also on shared values and collective
            frustration. As citizens demand transparency and accountability, old
            power blocs are slowly adapting, realizing that political capital
            now hinges as much on credibility as on influence.
          </p>
          <p>
            At the same time, the rise of smaller parties and independent
            candidates reflects a growing desire for political alternatives.
            Many voters, disillusioned by decades of unfulfilled promises, now
            prioritize competence over patronage. Economic hardship, insecurity,
            and unemployment remain major challenges — but they have also become
            catalysts for renewed political discourse. Whether this awakening
            leads to lasting reform or gets absorbed by the existing system
            depends on how effectively new movements translate social energy
            into structured political action. One thing is clear: Nigerian
            politics is evolving, and the next decade could redefine what
            leadership means in Africa's most populous democracy.
          </p>
        </div>

        <aside className="space-y-2">
          <h3 className="text-xl font-semibold">Related Posts</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                2027 Elections
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                The Influence of Social Media on Politics
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
               Leaders of Tomorrow: Youth in Nigerian Politics
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default BlogPost;
