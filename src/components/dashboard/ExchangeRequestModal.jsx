import { useState } from "react";
import {
  X,
  MessageCircle,
  Send,
  BookOpen,
  CheckCircle,
} from "lucide-react";

function ExchangeRequestModal({
  skill,
  isOpen,
  onClose,
}) {
  const [message, setMessage] = useState("");
  const [learningMode, setLearningMode] = useState("Online");
  const [requestSent, setRequestSent] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setRequestSent(true);
  };

  const handleClose = () => {
    setMessage("");
    setLearningMode("Online");
    setRequestSent(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm sm:p-6">
      <div
        className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="exchange-request-title"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close exchange request"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
        >
          <X size={19} />
        </button>

        {requestSent ? (
          /* Success State */
          <div className="px-6 py-12 text-center sm:px-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
              <CheckCircle size={32} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-slate-900">
              Request Sent!
            </h2>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Your exchange request has been sent to{" "}
              <span className="font-semibold text-slate-700">
                {skill.teacher}
              </span>
              .
            </p>

            <div className="mt-7 rounded-2xl bg-violet-50 p-4 text-left">
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                Skill Exchange
              </p>

              <p className="mt-2 font-bold text-slate-900">
                {skill.title}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                You offered: {skill.wantsToLearn}
              </p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="mt-7 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="border-b border-slate-100 px-6 py-6 pr-16 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <MessageCircle size={21} />
                </div>

                <div>
                  <h2
                    id="exchange-request-title"
                    className="text-lg font-bold text-slate-900 sm:text-xl"
                  >
                    Request Skill Exchange
                  </h2>

                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Send a learning request to {skill.teacher}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <form onSubmit={handleSubmit}>
              <div className="max-h-[70vh] overflow-y-auto px-6 py-6 sm:px-8">
                {/* Skill */}
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-bold text-white">
                      {skill.initials}
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">
                        You want to learn
                      </p>

                      <p className="mt-1 truncate font-bold text-slate-900">
                        {skill.title}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        from {skill.teacher}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Exchange Skill */}
                <div className="mt-6">
                  <label
                    htmlFor="exchange-skill"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Skill you can offer
                  </label>

                  <div className="mt-2 flex items-center gap-3 rounded-xl border border-violet-200 bg-violet-50 p-4">
                    <BookOpen
                      size={19}
                      className="shrink-0 text-violet-600"
                    />

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {skill.wantsToLearn}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Suggested based on their learning interest
                      </p>
                    </div>
                  </div>
                </div>

                {/* Learning Mode */}
                <div className="mt-6">
                  <label
                    htmlFor="learning-mode"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Preferred learning mode
                  </label>

                  <select
                    id="learning-mode"
                    value={learningMode}
                    onChange={(event) =>
                      setLearningMode(event.target.value)
                    }
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                  >
                    <option value="Online">Online</option>
                    <option value="In Person">In Person</option>
                    <option value="Either">Either</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label
                    htmlFor="exchange-message"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Message
                  </label>

                  <textarea
                    id="exchange-message"
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    rows={4}
                    placeholder={`Hi ${skill.teacher}, I'd love to learn ${skill.title} from you...`}
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700 outline-none placeholder:text-slate-400 transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                  />

                  <p className="mt-2 text-xs text-slate-400">
                    Introduce yourself and explain what you'd like to
                    learn.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-100 bg-slate-50/70 px-6 py-4 sm:px-8">
                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 sm:w-auto"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 sm:w-auto"
                  >
                    <Send size={17} />
                    Send Request
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ExchangeRequestModal;