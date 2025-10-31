import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axiosInstance from "./utils/axiosInstance";

// Assets
import logo from "./assets/alcher-logo2.svg";
import headerImage from "./assets/group-dance.svg";
import guidelinesFrame from "./assets/guidelines-frame.svg";
import bgPattern from "./assets/background-pattern.svg";
import RegisterIcon from "./assets/register-icon.svg";
//import compForm from "./assets/comp-form.svg";
import flower from "./assets/flower.svg";
import DecoratedButton from "./components/AuthPage/DecoratedButton";

const RegisterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [competition, setCompetition] = useState(null);

  const [formData, setFormData] = useState({
    teamVideo: "",
    description: "",
  });

  const [teamMembers, setTeamMembers] = useState([]);
  const [availableMembers, setAvailableMembers] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [guidelinesOpen, setGuidelinesOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openindex, setOpenindex] = useState([]);

  const handleTabClickFromDropdown = (tabIndex) => {
    setOpenindex([tabIndex]);
    console.log(tabIndex);
    navigate("/profile", { state: { tabIndex } });
  };

  // ✅ Fixed: Proper fetching of competition data
  useEffect(() => {
    const fetchCompetition = async () => {
      try {
        const res = await axiosInstance.get(`/api/competitions/${id}/`);
        setCompetition(res.data);
      } catch (err) {
        console.error("Error fetching competition:", err);
      }
    };
    fetchCompetition();
  }, [id]);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  // ✅ Fixed: Prevent duplicates, limit 10 members
  const handleAddMember = (member) => {
    if (!teamMembers.includes(member) && teamMembers.length < 10) {
      setTeamMembers((p) => [...p, member]);
    }
    setDropdownOpen(false);
  };

  const removeMember = (member) =>
    setTeamMembers((p) => p.filter((m) => m !== member));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const finalData = {
      competition_id: id,
      team_members: teamMembers,
      team_video: formData.teamVideo,
      description: formData.description,
    };

    try {
      const response = await axiosInstance.post(
        "/api/register-competition/",
        finalData
      );
      const data = response.data;

      const stored =
        JSON.parse(localStorage.getItem("registeredCompetitions") || "[]") || [];
      const newEntry = {
        id,
        team_members: teamMembers,
        comp_image_url: competition?.image,
        team_video: formData.teamVideo,
        description: formData.description,
        registered_at: new Date().toISOString(),
      };
      localStorage.setItem(
        "registeredCompetitions",
        JSON.stringify([...stored, newEntry])
      );

      navigate("/profile", { state: { tabIndex: 2 } });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fixed: Properly fetching participant names
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axiosInstance.get("/Participantdata/Participant/");
        const data = res.data;
        setAvailableMembers(data.map((member) => member.name));
      } catch (err) {
        console.error("Error fetching members:", err);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: "#151515",
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        <img src={logo} alt="logo" className="h-10 w-auto" />
      </div>

      {/* Header Image */}
      <div className="flex justify-center">
        <div className="relative w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] max-w-screen-xl">
          <img
            src={headerImage}
            alt="header"
            className="w-full h-56 sm:h-64 md:h-72 object-cover object-top"
          />
        </div>
      </div>

      {/* Cream Section */}
      <div className="bg-[#FFF8E7] text-black flex justify-center pb-10 sm:pb-12 md:pb-20 -mt-[1px] mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] max-w-screen-xl">
        <div className="w-full px-6 py-8 md:px-10 lg:px-14 relative">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
            <div>
              <div className="flex items-center justify-center gap-4 mt-8 w-full">
                <img
                  src={flower}
                  alt="left flower"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />

                <h2 className="text-[#171717] text-center font-display text-[2.625rem] font-bold leading-normal capitalize">
                  {competition?.event_name || "Competition Name"}
                </h2>

                <img
                  src={flower}
                  alt="right flower"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain ml-[calc(0.3rem+0.1ch*var(--name-length,10))]"
                  style={{
                    "--name-length": competition?.event_name?.length || 10,
                  }}
                />
              </div>

              {competition?.event_module && (
                <h3 className="text-[#171717] text-center font-display text-[2rem] font-medium capitalize leading-normal mt-2">
                  {competition?.event_module}
                </h3>
              )}

              <div className="flex items-center gap-8 mt-3">
                <span className="text-[#171717] text-center font-sans text-[1.25rem] font-medium capitalize">
                  {competition?.solo_or_group || "N/A"}
                </span>
                <span className="text-[#171717] text-center font-sans text-[1.25rem] font-medium leading-normal capitalize">
                  {competition?.event_mode === "true" ? "Online" : "Offline"}
                </span>
              </div>
            </div>

            {/* ✅ Guidelines Popup Fixed */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setGuidelinesOpen(!guidelinesOpen)}
                className="w-32 h-12 bg-transparent"
              >
                <img
                  src={guidelinesFrame}
                  alt="guidelines"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
                />
              </button>

              {guidelinesOpen && (
                <div className="absolute right-0 top-full mt-3 z-40">
                  <div className="flex flex-col items-center">
                    <div className="bg-black w-[21rem] h-[1rem]" />
                    <div className="bg-black w-[23rem] h-[1rem]" />
                    <div
                      className="bg-black text-white w-[25.375rem] p-5 shadow-[0_0_25px_rgba(247,155,43,0.45)] overflow-y-auto"
                      style={{ maxHeight: "70vh" }}
                    >
                      <p className="text-center text-lg font-semibold text-[#f79b2b] mb-3">
                        Competition Guidelines
                      </p>
                      <div className="text-[#e5e5e5] text-sm whitespace-pre-line leading-relaxed overflow-y-auto max-h-[55vh] scrollbar-thin scrollbar-thumb-[#f79b2b]/70 scrollbar-track-[#1a1a1a]">
                        {competition?.event_rules || "No rules provided."}
                      </div>
                      <div className="mt-5 flex justify-center">
                        <DecoratedButton
                          className="bg-[#f79b2b] hover:bg-[#f58e1f] text-black font-semibold px-6 py-2 rounded-md transition-colors duration-200"
                          onClick={() => setGuidelinesOpen(false)}
                        >
                          Agree
                        </DecoratedButton>
                      </div>
                    </div>
                    <div className="bg-black w-[23rem] h-[1rem]" />
                    <div className="bg-black w-[21rem] h-[1rem]" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-[#171717] font-sans text-[1rem] leading-[1.6875rem] capitalize mb-8">
            {competition?.event_desc}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 max-w-3xl">
            <div>
              <label className="text-[#171717] font-sans text-[1.125rem] font-normal">
                Add Members (Min 1 - Max 10)
              </label>

              <div className="flex flex-wrap gap-2 mb-3">
                {teamMembers.length === 0 && (
                  <span className="text-sm text-gray-500">
                    No members added yet
                  </span>
                )}
                {teamMembers.map((member) => (
                  <div
                    key={member}
                    className="bg-[#FFE8CF] text-sm px-3 py-1 rounded flex items-center gap-2"
                  >
                    <span className="text-[#5a3a14]">{member}</span>
                    <button
                      type="button"
                      onClick={() => removeMember(member)}
                      className="text-red-600 hover:text-red-800"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {/* ✅ Fixed dropdown key and mapping */}
              <div className="relative inline-block">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 bg-[#f79b2b] hover:bg-[#f58e1f] text-black px-3 py-2 rounded font-medium"
                >
                  + <span className="text-sm">Add Member</span>
                </button>

                {dropdownOpen && (
                  <div className="absolute mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg max-h-48 overflow-y-auto z-30">
                    {availableMembers.length === 0 && (
                      <div className="px-3 py-2 text-sm text-gray-500">
                        No members available
                      </div>
                    )}
                    {availableMembers.map((member) => (
                      <div
                        key={member}
                        onClick={() => handleAddMember(member)}
                        className="px-3 py-2 hover:bg-[#fffaef] cursor-pointer text-sm"
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="text-[#171717] font-sans text-[1.125rem]">
                Previous Performance
              </label>
              <input
                type="url"
                name="teamVideo"
                value={formData.teamVideo}
                onChange={handleChange}
                placeholder="Enter Link"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#f5a24c]"
              />
            </div>

            <div>
              <label className="text-[#171717] font-sans text-[1.125rem]">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write a suitable caption explaining your performance..."
                rows="3"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#f5a24c]"
              />
            </div>

            <p className="text-black font-sans text-[1rem] leading-[1.4rem]">
              Note: Our team will review your entry. Once approved, you will be
              notified via email and SMS.
            </p>

            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            {/* Register Button */}
            <div className="mt-4 flex items-center justify-start">
              <DecoratedButton
                type="submit"
                disabled={loading}
                className={`transition-all inline-flex items-center ${
                  loading
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:scale-105 cursor-pointer"
                }`}
              >
               Register
              </DecoratedButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
