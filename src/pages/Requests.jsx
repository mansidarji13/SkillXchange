import { useState } from "react";
import {
  Check,
  X,
  Clock,
  Star,
  MessageCircle,
  ArrowRight,
  Inbox,
  Send,
} from "lucide-react";

const incomingRequests = [
  {
    id: 1,
    name: "Aarav Patel",
    initials: "AP",
    skill: "Python Programming",
    offeredSkill: "UI/UX Design",
    rating: "4.9",
    message:
      "Hi Mansi! I'd love to learn UI/UX Design from you. I can help you with Python and Django in return.",
    time: "2 hours ago",
  },
  {
    id: 2,
    name: "Riya Shah",
    initials: "RS",
    skill: "UI/UX Design",
    offeredSkill: "Python Programming",
    rating: "4.8",
    message:
      "I'd love to exchange skills with you. I can teach you UI/UX fundamentals and design systems.",
    time: "Yesterday",
  },
  {
    id: 3,
    name: "Dev Mehta",
    initials: "DM",
    skill: "React Development",
    offeredSkill: "Graphic Design",
    rating: "4.9",
    message:
      "Looking forward to learning graphic design while sharing my React development experience.",
    time: "2 days ago",
  },
];

const initialSentRequests = [
  {
    id: 4,
    name: "Karan Joshi",
    initials: "KJ",
    skill: "Graphic Design",
    offeredSkill: "Digital Marketing",
    status: "Pending",
    time: "Today",
  },
  {
    id: 5,
    name: "Neha Shah",
    initials: "NS",
    skill: "Digital Marketing",
    offeredSkill: "Web Development",
    status: "Accepted",
    time: "Yesterday",
  },
  {
    id: 6,
    name: "Ananya Patel",
    initials: "AP",
    skill: "Communication Skills",
    offeredSkill: "UI/UX Design",
    status: "Rejected",
    time: "3 days ago",
  },
];
import StudentNavbar from "../components/StudentNavbar";
function Requests() {
  const [activeTab, setActiveTab] = useState("incoming");
  const [requests, setRequests] = useState(incomingRequests);
  const [sentRequests] = useState(initialSentRequests);

  const [requestStatus, setRequestStatus] = useState({});

  const handleAccept = (id) => {
    setRequestStatus((previous) => ({
      ...previous,
      [id]: "Accepted",
    }));
  };

  const handleReject = (id) => {
    setRequestStatus((previous) => ({
      ...previous,
      [id]: "Rejected",
    }));
  };

  const visibleIncomingRequests = requests.filter(
    (request) => !requestStatus[request.id]
  );

  return (
    <div className="min-h-screen bg-[#f8f7fc] text-slate-900">
      <StudentNavbar />
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-violet-600">
                SkillXchange
              </p>

              <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Requests
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
                Manage your skill exchange requests and connect with
                other learners.
              </p>
            </div>

            {/* Request Summary */}
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Inbox size={20} />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Pending requests
                </p>

                <p className="text-lg font-bold text-slate-900">
                  {visibleIncomingRequests.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        {/* Tabs */}
        <div className="flex w-full rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm sm:w-fit">
          <button
            type="button"
            onClick={() => setActiveTab("incoming")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition sm:flex-none ${
              activeTab === "incoming"
                ? "bg-violet-600 text-white shadow-md shadow-violet-600/20"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <Inbox size={17} />
            Incoming
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${
                activeTab === "incoming"
                  ? "bg-white/20 text-white"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {visibleIncomingRequests.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("sent")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition sm:flex-none ${
              activeTab === "sent"
                ? "bg-violet-600 text-white shadow-md shadow-violet-600/20"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <Send size={17} />
            Sent
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${
                activeTab === "sent"
                  ? "bg-white/20 text-white"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {sentRequests.length}
            </span>
          </button>
        </div>

        {/* Incoming Requests */}
        {activeTab === "incoming" && (
          <section className="mt-8">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Incoming Requests
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                People who want to exchange skills with you.
              </p>
            </div>

            {visibleIncomingRequests.length === 0 ? (
              <EmptyState
                icon={Inbox}
                title="No pending requests"
                description="You're all caught up! New skill exchange requests will appear here."
              />
            ) : (
              <div className="grid gap-5 lg:grid-cols-2">
                {visibleIncomingRequests.map((request) => (
                  <div
                    key={request.id}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:p-6"
                  >
                    {/* Person */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex min-w-0 items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-bold text-white">
                          {request.initials}
                        </div>

                        <div className="min-w-0">
                          <h3 className="truncate text-lg font-bold text-slate-900">
                            {request.name}
                          </h3>

                          <div className="mt-1 flex items-center gap-1.5">
                            <Star
                              size={15}
                              className="fill-amber-400 text-amber-400"
                            />

                            <span className="text-sm font-semibold text-slate-700">
                              {request.rating}
                            </span>

                            <span className="text-xs text-slate-400">
                              rating
                            </span>
                          </div>
                        </div>
                      </div>

                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock size={14} />
                        {request.time}
                      </span>
                    </div>

                    {/* Exchange */}
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl bg-violet-50 p-4">
                        <p className="text-xs font-semibold text-violet-600">
                          Wants to learn
                        </p>

                        <p className="mt-1.5 font-bold text-slate-900">
                          {request.skill}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-4">
                        <p className="text-xs font-semibold text-slate-500">
                          Can teach
                        </p>

                        <p className="mt-1.5 font-bold text-slate-900">
                          {request.offeredSkill}
                        </p>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                      <div className="flex gap-3">
                        <MessageCircle
                          size={18}
                          className="mt-0.5 shrink-0 text-violet-500"
                        />

                        <p className="text-sm leading-6 text-slate-600">
                          {request.message}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => handleAccept(request.id)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/15 transition hover:bg-violet-700"
                      >
                        <Check size={17} />
                        Accept Request
                      </button>

                      <button
                        type="button"
                        onClick={() => handleReject(request.id)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                      >
                        <X size={17} />
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Sent Requests */}
        {activeTab === "sent" && (
          <section className="mt-8">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Sent Requests
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Track the skill exchange requests you've sent.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {sentRequests.map((request) => (
                <SentRequestCard
                  key={request.id}
                  request={request}
                />
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-600 p-7 shadow-xl shadow-violet-600/10 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-violet-200">
                Keep learning
              </p>

              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Looking for another skill?
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-violet-100 sm:text-base">
                Browse the community and find someone who can teach
                you something new.
              </p>
            </div>

            <a
              href="/browse-skills"
              className="group flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-violet-700 transition hover:-translate-y-0.5 sm:w-auto"
            >
              Browse Skills
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

/* Sent request card */
function SentRequestCard({ request }) {
  const statusStyles = {
    Pending: "bg-amber-50 text-amber-700 border-amber-100",
    Accepted: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Rejected: "bg-red-50 text-red-700 border-red-100",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-bold text-white">
            {request.initials}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold text-slate-900">
              {request.name}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {request.time}
            </p>
          </div>
        </div>

        <span
          className={`w-fit rounded-full border px-3 py-1.5 text-xs font-semibold ${
            statusStyles[request.status]
          }`}
        >
          {request.status}
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-violet-50 p-4">
          <p className="text-xs font-semibold text-violet-600">
            You want to learn
          </p>

          <p className="mt-1.5 font-bold text-slate-900">
            {request.skill}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-500">
            You offered
          </p>

          <p className="mt-1.5 font-bold text-slate-900">
            {request.offeredSkill}
          </p>
        </div>
      </div>

      {request.status === "Accepted" && (
        <button
          type="button"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
        >
          <MessageCircle size={17} />
          Start Conversation
        </button>
      )}

      {request.status === "Pending" && (
        <div className="mt-5 flex items-center gap-2 rounded-xl bg-amber-50 p-3 text-xs font-medium text-amber-700">
          <Clock size={16} />
          Waiting for their response.
        </div>
      )}

      {request.status === "Rejected" && (
        <div className="mt-5 flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs font-medium text-red-600">
          <X size={16} />
          This request was declined.
        </div>
      )}
    </div>
  );
}

/* Empty state */
function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
        <Icon size={25} />
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
        {description}
      </p>

      <a
        href="/browse-skills"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
      >
        Browse Skills
        <ArrowRight size={17} />
      </a>
    </div>
  );
}

export default Requests;