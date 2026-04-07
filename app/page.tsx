import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-sm z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              Your Name
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#introduction" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Introduction</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
              <a href="#hobbies" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Hobbies</a>
              <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Experience</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Introduction Section */}
      <section id="introduction" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/placeholder-avatar.jpg" // Replace with your photo
                alt="Your Photo"
                width={150}
                height={150}
                className="rounded-full mx-auto"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm Your Name
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Your Profession / Tagline
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Welcome to my personal website! I'm passionate about [your interests]. 
              This space showcases my work, hobbies, and professional journey. 
              Feel free to explore and get to know more about me.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Project Title 1
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Brief description of your project. What technologies did you use? 
                What was the goal?
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  Technology 1
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                  Technology 2
                </span>
              </div>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                View Project →
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Project Title 2
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Another project description. Highlight what makes this project special.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  Technology 3
                </span>
              </div>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                View Project →
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Project Title 3
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Description of your third project. Include any notable achievements.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">
                  Technology 4
                </span>
              </div>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Hobbies & Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Music
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I enjoy playing guitar and listening to various genres of music.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Reading
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Science fiction and technology books are my favorites.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="text-4xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Running
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I love going for runs in the park and participating in marathons.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Gaming
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Strategy games and RPGs are my go-to for relaxation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Experience
          </h2>
          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Job Title 1
                </h3>
                <span className="text-gray-600 dark:text-gray-400">
                  Company Name • 2020 - Present
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Description of your role and responsibilities. What did you accomplish?
                What skills did you develop?
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  Skill 1
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                  Skill 2
                </span>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Job Title 2
                </h3>
                <span className="text-gray-600 dark:text-gray-400">
                  Company Name • 2018 - 2020
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Another role description. Highlight key achievements and learnings.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  Skill 3
                </span>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Degree Name
                </h3>
                <span className="text-gray-600 dark:text-gray-400">
                  University Name • 2014 - 2018
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Your educational background and any relevant coursework or projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Your Name. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
