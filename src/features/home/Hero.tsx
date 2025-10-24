import { Button } from "../../components/Button";
import avatar from "../../assets/avatar.jpg";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-tr
                  from-indigo-500/20 via-fuchsia-500/20 to-emerald-500/20 blur-3xl"
      />
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient blob */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)",
              animation: "pulse 4s ease-in-out infinite",
            }}
          />
        </div>

        <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Avatar/Initials Circle */}
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                <img
                  src={avatar}
                  alt="MK"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500 to-purple-600 opacity-20 blur-xl scale-110" />
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Mesfin Kenaw
            </h1>

            {/* Role */}
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Software Developer
            </h2>

            {/* Bio */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I build elegant web applications, work with data, and explore AI.
              Passionate about creating meaningful digital experiences that make
              a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="/projects"
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>
              <Button
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
