import { useState } from "react";
import {
  User,
  MapPin,
  Mail,
  BookOpen,
  Star,
  Clock3,
  Edit3,
  Save,
  X,
  Plus,
  Trash2,
  CalendarDays,
  Monitor,
  CheckCircle2,
} from "lucide-react";
import StudentNavbar from "../components/StudentNavbar";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Mansi",
    role: "Learner",
    location: "Ahmedabad, India",
    email: "mansi@example.com",
    bio: "Curious learner who enjoys discovering new skills, sharing knowledge, and connecting with people through meaningful learning experiences.",
    teaches: ["Python", "Django", "React"],
    wantsToLearn: ["UI/UX Design", "Figma", "Graphic Design"],
    availability: "Weekends",
    learningMode: "Online",
  });

  const [newTeachSkill, setNewTeachSkill] = useState("");
  const [newLearnSkill, setNewLearnSkill] = useState("");

  const handleChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addTeachSkill = () => {
    const skill = newTeachSkill.trim();

    if (!skill || profile.teaches.includes(skill)) {
      return;
    }

    setProfile((prev) => ({
      ...prev,
      teaches: [...prev.teaches, skill],
    }));

    setNewTeachSkill("");
  };

  const addLearnSkill = () => {
    const skill = newLearnSkill.trim();

    if (!skill || profile.wantsToLearn.includes(skill)) {
      return;
    }

    setProfile((prev) => ({
      ...prev,
      wantsToLearn: [...prev.wantsToLearn, skill],
    }));

    setNewLearnSkill("");
  };

  const removeTeachSkill = (skill) => {
    setProfile((prev) => ({
      ...prev,
      teaches: prev.teaches.filter((item) => item !== skill),
    }));
  };

  const removeLearnSkill = (skill) => {
    setProfile((prev) => ({
      ...prev,
      wantsToLearn: prev.wantsToLearn.filter((item) => item !== skill),
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f7fc] text-slate-900">
      <StudentNavbar />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        {/* Page Heading */}
        <section>
          <p className="text-sm font-semibold text-violet-600">
            Student Profile
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Your Profile
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Manage your profile, skills, learning preferences, and
                availability.
              </p>
            </div>

            {/* Edit / Save / Cancel */}
            {!isEditing ? (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700"
              >
                <Edit3 size={17} />
                Edit Profile
              </button>
            ) : (
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  <X size={17} />
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700"
                >
                  <Save size={17} />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Profile Header */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Gradient Banner */}
          <div className="h-28 bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-600 sm:h-36" />

          <div className="px-5 pb-6 sm:px-8 sm:pb-8">
            <div className="-mt-12 flex flex-col gap-5 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">
              {/* Avatar + Basic Info */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border-4 border-white bg-gradient-to-br from-violet-500 to-fuchsia-500 text-3xl font-black text-white shadow-lg sm:h-28 sm:w-28 sm:text-4xl">
                  {profile.name.charAt(0).toUpperCase()}
                </div>

                <div className="pb-1">
                  <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
                    {profile.name}
                  </h2>

                  <p className="mt-1 font-medium text-violet-600">
                    {profile.role}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={15} />
                      {profile.location}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Mail size={15} />
                      {profile.email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 rounded-2xl bg-amber-50 px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-500">
                  <Star size={19} className="fill-amber-400" />
                </div>

                <div>
                  <p className="text-lg font-black text-slate-900">
                    4.8
                  </p>

                  <p className="text-xs text-slate-500">
                    Your Rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <BookOpen size={20} />
            </div>

            <p className="mt-4 text-2xl font-black">
              12
            </p>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Skills Learning
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-600">
              <Clock3 size={20} />
            </div>

            <p className="mt-4 text-2xl font-black">
              8
            </p>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Sessions Completed
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <CheckCircle2 size={20} />
            </div>

            <p className="mt-4 text-2xl font-black">
              7
            </p>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Exchanges Completed
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
              <Star size={20} />
            </div>

            <p className="mt-4 text-2xl font-black">
              4.8
            </p>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Average Rating
            </p>
          </div>
        </section>

        {/* Profile Information */}
        <section className="mt-6 grid gap-6 lg:grid-cols-5">
          {/* About */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-violet-600">
                  About You
                </p>

                <h2 className="mt-1 text-xl font-black text-slate-900">
                  Tell Others About Yourself
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <User size={19} />
              </div>
            </div>

            {isEditing ? (
              <textarea
                value={profile.bio}
                onChange={(e) =>
                  handleChange("bio", e.target.value)
                }
                rows={6}
                className="mt-6 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100"
                placeholder="Tell the SkillXchange community about yourself..."
              />
            ) : (
              <p className="mt-6 text-sm leading-7 text-slate-600">
                {profile.bio}
              </p>
            )}

            {/* Basic Details */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-violet-600">
                  <MapPin size={17} />

                  <span className="text-xs font-semibold">
                    Location
                  </span>
                </div>

                {isEditing ? (
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) =>
                      handleChange("location", e.target.value)
                    }
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                  />
                ) : (
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {profile.location}
                  </p>
                )}
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-violet-600">
                  <Mail size={17} />

                  <span className="text-xs font-semibold">
                    Email
                  </span>
                </div>

                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) =>
                      handleChange("email", e.target.value)
                    }
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                  />
                ) : (
                  <p className="mt-2 break-all text-sm font-semibold text-slate-800">
                    {profile.email}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
            <p className="text-sm font-semibold text-violet-600">
              Preferences
            </p>

            <h2 className="mt-1 text-xl font-black text-slate-900">
              Learning Preferences
            </h2>

            <div className="mt-6 space-y-4">
              {/* Availability */}
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                    <CalendarDays size={18} />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs text-slate-500">
                      Availability
                    </p>

                    {isEditing ? (
                      <select
                        value={profile.availability}
                        onChange={(e) =>
                          handleChange(
                            "availability",
                            e.target.value
                          )
                        }
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                      >
                        <option>Weekdays</option>
                        <option>Weekday evenings</option>
                        <option>Weekends</option>
                        <option>Flexible</option>
                      </select>
                    ) : (
                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        {profile.availability}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Learning Mode */}
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-600">
                    <Monitor size={18} />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs text-slate-500">
                      Learning Mode
                    </p>

                    {isEditing ? (
                      <select
                        value={profile.learningMode}
                        onChange={(e) =>
                          handleChange(
                            "learningMode",
                            e.target.value
                          )
                        }
                        className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                      >
                        <option>Online</option>
                        <option>In Person</option>
                        <option>Both</option>
                      </select>
                    ) : (
                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        {profile.learningMode}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Skills I Can Teach */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-violet-600">
                  Knowledge Sharing
                </p>

                <h2 className="mt-1 text-xl font-black text-slate-900">
                  Skills I Can Teach
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Skills you can share with other learners.
                </p>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <BookOpen size={19} />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.teaches.map((skill) => (
                <div
                  key={skill}
                  className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700"
                >
                  {skill}

                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => removeTeachSkill(skill)}
                      className="text-violet-400 transition hover:text-red-500"
                      aria-label={`Remove ${skill}`}
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {isEditing && (
              <div className="mt-5 flex gap-2">
                <input
                  type="text"
                  value={newTeachSkill}
                  onChange={(e) =>
                    setNewTeachSkill(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTeachSkill();
                    }
                  }}
                  placeholder="Add a skill..."
                  className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100"
                />

                <button
                  type="button"
                  onClick={addTeachSkill}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white transition hover:bg-violet-700"
                  aria-label="Add teaching skill"
                >
                  <Plus size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Skills I Want To Learn */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-fuchsia-600">
                  Personal Growth
                </p>

                <h2 className="mt-1 text-xl font-black text-slate-900">
                  Skills I Want To Learn
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Skills you're currently interested in learning.
                </p>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-600">
                <Star size={19} />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.wantsToLearn.map((skill) => (
                <div
                  key={skill}
                  className="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-4 py-2 text-sm font-semibold text-fuchsia-700"
                >
                  {skill}

                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => removeLearnSkill(skill)}
                      className="text-fuchsia-400 transition hover:text-red-500"
                      aria-label={`Remove ${skill}`}
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {isEditing && (
              <div className="mt-5 flex gap-2">
                <input
                  type="text"
                  value={newLearnSkill}
                  onChange={(e) =>
                    setNewLearnSkill(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addLearnSkill();
                    }
                  }}
                  placeholder="Add a skill..."
                  className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-fuchsia-400 focus:bg-white focus:ring-2 focus:ring-fuchsia-100"
                />

                <button
                  type="button"
                  onClick={addLearnSkill}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fuchsia-600 text-white transition hover:bg-fuchsia-700"
                  aria-label="Add learning skill"
                >
                  <Plus size={18} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Profile Tip */}
        <section className="mt-6 rounded-2xl bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-600 p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-violet-200">
                Make your profile stand out
              </p>

              <h2 className="mt-2 text-2xl font-black">
                A complete profile helps you find better matches.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-violet-100">
                Add the skills you can teach and the skills you want to
                learn so SkillXchange can recommend the right people for
                you.
              </p>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <CheckCircle2 size={26} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Profile;