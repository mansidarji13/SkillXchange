import {
  UserPlus,
  Search,
  MessageCircle,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Tell the community what you know, what you want to learn, and what interests you.",
  },
  {
    number: "02",
    icon: Search,
    title: "Find Your Match",
    description:
      "Our smart matching system finds people whose skills complement your learning goals.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Connect & Learn",
    description:
      "Send an exchange request, start a conversation, and plan your learning session.",
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Teach & Grow",
    description:
      "Share your knowledge, complete sessions, earn ratings, and grow together.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#f8f7fc] py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Simple. Smart. Social.
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How SkillXchange Works
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From discovering a skill to completing your first learning
            session, everything happens in one place.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">

                {/* Connector */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[calc(100%+8px)] top-14 hidden w-8 items-center lg:flex">
                    <ArrowRight
                      size={20}
                      className="text-violet-300"
                    />
                  </div>
                )}

                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50 sm:p-7">

                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <span className="text-sm font-bold text-violet-200">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;